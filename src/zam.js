/* jshint node: true, browser: true, esversion: 6, unused: true */
'use strict';

import { stringify, arrayRemove, nextTick, parse } from './utils';
import { version } from '../package.json';

let inlineParser;

const traverseVDOM = (vDOM, callback) => {
	vDOM.forEach(element => {
		callback(element);
		traverseVDOM(element.children, callback);
	});
};

const evaluate = (syntax, scope) => {
	let value, set,
		{ type, operator } = syntax;

	if (type === 'Literal') { value = syntax.value; } else 

	if (type === 'Array') {
		value = syntax.elements.map(item => evaluate(item, scope).value);
	} else
	
	if (type === 'Object') {
		value = {};
		syntax.properties.forEach(prop => {
			value[prop.key] = evaluate(prop.value, scope).value;
		});
	} else

	if (type === 'Identifier') {
		let scope_ = scope;
		while (scope_) {
			if (typeof scope_[syntax.name] !== 'undefined') { break; }
			scope_ = scope_.$parent; // is data in parent scopes?
		}
		if (!scope_) { scope_ = scope; } // no? then just use current scope
		value = scope_[syntax.name];
		set = val => {
			scope_[syntax.name] = val;
			return val;
		};
	} else 

	if (type === 'Member') {
		let subject = evaluate(syntax.object, scope).value,
			prop = evaluate(syntax.property, scope).value;
		value = typeof subject !== 'undefined' ? subject[prop] : undefined;
		set = val => {
			subject[prop] = val;
			return val;
		};
	} else

	if (type === 'Conditional') {
		value = evaluate(syntax.test, scope).value ?
			evaluate(syntax.consequent, scope).value :
			evaluate(syntax.alternate, scope).value;
	} else 

	if (type === 'Unary' || type === 'Update') {
		let arg = evaluate(syntax.argument, scope),
			argv = arg.value;
		value = operator === '!' ? !argv :
		        operator === '+' ? +argv :
		        operator === '-' ? -argv :
		        operator === '++' ? argv + 1 :
		        operator === '--' ? argv - 1 : null;
		if (type === 'Update') {
			set = arg.set;
			if (set) { value = set(value); }
			if (!syntax.prefix) { value += operator === '++' ? -1 : 1; }
		}
	} else 

	if (type === 'Binary' || type === 'Logical' || type === 'Assignment') {
		let left  = evaluate(syntax.left, scope),
			leftv = left.value,
			rightv = evaluate(syntax.right, scope).value;
		value = operator === '===' ? leftv === rightv :
		        operator === '!==' ? leftv !== rightv :
		        operator === '=='  ? leftv ==  rightv :
		        operator === '!='  ? leftv !=  rightv :
		        operator === '<'   ? leftv <   rightv :
		        operator === '>'   ? leftv >   rightv :
		        operator === '<='  ? leftv <=  rightv :
		        operator === '>='  ? leftv >=  rightv :
		        operator === '&&'  ? leftv &&  rightv :
		        operator === '||'  ? leftv ||  rightv :
		        operator === '+'   ? typeof (leftv + rightv) === 'string' ? stringify(leftv) + stringify(rightv) : leftv + rightv : // avoids undefined + 'a' = 'undefineda'
		        operator === '-'   ? leftv -   rightv :
		        operator === '*'   ? leftv *   rightv :
		        operator === '/'   ? leftv /   rightv :
		        operator === '%'   ? leftv %   rightv :
		        operator === '*='  ? leftv *   rightv :
		        operator === '/='  ? leftv /   rightv :
		        operator === '%='  ? leftv %   rightv :
		        operator === '+='  ? leftv +   rightv :
		        operator === '-='  ? leftv -   rightv : 
		        operator === '='   ? rightv :  null;
		if (type === 'Assignment') {
			set = left.set;
			value = set(value);
		}
	} else 

	if (type === 'Call' || type === 'NewExpression') {
		let caller = syntax.callee.object ? evaluate(syntax.callee.object, scope).value : scope,
			callee = evaluate(syntax.callee, scope).value,
			args = syntax.arguments.map(arg_ => evaluate(arg_, scope).value);
		value = callee ? 
			type === 'Call' ? callee.apply(caller, args) : new (callee.bind.apply(callee, args))() :
			undefined;
	}

	return { value, set };
};

let directives = [];

