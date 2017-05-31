/* jshint node: true, esversion: 6, browser: true */
'use strict';

var jsdom = require('jsdom'),
	moment = require('moment'),
	test = require('tap').test,
	zam = require('../');

var up = function (html) { // set global document to new dom
	global.window = (new jsdom.JSDOM(html)).window;
	global.document = global.window.document;
	// polyfill valueAsDate
	Object.defineProperty(global.window.HTMLInputElement.prototype, 'valueAsDate', {
		configurable: true,
		get: function () {
			if (this.type === 'datetime-local') { return moment(this.value, 'YYYY-MM-DD[T]HH:mm:ss.SS').toDate(); }
			if (this.type === 'date') { return moment(this.value, 'YYYY-MM-DD').toDate(); }
			if (this.type === 'month') { return moment(this.value, 'YYYY-MM').toDate(); }
			if (this.type === 'week') { return moment(this.value, 'YYYY-[W]WW').toDate(); }
			if (this.type === 'time') { return moment(this.value, 'HH:mm:ss.SS').toDate(); }
		},
		set: function (d) {
			if (this.type === 'datetime-local') { this.value = moment(d).format('YYYY-MM-DD[T]HH:mm:ss.SS'); }
			if (this.type === 'date') { this.value = moment(d).format('YYYY-MM-DD'); }
			if (this.type === 'month') { this.value = moment(d).format('YYYY-MM'); }
			if (this.type === 'week') { this.value = moment(d).format('YYYY-[W]WW'); }
			if (this.type === 'time') { this.value = moment(d).format('HH:mm:ss.SS'); }
		}
	});
};
var $ = function (selector) {
	return global.document.querySelector(selector);
};
var $$ = function (selector) {
	return global.document.querySelectorAll(selector);
};
var frames = function () { // each frame happens following the previous frame, giving time for dom updates
	var callbacks = Array.from(arguments);
	setTimeout(function () {
		callbacks.shift()();
		if (callbacks.length > 0) {
			frames.apply(null, callbacks);
		}
	});
};
var trigger = function (element, eventname) {
	var event = new global.window.Event(eventname);
	element.dispatchEvent(event);
};




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
					return { message: Math.round(Math.random() * 100000000).toString(16) };
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
//return;
/*
test('template', function (t) {
	t.plan(3);
	up(`<section>
			<memo z-memo-in="memos"></memo>
		</section>`);

	zam.directive({
		tag: 'memo',
		template: '<p>{{ memo.who }}: {{ memo.message }}</p>'
	});
	var view = zam(document.body);
	console.log(document.body.outerHTML);
	frames(
		function () {
			view.memos = [{ who: 'me', message: 'thing' }, { who: 'joe', message: 'blah' }];
		},
		function () {
			t.equal($$('p').length, 2);
			t.equal($$('p')[0].textContent, 'me: thing');
			t.equal($$('p')[1].textContent, 'joe: blah');
		}
	);
});*/

test('text interpolation', function (t) {
	t.plan(4);
	up(`<div id="a">{{ name }}</div>`);
	var view = zam(document.body);
	t.equal($('#a').textContent, '');
	frames(
		function () {
			t.equal($('#a').textContent, '');
			view.name = 'dave';
		},
		function () {
			t.equal($('#a').textContent, 'dave');
			view.name = 'bob';
		},
		function () {
			t.equal($('#a').textContent, 'bob');
		}
	);
});

test('component creation', function (t) {
	t.plan(3);
	up(`<div id="a">{{ name }}</div>
		<div id="b">{{ name }}</div>
		<div id="c">{{ name }}</div>`);
	var view1 = zam('#a'),
		view2 = zam($('#b')),
		view3 = zam([$('#c')]); // jquery-like
	frames(
		function () {
			view1.name = view2.name = view3.name = 'Lizzy';
		},
		function () {
			t.equal($('#a').textContent, 'Lizzy');
			t.equal($('#b').textContent, 'Lizzy');
			t.equal($('#c').textContent, 'Lizzy');
		}
	);
});

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

