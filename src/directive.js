/* jshint node: true, browser: true, esversion: 6, unused: true */
'use strict';
import virtualdom from './virtualdom';
import config from './config';
import {log} from './utils'; 

let createDirective = (directive) => {
	if (directive.inline) {
		config.inlineParser = directive;
	}
	if (directive.template) {
		directive.block = true;
		//directive.order = 0.5;
		var node = document.createElement('span');
		node.innerHTML = directive.template;
		directive.template = virtualdom(node.childNodes[0]); // TODO warn if node_.childNodes > 0
	}
	if (!directive.order) { directive.order = 100; }
	let i = config.directives.findIndex(directive_ => directive.order < directive_.order); // insert in order of priority
	config.directives.splice(i === -1 ? config.directives.length : i, 0, directive);
	return directive;
};

export default createDirective;
