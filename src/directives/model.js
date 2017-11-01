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
import { evaluate } from '../expression';

export default {
	query: '<input|select|textarea {prefix}model>',
	//block: true,
	order: 3, // must happen before z-attr-* binds with z-value on radio inputs
	create(scope, el, tag, attr) {
		let inputType = (el.getAttribute('type') || '').toLowerCase();
		this.type = inputType === 'checkbox' ? 'checkbox' :
					tag.name.toLowerCase() === 'select' ? 'select' :
					inputType === 'radio' ? 'radio' :
					['range', 'number'].includes(inputType) ? 'number' :
					['date', 'datetime-local', 'time', 'month', 'week'].includes(inputType) ? 'date' :
					'text';
		if (this.type === 'radio' && !el.getAttribute('name')) {
			el.setAttribute('name', hash(scope.$id + JSON.stringify(attr.ast))); // group radios by their model and scope
		}
		this.getValue = option => option.hasOwnProperty('val') ? option.val : option.getAttribute('value');
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
				evaluate({ // evaluate "<expression> = <value>"
					type: 'AssignmentExpression',
					operator: '=',
					left: attr.ast,
					right: { type: 'Literal', value }
				}, scope);
				scope.$();
			}
		};
		el.addEventListener('input', this.handler);
		el.addEventListener('change', this.handler);
		if (this.type === 'select') {
			el.selectedIndex = -1; // select empty value
		}
	},
	update(scope, el, tag, attr) { // update dom
		let value = attr.value();
		if (value !== this.value) {
			if (this.type === 'checkbox') {
				el.checked = !!value;
			} else if (this.type === 'select') {
				el.selectedIndex = Array.from(el.options).findIndex(option => {
					return JSON.stringify(this.getValue(option)) === JSON.stringify(value); // TODO: don't use stringify
				});
			} else if (this.type === 'radio') {
				el.checked = JSON.stringify(value) === JSON.stringify(this.getValue(el));
			} else if (this.type === 'number') {
				el.value = Number(value);
			} else if (this.type === 'date') {
				el.valueAsDate = new Date(value.getTime()); // proxied date's will not work
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