test('z-show', function (t) { // Conditionally display the element. Equivelant to attr-display="thing ? "" : 'none'".
	t.plan(8);
	up(`<div z-show="showMe">Hello</div>
		<span z-show="!showMe">Boo</span>`);
	var view = zam(document.body);
	frames(
		function () {
			t.equal($('div').style.display, 'none');
			t.equal($('span').style.display, '');
			view.showMe = true;
		},
		function () {
			t.equal($('div').style.display, '');
			t.equal($('span').style.display, 'none');
			view.showMe = 1;
		},
		function () {
			t.equal($('div').style.display, '');
			t.equal($('span').style.display, 'none');
		},
		function () {
			view.showMe = false;
		},
		function () {
			t.equal($('div').style.display, 'none');
			t.equal($('span').style.display, '');
		}
	);
});

test('z-skip', function (t) { // Skip compilation of this element
	t.plan(2);
	up(`<div z-skip>hello {{ skipme }}</div>
		<input type="text" z-skip z-model="blah">`);
	var view = zam(document.body);
	view.skipme = 'boo';
	view.blah = 'blah';
	frames(
		function () {
			t.equal($('div').textContent, 'hello {{ skipme }}');
			t.equal($('input').getAttribute('z-model'), 'blah');
		}
	);
});

test('z-attr-*', function (t) { // Attribute value
	t.plan(6);
	up(`<input type="text" z-attr-disabled="!showMe" z-value="!showMe"></input>
		<div z-attr-lang="showMe ? 'english' : 'french'"></div>`);
	var view = zam(document.body);
	view.showMe = false;
	frames(
		function () {
			t.equal($('input').getAttribute('disabled'), 'disabled');
			t.equal($('input').getAttribute('value'), 'true');
			t.equal($('div').getAttribute('lang'), 'french');
			view.showMe = true;
		},
		function () {
			t.equal($('input').getAttribute('disabled'), null);
			t.equal($('input').getAttribute('value'), 'false');
			t.equal($('div').getAttribute('lang'), 'english');
		}
	);
});

test('z-class-*', function (t) { // Conditional class name
	t.plan(2);
	up(`<h4 class="thing" z-class-red="warning" z-class-blue="!warning"></h4>`);
	var view = zam(document.body);
	view.warning = false;
	frames(
		function () {
			t.equal($('h4').getAttribute('class'), 'thing blue');
			view.warning = true;
		},
		function () {
			t.equal($('h4').getAttribute('class'), 'thing red');
		}
	);
});


test('z-style-*', function (t) { // Style value
	t.plan(4);
	up(`<h1 z-style-font-weight="big ? 'bold' : 'normal'" z-text-transform="big ? 'uppercase' : 'lowercase'"></h1>`);
	var view = zam(document.body);
	view.big = false;
	frames(
		function () {
			t.equal($('h1').style.fontWeight, 'normal');
			t.equal($('h1').style.textTransform, 'lowercase');
			view.big = true;
		},
		function () {
			t.equal($('h1').style.fontWeight, 'bold');
			t.equal($('h1').style.textTransform, 'uppercase');
		}
	);
});

test('z-model', function (t) { // Two way binding with element value
	t.plan(10);
	up(`<input id="a" type="text" z-model="blah">
		<input id="b" type="text" z-model="thing.blah">
		<div>such {{ blah }}</div>`);
	var view = zam(document.body);
	view.blah = 'boo';
	view.thing = { blah: 'foo' };
	frames(
		function () {
			t.equal($('#a').value, 'boo');
			t.equal($('#b').value, 'foo');
			t.equal($('div').textContent, 'such boo');
			$('#a').value = 'wow';
			trigger($('#a'), 'input');
		},
		function () {
			t.equal(view.blah, 'wow');
			t.equal($('div').textContent, 'such wow');
			$('#b').value = 'boo';
			trigger($('#b'), 'input');
		},
		function () {
			t.equal(view.thing.blah, 'boo');
			view.blah = 'amaze';
		},
		function () {
			t.equal($('#a').value, 'amaze');
			t.equal($('div').textContent, 'such amaze');
		trigger($('#a'), 'input');
			t.equal($('#a').value, 'amaze');
			t.equal($('div').textContent, 'such amaze');
		}
	);
});

