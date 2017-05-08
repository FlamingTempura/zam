'use strict';

import parser from './grammar.pegjs';
import { version } from '../package.json';

var parse = parser.parse;

var global_ = typeof global !== 'undefined' ? global : window;

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

var findParent = function (elements, node) {
	var parent;
	elements.find(function (element) {
		var isParent = element.children.find(function (element_) {
			return element_.node === node;
		});
		parent = isParent ? element : findParent(element.children, node);
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

var evaluate = function (syntax, scopes) {
	var value, set,
		type = syntax.type,
		operator = syntax.operator;

	if (type === 'Literal') { value = syntax.value; } else 

	if (type === 'Array') {
		value = syntax.elements.map(function (item) {
			return evaluate(item, scopes).value;
		});
	} else
	
	if (type === 'Object') {
		value = {};
		syntax.properties.forEach(function (prop) { value[prop.key] = evaluate(prop.value, scopes).value; });
	} else

	if (type === 'Identifier') {
		var scope = scopes.find(function (scope_) { return typeof scope_[syntax.name] !== 'undefined'; }) || scopes[0]; // is data in parent scopes? no? then just use current scope
		value = scope[syntax.name];
		set = function (val) {
			scope[syntax.name] = val;
			return val;
		};
	} else 

	if (type === 'Member') {
		var subject = evaluate(syntax.object, scopes).value,
			prop = evaluate(syntax.property, scopes).value;
		value = typeof subject !== 'undefined' ? subject[prop] : undefined;
		set = function (val) {
			subject[prop] = val;
			return val;
		};
	} else

	if (type === 'Conditional') {
		value = evaluate(syntax.test, scopes).value ?
			evaluate(syntax.consequent, scopes).value :
			evaluate(syntax.alternate, scopes).value;
	} else 

	if (type === 'Unary' || type === 'Update') {
		var arg = evaluate(syntax.argument, scopes),
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
		var left  = evaluate(syntax.left, scopes),
			leftv = left.value,
			rightv = evaluate(syntax.right, scopes).value;
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
		var caller = syntax.callee.object ? evaluate(syntax.callee.object, scopes).value : scopes[0],
			callee = evaluate(syntax.callee, scopes).value,
			args = syntax.arguments.map(function (arg_) {
				return evaluate(arg_, scopes).value;
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

var directiveFactories = [];

var tack = function (el, parent) {
	el = typeof el === 'string' ? document.querySelector(el) : el[0] || el; // convert from string or jquery
	parent = parent || el.taComponent;
	
	var component = {},
		elements = [];

	//component.$id = Math.floor(Math.random() * 100);
	component.$scopes =  [component].concat(parent ? parent.$scopes : [tack.root, global_]); // inherit parental scopes
	component.$elements = elements;

	var updateElements = function (elements_) {
		elements_.forEach(function (element) {
			element.bindings.forEach(function (binding) {
				binding.update();
			});
			updateElements(element.children);
		});
	};

	component.$ = function () {
		//console.log('updating', elements.length, 'nodes');
		updateElements(elements);
	};

	var bindDirective = function (factory, node, attrMatch, syntax) {
		
		var args = [node].concat(attrMatch);

		var binding = {
			component: component,
			syntax: syntax,
			eval: function (syntax_) { // evaluate expression (expression in attribute value by default)
				return evaluate(syntax_ || syntax, binding.component.$scopes).value;
			},
			update: function () {
				if (factory.update) { factory.update.apply(binding, args); }
			},
			destroy: function () {
				//arrayRemove(node.taBindings, binding);
				if (factory.destroy) { factory.destroy.apply(binding, args); }
			}
		};
		
		if (factory.create) { factory.create.apply(binding, args); }

		return binding;
	};

	var initBindings = function (node, elementTree) {
		// nodeType: 1 = ELEMENT_NODE, 3 = TEXT_NODE
		if ([1, 3].indexOf(node.nodeType) === -1) { return; }

		if (node.taComponent) {
			//console.log('controlled')
			if (node.taComponent === component.$scopes[1]) { // is this controlled by the parent?				
				let parentElement = findParent(component.$scopes[1].$elements, node),
					element = parentElement.children.find(function (element_) {
						return element_.node === node;
					});
				arrayRemove(parentElement.children, element); // move the element and its children to this component
				elementTree.push(element);
				iterate(element.children, function (child) {
					child.bindings.forEach(function (binding) {
						binding.component = component; // set each binding in each element to this component
					});
				});
			} else { // otherwise it's a child component
				node.taComponent.$scopes.splice(1, 0, component); // add this as a parent to the child
			}
			return; // skip because it's already bound
		}
		
		node.taComponent = component;
		var element = { node: node, children: [], bindings: [] };
		elementTree.push(element);
		elementTree = element.children;

		if (node.nodeType === 1) {
			let attrs = toArray(node.attributes),
				bindings = [],
				blocked;
			if (attrs.length > 0) {
				blocked = directiveFactories.find(function (factory) {
					var match;
					var attr = attrs.find(function (attr_) {
						match = attr_.name.match(factory.attribute);
						return match;
					});
					if (match) {
						var syntax = parse(attr.value || 'undefined', { startRule: 'Expression' });
						node.removeAttribute(attr.name);
						bindings.push(bindDirective(factory, node, match, syntax));
						return factory.block; // stop looking for more attributes
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
					newNode.taComponent = component;
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

tack.version = version;
tack.prefix = 'ta-';
tack.root = {};
tack.parse = parse;
tack.evaluate = evaluate;
tack.directive = function (factory) {
	factory.match = new RegExp('^' + tack.prefix + factory.match + '$');
	directiveFactories = directiveFactories.concat([factory]).sort(function (a, b) {
		return (a.order || 100) - (b.order || 100);
	});
	return factory;
};

tack.root.number = function (number, decimals) {
	return Number(number).toFixed(decimals || 2);
};
tack.root.percent = function (number, decimals) {
	return Number(number * 100).toFixed(decimals || 2) + '%';
};


var inlineParser = tack.directive({
	attribute: '(text|html)',
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

tack.directive({
	attribute: 'show',
	update: function (el) {
		var value = !!this.eval();
		if (value !== this.prevValue) {
			el.style.display = value ? '' : 'none';
			this.prevValue = value;
		}
	}
});

tack.directive({
	attribute: 'exist',
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
				this.childComponent = tack(this.clone, this.component);
				this.marker.parentNode.insertBefore(this.clone, this.marker);
			} else if (this.clone) {
				this.marker.parentNode.removeChild(this.clone);
				// TODO: tack.destroy();
			}
			this.prevValue = value;
		}
		if (this.clone) {
			this.childComponent.$();
		}
	}
});

tack.directive({
	attribute: 'each-(.+)',
	order: 2,
	block: true, // do not continue traversing through this dom element (separate tack will be created)
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
				// TODO: destroy tack
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
				item = { el: clone, tack: tack(clone, that.component), data: data };
				item.tack[varname] = data;
				that.items.push(item);
			}
			item.tack.$();
			that.marker.parentNode.insertBefore(item.el, that.marker);
		});
	}
});

var booleanAttributes = ['selected', 'checked', 'disabled', 'readonly', 'multiple', 'ismap', 'defer', 'noresize'];
tack.directive({
	attribute: 'attr-(.+)',
	update: function (el, attr, attribute) {
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

tack.directive({
	attribute: 'class-(.+)',
	update: function (el, attr, classname) {
		el.classList.toggle(classname, !!this.eval());
	}
});

tack.directive({
	attribute: 'style-(.+)',
	update: function (el, attr, style) {
		el.style[style] = this.eval();
	}
});

tack.directive({
	attribute: 'model',
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

tack.directive({
	attribute: 'on-(.+)',
	create: function (el, attr, event) {
		var that = this;
		this.handler = function (e) {
			that.component.$event = e;
			that.eval();
			delete that.component.$event;
			that.component.$();
		};
		el.addEventListener(event, this.handler);
	},
	destroy: function (el, attr, event) {
		el.removeEventListener(event, this.handler);
	}
});

tack.directive({
	attribute: 'skip',
	order: 1,
	block: true
});

export default tack;