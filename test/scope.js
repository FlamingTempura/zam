/* jshint node: true, esversion: 6, browser: true, unused: true */
'use strict';
var test = require('tap').test,
	zam = require('../'),
	frames = require('./test-utils').frames,
	up = require('./test-utils').up,
	$ = require('./test-utils').$;

test('root scope', function (t) {
	t.plan(2);
	// The root object is provided to all components and can be used to provide methods and data which should be available to all components.
	up(`{{ food }} {{ drink }} {{ sweet }}. {{ date(d) }}`); // chips, beer, cake
	var view = zam(document.body);
	frames(
		function () {
			global.food = 'carrots';
			zam.root.drink = 'water';
			view.sweet = 'cake';
			view.d = new Date(2017, 0, 17);
			zam.root.date = function (date) {
				return date.getDate() + ' Jan';
			};
		},
		function () {
			t.equals(document.body.textContent, 'carrots water cake. 17 Jan');
			zam.root.food = 'chips';
			view.drink = 'beer';
			zam.root.sweet = 'chocolate';
			view.date = function (date) {
				return date.getDate() + ' enero';
			};
		},
		function () {
			t.equals(document.body.textContent, 'chips beer cake. 17 enero');
		}
	);
});

test('parent then child scoping', function (t) {
	t.plan(4);
	up(`<div id="container">{{ name }}<div id="thing">{{ food }}{{ $parent.food }}</div></div>`);
	var container = zam($('#container')),
		thing = zam($('#thing'));
	container.name = 'joe';
	container.food = 'pop';
	frames(
		function () {
			t.equals($('#container').textContent, 'joepoppop');
			t.equals($('#thing').textContent, 'poppop');
			thing.name = 'jane';
			thing.food = 'mess';
		},
		function () {
			t.equals($('#container').textContent, 'joemesspop');
			t.equals($('#thing').textContent, 'messpop');
		}
	);
});

test('child then parent scoping', function (t) {
	t.plan(4);
	up(`<div id="container">{{ name }}<div id="thing">{{ food }}{{ $parent.food }}</div></div>`);
	var thing = zam($('#thing')),
		container = zam($('#container'));
	frames(
		function () {
			container.name = 'joe';
			container.food = 'pop';
		},
		function () {
			t.equals($('#container').textContent, 'joepoppop');
			t.equals($('#thing').textContent, 'poppop');
			thing.name = 'jane';
			thing.food = 'mess';
		},
		function () {
			t.equals($('#container').textContent, 'joemesspop');
			t.equals($('#thing').textContent, 'messpop');
		}
	);
});

test('utility functions', function (t) {
	t.plan(1);
	up(`{{ number(1.553, 1) }} {{ number(1.553) }} {{ percent(0.17) }}`);
	zam(document.body);
	frames(
		function () {
			t.equals(document.body.textContent, '1.6 1.55 17.00%');
		}
	);
});
