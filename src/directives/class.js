/*
`z-class-*` - Conditional class name

@CODE
<h4 z-class-red="warning" z-class-green="!warning"></h4>
<script>
    var view = zam(document.body);
    view.warning = true;
</script>
@RESULT

*/
/* jshint node: true, browser: true, esversion: 6, unused: true */
'use strict';

export default {
	attribute: '{prefix}class-(.+)',
	update(scope, el, val, attr, classname) {
		let value = val();
		if (value !== this.prevValue) {
			this.prevValue = value;
			el.classList.toggle(classname, value);
		}
	}
};