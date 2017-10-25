/*
`z-model` - Bind input
@ORDER 8

Creates a two way binding with input element value. The input value will be
set to the value of z-model. When the input value is changed by the user, the
data will also change, and the view will be kept up to date.

@CODE
<input type="text" z-model="blah">
{{ blah }} <!-- this will always display the value entered in the text input -->
<input type="button" z-click="thing()">
<script>
	const view = zam(document.body);
	view.blah = 'foo'; // will set the value of the input to blah
	view.thing = () => {
		console.log(view.blah); // will print whatever the user entered into the input
	}
</script>
@RESULT
*/
import { stringify, hash } from '../utils';
import { parse } from '../expression';
import config from '../config';

export default {
	attribute: '{prefix}model',
	block: true,
	order: 3, // must happen before z-attr-* binds with z-value on radio inputs
	create(scope, el, val) {
		let tag = el.tagName.toLowerCase(),
			inputType = (el.getAttribute('type') || '').toLowerCase();
		this.type = inputType === 'checkbox' ? 'checkbox' :
					tag === 'select' ? 'select' :
					inputType === 'radio' ? 'radio' :
					['range', 'number'].includes(inputType) ? 'number' :
					['date', 'datetime-local', 'time', 'month', 'week'].includes(inputType) ? 'date' :
					'text';
		if (this.type === 'radio' && !el.getAttribute('name')) {
			el.setAttribute('name', hash(scope.$id + JSON.stringify(this.ast))); // group radios by their model and scope
		}
		this.getValue = option => {
			var valExpr = option.getAttribute(config.prefix + 'value');
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
			if (value !== this.value) {
				this.value = value;
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
		if (value !== this.value) {
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
			this.value = value;
		}
	},
	destroy(scope, el) {
		el.removeEventListener('input', this.handler);
		el.removeEventListener('change', this.handler);
	}
};
