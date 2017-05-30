/*
`z-class-*` - Conditional class name

```html
<h4 z-class-red="warning"></h4>
<script>
    var view = zam(document.body);
    view.warning = true;
</script>
```

*/
/* jshint node: true, browser: true, esversion: 6, unused: true */
'use strict';

export default {
	attribute: '{prefix}class-(.+)',
	update(scope, el, val, attr, classname) {
		let value = val();
		if (value !== this.prevValue) {
			this.prevValue = value;
			el.classList.toggle(classname, value);
		}
	}
};