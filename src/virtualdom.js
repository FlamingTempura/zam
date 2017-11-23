import config from './config';
import { parse, evaluate } from './expression';

const cloneAttribute = attr => ({ name: attr.name, value: attr.value });

const execBinds = (vnode, method, scope) => {
	vnode.binds.forEach(bind => execBind(vnode, method, bind));
	vnode.children.forEach(vnode => vnode[method + 'Binds'](scope));
};

const execBind = (vnode, method, bind) => {
	if (!bind.directive[method]) { return; }
	if (method === 'initialize') {
		bind.directive[method].call(bind, vnode.node, ...bind.args);
	} else {
		bind.directive[method].call(bind, vnode.scope, vnode.node, ...bind.args);
	}
};

const virtualdom = (node, source, override) => {
	if (node instanceof VirtualNode) {
		return node;
	} else if (typeof node === 'string') { // selector
		node = document.querySelector(node);
	} else if (node.jquery) { // jquery element
		node = node[0];
	}
	return new VirtualNode(node, source, override);
};

let id = 0;

class VirtualNode {
	constructor(node, source, override = false) {
		this.__id = ++id;
		this.node = node;
		this.children = [];
		this.binds = [];
		this.type = node.nodeType;

		if (node.vnode && !source) {
			//log('vnode.create - already a vnode for this node');
			if (override) {
				this.parent = node.vnode;
				node.vnode = this;
				this.type = this.parent.type;
				this.children = this.parent.children;
				this.binds = this.parent.binds;
				this.parent.children = [];
				this.parent.binds = [];
			} else {
				//log('vnode.create - make pointer');
				node.vnode.parent = this;
				this.pointer = node.vnode;
			}
		} else if (source) {
			node.vnode = this;
			this.blocked = source.blocked;
			this.type = source.type;
			source.binds.forEach(({ directive, args }) => this.bindDirective(directive, ...args));
			if (source.attributes) {
				this.attributes = source.attributes.map(cloneAttribute);
				this.removedAttrs = source.removedAttrs.map(cloneAttribute);
			}
			let childNodes = Array.from(node.childNodes).filter(cnode => cnode.nodeType === 1 || cnode.nodeType === 3);
			if (node.childNodes.length < source.children.length) {
				console.log(node.childNodes.length + '<' + source.children.length + '!', this.node.outerHTML || this.node.nodeValue)
			}
			source.children.forEach(vnode => {
				//if (!vnode.fragment && childNodes.length === 0) { return; }
				console.log(vnode.node.outerHTML || vnode.node.nodeValue, '-->', vnode.fragment ? node.outerHTML || node.nodeValue : childNodes[0])
				this.children.push(virtualdom(vnode.fragment ? node : childNodes.shift(), vnode));
			});
		} else {
			node.vnode = this;
			this.initialize();
		}
	}
	initialize() {
		let node = this.node;
		this.type = node.nodeType; // 1 = ELEMENT_NODE, 3 = TEXT_NODE
		if (this.type === 1) {
			this.tag = node.tagName;
			this.attributes = Array.from(node.attributes).map(cloneAttribute);
			this.removedAttrs = [];
			config.directives.forEach(directive => {
				let tagMatch = this.tag.match(new RegExp(`^${directive.tagQuery.replace('{prefix}', config.prefix)}$`, 'i')),
					isMatch = tagMatch;
				while (isMatch) { // multiple instances of a directive can used on an element
					if (this.blocked) { break; }

					let attrMatches = directive.attributeQueries.map(attrQ => {
						if (!isMatch) { return; }
						let attrPattern = attrQ.name.replace('{prefix}', config.prefix),
							match;
						this.attributes.find(attr => {
							match = attr.name.match(new RegExp(`^${attrPattern}$`, 'i'));
							return match;
						});
						if (match) {
							return { name: match[0], match: match.slice(1) };
						} else if (attrQ.defaultValue) {
							return { name: attrPattern, ast: attrQ.defaultValue, default: true };
						}
						isMatch = false;
					});
					
					if (!isMatch) { break; }

					let tag = { name: tagMatch[0], match: tagMatch.slice(1) },
						attributes = attrMatches.map(match => {
							if (!match.default) {
								let attr = this.attributes.find(attr => attr.name === match.name);
								match.ast = parse(attr.value || 'undefined');
								this.attributes.splice(this.attributes.indexOf(attr), 1);
								this.removedAttrs.push(cloneAttribute(attr));
								node.removeAttribute(match.name);
							}
							return match;
						});

					this.bindDirective(directive, tag, ...attributes);

					if (attrMatches.length === 0) { break; } // do not allow the tag to be matched alone again (prevents infinite loops)
				}

			});
			
			if (!this.blocked && node.childNodes) {
				Array.from(node.childNodes)
					.filter(node => node.nodeType === 1 || node.nodeType === 3)
					.map(node => this.children.push(virtualdom(node)));
			}
		} else

		if (this.type === 3 && node.nodeValue.includes('{{')) {
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
					this.bindDirective(config.inlineParser, null, {
						match: [parts[0].html ? 'html' : 'text'],
						ast: parts[0].expression
					});
				}
			} else {
				let fragment = document.createDocumentFragment();
				this.fragment = true;
				parts.forEach(part => {
					let newNode = typeof part === 'string' ? document.createTextNode(part) :
					              part.html ? document.createElement('span') :
					              document.createTextNode(''),
						newVNode = virtualdom(newNode);
					if (typeof part !== 'string') {
						newVNode.bindDirective(config.inlineParser, null, {
							match: [part.html ? 'html' : 'text'],
							ast: part.expression
						});
					}
					fragment.appendChild(newNode);
					this.children.push(newVNode);
				});
				node.parentNode.replaceChild(fragment, node);
			}
		}
	}
	bindDirective(directive, ...args) {
		args = args.map(arg => {
			arg = Object.assign({}, arg);
			arg.value = () => evaluate(arg.ast, this.scope).value;
			return arg;
		});
		let binding = { directive, args };
		if (directive.block) {
			this.blocked = true;  // stop looking for more attributes
		}
		if (directive.template) {
			let vnode = directive.template.clone();
			Array.from(this.node.attributes).map(attr => {
				vnode.node.setAttribute(attr.name, attr.value); // copy over attributes
			});
			this.originalNode = this.node;
			if (this.node.parentNode) {
				this.node.parentNode.replaceChild(vnode.node, this.node);
			}
			this.node = vnode.node;
			this.node.vnode = this;
			this.binds = this.binds.concat(vnode.binds);
			this.type = vnode.type;
			this.children = vnode.children;
		}
		this.binds.push(binding);
		execBind(this, 'initialize', binding);
	}
	clone() {
		return virtualdom(this.node.cloneNode(true), this);
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
		execBinds(this, 'destroy');
		if (this.removedAttrs) {
			this.removedAttrs.forEach(attr => this.node.setAttribute(attr.name, attr.value)); // restore attributes
		}
	}
}

export default virtualdom;
