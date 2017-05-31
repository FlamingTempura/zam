/* jshint node: true, esversion: 6, browser: true, unused: true */
'use strict';
var test = require('tap').test,
	zam = require('../'),
	frames = require('./test-utils').frames,
	up = require('./test-utils').up,
	$ = require('./test-utils').$;

test('text interpolation', function (t) {
	t.plan(9);
	up(`<div id="a">{{ name }}</div>
		<div id="b">{{ name + 'y' }}</div>
		<div id="c">{{ something }}</div>`);
	var view = zam(document.body);
	t.equal($('#a').textContent, '');
	t.equal($('#b').textContent, '');
	frames(
		function () {
			t.equal($('#a').textContent, '');
			t.equal($('#b').textContent, 'y');
			view.name = 'dave';
		},
		function () {
			t.equal($('#a').textContent, 'dave');
			t.equal($('#b').textContent, 'davey');
			t.equal($('#c').textContent, '');
			view.name = 'bob';
		},
		function () {
			t.equal($('#a').textContent, 'bob');
			t.equal($('#b').textContent, 'boby');
		}
	);
});

test('html interpolation', function (t) {
	t.plan(10);
	up(`<div id="a">{{{ name }}}</div>
		<div id="b">{{{ name + 'y' }}}</div>`);
	var view = zam(document.body);
	frames(
		function () {
			t.equal($('#a').textContent, '');
			t.equal($('#b').textContent, 'y');
			view.name = '<strong>dave</strong>';
		},
		function () {
			t.equal($('#a').textContent, 'dave');
			t.equal($('#b').textContent, 'davey');
			t.equal($('#a strong').textContent, 'dave');
			t.equal($('#b strong').textContent, 'dave');
			view.name = '<em>bob</em>';
		},
		function () {
			t.equal($('#a').textContent, 'bob');
			t.equal($('#b').textContent, 'boby');
			t.equal($('#a em').textContent, 'bob');
			t.equal($('#b em').textContent, 'bob');
		}
	);
});

test('z-text', function (t) { // set text content
	t.plan(6);
	up(`<div>Name: <span z-text="person.name">delete me</span></div>
		<strong z-text="'Welcome ' + person.name"></strong>`);
	var view = zam(document.body);
	frames(
		function () {
			t.equal($('span').textContent, '');
			t.equal($('strong').textContent, 'Welcome ');
			view.person = { name: 'Alice' };
		},
		function () {
			t.equal($('span').textContent, 'Alice');
			t.equal($('strong').textContent, 'Welcome Alice');
			view.person = { name: 'Bob' };
		},
		function () {
			t.equal($('span').textContent, 'Bob');
			t.equal($('strong').textContent, 'Welcome Bob');
		}
	);
});

test('z-html', function (t) { // Set HTML content
	t.plan(10);
	up(`<div z-html="boldName">Some HTML</div>
		Even more HTML: <span z-html="italicName + 'boo'"></span>`);
	var view = zam(document.body);
	frames(
		function () {
			t.equal($('div').textContent, '');
			t.equal($('span').textContent, 'boo');
			view.boldName = '<strong>Alice</strong>';
			view.italicName = '<em>Bob</em>';
		},
		function () {
			t.equal($('div').textContent, 'Alice');
			t.equal($('div strong').textContent, 'Alice');
			t.equal($('span').textContent, 'Bobboo');
			t.equal($('span em').textContent, 'Bob');
		},
		function () {
			view.boldName = '<strong>Bob</strong>';
			view.italicName = '<em>Alice</em>';
		},
		function () {
			t.equal($('div').textContent, 'Bob');
			t.equal($('div strong').textContent, 'Bob');
			t.equal($('span').textContent, 'Aliceboo');
			t.equal($('span em').textContent, 'Alice');
		}
	);
});
