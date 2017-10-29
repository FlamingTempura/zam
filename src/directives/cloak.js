/*
`z-cloak` - Hide content until zam has initiated
@ORDER 1

Prevents template tags from being visible before zam has initiated. A css rule
for `[z-clock]` should be added to set `display: none`.

@CODE
<style>
	[z-cloak] { display: none; }
</style>
Hello. <div z-cloak>this div will not be visible until zam has initiated {{ me.name }}</div>
<script>
	const view = zam(document.body);
	view.me = { name: 'Bob' };
</script>
@RESULT
*/
export default {
	query: '<.+ {prefix}cloak>',
	initialize(el) {
		el.display = '';
	}
};
