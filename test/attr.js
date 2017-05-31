/* jshint node: true, esversion: 6, browser: true, unused: true */
'use strict';
var test = require('tap').test,
	zam = require('../'),
	frames = require('./test-utils').frames,
	up = require('./test-utils').up,
	$ = require('./test-utils').$;

test('z-attr-*', function (t) { // Attribute value
	t.plan(6);
	up(`<input type="text" z-attr-disabled="!showMe" z-value="!showMe"></input>
		<div z-attr-lang="showMe ? 'english' : 'french'"></div>`);
	var view = zam(document.body);
	view.showMe = false;
	frames(
		function () {
			t.equal($('input').getAttribute('disabled'), 'disabled');
			t.equal($('input').getAttribute('value'), 'true');
			t.equal($('div').getAttribute('lang'), 'french');
			view.showMe = true;
		},
		function () {
			t.equal($('input').getAttribute('disabled'), null);
			t.equal($('input').getAttribute('value'), 'false');
			t.equal($('div').getAttribute('lang'), 'english');
		}
	);
});