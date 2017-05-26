/* jshint node: true, browser: true, esversion: 6 */
'use strict';

import parser from './grammar.pegjs';
import { version } from '../package.json';
import { stringify, arrayRemove, hash, nextTick } from './utils';

const parse = (expr, startRule = 'Expression') => parser.parse(expr, { startRule }); // generates the abstract syntax tree

const standardAttributes = [
	'accept', 'accept-charset', 'accesskey', 'action', 'align', 'alt',
	'async', 'autocomplete', 'autofocus', 'autoplay', 'autosave',
	'buffered', 'challenge', 'charset', 'checked', 'cite', 'class',
	'code', 'codebase', 'cols', 'colspan', 'content', 'contenteditable',
	'contextmenu', 'controls', 'coords', 'crossorigin', 'data', 'data-*',
	'datetime', 'default', 'defer', 'dir', 'dirname', 'disabled', 'download',
	'draggable', 'dropzone', 'enctype', 'for', 'form', 'formaction', 'headers',
	'hidden', 'high', 'href', 'hreflang', 'http-equiv', 'icon', 'id',
	'integrity', 'ismap' ,'itemprop', 'keytype', 'kind', 'label', 'lang',
	'language', 'list', 'loop', 'low', 'manifest', 'max', 'maxlength',
	'minlength', 'media', 'method', 'min', 'multiple', 'muted', 'name',
	'novalidate', 'open', 'optimum', 'pattern', 'ping', 'placeholder', 'poster',
	'preload', 'radiogroup', 'readonly', 'rel', 'required', 'reversed', 'rows',
	'rowspan', 'sandbox', 'scope', 'scoped', 'seamless', 'selected', 'shape',
	'size', 'sizes', 'slot', 'span', 'spellcheck', 'src', 'srcdoc', 'srclang',
	'srcset', 'start', 'step', 'style', 'summary', 'tabindex', 'target', 'title',
	'type', 'usemap', 'value', 'wrap'];

const booleanAttributes = [
	'selected', 'checked', 'disabled', 'readonly', 'multiple', 'ismap', 'defer', 
	'noresize'];

const standardStyles = [
	'align-.*', 'all', 'animation', 'animation-.*', 'backface-visibility',
	'background', 'background-.*', 'border', 'border-.*', 'bottom', 'box-.*',
	'break-.*', 'caption-side', 'caret-color', 'clear', 'clip', 'clip-path',
	'color', 'column-.*', 'columns', 'content', 'counter-.*', 'cursor',
	'direction', 'display', 'empty-cells', 'filter', 'flex-.*', 'float', 'font',
	'font-.*', 'grid', 'grid-.*', 'height', 'hyphens', 'image-.*', 'ime-mode',
	'inline-size', 'isolation', 'justify-content', 'left', 'letter-spacing',
	'line-.*', 'list-.*', 'margin', 'margin-.*', 'mask', 'mask-.*', 'max-height',
	'max-width', 'min-block-size', 'min-height', 'min-inline-size', 'min-width',
	'mix-blend-mode', 'object-fit', 'object-position', 'offset-.*', 'opacity',
	'order', 'orphans', 'outline', 'outline-.*', 'overflow', 'overflow-.*',
	'padding', 'padding-.*', 'page-break-.*', 'perspective', 'perspective-origin',
	'pointer-events', 'position', 'quotes', 'resize', 'right', 'scroll-.*',
	'shape-.*', 'tab-size', 'table-layout', 'text-.*', 'top', 'touch-action',
	'transform', 'transform-.*', 'transition', 'transition-.*', 'unicode-bidi',
	'unset', 'vertical-align', 'visibility', 'white-space', 'widows', 'width',
	'will-change', 'word-.*', 'writing-mode', 'z-index'];