const bindDirective = (directive, view, node, attrMatch, syntax) => {
	const bind = {
		view, // changes when bind is moved to another view
		node, // changes
		syntax,
		eval(syntax_ = syntax) { // evaluate expression (expression in attribute value by default)
			return evaluate(syntax_, bind.view).value;
		},
		exec(method) { // create, update, or destroy
			if (directive[method]) {
				directive[method].call(bind, bind.view, bind.node, ...attrMatch);
			}
		}
	};

	if (directive.template) {
		let node_ = document.createElement('span');
		node_.innerHTML = directive.template;
		// TODO warn if node_.childNodes > 0
		node_ = node_.childNodes[0];
		Array.from(node.attributes).forEach(attr => node_.setAttribute(attr.name, attr.value));
		node.parentNode.replaceChild(node_, node);
		bind.node = node_;
	}

	return bind;
};

const initBinds = (view, node, vDOM, parent) => {
	if ([1, 3].indexOf(node.nodeType) === -1) { return; } // 1 = ELEMENT_NODE, 3 = TEXT_NODE

	let vElement = node.vElement;
	if (vElement) { // this node already belongs to a view!
		if (!parent || vElement.view === view.$parent) { // does this node belong to a parent view, or is it the root?
			vDOM.push(vElement); // move the element and its children to this view
			traverseVDOM(vElement.children, child => child.binds.forEach(bind => bind.view = view)); // transfer all binds to this view
			if (vElement.parent) {
				arrayRemove(vElement.parent.children, vElement); // remove from parent
			} else { // if this node the root of a view then destroy the view
				//vElement.view.$destroy();
			}
		} else { // otherwise this node belongs to a child view
			vElement.view.$setParent(view); // set child's parent to this view
		}
		return; // skip because it's already bound
	}
	
	vElement = node.vElement = { view, parent, node, children: [], binds: [], removedAttrs: [] };
	vDOM.push(vElement);

	if (node.nodeType === 1) {
		let attrs = Array.from(node.attributes),
			blocked;
		vElement.binds = [];
		directives.forEach(directive => {
			if (directive.tag) {
				let match = node.tagName.match(new RegExp('^'+ directive.tag.replace('{prefix}', zam.prefix) + '$', 'i'));
				if (match) {
					let bind = bindDirective(directive, view, node, match);
					vElement.binds.push(bind);
					blocked = directive.block || directive.template;
					if (directive.template) {
						initBinds(view, bind.node, vElement.children);
					}
				}
			} else if (directive.attribute) {
				attrs = attrs.filter(attr => {
					if (blocked) { return; }
					let match = attr.name.match(new RegExp('^'+ directive.attribute.replace('{prefix}', zam.prefix) + '$', 'i'));
					if (match) {
						let syntax = parse(attr.value || 'undefined');
						vElement.removedAttrs.push({ name: attr.name, value: attr.value });
						node.removeAttribute(attr.name);
						let bind_ = bindDirective(directive, view, node, match, syntax);
						vElement.binds.push(bind_);
						blocked = directive.block || directive.template; // stop looking for more attributes
						if (directive.template) {
							initBinds(view, bind_.node, vElement.children);
						}
					}
					return !match;
				});
			}
		});
		
		if (!blocked) {
			Array.from(node.childNodes).forEach(childNode => {
				initBinds(view, childNode, vElement.children, vElement);
			});
		}
	} else

	if (node.nodeType === 3 && node.nodeValue.indexOf('{{') > -1) {
		let text = node.nodeValue;
		parse(text, 'Text').forEach(part => {
			let newNode;
			if (typeof part === 'string') {
				newNode = document.createTextNode(part);
			} else {
				newNode = part.html ? document.createElement('span') : document.createTextNode('');
				let bind = bindDirective(inlineParser, view, newNode, ['', part.html ? 'html' : 'text'], part.expression),
					vElement__ = Object.assign({}, vElement, { binds: [bind] });
				vDOM.push(vElement__);
				newNode.vElement = vElement__;
			}
			node.parentNode.insertBefore(newNode, node);
		});
		node.parentNode.removeChild(node);
	}
};


