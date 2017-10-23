'use strict';
var test = require('tap').test,
	zam = require('../'),
	frames = require('./test-utils').frames,
	up = require('./test-utils').up,
	$ = require('./test-utils').$;

test('z-show', t => { // Conditionally display the element. Equivelant to attr-display="thing ? "" : 'none'".
	t.plan(8);
	up(`<div z-show="showMe">Hello</div>
		<span z-show="!showMe">Boo</span>`);
	var view = zam(document.body);
	frames(
		() => {
			t.equal($('div').style.display, 'none');
			t.equal($('span').style.display, '');
			view.showMe = true;
		},
		() => {
			t.equal($('div').style.display, '');
			t.equal($('span').style.display, 'none');
			view.showMe = 1;
		},
		() => {
			t.equal($('div').style.display, '');
			t.equal($('span').style.display, 'none');
		},
		() => {
			view.showMe = false;
		},
		() => {
			t.equal($('div').style.display, 'none');
			t.equal($('span').style.display, '');
		}
	);
});