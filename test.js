/* jshint node: true */
'use strict';

var jsdom = require('jsdom'),
	test = require('tap').test,
	tack = require('./');

var up = function (html) { // set global document to new dom
	global.window = (new jsdom.JSDOM(html)).window;
	global.document = window.document;
};
var $ = function (selector) {
	return document.querySelector(selector);
};
var later = function (cb) { // simulate a change happening later
	setTimeout(cb, 5);
};
var trigger = function (element, eventname) {
	var event = new window.Event(eventname);
	element.dispatchEvent(event);
};

test('component creation', function (t) {
	t.plan(3);
	up(`<div id="a">{{ name }}</div>
		<div id="b">{{ name }}</div>
		<div id="c">{{ name }}</div>`);
	var view1 = tack('#a'),
		view2 = tack($('#b')),
		view3 = tack([$('#c')]); // jquery-like
	view1.name = view2.name = view3.name = 'Lizzy';
	view1.$();
	view2.$();
	view3.$();
	t.equal($('#a').textContent, 'Lizzy');
	t.equal($('#b').textContent, 'Lizzy');
	t.equal($('#c').textContent, 'Lizzy');
});

test('text interpolation', function (t) {
	t.plan(6);
	up(`<div id="a">{{ name }}</div>
		<div id="b">{{ name + 'y' }}</div>`);
	var view = tack(document.body);
	view.name = 'dave';
	t.equal($('#a').textContent, '');
	t.equal($('#b').textContent, '');
	view.$();
	t.equal($('#a').textContent, 'dave');
	t.equal($('#b').textContent, 'davey');
	later(function () {
		view.name = 'bob';
		view.$();
		t.equal($('#a').textContent, 'bob');
		t.equal($('#b').textContent, 'boby');
	});
});

test('html interpolation', function (t) {
	t.plan(10);
	up(`<div id="a">{{{ name }}}</div>
		<div id="b">{{{ name + 'y' }}}</div>`);
	var view = tack(document.body);
	view.name = '<strong>dave</strong>';
	t.equal($('#a').textContent, '');
	t.equal($('#b').textContent, '');
	view.$();
	t.equal($('#a').textContent, 'dave');
	t.equal($('#b').textContent, 'davey');
	t.equal($('#a strong').textContent, 'dave');
	t.equal($('#b strong').textContent, 'dave');
	later(function () {
		view.name = '<em>bob</em>';
		view.$();
		t.equal($('#a').textContent, 'bob');
		t.equal($('#b').textContent, 'boby');
		t.equal($('#a em').textContent, 'bob');
		t.equal($('#b em').textContent, 'bob');
	});
});

test('ta-text', function (t) { // set text content
	t.plan(6);
	up(`<div>Name: <span ta-text="person.name">delete me</span></div>
		<strong ta-text="'Welcome ' + person.name"></strong>`);
	var view = tack(document.body);
	t.equal($('span').textContent, '');
	t.equal($('strong').textContent, '');
	view.person = { name: 'Alice' };
	view.$();
	t.equal($('span').textContent, 'Alice');
	t.equal($('strong').textContent, 'Welcome Alice');
	later(function () {
		view.person = { name: 'Bob' };
		view.$();
		t.equal($('span').textContent, 'Bob');
		t.equal($('strong').textContent, 'Welcome Bob');
	});
});

test('ta-html', function (t) { // Set HTML content
	t.plan(10);
	up(`<div ta-html="boldName">Some HTML</div>
		Even more HTML: <span ta-html="italicName + 'boo'"></span>`);
	var view = tack(document.body);
	t.equal($('div').textContent, '');
	t.equal($('span').textContent, '');
	view.boldName = '<strong>Alice</strong>';
	view.italicName = '<em>Bob</em>';
	view.$();
	t.equal($('div').textContent, 'Alice');
	t.equal($('div strong').textContent, 'Alice');
	t.equal($('span').textContent, 'Bobboo');
	t.equal($('span em').textContent, 'Bob');
	later(function () {
		view.boldName = '<strong>Bob</strong>';
		view.italicName = '<em>Alice</em>';
		view.$();
		t.equal($('div').textContent, 'Bob');
		t.equal($('div strong').textContent, 'Bob');
		t.equal($('span').textContent, 'Aliceboo');
		t.equal($('span em').textContent, 'Alice');
	});
});

