'use strict';
var test = require('tap').test,
	zam = require('../'),
	frames = require('./test-utils').frames,
	up = require('./test-utils').up,
	$ = require('./test-utils').$,
	$$ = require('./test-utils').$$;


test('directive template', t => {
	t.plan(7);
	up(`<memo style="color: red" z-show="show" z-border="border"></memo>`);

	zam.directive({
		tag: 'memo',
		template: '<p>{{ memo.who }}: {{ memo.message }}</p>'
	});
	var view = zam(document.body);
	view.memo = { who: 'me', message: 'thing' };
	view.border = '1px solid blue';
	frames(
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

test('directive events', t => {
	t.plan(4);
	up(`<div z-todo-in="todos"><todo-item z-id="todo.id"></todo-item></div>
		<span thing></span>`);

	zam.directive({
		tag: 'todo-item',
		create(scope, el) {
			el.style.color = 'red';
		},
		update(scope, el) {
			el.textContent = scope.todo.message;
		}
	});

	var view = zam(document.body);
	frames(
		() => {
			view.todos = [{ id: 'a', message: 'buy cake' }, { id: 'b', message: 'eat cake' }];
			view.boo = 'foo';
		},
		() => {
			t.equal($('#a').style.color, 'red');
			t.equal($('#a').textContent, 'buy cake');
			t.equal($('todo-item#b').style.color, 'red');
			t.equal($('todo-item#b').textContent, 'eat cake');
		}
	);
});

return;
test('directive template', t => {
	t.plan(3);
	up(`<section>
			<memo z-let-memo="memos[0]"></memo>
			<memo z-let-memo="memos[1]"></memo>
		</section>`);

	zam.directive({
		tag: 'memo',
		template: '<p>{{ memo.who }}: {{ memo.message }}</p>'
	});
	var view = zam(document.body);
	view.memos = [{ who: 'me', message: 'thing' }, { who: 'joe', message: 'blah' }];
	frames(
		() => {
			t.equal($$('p').length, 2);
			t.equal($$('p')[0].textContent, 'me: thing');
			t.equal($$('p')[1].textContent, 'joe: blah');
		}
	);
});



return;

test('directive template', t => {
	t.plan(3);
	up(`<section>
			<memo z-memo-in="memos"></memo>
		</section>`);

	zam.directive({
		tag: 'memo',
		template: '<p>{{ memo.who }}: {{ memo.message }}</p>'
	});
	var view = zam(document.body);
	view.memos = [{ who: 'me', message: 'thing' }, { who: 'joe', message: 'blah' }];
	frames(
		() => {
			console.log(document.body.outerHTML);
			t.equal($$('p').length, 2);
			t.equal($$('p')[0].textContent, 'me: thing');
			t.equal($$('p')[1].textContent, 'joe: blah');
		}
	);
});

/*
// this will fail because z-exists deletes the node which the virtual node is looking after
test('multiple directives', t => {
	t.plan(7);
	up(`<div z-thing-in="things" z-exist="thing.show">{{ thing.foo }}</div>`);
	var view = zam(document.body);
	view.things = [{ show: true, foo: 'blah'}, { show: false, foo: 'hello' }];
	frames(
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
