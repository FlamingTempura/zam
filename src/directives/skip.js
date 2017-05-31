/*
`z-skip` - Skip compilation of this element

@CODE
<div z-skip>{{ this will appear as it is (including curly braces) }}</div>
<script>
    zam(document.body);
</script>
@RESULT

*/

/* jshint node: true, browser: true, esversion: 6, unused: true */
'use strict';

export default {
	attribute: '{prefix}skip',
	order: 1,
	block: true
};
