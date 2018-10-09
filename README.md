# Zam.js - Lightweight DOM data binding

[![Build Status](https://travis-ci.org/FlamingTempura/zam.svg?branch=master)](https://travis-ci.org/FlamingTempura/zam)

Zam is a fast and minimal library for rendering DOM views and automatically keeping them up-to-date. Zam focuses only on the view, and does not require any particular data structures to be used. It is designed to be easy to use, yet powerful enough to handle large-scale web pages. [Try it out on JSFiddle](https://jsfiddle.net/1ta0eada/).

```html
<html>
<body>
	<div z-todo-in="todos" z-show="!todo.done">
		{{ todo.message }}
		<button z-click="todo.done = true">Done</button>
	</div>
	<input type="text" z-model="newTodo.message">
	<button z-click="create()">Create</button>
	<script src="zam.js"></script>
	<script>
		const view = zam(document.body);
		view.todos = [];
		view.newTodo = {};
		view.create = () => {
			view.todos.push(view.newTodo);
			view.newTodo = {};
		};
	</script>
</body>
</html>
```

Zam uses [Proxy objects](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy) to observe changes in the data. This means that Zam knows when to update the view after data has changed, so it is not necessary to manually render the view. Each of the below statements will cause the view to be updated (to ensure efficiency, the view will actually only update once, following the last statement).

```js
const view = zam(document.body);
view.a = 1;
view.a = 2;
view.b = {};
view.b.c = 2; // view will be updated
```

Zam works in all modern browsers, including Chrome, Firefox, Edge, and Safari. Older browsers, including Internet Explorer, are not supported because they do not implement Proxy objects.

## Installation

Via CDN:
```html
<script src="https://unpkg.com/zam"></script>
```

Or, install with bower:
```bash
bower install zam
```

Or, using npm:

```bash
npm install zam
```

## Views

A view binds data to a DOM element.

### `zam(el[, data])` - Create a view

* `el` is the element to create the view from. It can be an HTMLElement, jQuery object, or selector.
* `data` is the initial data to use within the view (defaults to `{}`). This must be an object.

```js
const view1 = zam(document.body); // the document can be a view
const view2 = zam(document.getElementById('memo')); // an element can be a view
const view3 = zam($('.navbar')); // a view can be made from a jquery selection
const view4 = zam('#todolist'); // a view can be a selector query
const todoList = { todos: ['thing', 'another thing'] };
const view5 = zam('#todolist', todoList); // optionally, provide a data object
```

## Directives

Directives are specific instructions on how to display the view

[//]: # (DOC1)

### `z-cloak` - Hide content until zam has initiated

Prevents template tags from being visible before zam has initiated. A css rule
for `[z-clock]` should be added to set `display: none`.

```html
<style>
	[z-cloak] { display: none; }
</style>
Hello. <div z-cloak>this div will not be visible until zam has initiated {{ me.name }}</div>
<script>
	const view = zam(document.body);
	view.me = { name: 'Bob' };
</script>
```

Result:

```html

```

### `z-text` and `z-html` - Set text or HTML content

Sets the text or HTML content of the specified element. Text and HTML can also
be set using template tags (`{{ blah }}`). When setting HTML, it will not be
checked for directives, and be aware of the risks of
[XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) when using user-
entered content.

```html
My name is <div>{{ me.name }}</div>
My name is <div z-text="me.name"></div><!-- equivalent to above -->
Some HTML: <span>{{{ boldName }}}</span>
Some HTML: <span z-html="boldName"></span>
Together: <span>{{ me.name }}, {{{ boldName }}}</span>
<script>
	const view = zam(document.body);
	view.me = { name: 'Bob' };
	view.boldName = '<em>Bob</em>';
</script>
```

Result:

```html

```

### `z-show` - Conditional visibility

Displays the element only if the result of the expression is
[truthy](https://developer.mozilla.org/en/docs/Glossary/Truthy) (e.g. true,
1). Equivalent to `z-attr-display="thing ? '' : 'none'"`.

```html
<div z-show="showMe">My name is {{ me.name }}</div>
<button z-on-click="hide()">Hide</button>
<script>
	const view = zam(document.body);
	view.me = { name: 'Bob' };
	view.showMe = true;
	view.hide = () => {
		view.showMe = false;
	};
</script>
```

Result:

```html

```

### `z-exist` - Conditional existence

Renders the element only if the result of the expression is
[truthy](https://developer.mozilla.org/en/docs/Glossary/Truthy) (e.g. true,
1). Unlike z-show, the directives inside the element will not be updated while
the element is hidden (since the element is in fact destroyed when falsey and
recreated when truthy). This directive occurs after `z-in` and before anything
else.

Note: this is equivalent to `ng-if` in angular.

```html
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
```

Result:

```html

```

### `z-*-in` - Iterate through an array

Renders the element for each item in an array or object. Each value in the
array/object is assigned to a variable name specified in the attribute name
(see example below). 

```html
<div z-memo-in="memos">{{ $index }}: {{ memo }}</div><!-- $index is the index number of the element in the array -->
<em z-todo-in="todos">{{ todo.message }}</em>
<p z-item-in="basket" z-key="item.id">{{ item.name }}</p><!-- use `z-key` to specify a key for identifying each item in the array -->
<ul>
	<li z-info-in="apple">{{ $index }}: {{ info }}</li><!-- $index is the property name of the object -->
</ul>
<script>
	const view = zam(document.body);
	view.memos = ['food', 'code', 'clothes'];
	view.todos = [
		{ message: 'Buy food' },
		{ message: 'Fix code' },
		{ message: 'Wash clothes' }
	];
	view.basket = [
		{ id: 1, name: 'Chair' },
		{ id: 2, name: 'Table' },
		{ id: 2, name: 'Table' } // this won't show because the item above has the same id
	];
	view.apple = { type: 'granny smith', color: 'green' };
</script>
```

Result:

```html

```

If `z-key` is not specified, `JSON.stringify` is used.

Note: This directive occurs before anything else.

### `z-attr-*` - Attribute value

Sets the value of an element's attribute. As a shorthand, `attr-` may be
omitted for standard HTML attributes, like `disabled`, `src`, and `alt`.

```html
<img z-attr-src="pic">
<img z-src="pic"><!-- you can omit 'attr-' for standard HTML attributes -->
<input z-disabled="!showMe"></input>
<button z-disabled="showMe"></button>
<script>
	const view = zam(document.body);
	view.showMe = false;
	view.pic = 'photo.png';
</script>
```

Result:

```html

```

### `z-class-*` - Conditional class name

Adds the specified classname only if the result of the expression is
[truthy](https://developer.mozilla.org/en/docs/Glossary/Truthy) (e.g. true,
1).

```html
<h4 z-class-red="warning" z-class-green="!warning"></h4>
<script>
	const view = zam(document.body);
	view.warning = true;
</script>
```

Result:

```html

```

### `z-style-*` - Style value

Sets the value of the specified CSS property of the element. As a shorthand,
`style-` may be omitted for standard CSS properties, such as `border`, `top`,
and `width`.

```html
<h1 z-style-font-weight="big ? 'bold' : 'normal'"></h1>
<em z-font-weight="big ? 'bold' : 'normal'"></em><!-- equivalent to above -->
<p z-color="color" z-font-size="fontsize + 'pt'"></p> 
<script>
	const view = zam(document.body);
	view.big = true;
	view.color = 'red';
	view.fontsize = 12
</script>
```

Result:

```html

```

### `z-model` - Bind input

Creates a two way binding with input element value. The input value will be
set to the value of z-model. When the input value is changed by the user, the
data will also change, and the view will be kept up to date.

```html
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
```

Result:

```html

```

### `z-on-*` - Event handler

Executes an expression when the specified event happens. Event data is
available in `$event`. As a shorthand, `on-` may be omitted for standard DOM
events, such as `click`, `mousemove`, and `mousedown`.

```html
<input type="button" z-on-click="doSomething($event)">
<input type="button" z-click="doSomething($event)"><!-- equivalent to above -->
<script>
	const view = zam(document.body);
	view.doSomething = e => {
		console.log('click!', e.clientX, e.clientY);
	}
</script>
```

Result:

```html

```

### `z-skip` - Skip compilation of this element

Stops Zam from parsing content within the element.

```html
<div z-skip>
	{{ this will appear as it is (including curly braces) }}
	<div z-font-size="'12pt'">Directives will not be parsed</div>
</div>
<script>
	zam(document.body);
</script>
```

Result:

```html

```

### `z-isolate` - Create an isolate scope

Creates a new scope for the DOM element and its children.

```html
{{ name }}
<input ng-model="name">
<div z-isolate>
	{{ name }}
	<input ng-model="name">
</div>
<script>
	const view = zam(document.body);
	view.name = 'Bob';
</script>
```

Result:

```html

```

### `z-inherit` - Set where template should inherit specified contents

For use in directives, this allows the original content of an element to be
placed within a templated directive.

```html
<person id="d">Name: <strong>{{ name }}</strong></person>
<script>
	zam.directive({
		query: '<person>',
		template: '<p z-inherit></p>'
	});
	const view = zam(document.body);
	view.name = 'Bob';
</script>
```

Result:

```html

```

### `z-value` - Set the value of options

For `<input>` tags, or `<option>` tags within `<select>`.

```html
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
```

Result:

```html

```