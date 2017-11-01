const { test } = require('tap');
const moment = require('moment');
const zam = require('../');
const { $, $$, up, steps, trigger } = require('./test-utils');

test('z-model', t => { // Two way binding with element value
	t.plan(10);
	up(`<input id="a" type="text" z-model="blah">
		<input id="b" type="text" z-model="thing.blah">
		<div>such {{ blah }}</div>`);
	let view = zam(document.body);
	view.blah = 'boo';
	view.thing = { blah: 'foo' };
	steps(
		() => {
			t.equal($('#a').value, 'boo');
			t.equal($('#b').value, 'foo');
			t.equal($('div').textContent, 'such boo');
			$('#a').value = 'wow';
			trigger($('#a'), 'input');
		},
		() => {
			t.equal(view.blah, 'wow');
			t.equal($('div').textContent, 'such wow');
			$('#b').value = 'boo';
			trigger($('#b'), 'input');
		},
		() => {
			t.equal(view.thing.blah, 'boo');
			view.blah = 'amaze';
		},
		() => {
			t.equal($('#a').value, 'amaze');
			t.equal($('div').textContent, 'such amaze');
		trigger($('#a'), 'input');
			t.equal($('#a').value, 'amaze');
			t.equal($('div').textContent, 'such amaze');
		}
	);
});

test('input text and textarea', t => {
	t.plan(6);
	up(`<input type="text" z-model="blah">
		<textarea z-model="blah">`);
	let view = zam(document.body);
	steps(
		() => {
			view.blah = 'boo';
		},
		() => {
			t.equal($('input').value, 'boo');
			t.equal($('textarea').value, 'boo');
			$('input').value = 'wow';
			trigger($('input'), 'input');
			t.equal(view.blah, 'wow');
			$('textarea').value = 'foo';
			trigger($('textarea'), 'input');
			t.equal(view.blah, 'foo');
		},
		() => {
			view.blah = 'amaze';
		},
		() => {
			t.equal($('input').value, 'amaze');
			t.equal($('textarea').value, 'amaze');
		}
	);
});

test('input password', t => {
	t.plan(3);
	up(`<input type="password" z-model="blah">`);
	let view = zam(document.body);
	steps(
		() => {
			view.blah = 'boo';
		},
		() => {
			t.equal($('input').value, 'boo');
			$('input').value = 'wow';
			trigger($('input'), 'input');
			t.equal(view.blah, 'wow');
		},
		() => {
			view.blah = 'amaze';
		},
		() => {
			t.equal($('input').value, 'amaze');
		}
	);
});

test('input search', t => {
	t.plan(3);
	up(`<input type="search" z-model="blah">`);
	let view = zam(document.body);
	steps(
		() => {
			view.blah = 'boo';
		},
		() => {
			t.equal($('input').value, 'boo');
			$('input').value = 'wow';
			trigger($('input'), 'input');
			t.equal(view.blah, 'wow');
		},
		() => {
			view.blah = 'amaze';
		},
		() => {
			t.equal($('input').value, 'amaze');
		}
	);
});

test('input hidden', t => {
	t.plan(3);
	up(`<input type="hidden" z-model="blah">`);
	let view = zam(document.body);
	steps(
		() => {
			view.blah = 'boo';
		},
		() => {
			t.equal($('input').value, 'boo');
			$('input').value = 'wow';
			trigger($('input'), 'input');
			t.equal(view.blah, 'wow');
		},
		() => {
			view.blah = 'amaze';
		},
		() => {
			t.equal($('input').value, 'amaze');
		}
	);
});

test('input url', t => {
	t.plan(3);
	up(`<input type="url" z-model="blah">`);
	let view = zam(document.body);
	steps(
		() => {
			view.blah = 'http://foo.bar';
		},
		() => {
			t.equal($('input').value, 'http://foo.bar');
			$('input').value = 'http://foo.bar/wow';
			trigger($('input'), 'input');
			t.equal(view.blah, 'http://foo.bar/wow');
		},
		() => {
			view.blah = 'http://foo.bar/amaze';
		},
		() => {
			t.equal($('input').value, 'http://foo.bar/amaze');
		}
	);
});

test('input email', t => {
	t.plan(3);
	up(`<input type="email" z-model="blah">`);
	let view = zam(document.body);
	steps(
		() => {
			view.blah = 'boo@foo.bar';
		},
		() => {
			t.equal($('input').value, 'boo@foo.bar');
			$('input').value = 'wow@foo.bar';
			trigger($('input'), 'input');
			t.equal(view.blah, 'wow@foo.bar');
		},
		() => {
			view.blah = 'amaze@foo.bar';
		},
		() => {
			t.equal($('input').value, 'amaze@foo.bar');
		}
	);
});

