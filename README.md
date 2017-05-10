# Zam.js - Lightweight DOM data binding.

Zam is a fast and minimal library for rendering HTML views and keeping them up-to-date. Zam focuses only on the view, and does not require any particular data structures to be used. It is designed to be easy to use, yet powerful enough to handle large-scale web pages. [Try it out on JSFiddle](https://jsfiddle.net/1ta0eada/).

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
		var view = zam(document.body);
		view.todos = [];
		view.newTodo = {};
		view.$(); // update the view
		view.create = function () {
			view.todos.push(view.newTodo);
			view.newTodo = {};
		};
	</script>
</body>
</html>
```

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

A view binds data to the page.

#### `zam(el[, data])` - Create a view

* `el` is the element to create the view from. It can be an HTMLElement, jQuery object, or selector.
* `data` is the initial data to use within the view (defaults to `{}`). This must be an object.

```js
var todoList = zam($('#todolist'), { todos: ['thing', 'another thing'] });
var memo = zam(document.getElementBy('memo'));
var navbar = zam('.navbar');
```

#### `view.$()` - Render/update the view

After any changes to the data, call `view.$()` to update the view:

```html
<div class="contact">Name: {{ name }}</div>
<script>
	var view = zam('.contact');
	view.name = 'Joe';
	view.$(); // will update view to Joe
	view.name = 'Jane';
	view.$(); // will update view to Jane
</script>
```

## Directives

Directives are specific instructions on how to display the view.

#### `z-text` and `z-html`	- Set text or HTML content

Note: HTML is not parsed for directives.

```html
<div>My name is {{ me.name }}</div>
<div>My friend's name is <div z-text="alice.name"></div></div>
<div>Some HTML: {{{ boldName }}}</div>
<div>Even more HTML: <span z-html="italicName"></span></div>
<script>
	var view = zam(document.body);
	view.me = { name: 'Bob' };
	view.alice = { name: 'Alice' };
	view.boldName = '<strong>Bob</strong>';
	view.italicName = '<em>Bob</em>';
	view.$();
</script>
```

Warning: Be aware that binding HTML can cause [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting). You should not use user-entered content without sanitisation.


#### `z-show` - Conditional visibility

Conditionally display the element. Equivelant to `z-attr-display="thing ? '' : 'none'"`.

```html
<div z-show="showMe">My name is {{ me.name }}</div>
<button z-on-click="hide()">Hide</button>
<script>
var view = zam(document.body);
view.me = { name: 'Bob' };
view.showMe = true;
view.$();
view.hide = function () {
	view.showMe = false;
};
view.$();
</script>
```

#### `z-exist` - Conditional existance

Render the element only if the result of the expression is [truthy](https://developer.mozilla.org/en/docs/Glossary/Truthy) (e.g. true, 1). Unlike z-show, the directives inside the element will not be updated while the element is hidden (since the element is in fact destroyed when falsey and recreated when truthy). This directive occurs after `z-in` and before anything else.

Note: this is equivelant to ng-if in angular.

```html
<div z-exist="showMe">My name is {{ me.name }}</div>
<button z-on-click="hide()">Hide</button>
<script>
var view = zam(document.body);
view.me = { name: 'Bob' };
view.showMe = true;
view.hide = function () {
	view.showMe = false;
};
view.$();
</script>
```

#### `z-*-in` - Iterate through an array

Render the element for each item in an array. Each item is assigned to a variable name specified in the attribute name (see example below). This directive occurs before anything else.

Note: this is roughly equivelant to ng-repeat.

```html
<div z-todo-in="todos">{{ todo.message }}</div>
<script>
var view = zam(document.body);
view.todos = [
	{ message: 'Buy food' },
	{ message: 'Fix code' },
	{ message: 'Wash clothes' }
];
view.$();
</script>
```

#### `z-attr-*` - Attribute value

```html
<button z-attr-disabled="showMe"></button>
<script>
var view = zam(document.body);
view.showMe = false;
view.$();
</script>
```

_Shorthand:_ `attr-` may be omitted for standard HTML attributes, such as such as `disabled`, `title`, and `src`:
```html
<button z-disabled="showMe"></button>
```

#### `z-class-*` - Conditional class name

```html
<h4 z-class-red="warning"></h4>
<script>
var view = zam(document.body);
view.warning = true;
view.$();
</script>
```

#### `z-style-*` - Style value
```html
<h1 z-style-font-weight="big ? 'bold' : 'normal'"></h1>
<script>
var view = zam(document.body);
view.big = true;
view.$();
</script>
```

_Shorthand:_ `style-` may be omitted for standard CSS properties, such as such as `font-weight`, `top`, and `background`:
```html
<h1 z-font-weight="big ? 'bold' : 'normal'"></h1>
```

#### `z-model` - Bind input

Two way binding with input element value. The input value will be set to the value of z-model. When the input value is changed by the user, the data will also change, and the view will be kept up to date.

```html
<input type="text" z-model="blah">
{{ blah }} <!-- this will always display the value entered in the text input -->
<input type="button" z-click="thing()">
<script>
	var view = zam(document.body);
	view.blah = 'foo';
	view.$(); // will set the value of the input to blah
	view.thing = function () {
		console.log(view.blah); // will print whatever the user entered into the input
	}
</script>
```

#### `z-on-*` - Event handler

Execute an expression when an event happens. Event data is available in `$event`. View will automatically update after the event (so `view.$()` is not necessary in an event handler).

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

#### `z-skip` - Skip compilation of this element

```html
<div z-skip>{{ this will appear as it is (including curly braces) }}</div>
```

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
	var foo = zam('.foo'),
		bar = zam('.bar');
	foo.food = 'chips';
	foo.drink = 'tea';
	bar.drink = 'coffee';
	foo.$();
	bar.$();
</script>
```

## Custom directives

```js
zam.directive({
	attribute: 'hide',
	update: function (el) {
		$(el).toggle(!this.eval());
	}
});

zam.directive({
	attribute: 'on-scroll-([xy])',
	create: function () {},
	update: function (el) {},
	destroy: function (el) {}
});
```
* `attribute` - elements with an attribute matching this pattern will use this directive.. This can contain regular expressions. Results from capture groups will be provided to create, update, and remove methods.
* `tag` - elements with tag names matching this pattern will use this directive.
* `template` - HTML to insert to replace the element with
* `block` - whether to stop further directives in this element and it's children.
* `order` - when to run this directive; lower numbers run first.
* `create` - function called when directive is created.
* `update` - function called when directive is updating.
* `destroy` - function called when directive is destorying.

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

## Other things

#### `zam.root`

The root object is provided to all views and can be used to provide methods and data which should be available to all views.

```html
{{ food }}, {{ drink }}, {{ sweet }} <!-- chips, beer, cake -->
<script>
	zam.root.food = 'chips';
	zam.root.drink = 'water';
	var view = zam(document.body);
	view.drink = 'beer';
	zam.root.sweet = 'cake';
	view.$();
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
	zam.root.date = function (date, format) {
		return moment(format).format(format);
	};
	var view = zam(document.body);
	view.d = new Date(2017, 0, 17);
	view.$();
</script>
```

#### `zam.prefix` - Directive attribute prefix

Set the prefix (by default `z-`).
```html
<div foo-text="blah"></div>
<script>zam.prefix = 'foo-';</script>
```

#### `zam.version` - Version

Gets the version of zam (e.g. `"0.1.0"`).