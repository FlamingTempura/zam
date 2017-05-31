/* jshint node: true, esversion: 6, browser: true, unused: true */
'use strict';
var test = require('tap').test,
	zam = require('../'),
	frames = require('./test-utils').frames,
	up = require('./test-utils').up,
	$ = require('./test-utils').$;

test('component creation', function (t) {
	t.plan(3);
	up(`<div id="a">{{ name }}</div>
		<div id="b">{{ name }}</div>
		<div id="c">{{ name }}</div>`);
	var view1 = zam('#a'),
		view2 = zam($('#b')),
		view3 = zam([$('#c')]); // jquery-like
	frames(
		function () {
			view1.name = view2.name = view3.name = 'Lizzy';
		},
		function () {
			t.equal($('#a').textContent, 'Lizzy');
			t.equal($('#b').textContent, 'Lizzy');
			t.equal($('#c').textContent, 'Lizzy');
		}
	);
});
/*

test('destruction', function (t) {
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
});*/
