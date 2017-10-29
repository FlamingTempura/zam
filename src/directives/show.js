/*
`z-show` - Conditional visibility
@ORDER 2

Displays the element only if the result of the expression is
[truthy](https://developer.mozilla.org/en/docs/Glossary/Truthy) (e.g. true,
1). Equivalent to `z-attr-display="thing ? '' : 'none'"`.

@CODE
<div z-show="showMe">My name is {{ me.name }}</div>
<button z-on-click="hide()">Hide</button>
<script>
	const view = zam(document.body);
	view.me = { name: 'Bob' };
	view.showMe = true;
	view.hide = () => {
		view.showMe = false;
	};
</script>
@RESULT
*/
export default {
	query: '<.+ {prefix}show>',
	update(scope, el, tag, attr) {
		let value = attr.value() ? '' : 'none';
		if (value !== this.value) {
			el.style.display = this.value = value;
		}
	}
};
