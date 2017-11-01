const { test } = require('tap');
const zam = require('../');
const { steps, up, $ } = require('./test-utils');

test('zam prefix', t => { // Skip compilation of this element
	t.plan(2);
	zam.prefix = 'q-';
	t.equal(zam.prefix, 'q-'); // test the getter
	up(`<div q-text="boo"></div>`);
	let view = zam(document.body);
	view.boo = 'hello';
	steps(
		() => {
			t.equal($('div').textContent, 'hello');
		}
	);
});