let id = 0;
const zam = (el, data, parent) => {
	el = typeof el === 'string' ? document.querySelector(el) : el[0] || el; // convert from string or jquery
	console.log('view#' + id + '.create');
	let vDOM = [], // virtual DOM
		events = {},
		watchers = [],
		deferringUpdate,
		deferUpdate = function () { // wait until end of execution cycle to update dom, and update only once
			console.log('view#' + view.$id + '.deferUpdate');
			if (deferringUpdate) { return; }
			console.log('view#' + view.$id + '.deferredUpdate');
			nextTick(() => {
				view.$();
				deferringUpdate = undefined;
			});
			deferringUpdate = true;
		},
		destroyed,
		view = {
			$id: id++,
			$vDOM: vDOM,
			$() { // update binds
				if (destroyed) { return; }
				console.log('view#' + view.$id + '.update');
				traverseVDOM(vDOM, el => el.binds.forEach(bind => bind.exec('update')));
				view.$emit('update');
			},
			$destroy() {
				traverseVDOM(vDOM, el => {
					el.binds.forEach(bind => bind.exec('destroy'));
					delete el.node.vElement;
					el.removedAttrs.forEach(attr => el.node.setAttribute(attr.name, attr.value)); // restore attributes
				});
				destroyed = true;
				view.$emit('destroy');
			},
			$on(event, cb) {
				if (!events[event]) { events[event] = []; }
				events[event].push(cb);
			},
			$off (event, cb) {
				if (events[event]) { arrayRemove(events[event], cb); }
			},
			$emit (event) {
				if (events[event]) { events[event].forEach(cb => cb()); }
			},
			$watch (expr, cb) {
				watchers.push({ expr: expr, syntax: parse(expr), cb: cb });
			},
			$unwatch (expr, cb) {
				const watcher = watchers.find(w => w.expr === expr && w.cb === cb);
				if (watcher) { arrayRemove(watchers, watcher); }
			},
			$setParent (newParent) {
				const oldParent = view.$parent;
				view.$parent = newParent;
				if (oldParent && oldParent.$off) { oldParent.$off('update', deferUpdate); }
				if (newParent.$on)               { newParent.$on ('update', deferUpdate); }
			}
		};
	
	view.$on('update', () => {
		console.log('view#' + view.$id + '.event.update');
		watchers.forEach(watcher => {
			const val = evaluate(watcher.syntax, view).value;
			if (val !== watcher.val) {
				watcher.val = val;
				watcher.cb(val);
			}
		});
	});
	view.$setParent(parent || (el.vElement && el.vElement.view) || zam.root);

	initBinds(view, el, vDOM); // traverse the dom
	traverseVDOM(vDOM, el => el.binds.forEach(bind => bind.exec('create')));

	var watchObj = function (obj, recurse) { // when something in the scope changes, update the view
		if (typeof obj !== 'object') { return obj; }

		var proxy = new Proxy(obj, {
			get(target, prop, receiver) {
				var q = Reflect.get(target, prop, receiver);
				if (!(target instanceof Array) && typeof q === 'function') {
					return q.bind(target); // this ensures things like Date.getDate work
				} else {
					return q;
				}
			},
			set(obj, prop, value, receiver) { 
				if (obj === view && prop.indexOf('$') === 0) {
					console.warn('Properties beginning with $ are reserved for zam');
				}
				console.log('view#' + view.$id + '.set: ' + prop + ' =', value);
				if (typeof value === 'object' && !(value instanceof Date)) { value = watchObj(value, true); } // TODO date should be proxied (if it works)
				deferUpdate();
				return Reflect.set(obj, prop, value, receiver);
			}
		});

		if (recurse) {
			if (obj instanceof Array) {
				obj.forEach((el, i) => proxy[i] = watchObj(el, true));
			} else {
				Object.keys(obj).forEach(k => proxy[k] = watchObj(obj[k], true));
			}
		}

		return proxy;
	};
	deferUpdate();
	Object.assign(view, data);
	return watchObj(view);
};

Object.assign(zam, {
	version, parse, evaluate,
	prefix: 'z-',
	directive(directive) {
		if (directive.inline) {
			inlineParser = directive;
		}
		if (directive.template) {
			directive.block = true;
			directive.order = 0.5;
		}
		if (!directive.order) { directive.order = 100; }
		directives.push(directive);
		directives.sort((a, b) => a.order - b.order);
		return directive;
	},
	root: {
		$parent: typeof global !== 'undefined' ? global : window,
		number: (num, dec = 2) => Number(num).toFixed(dec),
		percent: (num, dec = 2) => Number(num * 100).toFixed(dec) + '%'
	}
});

export default zam;