test('ta-show', function (t) { // Conditionally display the element. Equivelant to attr-display="thing ? "" : 'none'".
	t.plan(6);
	up(`<div ta-show="showMe">Hello</div>
		<span ta-show="!showMe">Boo</span>`);
	var view = tack(document.body);
	view.showMe = true;
	t.equal($('div').style.display, '');
	t.equal($('span').style.display, '');
	view.$();
	t.equal($('div').style.display, '');
	t.equal($('span').style.display, 'none');
	later(function () {
		view.showMe = false;
		view.$();
		t.equal($('div').style.display, 'none');
		t.equal($('span').style.display, '');
	});
});

test('ta-skip', function (t) { // Skip compilation of this element
	t.plan(2);
	up(`<div ta-skip>hello {{ skipme }}</div>
		<input type="text" ta-skip ta-model="blah">`);
	var view = tack(document.body);
	view.skipme = 'boo';
	view.blah = 'blah';
	view.$();
	t.equal($('div').textContent, 'hello {{ skipme }}');
	t.equal($('input').getAttribute('ta-model'), 'blah');
});

test('ta-attr-*', function (t) { // Attribute value
	t.plan(4);
	up(`<button ta-attr-disabled="!showMe"></button>
		<div ta-attr-lang="showMe ? 'english' : 'french'"></div>`);
	var view = tack(document.body);
	view.showMe = false;
	view.$();
	t.equal($('button').getAttribute('disabled'), 'disabled');
	t.equal($('div').getAttribute('lang'), 'french');
	later(function () {
		view.showMe = true;
		view.$();
		t.equal($('button').getAttribute('disabled'), null);
		t.equal($('div').getAttribute('lang'), 'english');
	});
});

test('ta-class-*', function (t) { // Conditional class name
	t.plan(2);
	up(`<h4 class="thing" ta-class-red="warning"></h4>`);
	var view = tack(document.body);
	view.warning = false;
	view.$();
	t.equal($('h4').getAttribute('class'), 'thing');
	later(function () {
		view.warning = true;
		view.$();
		t.equal($('h4').getAttribute('class'), 'thing red');
	});
});


test('ta-style-*', function (t) { // Style value
	t.plan(2);
	up(`<h1 ta-style-font-weight="big ? 'bold' : 'normal'"></h1>`);
	var view = tack(document.body);
	view.big = false;
	view.$();
	t.equal($('h1').style.fontWeight, 'normal');
	later(function () {
		view.big = true;
		view.$();
		t.equal($('h1').style.fontWeight, 'bold');
	});
});

test('ta-model', function (t) { // Two way binding with element value
	t.plan(6);
	up(`<input type="text" ta-model="blah">
		<div>such {{ blah }}</div>`);
	var view = tack(document.body);
	view.blah = 'boo';
	view.$();
	t.equal($('input').value, 'boo');
	t.equal($('div').textContent, 'such boo');
	$('input').value = 'wow';
	trigger($('input'), 'input');
	t.equal(view.blah, 'wow');
	t.equal($('div').textContent, 'such wow');
	later(function () {
		view.blah = 'amaze';
		view.$();
		t.equal($('input').value, 'amaze');
		t.equal($('div').textContent, 'such amaze');
	});
});

test('ta-on-*', function (t) { // Event handler
	t.plan(5);
	up(`<input type="button" ta-on-click="doSomething($event)">
		<div ta-on-mousemove="q = 'hello'">{{ i }}</div>`);
	var view = tack(document.body);
	view.i = 0;
	view.q = 'boo';
	view.doSomething = function (e) {
		t.equal(typeof e, 'object');
		view.i = 1;
	};
	view.$();
	t.equal($('div').textContent, '0');
	trigger($('input'), 'click');
	trigger($('div'), 'mousemove');
	t.equal(view.i, 1);
	t.equal(view.q, 'hello');
	t.equal($('div').textContent, '1');
});


test('ta-exist', function (t) { // Conditional existance
	t.plan(3);
	up(`<div ta-exist="showMe">My name is {{ me.name }}</div>`);
	var view = tack(document.body);
	view.me = { name: 'moi' };
	view.showMe = true;
	view.$();
	t.equal($('div').textContent, 'My name is moi');
	view.showMe = false;
	view.$();
	t.equal($('div'), null);
	view.showMe = 1;
	view.me.name = 'boo';
	view.$();
	t.equal($('div').textContent, 'My name is boo');
});