test('input number', t => {
	t.plan(3);
	up(`<input type="number" z-model="blah">`);
	let view = zam(document.body);
	steps(
		() => {
			view.blah = 102;
		},
		() => {
			t.equal($('input').value, '102');
			$('input').value = 87;
			trigger($('input'), 'input');
			t.equal(view.blah, 87);
		},
		() => {
			view.blah = 10;
		},
		() => {
			t.equal($('input').value, '10');
		}
	);
});

test('input range', t => {
	t.plan(3);
	up(`<input type="range" min="0" max="10" step="1" z-model="blah">`);
	let view = zam(document.body);
	steps(
		() => {
			view.blah = 1;
		},
		() => {
			t.equal($('input').value, '1');
			$('input').value = 9;
			trigger($('input'), 'input');
			t.equal(view.blah, 9);
		},
		() => {
			view.blah = 4;
		},
		() => {
			t.equal($('input').value, '4');
		}
	);
});

test('input date/month/week/time', t => {
	t.plan(15);
	up(`<input id="datetime" type="datetime-local" z-model="blah">
		<input id="date" type="date" z-model="blah">
		<input id="month" type="month" z-model="blah">
		<input id="week" type="week" z-model="blah">
		<input id="time" type="time" z-model="blah">`);
	
	let date = moment().toDate();
	let view = zam(document.body);
	view.blah = date;
	steps(
		() => {
			t.equal($('#datetime').value, moment(date).format('YYYY-MM-DD[T]HH:mm:ss.SS'));
			t.equal($('#date').value, moment(date).format('YYYY-MM-DD'));
			t.equal($('#month').value, moment(date).format('YYYY-MM'));
			t.equal($('#week').value, moment(date).format('YYYY-[W]WW'));
			t.equal($('#time').value, moment(date).format('HH:mm:ss.SS'));

			date = moment().subtract(2, 'days').toDate();
			$('#datetime').value = moment(date).format('YYYY-MM-DD[T]HH:mm:ss.SS');
			trigger($('#datetime'), 'input');
			t.equal(moment(view.blah).format('YYYY-MM-DD[T]HH:mm:ss.SS'), moment(date).format('YYYY-MM-DD[T]HH:mm:ss.SS'));

			$('#date').value = moment(date).format('YYYY-MM-DD');
			trigger($('#date'), 'input');
			t.equal(moment(view.blah).format('YYYY-MM-DD'), moment(date).format('YYYY-MM-DD'));

			$('#month').value = moment(date).format('YYYY-MM');
			trigger($('#month'), 'input');
			t.equal(moment(view.blah).format('YYYY-MM'), moment(date).format('YYYY-MM'));

			$('#week').value = moment(date).format('YYYY-[W]WW');
			trigger($('#week'), 'input');
			t.equal(moment(view.blah).format('YYYY-[W]WW'), moment(date).format('YYYY-[W]WW'));

			$('#time').value = moment(date).format('HH:mm:ss.SS');
			trigger($('#time'), 'input');
			t.equal(moment(view.blah).format('HH:mm:ss.SS'), moment(date).format('HH:mm:ss.SS'));
		},
		() => {
			date = moment().subtract(1, 'minute').toDate();
			view.blah = date;
		},
		() => {
			t.equal($('#datetime').value, moment(date).format('YYYY-MM-DD[T]HH:mm:ss.SS'));
			t.equal($('#date').value, moment(date).format('YYYY-MM-DD'));
			t.equal($('#month').value, moment(date).format('YYYY-MM'));
			t.equal($('#week').value, moment(date).format('YYYY-[W]WW'));
			t.equal($('#time').value, moment(date).format('HH:mm:ss.SS'));
		}
	);
});

test('input checkbox', t => {
	t.plan(4);
	up(`<input type="checkbox" z-model="blah">`);
	let view = zam(document.body);
	steps(
		() => {
			view.blah = true;
		},
		() => {
			t.equal($('input').checked, true);
			$('input').checked = false;
			trigger($('input'), 'change');
			t.equal(view.blah, false);
			$('input').checked = true;
			trigger($('input'), 'change');
			t.equal(view.blah, true);
		},
		() => {
			view.blah = false;
		},
		() => {
			t.equal($('input').checked, false);
		}
	);
});

