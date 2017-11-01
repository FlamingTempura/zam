const { test } = require('tap');
const zam = require('../');
const { steps, up, $ } = require('./test-utils');

test('z-attr-*', t => { // Attribute value
	t.plan(6);
	up(`<input type="text" z-attr-disabled="!showMe" z-value="!showMe"></input>
		<div z-attr-lang="showMe ? 'english' : 'french'"></div>`);
	let view = zam(document.body);
	view.showMe = false;
	steps(
		() => {
			t.equal($('input').getAttribute('disabled'), 'disabled');
			t.equal($('input').getAttribute('value'), 'true');
			t.equal($('div').getAttribute('lang'), 'french');
			view.showMe = true;
		},
		() => {
			t.equal($('input').getAttribute('disabled'), null);
			t.equal($('input').getAttribute('value'), 'false');
			t.equal($('div').getAttribute('lang'), 'english');
		}
	);
});