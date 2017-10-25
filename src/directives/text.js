/*
`z-text` and `z-html` - Set text or HTML content
@ORDER 1

Sets the text or HTML content of the specified element. Text and HTML can also
be set using template tags ('{{ blah }}'). HTML will not be checked for
directives.

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

Warning: Be aware that binding HTML can cause
[XSS](https://en.wikipedia.org/wiki/Cross-site_scripting). You should not use
user-entered content without sanitisation.
*/

'use strict';

import { stringify } from '../utils';

export default {
	attribute: '{prefix}(text|html)',
	block: true,
	inline: true,
	initialize(el) {
		el.innerHTML = '';
	},
	update(scope, el, val, attr, type) {
		let value = stringify(val());
		if (value !== this.value) {
			if (type === 'html') {
				el.innerHTML = value;
			} else {
				el.textContent = value;
			}
			this.value = value;
		}
	}
};
