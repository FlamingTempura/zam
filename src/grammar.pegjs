/* Grammar to parse javascript-like expressions for zam */
{
  var buildTree = function (type, head, tail) {
    if (tail.length === 0) {
      return head;
    } else {
      return tail.reduce(function (head, tail) {
        return {
          type: type,
          operator: tail.operator,
          left: head,
          right: tail.arg
        };
      }, head);
    }
  }
}

/*
Text
  = expression:InlineExpression tail:Text
      { return [expression].concat(tail); }
  / head:.* expression:InlineExpression tail:Text
      { return (head.length > 0 ? [head.join('')] : []).concat([expression], tail); }
  / text:.*
      { return text.length > 0 ? [text.join('')] : []; }
*/

Text
  = parts:TextCharacter*
    { return parts.reduce((m, p) => {
        if (typeof p === 'string' && typeof m[m.length - 1] === 'string') {
          m[m.length - 1] += p;
        } else {
          m.push(p);
        }
        return m;
      }, []); }

TextCharacter
  = expression:InlineExpression
      { return expression; }
  / char:.
      { return char; }

InlineExpression
  = '{{{' _ expression:Expression _ '}}}' { return { html: true, expression: expression }; }
  / '{{' _ expression:Expression _ '}}' { return { html: false, expression: expression }; }

Expression
  = left:LeftHandSideExpression _
    operator:("=" / "*=" / "/=" / "%=" / "+=" / "-=") _
    right:Expression
    { return { type: "AssignmentExpression", operator: operator, left: left, right: right }; }
  / ConditionalExpression

LeftHandSideExpression
  = CallExpression
  / MemberExpression

ConditionalExpression
  = test:LogicalORExpression _ "?" _ consequent:ConditionalExpression _ ":" _ alternate:ConditionalExpression
    { return { type: "ConditionalExpression", test: test, consequent: consequent, alternate: alternate }; }
  / LogicalORExpression

LogicalORExpression
  = head:LogicalANDExpression
    tail:( _ "||" _ arg:LogicalANDExpression { return { operator: '||', arg: arg }; })*
    { return buildTree('LogicalExpression', head, tail); }

LogicalANDExpression
  = head:EqualityExpression
    tail:( _ "&&" _ arg:EqualityExpression { return { operator: '&&', arg: arg }; })*
    { return buildTree('LogicalExpression', head, tail); }

EqualityExpression
  = head:RelationalExpression
    tail:( _ operator:("===" / "!==" / "==" / "!=") _ arg:RelationalExpression { return { operator: operator, arg: arg }; } )*
    { return buildTree('BinaryExpression', head, tail); }

RelationalExpression
  = head:AdditiveExpression
    tail:( _ operator:("<=" / ">=" / "<" / ">") _ arg:AdditiveExpression { return { operator: operator, arg: arg }; } )*
    { return buildTree('BinaryExpression', head, tail); }

AdditiveExpression
  = head:MultiplicativeExpression
    tail:( _ operator:[+-] _ arg:MultiplicativeExpression { return { operator: operator, arg: arg }; } )*
    { return buildTree('BinaryExpression', head, tail); }

MultiplicativeExpression
  = head:UnaryExpression
    tail:( _ operator:[*/%] _ arg:UnaryExpression { return { operator: operator, arg: arg }; } )*
    { return buildTree('BinaryExpression', head, tail); }

UnaryExpression
  = PostfixExpression
  / operator:("++" / "--" / [+!-]) _ argument:UnaryExpression {
      var type = (operator === "++" || operator === "--") ? "UpdateExpression" : "UnaryExpression";
      return { type: type, operator: operator, argument: argument, prefix: true };
    }

PostfixExpression
  = argument:LeftHandSideExpression _ operator:("++" / "--")
    { return { type: "UpdateExpression", operator: operator, argument: argument, prefix: false }; }
  / LeftHandSideExpression

CallExpression
  = head:(
      callee:MemberExpression _ args:Arguments
      { return { type: "CallExpression", callee: callee, arguments: args }; }
    )
    tail:MembershipExpression
    {
      return tail.reduce(function (result, property) {
        return { type: "MemberExpression", property: property, object: result };
      }, head);
    }
    
MemberExpression
  = head:(
      NewExpression / Identifier / Literal / ArrayLiteral / ObjectLiteral / "(" _ expression:Expression _ ")" { return expression; }
    )
    tail:MembershipExpression
    {
      return tail.reduce(function(result, property) {
        return { type: "MemberExpression", object: result, property: property };
      }, head);
    }

MembershipExpression
  = members:(
        _ "[" _ property:Expression _ "]"
        { return property; }
      / _ "." _ property:Identifier 
        { return { type: 'Identifier', name: property.name }; }
    )*

NewExpression
  = "new" __ callee:MemberExpression args:(_ args:Arguments { return args; })? {
      return { type: "NewExpression", callee: callee, arguments: args || [] };
    }

Arguments
  = "(" _ ")"
    { return []; }
  / "(" _ 
    head:Expression
    tail:(_ "," _ arg: Expression { return arg; })* _ 
    ")" 
    { return [head].concat(tail); }

Identifier "identifier"
  = !KeywordLiteral head:([a-z$_]i) tail:[a-z$_0-9]i* 
    { return { type: "Identifier", name: head + tail.join("") }; }
    
ArrayLiteral
  = "[" _ "]"
    { return { type: "ArrayExpression", elements: [] }; }
  / "[" _ elements:ElementList _ "]"
    { return { type: "ArrayExpression", elements: elements }; }

ElementList
  = head:Expression
    tail:(_ "," _ element:Expression { return element; })*
    { return [head].concat(tail); }

ObjectLiteral
  = "{" _ "}"
    { return { type: "ObjectExpression", properties: [] }; }
  / "{" _ properties:PropertyNameAndValueList _ ("," _)? "}"
    { return { type: "ObjectExpression", properties: properties }; }

PropertyNameAndValueList
  = head:PropertyAssignment
    tail:(_ "," _ pa:PropertyAssignment { return pa; })*
    { return [head].concat(tail); }

PropertyAssignment
  = key:(Identifier / StringLiteral / NumericLiteral) _ ":" _ value:Expression
    { return { type: "Property", key: key, value: value }; }

Literal
  = KeywordLiteral
  / NumericLiteral
  / StringLiteral

KeywordLiteral
  = "null"  { return { type: "Literal", value: null  }; }
  / "true"  { return { type: "Literal", value: true  }; }
  / "false" { return { type: "Literal", value: false }; }

NumericLiteral "number"
  = DecimalIntegerLiteral "." [0-9]* ExponentPart? 
    { return { type: "Literal", value: parseFloat(text()) }; }
  / "." [0-9]+ ExponentPart?
    { return { type: "Literal", value: parseFloat(text()) }; }
  / DecimalIntegerLiteral ExponentPart?
    { return { type: "Literal", value: parseFloat(text()) }; }

DecimalIntegerLiteral
  = "0"
  / [1-9] [0-9]*

ExponentPart
  = "e"i [+-]? [0-9]+

StringLiteral "string"
  = '"' chars:( ( '\\"' { return '"'; } ) / [^"] )* '"'
    { return { type: "Literal", value: chars.join("") }; }
  / "'" chars:( ( "\\'" { return "'"; } ) / [^''] )* "'"
    { return { type: "Literal", value: chars.join("") }; }

_
  = __?

__
  = [\t ]+ 