const { test } = require('tap');
const zam = require('../');
const { steps, up, $, $$ } = require('./test-utils');

test('transclude in loop', t => {
	t.plan(3);
	up(`<q z-thing-in="things"><a>{{ i }}</a></q>`);

	zam.directive({
		query: '<q>',
		template: '<p z-transclude></p>',
		order: 100,
		initialize(el) {
			console.log('@@@ init');
		},
		create(scope, el) {
			console.log('@@@ create', scope.animal)
		},
		update(scope, el) {
			console.log('@@@ update', scope.animal)
		}
	});
	let view = zam(document.body);
	view.i = 20;
	view.things = [1, 2];
	steps(
		() => {
			console.log(document.body.outerHTML);
			t.equal($$('p').length, 2);
			t.equal($$('p')[0].textContent, '20');
			t.equal($$('p')[1].textContent, '20');
		}
	);
});
return

test('directive template in loop', t => {
	t.plan(3);
	up(`<q z-thing-in="things"></q>`);

	zam.directive({
		query: '<q>',
		template: '<p>{{ i }}</p>'
	});
	let view = zam(document.body);
	view.i = 20;
	view.things = [1, 2];
	steps(
		() => {
			console.log(document.body.outerHTML);
			t.equal($$('p').length, 2);
			t.equal($$('p')[0].textContent, '20');
			t.equal($$('p')[1].textContent, '20');
		}
	);
});
return 


test('directive template in loop', t => {
	t.plan(3);
	up(`<div z-animal-in="animals"><animal>{{ animal.type }}: {{ animal.name }}</animal></div>`);
	//up(`<div z-animal-in="animals"><p>{{ animal.type }}: {{ animal.name }}</p></div>`);

	zam.directive({
		query: '<animal>',
		template: '<p z-transclude></p>',
		initialize(el) {
			console.log('init');
		},
		create(scope, el) {
			console.log('create', scope.animal)
		},
		update(scope, el) {
			console.log('update', scope.animal)
		}
	});
	let view = zam(document.body);
	view.animals = [{ type: 'cat', name: 'Felix' }, { type: 'dog', name: 'Spot' }];
	steps(
		() => {
			console.log(document.body.outerHTML);
			t.equal($$('p').length, 2);
			t.equal($$('p')[0].textContent, 'cat: Felix');
			t.equal($$('p')[1].textContent, 'dog: Spot');
		}
	);
});
return 

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

/*
// this will fail because z-exists deletes the node which the virtual node is looking after
test('multiple directives', t => {
	t.plan(7);
	up(`<div z-thing-in="things" z-exist="thing.show">{{ thing.foo }}</div>`);
	let view = zam(document.body);
	view.things = [{ show: true, foo: 'blah'}, { show: false, foo: 'hello' }];
	steps(
		() => {
			console.log(document.body.innerHTML);
			console.log('_____update_____')
			t.equal($$('div').length, 1);
			t.equal($$('div')[0].textContent, 'blah');
			view.boo = 1;
			view.things[1].show = true;
		},
		() => {
			console.log(document.body.innerHTML);
			console.log('_____ahhh_____')
			t.equal($$('div').length, 2);
			t.equal($$('div')[0].textContent, 'blah');
			t.equal($$('div')[1].textContent, 'hello');
			view.things[0].show = false;
		},
		() => {
			console.log(document.body.innerHTML);
			console.log('_____qq_____')
			t.equal($$('div').length, 1);
			t.equal($$('div')[0].textContent, 'hello');
		}
	);
});*/
