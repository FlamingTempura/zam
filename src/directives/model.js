/*
`z-model` - Bind input

Two way binding with input element value. The input value will be set to the value of z-model. When the input value is changed by the user, the data will also change, and the view will be kept up to date.

```html
<input type="text" z-model="blah">
{{ blah }} <!-- this will always display the value entered in the text input -->
<input type="button" z-click="thing()">
<script>
    var view = zam(document.body);
    view.blah = 'foo'; // will set the value of the input to blah
    view.thing = function () {
        console.log(view.blah); // will print whatever the user entered into the input
    }
</script>
```
*/

/* jshint node: true, browser: true, esversion: 6, unused: true */
'use strict';

import { stringify, hash } from '../utils';
import { parse } from '../expression';

export default {
	attribute: '{prefix}model',
	block: true,
	create(scope, el, val) {
		let tag = el.tagName.toLowerCase(),
			inputType = (el.getAttribute('type') || '').toLowerCase();
		this.type = inputType === 'checkbox' ? 'checkbox' :
					tag === 'select' ? 'select' :
					inputType === 'radio' ? 'radio' :
					['range', 'number'].indexOf(inputType) > -1 ? 'number' :
					['date', 'datetime-local', 'time', 'month', 'week'].indexOf(inputType) > -1 ? 'date' :
					'text';
		if (this.type === 'radio' && !el.getAttribute('name')) {
			el.setAttribute('name', hash(scope.$id + JSON.stringify(this.ast))); // group radios by their model and scope
		}
		this.getValue = option => {
			var valExpr = option.getAttribute('z-value');
			return valExpr ?
				val(parse(valExpr)) :
				option.getAttribute('value');
		};
		this.handler = () => {
			if (this.type === 'radio' && !el.checked) { return; }
			let value = this.type === 'checkbox' ? !!el.checked :
						this.type === 'select' ? this.getValue(el.options[el.selectedIndex]) :
						this.type === 'radio' ? this.getValue(el) :
						this.type === 'number' ? Number(el.value) :
						this.type === 'date' ? el.valueAsDate :
						el.value;
			if (value !== this.prevValue) {
				this.prevValue = value;
				val({ // evaluate "<expression> = <value>"
					type: 'Assignment',
					operator: '=',
					left: this.ast,
					right: { type: 'Literal', value }
				});
				scope.$();
			}
		};
		el.addEventListener('input', this.handler);
		el.addEventListener('change', this.handler);
		if (this.type === 'select') {
			el.selectedIndex = -1; // select empty value
		}
	},
	update(scope, el, val) { // update dom
		let value = val();
		if (value !== this.prevValue) {
			if (this.type === 'checkbox') {
				el.checked = !!value;
			} else if (this.type === 'select') {
				el.selectedIndex = Array.from(el.options).reduce((selected, option, i) => {
					let v = this.getValue(option);
					option.setAttribute('value', stringify(v));
					return v === value ? i : selected;
				}, -1);
			} else if (this.type === 'radio') {
				let v = this.getValue(el);
				el.setAttribute('value', stringify(v));
				el.checked = value === v;
			} else if (this.type === 'number') {
				el.value = Number(value);
			} else if (this.type === 'date') {
				el.valueAsDate = value;
			} else {
				el.value = stringify(value);
			}
			this.prevValue = value;
		}
	},
	destroy(scope, el) {
		el.removeEventListener('input', this.handler);
		el.removeEventListener('change', this.handler);
	}
};
