/* jshint node: true, esversion: 6, browser: true, unused: true */
'use strict';
var test = require('tap').test,
	zam = require('../'),
	frames = require('./test-utils').frames,
	up = require('./test-utils').up,
	$ = require('./test-utils').$;

test('z-style-*', function (t) { // Style value
	t.plan(4);
	up(`<h1 z-style-font-weight="big ? 'bold' : 'normal'" z-text-transform="big ? 'uppercase' : 'lowercase'"></h1>`);
	var view = zam(document.body);
	view.big = false;
	frames(
		function () {
			t.equal($('h1').style.fontWeight, 'normal');
			t.equal($('h1').style.textTransform, 'lowercase');
			view.big = true;
		},
		function () {
			t.equal($('h1').style.fontWeight, 'bold');
			t.equal($('h1').style.textTransform, 'uppercase');
		}
	);
});