/* jshint node: true, browser: true, esversion: 6, unused: true */
'use strict';

let directives = [];
let inlineParser;

const directive = (directive) => {
	if (directive.inline) {
		inlineParser = directive;
	}
	if (directive.template) {
		directive.block = true;
		directive.order = 0.5;
	}
	if (!directive.order) { directive.order = 100; }
	directives.push(directive);
	directives.sort((a, b) => a.order - b.order);
	return directive;
};

export { directives, inlineParser, directive };
