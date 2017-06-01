/* jshint node: true, esversion: 6, browser: true, unused: true */
'use strict';
var test = require('tap').test,
	zam = require('../'),
	frames = require('./test-utils').frames,
	up = require('./test-utils').up,
	$ = require('./test-utils').$;

test('create', function (t) {
	t.plan(8);
	up(`<div id="a">{{ name }}</div>
		<div id="b" z-text="name"></div>
		<div id="c" z-text="name">{{ name }}</div>`);
	var view1 = zam('#a'),
		view2 = zam($('#b')),
		view3 = zam([$('#c')]); // jquery-like
	t.equal($('#a').textContent, '');
	t.equal($('#b').textContent, '');
	t.equal($('#b').getAttribute('z-text'), null);
	t.equal($('#c').textContent, '');
	t.equal($('#c').getAttribute('z-text'), null);
	view1.name = view2.name = view3.name = 'Lizzy';
	frames(
		function () {
			t.equal($('#a').textContent, 'Lizzy');
			t.equal($('#b').textContent, 'Lizzy');
			t.equal($('#c').textContent, 'Lizzy');
		}
	);
});

test('destroy', function (t) {
	t.plan(4);
	up(`<div z-text="bar"></div>`);
	t.equal($('div').getAttribute('z-text'), 'bar');
	var view = zam(document.body);
	var count = 0;
	frames(
		function () {
			t.equal($('div').getAttribute('z-text'), null);
			view.$on('destroy', function () { count++; });
			view.$destroy();
		},
		function () {
			t.equal($('div').getAttribute('z-text'), 'bar');
			t.equal(count, 1);
		}
	);
});
