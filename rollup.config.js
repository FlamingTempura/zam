/* jshint node: true, esversion: 6, unused: true */
'use strict';

const pegjs = require('rollup-plugin-pegjs'),
      uglify = require('rollup-plugin-uglify'),
      json = require('rollup-plugin-json'),
      babel = require('rollup-plugin-babel'),
      esformatter = require('rollup-plugin-esformatter'),
      strip = require('rollup-plugin-strip'),
      jsdom = require('jsdom'),
      fs = require('fs');

const renderExample = function (html, cb) { // set global document to new dom
	const zamscript = fs.readFileSync('./zam.js', 'utf8');
	try {
		let window = (new jsdom.JSDOM(html, { runScripts: 'outside-only' })).window,
			document = window.document,
			script = document.querySelector('script');
		script.parentNode.removeChild(script);
		window.eval(zamscript);
		window.eval(script.textContent);
		window.setTimeout(() => {
			var html = document.body.innerHTML;
			html = html
				.replace(/(\s*)(\S[^\n]*)<!--z-\w+-in-->/g, function (match, indent, line) {
					return line.replace(/(<[^/])/g, '\n' + indent + '$1');
				})
				.replace(/<!--[^>]*-->/g, '')
				.replace(/\n+/g, '\n')
				.trim();
			cb(null, html);
		});
	} catch (e) {
		cb(e);
	}
};

let generateDocs = function () {
	var readme = fs.readFileSync('README.md', 'utf8'),
		docs = fs.readdirSync('src/directives')
			.map(function (file) {
				var src = fs.readFileSync('src/directives/' + file, 'utf8'),
					text = '#### ' + src.slice(src.indexOf('/*') + 2, src.indexOf('*/')).trim(),
					m = text.match(/@ORDER (\d+)/),
					order = m ? Number(m[1]) : Infinity;
				return {
					order: order,
					text: text.replace(/@ORDER (\d+)/, '')
				};
			})
			.sort((a, b) => a.order - b.order)
			.map(file => file.text);
	readme = readme.replace(/\[\/\/\]: # \(DOC1\)[\w\W]*\[\/\/\]: # \(DOC1!\)/m,
		'[//]: # (DOC1)\n\n' + docs.join('\n\n') + '\n\n[//]: # (DOC1!)');
	var waiting = 0,
		newreadme = [];
	readme.split('@CODE').forEach(function (part, i) { // this renders all example code in the docs
		var parts_ = part.split('@RESULT');
		if (parts_.length === 1) {
			newreadme[i * 2] = parts_[0];
		} else {
			let code = parts_[0];
			waiting++;
			renderExample(code, function (err, html) {
				if (err) {
					console.error(err);
					console.error(code);
					html = '';
				}
				newreadme[i * 2] = '```html' + code + '```\n\n' +
					'Result:\n\n```html\n' + html.trim() + '\n```\n';
				waiting--;
				if (waiting === 0) {
					fs.writeFileSync('README.md', newreadme.join(''), 'utf8');
				}
			});
			newreadme[i * 2 + 1] = parts_[1];
		}
	});
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
				['es2015', { modules: false, loose: true }]
			],
			plugins: ['external-helpers']
		}),
		strip({
			functions: ['console.*', 'log'],
			sourceMap: false
		}),
		uglify({
			compress: {
				//dead_code: true,
				unused: true,
				negate_iife: true,
				reduce_vars: true,
				cascade: true,
				collapse_vars: true,
				//drop_console: true,
				properties: true,
				//sequences: false
			},
			output: {
				beautify: true,
				//max_line_len: 80
				//preserve_line: true
			}
		}),
		/*esformatter ({
			indent: {
				value: '	',
			},
			whiteSpace: {
				after: {
					ConditionalExpressionAlternate: 1
				}
			}
		})*/
	],
	//sourceMap: true,
	moduleName: 'zam',
	format: 'umd',
	//indent: false,
	dest: 'zam.js'
};

// linebreak after :