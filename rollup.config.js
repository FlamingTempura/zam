const pegjs = require('rollup-plugin-pegjs'),
      uglifyes = require('rollup-plugin-uglify-es'),
      json = require('rollup-plugin-json'),
      babel = require('rollup-plugin-babel'),
      esformatter = require('rollup-plugin-esformatter'),
      strip = require('rollup-plugin-strip'),
      jsdom = require('jsdom'),
      fs = require('fs');

const browsers = [
	'Chrome >= 49',
	'ChromeAndroid >= 61',
	'Edge >= 14',
	'Firefox >= 52', // 18 for proxy, 22 for arrow fn
	'FirefoxAndroid >= 56',
	'iOS >= 10.2',
	'Opera >= 36',
	'OperaMobile >= 37',
	'Safari >= 10',
	'Samsung >=5'
];

let zamscript;
const renderExample = (html, cb) => { // set global document to new dom
	try {
		let window = (new jsdom.JSDOM(html, { runScripts: 'outside-only' })).window,
			document = window.document,
			script = document.querySelector('script');
		script.parentNode.removeChild(script);
		window.eval(zamscript);
		window.eval(script.textContent);
		window.setTimeout(() => {
			let html = document.body.innerHTML;
			html = html
				.replace(/(\s*)(\S[^\n]*)<!--z-\w+-in-->/g, (match, indent, line) => line.replace(/(<[^/])/g, `\n${indent}$1`))
				.replace(/<!--[^>]*-->/g, '')
				.replace(/\n+/g, '\n')
				.trim();
			cb(null, html);
		});
	} catch (e) {
		cb(e);
	}
};

const generateDocs = () => {
	zamscript = fs.readFileSync('./zam.js', 'utf8');
	let readme = fs.readFileSync('README.md', 'utf8'),
		docs = fs.readdirSync('src/directives')
			.map(file => {
				let src = fs.readFileSync(`src/directives/${file}`, 'utf8'),
					text = '### ' + src.slice(src.indexOf('/*') + 2, src.indexOf('*/')).trim(),
					m = text.match(/@ORDER (\d+)/),
					order = m ? Number(m[1]) : Infinity;
				return {
					order,
					text: text.replace(/@ORDER (\d+)\n?/, '')
				};
			})
			.sort((a, b) => a.order - b.order)
			.map(file => file.text);
	readme = readme.replace(/\[\/\/\]: # \(DOC1\)[\w\W]*\[\/\/\]: # \(DOC1!\)/m,
		`[//]: # (DOC1)\n\n${docs.join('\n\n')}\n\n[//]: # (DOC1!)`);
	let waiting = 0,
		newreadme = [];
	readme.split('@CODE').forEach((part, i) => { // this renders all example code in the docs
		let parts_ = part.split('@RESULT');
		if (parts_.length === 1) {
			newreadme[i * 2] = parts_[0];
		} else {
			let code = parts_[0];
			waiting++;
			renderExample(code, (err, html) => {
				if (err) {
					console.error(err);
					console.error(code);
					html = '';
				}
				newreadme[i * 2] = '```html' + code + '```\n\n' +
					'Result:\n\n```html\n' + html.trim() + '\n```';
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
	input: 'src/index.js',
	plugins: [
		{ onwrite: generateDocs },
		pegjs({
			allowedStartRules: ['Text', 'Expression'],
			optimize: 'speed', // 'speed'
			cache: 'true'
		}),
		json(),
		babel({
			'presets': [
				['env', { targets: { browsers }, modules: false, loose: true }]
			],
			plugins: ['external-helpers'],
			exclude: 'node_modules/**'
		}),
		//strip({
			//functions: ['console.*', 'log'],
		//	sourceMap: false
		//}),
		uglifyes(),
		esformatter ({
			indent: {
				value: '	',
			},
			whiteSpace: {
				after: {
					ConditionalExpressionAlternate: 1
				}
			}
		})
	],
	//sourcemap: true,
	name: 'zam',
	output: {
		format: 'umd',
		file: 'zam.js'
	}
};
