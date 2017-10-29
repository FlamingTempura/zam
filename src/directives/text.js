/*
`z-text` and `z-html` - Set text or HTML content
@ORDER 1

Sets the text or HTML content of the specified element. Text and HTML can also
be set using template tags (`{{ blah }}`). When setting HTML, it will not be
checked for directives, and be aware of the risks of
[XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) when using user-
entered content.

@CODE
My name is <div>{{ me.name }}</div>
My name is <div z-text="me.name"></div><!-- equivalent to above -->
Some HTML: <span>{{{ boldName }}}</span>
Some HTML: <span z-html="boldName"></span>
Together: <span>{{ me.name }}, {{{ boldName }}}</span>
<script>
	const view = zam(document.body);
	view.me = { name: 'Bob' };
	view.boldName = '<em>Bob</em>';
</script>
@RESULT
*/
import { stringify } from '../utils';

export default {
	query: '<.+ {prefix}(text|html)>',
	block: true,
	inline: true,
	initialize(el) {
		el.innerHTML = '';
	},
	update(scope, el, tag, attr) {
		let value = stringify(attr.value());
		if (value !== this.value) {
			if (attr.match[0] === 'html') {
				el.innerHTML = value;
			} else {
				el.textContent = value;
			}
			this.value = value;
		}
	}
};
