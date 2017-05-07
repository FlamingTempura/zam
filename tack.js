(function () {
	'use strict';

	var parser = this.parser;
	var prefix = 'ta-';

	if (typeof module !== 'undefined') { parser = require('./parser'); }

	var toArray = function (nonarray) {
		return Array.prototype.slice.call(nonarray);
	};

	var stringify = function (value) {
		return String(value !== null ? value : '');
	};

	var tack = function (el) {
		el = el[0] || el; // convert from jquery

		var component = { el: el },
			nodes = [];

		component.data = {};

		component.eval = function (syntax) {
			var value, set;

			if (syntax.type === 'Literal') { value = syntax.value; } else 

			if (syntax.type === 'Array') { value = syntax.elements; } else
			
			if (syntax.type === 'Object') { console.log('obj', syntax);
				let obj = {};
				syntax.properties.forEach(function (prop) { obj[prop.key] = component.eval(prop.value).value; });
				value = obj;
			} else

			if (syntax.type === 'Identifier') {
				value = component.data[syntax.name];
				set = function (val) {
					component.data[syntax.name] = val;
					component.update();
					return val;
				};
			} else 

			if (syntax.type === 'Member') {
				var obj = component.eval(syntax.object).value,
					prop = component.eval(syntax.property).value;
				value = typeof obj !== 'undefined' || obj.hasOwnProperty(prop) ? obj[prop] : '';
				set = function (val) {
					obj[prop] = val;
					component.update();
					return val;
				};
			} else

			if (syntax.type === 'Assignment') {
				let left = component.eval(syntax.left),
					right = component.eval(syntax.right);
				set = left.set;
				if (syntax.operator === '=' ) { return set(right.value); } else
				if (syntax.operator === '*=') { return set(left.value * right.value); } else
				if (syntax.operator === '/=') { return set(left.value / right.value); } else
				if (syntax.operator === '%=') { return set(left.value % right.value); } else
				if (syntax.operator === '+=') { return set(left.value + right.value); } else
				if (syntax.operator === '-=') { return set(left.value - right.value); }
			} else 

			if (syntax.type === 'Update') {
				let argument = component.eval(syntax.argument);
				set = argument.set;
				if (syntax.operator === '++' &&  syntax.prefix) { value = set(argument.value + 1) - 1; } else
				if (syntax.operator === '--' &&  syntax.prefix) { value = set(argument.value - 1) - 1; } else
				if (syntax.operator === '++' && !syntax.prefix) { value = set(argument.value + 1); } else
				if (syntax.operator === '--' && !syntax.prefix) { value = set(argument.value - 1); }
			} else 

			if (syntax.type === 'Conditional') {
				value = component.eval(syntax.test).value ?
					component.eval(syntax.consequent).value :
					component.eval(syntax.alternate).value;
			} else 

			if (syntax.type === 'Unary') {
				let argument = component.eval(syntax.argument);
				if (syntax.operator === '!') { value = !argument.value; } else
				if (syntax.operator === '+') { value = +argument.value; } else
				if (syntax.operator === '-' ) { value = -argument.value; }
			} else 

			if (syntax.type === 'Binary' || syntax.type === 'Logical') {
				let left  = component.eval(syntax.left),
					right = component.eval(syntax.right);
				if (syntax.operator === '===') { value = left.value === right.value; } else
				if (syntax.operator === '!==') { value = left.value !== right.value; } else
				if (syntax.operator === '==' ) { value = left.value ==  right.value; } else
				if (syntax.operator === '!=' ) { value = left.value !=  right.value; } else
				if (syntax.operator === '<'  ) { value = left.value <   right.value; } else
				if (syntax.operator === '>'  ) { value = left.value >   right.value; } else
				if (syntax.operator === '<=' ) { value = left.value <=  right.value; } else
				if (syntax.operator === '>=' ) { value = left.value >=  right.value; } else
				if (syntax.operator === '&&' ) { value = left.value &&  right.value; } else
				if (syntax.operator === '||' ) { value = left.value ||  right.value; } else
				if (syntax.operator === '+'  ) { value = left.value +   right.value; } else
				if (syntax.operator === '-'  ) { value = left.value -   right.value; } else
				if (syntax.operator === '*'  ) { value = left.value *   right.value; } else
				if (syntax.operator === '/'  ) { value = left.value /   right.value; } else
				if (syntax.operator === '%'  ) { value = left.value %   right.value; }
			} else 

			if (syntax.type === 'Call') {
				let caller = component.eval(syntax.callee.object),
					callee = component.eval(syntax.callee).value,
					args = syntax.arguments.map(function (arg) {
						return component.eval(arg).value;
					});
				console.log('call', syntax, args);
				console.log('calling', callee, 'on', caller, 'with, args')
				value = callee.apply(caller.value, args);
			} 

			return {
				value: value,
				set: set
			};
		};

		var createBinding = function (binder, node, match, syntax) {

			if (typeof binder === 'function') { binder = { update: binder }; }

			var binding = {
				component: component,
				block: binder.block,
				syntax: syntax,
				eval: function (syntax_) {
					return component.eval(syntax_ || syntax).value;
				},
				update: function () {
					console.log('updating');
					if (binder.update) { binder.update.call(binding, node); }
				},
				remove: function () {
					var i = node.taBindings.indexOf(binding);
					if (i > -1) { node.taBindings.splice(i, 1); }
				}
			};
			
			if (binder.create) {
				binder.create.apply(binding, [node].concat(match));
			}

			node.taBindings.push(binding);

			return binding;
		};

		var createBindings = function (node) {
			if ([Node.ELEMENT_NODE, Node.TEXT_NODE].indexOf(node.nodeType) === -1) { return; }
			if (node.taComponent && el.contains(node.taComponent.el)) { return; } // skip nodes which are children of another component
			if (node.taComponent) { // remove bindings of existing parent components
				node.taBindings.forEach(function (binding) { binding.remove(); });
			}
			node.taComponent = component;
			node.taBindings = [];

			if (node.nodeType === Node.ELEMENT_NODE) {
				var block = false;

				toArray(node.attributes).forEach(function (attr) {
					Object.keys(tack.directives).sort(function (a, b) {
						return (tack.directives[a].order || 100) - (tack.directives[b].order || 100);
					}).find(function (key) {
						var match = attr.name.match(new RegExp('^' + prefix + '(?:' + key + ')$'));
						if (match) {
							var syntax = parser.parse(attr.value || 'undefined', { startRule: 'Expression' });
							node.removeAttribute(attr.name);
							var binding = createBinding(tack.directives[key], node, match, syntax);
							if (binding.block) { block = true; }
							if (nodes.indexOf(node) === -1) { nodes.push(node); }
							//console.log('parsing expression', attr.value, block, node.childNodes);
						}
						return match;
					});
				});

				if (!block) {
					//console.log(node, );
					toArray(node.childNodes).forEach(createBindings);
				}
			}

			if (node.nodeType === Node.TEXT_NODE && node.nodeValue.indexOf('{{') > -1) {
				var text = node.nodeValue;
				//console.log('parsing text', text);
				var syntax = parser.parse(text, { startRule: 'Text' });
				//console.log('syntax text', syntax);
				var startMarker = document.createComment('fa-text'),
					endMarker = document.createComment('/fa-text');
				node.parentNode.insertBefore(startMarker, node);
				node.parentNode.insertBefore(endMarker, node);
				node.parentNode.removeChild(node);
				syntax.forEach(function (part) {
					var newNode;
					if (typeof part === 'string') {
						newNode = document.createTextNode(part);
						endMarker.parentNode.insertBefore(newNode, endMarker);
					} else {
						if (part.html) {
							newNode = document.createElement('span');
						} else {
							newNode = document.createTextNode('###');
						}
						newNode.taComponent = component;
						newNode.taBindings = [];
						endMarker.parentNode.insertBefore(newNode, endMarker);
						createBinding(inlineParser, newNode, ['', part.html ? 'html' : 'text'], part.expression);
						nodes.push(newNode);
					}
				});
			}

		};

		createBindings(el, 0); // traverse the dom

		component.update = function () {
			//console.log('updating', nodes.length, 'nodes');
			nodes.forEach(function (node) {
				node.taBindings.forEach(function (binding) {
					binding.update();
				});
			});
		};

		return component;
	};

	tack.directives = {};

	tack.directives['each-(.+)'] = {
		order: 1,
		block: true,
		create: function (el, attr, varname) {
			this.varname = varname;
			this.items = [];
			this.startMarker = document.createComment(attr);
			this.endMarker = document.createComment('/' + attr);
			el.parentNode.insertBefore(this.startMarker, el);
			el.parentNode.insertBefore(this.endMarker, el);
			el.parentNode.removeChild(el);
		},	
		update: function (el) {
			var array = this.eval() || [];
			var that = this;
			// remove old nodes
			that.items.forEach(function (item) {
				if (array.indexOf(item.data) === -1) {
					that.endMarker.parentNode.removeChild(item.el);
					// TODO: destroy tack
					that.items.splice(that.items.indexOf(item), 1);
				}
			});
			
			// create new nodes / update existing nodes
			array.forEach(function (data) {
				var item = that.items.find(function (item) {
					return item.data === data;
				});
				if (!item) {
					var clone = el.cloneNode(true);
					item = { el: clone, tack: tack(clone), data: data };
					item.tack.data[that.varname] = data;
					that.items.push(item);
				}
				item.tack.update();
				that.endMarker.parentNode.insertBefore(item.el, that.endMarker);
			});
		}
	};

	tack.directives.exist = {
		order: 2,
		block: true, // this prevents wasting effort when element does not exist
		create: function (el, attr) {
			this.startMarker = document.createComment(attr);
			this.endMarker = document.createComment('/' + attr);
			el.parentNode.insertBefore(this.startMarker, el);
			el.parentNode.insertBefore(this.endMarker, el);
			el.parentNode.removeChild(el);
		},	
		update: function (el) {
			var value = !!this.eval();
			if (value !== this.prevValue) {
				if (value) {
					this.clone = el.cloneNode(true);
					this.tack = tack(this.clone);
					this.tack.data = this.component.data;
					this.endMarker.parentNode.insertBefore(this.clone, this.endMarker);
				} else if (this.clone) {
					this.endMarker.parentNode.removeChild(this.clone);
					// TODO: tack.destroy();
				}
				this.prevValue = value;
			}
			if (this.clone) {
				this.tack.update();
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

	var booleanAttributes = ['selected', 'checked', 'disabled', 'readonly', 'multiple', 'ismap', 'defer', 'noresize'];
	tack.directives['attr-(.+)'] = {
		create: function (el, attr, attribute) {
			this.attribute = attribute;
		},
		update: function (el) {
			var value = this.eval();
			if (booleanAttributes.indexOf(this.attribute) > -1) {
				value = value ? this.attribute : undefined;
			}
			if (typeof value === 'undefined') {
				el.removeAttribute(this.attribute);
			} else {
				el.setAttribute(this.attribute, value);
			}
		}
	};

	tack.directives['class-(.+)'] = {
		create: function (el, attr, classname) {
			this.classname = classname;
		},
		update: function (el) {
			el.classList.toggle(this.classname, !!this.eval());
		}
	};

	tack.directives['style-(.+)'] = {
		create: function (el, attr, style) {
			this.style = style;
		},
		update: function (el) {
			el.style[this.style] = this.eval();
		}
	};
	
	var inlineParser = tack.directives['(text|html)'] = {
		create: function (el, attr, type) {
			this.type = type;
		},
		update: function (el) {
			var value = stringify(this.eval());
			if (value !== this.prevValue) {
				if (this.type === 'html') {
					el.innerHTML = value;
				} else {
					el.textContent = value;
				}
				this.prevValue = value;
			}
		}
	};

	tack.directives['on-(.+)'] = {
		create: function (el, attr, event) {
			var that = this;
			el.addEventListener(event, function () {
				that.eval();
				that.component.update();
			});
		}
	};
	
	tack.directives.model = {
		create: function (el) {
			var that = this;
			var onchange = function () {
				if (el.value !== that.prevValue) {
					that.eval({ type: 'Assignment', operator: '=', left: that.syntax, right: { type: 'Literal', value: el.value } }); // evaluate "<expression> = <value>"
					that.prevValue = el.value;
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

	if (typeof (typeof module !== 'undefined' && module !== null ? module.exports : void 0) === 'object') {
		module.exports = tack;
	} else {
		this.tack = tack;
	}
}).call(this);