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
Hello. <div>this div will not be visible until zam has initiated Bob</div>
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
My name is <div>Bob</div>
My name is <div>Bob</div>
Some HTML: <span><span><em>Bob</em></span></span>
Some HTML: <span><em>Bob</em></span>
Together: <span>Bob, <span><em>Bob</em></span></span>
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
<div>My name is Bob</div>
<button>Hide</button>
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
<div>My name is Bob</div>
<button>Hide</button>
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
<div>0: food</div>
<div>1: code</div>
<div>2: clothes</div>
<em>Buy food</em>
<em>Fix code</em>
<em>Wash clothes</em>
<p>Chair</p>
<p>Table</p>
<ul>
	<li>type: granny smith</li>
	<li>color: green</li>
</ul>
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
<img src="photo.png">
<img src="photo.png">
<input disabled="disabled">
<button></button>
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
<h4 class="red"></h4>
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
<h1 style="font-weight: bold;"></h1>
<em style="font-weight: bold;"></em>
<p style="color: red; font-size: 12pt;"></p>
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
<input type="text">
foo 
<input type="button">
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
<input type="button">
<input type="button">
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
<div>
	{{ this will appear as it is (including curly braces) }}
	<div z-font-size="'12pt'">Directives will not be parsed</div>
</div>
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
Bob
<input ng-model="name">
<div>
	Bob
	<input ng-model="name">
</div>
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
<p id="d">Name: <strong>Bob</strong></p>
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
<select>
	<option value="null">None</option>
	<option value="{&quot;make&quot;:&quot;Toyota&quot;,&quot;model&quot;:&quot;Prius&quot;}">Prius</option>
	<option value="{&quot;make&quot;:&quot;Aston Martin&quot;,&quot;model&quot;:&quot;DB9&quot;}">DB9</option>
</select>
You have selected: Aston Martin DB9
```

[//]: # (DOC1!)

## Scope

Directives have access to their parent scopes through `$parent`:

```html
<div class="foo">
	{{ food }} <!-- chips -->
	{{ drink }} <!-- tea -->
	<div class="bar">
		{{ food }} <!-- chips -->
		{{ drink }} <!-- coffee -->
		{{ $parent.drink }} <!-- tea -->
	</div>
</div>
<script>
	let foo = zam('.foo'),
		bar = zam('.bar');
	foo.food = 'chips';
	foo.drink = 'tea';
	bar.drink = 'coffee';
</script>
```

Result:

```html
<div class="foo">chips  tea 
<div class="bar">chips  coffee  tea </div>
</div>

```

## Custom directives

A directive can be defined to bind DOM elements to certain defined functionality. Each directive should have a query defined to identify elements (by their tag or attribute
names) to apply the directive to, and which attributes to bind. Directives must be defined prior to creating a view.

The following options may be specified:
* `query` - elements with matching this pattern will use this directive. This can contain regular expressions. Results from capture groups will be provided to create, update, and remove methods.
* `template` - HTML to insert to replace the element with.
* `scope` - set to true to create an isolate scope. The parent scope can be accessed via `scope.$parent`.
* `block` - whether to stop further directives in this element and it's children.
* `order` - when to run this directive; lower numbers run first.
* `initialize(el)` - function called when the virtualdom is being created.
* `create(scope, el)` - function called when directive is first bound with a scope.
* `update(scope, el, val)` - function called when directive is updating.
* `destroy(scope, el)` - function called when directive is being destoryed.

```js
zam.directive({
	query: '<memo>' // this will bind to all <memo> elements
});
//<memo></memo> <!-- matches -->
//<memo color="red">Hello</memo> <!-- matches -->
//<mem>Boo</mem> <!-- does not match -->

zam.directive({
	query: '<.+ hide>', // bind all elements with hide attribute
	create(scope, el) {
		el.style.display = 'none'
	},
});
// <div hide></div> <!-- element will be hidden -->

