const { test } = require('tap');
const zam = require('../');
const { steps, up, $ } = require('./test-utils');

test('z-class-*', t => { // Conditional class name
	t.plan(2);
	up(`<h4 class="thing" z-class-red="warning" z-class-blue="!warning"></h4>`);
	let view = zam(document.body);
	view.warning = false;
	steps(
		() => {
			t.equal($('h4').getAttribute('class'), 'thing blue');
			view.warning = true;
		},
		() => {
			t.equal($('h4').getAttribute('class'), 'thing red');
		}
	);
});