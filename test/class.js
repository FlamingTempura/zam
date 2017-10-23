'use strict';
var test = require('tap').test,
	zam = require('../'),
	frames = require('./test-utils').frames,
	up = require('./test-utils').up,
	$ = require('./test-utils').$;

test('z-class-*', t => { // Conditional class name
	t.plan(2);
	up(`<h4 class="thing" z-class-red="warning" z-class-blue="!warning"></h4>`);
	var view = zam(document.body);
	view.warning = false;
	frames(
		() => {
			t.equal($('h4').getAttribute('class'), 'thing blue');
			view.warning = true;
		},
		() => {
			t.equal($('h4').getAttribute('class'), 'thing red');
		}
	);
});