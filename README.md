# Zam.js - Lightweight DOM data binding

Zam is a fast and minimal library for rendering HTML views and automatically keeping them up-to-date. Zam focuses only on the view, and does not require any particular data structures to be used. It is designed to be easy to use, yet powerful enough to handle large-scale web pages. [Try it out on JSFiddle](https://jsfiddle.net/1ta0eada/).

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
        view.create = function () {
            view.todos.push(view.newTodo);
            view.newTodo = {};
        };
    </script>
</body>
</html>
```

Zam uses [Proxy objects](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy) to observe changes in the data. This means that Zam knows when to update the view; it is not necessary to manually render the view. Each of the below statements will cause the view to be updated (to ensure efficiency, the view will actually only update once, following the last statement).

```js
var view = zam(document.body);
view.a = 1;
view.a = 2;
view.b = {};
view.b.c = 2;
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
var todoList = { todos: ['thing', 'another thing'] };
var view1 = zam('#todolist', todoList);
var view2 = zam($('.navbar'));
var view3 = zam(document.getElementById('memo'));
```

## Directives

Directives are specific instructions on how to display the view

[//]: # (DOC1)

#### `z-text` and `z-html`  - Set text or HTML content


```html
My name is <div>{{ me.name }}</div>
My name is <div z-text="me.name"></div><!-- equivalent to above -->
Some HTML: <span>{{{ boldName }}}</span>
Some HTML: <span z-html="boldName"></span>
<script>
    var view = zam(document.body);
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
```


HTML will not be checked for directives.

Warning: Be aware that binding HTML can cause
[XSS](https://en.wikipedia.org/wiki/Cross-site_scripting). You should not use
user-entered content without sanitisation.

#### `z-show` - Conditional visibility


Conditionally display the element. Equivelant to `z-attr-display="thing ? '' : 'none'"`.

```html
<div z-show="showMe">My name is {{ me.name }}</div>
<button z-on-click="hide()">Hide</button>
<script>
    var view = zam(document.body);
    view.me = { name: 'Bob' };
    view.showMe = true;
    view.hide = function () {
        view.showMe = false;
    };
</script>
```

Result:

```html
<div>My name is Bob</div>
<button>Hide</button>
```


#### `z-exist` - Conditional existance


Render the element only if the result of the expression is
[truthy](https://developer.mozilla.org/en/docs/Glossary/Truthy) (e.g. true,
1). Unlike z-show, the directives inside the element will not be updated while
the element is hidden (since the element is in fact destroyed when falsey and
recreated when truthy). This directive occurs after `z-in` and before anything
else.

Note: this is equivelant to `ng-if` in angular.

```html
<div z-exist="showMe">My name is {{ me.name }}</div>
<div z-exist="!showMe">I'm not here</div>
<button z-click="hide()">Hide</button>
<script>
    var view = zam(document.body);
    view.me = { name: 'Bob' };
    view.showMe = true;
    view.hide = function () {
        view.showMe = false;
    };
</script>
```

Result:

```html
<div>My name is Bob</div>
<button>Hide</button>
```


#### `z-*-in` - Iterate through an array


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
    var view = zam(document.body);
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

#### `z-attr-*` - Attribute value


```html
<img z-attr-src="pic">
<img z-src="pic"><!-- you can omit 'attr-' for standard HTML attributes -->
<input z-disabled="!showMe"></input>
<button z-disabled="showMe"></button>
<script>
    var view = zam(document.body);
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


#### `z-class-*` - Conditional class name


```html
<h4 z-class-red="warning" z-class-green="!warning"></h4>
<script>
    var view = zam(document.body);
    view.warning = true;
</script>
```

Result:

```html
<h4 class="red"></h4>
```


#### `z-style-*` - Style value


```html
<h1 z-style-font-weight="big ? 'bold' : 'normal'"></h1>
<em z-font-weight="big ? 'bold' : 'normal'"></em><!-- `style-` may be omitted for standard CSS properties -->
<p z-color="color" z-font-size="fontsize + 'pt'"></p> 
<script>
    var view = zam(document.body);
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


#### `z-model` - Bind input


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

Result:

```html
<input type="text">
foo 
<input type="button">
```


#### `z-on-*` - Event handler


Execute an expression when an event happens. Event data is available in `$event`.

```html
<input type="button" z-on-click="doSomething($event)">
<script>
    var view = zam(document.body);
    view.doSomething = function (e) {
        console.log('click!', e.clientX, e.clientY);
    }
</script>
```

Result:

```html
<input type="button">
```


_Shorthand:_ `on-` may be omitted for standard DOM events, such as `click`, `mousemove`, and `mousedown`:
```html
<input type="button" z-click="doSomething($event)">
<form z-submit="doSomething($event)"></form>
<script>
    var view = zam(document.body);
    view.doSomething = function (e) {
        console.log('click!', e.clientX, e.clientY);
    }
</script>
```

Result:

```html
<input type="button">
<form></form>
```


#### `z-skip` - Skip compilation of this element


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
    var foo = zam('.foo'),
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

## Events and watchers

```js
var view = zam(document.body);
var oncreate = function () { console.log('hello world!'); }
view.$on('create', oncreate); // listen for creation event (happens when view is created)
view.$off('create', oncreate); // remove event handler
view.$on('update', function () {}); // gets called whenever the view is updated
view.$on('destroy', function () {}); // view destroyed

var change = function (starsign) { console.log('star sign is', starsign); } 
view.$watch('starsign', change); // watch view.starsign for changes
view.$unwatch('starsign', change); // stop watching view.starsign
view.$watch('thing.a + 1', change); // you can watch any expression for changes
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