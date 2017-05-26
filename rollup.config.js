/* jshint node: true */
'use strict';

var pegjs = require('rollup-plugin-pegjs'),
	uglify = require('rollup-plugin-uglify'),
	harmony = require('uglify-js-harmony'),
	json = require('rollup-plugin-json'),
	babel = require('rollup-plugin-babel');

export default {
	entry: 'src/index.js',
	plugins: [
		pegjs({
			allowedStartRules: ['Text', 'Expression'],
			optimize: 'speed', // 'speed'
			cache: 'true'
		}),
		json(),
		babel({
			'presets': [
				['es2015', { modules: false }]
			],
			plugins: ['external-helpers']
		}),
		uglify({
			compress: {
				//dead_code: true,
				unused: true,
				negate_iife: true,
				reduce_vars: true,
				cascade: true,
				collapse_vars: true,
				drop_console: true,
				//passes: 1,
				properties: true,
				//sequences: false
			},
			output: {
				//beautify: true,
				//max_line_len: 80
				//preserve_line: true
			}
		}, harmony.minify)
	],
	//sourceMap: true,
	moduleName: 'zam',
	format: 'umd',
	//indent: false,
	dest: 'zam.js'
};
