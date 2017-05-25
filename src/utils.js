/* jshint node: true, esversion: 6 */
'use strict';

const stringify = value => String(value !== null && typeof value !== 'undefined' ? value : '');

const arrayRemove = (array, element) => {
	const i = array.indexOf(element);
	if (i > -1) { array.splice(i, 1); }
};

// https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
const hash = str => {
	return str.split('').reduce((hash, char) => {
		return ((hash << 5) - hash) + char.charCodeAt(0) | 0;
	}, 0).toString(16);
};

export { stringify, arrayRemove, hash };