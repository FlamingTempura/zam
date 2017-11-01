const { test } = require('tap');
const zam = require('../');
const { steps, up, $ } = require('./test-utils');

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