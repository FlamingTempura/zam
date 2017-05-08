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

var evaluate = function (syntax, scopes) {
	var value, set, scope,
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
		scope = scopes.find(function (scope_) { return typeof scope_[syntax.name] !== 'undefined'; }) || scopes[0]; // is data in parent scopes? no? then just use current scope
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
			if (syntax.prefix) { value += operator === '++' ? -1 : 1; }
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

	if (type === 'Call') {
		var caller = syntax.callee.object ? evaluate(syntax.callee.object, scopes).value : scopes[0],
			callee = evaluate(syntax.callee, scopes).value,
			args = syntax.arguments.map(function (arg_) {
				return evaluate(arg_, scopes).value;
			});
		value = callee ? callee.apply(caller, args) : undefined;
	} 

	return {
		value: value,
		set: set
	};
};

var tack = function (el, parentComponent) {
	el = typeof el === 'string' ? document.querySelector(el) : el[0] || el; // convert from string or jquery

	var component = {},
		nodes = [];

	component.$ = function () {
		//console.log('updating', nodes.length, 'nodes');
		nodes.forEach(function (node) {
			node.taBindings.forEach(function (binding) {
				binding.update();
			});
		});
	};

	var bindDirective = function (directive, node, attrMatch, syntax) {

		if (typeof directive === 'function') { directive = { update: directive }; }

		var binding = {
			component: component,
			block: directive.block,
			syntax: syntax,
			eval: function (syntax_) { // evaluate expression (expression in attribute value by default)
				var scopes = [component];
				if (parentComponent) { scopes.push(parentComponent); } // TODO: all parents
				scopes.push(tack.root, global_);
				return evaluate(syntax_ || syntax, scopes).value;
			},
			update: function () {
				if (directive.update) { directive.update.apply(binding, [node].concat(attrMatch)); }
			},
			remove: function () {
				var i = node.taBindings.indexOf(binding);
				if (i > -1) { node.taBindings.splice(i, 1); }
			}
		};
		
		if (directive.create) {
			directive.create.apply(binding, [node].concat(attrMatch));
		}

		node.taBindings.push(binding);

		return binding;
	};

	var createBindings = function (node) {
		// nodeType: 1 = ELEMENT_NODE, 3 = TEXT_NODE
		if ([1, 3].indexOf(node.nodeType) === -1 ||
		    node.taComponent && el.contains(node.taEl)) { return; } // skip nodes which are children of another component
		if (node.taComponent) { // remove bindings of existing parent components
			node.taBindings.forEach(function (binding) { binding.remove(); });
		}
		node.taComponent = component;
		node.taEl = el;
		node.taBindings = [];

		if (node.nodeType === 1) {
			var attrs = toArray(node.attributes);

			var blocked = Object.keys(tack.directives).sort(function (a, b) {
				return (tack.directives[a].order || 100) - (tack.directives[b].order || 100);
			}).find(function (key) {
				var match;
				var attr = attrs.find(function (attr_) {
					match = attr_.name.match(new RegExp('^' + tack.prefix + '(?:' + key + ')$'));
					return match;
				});
				if (match) {
					var syntax = parse(attr.value || 'undefined', { startRule: 'Expression' });
					node.removeAttribute(attr.name);
					var binding = bindDirective(tack.directives[key], node, match, syntax);
					if (nodes.indexOf(node) === -1) { nodes.push(node); }
					return binding.block; // stop looking for more attributes
				}
			});
			if (!blocked) {
				toArray(node.childNodes).forEach(createBindings);
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
					newNode.taBindings = [];
					bindDirective(inlineParser, newNode, ['', part.html ? 'html' : 'text'], part.expression);
					nodes.push(newNode);
				}
				node.parentNode.insertBefore(newNode, node);
			});
			node.parentNode.removeChild(node);
		}

	};

	createBindings(el, 0); // traverse the dom

	return component;
};

tack.version = version;
tack.prefix = 'ta-';
tack.root = {};
tack.directives = {};
tack.currency = '£';
tack.parse = parse;
tack.evaluate = evaluate;

tack.root.number = function (number, decimals) {
	return Number(number).toFixed(decimals || 2);
};
tack.root.percent = function (number, decimals) {
	return Number(number * 100).toFixed(decimals || 2) + '%';
};


var inlineParser = tack.directives['(text|html)'] = {
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
};

tack.directives.show = function (el) {
	var value = !!this.eval();
	if (value !== this.prevValue) {
		el.style.display = value ? '' : 'none';
		this.prevValue = value;
	}
};

tack.directives.exist = {
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
};

tack.directives['each-(.+)'] = {
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
				that.items.splice(that.items.indexOf(item), 1);
			}
		});
		
		// create new nodes / update existing nodes
		array.forEach(function (data) {
			var item = that.items.find(function (item_) {
				return item_.data === data;
			});
			if (!item) {
				var clone = el.cloneNode(true);
				item = { el: clone, tack: tack(clone), data: data };
				item.tack[varname] = data;
				that.items.push(item);
			}
			item.tack.$();
			that.marker.parentNode.insertBefore(item.el, that.marker);
		});
	}
};

var booleanAttributes = ['selected', 'checked', 'disabled', 'readonly', 'multiple', 'ismap', 'defer', 'noresize'];
tack.directives['attr-(.+)'] = function (el, attr, attribute) {
	var value = this.eval();
	if (booleanAttributes.indexOf(attribute) > -1) {
		value = value ? attribute : undefined;
	}
	if (typeof value === 'undefined') {
		el.removeAttribute(attribute);
	} else {
		el.setAttribute(attribute, value);
	}
};

tack.directives['class-(.+)'] = function (el, attr, classname) {
	el.classList.toggle(classname, !!this.eval());
};

tack.directives['style-(.+)'] = function (el, attr, style) {
	el.style[style] = this.eval();
};

tack.directives.model = {
	create: function (el) {
		var that = this;
		var onchange = function () {
			if (el.value !== that.prevValue) {
				that.prevValue = el.value;
				that.eval({ type: 'Assignment', operator: '=', left: that.syntax, right: { type: 'Literal', value: el.value } }); // evaluate "<expression> = <value>"
				that.component.$();
			}
		};
		el.addEventListener('input', onchange);
	},
	update: function (el) { // update dom
		var value = stringify(this.eval());
		if (value !== this.prevValue) {
			el.value = value;
			this.prevValue = value;
		}
	}
};

tack.directives['on-(.+)'] = {
	create: function (el, attr, event) {
		var that = this;
		el.addEventListener(event, function (e) {
			that.component.$event = e;
			that.eval();
			delete that.component.$event;
			that.component.$();
		});
	}
};

tack.directives.skip = {
	order: 1,
	block: true
};

export default tack;