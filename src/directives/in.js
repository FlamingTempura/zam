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
	},
	update(scope, el, val, attr, varname) {
		let newData = [].concat(val() || []);
		this.items = this.items.filter(item => {
			let toUpdate = newData.findIndex(data => this.key(data) === this.key(item.data));
			if (toUpdate > -1) {
				// update existing node
				newData.splice(toUpdate, 1);
				item.view.$();
				return true;
			} else {
				// remove old node
				this.marker.parentNode.removeChild(item.vnode.node);
				item.view.$destroy();
				return false;
			}
		});
		// create new nodes
		/*if (newData.length > 0) {
			let fragment = document.createDocumentFragment(),
				newItems = newData.map(data => {
					let vnode = this.vnode.clone();
					fragment.appendChild(vnode.node);
					return { vnode, data };
				});
			// todo: sorting (this mean that markers of child directives (e.g. exist) fall out of place)
			this.marker.parentNode.insertBefore(fragment, this.marker);
			newItems.forEach(item => {
				item.view = zam(item.vnode, { [varname]: item.data }, scope); // wait until vnodes have been added before creating the view
				item.view.$();
				this.items.push(item);
			});
		}*/
		newData.map(data => {
			let vnode = this.vnode.clone(),
				item = { vnode, data };
			this.marker.parentNode.insertBefore(vnode.node, this.marker);
			item.view = zam(item.vnode, { [varname]: item.data }, scope); // wait until vnodes have been added before creating the view
			item.view.$();
			this.items.push(item);
		});
		// todo: sorting (this mean that markers of child directives (e.g. exist) fall out of place)
	}
};
