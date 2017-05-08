/* jshint node: true */
'use strict';

var fs = require('fs'),
	rollup = require('rollup'),
	pegjs = require('rollup-plugin-pegjs'),
	uglify = require('rollup-plugin-uglify'),
	harmony = require('uglify-js-harmony'),
	json = require('rollup-plugin-json');

return rollup.rollup({
	entry: 'src/tack.js',
	plugins: [
		pegjs({
			allowedStartRules: ['Text', 'Expression'],
			optimize: 'size' // 'speed'
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
        		beautify: true
        	}
		}, harmony.minify)
	]
}).then(function (bundle) {
	return bundle.generate({
		//sourceMap: true,
		moduleName: 'tack',
		format: 'iife',
		indent: false
	});
}).then(function (result) {
	fs.writeFileSync('tack.js', result.code, 'utf8');
});
