const { test } = require('tap');
const zam = require('../');
const { steps, up, $ } = require('./test-utils');

test('cloak', t => {
	t.plan(3);
	up(`<style>[z-cloak] { display: none; }</style>
		<div id="a" z-cloak>{{ 'boo' }}</div>`); // check that forms don't break things
	t.equal(window.getComputedStyle($('#a')).getPropertyValue('display'), 'none');
	zam(document.body);
	t.equal(window.getComputedStyle($('#a')).getPropertyValue('display'), 'block');
	steps(
		() => {
			t.equal(window.getComputedStyle($('#a')).getPropertyValue('display'), 'block');
		}
	);
});
