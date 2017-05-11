/* jshint node: true, esversion: 6 */
'use strict';

var toArray = function (nonarray) {
	return Array.prototype.slice.call(nonarray);
};

var stringify = function (value) {
	return String(value !== null && typeof value !== 'undefined' ? value : '');
};

var arrayRemove = function (array, element) {
	if (!array) { return; }
	var i = array.indexOf(element);
	if (i > -1) { array.splice(i, 1); }
};

export { toArray, stringify, arrayRemove };