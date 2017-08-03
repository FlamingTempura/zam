/*
`z-cloak`  - Hide content until zam has initiated
@ORDER 1

Prevents template tags from being visible before zam has initiated. A css rule for `[z-clock]` should be added to set `display: none`.

@CODE
<style>
	[z-cloak] { display: none; }
</style>
Hello. <div z-clock>this div will not be visible until zam has initiated {{ me.name }}</div>
<script>
    var view = zam(document.body);
    view.me = { name: 'Bob' };
</script>

*/

/* jshint node: true, browser: true, esversion: 6, unused: true */
'use strict';

export default {
	attribute: '{prefix}cloak',
	initialize(el) {
		el.display = '';
	}
};
