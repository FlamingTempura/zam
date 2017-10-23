'use strict';
var test = require('tap').test,
	zam = require('../'),
	frames = require('./test-utils').frames,
	up = require('./test-utils').up,
	$ = require('./test-utils').$;

test('text interpolation', t => {
	t.plan(12);
	up(`<div id="a">{{ name }}</div>
		<div id="b">{{ name + 'y' }}</div>
		<div id="c">{{ something }}</div>
		<form><div>{{name + 'y'}}</div><button>ok</button></form>`); // check that forms don't break things
	var view = zam(document.body);
	t.equal($('#a').textContent, '');
	t.equal($('#b').textContent, '');
	frames(
		() => {
			t.equal($('#a').textContent, '');
			t.equal($('#b').textContent, 'y');
			t.equal($('form div').textContent, 'y');
			view.name = 'dave';
		},
		() => {
			t.equal($('#a').textContent, 'dave');
			t.equal($('#b').textContent, 'davey');
			t.equal($('#c').textContent, '');
			t.equal($('form div').textContent, 'davey');
			view.name = 'bob';
		},
		() => {
			t.equal($('#a').textContent, 'bob');
			t.equal($('#b').textContent, 'boby');
			t.equal($('form div').textContent, 'boby');
		}
	);
});

test('html interpolation', t => {
	t.plan(10);
	up(`<div id="a">{{{ name }}}</div>
		<div id="b">{{{ name + 'y' }}}</div>`);
	var view = zam(document.body);
	frames(
		() => {
			t.equal($('#a').textContent, '');
			t.equal($('#b').textContent, 'y');
			view.name = '<strong>dave</strong>';
		},
		() => {
			t.equal($('#a').textContent, 'dave');
			t.equal($('#b').textContent, 'davey');
			t.equal($('#a strong').textContent, 'dave');
			t.equal($('#b strong').textContent, 'dave');
			view.name = '<em>bob</em>';
		},
		() => {
			t.equal($('#a').textContent, 'bob');
			t.equal($('#b').textContent, 'boby');
			t.equal($('#a em').textContent, 'bob');
			t.equal($('#b em').textContent, 'bob');
		}
	);
});

test('z-text', t => { // set text content
	t.plan(6);
	up(`<div>Name: <span z-text="person.name">delete me</span></div>
		<strong z-text="'Welcome ' + person.name"></strong>`);
	var view = zam(document.body);
	frames(
		() => {
			t.equal($('span').textContent, '');
			t.equal($('strong').textContent, 'Welcome ');
			view.person = { name: 'Alice' };
		},
		() => {
			t.equal($('span').textContent, 'Alice');
			t.equal($('strong').textContent, 'Welcome Alice');
			view.person = { name: 'Bob' };
		},
		() => {
			t.equal($('span').textContent, 'Bob');
			t.equal($('strong').textContent, 'Welcome Bob');
		}
	);
});

test('z-html', t => { // Set HTML content
	t.plan(10);
	up(`<div z-html="boldName">Some HTML</div>
		Even more HTML: <span z-html="italicName + 'boo'"></span>`);
	var view = zam(document.body);
	frames(
		() => {
			t.equal($('div').textContent, '');
			t.equal($('span').textContent, 'boo');
			view.boldName = '<strong>Alice</strong>';
			view.italicName = '<em>Bob</em>';
		},
		() => {
			t.equal($('div').textContent, 'Alice');
			t.equal($('div strong').textContent, 'Alice');
			t.equal($('span').textContent, 'Bobboo');
			t.equal($('span em').textContent, 'Bob');
		},
		() => {
			view.boldName = '<strong>Bob</strong>';
			view.italicName = '<em>Alice</em>';
		},
		() => {
			t.equal($('div').textContent, 'Bob');
			t.equal($('div strong').textContent, 'Bob');
			t.equal($('span').textContent, 'Aliceboo');
			t.equal($('span em').textContent, 'Alice');
		}
	);
});
