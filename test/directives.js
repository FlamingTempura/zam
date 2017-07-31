/* jshint node: true, esversion: 6, browser: true, unused: true */
'use strict';
var test = require('tap').test,
	zam = require('../'),
	frames = require('./test-utils').frames,
	up = require('./test-utils').up,
	$ = require('./test-utils').$,
	$$ = require('./test-utils').$$;


test('directive template', function (t) {
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
		function () {
			console.log(document.body.outerHTML);
			t.equal($$('p').length, 2);
			t.equal($$('p')[0].textContent, 'me: thing');
			t.equal($$('p')[1].textContent, 'joe: blah');
		}
	);
});
return;

test('directive template', function (t) {
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
		function () {
			console.log(document.body.outerHTML);
			t.equal($$('p').length, 2);
			t.equal($$('p')[0].textContent, 'me: thing');
			t.equal($$('p')[1].textContent, 'joe: blah');
		}
	);
});
return;
test('custom directives', function (t) {
	t.plan(2);
	up(`<div z-todo-in="todos"><todo-item></todo-item></div>
		<span thing></span>`);

	zam.directive({
		tag: 'todo-item',
		create: function () {
			//console.log('aaa')
		},
		update: function (scope, el) {
			el.textContent = scope.todo.message;
		}
	});

	zam.directive({
		attribute: 'thing',
		update: function (scope, el) {
			el.textContent = scope.boo;
		}
	});

	var view = zam(document.body);
	frames(
		function () {
			view.todos = [{ message: 'buy cake' }];
			view.boo = 'foo';
		},
		function () {
			t.equal($('todo-item').textContent, 'buy cake');
			t.equal($('span').textContent, 'foo');
		}
	);
});
/*
// this will fail because z-exists deletes the node which the virtual node is looking after
test('multiple directives', function (t) {
	t.plan(7);
	up(`<div z-thing-in="things" z-exist="thing.show">{{ thing.foo }}</div>`);
	var view = zam(document.body);
	view.things = [{ show: true, foo: 'blah'}, { show: false, foo: 'hello' }];
	frames(
		function () {
			console.log(document.body.innerHTML);
			console.log('_____update_____')
			t.equal($$('div').length, 1);
			t.equal($$('div')[0].textContent, 'blah');
			view.boo = 1;
			view.things[1].show = true;
		},
		function () {
			console.log(document.body.innerHTML);
			console.log('_____ahhh_____')
			t.equal($$('div').length, 2);
			t.equal($$('div')[0].textContent, 'blah');
			t.equal($$('div')[1].textContent, 'hello');
			view.things[0].show = false;
		},
		function () {
			console.log(document.body.innerHTML);
			console.log('_____qq_____')
			t.equal($$('div').length, 1);
			t.equal($$('div')[0].textContent, 'hello');
		}
	);
});*/


test('custom prefix', function (t) {
	t.plan(1);
	up(`<div foo-text="bar"></div>`);
	zam.prefix = 'foo-';
	var view = zam(document.body);
	view.bar = 'blah';
	frames(
		function () {
			t.equal($('div').textContent, 'blah');
		}
	);
	zam.prefix = 'z-';
});
