/* jshint node: true, esversion: 6, browser: true, unused: true */
'use strict';

var jsdom = require('jsdom'),
	moment = require('moment');

var up = function (html) { // set global document to new dom
	global.window = (new jsdom.JSDOM(html)).window;
	global.document = global.window.document;
	// polyfill valueAsDate
	Object.defineProperty(global.window.HTMLInputElement.prototype, 'valueAsDate', {
		configurable: true,
		get: function () {
			if (this.type === 'datetime-local') { return moment(this.value, 'YYYY-MM-DD[T]HH:mm:ss.SS').toDate(); }
			if (this.type === 'date') { return moment(this.value, 'YYYY-MM-DD').toDate(); }
			if (this.type === 'month') { return moment(this.value, 'YYYY-MM').toDate(); }
			if (this.type === 'week') { return moment(this.value, 'YYYY-[W]WW').toDate(); }
			if (this.type === 'time') { return moment(this.value, 'HH:mm:ss.SS').toDate(); }
		},
		set: function (d) {
			if (this.type === 'datetime-local') { this.value = moment(d).format('YYYY-MM-DD[T]HH:mm:ss.SS'); }
			if (this.type === 'date') { this.value = moment(d).format('YYYY-MM-DD'); }
			if (this.type === 'month') { this.value = moment(d).format('YYYY-MM'); }
			if (this.type === 'week') { this.value = moment(d).format('YYYY-[W]WW'); }
			if (this.type === 'time') { this.value = moment(d).format('HH:mm:ss.SS'); }
		}
	});
};
var $ = function (selector) {
	return global.document.querySelector(selector);
};
var $$ = function (selector) {
	return global.document.querySelectorAll(selector);
};
var frames = function () { // each frame happens following the previous frame, giving time for dom updates
	var callbacks = Array.from(arguments);
	setTimeout(function () {
		callbacks.shift()();
		if (callbacks.length > 0) {
			frames.apply(null, callbacks);
		}
	});
};
var trigger = function (element, eventname) {
	var event = new global.window.Event(eventname);
	element.dispatchEvent(event);
};

module.exports = { up, $, $$, frames, trigger };