test('ta-each-*', function (t) { // Iterate through an array
	t.plan(13);
	up(`<div ta-each-todo="todos">{{ todo.message }}</div>`);
	var view = tack(document.body);
	view.todos = [
		{ message: 'Buy food' },
		{ message: 'Fix code' },
		{ message: 'Wash clothes' }
	];
	view.$();
	var els = document.querySelectorAll('div');
	t.equal(els.length, 3);
	view.todos.forEach(function (todo, i) {
		t.equal(els[i].textContent, todo.message);
	});
	view.todos.push({ message: 'Wash car' });
	view.$();
	els = document.querySelectorAll('div');
	t.equal(els.length, 4);
	view.todos.forEach(function (todo, i) {
		t.equal(els[i].textContent, todo.message);
	});
	view.todos.splice(2, 1);
	view.$();
	els = document.querySelectorAll('div');
	t.equal(els.length, 3);
	view.todos.forEach(function (todo, i) {
		t.equal(els[i].textContent, todo.message);
	});
});


test('root scope', function (t) {
	t.plan(2);
	// The root object is provided to all components and can be used to provide methods and data which should be available to all components.
	up(`{{ food }} {{ drink }} {{ sweet }}. {{ date(d) }}`); // chips, beer, cake
	var view = tack(document.body);
	global.food = 'carrots';
	tack.root.drink = 'water';
	view.sweet = 'cake';
	view.d = new Date(2017, 0, 17);
	tack.root.date = function (date) {
		return date.getDate() + ' Jan';
	};
	view.$();
	t.equals(document.body.textContent, 'carrots water cake. 17 Jan');
	tack.root.food = 'chips';
	view.drink = 'beer';
	tack.root.sweet = 'chocolate';
	view.date = function (date) {
		return date.getDate() + ' enero';
	};
	view.$();
	t.equals(document.body.textContent, 'chips beer cake. 17 enero');
});

test('utility functions', function (t) {
	t.plan(1);
	up(`{{ number(1.553, 1) }} {{ number(1.553) }} {{ percent(0.17) }}`);
	var view = tack(document.body);
	view.$();
	t.equals(document.body.textContent, '1.6 1.55 17.00%');
});

test('version', function (t) { // Gets the version of tacks (e.g. "0.1.0").
	t.plan(1);
	t.ok(tack.version.match(/^[0-9]+\.[0-9]+\.[0-9]+$/));
});

