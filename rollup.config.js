/* jshint node: true */
'use strict';

var fs = require('fs'),
	rollup = require('rollup'),
	pegjs = require('rollup-plugin-pegjs'),
	uglify = require('rollup-plugin-uglify'),
	harmony = require('uglify-js-harmony'),
	json = require('rollup-plugin-json');

rollup.rollup({
	entry: 'src/index.js',
	plugins: [
		pegjs({
			allowedStartRules: ['Text', 'Expression'],
			optimize: 'speed' // 'speed'
		}),
		json(),
		uglify({
			compress: {
				dead_code: true,
				unused: true,
				negate_iife: true,
				reduce_vars: true,
				cascade: true,
				collapse_vars: true,
				//drop_console: true,
				passes: 3,
				properties: true
			},
			output: {
				//beautify: true
			}
		}, harmony.minify)
	]
}).then(function (bundle) {
	var browser = bundle.generate({
		//sourceMap: true,
		moduleName: 'zam',
		format: 'umd',
		indent: false
	});
	fs.writeFileSync('zam.js', browser.code, 'utf8');
}).catch(function (err) {
	console.error(err.szam);
});
