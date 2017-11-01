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
		let node = el,
			originalNode;
		while (!originalNode && node) {
			originalNode = node.vnode && node.vnode.originalNode;
			node = node.parentNode;
		}
		if (originalNode) {
			Array.from(originalNode.childNodes).forEach(child => {
				let v = virtualdom(child);
				if (v.fragment) {
					v.node.textContent = ''; // not sure why this is needed
				}
				el.appendChild(v.node);
				el.vnode.children.push(v);
			});
		}
	}
};
