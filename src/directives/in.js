/*
`z-*-in` - Iterate through an array

Renders the element for each item in an array or object. Each value in the
array/object is assigned to a variable name specified in the attribute name
(see example below). 

@CODE
<div z-memo-in="memos">{{ $index }}: {{ memo }}</div><!-- $index is the index number of the element in the array -->
<em z-todo-in="todos">{{ todo.message }}</em>
<p z-item-in="basket" z-key="item.id">{{ item.name }}</p><!-- use `z-key` to specify a key for identifying each item in the array -->
<ul>
	<li z-info-in="apple">{{ $index }}: {{ info }}</li><!-- $index is the property name of the object -->
</ul>
<script>
    var view = zam(document.body);
    view.memos = ['food', 'code', 'clothes'];
    view.todos = [
        { message: 'Buy food' },
        { message: 'Fix code' },
        { message: 'Wash clothes' }
    ];
    view.basket = [
        { id: 1, name: 'Chair' },
        { id: 2, name: 'Table' },
        { id: 2, name: 'Table' } // this won't show because the item above has the same id
    ];
    view.apple = { type: 'granny smith', color: 'green' };
</script>
@RESULT

If `z-key` is not specified, `JSON.stringify` is used.

Note: This directive occurs before anything else.

*/

/* jshint node: true, browser: true, esversion: 6, unused: true */
'use strict';

import zam from '../zam';
import virtualdom from '../virtualdom';
import { parse, evaluate } from '../expression';
import directive from '../directive';

export default {
	attribute: '{prefix}(.+)-in',
	order: 2,
	block: true, // do not continue traversing through this dom element (separate zam will be created)
	initialize(el, attr, varname) { // dom manipulation shouldn't happen in init as it will interfere with the virtualdom
		this.items = [];
		const zKey = el.getAttribute(directive.prefix + 'key');
		if (zKey) {
			const keyAST = parse(zKey);
			el.removeAttribute(directive.prefix + 'key');
			this.key = data => evaluate(keyAST, { [varname]: data }).value;
		} else {
			this.key = data => JSON.stringify(data);
		}
		this.vnode = virtualdom(el.cloneNode(true));
	},
	create(scope, el, val, attr) {
		this.marker = document.createComment(attr);
		el.parentNode.replaceChild(this.marker, el);
	},
	update(scope, el, val, attr, varname) {
		let data = val() || [],
			indexes = Object.keys(data);
			//newData = [].concat(val() || []);
		this.items = this.items.filter(item => {
			let toUpdate = indexes.findIndex(i => this.key(data[i]) === this.key(item.datum));
			if (toUpdate > -1) {
				// update existing node
				item.view.$index = indexes[toUpdate];
				item.view.$();
				indexes.splice(toUpdate, 1);
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
		indexes.map(i => {
			let existing = this.items.find(item => this.key(data[i]) === this.key(item.datum));
			if (existing) { return; }
			let vnode = this.vnode.clone(),
				item = { vnode, datum: data[i] };
			this.marker.parentNode.insertBefore(vnode.node, this.marker);
			item.view = zam(item.vnode, {
				[varname]: item.datum,
				$index: i
			}, scope); // wait until vnodes have been added before creating the view
			item.view.$();
			this.items.push(item);
		});
	}
};
