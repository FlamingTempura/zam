/*
`z-attr-*` - Attribute value
@ORDER 5

Sets the value of an element's attribute. As a shorthand, `attr-` may be
omitted for standard HTML attributes, like `disabled`, `src`, and `alt`.

@CODE
<img z-attr-src="pic">
<img z-src="pic"><!-- you can omit 'attr-' for standard HTML attributes -->
<input z-disabled="!showMe"></input>
<button z-disabled="showMe"></button>
<script>
	const view = zam(document.body);
	view.showMe = false;
	view.pic = 'photo.png';
</script>
@RESULT
*/
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
	attribute: `{prefix}(?:attr-(.+)|(${standardAttributes.join('|')}))`,
	update(scope, el, val, attr, attribute, stdattribute) {
		attribute = attribute || stdattribute;
		let value = val();
		if (value !== this.value) {
			this.value = value;
			if (booleanAttributes.includes(attribute)) {
				value = value ? attribute : undefined;
			}
			if (value === undefined) {
				el.removeAttribute(attribute);
			} else {
				el.setAttribute(attribute, value);
			}
		}
	}
};