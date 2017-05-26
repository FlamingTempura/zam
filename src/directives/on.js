/*
`z-on-*` - Event handler

Execute an expression when an event happens. Event data is available in `$event`.

```html
<input type="button" z-on-click="doSomething($event)">
<script>
    var view = zam(document.body);
    view.doSomething = function (e) {
        console.log('click!', e.clientX, e.clientY);
    }
</script>
```

_Shorthand:_ `on-` may be omitted for standard DOM events, such as `click`, `mousemove`, and `mousedown`:
```html
<input type="button" z-click="doSomething($event)">
<form z-submit="doSomething($event)"></form>
```

*/
/* jshint node: true, browser: true, esversion: 6, unused: true */
'use strict';

const standardEvents = [
	'load', 'error', 'focus', 'blur', 'click', 'dblclick',   'mouse.*',
	'keyup', 'keydown', 'keypress', 'input', 'change', 'submit', 'reset',
	'scroll', 'resize',  'drag.*', 'drop'];

export default {
	attribute: '{prefix}(?:on-(.+)|(' + standardEvents.join('|') + '))',
	create(scope, el, attr, event, stdevent) {
		this.handler = event => {
			scope.$event = event;
			this.eval();
			delete scope.$event;
		};
		el.addEventListener(event || stdevent, this.handler);
	},
	destroy(scope, el, attr, event, stdevent) {
		el.removeEventListener(event || stdevent, this.handler);
	}
};