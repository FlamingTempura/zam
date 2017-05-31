/* jshint node: true, esversion: 6, browser: true, unused: true */
'use strict';
var test = require('tap').test,
	zam = require('../'),
	frames = require('./test-utils').frames,
	up = require('./test-utils').up,
	$ = require('./test-utils').$,
	trigger = require('./test-utils').trigger;

test('$watch', function (t) {
	t.plan(2);
	up(`<input type="text" z-model="foo">`);
	var view = zam(document.body),
		count = 0,
		handler = function () { count++; };
	frames(
		function () { // should trigger watch
			view.$watch('foo', handler);
			view.foo = 1;
			view.foo = 2;
			view.foo = 4; // should trigger watch only once
		},
		function () {
			$('input').value = 'bar';
			trigger($('input'), 'input'); // should trigger watch
		},
		function () {
			view.foo = 'bar'; // should not trigger watch
		},
		function () {
			view.$unwatch('foo', handler);
			view.foo = '$$$'; // should not trigger watch
		},
		function () {
			view.$watch('foo', function (foo) {
				t.equal(foo, 'can');
			});
			view.foo = 'can';
		},
		function () {
			t.equal(count, 2);
		}
	);
});