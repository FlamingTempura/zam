'use strict';
var test = require('tap').test,
	zam = require('../'),
	frames = require('./test-utils').frames,
	up = require('./test-utils').up,
	$ = require('./test-utils').$,
	trigger = require('./test-utils').trigger;

test('$watch', t => {
	t.plan(9);
	up(`<input type="text" z-model="foo">
		<input type="button" z-click="foo = 'boo'">`);
	var view = zam(document.body),
		count = 0,
		handler = () => { count++; };
	frames(
		() => { // should trigger watch
			view.$watch('foo', handler);
			view.foo = 1;
			view.foo = 2;
			view.foo = 4; // should trigger watch only once
		},
		() => {
			t.equal(count, 1);
			view.foo = 'can'; // should trigger watch
		},
		() => {
			t.equal(count, 2);
			$('input[type=text]').value = 'bar';
			trigger($('input[type=text]'), 'input'); // should trigger watch
		},
		() => {
			t.equal(count, 3);
			t.equal(view.foo, 'bar');
			view.foo = 'bar'; // should NOT trigger watch
		},
		() => {
			t.equal(count, 3);
		},
		() => {
			trigger($('input[type=button]'), 'click');
		},
		() => {
			t.equal(count, 4);
			t.equal(view.foo, 'boo');
			view.$unwatch('foo', handler);
			view.$watch('foo', foo => {
				t.equal(foo, '$$$');
			});
			view.foo = '$$$'; // should NOT increase count
		},
		() => {
			t.equal(count, 4);
		}
	);
});