var tack = function() {
    "use strict";
    var e = function() {
        function e(e, t) {
            function n() {
                this.constructor = e;
            }
            n.prototype = t.prototype, e.prototype = new n();
        }
        function t(e, n, r, a) {
            this.message = e, this.expected = n, this.found = r, this.location = a, this.name = "SyntaxError", 
            "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, t);
        }
        function n(e, n) {
            function r() {
                return e.substring(x, k);
            }
            function a(e, t) {
                return {
                    type: "literal",
                    text: e,
                    ignoreCase: t
                };
            }
            function i(e, t, n) {
                return {
                    type: "class",
                    parts: e,
                    inverted: t,
                    ignoreCase: n
                };
            }
            function o() {
                return {
                    type: "any"
                };
            }
            function u() {
                return {
                    type: "end"
                };
            }
            function c(e) {
                return {
                    type: "other",
                    description: e
                };
            }
            function $(t) {
                var n, r = E[t];
                if (r) return r;
                for (n = t - 1; !E[n]; ) n--;
                for (r = E[n], r = {
                    line: r.line,
                    column: r.column
                }; n < t; ) 10 === e.charCodeAt(n) ? (r.line++, r.column = 1) : r.column++, n++;
                return E[t] = r, r;
            }
            function s(e, t) {
                var n = $(e), r = $(t);
                return {
                    start: {
                        offset: e,
                        line: n.line,
                        column: n.column
                    },
                    end: {
                        offset: t,
                        line: r.line,
                        column: r.column
                    }
                };
            }
            function l(e) {
                k < A || (k > A && (A = k, N = []), N.push(e));
            }
            function p(e, n, r) {
                return new t(t.buildMessage(e, n), e, n, r);
            }
            function f(e) {
                var t, n = new Array(e.length);
                for (t = 0; t < e.length; t++) n[t] = e.charCodeAt(t) - 32;
                return n;
            }
            function h(t) {
                for (var n, r, a = b[t], i = 0, o = [], u = a.length, c = [], $ = []; ;) {
                    for (;i < u; ) switch (a[i]) {
                      case 0:
                        $.push(g[a[i + 1]]), i += 2;
                        break;

                      case 1:
                        $.push(void 0), i++;
                        break;

                      case 2:
                        $.push(null), i++;
                        break;

                      case 3:
                        $.push(v), i++;
                        break;

                      case 4:
                        $.push([]), i++;
                        break;

                      case 5:
                        $.push(k), i++;
                        break;

                      case 6:
                        $.pop(), i++;
                        break;

                      case 7:
                        k = $.pop(), i++;
                        break;

                      case 8:
                        $.length -= a[i + 1], i += 2;
                        break;

                      case 9:
                        $.splice(-2, 1), i++;
                        break;

                      case 10:
                        $[$.length - 2].push($.pop()), i++;
                        break;

                      case 11:
                        $.push($.splice($.length - a[i + 1], a[i + 1])), i += 2;
                        break;

                      case 12:
                        $.push(e.substring($.pop(), k)), i++;
                        break;

                      case 13:
                        c.push(u), o.push(i + 3 + a[i + 1] + a[i + 2]), $[$.length - 1] ? (u = i + 3 + a[i + 1], 
                        i += 3) : (u = i + 3 + a[i + 1] + a[i + 2], i += 3 + a[i + 1]);
                        break;

                      case 14:
                        c.push(u), o.push(i + 3 + a[i + 1] + a[i + 2]), $[$.length - 1] === v ? (u = i + 3 + a[i + 1], 
                        i += 3) : (u = i + 3 + a[i + 1] + a[i + 2], i += 3 + a[i + 1]);
                        break;

                      case 15:
                        c.push(u), o.push(i + 3 + a[i + 1] + a[i + 2]), $[$.length - 1] !== v ? (u = i + 3 + a[i + 1], 
                        i += 3) : (u = i + 3 + a[i + 1] + a[i + 2], i += 3 + a[i + 1]);
                        break;

                      case 16:
                        $[$.length - 1] !== v ? (c.push(u), o.push(i), u = i + 2 + a[i + 1], i += 2) : i += 2 + a[i + 1];
                        break;

                      case 17:
                        c.push(u), o.push(i + 3 + a[i + 1] + a[i + 2]), e.length > k ? (u = i + 3 + a[i + 1], 
                        i += 3) : (u = i + 3 + a[i + 1] + a[i + 2], i += 3 + a[i + 1]);
                        break;

                      case 18:
                        c.push(u), o.push(i + 4 + a[i + 2] + a[i + 3]), e.substr(k, g[a[i + 1]].length) === g[a[i + 1]] ? (u = i + 4 + a[i + 2], 
                        i += 4) : (u = i + 4 + a[i + 2] + a[i + 3], i += 4 + a[i + 2]);
                        break;

                      case 19:
                        c.push(u), o.push(i + 4 + a[i + 2] + a[i + 3]), e.substr(k, g[a[i + 1]].length).toLowerCase() === g[a[i + 1]] ? (u = i + 4 + a[i + 2], 
                        i += 4) : (u = i + 4 + a[i + 2] + a[i + 3], i += 4 + a[i + 2]);
                        break;

                      case 20:
                        c.push(u), o.push(i + 4 + a[i + 2] + a[i + 3]), g[a[i + 1]].test(e.charAt(k)) ? (u = i + 4 + a[i + 2], 
                        i += 4) : (u = i + 4 + a[i + 2] + a[i + 3], i += 4 + a[i + 2]);
                        break;

                      case 21:
                        $.push(e.substr(k, a[i + 1])), k += a[i + 1], i += 2;
                        break;

                      case 22:
                        $.push(g[a[i + 1]]), k += g[a[i + 1]].length, i += 2;
                        break;

                      case 23:
                        $.push(v), 0 === T && l(g[a[i + 1]]), i += 2;
                        break;

                      case 24:
                        x = $[$.length - 1 - a[i + 1]], i += 2;
                        break;

                      case 25:
                        x = k, i++;
                        break;

                      case 26:
                        for (n = a.slice(i + 4, i + 4 + a[i + 3]), r = 0; r < a[i + 3]; r++) n[r] = $[$.length - 1 - n[r]];
                        $.splice($.length - a[i + 2], a[i + 2], g[a[i + 1]].apply(null, n)), i += 4 + a[i + 3];
                        break;

                      case 27:
                        $.push(h(a[i + 1])), i += 2;
                        break;

                      case 28:
                        T++, i++;
                        break;

                      case 29:
                        T--, i++;
                        break;

                      default:
                        throw new Error("Invalid opcode: " + a[i] + ".");
                    }
                    if (!(c.length > 0)) break;
                    u = c.pop(), i = o.pop();
                }
                return $[0];
            }
            n = void 0 !== n ? n : {};
            var d, v = {}, m = {
                Text: 0,
                Expression: 2
            }, y = 0, g = [ /^[^{]/, i([ "{" ], !0, !1), function(e, t, n) {
                return (e.length > 0 ? [ e.join("") ] : []).concat([ t ], n);
            }, o(), function(e) {
                return e.length > 0 ? [ e.join("") ] : [];
            }, "{{{", a("{{{", !1), "}}}", a("}}}", !1), function(e) {
                return {
                    html: !0,
                    expression: e
                };
            }, "{{", a("{{", !1), "}}", a("}}", !1), function(e) {
                return {
                    html: !1,
                    expression: e
                };
            }, "=", a("=", !1), "*=", a("*=", !1), "/=", a("/=", !1), "%=", a("%=", !1), "+=", a("+=", !1), "-=", a("-=", !1), function(e, t, n) {
                return {
                    type: "Assignment",
                    operator: t,
                    left: e,
                    right: n
                };
            }, "?", a("?", !1), ":", a(":", !1), function(e, t, n) {
                return {
                    type: "Conditional",
                    test: e,
                    consequent: t,
                    alternate: n
                };
            }, "||", a("||", !1), function(e, t) {
                return {
                    operator: "||",
                    arg: t
                };
            }, function(e, t) {
                return j("Logical", e, t);
            }, "&&", a("&&", !1), function(e, t) {
                return t;
            }, "===", a("===", !1), "!==", a("!==", !1), "==", a("==", !1), "!=", a("!=", !1), function(e, t, n) {
                return {
                    operator: t,
                    arg: n
                };
            }, function(e, t) {
                return j("Binary", e, t);
            }, "<=", a("<=", !1), ">=", a(">=", !1), "<", a("<", !1), ">", a(">", !1), /^[+\-]/, i([ "+", "-" ], !1, !1), /^[*\/%]/, i([ "*", "/", "%" ], !1, !1), "++", a("++", !1), "--", a("--", !1), /^[+!\-]/, i([ "+", "!", "-" ], !1, !1), function(e, t) {
                return {
                    type: "++" === e || "--" === e ? "Update" : "Unary",
                    operator: e,
                    argument: t,
                    prefix: !0
                };
            }, function(e, t) {
                return {
                    type: "Update",
                    operator: t,
                    argument: e,
                    prefix: !1
                };
            }, function(e, t) {
                return {
                    type: "Call",
                    callee: e,
                    arguments: t
                };
            }, function(e, t) {
                return {
                    type: "Call",
                    arguments: t
                };
            }, "[", a("[", !1), "]", a("]", !1), function(e, t) {
                return {
                    type: "Member",
                    property: t
                };
            }, ".", a(".", !1), function(e, t) {
                return {
                    type: "Member",
                    property: {
                        type: "Literal",
                        value: t.name
                    }
                };
            }, function(e, t) {
                return t.reduce(function(e, t) {
                    return t[C[t.type]] = e, t;
                }, e);
            }, function(e, t) {
                return {
                    property: t
                };
            }, function(e, t) {
                return {
                    property: {
                        type: "Literal",
                        value: t.name
                    }
                };
            }, function(e, t) {
                return t.reduce(function(e, t) {
                    return {
                        type: "Member",
                        object: e,
                        property: t.property
                    };
                }, e);
            }, "(", a("(", !1), ")", a(")", !1), function() {
                return [];
            }, ",", a(",", !1), function(e, t) {
                return [ e ].concat(t);
            }, c("identifier"), /^[a-z$_]/i, i([ [ "a", "z" ], "$", "_" ], !1, !0), /^[a-z$_0-9]/i, i([ [ "a", "z" ], "$", "_", [ "0", "9" ] ], !1, !0), function(e, t) {
                return {
                    type: "Identifier",
                    name: e + t.join("")
                };
            }, function() {
                return {
                    type: "Array",
                    elements: []
                };
            }, function(e) {
                return {
                    type: "Array",
                    elements: e
                };
            }, function(e, t) {
                return t;
            }, "{", a("{", !1), "}", a("}", !1), function() {
                return {
                    type: "Object",
                    properties: []
                };
            }, function(e) {
                return {
                    type: "Object",
                    properties: e
                };
            }, function(e, t) {
                return t;
            }, function(e, t) {
                return {
                    type: "Property",
                    key: e.name,
                    value: t
                };
            }, "null", a("null", !1), function() {
                return {
                    type: "Literal",
                    value: null
                };
            }, "true", a("true", !1), function() {
                return {
                    type: "Literal",
                    value: !0
                };
            }, "false", a("false", !1), function() {
                return {
                    type: "Literal",
                    value: !1
                };
            }, c("number"), /^[0-9]/, i([ [ "0", "9" ] ], !1, !1), function() {
                return {
                    type: "Literal",
                    value: parseFloat(r())
                };
            }, "0", a("0", !1), /^[1-9]/, i([ [ "1", "9" ] ], !1, !1), "e", a("e", !0), c("string"), '"', a('"', !1), '\\"', a('\\"', !1), function() {
                return '"';
            }, /^[^"]/, i([ '"' ], !0, !1), function(e) {
                return {
                    type: "Literal",
                    value: e.join("")
                };
            }, "'", a("'", !1), "\\'", a("\\'", !1), function() {
                return "'";
            }, /^[^'']/, i([ "'", "'" ], !0, !1), c("whitespace"), "\t", a("\t", !1), " ", a(" ", !1) ], b = [ f('%$4 ""5!7!0)*4 ""5!7!&/<#;!/3$; /*$8#:"##"! )(#\'#("\'#&\'#.@ &%$1""5!7#0(*1""5!7#&/\' 8!:$!! )'), f('%2%""6%7&/R#;=/I$;"/@$;=/7$2\'""6\'7(/($8%:)%!")(%\'#($\'#(#\'#("\'#&\'#.b &%2*""6*7+/R#;=/I$;"/@$;=/7$2,""6,7-/($8%:.%!")(%\'#($\'#(#\'#("\'#&\'#'), f('%;#/#;=/$2/""6/70.Y &21""6172.M &23""6374.A &25""6576.5 &27""6778.) &29""697:/<$;=/3$;"/*$8%:;%#$" )(%\'#($\'#(#\'#("\'#&\'#.# &;$'), f(";-.# &;."), f("%;%/~#;=/u$2<\"\"6<7=/f$;=/]$;$/T$;=/K$2>\"\"6>7?/<$;=/3$;$/*$8):@)#($ )()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.# &;%"), f('%;&/#$%;=/J#2A""6A7B/;$;=/2$;&/)$8$:C$"& )($\'#(#\'#("\'#&\'#0T*%;=/J#2A""6A7B/;$;=/2$;&/)$8$:C$"& )($\'#(#\'#("\'#&\'#&/)$8":D""! )("\'#&\'#'), f("%;'/#$%;=/J#2E\"\"6E7F/;$;=/2$;'/)$8$:G$\"& )($'#(#'#(\"'#&'#0T*%;=/J#2E\"\"6E7F/;$;=/2$;'/)$8$:G$\"& )($'#(#'#(\"'#&'#&/)$8\":D\"\"! )(\"'#&'#"), f('%;(/å#$%;=/o#2H""6H7I.A &2J""6J7K.5 &2L""6L7M.) &2N""6N7O/<$;=/3$;(/*$8$:P$#&" )($\'#(#\'#("\'#&\'#0y*%;=/o#2H""6H7I.A &2J""6J7K.5 &2L""6L7M.) &2N""6N7O/<$;=/3$;(/*$8$:P$#&" )($\'#(#\'#("\'#&\'#&/)$8":Q""! )("\'#&\'#'), f('%;)/å#$%;=/o#2R""6R7S.A &2T""6T7U.5 &2V""6V7W.) &2X""6X7Y/<$;=/3$;)/*$8$:P$#&" )($\'#(#\'#("\'#&\'#0y*%;=/o#2R""6R7S.A &2T""6T7U.5 &2V""6V7W.) &2X""6X7Y/<$;=/3$;)/*$8$:P$#&" )($\'#(#\'#("\'#&\'#&/)$8":Q""! )("\'#&\'#'), f('%;*/#$%;=/K#4Z""5!7[/<$;=/3$;*/*$8$:P$#&" )($\'#(#\'#("\'#&\'#0U*%;=/K#4Z""5!7[/<$;=/3$;*/*$8$:P$#&" )($\'#(#\'#("\'#&\'#&/)$8":Q""! )("\'#&\'#'), f('%;+/#$%;=/K#4\\""5!7]/<$;=/3$;+/*$8$:P$#&" )($\'#(#\'#("\'#&\'#0U*%;=/K#4\\""5!7]/<$;=/3$;+/*$8$:P$#&" )($\'#(#\'#("\'#&\'#&/)$8":Q""! )("\'#&\'#'), f(';,.c &%2^""6^7_.5 &2`""6`7a.) &4b""5!7c/;#;=/2$;+/)$8#:d#"" )(#\'#("\'#&\'#'), f('%;#/M#;=/D$2^""6^7_.) &2`""6`7a/)$8#:e#"" )(#\'#("\'#&\'#.# &;#'), f('%%;./;#;=/2$;//)$8#:f#"" )(#\'#("\'#&\'#/ŷ#$%;=/2#;//)$8":g""$ )("\'#&\'#.£ &%;=/b#2h""6h7i/S$;=/J$;"/A$;=/8$2j""6j7k/)$8&:l&"(")(&\'#(%\'#($\'#(#\'#("\'#&\'#.T &%;=/J#2m""6m7n/;$;=/2$;0/)$8$:o$"& )($\'#(#\'#("\'#&\'#0Â*%;=/2#;//)$8":g""$ )("\'#&\'#.£ &%;=/b#2h""6h7i/S$;=/J$;"/A$;=/8$2j""6j7k/)$8&:l&"(")(&\'#(%\'#($\'#(#\'#("\'#&\'#.T &%;=/J#2m""6m7n/;$;=/2$;0/)$8$:o$"& )($\'#(#\'#("\'#&\'#&/)$8":p""! )("\'#&\'#'), f('%;0./ &;6.) &;1.# &;3/Ĺ#$%;=/b#2h""6h7i/S$;=/J$;"/A$;=/8$2j""6j7k/)$8&:q&"(")(&\'#(%\'#($\'#(#\'#("\'#&\'#.T &%;=/J#2m""6m7n/;$;=/2$;0/)$8$:r$"& )($\'#(#\'#("\'#&\'#0£*%;=/b#2h""6h7i/S$;=/J$;"/A$;=/8$2j""6j7k/)$8&:q&"(")(&\'#(%\'#($\'#(#\'#("\'#&\'#.T &%;=/J#2m""6m7n/;$;=/2$;0/)$8$:r$"& )($\'#(#\'#("\'#&\'#&/)$8":s""! )("\'#&\'#'), f('%2t""6t7u/?#;=/6$2v""6v7w/\'$8#:x# )(#\'#("\'#&\'#.Õ &%2t""6t7u/Å#;=/¼$;"/³$$%;=/J#2y""6y7z/;$;=/2$;"/)$8$:G$"& )($\'#(#\'#("\'#&\'#0T*%;=/J#2y""6y7z/;$;=/2$;"/)$8$:G$"& )($\'#(#\'#("\'#&\'#&/A$;=/8$2v""6v7w/)$8&:{&"#")(&\'#(%\'#($\'#(#\'#("\'#&\'#'), f('<%%<;7=.##&&!&\'#/T#4}""5!7~/E$$4""5!70)*4""5!7&/)$8#:#"! )(#\'#("\'#&\'#=." 7|'), f('%2h""6h7i/?#;=/6$2j""6j7k/\'$8#:# )(#\'#("\'#&\'#.b &%2h""6h7i/R#;=/I$;2/@$;=/7$2j""6j7k/($8%:%!")(%\'#($\'#(#\'#("\'#&\'#'), f('%;"/#$%;=/J#2y""6y7z/;$;=/2$;"/)$8$:$"& )($\'#(#\'#("\'#&\'#0T*%;=/J#2y""6y7z/;$;=/2$;"/)$8$:$"& )($\'#(#\'#("\'#&\'#&/)$8":{""! )("\'#&\'#'), f('%2""67/?#;=/6$2""67/\'$8#:# )(#\'#("\'#&\'#. &%2""67/y#;=/p$;4/g$;=/^$%2y""6y7z/,#;=/#$+")("\'#&\'#." &"/7$2""67/($8&:&!#)(&\'#(%\'#($\'#(#\'#("\'#&\'#'), f('%;5/#$%;=/J#2y""6y7z/;$;=/2$;5/)$8$:$"& )($\'#(#\'#("\'#&\'#0T*%;=/J#2y""6y7z/;$;=/2$;5/)$8$:$"& )($\'#(#\'#("\'#&\'#&/)$8":{""! )("\'#&\'#'), f("%;0.) &;;.# &;8/S#;=/J$2>\"\"6>7?/;$;=/2$;\"/)$8%:%\"$ )(%'#($'#(#'#(\"'#&'#"), f(";7.) &;8.# &;;"), f('%2""67/& 8!:! ).K &%2""67/& 8!:! ).4 &%2""67/& 8!:! )'), f('<%;9/`#2m""6m7n/Q$$4""5!70)*4""5!7&/5$;:." &"/\'$8$:$ )($\'#(#\'#("\'#&\'#. &%2m""6m7n/W#$4""5!7/,#0)*4""5!7&&&#/5$;:." &"/\'$8#:# )(#\'#("\'#&\'#.? &%;9/5#;:." &"/\'$8":" )("\'#&\'#=." 7'), f('2""67.O &%4""5!7/?#$4""5!70)*4""5!7&/#$+")("\'#&\'#'), f('%3""5!7/Y#4Z""5!7[." &"/E$$4""5!7/,#0)*4""5!7&&&#/#$+#)(#\'#("\'#&\'#'), f('<%2¡""6¡7¢/#$%2£""6£7¤/& 8!:¥! ).) &4¦""5!7§0@*%2£""6£7¤/& 8!:¥! ).) &4¦""5!7§&/7$2¡""6¡7¢/($8#:¨#!!)(#\'#("\'#&\'#. &%2©""6©7ª/#$%2«""6«7¬/& 8!:­! ).) &4®""5!7¯0@*%2«""6«7¬/& 8!:­! ).) &4®""5!7¯&/7$2©""6©7ª/($8#:¨#!!)(#\'#("\'#&\'#=." 7 '), f('<2±""6±7².) &2³""6³7´=." 7°'), f("$;<0#*;<&") ], k = 0, x = 0, E = [ {
                line: 1,
                column: 1
            } ], A = 0, N = [], T = 0;
            if ("startRule" in n) {
                if (!(n.startRule in m)) throw new Error("Can't start parsing from rule \"" + n.startRule + '".');
                y = m[n.startRule];
            }
            var C = {
                Call: "callee",
                Member: "object"
            }, j = function(e, t, n) {
                return 0 === n.length ? t : {
                    type: e,
                    operator: n[0].operator,
                    left: t,
                    right: j(e, n[0].arg, n.slice(1))
                };
            };
            if (d = h(y), d !== v && k === e.length) return d;
            throw d !== v && k < e.length && l(u()), p(N, A < e.length ? e.charAt(A) : null, A < e.length ? s(A, A + 1) : s(A, A));
        }
        return e(t, Error), t.buildMessage = function(e, t) {
            function n(e) {
                return e.charCodeAt(0).toString(16).toUpperCase();
            }
            function r(e) {
                return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
                    return "\\x0" + n(e);
                }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
                    return "\\x" + n(e);
                });
            }
            function a(e) {
                return e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
                    return "\\x0" + n(e);
                }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
                    return "\\x" + n(e);
                });
            }
            function i(e) {
                return c[e.type](e);
            }
            function o(e) {
                var t, n, r = new Array(e.length);
                for (t = 0; t < e.length; t++) r[t] = i(e[t]);
                if (r.sort(), r.length > 0) {
                    for (t = 1, n = 1; t < r.length; t++) r[t - 1] !== r[t] && (r[n] = r[t], n++);
                    r.length = n;
                }
                switch (r.length) {
                  case 1:
                    return r[0];

                  case 2:
                    return r[0] + " or " + r[1];

                  default:
                    return r.slice(0, -1).join(", ") + ", or " + r[r.length - 1];
                }
            }
            function u(e) {
                return e ? '"' + r(e) + '"' : "end of input";
            }
            var c = {
                literal: function(e) {
                    return '"' + r(e.text) + '"';
                },
                class: function(e) {
                    var t, n = "";
                    for (t = 0; t < e.parts.length; t++) n += e.parts[t] instanceof Array ? a(e.parts[t][0]) + "-" + a(e.parts[t][1]) : a(e.parts[t]);
                    return "[" + (e.inverted ? "^" : "") + n + "]";
                },
                any: function(e) {
                    return "any character";
                },
                end: function(e) {
                    return "end of input";
                },
                other: function(e) {
                    return e.description;
                }
            };
            return "Expected " + o(e) + " but " + u(t) + " found.";
        }, {
            SyntaxError: t,
            parse: n
        };
    }(), t = e.parse, n = function(e) {
        return Array.prototype.slice.call(e);
    }, r = function(e) {
        return String(null !== e && "undefined" != typeof e ? e : "");
    }, a = function(e, t) {
        var n, r, i = e.type, o = e.operator;
        if ("Literal" === i) n = e.value; else if ("Array" === i) n = e.elements.map(function(e) {
            return a(e, t).value;
        }); else if ("Object" === i) n = {}, e.properties.forEach(function(e) {
            n[e.key] = a(e.value, t).value;
        }); else if ("Identifier" === i) n = t[e.name], r = function(n) {
            return t[e.name] = n, n;
        }; else if ("Member" === i) {
            var u = a(e.object, t).value, c = a(e.property, t).value;
            n = "undefined" != typeof u ? u[c] : void 0, r = function(e) {
                return u[c] = e, e;
            };
        } else if ("Conditional" === i) n = a(e.test, t).value ? a(e.consequent, t).value : a(e.alternate, t).value; else if ("Unary" === i || "Update" === i) {
            var $ = a(e.argument, t), s = $.value;
            n = "!" === o ? !s : "+" === o ? +s : "-" === o ? -s : "++" === o ? s + 1 : "--" === o ? s - 1 : null, 
            "Update" === i && (r = $.set, n = r(n), e.prefix && (n += "++" === o ? -1 : 1));
        } else if ("Binary" === i || "Logical" === i || "Assignment" === i) {
            var l = a(e.left, t), p = l.value, f = a(e.right, t).value;
            n = "===" === o ? p === f : "!==" === o ? p !== f : "==" === o ? p == f : "!=" === o ? p != f : "<" === o ? p < f : ">" === o ? p > f : "<=" === o ? p <= f : ">=" === o ? p >= f : "&&" === o ? p && f : "||" === o ? p || f : "+" === o ? p + f : "-" === o ? p - f : "*" === o ? p * f : "/" === o ? p / f : "%" === o ? p % f : "*=" === o ? p * f : "/=" === o ? p / f : "%=" === o ? p % f : "+=" === o ? p + f : "-=" === o ? p - f : "=" === o ? f : null, 
            "Assignment" === i && (r = l.set, n = r(n));
        } else if ("Call" === i) {
            var h = e.callee.object ? a(e.callee.object, t).value : t, d = a(e.callee, t).value, v = e.arguments.map(function(e) {
                return a(e, t).value;
            });
            console.log(h, e.callee, v), n = d ? d.apply(h, v) : void 0;
        }
        return {
            value: n,
            set: r
        };
    }, i = function(e, r) {
        e = "string" == typeof e ? document.querySelector(e) : e[0] || e;
        var u = {}, c = [];
        u.$ = function() {
            c.forEach(function(e) {
                e.taBindings.forEach(function(e) {
                    e.update();
                });
            });
        };
        var $ = function(e, t, n, o) {
            "function" == typeof e && (e = {
                update: e
            });
            var c = {
                component: u,
                block: e.block,
                syntax: o,
                eval: function(e) {
                    var t, n = [ u ];
                    return r && n.push(r), n.push(i.root, window), n.find(function(n) {
                        return t = a(e || o, n).value;
                    }), t;
                },
                update: function() {
                    e.update && e.update.apply(c, [ t ].concat(n));
                },
                remove: function() {
                    var e = t.taBindings.indexOf(c);
                    e > -1 && t.taBindings.splice(e, 1);
                }
            };
            return e.create && e.create.apply(c, [ t ].concat(n)), t.taBindings.push(c), c;
        }, s = function(r) {
            if (!([ Node.ELEMENT_NODE, Node.TEXT_NODE ].indexOf(r.nodeType) === -1 || r.taComponent && e.contains(r.taEl))) if (r.taComponent && r.taBindings.forEach(function(e) {
                e.remove();
            }), r.taComponent = u, r.taEl = e, r.taBindings = [], r.nodeType === Node.ELEMENT_NODE) {
                var a = n(r.attributes), l = Object.keys(i.directives).sort(function(e, t) {
                    return (i.directives[e].order || 100) - (i.directives[t].order || 100);
                }).find(function(e) {
                    var n, o = a.find(function(t) {
                        return n = t.name.match(new RegExp("^" + i.prefix + "(?:" + e + ")$"));
                    });
                    if (n) {
                        var u = t(o.value || "undefined", {
                            startRule: "Expression"
                        });
                        r.removeAttribute(o.name);
                        var s = $(i.directives[e], r, n, u);
                        return c.indexOf(r) === -1 && c.push(r), s.block;
                    }
                });
                l || n(r.childNodes).forEach(s);
            } else if (r.nodeType === Node.TEXT_NODE && r.nodeValue.indexOf("{{") > -1) {
                var p = r.nodeValue;
                t(p, {
                    startRule: "Text"
                }).forEach(function(e) {
                    var t;
                    "string" == typeof e ? t = document.createTextNode(e) : (t = e.html ? document.createElement("span") : document.createTextNode(""), 
                    t.taComponent = u, t.taBindings = [], $(o, t, [ "", e.html ? "html" : "text" ], e.expression), 
                    c.push(t)), r.parentNode.insertBefore(t, r);
                }), r.parentNode.removeChild(r);
            }
        };
        return s(e, 0), u;
    };
    i.version = "0.1.0", i.prefix = "ta-", i.root = {}, i.directives = {}, i.currency = "£", 
    i.root.number = function(e, t) {
        return Number(e).toFixed(t || 2);
    }, i.root.percent = function(e, t) {
        return Number(100 * e).toFixed(t || 2) + "%";
    };
    var o = i.directives["(text|html)"] = function(e, t, n) {
        var a = r(this.eval());
        a !== this.prevValue && ("html" === n ? e.innerHTML = a : e.textContent = a, this.prevValue = a);
    };
    i.directives.show = function(e) {
        var t = !!this.eval();
        t !== this.prevValue && (e.style.display = t ? "" : "none", this.prevValue = t);
    }, i.directives.exist = {
        order: 2,
        block: !0,
        create: function(e, t) {
            this.marker = document.createComment(t), e.parentNode.insertBefore(this.marker, e), 
            e.parentNode.removeChild(e);
        },
        update: function(e) {
            var t = !!this.eval();
            t !== this.prevValue && (t ? (this.clone = e.cloneNode(!0), this.childComponent = i(this.clone, this.component), 
            this.marker.parentNode.insertBefore(this.clone, this.marker)) : this.clone && this.marker.parentNode.removeChild(this.clone), 
            this.prevValue = t), this.clone && this.childComponent.$();
        }
    }, i.directives["each-(.+)"] = {
        order: 1,
        block: !0,
        create: function(e, t) {
            this.items = [], this.marker = document.createComment(t), e.parentNode.insertBefore(this.marker, e), 
            e.parentNode.removeChild(e);
        },
        update: function(e, t, n) {
            var r = this, a = this.eval() || [];
            r.items.forEach(function(e) {
                a.indexOf(e.data) === -1 && (r.marker.parentNode.removeChild(e.el), r.items.splice(r.items.indexOf(e), 1));
            }), a.forEach(function(t) {
                var a = r.items.find(function(e) {
                    return e.data === t;
                });
                if (!a) {
                    var o = e.cloneNode(!0);
                    a = {
                        el: o,
                        tack: i(o),
                        data: t
                    }, a.tack[n] = t, r.items.push(a);
                }
                a.tack.$(), r.marker.parentNode.insertBefore(a.el, r.marker);
            });
        }
    };
    var u = [ "selected", "checked", "disabled", "readonly", "multiple", "ismap", "defer", "noresize" ];
    return i.directives["attr-(.+)"] = function(e, t, n) {
        var r = this.eval();
        u.indexOf(n) > -1 && (r = r ? n : void 0), "undefined" == typeof r ? e.removeAttribute(n) : e.setAttribute(n, r);
    }, i.directives["class-(.+)"] = function(e, t, n) {
        e.classList.toggle(n, !!this.eval());
    }, i.directives["style-(.+)"] = function(e, t, n) {
        e.style[n] = this.eval();
    }, i.directives.model = {
        create: function(e) {
            var t = this, n = function() {
                e.value !== t.prevValue && (t.prevValue = e.value, t.eval({
                    type: "Assignment",
                    operator: "=",
                    left: t.syntax,
                    right: {
                        type: "Literal",
                        value: e.value
                    }
                }), t.component.$());
            };
            e.addEventListener("input", n);
        },
        update: function(e) {
            var t = r(this.eval());
            t !== this.prevValue && (e.value = t, this.prevValue = t);
        }
    }, i.directives["on-(.+)"] = {
        create: function(e, t, n) {
            var r = this;
            e.addEventListener(n, function() {
                r.eval(), r.component.$();
            });
        }
    }, i.directives.skip = {
        order: 0,
        block: !0
    }, i;
}();
