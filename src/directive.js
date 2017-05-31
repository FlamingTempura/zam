/* jshint node: true, browser: true, esversion: 6, unused: true */
'use strict';

let directives = [];
let createDirective = (directive) => {
	if (directive.inline) {
		createDirective.inlineParser = directive;
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
createDirective.forEach = directives.forEach.bind(directives);
createDirective.directives = directives;
createDirective.prefix = 'z-';

export default createDirective;
