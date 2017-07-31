/* jshint node: true, browser: true, esversion: 6, unused: true */
'use strict';

import config from './config';
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
		this.children = [];
		this.binds = [];
		this.type = node.nodeType;

		if (node.vnode && !template) {
			log('vnode.create - already a vnode for this node');
			if (override) {
				log('vnode.create - override');
				this.parent = node.vnode;
				node.vnode = this;
				this.type = this.parent.type;
				this.children = this.parent.children;
				this.binds = this.parent.binds;
				this.parent.children = [];
				this.parent.binds = [];
			} else {
				log('vnode.create - make pointer');
				node.vnode.parent = this;
				this.pointer = node.vnode;
			}
		} else if (template) {
			node.vnode = this;
			this.blocked = template.blocked;
			this.type = template.type;
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
		let node = this.node;
		this.type = node.nodeType; // 1 = ELEMENT_NODE, 3 = TEXT_NODE
		log('vnode.init', this.outerHTML, node.nodeValue, this.type, node.nodeType);
		if (this.type === 1) {
			this.tag = node.tagName;
			this.attributes = Array.from(node.attributes).map(cloneAttribute);
			this.removedAttrs = [];
			var q = Math.ceil(Math.random() * 10000000)
			config.directives.forEach(directive => {
				if (this.blocked) { return; }
				if (directive.tag) {
					let args = this.tag.match(new RegExp('^'+ directive.tag.replace('{prefix}', config.prefix) + '$', 'i'));
					if (args) {
						this.bind({ directive, args });
					}
				} else 
				if (directive.attribute) {
					this.attributes = this.attributes.filter(attr => {
						if (this.blocked) { return; }
						let args = attr.name.match(new RegExp('^'+ directive.attribute.replace('{prefix}', config.prefix) + '$', 'i'));
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
						directive: config.inlineParser,
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
							directive: config.inlineParser,
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
		log('vnode.bind', bind.directive.attribute || bind.directive.tag);
		if (bind.directive.block) {
			this.blocked = true;  // stop looking for more attributes
		}
		if (bind.directive.template) {
			log('vnode.bind.template');
			//log(this.node.parentNode);
			let vnode = bind.directive.template.clone();
			//log('boo', node_)
			//node_.vnode = this;

			this.node.parentNode.replaceChild(vnode.node, this.node);
			this.node = vnode.node;
			this.node.vnode = this;
			log('boo', this.binds.length, this.children.length);
			this.binds = this.binds.concat(vnode.binds);
			this.type = vnode.type;
			this.children = vnode.children;
			//this.node = node_;
			//this.pointer = node_;
			//this.initialize();
		} else {
			this.binds.push(bind);
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
		//if (this.pointer) { this.pointer.createBinds(scope); }
	}
	updateBinds() {
		execBinds(this, 'update');
		if (this.pointer) { this.pointer.updateBinds(); }
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
