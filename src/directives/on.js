/*
`z-on-*` - Event handler
@ORDER 9

Executes an expression when the specified event happens. Event data is
available in `$event`. As a shorthand, `on-` may be omitted for standard DOM
events, such as `click`, `mousemove`, and `mousedown`.

@CODE
<input type="button" z-on-click="doSomething($event)">
<input type="button" z-click="doSomething($event)"><!-- equivalent to above -->
<script>
	const view = zam(document.body);
	view.doSomething = e => {
		console.log('click!', e.clientX, e.clientY);
	}
</script>
@RESULT
*/
const standardEvents = [
	'load', 'error', 'focus', 'blur', 'click', 'dblclick',   'mouse.*',
	'keyup', 'keydown', 'keypress', 'input', 'change', 'submit', 'reset',
	'scroll', 'resize',  'drag.*', 'drop'];

export default {
	attribute: `{prefix}(?:on-(.+)|(${standardEvents.join('|')}))`,
	create(scope, el, val, attr, event, stdevent) {
		this.handler = e => {
			scope.$event = e;
			val();
			scope.$(); // if an assignment happens, this is necessary to trigger watchers
			delete scope.$event;
			if ((event || stdevent) === 'submit') { e.preventDefault(); }
		};
		el.addEventListener(event || stdevent, this.handler);
	},
	destroy(scope, el, val, attr, event, stdevent) {
		el.removeEventListener(event || stdevent, this.handler);
	}
};