'use strict';
var test = require('tap').test,
	zam = require('../'),
	frames = require('./test-utils').frames,
	up = require('./test-utils').up,
	$ = require('./test-utils').$;

test('z-exist', t => { // Conditional existance
	t.plan(5);
	up(`<div z-exist="showMe">My name is {{ me.name }}</div>`);
	var view = zam(document.body);
	frames(
		() => {
			view.me = { name: 'moi' };
			view.showMe = false;
		},
		() => {
			t.equal($('div'), null);
			view.showMe = true;
		},
		() => {
			t.equal($('div').textContent, 'My name is moi');
			view.showMe = 1;
		},
		() => {
			t.equal($('div').textContent, 'My name is moi');
			view.showMe = 0;
		},
		() => {
			t.equal($('div'), null);
			view.showMe = 1;
			view.me.name = 'boo';
		},
		() => {
			t.equal($('div').textContent, 'My name is boo');
		}
	);
});