zam.directive({
	query: '<message author>', // bind to all <message> elements with the author attribute 
	create(scope, el, tag, author) {
		el.textContent = author.value(); // set the text of the element to the author
	}
})
//<message></message> <!-- does not match -->
//<message author="Bob">Hello</message> <!-- matches, and will replace "Hello" with "Bob" -->

zam.directive({
	query: '<product name description="Jane">', // define a default value to make an attribute optional
	template: '<div><h1>{{ name }}<p>{{ description }}</p></div>', // the <product> elements will be replaced with this template
	scope: true, // isolate the scope within this directive
	update(scope, el, tag, description) {
		scope.description = description.value(); // set the text of the element to the author
	}
})
// <product name="fancy watch"></product> <!-- matches -->
// <product description="the cheapest phone around" name="phone">Hello</product> <!-- matches - note that attribute order does not matter -->

zam.directive({
	query: '<mem(.*) auth(.*)="Jane" number="1">', // a query may contain regular expressions
	create(scope, el, tag, auth, number) {
		tag.name // "memooo"
		tag.match[0] // "ooo" // capture groups can be accessed in the match array
		auth.name // "authorrrr"
		auth.value() // "bob"
		auth.match[0] // "orrrr"
		number.name // "number"
		number.value() // 1
	}
})
// <memooo authorrrr="'bob'" number="2"></memooo> <!-- matches -->

let view = zam(); // directives must be defined before creating the view
```

## Expressions

The expressions used in a directive mostly include the JavaScript language.
```html
{{ 1 + 1 }} <!-- shows 2 -->
{{ a.b() }} <!-- shows the result of b() -->

{{ 1 + 1; "my" + "name" }} <!-- invalid - multiple expressions are not allowed -->
{{ "my" + "name" }} <!-- shows myname -->
{{ Date.now() }} <!-- current unix timestamp -->
{{ JSON.stringify({ a: 1, b: 2 }) }} <!-- shows {a:1,b:2} -->

<div z-on-mousemove="b().c = d"></div>
<div z-on-mousemove="thing++"></div>
<div z-on-click="thing /= 7"></div>
```

## Events and watchers

```js
const view = zam(document.body);
const oncreate = () => { console.log('hello world!'); }
view.$on('create', oncreate); // listen for creation event (happens when view is created)
view.$off('create', oncreate); // remove event handler
view.$on('update', () => {}); // gets called whenever the view is updated
view.$on('destroy', () => {}); // view destroyed

const change = starsign => { console.log('star sign is', starsign); } 
view.$watch('starsign', change); // watch view.starsign for changes
view.$unwatch('starsign', change); // stop watching view.starsign
view.$watch('thing.a + 1', change); // you can watch any expression for changes
```

## Other things

### `zam.root`

The root object is provided to all views and can be used to provide methods and data which should be available to all views.

```html
{{ food }}, {{ drink }}, {{ sweet }} <!-- chips, beer, cake -->
<script>
	zam.root.food = 'chips';
	zam.root.drink = 'water';
	const view = zam(document.body);
	view.drink = 'beer';
	zam.root.sweet = 'cake';
</script>
```

A couple of utility functions are included in root:
* `number(number, decimals)` (decimals defaults to 2)
* `percent(number, decimals)` (decimals defaults to 2)

You may wish to define other utility functions in root:

```html
{{ number(1.553, 2) }} <!-- 1.55 -->
{{ percent(0.17) }} <!-- 17.00% -->
{{ date(d, 'DD MMM' }} <!-- 17 Jan -->
<script>
	zam.root.date = (date, format) => moment(date).format(format);
	const view = zam(document.body);
	view.d = new Date(2017, 0, 17);
</script>
```

### `zam.prefix` - Directive attribute prefix

Set the prefix (by default `z-`).
```html
<div foo-text="blah"></div>
<script>zam.prefix = 'foo-';</script>
```

### `zam.version` - Version

Gets the version of zam (e.g. `"0.1.0"`).