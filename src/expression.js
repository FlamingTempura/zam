'use strict';

import { stringify } from './utils';
import parser from './grammar.pegjs';
const parse = (expr, startRule = 'Expression') => parser.parse(expr, { startRule }); // generates the abstract ast tree

const evaluate = (ast, scope) => {
	let value, set,
		{ type, operator } = ast;

	if (type === 'Literal') { value = ast.value; } else 

	if (type === 'Array') {
		value = ast.elements.map(item => evaluate(item, scope).value);
	} else
	
	if (type === 'Object') {
		value = {};
		ast.properties.forEach(prop => {
			value[prop.key] = evaluate(prop.value, scope).value;
		});
	} else

	if (type === 'Identifier') {
		let scope_ = scope;
		while (scope_) {
			if (typeof scope_[ast.name] !== 'undefined') { break; }
			scope_ = scope_.$parent; // is data in parent scopes?
		}
		if (!scope_) { scope_ = scope; } // no? then just use current scope
		value = scope_[ast.name];
		set = val => {
			scope_[ast.name] = val;
			return val;
		};
	} else 

	if (type === 'Member') {
		let subject = evaluate(ast.object, scope).value,
			prop = evaluate(ast.property, scope).value;
		value = typeof subject !== 'undefined' ? subject[prop] : undefined;
		set = val => {
			subject[prop] = val;
			return val;
		};
	} else

	if (type === 'Conditional') {
		value = evaluate(ast.test, scope).value ?
			evaluate(ast.consequent, scope).value :
			evaluate(ast.alternate, scope).value;
	} else 

	if (type === 'Unary' || type === 'Update') {
		let arg = evaluate(ast.argument, scope),
			argv = arg.value;
		value = operator === '!' ? !argv :
		        operator === '+' ? +argv :
		        operator === '-' ? -argv :
		        operator === '++' ? argv + 1 :
		        operator === '--' ? argv - 1 : null;
		if (type === 'Update') {
			set = arg.set;
			if (set) { value = set(value); }
			if (!ast.prefix) { value += operator === '++' ? -1 : 1; }
		}
	} else 

	if (type === 'Binary' || type === 'Logical' || type === 'Assignment') {
		let left  = evaluate(ast.left, scope),
			leftv = left.value,
			rightv = evaluate(ast.right, scope).value;
		value = operator === '===' ? leftv === rightv :
		        operator === '!==' ? leftv !== rightv :
		        operator === '=='  ? leftv ==  rightv :
		        operator === '!='  ? leftv !=  rightv :
		        operator === '<'   ? leftv <   rightv :
		        operator === '>'   ? leftv >   rightv :
		        operator === '<='  ? leftv <=  rightv :
		        operator === '>='  ? leftv >=  rightv :
		        operator === '&&'  ? leftv &&  rightv :
		        operator === '||'  ? leftv ||  rightv :
		        operator === '+'   ? typeof (leftv + rightv) === 'string' ? stringify(leftv) + stringify(rightv) : leftv + rightv : // avoids undefined + 'a' = 'undefineda'
		        operator === '-'   ? leftv -   rightv :
		        operator === '*'   ? leftv *   rightv :
		        operator === '/'   ? leftv /   rightv :
		        operator === '%'   ? leftv %   rightv :
		        operator === '*='  ? leftv *   rightv :
		        operator === '/='  ? leftv /   rightv :
		        operator === '%='  ? leftv %   rightv :
		        operator === '+='  ? leftv +   rightv :
		        operator === '-='  ? leftv -   rightv : 
		        operator === '='   ? rightv :  null;
		if (type === 'Assignment') {
			set = left.set;
			value = set(value);
		}
	} else 

	if (type === 'Call' || type === 'NewExpression') {
		let caller = ast.callee.object ? evaluate(ast.callee.object, scope).value : scope,
			callee = evaluate(ast.callee, scope).value,
			args = ast.arguments.map(arg_ => evaluate(arg_, scope).value);
		value = callee ? 
			type === 'Call' ? callee.apply(caller, args) : new (callee.bind.apply(callee, args))() :
			undefined;
	}

	return { value, set };
};

export { parse, evaluate };
