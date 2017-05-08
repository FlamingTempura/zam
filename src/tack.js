'use strict';

import parser from './grammar.pegjs';

var parse = parser.parse;

var toArray = function (nonarray) {
	return Array.prototype.slice.call(nonarray);
};

var stringify = function (value) {
	return String(value !== null && typeof value !== 'undefined' ? value : '');
};

var evaluate = function (syntax, data) {
	var value, set,
		type = syntax.type,
		operator = syntax.operator;

	if (type === 'Literal') { value = syntax.value; } else 

	if (type === 'Array') {
		value = syntax.elements.map(function (item) {
			return evaluate(item, data).value;
		});
	} else
	
	if (type === 'Object') {
		value = {};
		syntax.properties.forEach(function (prop) { value[prop.key] = evaluate(prop.value, data).value; });
	} else

	if (type === 'Identifier') {
		value = data[syntax.name];
		set = function (val) {
			data[syntax.name] = val;
			return val;
		};
	} else 

	if (type === 'Member') {
		var subject = evaluate(syntax.object, data).value,
			prop = evaluate(syntax.property, data).value;
		value = typeof subject !== 'undefined' ? subject[prop] : undefined;
		set = function (val) {
			subject[prop] = val;
			return val;
		};
	} else

	if (type === 'Conditional') {
		value = evaluate(syntax.test, data).value ?
			evaluate(syntax.consequent, data).value :
			evaluate(syntax.alternate, data).value;
	} else 

	if (type === 'Unary' || type === 'Update') {
		var arg = evaluate(syntax.argument, data),
			argv = arg.value;
		value = operator === '!' ? !argv :
		        operator === '+' ? +argv :
		        operator === '-' ? -argv :
		        operator === '++' ? argv + 1 :
		        operator === '--' ? argv - 1 : null;
		if (type === 'Update') {
			set = arg.set;
			value = set(value);
			if (syntax.prefix) { value += operator === '++' ? -1 : 1; }
		}
	} else 

	if (type === 'Binary' || type === 'Logical' || type === 'Assignment') {
		var left  = evaluate(syntax.left, data),
			leftv = left.value,
			rightv = evaluate(syntax.right, data).value;
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
		var caller = evaluate(syntax.callee.object, data),
			callee = evaluate(syntax.callee, data).value,
			args = syntax.arguments.map(function (arg_) {
				return evaluate(arg_, data).value;
			});
		value = callee.apply(caller.value, args);
	} 

	return {
		value: value,
		set: set
	};
};

var tack = function (el, parentComponent) {
	el = el[0] || el; // convert from jquery

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
				var value = evaluate(syntax_ || syntax, component).value;
				if (typeof value === 'undefined' && parentComponent) {
					value = evaluate(syntax_ || syntax, parentComponent).value; // TODO: all parents
				}
				return value;
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
		if ([Node.ELEMENT_NODE, Node.TEXT_NODE].indexOf(node.nodeType) === -1 ||
		    node.taComponent && el.contains(node.taEl)) { return; } // skip nodes which are children of another component
		if (node.taComponent) { // remove bindings of existing parent components
			node.taBindings.forEach(function (binding) { binding.remove(); });
		}
		node.taComponent = component;
		node.taEl = el;
		node.taBindings = [];

		if (node.nodeType === Node.ELEMENT_NODE) {
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

		if (node.nodeType === Node.TEXT_NODE && node.nodeValue.indexOf('{{') > -1) {
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

tack.prefix = 'ta-';

tack.directives = {};

var inlineParser = tack.directives['(text|html)'] = function (el, attr, type) {
	var value = stringify(this.eval());
	if (value !== this.prevValue) {
		if (type === 'html') {
			el.innerHTML = value;
		} else {
			el.textContent = value;
		}
		this.prevValue = value;
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
	order: 2,
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
	order: 1,
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
		el.addEventListener(event, function () {
			that.eval();
			that.component.$();
		});
	}
};

export default tack;