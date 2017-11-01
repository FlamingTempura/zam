const stringify = val => val === null || val === undefined ? '' : String(val);

const arrayRemove = (array, element) => {
	const i = array ? array.indexOf(element) : -1;
	if (i > -1) { array.splice(i, 1); }
};

// https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
const hash = str => str.split('').reduce((hash, char) => (hash << 5) - hash + char.charCodeAt(0) | 0, 0).toString(16);

const nextTick = cb => {
	let cancelled;
	const fn = () => { if (!cancelled) { cb(); } };
	if (typeof process !== 'undefined') {
		process.nextTick(fn);
	} else {
		const id = String(Math.random());
		const handler = e => {
			if (e.data === id) {
				e.stopPropagation();
				fn();
				window.removeEventListener('message', handler, true);
			}
		};
		window.addEventListener('message', handler, true);
		window.postMessage(id, '*');
	}
	return () => { cancelled = true; };
};

export { stringify, arrayRemove, hash, nextTick };