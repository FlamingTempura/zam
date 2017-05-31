/* jshint node: true, esversion: 6, browser: true, unused: true */
'use strict';
var test = require('tap').test,
	zam = require('../'),
	frames = require('./test-utils').frames,
	up = require('./test-utils').up,
	$ = require('./test-utils').$,
	$$ = require('./test-utils').$$;

test('z-*-in', function (t) { // Iterate through an array
	t.plan(14);
	up(`<div z-todo-in="todos" z-key="todo.message">{{ todo.message }}</div>
		<span z-todo-in="plob"></span>`);
	var view = zam(document.body);
	frames(
		function () {
			view.todos = [
				{ message: 'Buy food' },
				{ message: 'Fix code' },
				{ message: 'Wash clothes' }
			];
		},
		function () {
			var els = $$('div');
			t.equal(els.length, 3);
			view.todos.forEach(function (todo, i) {
				t.equal(els[i].textContent, todo.message);
			});
			view.todos.push({ message: 'Wash car' });
		},
		function () {
			var els = $$('div');
			t.equal(els.length, 4);
			view.todos.forEach(function (todo, i) {
				t.equal(els[i].textContent, todo.message);
			});
			view.todos.splice(2, 1);
		},
		function () {
			var els = $$('div');
			t.equal(els.length, 3);
			view.todos.forEach(function (todo, i) {
				t.equal(els[i].textContent, todo.message);
			});
			t.equal($('span'), null);
		}
	);
});

test('z-*-in (stress)', function (t) { // Iterate through an array
	var nRepeats = 3,
		nLists = 100,
		nItems = 5,
		//nRepeats = 1,
		//nLists = 2,
		//nItems = 2,
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
					return { message: Math.round(Math.random() * 10).toString(16) };
				})
			};
		});
		totalTime2 += Date.now() - t1;
		//console.log('-------- SET ---------')
		view.$();
		totalTime3 += Date.now() - t1;
		//console.log('-------- UPDATED ---------')
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


/*var repeats = 3,
	count = 0,
	time = 0;*/
//var n1 = 100, n2 = 100;
//var n1 = 5, n2 = 5;
/*new Array(repeats).fill(1).forEach(function () {
	test('z-*-in (stress)', function (t) { // Iterate through an array
		var t1 = Date.now();
		t.plan(2);
		up(`<div z-list-in="lists"><span z-itaem-in="list.items">{{ item.message }}</span></div>`);
		var view = zam(document.body);
		//view.lists = [1, 2, 3];
		view.lists = new Array(n1).fill(1).map(function () {
			return {
				items: new Array(n2).fill(1).map(function () {
					return { message: String(Math.round(Math.random() * 10000)) };
				})
			};
		});
		frames(
			function () {
				t.equal($$('div').length, n1);
				t.equal($$('span').length, n1 * n2);
				time += Date.now() - t1;
				count++;
				if (count === repeats) {
					console.log('AVG TIME TAKEN OVER', repeats, 'REPEATS:', (time / repeats / 1000).toFixed(3) + 's');
				}
			}
		);
	});
});*/


