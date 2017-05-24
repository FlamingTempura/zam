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

var hash = function (str) { // https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
	var hash = 0, i, chr;
	if (str.length === 0) return hash;
	for (i = 0; i < str.length; i++) {
		chr   = str.charCodeAt(i);
		hash  = ((hash << 5) - hash) + chr;
		hash |= 0; // Convert to 32bit integer
	}
	return hash.toString(16);
};

export { toArray, stringify, arrayRemove, hash };