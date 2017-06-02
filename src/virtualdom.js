/* jshint node: true, browser: true, esversion: 6, unused: true */
'use strict';

import createDirective from './directive';
import { parse, evaluate } from './expression';
import { log, pick } from './utils';

const cloneAttribute = attr => pick(attr, 'name', 'value');

const execBinds = (vnode, method, scope) => {
	vnode.binds.forEach(bind => execBind(vnode, method, bind));
	vnode.children.forEach(vnode => vnode[method + 'Binds'](scope));
};

const execBind = (vnode, method, bind) => {
	if (!bind.directive[method]) { return; }
	const val = (ast = bind.ast) => evaluate(ast, vnode.scope).value; // evaluate expression (expression in attribute value by default)
	const args = method === 'initialize' ? [vnode.node, ...bind.args] : [vnode.scope, vnode.node, val, ...bind.args];
	bind.directive[method].apply(bind, args);
};

const createVNode = (node, template, override) => {
	if (node instanceof VirtualNode) {
		return node;
	} else if (typeof node === 'string') { // selector
		node = document.querySelector(node);
	} else if (node[0]) { // jquery element
		node = node[0];
	}
	return new VirtualNode(node, template, override);
};

class VirtualNode {
	constructor(node, template, override = false) {
		log('vnode.create', node.outerHTML || node.textContent);
		this.node = node;
		this.type = node.nodeType; // 1 = ELEMENT_NODE, 3 = TEXT_NODE
		this.children = [];
		this.binds = [];

		if (node.vnode && !template) {
			if (override) {
				this.parent = node.vnode;
				node.vnode = this;
				this.children = this.parent.children;
				this.binds = this.parent.binds;
				this.parent.children = [];
				this.parent.binds = [];
			} else {
				node.vnode.parent = this;
				this.pointer = node.vnode;
			}
		} else if (template) {
			node.vnode = this;
			this.blocked = template.blocked;
			template.binds.forEach(bind => this.bind(pick(bind, 'ast', 'directive', 'args', 'key', 'template')));
			if (template.tagName) { this.tag = template.tagName; }
			if (template.attributes) {
				this.attributes = template.attributes.map(cloneAttribute);
				this.removedAttrs = template.removedAttrs.map(cloneAttribute);
			}
			if (template.children) {
				let childNodes = Array.from(node.childNodes).filter(cnode => cnode.nodeType === 1 || cnode.nodeType === 3);
				template.children.forEach(vnode => {
					this.children.push(createVNode(vnode.fragment ? node : childNodes.shift(), vnode));
				});
			}
		} else {
			node.vnode = this;
			this.initialize();
		}
	}
	initialize() {
		log('vnode.init');
		let node = this.node;
		
		if (this.type === 1) {
			this.tag = node.tagName;
			this.attributes = Array.from(node.attributes).map(cloneAttribute);
			this.removedAttrs = [];

			createDirective.directives.forEach(directive => {
				if (this.blocked) { return; }
				if (directive.tag) {
					let args = this.tag.match(new RegExp('^'+ directive.tag.replace('{prefix}', createDirective.prefix) + '$', 'i'));
					if (args) {
						this.bind({ directive, args });
					}
				} else 
				if (directive.attribute) {
					this.attributes = this.attributes.filter(attr => {
						if (this.blocked) { return; }
						let args = attr.name.match(new RegExp('^'+ directive.attribute.replace('{prefix}', createDirective.prefix) + '$', 'i'));
						if (!args) { return true; }
						let ast = parse(attr.value || 'undefined');
						this.removedAttrs.push(cloneAttribute(attr));
						node.removeAttribute(attr.name);
						this.bind({ directive, ast, args });
					});
				}
			});
			
			if (!this.blocked && node.childNodes) {
				log('vnode.children', node.childNodes.length);
				 Array.from(node.childNodes)
					.filter(node => node.nodeType === 1 || node.nodeType === 3)
					.map(node => this.children.push(createVNode(node)));
			}
		} else

		if (this.type === 3 && node.nodeValue.indexOf('{{') > -1) {
			let parts = parse(node.nodeValue, 'Text');
			if (parts.length === 1) {
				if (typeof parts[0] !== 'string') {
					if (parts[0].html) {
						let oldNode = node;
						node = this.node = document.createElement('span');
						oldNode.parentNode.replaceChild(node, oldNode);
					} else {
						node.textContent = '';
					}
					this.bind({
						directive: createDirective.inlineParser,
						ast: parts[0].expression,
						args: ['', parts[0].html ? 'html' : 'text']
					});
				}
			} else {
				let fragment = document.createDocumentFragment();
				this.fragment = true;
				parts.forEach(part => {
					let newNode = typeof part === 'string' ? document.createTextNode(part) :
					              part.html ? document.createElement('span') :
					              document.createTextNode(''),
						newVNode = createVNode(newNode);
					if (typeof part !== 'string') {
						newVNode.bind({
							directive: createDirective.inlineParser,
							ast: part.expression,
							args: ['', part.html ? 'html' : 'text']
						});
					}
					fragment.appendChild(newNode);
					this.children.push(newVNode);
				});
				node.parentNode.replaceChild(fragment, node);
			}
		}
	}
	bind(bind) {
		this.binds.push(bind);
		if (bind.directive.block) {
			this.blocked = true;  // stop looking for more attributes
		}
		if (bind.directive.template) {
			let node_ = document.createElement('span');
			node_.innerHTML = bind.directive.template;
			node_ = node_.childNodes[0]; // TODO warn if node_.childNodes > 0
			Array.from(this.attributes).forEach(attr => node_.setAttribute(attr.name, attr.value));
			this.node.parentNode.replaceChild(node_, this.node);
			this.node = node_;
			this.tag = node_.tagName; // TODO: possibly need to run through all directives again on new node?
		}
		execBind(this, 'initialize', bind);
	}
	clone() {
		log('vnode.clone');
		return createVNode(this.node.cloneNode(true), this);
	}
	createBinds(scope) {
		this.scope = scope;
		execBinds(this, 'create', scope);
	}
	updateBinds() {
		execBinds(this, 'update');
		if (this.pointer) { this.pointer.updateBinds(this.pointer.scope); }
	}
	destroyBinds() {
		log('vnode.destroy');
		execBinds(this, 'destroy');
		if (this.removedAttrs) {
			this.removedAttrs.forEach(attr => this.node.setAttribute(attr.name, attr.value)); // restore attributes
		}
		delete this.scope;
		delete this.node.vnode;
	}
}

export default createVNode;
