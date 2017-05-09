'use strict';

import parser from './grammar.pegjs';
import { version } from '../package.json';

var parse = parser.parse; // generates the abstract syntax tree

var toArray = function (nonarray) {
	return Array.prototype.slice.call(nonarray);
};

var stringify = function (value) {
	return String(value !== null && typeof value !== 'undefined' ? value : '');
};

var arrayRemove = function (array, element) {
	var i = array.indexOf(element);
	if (i > -1) { array.splice(i, 1); }
};

var findParentElement = function (elements, node) {
	var parent;
	elements.find(function (element) {
		var isParent = element.children.find(function (element_) {
			return element_.node === node;
		});
		parent = isParent ? element : findParentElement(element.children, node);
		return parent;
	});
	return parent;
};

var iterate = function (elementTree, callback) {
	elementTree.forEach(function (element) {
		callback(element);
		iterate(element.children, callback);
	});
};

var evaluate = function (syntax, scope) {
	var value, set,
		type = syntax.type,
		operator = syntax.operator;

	if (type === 'Literal') { value = syntax.value; } else 

	if (type === 'Array') {
		value = syntax.elements.map(function (item) {
			return evaluate(item, scope).value;
		});
	} else
	
	if (type === 'Object') {
		value = {};
		syntax.properties.forEach(function (prop) { value[prop.key] = evaluate(prop.value, scope).value; });
	} else

	if (type === 'Identifier') {
		var scope_ = scope;
		while (scope_) {
			if (typeof scope_[syntax.name] !== 'undefined') { break; }
			scope_ = scope_.$parent; // is data in parent scopes?
		}
		if (!scope_) { scope_ = scope; } // no? then just use current scope
		value = scope_[syntax.name];
		set = function (val) {
			scope_[syntax.name] = val;
			return val;
		};
	} else 

	if (type === 'Member') {
		var subject = evaluate(syntax.object, scope).value,
			prop = evaluate(syntax.property, scope).value;
		value = typeof subject !== 'undefined' ? subject[prop] : undefined;
		set = function (val) {
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
		var arg = evaluate(syntax.argument, scope),
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
		var left  = evaluate(syntax.left, scope),
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
		        operator === '+'   ? leftv +   rightv :
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
		var caller = syntax.callee.object ? evaluate(syntax.callee.object, scope).value : scope,
			callee = evaluate(syntax.callee, scope).value,
			args = syntax.arguments.map(function (arg_) {
				return evaluate(arg_, scope).value;
			});
		value = callee ? 
			type === 'Call' ? callee.apply(caller, args) : new (callee.bind.apply(callee, args))() :
			undefined;
	}

	return {
		value: value,
		set: set
	};
};

var directives = [];

var zam = function (el, parent) {
	el = typeof el === 'string' ? document.querySelector(el) : el[0] || el; // convert from string or jquery
	
	var component = {},
		elements = [];

	var updateElements = function (elements_) {
		elements_.forEach(function (element) {
			element.bindings.forEach(function (binding) {
				binding.update();
			});
			updateElements(element.children);
		});
	};

	component.$parent = parent || el.zam || zam.root;
	component.$elements = elements;
	component.$ = function () {
		updateElements(elements);
	};

	var bindDirective = function (directive, node, attrMatch, syntax) {
		var args = [node].concat(attrMatch);
		var binding = {
			component: component,
			syntax: syntax,
			eval: function (syntax_) { // evaluate expression (expression in attribute value by default)
				return evaluate(syntax_ || syntax, binding.component).value;
			},
			update: function () {
				if (directive.update) { directive.update.apply(binding, args); }
			},
			destroy: function () {
				if (directive.destroy) { directive.destroy.apply(binding, args); }
			}
		};
		
		if (directive.create) { directive.create.apply(binding, args); }

		return binding;
	};

	var initBindings = function (node, elementTree) {
		// nodeType: 1 = ELEMENT_NODE, 3 = TEXT_NODE
		if ([1, 3].indexOf(node.nodeType) === -1) { return; }

		if (node.zam) {
			//console.log('controlled')
			if (node.zam === component.$parent) { // is this controlled by the parent?				
				let parentElement = findParentElement(component.$parent.$elements, node),
					element = parentElement.children.find(function (element_) {
						return element_.node === node;
					});
				arrayRemove(parentElement.children, element); // move the element and its children to this component
				elementTree.push(element);
				iterate(element.children, function (child) {
					child.bindings.forEach(function (binding) {
						binding.component = component; // transfer each binding in each element to this component
					});
				});
			} else { // otherwise it's a child component
				node.zam.$parent = component; // set child's parent to this component
			}
			return; // skip because it's already bound
		}
		
		node.zam = component;
		var element = { node: node, children: [], bindings: [] };
		elementTree.push(element);
		elementTree = element.children;

		if (node.nodeType === 1) {
			let attrs = toArray(node.attributes),
				bindings = [],
				blocked;
			if (attrs.length > 0) {
				directives.forEach(function (directive) {
					if (directive.tag) {
						var match = node.tagName.match(new RegExp('^'+ directive.tag.replace('{prefix}', zam.prefix) + '$'));
						bindings.push(bindDirective(directive, node, match));
						blocked = directive.block;
					} else if (directive.attribute) {
						attrs = attrs.filter(function (attr) {
							if (blocked) { return; }
							var match = attr.name.match(new RegExp('^'+ directive.attribute.replace('{prefix}', zam.prefix) + '$'));
							if (match) {
								var syntax = parse(attr.value || 'undefined', { startRule: 'Expression' });
								node.removeAttribute(attr.name);
								bindings.push(bindDirective(directive, node, match, syntax));
								blocked = directive.block; // stop looking for more attributes
							}
							return !match;
						});
					}
				});
			}
			element.bindings = bindings;
			if (!blocked) {
				toArray(node.childNodes).forEach(function (childNode) {
					initBindings(childNode, elementTree);
				});
			}
		} else

		if (node.nodeType === 3 && node.nodeValue.indexOf('{{') > -1) {
			var text = node.nodeValue;
			parse(text, { startRule: 'Text' }).forEach(function (part) {
				var newNode;
				if (typeof part === 'string') {
					newNode = document.createTextNode(part);
				} else {
					newNode = part.html ? document.createElement('span') : document.createTextNode('');
					newNode.zam = component;
					var binding = bindDirective(inlineParser, newNode, ['', part.html ? 'html' : 'text'], part.expression);
					elementTree.push({ node: node, children: [], bindings: [binding] });
				}
				node.parentNode.insertBefore(newNode, node);
			});
			node.parentNode.removeChild(node);
		}

	};

	initBindings(el, elements); // traverse the dom

	return component;
};

zam.version = version;
zam.prefix = 'z-';
zam.parse = parse;
zam.evaluate = evaluate;
zam.directive = function (directive) {
	directives.push(directive);
	directives = directives.concat([directive]).sort(function (a, b) {
		return (a.order || 100) - (b.order || 100);
	});
	return directive;
};

zam.root = {};
zam.root.$parent = typeof global !== 'undefined' ? global : window;
zam.root.number = function (number, decimals) {
	return Number(number).toFixed(decimals || 2);
};
zam.root.percent = function (number, decimals) {
	return Number(number * 100).toFixed(decimals || 2) + '%';
};


var inlineParser = zam.directive({
	attribute: '{prefix}(text|html)',
	block: true,
	create: function (el) {
		el.innerHTML = '';
	},
	update: function (el, attr, type) {
		var value = stringify(this.eval());
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
	update: function (el) {
		var value = !!this.eval();
		if (value !== this.prevValue) {
			el.style.display = value ? '' : 'none';
			this.prevValue = value;
		}
	}
});

zam.directive({
	attribute: '{prefix}exist',
	order: 3,
	block: true, // this prevents wasting effort when element does not exist
	create: function (el, attr) {
		this.marker = document.createComment(attr);
		el.parentNode.insertBefore(this.marker, el);
		el.parentNode.removeChild(el);
	},	
	update: function (el) {
		var value = !!this.eval();
		if (value !== this.prevValue) {
			if (value) {
				this.clone = el.cloneNode(true);
				this.childComponent = zam(this.clone, this.component);
				this.marker.parentNode.insertBefore(this.clone, this.marker);
			} else if (this.clone) {
				this.marker.parentNode.removeChild(this.clone);
				// TODO: zam.destroy();
			}
			this.prevValue = value;
		}
		if (this.clone) {
			this.childComponent.$();
		}
	}
});

zam.directive({
	attribute: '{prefix}(.+)-in',
	order: 2,
	block: true, // do not continue traversing through this dom element (separate zam will be created)
	create: function (el, attr) {
		this.items = [];
		this.marker = document.createComment(attr);
		el.parentNode.insertBefore(this.marker, el);
		el.parentNode.removeChild(el);
	},	
	update: function (el, attr, varname) {
		var that = this,
			array = this.eval() || [];
		// remove old nodes
		that.items.forEach(function (item) {
			if (array.indexOf(item.data) === -1) {
				that.marker.parentNode.removeChild(item.el);
				// TODO: destroy zam
				arrayRemove(that.items, item);
			}
		});
		
		// create new nodes / update existing nodes
		array.forEach(function (data) {
			var item = that.items.find(function (item_) {
				return item_.data === data;
			});
			if (!item) {
				var clone = el.cloneNode(true);
				item = { el: clone, zam: zam(clone, that.component), data: data };
				item.zam[varname] = data;
				that.items.push(item);
			}
			item.zam.$();
			that.marker.parentNode.insertBefore(item.el, that.marker);
		});
	}
});

var standardAttributes = [
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
var booleanAttributes = [
	'selected', 'checked', 'disabled', 'readonly', 'multiple', 'ismap', 'defer', 
	'noresize'];
zam.directive({
	attribute: '{prefix}(?:attr-(.+)|(' + standardAttributes.join('|') + '))',
	update: function (el, attr, attribute, stdattribute) {
		attribute = attribute || stdattribute;
		var value = this.eval();
		if (booleanAttributes.indexOf(attribute) > -1) {
			value = value ? attribute : undefined;
		}
		if (typeof value === 'undefined') {
			el.removeAttribute(attribute);
		} else {
			el.setAttribute(attribute, value);
		}
	}
});

zam.directive({
	attribute: '{prefix}class-(.+)',
	update: function (el, attr, classname) {
		el.classList.toggle(classname, !!this.eval());
	}
});

var standardStyles = [
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
zam.directive({
	attribute: '{prefix}(?:style-(.+)|(' + standardStyles.join('|') + '))',
	update: function (el, attr, style, stdstyle) {
		el.style[style || stdstyle] = this.eval();
	}
});

zam.directive({
	attribute: '{prefix}model',
	block: true,
	create: function (el) {
		var that = this;
		this.handler = function () {
			if (el.value !== that.prevValue) {
				that.prevValue = el.value;
				that.eval({ type: 'Assignment', operator: '=', left: that.syntax, right: { type: 'Literal', value: el.value } }); // evaluate "<expression> = <value>"
				that.component.$();
			}
		};
		el.addEventListener('input', this.handler);
	},
	update: function (el) { // update dom
		var value = stringify(this.eval());
		if (value !== this.prevValue) {
			el.value = value;
			this.prevValue = value;
		}
	},
	destroy: function (el) {
		el.removeEventListener('input', this.handler);
	}
});

var standardEvents = [
	'load', 'error', 'focus', 'blur', 'click', 'dblclick',   'mousedown',
	'mousemove', 'mouseup', 'mouseenter', 'mouseleave', 'mouseover', 'mouseout',
	'keyup', 'keydown', 'keypress', 'input', 'change', 'submit', 'reset',
	'scroll', 'resize',  'dragstart', 'dragend', 'dragenter', 'dragover',
	'dragleave', 'drag', 'drop'];

zam.directive({
	attribute: '{prefix}(?:on-(.+)|(' + standardEvents.join('|') + '))',
	create: function (el, attr, event, stdevent) {
		var that = this;
		this.handler = function (e) {
			that.component.$event = e;
			that.eval();
			delete that.component.$event;
			that.component.$();
		};
		el.addEventListener(event || stdevent, this.handler);
	},
	destroy: function (el, attr, event) {
		el.removeEventListener(event || stdevent, this.handler);
	}
});

zam.directive({
	attribute: '{prefix}skip',
	order: 1,
	block: true
});

export default zam;