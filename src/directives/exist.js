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
import virtualdom from '../virtualdom';

export default {
	attribute: '{prefix}exist',
	order: 3,
	block: true, // this prevents wasting effort when element does not exist
	initialize(el) { // dom manipulation shouldn't happen in init as it will interfere with the virtualdom
		this.template = virtualdom(el.cloneNode(true));
	},
	create(scope, el, val, attr) {
		this.marker = document.createComment(attr);
		el.parentNode.replaceChild(this.marker, el);
		scope.$on('update', () => {
			if (this.view) { this.view.$(); }
		});
	},	
	update(scope, el, val) {
		let value = !!val();
		if (value !== this.prevValue) {
			if (value) {
				this.vnode = this.template.clone();
				this.marker.parentNode.insertBefore(this.vnode.node, this.marker);
				this.view = zam(this.vnode, undefined, scope);
			} else if (this.view) {
				this.marker.parentNode.removeChild(this.vnode.node);
				this.view.$destroy();
				delete this.vnode;
				delete this.view;
			}
			this.prevValue = value;
		}
	}
};
