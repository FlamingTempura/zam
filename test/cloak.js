'use strict';
var test = require('tap').test,
	zam = require('../'),
	frames = require('./test-utils').frames,
	up = require('./test-utils').up,
	$ = require('./test-utils').$;

test('cloak', t => {
	t.plan(3);
	up(`<style>[z-cloak] { display: none; }</style>
		<div id="a" z-cloak>{{ 'boo' }}</div>`); // check that forms don't break things
	t.equal(window.getComputedStyle($('#a')).getPropertyValue('display'), 'none');
	zam(document.body);
	t.equal(window.getComputedStyle($('#a')).getPropertyValue('display'), 'block');
	frames(
		() => {
			t.equal(window.getComputedStyle($('#a')).getPropertyValue('display'), 'block');
		}
	);
});
