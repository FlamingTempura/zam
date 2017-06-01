/*
`z-*-in` - Iterate through an array
@ORDER 4

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
import { arrayRemove, log } from '../utils';
import directive from '../directive';

export default {
	attribute: '{prefix}(.+)-in',
	order: 2,
	block: true, // do not continue traversing through this dom element (separate zam will be created)
	initialize(el, attr, varname) { // dom manipulation shouldn't happen in init as it will interfere with the virtualdom
		log('in.init');
		this.items = [];
		const zKey = el.getAttribute(directive.prefix + 'key');
		if (zKey) {
			const keyAST = parse(zKey);
			el.removeAttribute(directive.prefix + 'key');
			this.key = data => evaluate(keyAST, { [varname]: data }).value;
		} else {
			this.key = data => JSON.stringify(data);
		}
		this.template = virtualdom(el.cloneNode(true));
		log('in.template', this.template.node.outerHTML);
	},
	create(scope, el, val, attr) {
		log('in.create');
		this.marker = document.createComment(attr);
		el.parentNode.replaceChild(this.marker, el);
	},
	update(scope, el, val, attr, varname) {
		log('in.update');
		let data = val() || [],
			keys = Object.keys(data).map(k => ({ index: k, computed: this.key(data[k]), datum: data[k] }));

		// recompute keys of existing nodes and remove old nodes
		[].concat(this.items).forEach(item => {
			item.key = this.key(item.datum);
			let update = keys.find(k => k.computed === item.key);
			if (!update) {
				this.marker.parentNode.removeChild(item.node);
				item.view.$destroy();
				arrayRemove(this.items, item);
			}
		});
		// create new nodes and update existing nodes
		keys.forEach(k => {
			let item = this.items.find(item_ => k.computed === item_.key);
			if (!item) {
				log('in.clone');
				let vnode = this.template.clone();
				item = { key: k.computed, datum: k.datum, node: vnode.node };
				this.marker.parentNode.insertBefore(item.node, this.marker);
				item.view = zam(vnode, { [varname]: item.datum, }, scope);
			} else {
				log('in.move');
				arrayRemove(this.items, item);
				this.marker.parentNode.insertBefore(item.node, this.marker);
			}
			item.view.$index = k.index;
			item.view.$();
			this.items.push(item);
		});
	}
};