test('Expressions', function (t) { // The expressions used in a directive mostly include the JavaScript language.
	var assertions = 0;
	var assert = function (expr, val) {
		assertions++;
		var result = tack.evaluate(tack.parse(expr, { startRule: 'Expression' }), [global]);
		if (typeof val === 'object') {
			t.same(result.value, val);
		} else {
			t.equal(result.value, val);
		}
	};

	// Arithmatic
	assert('1', 1);
	assert('1.11', 1.11);
	assert('9', 9);
    assert('-9', -9);
	assert('1+2.1', 1 + 2.1);
	assert('1 +    2', 1 + 2);
	assert('1 + 2 + 3', 1 + 2 + 3);
	assert('1 + +2',  1 + 2);
	assert('1 + ++2', 1 + 2);
	assert('1 + -2', 1 + -2);
	assert('1 - 2', 1 - 2);
	assert('1 - 2 - 3', 1 - 2 - 3);
	assert('10 % 2', 10 % 2);
    assert('--9', 9);
    assert('9 + 3 + 6', 9 + 3 + 6);
    assert('9 + 3 / 11', 9 + 3 / 11);
    assert('(9 + 3)', 9 + 3);
    assert('(9+3) / 11', (9 + 3) / 11);
    assert('9 - 12 - 6', 9 - 12 - 6);
    assert('9 - (12 - 6)', 9 - (12 - 6));
    assert('Math.round(9.9)', 10);
	assert('-Math.E', -Math.E);
    assert('2*3.14159', 2*3.14159);
	assert('3.1415926535*3.1415926535 / 10', 3.1415926535 * 3.1415926535 / 10);
	assert('Math.PI * Math.PI / 10', Math.PI * Math.PI / 10);
	assert('Math.PI*Math.PI/10', Math.PI*Math.PI/10);
	assert('Math.pow(Math.PI, 2)', Math.pow(Math.PI, 2));
	assert('Math.round(Math.pow(Math.PI,2))', Math.round(Math.pow(Math.PI, 2)));
	assert('6.02E23 * 8.048', 6.02E23 * 8.048);
	assert('Math.E / 3', Math.E / 3);
	assert('Math.sin(Math.PI/2)', Math.sin(Math.PI/2));
	assert('Number("10")', Number('10'));
	assert('Number("-10")', Number('-10'));
	assert('+"9"', 9);
	assert('Math.round(Math.E)', Math.round(Math.E));
	assert('Math.round(-Math.E)', Math.round(-Math.E));
	assert('Math.pow(Math.E, Math.PI)', Math.pow(Math.E, Math.PI));
	assert('Math.pow(Math.pow(2, 3), 2)', Math.pow(Math.pow(2, 3), 2));
	assert('Math.pow(2, 3)+(2)', Math.pow(2, 3)+2);
	assert('Math.pow(2,(9))', Math.pow(2, 9));

	// String
	assert('String(10)', '10');
	assert('"a"', 'a');
	assert('\'a\'', 'a');
	assert('"a" + \'b\'', 'ab');

	// Array literals
	assert('[]', []);
	assert('[1, "a"]', [1, 'a']);
	assert('[[2]]', [[2]]);
	assert('([1 ])', [1]);
	assert('[1, [[2]], 1]', [1, [[2]], 1]);

	// Object literals
	assert('{}', {});
	assert('{ a: 1 }', { a: 1 });
	assert('{ a: { b: 2 } }', { a: { b: 2 } });
	assert('({ "a": 1 })', { a: 1 });
	assert('{ a:1, b:{ ba: {baa: 2}},c:1}', { a: 1, b: { ba: { baa: 2 } }, c: 1 });
    
	// Other literals
	assert('null', null);
	assert('true', true);
	assert('false', false);

	// Member access
	assert('{ a: 1 }.a', 1);
	assert('({ a: 1 }).a', 1);
	assert('JSON.parse(JSON.stringify({a:"hello"})).a', 'hello');

	// Assignment and update
	assert('thing = 1', 1);
	assert('thing += 1', 2);
	assert('thing -= 1', 1);
	assert('thing += 3', 4);
	assert('thing /= 2', 2);
	assert('thing *= 2', 4);
	assert('thing %= 2', 0);
	assert('thing += "hello"', '0hello');
	assert('thing', '0hello');
	assert('thing2 = {}', {});
	assert('thing2.name = "bob"', 'bob');
	assert('thing2', { name: 'bob' });

	// Binary
	assert('true === true', true);
	assert('true === false', false);
	assert('1 === 1', true);
	assert('1 === 2', false);
	assert('"1" === "1"', true);
	assert('"1" === 2', false);
	assert('"1" !== 2', true);
	assert('!(1 === 2)', true);
	assert('!true', false);
	assert('!false', true);
	assert('!1', false);
	assert('!0', true);
	assert('!!true', true);
	assert('!!false', false);
	assert('!!1', true);
	assert('!!0', false);
	assert('1 == 1', true);
	assert('1 == true', true);
	assert('1 == false', false);
	assert('1 != 1', false);
	assert('1 != true', false);
	assert('1 != false', true);
	assert('1 < 2', true);
	assert('1 < 0', false);
	assert('1 > 0', true);
	assert('1 > 2', false);
	assert('1 <= 1', true);
	assert('1 <= 0', false);
	assert('1 >= 1', true);
	assert('1 >= 2', false);
	assert('true && true', true);
	assert('true && false', false);
	assert('true && 1', 1);
	assert('true && 0', 0);
	assert('false || true', true);
	assert('false || false', false);
	assert('false || 1', 1);
	assert('false || 0', 0);

	// Conditionals
	assert('true ? "a" : "b"', 'a');
	assert('false ? "a" : "b"', 'b');
	assert('1 === 1 ? "a" : "b"', 'a');
	assert('1 !== 2 ? "a" : "b"', 'a');
	assert('true ? "a" : "b"', 'a');

	// Undefined
	assert('something', undefined);
	assert('undefined', undefined);
	assert('a()', undefined);
	assert('a.a()', undefined);
	assert('a().a', undefined);

	// Native methods
	assert('Math.ceil(Date.now() / 1000)', Math.ceil(Date.now() / 1000));
	assert('JSON.stringify({ a: 1, b: 2 })', '{"a":1,"b":2}');

	try {
		assert('a(.a', undefined); // syntax error
	} catch (e) {
		t.equal(e.message.slice(0, 8), 'Expected');
	}

	t.plan(assertions);
});