const { test } = require('tap');
const zam = require('../');
const { steps, up, $ } = require('./test-utils');

test('text interpolation', t => {
	t.plan(14);
	up(`<div id="a">{{ name }}</div>
		<div id="b">{{ name + 'y' }}</div>
		<div id="c">{{ something }}</div>
		<div id="e">{{ date.toISOString() }}</div>
		<form><div>{{name + 'y'}}</div><button>ok</button></form>`); // check that forms don't break things
	let view = zam(document.body);
	view.date = new Date(1509028530345);
	t.equal($('#a').textContent, '');
	t.equal($('#b').textContent, '');
	steps(
		() => {
			t.equal($('#a').textContent, '');
			t.equal($('#b').textContent, 'y');
			t.equal($('form div').textContent, 'y');
			t.equal($('#e').textContent, '2017-10-26T14:35:30.345Z');
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
			view.date.setTime(1412117200166);
		},
		() => {
			t.equal($('#e').textContent, '2014-09-30T22:46:40.166Z');
		}
	);
});

test('html interpolation', t => {
	t.plan(15);
	up(`<div id="a">{{{ name }}}</div>
		<div id="b">{{{ name + 'y' }}} boo</div>
		<div id="c"><b>qq</b>{{{ name + 'y' }}} <a>moo</a></div>`);
	let view = zam(document.body);
	steps(
		() => {
			t.equal($('#a').textContent, '');
			t.equal($('#b').textContent, 'y boo');
			t.equal($('#c').textContent, 'qqy moo');
			view.name = '<strong>dave</strong>';
		},
		() => {
			t.equal($('#a').textContent, 'dave');
			t.equal($('#b').textContent, 'davey boo');
			t.equal($('#c').textContent, 'qqdavey moo');
			t.equal($('#a strong').textContent, 'dave');
			t.equal($('#b strong').textContent, 'dave');
			t.equal($('#c strong').textContent, 'dave');
			view.name = '<em>bob</em>';
		},
		() => {
			t.equal($('#a').textContent, 'bob');
			t.equal($('#b').textContent, 'boby boo');
			t.equal($('#c').textContent, 'qqboby moo');
			t.equal($('#a em').textContent, 'bob');
			t.equal($('#b em').textContent, 'bob');
			t.equal($('#c em').textContent, 'bob');
		}
	);
});

test('z-text', t => { // set text content
	t.plan(6);
	up(`<div>Name: <span z-text="person.name">delete me</span></div>
		<strong z-text="'Welcome ' + person.name"></strong>`);
	let view = zam(document.body);
	steps(
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
	let view = zam(document.body);
	steps(
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

test('incomplete tags', t => {
	t.plan(8);
	up(`<div id="a">{{ hello</div>
		<div id="b">{{ hello }</div>
		<div id="c">hello }}</div>
		<div id="d">{ hello }}</div>
		<div id="e">{{ hello }} }}</div>
		<div id="f">{ {{ hello }} }</div>
		<div id="g">{{ hello }} {{</div>
		<div id="h">{{{ hello }}} {{</div>`);
	let view = zam(document.body);
	view.hello = 'boo';
	steps(
		() => {
			t.equal($('#a').textContent, '{{ hello');
			t.equal($('#b').textContent, '{{ hello }');
			t.equal($('#c').textContent, 'hello }}');
			t.equal($('#d').textContent, '{ hello }}');
			t.equal($('#e').textContent, 'boo }}');
			t.equal($('#f').textContent, '{ boo }');
			t.equal($('#g').textContent, 'boo {{');
			t.equal($('#h').textContent, 'boo {{');
		}
	);
});