test('z-on-*', function (t) { // Event handler
	t.plan(6);
	up(`<input type="button" z-on-click="doSomething($event)" z-click="doSomething2($event)">
		<div z-on-mousemove="q = 'hello'">{{ i }}</div>`);
	var view = zam(document.body);
	view.i = 0;
	view.q = 'boo';
	view.doSomething = function (e) {
			t.equal(typeof e, 'object');
			view.i = 1;
	};
	view.doSomething2 = function (e) {
		t.equal(typeof e, 'object');
	};
	frames(
		function () {
			t.equal($('div').textContent, '0');
			trigger($('input'), 'click');
			trigger($('div'), 'mousemove');
			t.equal(view.i, 1);
			t.equal(view.q, 'hello');
		},
		function () {
			t.equal($('div').textContent, '1');
		}
	);
});

test('z-on-* shorthand', function (t) { // Event handler
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
		function () {
			t.equal($('div').textContent, '0');
			trigger($('input'), 'click');
			trigger($('div'), 'mousemove');
			t.equal(view.i, 1);
			t.equal(view.q, 'hello');
		},
		function () {
			t.equal($('div').textContent, '1');
		}
	);
});

test('z-exist', function (t) { // Conditional existance
	t.plan(5);
	up(`<div z-exist="showMe">My name is {{ me.name }}</div>`);
	var view = zam(document.body);
	frames(
		function () {
			view.me = { name: 'moi' };
			view.showMe = false;
		},
		function () {
			t.equal($('div'), null);
			view.showMe = true;
		},
		function () {
			t.equal($('div').textContent, 'My name is moi');
			view.showMe = 1;
		},
		function () {
			t.equal($('div').textContent, 'My name is moi');
			view.showMe = 0;
		},
		function () {
			t.equal($('div'), null);
			view.showMe = 1;
			view.me.name = 'boo';
		},
		function () {
			t.equal($('div').textContent, 'My name is boo');
		}
	);
});

