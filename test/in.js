/* jshint node: true, esversion: 6, browser: true, unused: true */
'use strict';
var test = require('tap').test,
	zam = require('../'),
	frames = require('./test-utils').frames,
	up = require('./test-utils').up,
	$ = require('./test-utils').$,
	$$ = require('./test-utils').$$;

test('z-*-in', function (t) { // Iterate through an array
	t.plan(7);
	up(`<div z-todo-in="todos">{{ $index }}: {{ todo }}</div>`);
	var view = zam(document.body);
	view.todos = ['Buy food', 'Fix code', 'Wash clothes'];
	frames(
		function () {
			var els = $$('div');
			t.equal(els.length, 3);
			view.todos.forEach(function (todo, i) {
				t.equal(els[i].getAttribute('z-key'), null);
				t.equal(els[i].textContent, i + ': ' + todo);
			});
		}
	);
});

test('z-*-in array', function (t) { // Iterate through an array
	t.plan(21);
	up(`<div z-todo-in="todos" z-key="todo.message">{{ $index }}: {{ todo.message }}</div>
		<span z-todo-in="plob"></span>`);
	var view = zam(document.body);
	frames(
		function () {
			view.todos = [
				{ message: 'Buy food' },
				{ message: 'Fix code' },
				{ message: 'Wash clothes' }, // this should get overriden by next element
				{ message: 'Wash clothes' }
			];
			t.equal($('span'), null);
		},
		function () {
			var els = $$('div');
			t.equal(els.length, 3);
			view.todos.slice(0, -1).forEach(function (todo, i) {
				t.equal(els[i].getAttribute('z-key'), null);
				t.equal(els[i].textContent, (i === 2 ? 3 : i) + ': ' + todo.message); // duplicate shouldn't show, so index will be overridden
			});
			view.todos.splice(3, 1); // remove the duplicate
			view.todos.push({ message: 'Wash car' });
		},
		function () {
			var els = $$('div');
			t.equal(els.length, 4);
			view.todos.forEach(function (todo, i) {
				t.equal(els[i].textContent, i + ': ' + todo.message);
			});
			view.todos.splice(2, 1);
		},
		function () {
			var els = $$('div');
			t.equal(els.length, 3);
			view.todos.forEach(function (todo, i) {
				t.equal(els[i].textContent, i + ': ' + todo.message);
			});
			view.todos.unshift(view.todos.pop()); // test that re-ordering works
		},
		function () {
			var els = $$('div');
			t.equal(els.length, 3);
			view.todos.forEach(function (todo, i) {
				t.equal(els[i].textContent, i + ': ' + todo.message);
			});
		}
	);
});

test('z-*-in object', function (t) { // Iterate through an array
	t.plan(13);
	up(`The apple:
		<div z-info-in="apple">{{ $index }}: {{ info }}</div>`);
	var view = zam(document.body);
	view.apple = {
		type: 'granny smith',
		color: 'green',
		weight: '0.1kg'
	};
	frames(
		function () {
			var els = $$('div');
			t.equal(els.length, 3);
			Object.keys(view.apple).forEach(function (key, i) {
				t.equal(els[i].textContent, key + ': ' + view.apple[key]);
			});
			view.apple.price = '30p';
		},
		function () {
			var els = $$('div');
			t.equal(els.length, 4);
			Object.keys(view.apple).forEach(function (key, i) {
				t.equal(els[i].textContent, key + ': ' + view.apple[key]);
			});
			delete view.apple.weight;
		},
		function () {
			var els = $$('div');
			t.equal(els.length, 3);
			Object.keys(view.apple).forEach(function (key, i) {
				t.equal(els[i].textContent, key + ': ' + view.apple[key]);
			});
		}
	);
});

test('z-*-in (stress)', function (t) { // Iterate through an array
	var nRepeats = 3,
		nLists = 100,
		nItems = 5,
		count = 0,
		totalTime1 = 0,
		totalTime2 = 0,
		totalTime3 = 0;
	t.plan(1 + nRepeats * 2);
	new Array(nRepeats).fill(1).forEach(function () {
		up(`<div z-list-in="lists">
				<span z-item-in="list.items">{{ item.message }}</span>
			</div>`);
		var t1 = Date.now();
		var view = zam(document.body);
		totalTime1 += Date.now() - t1;
		view.lists = new Array(nLists).fill(1).map(function () {
			return {
				items: new Array(nItems).fill(1).map(function () {
					return { message: Math.round(Math.random() * 1e12).toString(16) };
				})
			};
		});
		totalTime2 += Date.now() - t1;
		view.$();
		totalTime3 += Date.now() - t1;
		t.equal($$('div').length, nLists);
		t.equal($$('span').length, nLists * nItems);
		count++;
		if (count === nRepeats) {
			t.equal(totalTime3 < 30000, true);

			console.log('AVG TIME TAKEN OVER', nRepeats, 'REPEATS:', (totalTime3 / nRepeats / 1000).toFixed(3) + 's');
			console.log(' -> INIT:  ', (totalTime1 / nRepeats / 1000).toFixed(3) + 's');
			console.log(' -> SET:   ', ((totalTime2 - totalTime1) / nRepeats / 1000).toFixed(3) + 's');
			console.log(' -> UPDATE:', ((totalTime3 - totalTime2) / nRepeats / 1000).toFixed(3) + 's');
		}
	});
});