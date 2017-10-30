import { stringify } from './utils';
import parser from './grammar.pegjs';
const parse = (expr, startRule = 'Expression') => parser.parse(expr, { startRule }); // generates the abstract ast tree

const evaluate = (ast, scope, checkParentScope = true) => {
	let value, set,
		{ type, operator } = ast;

	if (type === 'Literal') { value = ast.value; } else 

	if (type === 'ArrayExpression') {
		value = ast.elements.map(item => evaluate(item, scope).value);
	} else
	
	if (type === 'ObjectExpression') {
		value = Object.assign({}, ...ast.properties.map(p => ({ [p.key.name || p.key.value]: evaluate(p.value, scope).value })));
	} else

	if (type === 'Identifier') {
		let scope_ = scope;
		while (scope_ && checkParentScope) {
			if (scope_[ast.name] !== undefined) { break; }
			scope_ = scope_.$parent; // is data in parent scopes?
		}
		if (!scope_) { scope_ = scope; } // no? then just use current scope
		value = scope_[ast.name];
		set = val => scope_[ast.name] = val;
	} else 

	if (type === 'MemberExpression') {
		let subject = evaluate(ast.object, scope).value,
			prop = ast.property.type === 'Identifier' ?
				ast.property.name :
				evaluate(ast.property, scope).value;
		value = subject !== undefined ? subject[prop] : undefined;
		set = val => subject[prop] = val;
	} else

	if (type === 'ConditionalExpression') {
		value = evaluate(ast.test, scope).value ?
			evaluate(ast.consequent, scope).value :
			evaluate(ast.alternate, scope).value;
	} else 

	if (type === 'UnaryExpression' || type === 'UpdateExpression') {
		let arg = evaluate(ast.argument, scope),
			argv = arg.value;
		value = operator === '!' ? !argv :
		        operator === '+' ? +argv :
		        operator === '-' ? -argv :
		        operator === '++' ? argv + 1 :
		        operator === '--' ? argv - 1 : null;
		if (type === 'UpdateExpression') {
			set = arg.set;
			if (set) { value = set(value); }
			if (!ast.prefix) { value += operator === '++' ? -1 : 1; }
		}
	} else 

	if (type === 'BinaryExpression' || type === 'LogicalExpression' || type === 'AssignmentExpression') {
		let left  = evaluate(ast.left, scope, type !== 'AssignmentExpression'),
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
		if (type === 'AssignmentExpression') {
			set = left.set;
			value = set(value);
		}
	} else 

	if (type === 'CallExpression' || type === 'NewExpression') {
		let caller = ast.callee.object ? evaluate(ast.callee.object, scope).value : scope,
			callee = evaluate(ast.callee, scope).value,
			args = ast.arguments.map(arg_ => evaluate(arg_, scope).value);
		value = callee ? 
			type === 'CallExpression' ? callee.apply(caller, args) : new (callee.bind.apply(callee, args))() :
			undefined;
	}

	return { value, set };
};

export { parse, evaluate };
