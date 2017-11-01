const { test } = require('tap');
const zam = require('../');
const parse = zam.__parse;
const evaluate = zam.__evaluate;

test('Expressions', t => { // The expressions used in a directive mostly include the JavaScript language.
	let assertions = 1;
	global.i = 0;
	let assert = (expr, val) => {
		assertions++;
		let result = evaluate(parse(expr), global);
		if (typeof val === 'object') {
			t.same(result.value, val);
		} else {
			t.equal(result.value, val);
		}
	};

	let syntax = parse('blah', 'Text');
	t.same(syntax, ['blah']);

	// Arithmatic
	assert('1', 1);
	assert('1.11', 1.11);
	assert('9', 9);
    assert('-9', -9);
	assert('1+2.1', 1 + 2.1);
	assert('1 +    2', 1 + 2);
	assert('1 + 2 + 3', 1 + 2 + 3);
	assert('1 + +2',  1 + 2);
	assert('1 + -2', 1 + -2);
	assert('1 - 2', 1 - 2);
	assert('1 - 2 - 3', 1 - 2 - 3);
	assert('10 % 2', 10 % 2);
    assert('9 + 3 + 6', 9 + 3 + 6);
    assert('9 + 3 / 11', 9 + 3 / 11);
    assert('(9 + 3)', 9 + 3);
    assert('(9+3) / 11', (9 + 3) / 11);
    assert('9 - 12 - 6', 9 - 12 - 6);
    assert('9 - (12 - 6)', 9 - (12 - 6));
    assert('Math.round(9.9)', 10);
	assert('-Math.E', -Math.E);
    assert('2*3.14159', 2*3.14159);
	assert('3.1415926535*3.1415926535 / 10', 3.1415926535 * 3.1415926535 / 10);
	assert('Math.PI * Math.PI / 10', Math.PI * Math.PI / 10);
	assert('Math.PI*Math.PI/10', Math.PI*Math.PI/10);
	assert('Math.pow(Math.PI, 2)', Math.pow(Math.PI, 2));
	assert('Math.round(Math.pow(Math.PI,2))', Math.round(Math.pow(Math.PI, 2)));
	assert('6.02E23 * 8.048', 6.02E23 * 8.048);
	assert('Math.E / 3', Math.E / 3);
	assert('Math.sin(Math.PI/2)', Math.sin(Math.PI/2));
	assert('Number("10")', Number('10'));
	assert('Number("-10")', Number('-10'));
	assert('+"9"', 9);
	assert('Math.round(Math.E)', Math.round(Math.E));
	assert('Math.round(-Math.E)', Math.round(-Math.E));
	assert('Math.pow(Math.E, Math.PI)', Math.pow(Math.E, Math.PI));
	assert('Math.pow(Math.pow(2, 3), 2)', Math.pow(Math.pow(2, 3), 2));
	assert('Math.pow(2, 3)+(2)', Math.pow(2, 3)+2);
	assert('Math.pow(2,(9))', Math.pow(2, 9));
	assert('i++', 0);
	assert('++i', 2);
	assert('i--', 2);
	assert('--i', 0);

	// String
	assert('String(10)', '10');
	assert('"a"', 'a');
	assert('\'a\'', 'a');
	assert('"a" + \'b\'', 'ab');
	assert('"\\""', '"');
	assert('\'\\\'\'', '\'');
	assert('"a" + 1', 'a1');
	assert('"a" + undefined', 'a');

	// Array literals
	assert('[]', []);
	assert('[1, "a"]', [1, 'a']);
	assert('[[2]]', [[2]]);
	assert('[[2]][0][0]', 2);
	assert('([1 ])', [1]);
	assert('[1, [[2]], 1]', [1, [[2]], 1]);

	// Object literals
	assert('{}', {});
	assert('{ a: 1 }', { a: 1 });
	assert('{ a: { b: 2 } }', { a: { b: 2 } });
	assert('({ "a": 1 })', { a: 1 });
	assert('{ a:1, b:{ ba: {baa: 2}},c:1}', { a: 1, b: { ba: { baa: 2 } }, c: 1 });
    
	// Other literals
	assert('null', null);
	assert('true', true);
	assert('false', false);

	// Member access
	assert('{ a: 1 }.a', 1);
	assert('({ a: 1 }).a', 1);
	assert('JSON.parse(JSON.stringify({a:"hello"})).a', 'hello');

	// Assignment and update
	assert('thing = 1', 1);
	assert('thing++', 1);
	assert('++thing', 3);
	assert('thing--', 3);
	assert('--thing', 1);
	assert('thing += 1', 2);
	assert('thing -= 1', 1);
	assert('thing += 3', 4);
	assert('thing /= 2', 2);
	assert('thing *= 2', 4);
	assert('thing %= 2', 0);
	assert('thing += "hello"', '0hello');
	assert('thing', '0hello');
	assert('thing2 = {}', {});
	assert('thing2.name = "bob"', 'bob');
	assert('thing2', { name: 'bob' });

	// Binary
	assert('true === true', true);
	assert('true === false', false);
	assert('1 === 1', true);
	assert('1 === 2', false);
	assert('"1" === "1"', true);
	assert('"1" === 2', false);
	assert('"1" !== 2', true);
	assert('!(1 === 2)', true);
	assert('!true', false);
	assert('!false', true);
	assert('!1', false);
	assert('!0', true);
	assert('!!true', true);
	assert('!!false', false);
	assert('!!1', true);
	assert('!!0', false);
	assert('1 == 1', true);
	assert('1 == true', true);
	assert('1 == false', false);
	assert('1 != 1', false);
	assert('1 != true', false);
	assert('1 != false', true);
	assert('1 < 2', true);
	assert('1 < 0', false);
	assert('1 > 0', true);
	assert('1 > 2', false);
	assert('1 <= 1', true);
	assert('1 <= 0', false);
	assert('1 >= 1', true);
	assert('1 >= 2', false);
	assert('true && true', true);
	assert('true && false', false);
	assert('true && 1', 1);
	assert('true && 0', 0);
	assert('false || true', true);
	assert('false || false', false);
	assert('false || 1', 1);
	assert('false || 0', 0);

	// Conditionals
	assert('true ? "a" : "b"', 'a');
	assert('false ? "a" : "b"', 'b');
	assert('1 === 1 ? "a" : "b"', 'a');
	assert('1 !== 2 ? "a" : "b"', 'a');
	assert('true ? "a" : "b"', 'a');

	// Undefined
	assert('something', undefined);
	assert('undefined', undefined);
	assert('a()', undefined);
	assert('a.a()', undefined);
	assert('a().a', undefined);

	// Native methods
	assert('(new Date()).getFullYear()', new Date().getFullYear());
	assert('(new Date).getFullYear()', new Date().getFullYear());
	assert('JSON.stringify({ a: 1, b: 2 })', '{"a":1,"b":2}');

	try {
		assert('a(.a', undefined); // syntax error
	} catch (e) {
		t.equal(e.message.slice(0, 8), 'Expected');
	}

	t.plan(assertions);
});
