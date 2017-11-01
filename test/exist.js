const { test } = require('tap');
const zam = require('../');
const { steps, up, $ } = require('./test-utils');

test('z-exist', t => { // Conditional existance
	t.plan(5);
	up(`<div z-exist="showMe">My name is {{ me.name }}</div>`);
	let view = zam(document.body);
	steps(
		() => {
			view.me = { name: 'moi' };
			view.showMe = false;
		},
		() => {
			t.equal($('div'), null);
			view.showMe = true;
		},
		() => {
			t.equal($('div').textContent, 'My name is moi');
			view.showMe = 1;
		},
		() => {
			t.equal($('div').textContent, 'My name is moi');
			view.showMe = 0;
		},
		() => {
			t.equal($('div'), null);
			view.showMe = 1;
			view.me.name = 'boo';
		},
		() => {
			t.equal($('div').textContent, 'My name is boo');
		}
	);
});