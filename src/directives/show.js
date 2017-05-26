/*
`z-show` - Conditional visibility

Conditionally display the element. Equivelant to `z-attr-display="thing ? '' : 'none'"`.

```html
<div z-show="showMe">My name is {{ me.name }}</div>
<button z-on-click="hide()">Hide</button>
<script>
    var view = zam(document.body);
    view.me = { name: 'Bob' };
    view.showMe = true;
    view.hide = function () {
        view.showMe = false;
    };
</script>
```
*/

/* jshint node: true, browser: true, esversion: 6, unused: true */
'use strict';

export default {
	attribute: '{prefix}show',
	update(scope, el) {
		let value = this.eval() ? '' : 'none';
		if (value !== this.prevValue) {
			el.style.display = value;
			this.prevValue = value;
		}
	}
};
