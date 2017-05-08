/* jshint node: true */
'use strict';

var fs = require('fs'),
	rollup = require('rollup'),
	pegjs = require('rollup-plugin-pegjs'),
	uglify = require('rollup-plugin-uglify'),
	babel = require('rollup-plugin-babel'),
	harmony = require('uglify-js-harmony');

return rollup.rollup({
	entry: 'tack.js',
	plugins: [
		pegjs({
			allowedStartRules: ['Text', 'Expression'],
			optimize: 'size' // 'speed'
		}),
		babel(),
		uglify({
			//mangleProperties: true,
			compress: {
        		dead_code: true,
        		unused: true,
        		negate_iife: true,
        		reduce_vars: true,
        		cascade: true,
        		collapse_vars: true,
        		drop_console: true,
        		passes: 3,
        		properties: true
        	},
        	output: {
        		//beautify: true
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
	fs.writeFileSync('tack.dist.js', result.code, 'utf8');
});
