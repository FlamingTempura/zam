Dom binding, view layer only, fast

## Installation

### <script>

### npm

rollup, webpack

## Components

```js
var todoList = t$()

## Directives

### ta-text and ta-html	- Set text or HTML content

Note: HTML is not parsed for directives.

```html
<div>My name is {{ me.name }}</div>
<div>My friend's name is <div ta-text="alice.name"></div></div>
<div>Some HTML: {{{ boldName }}}</div>
<div>Even more HTML: <span ta-html="italicName"></span></div>
<script>
var view = tacks(document.body);
view.data.me = { name: 'Bob' };
view.data.alice = { name: 'Alice' };
view.data.boldName = '<strong>Bob</strong>';
view.data.italicName = '<em>Bob</em>';
view.update();
</script>
```

Warning: Be aware that binding HTML can cause [XSS attacks](https://en.wikipedia.org/wiki/Cross-site_scripting). You should not use user-entered content without sanitisation.

### ta-exist - Conditional existance

Render the element only if the result of the expression is [truthy](https://developer.mozilla.org/en/docs/Glossary/Truthy) (e.g. true, 1). Unlike ta-show, the directives inside the element will not be updated while the element is hidden (since the element is in fact destroyed when falsey and recreated when truthy). This directive occurs after ta-each and before anything else.

Note: this is equivelant to ng-if in angular.

```html
<div ta-exist="showMe">My name is {{ me.name }}</div>
<button ta-on-click="hide()">Hide</button>
<script>
var view = tacks(document.body);
view.data.me = { name: 'Bob' };
view.data.showMe = true;
view.data.hide = function () {
	view.data.showMe = false;
};
view.update();
</script>
```

### ta-each-* - Iterate through an array

Render the element for each item in an array. Each item is assigned to a variable name specified in the attribute name (see example below). This directive occurs before anything else.

Note: this is roughly equivelant to ng-repeat.

```html
<div ta-each-todo="todos">{{ todo.message }}</div>
<script>
var view = tacks(document.body);
view.data.todos = [
	{ message: 'Buy food' },
	{ message: 'Fix code' },
	{ message: 'Wash clothes' }
];
view.update();
</script>
```

### ta-show - Conditional visibility

Conditionally display the element. Equivelant to `attr-display="thing ? "" : 'none'"`.

```html
<div ta-show="showMe">My name is {{ me.name }}</div>
<button ta-on-click="hide()">Hide</button>
<script>
var view = tacks(document.body);
view.data.me = { name: 'Bob' };
view.data.showMe = true;
view.data.hide = function () {
	view.data.showMe = false;
};
view.update();
</script>
```

### ta-class-* - Conditional class name

```html
<h4 class-red="warning"></h4>
<script>
var view = tacks(document.body);
</script>
```

### ta-attr-* - Attribute value

```html
<button attr-disabled="showMe"></button>
<script>
var view = tacks(document.body);
</script>	
```

### ta-style-* - Style value
```html
<h1 style-font-weight="big ? 'bold' : 'normal'"></h1>
<script>
var view = tacks(document.body);
</script>
```

### ta-model - Bind input

Two way binding with element value

```html
<input type="text" model="blah">
<script>
var view = tacks(document.body);
</script>
```

### ta-on-* - Event handler

```html
<input type="button" ta-on-click="doSomething()">
<script>
var view = tacks(document.body);
</script>
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


## Build in functions

### number(number, decimals)

### percent(number, decimals)

### date(date, format)


## Expressions

The expression used in a directive 

### turnaries

### boolean



