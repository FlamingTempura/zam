import { arrayRemove, nextTick } from './utils';
import { parse, evaluate } from './expression';
import { version } from '../package.json';
import virtualdom from './virtualdom';
import config from './config';

let id = 0,
	preparingProxy;

const emit = (events, event) => {
	if (events[event]) { events[event].forEach(cb => cb()); }
};

const deepProxy = (view, obj, parents = []) => { // when something in the scope changes, update the view
	if (parents.includes(obj)) { return; } // prevent circular recursion
	parents = parents.concat([obj]);
	return new Proxy(obj, {
		get(target, prop, receiver) {
			const q = Reflect.get(target, prop, receiver);
			if (target instanceof Date && typeof prop === 'string') {
				if (prop.startsWith('set')) { // some properties are Symbols, not strings
					view.$(true);
				}
				return q.bind(target);
			}
			return !(target instanceof Array) && typeof q === 'function' ? q.bind(target) : q; // binding target ensures things like Date.getDate work
		},
		set(target, prop, value, receiver) {
			if (!preparingProxy) {
				if (typeof value === 'object' && value !== null) {
					value = deepProxy(view, value, parents);
				}
				view.$(true);
			}
			preparingProxy = true; // prevents triggering parent views which also proxy this object
			const a = Reflect.set(target, prop, value, receiver);
			preparingProxy = false;
			return a;
		},
		deleteProperty(target, prop) {
			if (!preparingProxy) {
				view.$(true);
			}
			preparingProxy = true; // prevents triggering parent views which also proxy this object
			const a = Reflect.deleteProperty(target, prop);
			preparingProxy = false;
			return a;
		}
	});
};

const zam = (el, data, parent) => {
	//console.log('view#' + id + '.create');
	let vnode = virtualdom(el, null, true),
		events = {},
		watchers = [],
		deferringUpdate,
		view = Object.assign({
			$id: id++,
			$(defer) { // update binds. use defer to wait until end of execution cycle (these will be collapsed into one update)
				if (!vnode) { return; }
				if (!defer) {
					if (deferringUpdate) { deferringUpdate = deferringUpdate(); } // cancel
					//log('view#' + view.$id + '.update');
					vnode.updateBinds(view);
					emit(events, 'update');
					view._checkWatchers();
				} else if (!deferringUpdate) {
					deferringUpdate = nextTick(() => view.$());
				}
				return view;
			},
			_checkWatchers() {
				watchers.forEach(watcher => {
					const val = evaluate(watcher.ast, view).value;
					if (watcher.deep ? JSON.stringify(val) !== JSON.stringify(watcher.val) : val !== watcher.val) {
						watcher.val = watcher.deep ? JSON.parse(JSON.stringify(val)) : val;
						watcher.cb(val);
					}
				});
				if (view.$parent._checkWatchers) { view.$parent._checkWatchers(); }
			},
			$destroy() {
				vnode.destroyBinds(view);
				emit(events, 'destroy');
				vnode = undefined;
				return view;
			},
			$on(event, cb) {
				events[event] = [cb].concat(events[event] || []);
				return view;
			},
			$off(event, cb) {
				arrayRemove(events[event], cb);
				return view;
			},
			$watch(expr, cb, deep) {
				watchers.push({ expr, ast: parse(expr), cb, deep });
				return view;
			},
			$unwatch(expr, cb) {
				const watcher = watchers.find(w => w.expr === expr && w.cb === cb);
				arrayRemove(watchers, watcher);
				return view;
			},
			get $parent() {
				return parent || vnode.parent && vnode.parent.scope || zam.root;
			}
		}, data);

	vnode.createBinds(view);
	view.$(true);
	return deepProxy(view, view);
};

const directive = directive => {
	let parts = directive.query.match(/<([^\s>="]+)((?:\s+[^\s>="]+(?:\s*=\s*"[^"]*")?)*)>/);

	directive.tagQuery = parts[1];
	directive.attributeQueries = [];
		
	parts[2].replace(/\s+([^\s>="]+)(?:\s*=\s*"([^"]*)")?/g, (m, name, defaultValue) => {
		if (defaultValue !== undefined) {
			defaultValue = parse(defaultValue || 'undefined');
		}
		directive.attributeQueries.push({ name, defaultValue });
	});

	if (directive.inline) {
		config.inlineParser = directive;
	}
	
	if (directive.template) {
		directive.block = true;
		let node = document.createElement('span');
		node.innerHTML = directive.template;
		if (node.childNodes.length === 1) {
			node = node.childNodes[0];
		}
		directive.template = virtualdom(node);
	}

	if (!directive.order) { directive.order = 100; }

	let i = config.directives.findIndex(directive_ => directive.order < directive_.order); // insert in order of priority
	config.directives.splice(i === -1 ? config.directives.length : i, 0, directive);
	return directive;
};

Object.assign(zam, {
	version, directive, __evaluate: evaluate, __parse: parse,
	root: {
		$parent: typeof global !== 'undefined' ? global : window,
		number: (num, dec = 2) => Number(num).toFixed(dec),
		percent: (num, dec = 2) => `${Number(num * 100).toFixed(dec)}%`
	}
});
Object.defineProperty(zam, 'prefix', {
	get() { return config.prefix; },
	set(prefix) { config.prefix = prefix; }
});

export default zam;