const standardEvents = [
	'load', 'error', 'focus', 'blur', 'click', 'dblclick',   'mouse.*',
	'keyup', 'keydown', 'keypress', 'input', 'change', 'submit', 'reset',
	'scroll', 'resize',  'drag.*', 'drop'];

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
var a = 0;
let id = 0;
const zam = (el, data, parent) => {
	el = typeof el === 'string' ? document.querySelector(el) : el[0] || el; // convert from string or jquery
	//console.log('[.] view(' + (id) + ').create')
	let vDOM = [], // virtual DOM
		events = {},
		watchers = [],
		deferringUpdate,
		deferUpdate = function () { // wait until end of execution cycle to update dom, and update only once
			if (deferringUpdate) { return; }
			nextTick(() => {
				//console.log('[b] view(' + view.$id + ').runUpdate()');
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
				//console.log('[c] view(' + view.$id + ').render()');
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
		watchers.forEach(watcher => {
			const val = evaluate(watcher.syntax, view).value;
			//console.log('WATCHER', val, watcher.val);
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
				//console.log('a', target, prop, target[prop])
				var q = Reflect.get(target, prop, receiver);
				//console.log(arguments);
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
				//console.log('[a] view(' + view.$id + ').update(' + prop + ',', value, ')', typeof value);
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

	return Object.assign(watchObj(view), data);
};

Object.assign(zam, {
	version, parse, evaluate,
	prefix: 'z-',
	directive(directive) {
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

const inlineParser = zam.directive({
	attribute: '{prefix}(text|html)',
	block: true,
	create(scope, el) {
		el.innerHTML = '';
	},
	update(scope, el, attr, type) {
		let value = stringify(this.eval());
		if (value !== this.prevValue) {
			if (type === 'html') {
				el.innerHTML = value;
			} else {
				el.textContent = value;
			}
			this.prevValue = value;
		}
	}
});

zam.directive({
	attribute: '{prefix}show',
	update(scope, el) {
		let value = this.eval() ? '' : 'none';
		if (value !== this.prevValue) {
			el.style.display = value;
			this.prevValue = value;
		}
	}
});

zam.directive({
	attribute: '{prefix}exist',
	order: 3,
	block: true, // this prevents wasting effort when element does not exist
	create(scope, el, attr) {
		this.marker = document.createComment(attr);
		el.parentNode.replaceChild(this.marker, el);
	},	
	update(scope, el) {
		let value = !!this.eval();
		//console.log('exist?')
		if (value !== this.prevValue) {
			if (value) {
				//console.log('EXIST')
				this.clone = el.cloneNode(true);
				this.childView = zam(this.clone, undefined, scope);
				this.marker.parentNode.insertBefore(this.clone, this.marker);
			} else if (this.clone) {
				//console.log('UNEXIST')
				this.marker.parentNode.removeChild(this.clone);
				this.childView.$destroy();
				delete this.childView;
			}
			this.prevValue = value;
		}
	}
});

zam.directive({
	attribute: '{prefix}(.+)-in',
	order: 2,
	block: true, // do not continue traversing through this dom element (separate zam will be created)
	create(scope, el, attr) {
		this.items = [];
		this.marker = document.createComment(attr);
		this.key = item => JSON.stringify(item); // TODO: allow specifying key
		el.parentNode.replaceChild(this.marker, el);
	},	
	update(scope, el, attr, varname) {
		let array = this.eval() || [],
			fragment = document.createDocumentFragment();
		//console.log('[d] in.update(' + this.items.length + ' to ' + array.length + ')');
		// remove old nodes
		this.items.forEach(item => {
			let exists = array.find(el => this.key(el) === this.key(item.data));
			if (!exists) {
				//console.log('[e] remove el');
				item.view.$destroy();
				this.marker.parentNode.removeChild(item.el);
				arrayRemove(this.items, item);
			}
		});
		// create new nodes / update existing nodes
		array.forEach(data => {
			let item = this.items.find(item_ => this.key(item_.data) === this.key(data));
			if (!item) {
				//console.log('******* DOUBLE NO ********', this.items, data)
				item = { el: el.cloneNode(true), data };
				this.items.push(item);
				fragment.appendChild(item.el);
			}
			// todo: sorting (this mean that markers of child directives (e.g. exist) fall out of place)
		});
		this.marker.parentNode.insertBefore(fragment, this.marker);

		// create any views (this needs to happen after dom insertion)
		this.items.forEach(item => {
			if (!item.view) {
				item.view = zam(item.el, { [varname]: item.data }, scope);
			}
		});
	}
});

zam.directive({
	attribute: '{prefix}(?:attr-(.+)|(' + standardAttributes.join('|') + '))',
	update(scope, el, attr, attribute, stdattribute) {
		attribute = attribute || stdattribute;
		let value = this.eval();
		if (value !== this.prevValue) {
			this.prevValue = value;
			if (booleanAttributes.indexOf(attribute) > -1) {
				value = value ? attribute : undefined;
			}
			if (typeof value === 'undefined') {
				el.removeAttribute(attribute);
			} else {
				el.setAttribute(attribute, value);
			}
		}
	}
});

zam.directive({
	attribute: '{prefix}class-(.+)',
	update(scope, el, attr, classname) {
		let value = !!this.eval();
		if (value !== this.prevValue) {
			this.prevValue = value;
			el.classList.toggle(classname, value);
		}
	}
});

zam.directive({
	attribute: '{prefix}(?:style-(.+)|(' + standardStyles.join('|') + '))',
	update(scope, el, attr, style, stdstyle) {
		let value = this.eval();
		if (value !== this.prevValue) {
			this.prevValue = value;
			el.style[style || stdstyle] = value;
		}
	}
});

zam.directive({
	attribute: '{prefix}model',
	block: true,
	create(scope, el) {
		let tag = el.tagName.toLowerCase(),
			inputType = (el.getAttribute('type') || '').toLowerCase();
		this.type = inputType === 'checkbox' ? 'checkbox' :
					tag === 'select' ? 'select' :
					inputType === 'radio' ? 'radio' :
					['range', 'number'].indexOf(inputType) > -1 ? 'number' :
					['date', 'datetime-local', 'time', 'month', 'week'].indexOf(inputType) > -1 ? 'date' :
					'text';
		if (this.type === 'radio' && !el.getAttribute('name')) {
			el.setAttribute('name', hash(scope.$id + JSON.stringify(this.syntax))); // group radios by their model and scope
		}
		this.getValue = option => {
			var valExpr = option.getAttribute('z-value');
			return valExpr ?
				this.eval(parse(valExpr)) :
				option.getAttribute('value');
		};
		this.handler = () => {
			if (this.type === 'radio' && !el.checked) { return; }
			let value = this.type === 'checkbox' ? !!el.checked :
						this.type === 'select' ? this.getValue(el.options[el.selectedIndex]) :
						this.type === 'radio' ? this.getValue(el) :
						this.type === 'number' ? Number(el.value) :
						this.type === 'date' ? el.valueAsDate :
						el.value;
			if (value !== this.prevValue) {
				this.prevValue = value;
				this.eval({ // evaluate "<expression> = <value>"
					type: 'Assignment',
					operator: '=',
					left: this.syntax,
					right: { type: 'Literal', value }
				});
				scope.$();
			}
		};
		el.addEventListener('input', this.handler);
		el.addEventListener('change', this.handler);
		if (this.type === 'select') {
			el.selectedIndex = -1; // select empty value
		}
	},
	update(scope, el) { // update dom
		let value = this.eval();
		if (value !== this.prevValue) {
			if (this.type === 'checkbox') {
				el.checked = !!value;
			} else if (this.type === 'select') {
				el.selectedIndex = Array.from(el.options).reduce((selected, option, i) => {
					let v = this.getValue(option);
					option.setAttribute('value', stringify(v));
					return v === value ? i : selected;
				}, -1);
			} else if (this.type === 'radio') {
				let v = this.getValue(el);
				el.checked = value === v;
				el.setAttribute('value', stringify(v));
			} else if (this.type === 'number') {
				el.value = Number(value);
			} else if (this.type === 'date') {
				el.valueAsDate = value;
			} else {
				el.value = stringify(value);
			}
			this.prevValue = value;
		}
	},
	destroy(scope, el) {
		el.removeEventListener('input', this.handler);
		el.removeEventListener('change', this.handler);
	}
});

zam.directive({
	attribute: '{prefix}(?:on-(.+)|(' + standardEvents.join('|') + '))',
	create(scope, el, attr, event, stdevent) {
		this.handler = event => {
			scope.$event = event;
			this.eval();
			delete scope.$event;
			//scope.$();
		};
		el.addEventListener(event || stdevent, this.handler);
	},
	destroy(scope, el, attr, event, stdevent) {
		el.removeEventListener(event || stdevent, this.handler);
	}
});

zam.directive({
	attribute: '{prefix}skip',
	order: 1,
	block: true
});

export default zam;