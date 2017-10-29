/*
`z-class-*` - Conditional class name
@ORDER 6

Adds the specified classname only if the result of the expression is
[truthy](https://developer.mozilla.org/en/docs/Glossary/Truthy) (e.g. true,
1).

@CODE
<h4 z-class-red="warning" z-class-green="!warning"></h4>
<script>
	const view = zam(document.body);
	view.warning = true;
</script>
@RESULT
*/
export default {
	query: '<.+ {prefix}class-(.+)>',
	update(scope, el, tag, clas) {
		let value = clas.value();
		if (value !== this.value) {
			this.value = value;
			el.classList.toggle(clas.match[0], value);
		}
	}
};