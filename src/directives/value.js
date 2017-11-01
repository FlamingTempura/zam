/*
`z-isolate` - Create an isolate scope
@ORDER 3

For <input> tags, or <option> tags within <select>.
*/

export default {
	query: '<option|input {prefix}value>',
	order: 3,
	update(scope, el, tag, attr) {
		el.val = attr.value();
		el.setAttribute('value', JSON.stringify(el.val));
	}
};