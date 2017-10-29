/*
`z-style-*` - Style value
@ORDER 7

Sets the value of the specified CSS property of the element. As a shorthand,
`style-` may be omitted for standard CSS properties, such as `border`, `top`,
and `width`.

@CODE
<h1 z-style-font-weight="big ? 'bold' : 'normal'"></h1>
<em z-font-weight="big ? 'bold' : 'normal'"></em><!-- equivalent to above -->
<p z-color="color" z-font-size="fontsize + 'pt'"></p> 
<script>
	const view = zam(document.body);
	view.big = true;
	view.color = 'red';
	view.fontsize = 12
</script>
@RESULT
*/
const standardStyles = [
	'align-.*', 'all', 'animation', 'animation-.*', 'backface-visibility',
	'background', 'background-.*', 'border', 'border-.*', 'bottom', 'box-.*',
	'break-.*', 'caption-side', 'caret-color', 'clear', 'clip', 'clip-path',
	'color', 'column-.*', 'columns', 'content', 'counter-.*', 'cursor',
	'direction', 'display', 'empty-cells', 'filter', 'flex-.*', 'float', 'font',
	'font-.*', 'grid', 'grid-.*', 'height', 'hyphens', 'image-.*', 'ime-mode',
	'inline-size', 'isolation', 'justify-content', 'left', 'letter-spacing',
	'line-.*', 'list-.*', 'margin', 'margin-.*', 'mask', 'mask-.*', 'max-height',
	'max-width', 'min-block-size', 'min-height', 'min-inline-size', 'min-width',
	'mix-blend-mode', 'object-fit', 'object-position', 'offset-.*', 'opacity',
	'order', 'orphans', 'outline', 'outline-.*', 'overflow', 'overflow-.*',
	'padding', 'padding-.*', 'page-break-.*', 'perspective', 'perspective-origin',
	'pointer-events', 'position', 'quotes', 'resize', 'right', 'scroll-.*',
	'shape-.*', 'tab-size', 'table-layout', 'text-.*', 'top', 'touch-action',
	'transform', 'transform-.*', 'transition', 'transition-.*', 'unicode-bidi',
	'unset', 'vertical-align', 'visibility', 'white-space', 'widows', 'width',
	'will-change', 'word-.*', 'writing-mode', 'z-index'];

export default {
	query: `<.+ {prefix}(style-.+|${standardStyles.join('|')})>`,
	initialize(el, tag, attr) {
		this.property = attr.match[0].replace(/^style-/, '');
	},
	update(scope, el, tag, attr) {
		let value = attr.value();
		if (value !== this.value) {
			el.style[this.property] = this.value = value;
		}
	}
};