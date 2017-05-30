/* jshint node: true, browser: true, esversion: 6 */
'use strict';

const stringify = value => String(value !== null && typeof value !== 'undefined' ? value : '');

const arrayRemove = (array, element) => {
	const i = array.indexOf(element);
	if (i > -1) { array.splice(i, 1); }
};

// https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
const hash = str => {
	return str.split('').reduce((hash, char) => {
		return ((hash << 5) - hash) + char.charCodeAt(0) | 0;
	}, 0).toString(16);
};

const nextTick = function (cb) {
	var cancelled,
		fn = () => { if (!cancelled) { cb(); } };
	if (typeof process !== 'undefined') {
		process.nextTick(fn);
	} else {
		let id = String(Math.random()),
			handler = e => {
				if (e.data === id) {
					e.stopPropagation();
					fn();
					window.removeEventListener('message', handler, true);
				}
			};
		window.addEventListener('message', handler, true);
		window.postMessage(id, '*');
	}
	return () => { cancelled = true; };
};

/*var without$ = function (obj) {
	obj = Object.assign({}, obj);
	Object.keys(obj).forEach(k => { if (k.indexOf('$') === 0) { delete obj[k]; } });
	return obj;
};*/
let log = (...msg) => console.log(...msg);

export { stringify, arrayRemove, hash, nextTick, log };