'use strict';
var test = require('tap').test,
	zam = require('../'),
	frames = require('./test-utils').frames,
	up = require('./test-utils').up,
	$ = require('./test-utils').$,
	trigger = require('./test-utils').trigger;

test('$watch', t => {
	t.plan(4);
	up(`<input type="text" z-model="foo">
		<input type="button" z-click="foo = 'boo'>`);
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
			$('input').value = 'bar';
			trigger($('input'), 'input'); // should trigger watch
		},
		() => {
			view.foo = 'bar'; // should not trigger watch
		},
		() => {
			view.$unwatch('foo', handler);
			view.foo = '$$$'; // should not trigger watch
		},
		() => {
			view.$watch('foo', foo => {
				t.equal(foo, 'can');
			});
			view.foo = 'can';
		},
		() => {
			t.equal(count, 2);
		},
		() => {
			trigger($('input'), 'click');
		},
		() => {
			t.equal(count, 3);
			t.equal(view.foo, 'boo');
		}
	);
});