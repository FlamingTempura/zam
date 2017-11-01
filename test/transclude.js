const { test } = require('tap');
const zam = require('../');
const { steps, up, $, $$ } = require('./test-utils');

test('directive transclude', t => {
	t.plan(4);
	up(`<tab id="a">hello</tab>
		<tab id="b">{{ hello }}</tab>
		<tab id="c"><b>hello</b></tab>
		<tab id="d">Hello: <b>{{ hello }}</b></tab>`);

	zam.directive({
		query: '<tab>',
		template: '<p z-transclude></p>'
	});

	let view = zam(document.body);
	view.hello = 'Boo';
	steps(
		() => {
			t.equal($('#a').textContent, 'hello');
			t.equal($('#b').textContent, 'Boo');
			t.equal($('#c').textContent, 'hello');
			t.equal($('#d').textContent, 'Hello: Boo');
		}
	);
});

test('transclude in loop', t => {
	t.plan(3);
	up(`<animal z-animal-in="animals">{{ animal.type }}: {{ animal.name }}</animal>`);

	zam.directive({
		query: '<animal>',
		template: '<p z-transclude></p>'
	});
	let view = zam(document.body);
	view.animals = [{ type: 'cat', name: 'Felix' }, { type: 'dog', name: 'Spot' }];
	steps(
		() => {
			t.equal($$('p').length, 2);
			t.equal($$('p')[0].textContent, 'cat: Felix');
			t.equal($$('p')[1].textContent, 'dog: Spot');
		}
	);
});
