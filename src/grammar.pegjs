/* Grammar to parse javascript-like expressions for tack */
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

Text
  = head:[^{]* expression:InlineExpression tail:Text
      { return (head.length > 0 ? [head.join('')] : []).concat([expression], tail); }
  / text:.*
      { return text.length > 0 ? [text.join('')] : []; }

InlineExpression
  = '{{{' _ expression:Expression _ '}}}' { return { html: true, expression: expression }; }
  / '{{' _ expression:Expression _ '}}' { return { html: false, expression: expression }; }

Expression
  = left:LeftHandSideExpression _
    operator:("=" / "*=" / "/=" / "%=" / "+=" / "-=") _
    right:Expression
    { return { type: "Assignment", operator: operator, left: left, right: right }; }
  / ConditionalExpression

LeftHandSideExpression
  = CallExpression
  / MemberExpression

ConditionalExpression
  = test:LogicalORExpression _ "?" _ consequent:ConditionalExpression _ ":" _ alternate:ConditionalExpression
    { return { type: "Conditional", test: test, consequent: consequent, alternate: alternate }; }
  / LogicalORExpression

LogicalORExpression
  = head:LogicalANDExpression
    tail:( _ "||" _ arg:LogicalANDExpression { return { operator: '||', arg: arg }; })*
    { return buildTree('Logical', head, tail); }

LogicalANDExpression
  = head:EqualityExpression
    tail:( _ "&&" _ arg:EqualityExpression { return { operator: '&&', arg: arg }; })*
    { return buildTree('Logical', head, tail); }

EqualityExpression
  = head:RelationalExpression
    tail:( _ operator:("===" / "!==" / "==" / "!=") _ arg:RelationalExpression { return { operator: operator, arg: arg }; } )*
    { return buildTree('Binary', head, tail); }

RelationalExpression
  = head:AdditiveExpression
    tail:( _ operator:("<=" / ">=" / "<" / ">") _ arg:AdditiveExpression { return { operator: operator, arg: arg }; } )*
    { return buildTree('Binary', head, tail); }

AdditiveExpression
  = head:MultiplicativeExpression
    tail:( _ operator:[+-] _ arg:MultiplicativeExpression { return { operator: operator, arg: arg }; } )*
    { return buildTree('Binary', head, tail); }

MultiplicativeExpression
  = head:UnaryExpression
    tail:( _ operator:[*/%] _ arg:UnaryExpression { return { operator: operator, arg: arg }; } )*
    { return buildTree('Binary', head, tail); }

UnaryExpression
  = PostfixExpression
  / operator:("++" / "--" / [+!-]) _ argument:UnaryExpression {
      var type = (operator === "++" || operator === "--") ? "Update" : "Unary";
      return { type: type, operator: operator, argument: argument, prefix: true };
    }

PostfixExpression
  = argument:LeftHandSideExpression _ operator:("++" / "--")
    { return { type: "Update", operator: operator, argument: argument, prefix: false }; }
  / LeftHandSideExpression

CallExpression
  = head:(
      callee:MemberExpression _ args:Arguments
      { return { type: "Call", callee: callee, arguments: args }; }
    )
    tail:MembershipExpression
    {
      return tail.reduce(function (result, property) {
        //property[TYPES_TO_PROPERTY_NAMES[property.type]] = result;
        return { type: "Member", property: property, object: result };
      }, head);
    }
    
MemberExpression
  = head:(
      NewExpression / Identifier / Literal / ArrayLiteral / ObjectLiteral / "(" _ expression:Expression _ ")" { return expression; }
    )
    tail:MembershipExpression
    {
      return tail.reduce(function(result, property) {
        return { type: "Member", object: result, property: property };
      }, head);
    }

MembershipExpression
  = members:(
        _ "[" _ property:Expression _ "]"
        { return property; }
      / _ "." _ property:Identifier 
        { return { type: 'Literal', value: property.name }; }
    )*

NewExpression
  = "new" _ callee:MemberExpression args:(_ args:Arguments { return args; })? {
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
    { return { type: "Array", elements: [] }; }
  / "[" _ elements:ElementList _ "]"
    { return { type: "Array", elements: elements }; }

ElementList
  = head:Expression
    tail:(_ "," _ element:Expression { return element; })*
    { return [head].concat(tail); }

ObjectLiteral
  = "{" _ "}"
    { return { type: "Object", properties: [] }; }
  / "{" _ properties:PropertyNameAndValueList _ ("," _)? "}"
    { return { type: "Object", properties: properties }; }

PropertyNameAndValueList
  = head:PropertyAssignment
    tail:(_ "," _ pa:PropertyAssignment { return pa; })*
    { return [head].concat(tail); }

PropertyAssignment
  = key:(Identifier / StringLiteral / NumericLiteral) _ ":" _ value:Expression
    { return { type: "Property", key: key.name || key.value, value: value }; }

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

WhiteSpace "whitespace"
  = "\t"
  / " "
_
  = (WhiteSpace)* 