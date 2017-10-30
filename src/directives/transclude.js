/*
`z-isolate` - Create an isolate scope
@ORDER 10

For use in directives, this allows the original content of an element to be
placed wihin a templated directive.

@CODE
<person id="d">Name: <strong>{{ name }}</strong></person>
<script>
	zam.directive({
		query: '<person>',
		template: '<p z-transclude></p>'
	});
	const view = zam(document.body);
	view.name = 'Bob';
</script>
@RESULT
*/
import virtualdom from '../virtualdom';

export default {
	query: '<.+ {prefix}transclude>',
	block: true,
	create(scope, el) {
		let vnode = el.vnode,
			originalNode;
		while (!originalNode && vnode) {
			originalNode = vnode.originalNode;
			vnode = vnode.node.parentNode && vnode.node.parentNode.vnode;
		}
		if (originalNode) {
			Array.from(originalNode.childNodes).forEach(child => {
				let v = virtualdom(child);
				el.appendChild(v.node);
				el.vnode.children.push(v);
			});
		}
	}
};
