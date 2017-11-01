/*
`z-isolate` - Create an isolate scope
@ORDER 10

Creates a new scope for the DOM element and its children.

@CODE
{{ name }}
<input ng-model="name">
<div z-isolate>
	{{ name }}
	<input ng-model="name">
</div>
<script>
	const view = zam(document.body);
	view.name = 'Bob';
</script>
@RESULT
*/
import zam from '../zam';
import virtualdom from '../virtualdom';

export default {
	query: '<.+ {prefix}isolate>',
	order: 3,
	block: true, // stop traversal into the element if it should not exist
	initialize(el) {
		this.vnode = virtualdom(el.cloneNode(true));
	},
	create(scope, el) {
		el.parentNode.replaceChild(this.vnode.node, el);
		this.view = zam(this.vnode, undefined, scope);
	},
	update() {
		this.view.$();
	}
};
