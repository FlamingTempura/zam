const { test } = require('tap');
const zam = require('../');
const { steps, up, $ } = require('./test-utils');

test('z-skip', t => { // Skip compilation of this element
	t.plan(2);
	up(`<div z-skip>hello {{ skipme }}</div>
		<input type="text" z-skip z-model="blah">`);
	let view = zam(document.body);
	view.skipme = 'boo';
	view.blah = 'blah';
	steps(
		() => {
			t.equal($('div').textContent, 'hello {{ skipme }}');
			t.equal($('input').getAttribute('z-model'), 'blah');
		}
	);
});