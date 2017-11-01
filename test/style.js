const { test } = require('tap');
const zam = require('../');
const { steps, up, $ } = require('./test-utils');

test('z-style-*', t => { // Style value
	t.plan(4);
	up(`<h1 z-style-font-weight="big ? 'bold' : 'normal'" z-text-transform="big ? 'uppercase' : 'lowercase'"></h1>`);
	let view = zam(document.body);
	view.big = false;
	steps(
		() => {
			t.equal($('h1').style.fontWeight, 'normal');
			t.equal($('h1').style.textTransform, 'lowercase');
			view.big = true;
		},
		() => {
			t.equal($('h1').style.fontWeight, 'bold');
			t.equal($('h1').style.textTransform, 'uppercase');
		}
	);
});