/* jshint node: true, browser: true, esversion: 6, unused: true */
'use strict';

import { arrayRemove, nextTick, log } from './utils';
import { parse, evaluate } from './expression';
import { version } from '../package.json';
import virtualdom from './virtualdom';
import createDirective from './directive';
import config from './config';

let id = 0;
let preparingProxy;

const emit = (events, event) => {
	if (events[event]) { events[event].forEach(cb => cb()); }
};

const proxyGet = (target, prop, receiver) => {
	var q = Reflect.get(target, prop, receiver);
	if (!(target instanceof Array) && typeof q === 'function') {
		return q.bind(target); // this ensures things like Date.getDate work
	} else {
		return q;
	}
};

const deepProxy = (view, obj, parents = []) => { // when something in the scope changes, update the view
	if (parents.indexOf(obj) > -1) { return; } // prevent circular recursion
	parents = parents.concat([obj]);
	//log('view#' + view.$id + '.watch:', without$(obj));
	
	let proxy = new Proxy(obj, {
		get: proxyGet,
		set(target, prop, value, receiver) {
			if (!preparingProxy) {
				//log('view#' + view.$id + '.set: ' + prop + ' =', value);
				if (typeof value === 'object' && value !== null && !(value instanceof Date)) { // TODO date should be proxied (if it works)
					value = deepProxy(view, value, parents);
				} 
				view.$(true);
			}
			preparingProxy = true; // prevents triggering parent views which also proxy this object
			let a = Reflect.set(target, prop, value, receiver);
			preparingProxy = false;
			return a;
		},
		deleteProperty(target, prop) {
			if (!preparingProxy) {
				//log('view#' + view.$id + '.delete: ' + prop);
				view.$(true);
			}
			preparingProxy = true; // prevents triggering parent views which also proxy this object
			let a = Reflect.deleteProperty(target, prop);
			preparingProxy = false;
			return a;
		}
	});
	
	Object.keys(obj).forEach(k => { // this will also work for arrays
		let o = obj[k];
		if (typeof o === 'object' && !(o instanceof Date) && !(obj === view && k.charAt(0) === '$')) { // TODO date should be proxied (if it works)
			proxy[k] = o;
		}
	});

	return proxy;
};

const zam = (el, data, parent) => {
	//log('view#' + id + '.create');
	let vnode = virtualdom(el, null, true),
		events = {},
		watchers = [],
		deferringUpdate,
		view = Object.assign({
			$id: id++,
			$(defer) { // update binds. use defer to wait until end of execution cycle (these will be collapsed into one update)
				if (!defer) {
					if (deferringUpdate) { deferringUpdate = deferringUpdate(); } // cancel
					//log('view#' + view.$id + '.update');
					vnode.updateBinds(view);
					emit(events, 'update');
					watchers.forEach(watcher => {
						const val = evaluate(watcher.ast, view).value;
						if (val !== watcher.val) {
							watcher.val = val;
							watcher.cb(val);
						}
					});
				} else if (!deferringUpdate) {
					//log('view#' + view.$id + '.deferUpdate');
					deferringUpdate = nextTick(() => view.$());
				}
				return view;
			},
			$destroy() {
				vnode.destroyBinds(view);
				emit(events, 'destroy');
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
			$watch(expr, cb) {
				watchers.push({ expr, ast: parse(expr), cb });
				return view;
			},
			$unwatch(expr, cb) {
				const watcher = watchers.find(w => w.expr === expr && w.cb === cb);
				arrayRemove(watchers, watcher);
				return view;
			},
			get $parent() {
				return parent || (vnode.parent && vnode.parent.scope) || zam.root;
			}
		}, data);

	vnode.createBinds(view);
	view.$(true);
	return deepProxy(view, view);
};

Object.assign(zam, {
	version, parse, evaluate,
	directive: createDirective,
	root: {
		$parent: typeof global !== 'undefined' ? global : window,
		number: (num, dec = 2) => Number(num).toFixed(dec),
		percent: (num, dec = 2) => Number(num * 100).toFixed(dec) + '%'
	}
});
Object.defineProperty(zam, 'prefix', {
	get() { return config.prefix; },
	set(prefix) { config.prefix = prefix; }
});

export default zam;