/*
`z-*-in` - Iterate through an array

Render the element for each item in an array. Each item is assigned to a variable name specified in the attribute name (see example below). This directive occurs before anything else.

Note: this is roughly equivelant to ng-repeat.

```html
<div z-todo-in="todos">{{ todo.message }}</div>
<script>
    var view = zam(document.body);
    view.todos = [
        { message: 'Buy food' },
        { message: 'Fix code' },
        { message: 'Wash clothes' }
    ];
</script>
```
*/

/* jshint node: true, browser: true, esversion: 6, unused: true */
'use strict';

import zam from '../zam';
import virtualdom from '../virtualdom';
import { arrayRemove } from '../utils';

export default {
	attribute: '{prefix}(.+)-in',
	order: 2,
	block: true, // do not continue traversing through this dom element (separate zam will be created)
	initialize(el) { // dom manipulation shouldn't happen in init as it will interfere with the virtualdom
		this.items = [];
		this.key = item => JSON.stringify(item); // TODO: allow specifying key
		//this.key = item => item;
		this.vnode = virtualdom(el.cloneNode(true));
	},
	create(scope, el, val, attr) {
		this.marker = document.createComment(attr);
		el.parentNode.replaceChild(this.marker, el);
		scope.$on('update', () => this.items.forEach(item => item.view.$()));
	},
	update(scope, el, val, attr, varname) {
		let newData = val() || [],
			existingItems = [].concat(this.items),
			newItems = [],
			fragment;
		// create new nodes / update existing nodes
		newData.forEach(data => {
			let existing = existingItems.findIndex(item_ => this.key(item_.data) === this.key(data));
			if (existing > -1) {
				existingItems.splice(existing, 1);
				//existing.view.$();
			} else {
				let vnode = this.vnode.clone();
				newItems.push({ vnode, data });
				if (!fragment) { fragment = document.createDocumentFragment(); }
				fragment.appendChild(vnode.node);
			}
			// todo: sorting (this mean that markers of child directives (e.g. exist) fall out of place)
		});
		// remove old nodes
		existingItems.forEach(item => {
			this.marker.parentNode.removeChild(item.vnode.node);
			item.view.$destroy();
			arrayRemove(this.items, item);
		});
		if (fragment) {
			this.marker.parentNode.insertBefore(fragment, this.marker); // TODO: only if there are changes
			newItems.forEach(item => {
				item.view = zam(item.vnode, { [varname]: item.data }, scope); // wait until vnodes have been added before creating the view
				this.items.push(item);
			});
		}
	}
};
