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
	query: `<.+ {prefix}(on-.+|${standardEvents.join('|')})>`,
	initialize(el, tag, attr) {
		this.event = attr.match[0].replace(/^on-/, '');
	},
	create(scope, el, tag, attr) {
		this.handler = e => {
			scope.$event = e;
			attr.value();
			scope.$(); // if an assignment happens, this is necessary to trigger watchers
			delete scope.$event;
			if (this.event === 'submit') { e.preventDefault(); }
		};
		el.addEventListener(this.event, this.handler);
	},
	destroy(scope, el) {
		el.removeEventListener(this.event, this.handler);
	}
};