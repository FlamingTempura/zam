/*
`z-inherit` - Set where template should inherit specified contents
@ORDER 11

For use in directives, this allows the original content of an element to be
placed within a templated directive.

@CODE
<person id="d">Name: <strong>{{ name }}</strong></person>
<script>
	zam.directive({
		query: '<person>',
		template: '<p z-inherit></p>'
	});
	const view = zam(document.body);
	view.name = 'Bob';
</script>
@RESULT
*/
import virtualdom from '../virtualdom';

export default {
	query: '<.+ {prefix}inherit>',
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
