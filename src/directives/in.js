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
import { arrayRemove } from '../utils';

export default {
	attribute: '{prefix}(.+)-in',
	order: 2,
	block: true, // do not continue traversing through this dom element (separate zam will be created)
	create(scope, el, attr) {
		this.items = [];
		this.marker = document.createComment(attr);
		this.key = item => JSON.stringify(item); // TODO: allow specifying key
		el.parentNode.replaceChild(this.marker, el);
	},	
	update(scope, el, attr, varname) {
		let array = this.eval() || [],
			fragment = document.createDocumentFragment();
		//console.log('[d] in.update(' + this.items.length + ' to ' + array.length + ')');
		// remove old nodes
		this.items.forEach(item => {
			let exists = array.find(el => this.key(el) === this.key(item.data));
			if (!exists) {
				//console.log('[e] remove el');
				item.view.$destroy();
				this.marker.parentNode.removeChild(item.el);
				arrayRemove(this.items, item);
			}
		});
		// create new nodes / update existing nodes
		array.forEach(data => {
			let item = this.items.find(item_ => this.key(item_.data) === this.key(data));
			if (!item) {
				//console.log('******* DOUBLE NO ********', this.items, data)
				item = { el: el.cloneNode(true), data };
				this.items.push(item);
				fragment.appendChild(item.el);
			}
			// todo: sorting (this mean that markers of child directives (e.g. exist) fall out of place)
		});
		this.marker.parentNode.insertBefore(fragment, this.marker);

		// create any views (this needs to happen after dom insertion)
		this.items.forEach(item => {
			if (!item.view) {
				item.view = zam(item.el, { [varname]: item.data }, scope);
			}
		});
	}
};
