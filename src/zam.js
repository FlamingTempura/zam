/* jshint node: true, browser: true, esversion: 6, unused: true */
'use strict';

import { arrayRemove, nextTick, log } from './utils';
import { parse, evaluate } from './expression';
import { version } from '../package.json';
import virtualdom from './virtualdom';
import { directive } from './directive';
import prefix from './prefix';

let id = 0;
const zam = (el, data, parent) => {
	//log('view#' + id + '.create');
	let vnode = virtualdom(el, null, true),
		events = {},
		watchers = [],
		deferringUpdate,
		deferUpdate = () => { // wait until end of execution cycle to update dom, and update only once
			//log('view#' + view.$id + '.deferUpdate');
			if (deferringUpdate) { return; }
			//log('view#' + view.$id + '.deferredUpdate');
			deferringUpdate = nextTick(view.$);
		},
		destroyed,
		view = Object.assign({
			$id: id++,
			$() { // update binds
				if (destroyed) { return; }
				if (deferringUpdate) { deferringUpdate = deferringUpdate(); } // cancel
				//log('view#' + view.$id + '.update');
				vnode.updateBinds(view);
				view.$emit('update');
			},
			$destroy() {
				vnode.destroyBinds(view);
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
				watchers.push({ expr, syntax: parse(expr), cb });
			},
			$unwatch (expr, cb) {
				const watcher = watchers.find(w => w.expr === expr && w.cb === cb);
				if (watcher) { arrayRemove(watchers, watcher); }
			},
			get $parent() {
				return parent || (vnode.parent && vnode.parent.scope) || zam.root;
			}
		}, data);

	view.$on('update', () => {
		//log('view#' + view.$id + '.event.update');
		var updateChildren = children => {
			children.forEach(vchild => {
				if (vchild.pointer) {
					if (vchild.pointer.scope && vchild.pointer.scope !== view) {
						vchild.pointer.scope.$();
					}
				} else {
					updateChildren(vchild.children);
				}
			});
		};
		updateChildren(vnode.children);
		watchers.forEach(watcher => {
			const val = evaluate(watcher.syntax, view).value;
			if (val !== watcher.val) {
				watcher.val = val;
				watcher.cb(val);
			}
		});
	});

	vnode.createBinds(view);

	const deepProxy = (obj, parents = []) => { // when something in the scope changes, update the view
		if (parents.indexOf(obj) > -1) { return; } // prevent cycles
		parents = parents.concat([obj]);
		//log('view#' + view.$id + '.watch:', without$(obj));
		let proxy = new Proxy(obj, {
			get(target, prop, receiver) {
				var q = Reflect.get(target, prop, receiver);
				if (!(target instanceof Array) && typeof q === 'function') {
					return q.bind(target); // this ensures things like Date.getDate work
				} else {
					return q;
				}
			},
			set(target, prop, value, receiver) {
				if (target === view && prop.charAt(0) === '$') {
					console.warn('Properties beginning with $ are reserved for zam');
				} else if (!preparingProxy) {
					//log('view#' + view.$id + '.set: ' + prop + ' =', value);
					if (typeof value === 'object' && !(value instanceof Date)) { // TODO date should be proxied (if it works)
						value = deepProxy(value, parents);
					} 
					deferUpdate();
				}
				preparingProxy = true; // prevents triggering parent views which also proxy this object
				var a = Reflect.set(target, prop, value, receiver);
				preparingProxy = false;
				return a;
			}
		});
		
		if (obj instanceof Array) { // call the setter on each property/element of the object
			obj.forEach((o, i) => {
				if (typeof o === 'object' && !(o instanceof Date)) { // TODO date should be proxied (if it works)
					//console.log('ahh', i);
					proxy[i] = o;
				}
			});
		} else {
			Object.keys(obj).forEach(k => {
				let o = obj[k];
				if (typeof o === 'object' && !(o instanceof Date) && !(obj === view && k.charAt(0) === '$')) { // TODO date should be proxied (if it works)
					//console.log('boo!', k);
					proxy[k] = o;
				}
			});
		}

		return proxy;
	};
	deferUpdate();
	
	return deepProxy(view);
};
let preparingProxy;

Object.assign(zam, {
	version, parse, evaluate,
	prefix: prefix,
	directive: directive,
	root: {
		$parent: typeof global !== 'undefined' ? global : window,
		number: (num, dec = 2) => Number(num).toFixed(dec),
		percent: (num, dec = 2) => Number(num * 100).toFixed(dec) + '%'
	}
});

export default zam;