test('z-*-in', function (t) { // Iterate through an array
	t.plan(14);
	up(`<div z-todo-in="todos">{{ todo.message }}</div>
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
	var view = zam(document.body);
	frames(
		function () {
			t.equals(document.body.textContent, '1.6 1.55 17.00%');
		}
	);
});

test('version', function (t) { // Gets the version of zam (e.g. "0.1.0").
	t.plan(1);
	t.ok(zam.version.match(/^[0-9]+\.[0-9]+\.[0-9]+$/));
});

test('Expressions', function (t) { // The expressions used in a directive mostly include the JavaScript language.
	var assertions = 1;
	var assert = function (expr, val) {
		assertions++;
		var result = zam.evaluate(zam.parse(expr), global);
		if (typeof val === 'object') {
			t.same(result.value, val);
		} else {
			t.equal(result.value, val);
		}
	};

	var syntax = zam.parse('blah', 'Text');
	t.same(syntax, ['blah']);

	// Arithmatic
	assert('1', 1);
	assert('1.11', 1.11);
	assert('9', 9);
    assert('-9', -9);
	assert('1+2.1', 1 + 2.1);
	assert('1 +    2', 1 + 2);
	assert('1 + 2 + 3', 1 + 2 + 3);
	assert('1 + +2',  1 + 2);
	assert('1 + -2', 1 + -2);
	assert('1 - 2', 1 - 2);
	assert('1 - 2 - 3', 1 - 2 - 3);
	assert('10 % 2', 10 % 2);
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
	assert('1++', 1);
	assert('++1', 2);
	assert('1--', 1);
	assert('--1', 0);

	// String
	assert('String(10)', '10');
	assert('"a"', 'a');
	assert('\'a\'', 'a');
	assert('"a" + \'b\'', 'ab');
	assert('"\\""', '"');
	assert('\'\\\'\'', '\'');
	assert('"a" + 1', 'a1');
	assert('"a" + undefined', 'a');

	// Array literals
	assert('[]', []);
	assert('[1, "a"]', [1, 'a']);
	assert('[[2]]', [[2]]);
	assert('[[2]][0][0]', 2);
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
	assert('thing++', 1);
	assert('++thing', 3);
	assert('thing--', 3);
	assert('--thing', 1);
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
	assert('(new Date()).getFullYear()', new Date().getFullYear());
	assert('(new Date).getFullYear()', new Date().getFullYear());
	assert('JSON.stringify({ a: 1, b: 2 })', '{"a":1,"b":2}');

	try {
		assert('a(.a', undefined); // syntax error
	} catch (e) {
		t.equal(e.message.slice(0, 8), 'Expected');
	}

	t.plan(assertions);
});

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

test('multiple directives', function (t) {
	t.plan(7);
	up(`<div z-thing-in="things" z-exist="thing.show">{{ thing.foo }}</div>`);
	var view = zam(document.body);
	view.things = [{ show: true, foo: 'blah'}, { show: false, foo: 'hello' }];
	frames(
		function () {
			t.equal($$('div').length, 1);
			t.equal($$('div')[0].textContent, 'blah');
			view.boo = 1;
			view.things[1].show = true;
		},
		function () {
			t.equal($$('div').length, 2);
			t.equal($$('div')[0].textContent, 'blah');
			t.equal($$('div')[1].textContent, 'hello');
			view.things[0].show = false;
		},
		function () {
			t.equal($$('div').length, 1);
			t.equal($$('div')[0].textContent, 'hello');
		}
	);
});

test('input text and textarea', function (t) {
	t.plan(6);
	up(`<input type="text" z-model="blah">
		<textarea z-model="blah">`);
	var view = zam(document.body);
	frames(
		function () {
			view.blah = 'boo';
		},
		function () {
			t.equal($('input').value, 'boo');
			t.equal($('textarea').value, 'boo');
			$('input').value = 'wow';
			trigger($('input'), 'input');
			t.equal(view.blah, 'wow');
			$('textarea').value = 'foo';
			trigger($('textarea'), 'input');
			t.equal(view.blah, 'foo');
		},
		function () {
			view.blah = 'amaze';
		},
		function () {
			t.equal($('input').value, 'amaze');
			t.equal($('textarea').value, 'amaze');
		}
	);
});

test('input password', function (t) {
	t.plan(3);
	up(`<input type="password" z-model="blah">`);
	var view = zam(document.body);
	frames(
		function () {
			view.blah = 'boo';
		},
		function () {
			t.equal($('input').value, 'boo');
			$('input').value = 'wow';
			trigger($('input'), 'input');
			t.equal(view.blah, 'wow');
		},
		function () {
			view.blah = 'amaze';
		},
		function () {
			t.equal($('input').value, 'amaze');
		}
	);
});

test('input search', function (t) {
	t.plan(3);
	up(`<input type="search" z-model="blah">`);
	var view = zam(document.body);
	frames(
		function () {
			view.blah = 'boo';
		},
		function () {
			t.equal($('input').value, 'boo');
			$('input').value = 'wow';
			trigger($('input'), 'input');
			t.equal(view.blah, 'wow');
		},
		function () {
			view.blah = 'amaze';
		},
		function () {
			t.equal($('input').value, 'amaze');
		}
	);
});

test('input hidden', function (t) {
	t.plan(3);
	up(`<input type="hidden" z-model="blah">`);
	var view = zam(document.body);
	frames(
		function () {
			view.blah = 'boo';
		},
		function () {
			t.equal($('input').value, 'boo');
			$('input').value = 'wow';
			trigger($('input'), 'input');
			t.equal(view.blah, 'wow');
		},
		function () {
			view.blah = 'amaze';
		},
		function () {
			t.equal($('input').value, 'amaze');
		}
	);
});

test('input url', function (t) {
	t.plan(3);
	up(`<input type="url" z-model="blah">`);
	var view = zam(document.body);
	frames(
		function () {
			view.blah = 'http://foo.bar';
		},
		function () {
			t.equal($('input').value, 'http://foo.bar');
			$('input').value = 'http://foo.bar/wow';
			trigger($('input'), 'input');
			t.equal(view.blah, 'http://foo.bar/wow');
		},
		function () {
			view.blah = 'http://foo.bar/amaze';
		},
		function () {
			t.equal($('input').value, 'http://foo.bar/amaze');
		}
	);
});

test('input email', function (t) {
	t.plan(3);
	up(`<input type="email" z-model="blah">`);
	var view = zam(document.body);
	frames(
		function () {
			view.blah = 'boo@foo.bar';
		},
		function () {
			t.equal($('input').value, 'boo@foo.bar');
			$('input').value = 'wow@foo.bar';
			trigger($('input'), 'input');
			t.equal(view.blah, 'wow@foo.bar');
		},
		function () {
			view.blah = 'amaze@foo.bar';
		},
		function () {
			t.equal($('input').value, 'amaze@foo.bar');
		}
	);
});

test('input number', function (t) {
	t.plan(3);
	up(`<input type="number" z-model="blah">`);
	var view = zam(document.body);
	frames(
		function () {
			view.blah = 102;
		},
		function () {
			t.equal($('input').value, '102');
			$('input').value = 87;
			trigger($('input'), 'input');
			t.equal(view.blah, 87);
		},
		function () {
			view.blah = 10;
		},
		function () {
			t.equal($('input').value, '10');
		}
	);
});

test('input range', function (t) {
	t.plan(3);
	up(`<input type="range" min="0" max="10" step="1" z-model="blah">`);
	var view = zam(document.body);
	frames(
		function () {
			view.blah = 1;
		},
		function () {
			t.equal($('input').value, '1');
			$('input').value = 9;
			trigger($('input'), 'input');
			t.equal(view.blah, 9);
		},
		function () {
			view.blah = 4;
		},
		function () {
			t.equal($('input').value, '4');
		}
	);
});

test('input date/month/week/time', function (t) {
	t.plan(15);
	up(`<input id="datetime" type="datetime-local" z-model="blah">
		<input id="date" type="date" z-model="blah">
		<input id="month" type="month" z-model="blah">
		<input id="week" type="week" z-model="blah">
		<input id="time" type="time" z-model="blah">`);
	
	var date = moment().toDate();
	var view = zam(document.body);
	view.blah = date;
	frames(
		function () {
			t.equal($('#datetime').value, moment(date).format('YYYY-MM-DD[T]HH:mm:ss.SS'));
			t.equal($('#date').value, moment(date).format('YYYY-MM-DD'));
			t.equal($('#month').value, moment(date).format('YYYY-MM'));
			t.equal($('#week').value, moment(date).format('YYYY-[W]WW'));
			t.equal($('#time').value, moment(date).format('HH:mm:ss.SS'));

			date = moment().subtract(2, 'days').toDate();
			$('#datetime').value = moment(date).format('YYYY-MM-DD[T]HH:mm:ss.SS');
			trigger($('#datetime'), 'input');
			t.equal(moment(view.blah).format('YYYY-MM-DD[T]HH:mm:ss.SS'), moment(date).format('YYYY-MM-DD[T]HH:mm:ss.SS'));

			$('#date').value = moment(date).format('YYYY-MM-DD');
			trigger($('#date'), 'input');
			t.equal(moment(view.blah).format('YYYY-MM-DD'), moment(date).format('YYYY-MM-DD'));

			$('#month').value = moment(date).format('YYYY-MM');
			trigger($('#month'), 'input');
			t.equal(moment(view.blah).format('YYYY-MM'), moment(date).format('YYYY-MM'));

			$('#week').value = moment(date).format('YYYY-[W]WW');
			trigger($('#week'), 'input');
			t.equal(moment(view.blah).format('YYYY-[W]WW'), moment(date).format('YYYY-[W]WW'));

			$('#time').value = moment(date).format('HH:mm:ss.SS');
			trigger($('#time'), 'input');
			t.equal(moment(view.blah).format('HH:mm:ss.SS'), moment(date).format('HH:mm:ss.SS'));
		},
		function () {
			date = moment().subtract(1, 'minute').toDate();
			view.blah = date;
		},
		function () {
			t.equal($('#datetime').value, moment(date).format('YYYY-MM-DD[T]HH:mm:ss.SS'));
			t.equal($('#date').value, moment(date).format('YYYY-MM-DD'));
			t.equal($('#month').value, moment(date).format('YYYY-MM'));
			t.equal($('#week').value, moment(date).format('YYYY-[W]WW'));
			t.equal($('#time').value, moment(date).format('HH:mm:ss.SS'));
		}
	);
});

test('input checkbox', function (t) {
	t.plan(4);
	up(`<input type="checkbox" z-model="blah">`);
	var view = zam(document.body);
	frames(
		function () {
			view.blah = true;
		},
		function () {
			t.equal($('input').checked, true);
			$('input').checked = false;
			trigger($('input'), 'change');
			t.equal(view.blah, false);
			$('input').checked = true;
			trigger($('input'), 'change');
			t.equal(view.blah, true);
		},
		function () {
			view.blah = false;
		},
		function () {
			t.equal($('input').checked, false);
		}
	);
});

test('input select', function (t) {
	t.plan(22);
	up(`<select z-model="blah">
			<option value="hello">test1</option>
			<option value="1">test2</option>
			<option z-value="'boo'">test3</option>
			<option z-value="2">test4</option>
			<option z-value="{ a: 1 }">test5</option>
			<option z-value="foo">test6</option>
		</select>`);

	var view = zam(document.body),
		fs = [function () {
			view.foo = 'bar';	
		}];
	['hello', '1', 'boo', 2, { a: 1 }, 'bar'].forEach(function (val, i) {
		fs.push(function () {
			view.blah = val;
		}, function () {
			if (typeof val !== 'object') {
				t.equal($('select').value, String(val));
				t.equal($('select').selectedIndex, i);
			}
		});
	});
	['hello', '1', 'boo', 2, { a: 1 }, 'bar'].forEach(function (val, i) {
		fs.push(function () {
			$('select').selectedIndex = i;
			trigger($('select'), 'change');
			t.equal($('select').value, String(val));
			if (typeof val === 'string') {
				t.equal(view.blah, val);
			} else {
				t.same(view.blah, val);
			}
		});
	});
	frames.apply(null, fs);
});

test('input radio', function (t) {
	t.plan(28);
	up(`<div class="a">
			<input type="radio" z-model="blah" value="hello">
			<input type="radio" z-model="blah" value="1">
			<input type="radio" z-model="blah" z-value="'boo'">
			<input type="radio" z-model="blah" z-value="2">
			<input type="radio" z-model="blah" z-value="{ a: 1 }">
			<input type="radio" z-model="blah" z-value="foo">
		</div>
		<div class="b">
			<input type="radio" z-model="moo" value="x">
			<input type="radio" z-model="moo" value="y">
		</div>`);

	var view = zam(document.body),
		fs = [function () {
			view.foo = 'bar';
			view.moo = 'y';
		}];
	['hello', '1', 'boo', 2, { a: 1 }, 'bar'].forEach(function (val, i) {
		fs.push(function () {
			view.blah = val;
		}, function () {
			if (typeof val !== 'object') {
				t.equal($('.a input:checked').value, String(val));
				t.equal($('.b input:checked').value, 'y');
			}
		});
	});
	['hello', '1', 'boo', 2, { a: 1 }, 'bar'].forEach(function (val, i) {
		fs.push(function () {
			$('.a input:nth-child(' + (i + 1) + ')').checked = true;
			trigger($('.a input:nth-child(' + (i + 1) + ')'), 'change');
			t.equal($('.a input:checked').value, String(val));
			t.equal($('.b input:checked').value, 'y');
			if (typeof val === 'string') {
				t.equal(view.blah, val);
			} else {
				t.same(view.blah, val);
			}
		});
	});
	frames.apply(null, fs);
});

test('$watch', function (t) {
	t.plan(2);
	up(`<input type="text" z-model="foo">`);
	var view = zam(document.body),
		count = 0,
		handler = function (foo) { count++; };
	frames(
		function () { // should trigger watch
			view.$watch('foo', handler);
			view.foo = 1;
			view.foo = 2;
			view.foo = 4; // should trigger watch only once
		},
		function () {
			$('input').value = 'bar';
			trigger($('input'), 'input'); // should trigger watch
		},
		function () {
			view.foo = 'bar'; // should not trigger watch
		},
		function () {
			view.$unwatch('foo', handler);
			view.foo = '$$$'; // should not trigger watch
		},
		function () {
			view.$watch('foo', function (foo) {
				t.equal(foo, 'can');
			});
			view.foo = 'can';
		},
		function () {
			t.equal(count, 2);
		}
	);
});
/*
test('prefix', function (t) {
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


test('$destroy', function (t) {
	t.plan(4);
	up(`<div z-text="bar"></div>`);
	t.equal($('div').getAttribute('z-text'), 'bar');
	var view = zam(document.body);
	var count = 0;
	frames(
		function () {
			t.equal($('div').getAttribute('z-text'), null);
			view.$on('destroy', function () { count++; });
			view.$destroy();
		},
		function () {
			t.equal($('div').getAttribute('z-text'), 'bar');
			t.equal(count, 1);
		}
	);
});*/

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


