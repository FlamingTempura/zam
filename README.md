# Tack

Dom binding, view layer only, fast

## Installation

### <script>

### npm

rollup, webpack

## Components

#### `tack(el[, data])` - Create a component

* `el` is the element to create the component from. It can be an HTMLElement, jQuery object, or selector.
* `data` is the initial data to use within the component (defaults to `{}`).

```js
var todoList = tack($('#todolist'), { todos: ['thing', 'another thing'] });
var memo = tack(document.getElementBy('memo'));
var navbar = tack('.navbar');
```

## Directives

#### `ta-text` and `ta-html`	- Set text or HTML content

Note: HTML is not parsed for directives.

```html
<div>My name is {{ me.name }}</div>
<div>My friend's name is <div ta-text="alice.name"></div></div>
<div>Some HTML: {{{ boldName }}}</div>
<div>Even more HTML: <span ta-html="italicName"></span></div>
<script>
var view = tacks(document.body);
view.me = { name: 'Bob' };
view.alice = { name: 'Alice' };
view.boldName = '<strong>Bob</strong>';
view.italicName = '<em>Bob</em>';
view.$();
</script>
```

Warning: Be aware that binding HTML can cause [XSS attacks](https://en.wikipedia.org/wiki/Cross-site_scripting). You should not use user-entered content without sanitisation.


#### `ta-show` - Conditional visibility

Conditionally display the element. Equivelant to `attr-display="thing ? "" : 'none'"`.

```html
<div ta-show="showMe">My name is {{ me.name }}</div>
<button ta-on-click="hide()">Hide</button>
<script>
var view = tacks(document.body);
view.me = { name: 'Bob' };
view.showMe = true;
view.hide = function () {
	view.showMe = false;
};
view.$();
</script>
```

#### `ta-exist` - Conditional existance

Render the element only if the result of the expression is [truthy](https://developer.mozilla.org/en/docs/Glossary/Truthy) (e.g. true, 1). Unlike ta-show, the directives inside the element will not be updated while the element is hidden (since the element is in fact destroyed when falsey and recreated when truthy). This directive occurs after ta-each and before anything else.

Note: this is equivelant to ng-if in angular.

```html
<div ta-exist="showMe">My name is {{ me.name }}</div>
<button ta-on-click="hide()">Hide</button>
<script>
var view = tacks(document.body);
view.me = { name: 'Bob' };
view.showMe = true;
view.hide = function () {
	view.showMe = false;
};
view.$();
</script>
```

#### `ta-each-*` - Iterate through an array

Render the element for each item in an array. Each item is assigned to a variable name specified in the attribute name (see example below). This directive occurs before anything else.

Note: this is roughly equivelant to ng-repeat.

```html
<div ta-each-todo="todos">{{ todo.message }}</div>
<script>
var view = tacks(document.body);
view.todos = [
	{ message: 'Buy food' },
	{ message: 'Fix code' },
	{ message: 'Wash clothes' }
];
view.$();
</script>
```

#### `ta-attr-*` - Attribute value

```html
<button attr-disabled="showMe"></button>
<script>
var view = tacks(document.body);
</script>	
```

#### `ta-class-*` - Conditional class name

```html
<h4 class-red="warning"></h4>
<script>
var view = tacks(document.body);
</script>
```

#### `ta-style-*` - Style value
```html
<h1 style-font-weight="big ? 'bold' : 'normal'"></h1>
<script>
var view = tacks(document.body);
</script>
```

#### `ta-model` - Bind input

Two way binding with element value

```html
<input type="text" model="blah">
<script>
var view = tacks(document.body);
</script>
```

#### `ta-on-*` - Event handler

```html
<input type="button" ta-on-click="doSomething()">
<script>
var view = tacks(document.body);
view.doSomething = function () {
	console.log('click!');
}
</script>
```

#### `ta-skip` - Skip compilation of this element

```html
<div ta-skip>{{ this will appear as it is (including curly braces) }}</div>
```


## Custom directives

```js
tacks.directive.hide = function (el) {
	$(el).toggle(!this.eval());
};

tacks.directive['on-scroll-[xy]'] = {
	create: function () {},
	update: function (el) {}
}
```

* `block`
* `order`
* `create`
* `update`

## Expressions

The expressions used in a directive mostly include the JavaScript language.
```html
{{ 1 + 1 }} <!-- shows 2 -->
{{ a.b() }} <!-- shows the result of b() -->

{{ 1 + 1; "my" + "name" }} <!-- invalid - multiple expressions are not allowed -->
{{ "my" + "name" }} <!-- shows myname -->
{{ Date.now() }} <!-- current unix timestamp -->
{{ JSON.stringify({ a: 1, b: 2 }) }} <!-- shows {a:1,b:2} -->

<div ta-on-mousemove="b().c = d"></div>
<div ta-on-mousemove="thing++"></div>
<div ta-on-click="thing /= 7"></div>
```

## Other things

#### `tack.root`

The root object is provided to all components and can be used to provide methods and data which should be available to all components.

```html
{{ food }}, {{ drink }}, {{ sweet }} <!-- chips, beer, cake -->
<script>
tacks.root.food = 'chips';
tacks.root.drink = 'water';
var view = tacks(document.body);
view.drink = 'beer';
tacks.root.sweet = 'cake';
view.$();
</script>
```

A couple of utility functions are included in root:
* number(number, decimals) (decimals defaults to 2)
* percent(number, decimals) (decimals defaults to 2)

You may wish to define other utility functions in root:

```html
{{ number(1.553, 2) }} <!-- 1.55 -->
{{ percent(0.17) }} <!-- 17.00% -->
{{ date(d, 'DD MMM' }} <!-- 17 Jan -->
<script>
var view = tacks(document.body);
view.d = new Date(2017, 0, 17);
tack.root.date = function (date, format) {
	return moment(format).format(format);
};
view.$();
</script>
```

#### `tack.version`

Gets the version of tacks (e.g. `"0.1.0"`).