/* jshint node: true, esversion: 6, unused: true */
'use strict';

const pegjs = require('rollup-plugin-pegjs'),
      uglify = require('rollup-plugin-uglify'),
      harmony = require('uglify-js-harmony'),
      json = require('rollup-plugin-json'),
      babel = require('rollup-plugin-babel'),
      fs = require('fs');

let generateDocs = function () {
	var readme = fs.readFileSync('README.md', 'utf8'),
		docs = fs.readdirSync('src/directives').map(function (file) {
			var src = fs.readFileSync('src/directives/' + file, 'utf8');
			return src.slice(src.indexOf('/*') + 2, src.indexOf('*/')).trim();
		});
	readme = readme.replace(/\[\/\/\]: # \(DOC1\)[\w\W]*\[\/\/\]: # \(DOC1!\)/m,
		'[//]: # (DOC1)\n\n' + docs.join('\n\n') + '\n\n[//]: # (DOC1!)');
	fs.writeFileSync('README.md', readme, 'utf8');
};

export default {
	entry: 'src/index.js',
	plugins: [
		{ ongenerate: generateDocs },
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
