/*
`z-skip` - Skip compilation of this element
@ORDER 10

@CODE
<div z-skip>
	{{ this will appear as it is (including curly braces) }}
	<div z-font-size="'12pt'">Directives will not be parsed</div>
</div>
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
