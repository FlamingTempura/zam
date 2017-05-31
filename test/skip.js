/* jshint node: true, esversion: 6, browser: true, unused: true */
'use strict';
var test = require('tap').test,
	zam = require('../'),
	frames = require('./test-utils').frames,
	up = require('./test-utils').up,
	$ = require('./test-utils').$;

test('z-skip', function (t) { // Skip compilation of this element
	t.plan(2);
	up(`<div z-skip>hello {{ skipme }}</div>
		<input type="text" z-skip z-model="blah">`);
	var view = zam(document.body);
	view.skipme = 'boo';
	view.blah = 'blah';
	frames(
		function () {
			t.equal($('div').textContent, 'hello {{ skipme }}');
			t.equal($('input').getAttribute('z-model'), 'blah');
		}
	);
});