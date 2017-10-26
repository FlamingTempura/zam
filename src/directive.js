import virtualdom from './virtualdom';
import config from './config';

let createDirective = (directive) => {
	if (directive.inline) {
		config.inlineParser = directive;
	}
	if (directive.template) {
		directive.block = true;
		var node = document.createElement('span');
		node.innerHTML = directive.template;
		if (node.childNodes.length === 1) {
			node = node.childNodes[0];
		}
		directive.template = virtualdom(node);
	}
	if (!directive.order) { directive.order = 100; }
	let i = config.directives.findIndex(directive_ => directive.order < directive_.order); // insert in order of priority
	config.directives.splice(i === -1 ? config.directives.length : i, 0, directive);
	return directive;
};

export default createDirective;
