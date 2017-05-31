/* jshint node: true, esversion: 6, browser: true, unused: true */
'use strict';
var test = require('tap').test,
	zam = require('../');

test('version', function (t) { // Gets the version of zam (e.g. "0.1.0").
	t.plan(1);
	t.ok(zam.version.match(/^[0-9]+\.[0-9]+\.[0-9]+$/));
});
