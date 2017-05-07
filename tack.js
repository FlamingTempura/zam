(function () {
	'use strict';

	var parser = this.parser;
	if (typeof module !== 'undefined') { parser = require('./parser'); }

	var toArray = function (nonarray) {
		return Array.prototype.slice.call(nonarray);
	};

	var tack = function (el) {
		el = el[0] || el; // convert from jquery

		var component = { el: el },
			nodes = [];

		component.data = {};

		component.eval = function (result) {
			//console.log('-> eval:', result.type);
			var value,
				set = function (val) { return val; };
			if (result.type === 'Array') {
				value = result.elements;
			} else if (result.type === 'Object') {
				value = result.properties;
			} else if (result.type === 'Literal') {
				value = result.value;
			} else if (result.type === 'Identifier') {
				value = component.data[result.name];
				set = function (val) {
					component.data[result.name] = val;
					console.log('po');
					component.update();
					return val;
				};
			} else if (result.type === 'Member') {
				var obj = component.eval(result.object).value,
					prop = component.eval(result.property).value;
				value = typeof obj !== 'undefined' || obj.hasOwnProperty(prop) ? obj[prop] : '';
				set = function (val) {
					obj[prop] = val;
					console.log('pa');
					component.update();
					return val;
				};
			} else if (result.type === 'Assignment') {
				let left = component.eval(result.left),
					right = component.eval(result.right);
				set = left.set;
				if (result.operator === '=' ) { return set(right.value); } else
				if (result.operator === '*=') { return set(left.value * right.value); } else
				if (result.operator === '/=') { return set(left.value / right.value); } else
				if (result.operator === '%=') { return set(left.value % right.value); } else
				if (result.operator === '+=') { return set(left.value + right.value); } else
				if (result.operator === '-=') { return set(left.value - right.value); }
			} else if (result.type === 'Update') {
				var argument = component.eval(result.argument);
				set = argument.set;
				if (result.operator === '++' &&  result.prefix) { value = set(argument.value + 1) - 1; } else
				if (result.operator === '--' &&  result.prefix) { value = set(argument.value - 1) - 1; } else
				if (result.operator === '++' && !result.prefix) { value = set(argument.value + 1); } else
				if (result.operator === '--' && !result.prefix) { value = set(argument.value - 1); }
			} else if (result.type === 'Conditional') {
				value = component.eval(result.test).value ?
					component.eval(result.consequent).value :
					component.eval(result.alternate).value;
			} else if (result.type === 'Binary' || result.type === 'Logical') {
				let left  = component.eval(result.left),
					right = component.eval(result.right);
				//console.log('compare', left.val)
				if (result.operator === '===') { value = left.value === right.value; } else
				if (result.operator === '!==') { value = left.value !== right.value; } else
				if (result.operator === '==' ) { value = left.value ==  right.value; } else
				if (result.operator === '!=' ) { value = left.value !=  right.value; } else
				if (result.operator === '<'  ) { value = left.value <   right.value; } else
				if (result.operator === '>'  ) { value = left.value >   right.value; } else
				if (result.operator === '<=' ) { value = left.value <=  right.value; } else
				if (result.operator === '>=' ) { value = left.value >=  right.value; } else
				if (result.operator === '&&' ) { value = left.value &&  right.value; } else
				if (result.operator === '||' ) { value = left.value ||  right.value; } else
				if (result.operator === '+'  ) { value = left.value +   right.value; } else
				if (result.operator === '-'  ) { value = left.value -   right.value; } else
				if (result.operator === '*'  ) { value = left.value *   right.value; } else
				if (result.operator === '/'  ) { value = left.value /   right.value; } else
				if (result.operator === '%'  ) { value = left.value %   right.value; }
			} else if (result.type === 'Call') {
				var callee = component.eval(result.callee).value,
					args = component.eval(result.arguments).value;
				value = callee.apply(null, args);
			} else if (result.type === 'Formatter') {
				var formatter = tack.formatters[result.formatter];
				if (typeof formatter !== 'function') {
					console.error('No formatter named ' + result.formatter);
					value = '';
				} else {
					value = formatter(component.eval(result.subject).value, result.parameter);
				}
			}
			return {
				value: value,
				set: set
			};
		};

		component.parse = function (exp) {
			//console.log('parse:', exp);
			return parser.parse(exp);
		};

		var createBinding = function (binder, node, attr, expr) {
			//console.log('bind:', node, attr, expr);
			var prevValue,
				parsed = component.parse(expr || 'undefined');
			var binding = {
				component: component,
				block: binder.block,
				update: function () {
					var evaled = component.eval(parsed);
					//if (typeof prevValue === 'undefined' || val !== prevValue) { // this fails with arrays
						console.log('updating');
						binder.update.call(binding, node, evaled.value);
						prevValue = evaled.val;
					//}
				},
				remove: function () {
					var i = node.taBindings.indexOf(binding);
					if (i > -1) { node.taBindings.splice(i, 1); }
				},
				set: function (val) {
					var evaled = component.eval(parsed);
					return evaled.set(val);
				}
			};

			if (typeof binder === 'function') { binder = { update: binder }; }
			
			if (binder.create) {
				binder.create.call(binding, node, attr);
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
					var key = Object.keys(tack.binders).find(function (k) {
						return attr.name.match(new RegExp('^ta-(?:' + k + ')$'));
					});
					if (key) {
						var binding = createBinding(tack.binders[key], node, attr.name, attr.value);
						if (binding.block) { block = true; }
						if (nodes.indexOf(node) === -1) { nodes.push(node); }
					}
				});

				if (!block) {
					toArray(node.childNodes).forEach(createBindings);
				}
			}

			if (node.nodeType === Node.TEXT_NODE && node.nodeValue.match('{{')) {
				var tmpl = node.nodeValue,
					startMarker = document.createComment('fa-text'),
					endMarker = document.createComment('/fa-text');
				node.parentNode.insertBefore(startMarker, node);
				node.parentNode.insertBefore(endMarker, node);
				node.parentNode.removeChild(node);
				tmpl.replace(/([^{]*)(?:{{([^}]*)}})?([^{]*)/g, function (match, before, exp, after) {
					var textNode;
					if (before) {
						textNode = document.createTextNode(before);
						endMarker.parentNode.insertBefore(textNode, endMarker);
					}
					if (exp) {
						textNode = document.createTextNode('{{ ' + exp + ' }}');
						textNode.taComponent = component;
						textNode.taBindings = [];
						endMarker.parentNode.insertBefore(textNode, endMarker);
						createBinding(tack.binders.text, textNode, '', exp);
						nodes.push(textNode);
					}
					if (after) {
						textNode = document.createTextNode(after);
						endMarker.parentNode.insertBefore(textNode, endMarker);
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

	tack.binders = {};

	tack.binders['each-.+'] = {
		block: true,
		create: function (el, attr) {
			this.varname = attr.split('-').pop();
			this.items = [];
			this.startMarker = document.createComment(attr);
			this.endMarker = document.createComment('/' + attr);
			el.removeAttribute(attr);
			el.parentNode.insertBefore(this.startMarker, el);
			el.parentNode.insertBefore(this.endMarker, el);
			el.parentNode.removeChild(el);
		},	
		update: function (el, array) {
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

	tack.binders['if|else-if|else'] = {
		block: true,
		create: function (el, attr) {
			if (attr.indexOf('else') > -1) {
				this.isElse = true;
				this.prevIfs = el.taPrevIfs;
				if (!this.prevIfs) {
					throw { message: 'No if before else/else-if' };
				}
			}
			if (attr.indexOf('if') > -1) {
				this.isIf = true;
				var next = el.nextSibling; // look forward for any else statements
				while (next) {
					if (next.attributes && (next.hasAttribute('ta-else-if') || next.hasAttribute('ta-else'))) {
						next.taPrevIfs = (this.prevIfs || []).concat([this]);
						break;
					}
					next = next.nextSibling;
				}
			}
			this.startMarker = document.createComment(attr);
			this.endMarker = document.createComment('/' + attr);
			el.removeAttribute(attr);
			el.parentNode.insertBefore(this.startMarker, el);
			el.parentNode.insertBefore(this.endMarker, el);
			el.parentNode.removeChild(el);
		},	
		update: function (el, ifResult) {
			var that = this;
			var result = (!this.isIf || ifResult) && (!this.isElse || this.prevIfs.reduce(function (memo, prevIf) { return memo && !prevIf.result; }, true));
			if (result !== this.result) {
				if (result) {
					var clone = el.cloneNode(true);
					that.item = { el: clone, tack: tack(clone) };
					that.item.tack.data = that.component.data;
					that.endMarker.parentNode.insertBefore(that.item.el, that.endMarker);
				} else if (that.item) {
					that.endMarker.parentNode.removeChild(that.item.el);
					// TODO: destroy tack
					delete that.item;
				}
				this.result = result;
			}
		}
	};

	tack.binders.show = function (el, value) {
		value = !!value;
		if (value !== this.prevValue) {
			el.style.display = value ? '' : 'none';
			this.prevValue = value;
		}
	};

	tack.binders.hide = function (el, value) {
		value = !!value;
		if (value !== this.prevValue) {
			el.style.display = value ? 'none' : '';
			this.prevValue = value;
		}
	};
	
	tack.binders['attr-.+'] = function () {

	};
	
	tack.binders['on-.+'] = {
		eval: false,
		create: function (el) {
			console.log('on', arguments);
			//el.addEventListener()
		}
	};
	
	tack.binders['class'] = function () {

	};

	tack.binders.model = {
		create: function (el) {
			var that = this,
				value;
			var onchange = function () {
				if (el.value !== value) {
					/*console.log('');
					console.log('');
					console.log('model old:', value);*/
					that.prevValue = value;
					value = that.set(el.value);
					//console.log('model new:', value);

				}
			};
			//el.addEventListener('change', onchange);
			el.addEventListener('keyup', onchange);
		},
		update: function (el, value) {
			value = String(value);
			if (value !== this.prevValue) {
				el.value = value;
			}
		}
	};
	tack.binders.text = function (el, value) {
		value = String(value);
		if (value !== this.prevValue) {
			if (el.nodeType === Node.TEXT_NODE) {
				el.textContent = value !== null ? value : '';
			} else {
				el.innerText = value !== null ? value : '';
			}
			this.prevValue = value;
		}
	};
	tack.binders.html = function (el, value) {
		value = String(value);
		if (value !== this.prevValue) {
			el.innerHTML = value;
			this.prevValue = value;
		}
	};


	tack.formatters = {};

	tack.formatters.number = function (value, decimals) {
		return Number(value).toFixed(Number(decimals || 2));
	};
	

	if (typeof (typeof module !== 'undefined' && module !== null ? module.exports : void 0) === 'object') {
		module.exports = tack;
	} else {
		this.tack = tack;
	}
}).call(this);