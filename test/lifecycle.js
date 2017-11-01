const { test } = require('tap');
const zam = require('../');
const { steps, up, $ } = require('./test-utils');

test('create', t => {
	t.plan(8);
	up(`<div id="a">{{ name }}</div>
		<div id="b" z-text="name"></div>
		<div id="c" z-text="name">{{ name }}</div>`);
	let jq = [$('#c')]; // jquery-like
	jq.jquery = 'blah';
	let view1 = zam('#a'),
		view2 = zam($('#b')),
		view3 = zam(jq);
	t.equal($('#a').textContent, '');
	t.equal($('#b').textContent, '');
	t.equal($('#b').getAttribute('z-text'), null);
	t.equal($('#c').textContent, '');
	t.equal($('#c').getAttribute('z-text'), null);
	view1.name = view2.name = view3.name = 'Lizzy';
	steps(
		() => {
			t.equal($('#a').textContent, 'Lizzy');
			t.equal($('#b').textContent, 'Lizzy');
			t.equal($('#c').textContent, 'Lizzy');
		}
	);
});

test('destroy', t => {
	t.plan(4);
	up(`<div z-text="bar"></div>`);
	t.equal($('div').getAttribute('z-text'), 'bar');
	let view = zam(document.body);
	let count = 0;
	steps(
		() => {
			t.equal($('div').getAttribute('z-text'), null);
			view.$on('destroy', () => { count++; });
			view.$destroy();
		},
		() => {
			t.equal($('div').getAttribute('z-text'), 'bar');
			t.equal(count, 1);
		}
	);
});
