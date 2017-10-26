'use strict';
var test = require('tap').test,
	zam = require('../'),
	frames = require('./test-utils').frames,
	up = require('./test-utils').up,
	$ = require('./test-utils').$;

test('zam prefix', t => { // Skip compilation of this element
	t.plan(2);
	zam.prefix = 'q-';
	t.equal(zam.prefix, 'q-'); // test the getter
	up(`<div q-text="boo"></div>`);
	var view = zam(document.body);
	view.boo = 'hello';
	frames(
		() => {
			t.equal($('div').textContent, 'hello');
		}
	);
});