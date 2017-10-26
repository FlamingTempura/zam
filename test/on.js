'use strict';
var test = require('tap').test,
	zam = require('../'),
	frames = require('./test-utils').frames,
	up = require('./test-utils').up,
	$ = require('./test-utils').$,
	$$ = require('./test-utils').$$,
	trigger = require('./test-utils').trigger;

test('z-on-*', t => { // Event handler
	t.plan(9);
	up(`<input type="button" z-on-click="doSomething($event)" z-click="doSomething2($event)">
		<div z-on-mousemove="q = 'hello'">{{ i }}</div>
		<button z-on-click="bees.push('honey')">Bees</button>
		<div class="bee" z-bee-in="bees">Bees?!</div>`);
	var view = zam(document.body);
	view.i = 0;
	view.q = 'boo';
	view.bees = [];
	view.doSomething = function (e) {
		t.equal(typeof e, 'object');
		view.i = 1;
	};
	view.doSomething2 = function (e) {
		t.equal(typeof e, 'object');
	};
	frames(
		() => {
			t.equal($('div').textContent, '0');
			trigger($('input'), 'click');
			trigger($('div'), 'mousemove');
			t.equal(view.i, 1);
			t.equal(view.q, 'hello');
		},
		() => {
			t.equal($('div').textContent, '1');
			t.equal($$('.bee').length, 0);
			trigger($('button'), 'click');
		},
		() => {
			t.equal($$('.bee').length, 1);
			t.equal(view.bees.length, 1);
		}
	);
});

test('z-on-* shorthand', t => { // Event handler
	t.plan(5);
	up(`<input type="button" z-click="doSomething($event)">
		<div z-mousemove="q = 'hello'">{{ i }}</div>`);
	var view = zam(document.body);
	view.i = 0;
	view.q = 'boo';
	view.doSomething = function (e) {
		t.equal(typeof e, 'object');
		view.i = 1;
	};
	frames(
		() => {
			t.equal($('div').textContent, '0');
			trigger($('input'), 'click');
			trigger($('div'), 'mousemove');
			t.equal(view.i, 1);
			t.equal(view.q, 'hello');
		},
		() => {
			t.equal($('div').textContent, '1');
		}
	);
});

test('z-on-* shorthand', t => {
	t.plan(1);
	up(`<input type="button" z-click="i = 1">`);
	var view = zam(document.body);
	view.i = 0;
	frames(
		() => {
			trigger($('input'), 'click');
			t.equal(view.i, 1);
		}
	);
});

test('z-on-* destruction', t => {
	t.plan(2);
	up(`<input type="button" z-click="i = 1">`);
	var view = zam(document.body);
	view.i = 0;
	frames(
		() => {
			trigger($('input'), 'click');
			t.equal(view.i, 1);
			view.$destroy();
			trigger($('input'), 'click');
			t.equal(view.i, 1);
		}
	);
});

test('z-on-submit', t => {
	t.plan(1);
	up(`<form type="button" z-submit="i = 1"></form>`);
	var view = zam(document.body);
	view.i = 0;
	frames(
		() => {
			trigger($('form'), 'submit'); // should not trigger page change
			t.equal(view.i, 1);
		}
	);
});