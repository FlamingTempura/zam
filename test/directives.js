const { test } = require('tap');
const zam = require('../');
const { steps, up, $, $$ } = require('./test-utils');

test('directive template', t => {
	t.plan(7);
	up(`<memo style="color: red" z-show="show" z-border="border"></memo>`);

	zam.directive({
		query: '<memo>',
		template: '<p>{{ memo.who }}: {{ memo.message }}</p>'
	});

	let view = zam(document.body);
	view.memo = { who: 'me', message: 'thing' };
	view.border = '1px solid blue';
	steps(
		() => {
			t.equal($$('memo').length, 0);
			t.equal($('p').style.color, 'red');
			t.equal($('p').style.border, '1px solid blue');
			t.equal($('p').textContent, 'me: thing');
			view.border = '1px solid green';
			view.memo.who = 'paul';
		},
		() => {
			t.equal($('p').style.color, 'red');
			t.equal($('p').style.border, '1px solid green');
			t.equal($('p').textContent, 'paul: thing');
		}
	);
});

test('directive lifecycle', t => {
	t.plan(4);
	up(`<div z-todo-in="todos"><todo-item z-id="todo.id"></todo-item></div>
		<span thing></span>`);

	zam.directive({
		query: '<todo-item>',
		template: '<div class="todo-item"></div>',
		create(scope, el) {
			el.style.color = 'red';
		},
		update(scope, el) {
			el.textContent = scope.todo.message;
		}
	});

	let view = zam(document.body);
	view.todos = [{ id: 'a', message: 'buy cake' }, { id: 'b', message: 'eat cake' }];
	steps(
		() => {
			t.equal($('#a').style.color, 'red');
			t.equal($('#a').textContent, 'buy cake');
			t.equal($('.todo-item#b').style.color, 'red');
			t.equal($('.todo-item#b').textContent, 'eat cake');
		}
	);
});

test('directive attributes', t => {
	t.plan(8);
	up(`<bork color="red" type="1"></bork>
		<bork color="blue" type="2" big-red="9"></bork>
		<bork></bork>`);
	let i = 0;
	zam.directive({
		query: '<bork type big-(.+)="">',
		create(scope, el, tag, type, big) {
			if (i++ === 0) {
				t.equal(type.value(), 1);
				t.equal(big.value(), undefined);
			} else {
				t.equal(type.value(), 2);
				t.equal(big.name, 'big-red');
				t.equal(big.match[0], 'red');
				t.equal(big.value(), 9);
			}
		}
	});
	let view = zam(document.body);
	view.memo = { who: 'me', message: 'thing' };
	steps(
		() => {
			t.equal($$('bork')[0].getAttribute('color'), 'red');
			t.equal($$('bork')[1].getAttribute('color'), 'blue');
		}
	);
});

test('directive template in loop', t => {
	t.plan(3);
	up(`<qa z-thing-in="things"></qa>`);

	zam.directive({
		query: '<qa>',
		template: '<p>{{ i }}</p>'
	});
	let view = zam(document.body);
	view.i = 20;
	view.things = [1, 2];
	steps(
		() => {
			t.equal($$('p').length, 2);
			t.equal($$('p')[0].textContent, '20');
			t.equal($$('p')[1].textContent, '20');
		}
	);
});

test('inherit in loop', t => {
	t.plan(3);
	up(`<qb z-thing-in="things">{{ i }}</qb>`);

	zam.directive({
		query: '<qb>',
		template: '<p z-inherit></p>'
	});
	let view = zam(document.body);
	view.i = 20;
	view.things = [1, 2];
	steps(
		() => {
			t.equal($$('p').length, 2);
			t.equal($$('p')[0].textContent, '20');
			t.equal($$('p')[1].textContent, '20');
		}
	);
});
