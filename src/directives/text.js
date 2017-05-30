/*
`z-text` and `z-html`  - Set text or HTML content

Note: HTML is not parsed for directives.

```html
<div>My name is {{ me.name }}</div>
<div>My friend's name is <div z-text="alice.name"></div></div>
<div>Some HTML: {{{ boldName }}}</div>
<div>Even more HTML: <span z-html="italicName"></span></div>
<script>
    var view = zam(document.body);
    view.me = { name: 'Bob' };
    view.alice = { name: 'Alice' };
    view.boldName = '<strong>Bob</strong>';
    view.italicName = '<em>Bob</em>';
</script>
```

Warning: Be aware that binding HTML can cause
[XSS](https://en.wikipedia.org/wiki/Cross-site_scripting). You should not use
user-entered content without sanitisation.

*/

/* jshint node: true, browser: true, esversion: 6, unused: true */
'use strict';

import { stringify } from '../utils';

export default {
	attribute: '{prefix}(text|html)',
	block: true,
	inline: true,
	create(scope, el) {
		el.innerHTML = '';
	},
	update(scope, el, val, attr, type) {
		let value = stringify(val());
		if (value !== this.prevValue) {
			if (type === 'html') {
				el.innerHTML = value;
			} else {
				el.textContent = value;
			}
			this.prevValue = value;
		}
	}
};
