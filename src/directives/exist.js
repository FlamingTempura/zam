/*
`z-exist` - Conditional existance

Render the element only if the result of the expression is
[truthy](https://developer.mozilla.org/en/docs/Glossary/Truthy) (e.g. true,
1). Unlike z-show, the directives inside the element will not be updated while
the element is hidden (since the element is in fact destroyed when falsey and
recreated when truthy). This directive occurs after `z-in` and before anything
else.

Note: this is equivelant to `ng-if` in angular.

```html
<div z-exist="showMe">My name is {{ me.name }}</div>
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

import zam from '../zam';

export default {
	attribute: '{prefix}exist',
	order: 3,
	block: true, // this prevents wasting effort when element does not exist
	create(scope, el, attr) {
		this.marker = document.createComment(attr);
		el.parentNode.replaceChild(this.marker, el);
	},	
	update(scope, el) {
		let value = !!this.eval();
		//console.log('exist?')
		if (value !== this.prevValue) {
			if (value) {
				//console.log('EXIST')
				this.clone = el.cloneNode(true);
				this.childView = zam(this.clone, undefined, scope);
				this.marker.parentNode.insertBefore(this.clone, this.marker);
			} else if (this.clone) {
				//console.log('UNEXIST')
				this.marker.parentNode.removeChild(this.clone);
				this.childView.$destroy();
				delete this.childView;
			}
			this.prevValue = value;
		}
	}
};
