/*
`z-exist` - Conditional existence
@ORDER 3

Renders the element only if the result of the expression is
[truthy](https://developer.mozilla.org/en/docs/Glossary/Truthy) (e.g. true,
1). Unlike z-show, the directives inside the element will not be updated while
the element is hidden (since the element is in fact destroyed when falsey and
recreated when truthy). This directive occurs after `z-in` and before anything
else.

Note: this is equivalent to `ng-if` in angular.

@CODE
<div z-exist="showMe">My name is {{ me.name }}</div>
<div z-exist="!showMe">I'm not here</div>
<button z-click="hide()">Hide</button>
<script>
	const view = zam(document.body);
	view.me = { name: 'Bob' };
	view.showMe = true;
	view.hide = () => {
		view.showMe = false;
	};
</script>
@RESULT
*/

'use strict';

import zam from '../zam';
import virtualdom from '../virtualdom';
import { log } from '../utils';

export default {
	attribute: '{prefix}exist',
	order: 3,
	block: true, // stop traversal into the element if it should not exist
	initialize(el) { // dom manipulation shouldn't happen in init as it will interfere with the virtualdom
		log('exist.init');
		this.template = virtualdom(el.cloneNode(true)); // clone needed (for pointer)
		log('exist.template', this.template.node.outerHTML);
	},
	create(scope, el, val, attr) {
		log('exist.create');
		this.marker = document.createComment(attr);
		el.parentNode.replaceChild(this.marker, el);
	},	
	update(scope, el, val) {
		log('exist.update');
		let value = !!val();
		if (value !== this.value) {
			if (value) {
				log('exist.insert');
				this.vnode = this.template.clone();
				this.marker.parentNode.insertBefore(this.vnode.node, this.marker);
				this.view = zam(this.vnode, undefined, scope).$();
				log('exist.inserted', this.vnode.node.outerHTML);
			} else if (this.view) {
				log('exist.remove');
				this.view.$destroy();
				this.marker.parentNode.removeChild(this.vnode.node);
				delete this.vnode;
				delete this.view;
			}
			this.value = value;
		}
	}
};
