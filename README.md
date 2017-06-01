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
```
