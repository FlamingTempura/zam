const { test } = require('tap');
const zam = require('../');

test('version', t => { // Gets the version of zam (e.g. "0.1.0").
	t.plan(1);
	t.ok(zam.version.match(/^[0-9]+\.[0-9]+\.[0-9]+$/));
});
