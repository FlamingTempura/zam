/*
`z-skip` - Skip compilation of this element

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
</script>
```

*/

/* jshint node: true, browser: true, esversion: 6, unused: true */
'use strict';

export default {
	attribute: '{prefix}skip',
	order: 1,
	block: true
};
