/*
`z-attr-*` - Attribute value

```html
<button z-attr-disabled="showMe"></button>
<script>
    var view = zam(document.body);
    view.showMe = false;
</script>
```

_Shorthand:_ `attr-` may be omitted for standard HTML attributes, such as such as `disabled`, `title`, and `src`:
```html
<button z-disabled="showMe"></button>
```
*/

/* jshint node: true, browser: true, esversion: 6, unused: true */
'use strict';

const standardAttributes = [
	'accept', 'accept-charset', 'accesskey', 'action', 'align', 'alt',
	'async', 'autocomplete', 'autofocus', 'autoplay', 'autosave',
	'buffered', 'challenge', 'charset', 'checked', 'cite', 'class',
	'code', 'codebase', 'cols', 'colspan', 'content', 'contenteditable',
	'contextmenu', 'controls', 'coords', 'crossorigin', 'data', 'data-*',
	'datetime', 'default', 'defer', 'dir', 'dirname', 'disabled', 'download',
	'draggable', 'dropzone', 'enctype', 'for', 'form', 'formaction', 'headers',
	'hidden', 'high', 'href', 'hreflang', 'http-equiv', 'icon', 'id',
	'integrity', 'ismap' ,'itemprop', 'keytype', 'kind', 'label', 'lang',
	'language', 'list', 'loop', 'low', 'manifest', 'max', 'maxlength',
	'minlength', 'media', 'method', 'min', 'multiple', 'muted', 'name',
	'novalidate', 'open', 'optimum', 'pattern', 'ping', 'placeholder', 'poster',
	'preload', 'radiogroup', 'readonly', 'rel', 'required', 'reversed', 'rows',
	'rowspan', 'sandbox', 'scope', 'scoped', 'seamless', 'selected', 'shape',
	'size', 'sizes', 'slot', 'span', 'spellcheck', 'src', 'srcdoc', 'srclang',
	'srcset', 'start', 'step', 'style', 'summary', 'tabindex', 'target', 'title',
	'type', 'usemap', 'value', 'wrap'];

const booleanAttributes = [
	'selected', 'checked', 'disabled', 'readonly', 'multiple', 'ismap', 'defer', 
	'noresize'];

export default {
	attribute: '{prefix}(?:attr-(.+)|(' + standardAttributes.join('|') + '))',
	update(scope, el, attr, attribute, stdattribute) {
		attribute = attribute || stdattribute;
		let value = this.eval();
		if (value !== this.prevValue) {
			this.prevValue = value;
			if (booleanAttributes.indexOf(attribute) > -1) {
				value = value ? attribute : undefined;
			}
			if (typeof value === 'undefined') {
				el.removeAttribute(attribute);
			} else {
				el.setAttribute(attribute, value);
			}
		}
	}
};