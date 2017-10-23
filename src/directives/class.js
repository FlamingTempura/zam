/*
`z-class-*` - Conditional class name
@ORDER 6

@CODE
<h4 z-class-red="warning" z-class-green="!warning"></h4>
<script>
    var view = zam(document.body);
    view.warning = true;
</script>
@RESULT

*/
'use strict';

export default {
	attribute: '{prefix}class-(.+)',
	update(scope, el, val, attr, classname) {
		let value = val();
		if (value !== this.value) {
			this.value = value;
			el.classList.toggle(classname, value);
		}
	}
};