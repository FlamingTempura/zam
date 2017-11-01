const { test } = require('tap');
const zam = require('../');
const { steps, up, $, $$, trigger } = require('./test-utils');

test('isolate scope', t => {
	t.plan(24);
	up(`<input id="in_a" z-model="name">
		<div id="out_a">{{ name }}</div>
		<div z-isolate>
			<input id="in_b" z-model="name">
			<div id="out_b">{{ name }}</div>
			<div id="out_bp">{{ $parent.name }}</div>
		</div>`);

	let view = zam(document.body);
	view.name = 'Jerry';
	steps(
		() => {
			t.equal(view.name, 'Jerry');
			t.equal($('#in_a').value, 'Jerry');
			t.equal($('#out_a').textContent, 'Jerry');
			t.equal($('#in_b').value, 'Jerry');
			t.equal($('#out_b').textContent, 'Jerry');
			t.equal($('#out_bp').textContent, 'Jerry');
			$('#in_a').value = 'Jo';
			trigger($('#in_a'), 'input');
		},
		() => {
			t.equal(view.name, 'Jo');
			t.equal($('#in_a').value, 'Jo');
			t.equal($('#out_a').textContent, 'Jo');
			t.equal($('#in_b').value, 'Jo');
			t.equal($('#out_b').textContent, 'Jo');
			t.equal($('#out_bp').textContent, 'Jo');
			$('#in_b').value = 'John';
			trigger($('#in_b'), 'input');
		},
		() => {
			t.equal(view.name, 'Jo');
			t.equal($('#in_a').value, 'Jo');
			t.equal($('#out_a').textContent, 'Jo');
			t.equal($('#in_b').value, 'John');
			t.equal($('#out_b').textContent, 'John');
			t.equal($('#out_bp').textContent, 'Jo');
			$('#in_a').value = 'Jodie';
			trigger($('#in_a'), 'input');
		},
		() => {
			t.equal(view.name, 'Jodie');
			t.equal($('#in_a').value, 'Jodie');
			t.equal($('#out_a').textContent, 'Jodie');
			t.equal($('#in_b').value, 'John');
			t.equal($('#out_b').textContent, 'John');
			t.equal($('#out_bp').textContent, 'Jodie');
		}
	);
});

test('directive isolate scope', t => {
	t.plan(4);
	up(`<div id="a1">{{ i }}</div>
		<thing z-isolate>{{ i }}</thing>
		<thing z-isolate>{{ i }}</thing>
		<div id="a2">{{ i }}</div>`);

	let i = 0;
	zam.directive({
		query: '<thing>',
		create(scope) {
			scope.i = i++;
		}
	});

	let view = zam(document.body);
	view.i = 9;
	steps(
		() => {
			t.equal($('#a1').textContent, '9');
			t.equal($$('thing')[0].textContent, '0');
			t.equal($$('thing')[1].textContent, '1');
			t.equal($('#a2').textContent, '9');
		}
	);
});
