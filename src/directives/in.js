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
	const view = zam(document.body);
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
import zam from '../zam';
import virtualdom from '../virtualdom';
import { parse, evaluate } from '../expression';
import { arrayRemove } from '../utils';

export default {
	query: '<.+ {prefix}(.+)-in {prefix}key="">',
	order: 2,
	block: true, // do not continue traversing through this dom element (separate zam will be created)
	initialize(el) { // dom manipulation shouldn't happen in init as it will interfere with the virtualdom
		this.items = [];
		this.source = virtualdom(el.cloneNode(true));
	},
	create(scope, el, tag, attr, key) {
		const zKey = key.value();
		if (zKey) {
			this.key = data => evaluate(parse(zKey), { [attr.match[0]]: data }).value;
		} else {
			this.key = data => JSON.stringify(data);
		}
		this.marker = document.createComment(attr.name);
		el.parentNode.replaceChild(this.marker, el);
	},
	update(scope, el, tag, attr) {
		let value = attr.value() || [],
			data = Object.keys(value).map(k => ({ index: k, computed: this.key(value[k]), datum: value[k] }));

		// recompute keys of existing nodes and remove old nodes
		[].concat(this.items).forEach(item => {
			item.key = this.key(item.datum);
			let kept = data.find(k => k.computed === item.key);
			if (!kept) {
				this.marker.parentNode.removeChild(item.node);
				item.view.$destroy();
				arrayRemove(this.items, item);
			}
		});
		// create new nodes and update existing nodes
		data.forEach(k => {
			let item = this.items.find(item_ => k.computed === item_.key);
			if (!item) {
				let vnode = this.source.clone();
				vnode.originalNode = el.cloneNode(true); // pffft... whatever, this is for z-inherit
				//vnode.originalNode = vnode.node;
				item = { key: k.computed, datum: k.datum, node: vnode.node };
				this.marker.parentNode.insertBefore(item.node, this.marker);
				item.view = zam(vnode, { [attr.match[0]]: item.datum, }, scope);
				//vnode.originalNode = vnode.node;

			} else {
				arrayRemove(this.items, item);
				this.marker.parentNode.insertBefore(item.node, this.marker);
			}
			item.view.$index = k.index;
			item.view.$();
			this.items.push(item);
		});
	}
};