test('input select', t => {
	t.plan(24);
	up(`<select z-model="blah">
			<option value="hello">test1</option>
			<option value="1">test2</option>
			<option z-value="'boo'">test3</option>
			<option z-value="2">test4</option>
			<option z-value="foo">test5</option>
			<option z-value="a">test6</option>
		</select>`);

	let view = zam(document.body),
		fs = [];
	view.foo = 'bar';
	view.a = { boo: {q:1} };
	['hello', '1', 'boo', 2, 'bar', view.a].forEach((val, i) => {
		fs.push(() => {
			view.blah = val;
		}, () => {
			t.equal($('select').selectedIndex, i);
			t.equal($('select').value, i < 2 ? String(val) : JSON.stringify(val));
		});
	});
	['hello', '1', 'boo', 2, 'bar', view.a].forEach((val, i) => {
		fs.push(() => {
			$('select').selectedIndex = i;
			trigger($('select'), 'change');
			if (i < 2) {
				t.equal($('select').value, String(val));
			} else {
				t.equal($('select').value, JSON.stringify(val));
			}
			if (typeof val === 'string') {
				t.equal(view.blah, val);
			} else {
				t.same(view.blah, val);
			}
		});
	});
	steps(...fs);
});

test('input select (array of options)', t => {
	t.plan(5);
	up(`<select z-model="myjob">
			<option value="none">No job</option>
			<option z-job-in="jobs" z-value="job">{{ job.name }}</option>
		</select>`);

	let view = zam(document.body);
	view.jobs = [
		{ id: 1, name: 'farmer' },
		{ id: 2, name: 'programmer' },
		{ id: 3, name: 'cook' }
	];
	steps(
		() => {
			t.equal($$('option').length, 4);
			$('select').selectedIndex = 0;
			trigger($('select'), 'change');
			t.equal(view.myjob, 'none');
			$('select').selectedIndex = 1;
			trigger($('select'), 'change');
			t.same(view.myjob, view.jobs[0]);
			$('select').selectedIndex = 2;
			trigger($('select'), 'change');
			t.same(view.myjob, view.jobs[1]);
			$('select').selectedIndex = 3;
			trigger($('select'), 'change');
			t.same(view.myjob, view.jobs[2]);
		}
	);
});

test('input radio', t => {
	t.plan(30);
	up(`<div class="a">
			<input type="radio" z-model="blah" value="hello">
			<input type="radio" z-model="blah" value="1">
			<input type="radio" z-model="blah" z-value="'boo'">
			<input type="radio" z-model="blah" z-value="2">
			<input type="radio" z-model="blah" z-value="a">
			<input type="radio" z-model="blah" z-value="foo">
		</div>
		<div class="b">
			<input type="radio" z-model="moo" value="x">
			<input type="radio" z-model="moo" value="y">
		</div>`);

	let view = zam(document.body),
		fs = [];
	view.foo = 'bar';
	view.moo = 'y';
	view.a = { a: 1 };
	['hello', '1', 'boo', 2, view.a, 'bar'].forEach((val, i) => {

		fs.push(() => {
			view.blah = val;
		}, () => {
			t.equal($('.a input:checked').value, i < 2 ? String(val) : JSON.stringify(val));
			t.equal($('.b input:checked').value, 'y');
		});
	});
	['hello', '1', 'boo', 2, view.a, 'bar'].forEach((val, i) => {
		fs.push(() => {
			$(`.a input:nth-child(${i + 1})`).checked = true;
			trigger($(`.a input:nth-child(${i + 1})`), 'change');
			if (i < 2) {
				t.equal($('.a input:checked').value, String(val));
			} else {
				t.equal($('.a input:checked').value, JSON.stringify(val));
			}
			t.equal($('.b input:checked').value, 'y');
			if (typeof val === 'string') {
				t.equal(view.blah, val);
			} else {
				t.same(view.blah, val);
			}
		});
	});
	steps(...fs);
});

test('z-model destruction', t => {
	t.plan(4);
	up(`<input type="button" z-model="i">`);
	let view = zam(document.body);
	view.i = 'a';
	steps(
		() => {
			trigger($('input'), 'input');
			t.equal($('input').value, 'a');
			$('input').value = 'b';
			trigger($('input'), 'input');
			t.equal(view.i, 'b');
			view.$destroy();
			view.i = 'c';
		},
		() => {
			t.equal($('input').value, 'b');
			$('input').value = 'e';
			trigger($('input'), 'input');
			t.equal(view.i, 'c');
		}
	);
});