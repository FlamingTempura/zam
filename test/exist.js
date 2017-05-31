/* jshint node: true, esversion: 6, browser: true, unused: true */
'use strict';
var test = require('tap').test,
	zam = require('../'),
	frames = require('./test-utils').frames,
	up = require('./test-utils').up,
	$ = require('./test-utils').$;

test('z-exist', function (t) { // Conditional existance
	t.plan(5);
	up(`<div z-exist="showMe">My name is {{ me.name }}</div>`);
	var view = zam(document.body);
	frames(
		function () {
			view.me = { name: 'moi' };
			view.showMe = false;
		},
		function () {
			t.equal($('div'), null);
			view.showMe = true;
		},
		function () {
			t.equal($('div').textContent, 'My name is moi');
			view.showMe = 1;
		},
		function () {
			t.equal($('div').textContent, 'My name is moi');
			view.showMe = 0;
		},
		function () {
			t.equal($('div'), null);
			view.showMe = 1;
			view.me.name = 'boo';
		},
		function () {
			t.equal($('div').textContent, 'My name is boo');
		}
	);
});