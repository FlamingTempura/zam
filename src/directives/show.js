/*
`z-show` - Conditional visibility
@ORDER 2

Conditionally display the element. Equivelant to `z-attr-display="thing ? '' : 'none'"`.

@CODE
<div z-show="showMe">My name is {{ me.name }}</div>
<button z-on-click="hide()">Hide</button>
<script>
    var view = zam(document.body);
    view.me = { name: 'Bob' };
    view.showMe = true;
    view.hide = function () {
        view.showMe = false;
    };
</script>
@RESULT
*/

'use strict';

export default {
	attribute: '{prefix}show',
	update(scope, el, val) {
		let value = val() ? '' : 'none';
		if (value !== this.value) {
			el.style.display = this.value = value;
		}
	}
};
