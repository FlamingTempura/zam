/*
`z-value` - Set the value of options
@ORDER 30

For `<input>` tags, or `<option>` tags within `<select>`.

@CODE
<select z-model="selectedCar">
	<option z-value="null">None</option>
	<option z-car-in="cars" z-value="car">{{ car.model }}</option>
</select>
You have selected: {{ selectedCar.make }} {{ selectedCar.model }}
<script>
	const view = zam(document.body);
	view.cars = [{ make: 'Toyota', model: 'Prius' },
	             { make: 'Aston Martin', model: 'DB9' }];
	view.selectedCar = view.cars[1];
</script>
@RESULT
*/

export default {
	query: '<option|input {prefix}value>',
	order: 3,
	update(scope, el, tag, attr) {
		el.val = attr.value();
		el.setAttribute('value', JSON.stringify(el.val));
	}
};
