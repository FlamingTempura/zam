const { test } = require('tap');
const zam = require('../');
const { steps, up, $ } = require('./test-utils');

test('root scope', t => {
	t.plan(2);
	// The root object is provided to all components and can be used to provide methods and data which should be available to all components.
	up(`{{ food }} {{ drink }} {{ sweet }}. {{ date(d) }}`); // chips, beer, cake
	let view = zam(document.body);
	steps(
		() => {
			global.food = 'carrots';
			zam.root.drink = 'water';
			view.sweet = 'cake';
			view.d = new Date(2017, 0, 17);
			zam.root.date = date => date.getDate() + ' Jan';
		},
		() => {
			t.equals(document.body.textContent, 'carrots water cake. 17 Jan');
			zam.root.food = 'chips';
			view.drink = 'beer';
			zam.root.sweet = 'chocolate';
			view.date = date => date.getDate() + ' enero';
		},
		() => {
			t.equals(document.body.textContent, 'chips beer cake. 17 enero');
		}
	);
});

test('parent then child scoping', t => {
	t.plan(4);
	up(`<div id="container">{{ name }}<div id="thing">{{ food }}{{ $parent.food }}</div></div>`);
	let container = zam($('#container')),
		thing = zam($('#thing'));
	container.name = 'joe';
	container.food = 'pop';
	steps(
		() => {
			t.equals($('#container').textContent, 'joepoppop');
			t.equals($('#thing').textContent, 'poppop');
			thing.name = 'jane';
			thing.food = 'mess';
		},
		() => {
			t.equals($('#container').textContent, 'joemesspop');
			t.equals($('#thing').textContent, 'messpop');
		}
	);
});

test('child then parent scoping', t => {
	t.plan(4);
	up(`<div id="container">{{ name }}<div id="thing">{{ food }}{{ $parent.food }}</div></div>`);
	let thing = zam($('#thing')),
		container = zam($('#container'));
	steps(
		() => {
			container.name = 'joe';
			container.food = 'pop';
		},
		() => {
			t.equals($('#container').textContent, 'joepoppop');
			t.equals($('#thing').textContent, 'poppop');
			thing.name = 'jane';
			thing.food = 'mess';
		},
		() => {
			t.equals($('#container').textContent, 'joemesspop');
			t.equals($('#thing').textContent, 'messpop');
		}
	);
});

test('utility functions', t => {
	t.plan(1);
	up(`{{ number(1.553, 1) }} {{ number(1.553) }} {{ percent(0.17) }} {{ percent(0.177, 1) }}`);
	zam(document.body);
	steps(
		() => {
			t.equals(document.body.textContent, '1.6 1.55 17.00% 17.7%');
		}
	);
});
