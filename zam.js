!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.zam = t();
}(this, function() {
    "use strict";
    var e = function(e) {
        return null === e || void 0 === e ? "" : String(e);
    }, t = function(e, t) {
        var r = e ? e.indexOf(t) : -1;
        r > -1 && e.splice(r, 1);
    }, r = function(e) {
        return e.split("").reduce(function(e, t) {
            return (e << 5) - e + t.charCodeAt(0) | 0;
        }, 0).toString(16);
    }, n = function(e) {
        var t, r = function() {
            t || e();
        };
        if ("undefined" != typeof process) process.nextTick(r); else {
            var n = String(Math.random());
            window.addEventListener("message", function e(t) {
                t.data === n && (t.stopPropagation(), r(), window.removeEventListener("message", e, !0));
            }, !0), window.postMessage(n, "*");
        }
        return function() {
            t = !0;
        };
    }, i = function() {
        function e(t, r, n, i) {
            this.message = t, this.expected = r, this.found = n, this.location = i, this.name = "SyntaxError", 
            "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, e);
        }
        return function(e, t) {
            function r() {
                this.constructor = e;
            }
            r.prototype = t.prototype, e.prototype = new r();
        }(e, Error), e.buildMessage = function(e, t) {
            function r(e) {
                return e.charCodeAt(0).toString(16).toUpperCase();
            }
            function n(e) {
                return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
                    return "\\x0" + r(e);
                }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
                    return "\\x" + r(e);
                });
            }
            function i(e) {
                return e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
                    return "\\x0" + r(e);
                }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
                    return "\\x" + r(e);
                });
            }
            function o(e) {
                return s[e.type](e);
            }
            var s = {
                literal: function(e) {
                    return '"' + n(e.text) + '"';
                },
                class: function(e) {
                    var t, r = "";
                    for (t = 0; t < e.parts.length; t++) r += e.parts[t] instanceof Array ? i(e.parts[t][0]) + "-" + i(e.parts[t][1]) : i(e.parts[t]);
                    return "[" + (e.inverted ? "^" : "") + r + "]";
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
            return "Expected " + function(e) {
                var t, r, n = new Array(e.length);
                for (t = 0; t < e.length; t++) n[t] = o(e[t]);
                if (n.sort(), n.length > 0) {
                    for (t = 1, r = 1; t < n.length; t++) n[t - 1] !== n[t] && (n[r] = n[t], r++);
                    n.length = r;
                }
                switch (n.length) {
                  case 1:
                    return n[0];

                  case 2:
                    return n[0] + " or " + n[1];

                  default:
                    return n.slice(0, -1).join(", ") + ", or " + n[n.length - 1];
                }
            }(e) + " but " + function(e) {
                return e ? '"' + n(e) + '"' : "end of input";
            }(t) + " found.";
        }, {
            SyntaxError: e,
            parse: function(t, r) {
                function n() {
                    return t.substring(Tr, Sr);
                }
                function i(e, t) {
                    return {
                        type: "literal",
                        text: e,
                        ignoreCase: t
                    };
                }
                function o(e, t, r) {
                    return {
                        type: "class",
                        parts: e,
                        inverted: t,
                        ignoreCase: r
                    };
                }
                function s(e) {
                    return {
                        type: "other",
                        description: e
                    };
                }
                function u(e) {
                    var r, n = Br[e];
                    if (n) return n;
                    for (r = e - 1; !Br[r]; ) r--;
                    for (n = {
                        line: (n = Br[r]).line,
                        column: n.column
                    }; r < e; ) 10 === t.charCodeAt(r) ? (n.line++, n.column = 1) : n.column++, r++;
                    return Br[e] = n, n;
                }
                function a(e, t) {
                    var r = u(e), n = u(t);
                    return {
                        start: {
                            offset: e,
                            line: r.line,
                            column: r.column
                        },
                        end: {
                            offset: t,
                            line: n.line,
                            column: n.column
                        }
                    };
                }
                function c(e) {
                    Sr < Fr || (Sr > Fr && (Fr = Sr, Or = []), Or.push(e));
                }
                function l() {
                    var e, t, r, n = 33 * Sr + 0, i = Mr[n];
                    if (i) return Sr = i.nextPos, i.result;
                    for (e = Sr, t = [], r = f(); r !== D; ) t.push(r), r = f();
                    return t !== D && (Tr = e, t = W(t)), e = t, Mr[n] = {
                        nextPos: Sr,
                        result: e
                    }, e;
                }
                function f() {
                    var e, r, n = 33 * Sr + 1, i = Mr[n];
                    return i ? (Sr = i.nextPos, i.result) : (e = Sr, (r = d()) !== D && (Tr = e, r = G(r)), 
                    (e = r) === D && (e = Sr, t.length > Sr ? (r = t.charAt(Sr), Sr++) : (r = D, 0 === Ir && c(K)), 
                    r !== D && (Tr = e, r = Q(r)), e = r), Mr[n] = {
                        nextPos: Sr,
                        result: e
                    }, e);
                }
                function d() {
                    var e, r, n, i, o = 33 * Sr + 2, s = Mr[o];
                    return s ? (Sr = s.nextPos, s.result) : (e = Sr, t.substr(Sr, 3) === X ? (r = X, 
                    Sr += 3) : (r = D, 0 === Ir && c(Y)), r !== D && q() !== D && (n = p()) !== D && q() !== D ? (t.substr(Sr, 3) === Z ? (i = Z, 
                    Sr += 3) : (i = D, 0 === Ir && c(ee)), i !== D ? (Tr = e, e = r = te(n)) : (Sr = e, 
                    e = D)) : (Sr = e, e = D), e === D && (e = Sr, t.substr(Sr, 2) === re ? (r = re, 
                    Sr += 2) : (r = D, 0 === Ir && c(ne)), r !== D && q() !== D && (n = p()) !== D && q() !== D ? (t.substr(Sr, 2) === ie ? (i = ie, 
                    Sr += 2) : (i = D, 0 === Ir && c(oe)), i !== D ? (Tr = e, e = r = se(n)) : (Sr = e, 
                    e = D)) : (Sr = e, e = D)), Mr[o] = {
                        nextPos: Sr,
                        result: e
                    }, e);
                }
                function p() {
                    var e, r, n, i, o = 33 * Sr + 3, s = Mr[o];
                    return s ? (Sr = s.nextPos, s.result) : (e = Sr, (r = h()) !== D && q() !== D ? (61 === t.charCodeAt(Sr) ? (n = ue, 
                    Sr++) : (n = D, 0 === Ir && c(ae)), n === D && (t.substr(Sr, 2) === ce ? (n = ce, 
                    Sr += 2) : (n = D, 0 === Ir && c(le)), n === D && (t.substr(Sr, 2) === fe ? (n = fe, 
                    Sr += 2) : (n = D, 0 === Ir && c(de)), n === D && (t.substr(Sr, 2) === pe ? (n = pe, 
                    Sr += 2) : (n = D, 0 === Ir && c(he)), n === D && (t.substr(Sr, 2) === ve ? (n = ve, 
                    Sr += 2) : (n = D, 0 === Ir && c(me)), n === D && (t.substr(Sr, 2) === ye ? (n = ye, 
                    Sr += 2) : (n = D, 0 === Ir && c(xe))))))), n !== D && q() !== D && (i = p()) !== D ? (Tr = e, 
                    e = r = be(r, n, i)) : (Sr = e, e = D)) : (Sr = e, e = D), e === D && (e = v()), 
                    Mr[o] = {
                        nextPos: Sr,
                        result: e
                    }, e);
                }
                function h() {
                    var e, t = 33 * Sr + 4, r = Mr[t];
                    return r ? (Sr = r.nextPos, r.result) : ((e = C()) === D && (e = w()), Mr[t] = {
                        nextPos: Sr,
                        result: e
                    }, e);
                }
                function v() {
                    var e, r, n, i, o, s, u = 33 * Sr + 5, a = Mr[u];
                    return a ? (Sr = a.nextPos, a.result) : (e = Sr, (r = m()) !== D && q() !== D ? (63 === t.charCodeAt(Sr) ? (n = ge, 
                    Sr++) : (n = D, 0 === Ir && c(Ae)), n !== D && q() !== D && (i = v()) !== D && q() !== D ? (58 === t.charCodeAt(Sr) ? (o = ke, 
                    Sr++) : (o = D, 0 === Ir && c(Pe)), o !== D && q() !== D && (s = v()) !== D ? (Tr = e, 
                    e = r = Ce(r, i, s)) : (Sr = e, e = D)) : (Sr = e, e = D)) : (Sr = e, e = D), e === D && (e = m()), 
                    Mr[u] = {
                        nextPos: Sr,
                        result: e
                    }, e);
                }
                function m() {
                    var e, r, n, i, o, s, u = 33 * Sr + 6, a = Mr[u];
                    if (a) return Sr = a.nextPos, a.result;
                    if (e = Sr, (r = y()) !== D) {
                        for (n = [], i = Sr, q() !== D ? (t.substr(Sr, 2) === we ? (o = we, Sr += 2) : (o = D, 
                        0 === Ir && c(Ee)), o !== D && q() !== D && (s = y()) !== D ? (Tr = i, i = $e(r, s)) : (Sr = i, 
                        i = D)) : (Sr = i, i = D); i !== D; ) n.push(i), i = Sr, q() !== D ? (t.substr(Sr, 2) === we ? (o = we, 
                        Sr += 2) : (o = D, 0 === Ir && c(Ee)), o !== D && q() !== D && (s = y()) !== D ? (Tr = i, 
                        i = $e(r, s)) : (Sr = i, i = D)) : (Sr = i, i = D);
                        n !== D ? (Tr = e, e = r = Ne(r, n)) : (Sr = e, e = D);
                    } else Sr = e, e = D;
                    return Mr[u] = {
                        nextPos: Sr,
                        result: e
                    }, e;
                }
                function y() {
                    var e, r, n, i, o, s, u = 33 * Sr + 7, a = Mr[u];
                    if (a) return Sr = a.nextPos, a.result;
                    if (e = Sr, (r = x()) !== D) {
                        for (n = [], i = Sr, q() !== D ? (t.substr(Sr, 2) === je ? (o = je, Sr += 2) : (o = D, 
                        0 === Ir && c(ze)), o !== D && q() !== D && (s = x()) !== D ? (Tr = i, i = Le(r, s)) : (Sr = i, 
                        i = D)) : (Sr = i, i = D); i !== D; ) n.push(i), i = Sr, q() !== D ? (t.substr(Sr, 2) === je ? (o = je, 
                        Sr += 2) : (o = D, 0 === Ir && c(ze)), o !== D && q() !== D && (s = x()) !== D ? (Tr = i, 
                        i = Le(r, s)) : (Sr = i, i = D)) : (Sr = i, i = D);
                        n !== D ? (Tr = e, e = r = Ne(r, n)) : (Sr = e, e = D);
                    } else Sr = e, e = D;
                    return Mr[u] = {
                        nextPos: Sr,
                        result: e
                    }, e;
                }
                function x() {
                    var e, r, n, i, o, s, u = 33 * Sr + 8, a = Mr[u];
                    if (a) return Sr = a.nextPos, a.result;
                    if (e = Sr, (r = b()) !== D) {
                        for (n = [], i = Sr, q() !== D ? (t.substr(Sr, 3) === Se ? (o = Se, Sr += 3) : (o = D, 
                        0 === Ir && c(Te)), o === D && (t.substr(Sr, 3) === Be ? (o = Be, Sr += 3) : (o = D, 
                        0 === Ir && c(Fe)), o === D && (t.substr(Sr, 2) === Oe ? (o = Oe, Sr += 2) : (o = D, 
                        0 === Ir && c(Ie)), o === D && (t.substr(Sr, 2) === Me ? (o = Me, Sr += 2) : (o = D, 
                        0 === Ir && c(Re))))), o !== D && q() !== D && (s = b()) !== D ? (Tr = i, i = _e(r, o, s)) : (Sr = i, 
                        i = D)) : (Sr = i, i = D); i !== D; ) n.push(i), i = Sr, q() !== D ? (t.substr(Sr, 3) === Se ? (o = Se, 
                        Sr += 3) : (o = D, 0 === Ir && c(Te)), o === D && (t.substr(Sr, 3) === Be ? (o = Be, 
                        Sr += 3) : (o = D, 0 === Ir && c(Fe)), o === D && (t.substr(Sr, 2) === Oe ? (o = Oe, 
                        Sr += 2) : (o = D, 0 === Ir && c(Ie)), o === D && (t.substr(Sr, 2) === Me ? (o = Me, 
                        Sr += 2) : (o = D, 0 === Ir && c(Re))))), o !== D && q() !== D && (s = b()) !== D ? (Tr = i, 
                        i = _e(r, o, s)) : (Sr = i, i = D)) : (Sr = i, i = D);
                        n !== D ? (Tr = e, e = r = qe(r, n)) : (Sr = e, e = D);
                    } else Sr = e, e = D;
                    return Mr[u] = {
                        nextPos: Sr,
                        result: e
                    }, e;
                }
                function b() {
                    var e, r, n, i, o, s, u = 33 * Sr + 9, a = Mr[u];
                    if (a) return Sr = a.nextPos, a.result;
                    if (e = Sr, (r = g()) !== D) {
                        for (n = [], i = Sr, q() !== D ? (t.substr(Sr, 2) === Ue ? (o = Ue, Sr += 2) : (o = D, 
                        0 === Ir && c(Ve)), o === D && (t.substr(Sr, 2) === De ? (o = De, Sr += 2) : (o = D, 
                        0 === Ir && c(He)), o === D && (60 === t.charCodeAt(Sr) ? (o = Je, Sr++) : (o = D, 
                        0 === Ir && c(We)), o === D && (62 === t.charCodeAt(Sr) ? (o = Ge, Sr++) : (o = D, 
                        0 === Ir && c(Ke))))), o !== D && q() !== D && (s = g()) !== D ? (Tr = i, i = _e(r, o, s)) : (Sr = i, 
                        i = D)) : (Sr = i, i = D); i !== D; ) n.push(i), i = Sr, q() !== D ? (t.substr(Sr, 2) === Ue ? (o = Ue, 
                        Sr += 2) : (o = D, 0 === Ir && c(Ve)), o === D && (t.substr(Sr, 2) === De ? (o = De, 
                        Sr += 2) : (o = D, 0 === Ir && c(He)), o === D && (60 === t.charCodeAt(Sr) ? (o = Je, 
                        Sr++) : (o = D, 0 === Ir && c(We)), o === D && (62 === t.charCodeAt(Sr) ? (o = Ge, 
                        Sr++) : (o = D, 0 === Ir && c(Ke))))), o !== D && q() !== D && (s = g()) !== D ? (Tr = i, 
                        i = _e(r, o, s)) : (Sr = i, i = D)) : (Sr = i, i = D);
                        n !== D ? (Tr = e, e = r = qe(r, n)) : (Sr = e, e = D);
                    } else Sr = e, e = D;
                    return Mr[u] = {
                        nextPos: Sr,
                        result: e
                    }, e;
                }
                function g() {
                    var e, r, n, i, o, s, u = 33 * Sr + 10, a = Mr[u];
                    if (a) return Sr = a.nextPos, a.result;
                    if (e = Sr, (r = A()) !== D) {
                        for (n = [], i = Sr, q() !== D ? (Qe.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = D, 
                        0 === Ir && c(Xe)), o !== D && q() !== D && (s = A()) !== D ? (Tr = i, i = _e(r, o, s)) : (Sr = i, 
                        i = D)) : (Sr = i, i = D); i !== D; ) n.push(i), i = Sr, q() !== D ? (Qe.test(t.charAt(Sr)) ? (o = t.charAt(Sr), 
                        Sr++) : (o = D, 0 === Ir && c(Xe)), o !== D && q() !== D && (s = A()) !== D ? (Tr = i, 
                        i = _e(r, o, s)) : (Sr = i, i = D)) : (Sr = i, i = D);
                        n !== D ? (Tr = e, e = r = qe(r, n)) : (Sr = e, e = D);
                    } else Sr = e, e = D;
                    return Mr[u] = {
                        nextPos: Sr,
                        result: e
                    }, e;
                }
                function A() {
                    var e, r, n, i, o, s, u = 33 * Sr + 11, a = Mr[u];
                    if (a) return Sr = a.nextPos, a.result;
                    if (e = Sr, (r = k()) !== D) {
                        for (n = [], i = Sr, q() !== D ? (Ye.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = D, 
                        0 === Ir && c(Ze)), o !== D && q() !== D && (s = k()) !== D ? (Tr = i, i = _e(r, o, s)) : (Sr = i, 
                        i = D)) : (Sr = i, i = D); i !== D; ) n.push(i), i = Sr, q() !== D ? (Ye.test(t.charAt(Sr)) ? (o = t.charAt(Sr), 
                        Sr++) : (o = D, 0 === Ir && c(Ze)), o !== D && q() !== D && (s = k()) !== D ? (Tr = i, 
                        i = _e(r, o, s)) : (Sr = i, i = D)) : (Sr = i, i = D);
                        n !== D ? (Tr = e, e = r = qe(r, n)) : (Sr = e, e = D);
                    } else Sr = e, e = D;
                    return Mr[u] = {
                        nextPos: Sr,
                        result: e
                    }, e;
                }
                function k() {
                    var e, r, n, i = 33 * Sr + 12, o = Mr[i];
                    return o ? (Sr = o.nextPos, o.result) : ((e = P()) === D && (e = Sr, t.substr(Sr, 2) === et ? (r = et, 
                    Sr += 2) : (r = D, 0 === Ir && c(tt)), r === D && (t.substr(Sr, 2) === rt ? (r = rt, 
                    Sr += 2) : (r = D, 0 === Ir && c(nt)), r === D && (it.test(t.charAt(Sr)) ? (r = t.charAt(Sr), 
                    Sr++) : (r = D, 0 === Ir && c(ot)))), r !== D && q() !== D && (n = k()) !== D ? (Tr = e, 
                    e = r = st(r, n)) : (Sr = e, e = D)), Mr[i] = {
                        nextPos: Sr,
                        result: e
                    }, e);
                }
                function P() {
                    var e, r, n, i = 33 * Sr + 13, o = Mr[i];
                    return o ? (Sr = o.nextPos, o.result) : (e = Sr, (r = h()) !== D && q() !== D ? (t.substr(Sr, 2) === et ? (n = et, 
                    Sr += 2) : (n = D, 0 === Ir && c(tt)), n === D && (t.substr(Sr, 2) === rt ? (n = rt, 
                    Sr += 2) : (n = D, 0 === Ir && c(nt))), n !== D ? (Tr = e, e = r = ut(r, n)) : (Sr = e, 
                    e = D)) : (Sr = e, e = D), e === D && (e = h()), Mr[i] = {
                        nextPos: Sr,
                        result: e
                    }, e);
                }
                function C() {
                    var e, t, r, n, i = 33 * Sr + 14, o = Mr[i];
                    return o ? (Sr = o.nextPos, o.result) : (e = Sr, t = Sr, (r = w()) !== D && q() !== D && (n = N()) !== D ? (Tr = t, 
                    t = r = at(r, n)) : (Sr = t, t = D), t !== D && (r = E()) !== D ? (Tr = e, e = t = ct(t, r)) : (Sr = e, 
                    e = D), Mr[i] = {
                        nextPos: Sr,
                        result: e
                    }, e);
                }
                function w() {
                    var e, r, n, i, o, s = 33 * Sr + 15, u = Mr[s];
                    return u ? (Sr = u.nextPos, u.result) : (e = Sr, (r = $()) === D && (r = j()) === D && (r = F()) === D && (r = z()) === D && (r = S()) === D && (r = Sr, 
                    40 === t.charCodeAt(Sr) ? (n = lt, Sr++) : (n = D, 0 === Ir && c(ft)), n !== D && q() !== D && (i = p()) !== D && q() !== D ? (41 === t.charCodeAt(Sr) ? (o = dt, 
                    Sr++) : (o = D, 0 === Ir && c(pt)), o !== D ? (Tr = r, r = n = G(i)) : (Sr = r, 
                    r = D)) : (Sr = r, r = D)), r !== D && (n = E()) !== D ? (Tr = e, e = r = ht(r, n)) : (Sr = e, 
                    e = D), Mr[s] = {
                        nextPos: Sr,
                        result: e
                    }, e);
                }
                function E() {
                    var e, r, n, i, o, s = 33 * Sr + 16, u = Mr[s];
                    if (u) return Sr = u.nextPos, u.result;
                    for (e = [], r = Sr, q() !== D ? (91 === t.charCodeAt(Sr) ? (n = vt, Sr++) : (n = D, 
                    0 === Ir && c(mt)), n !== D && q() !== D && (i = p()) !== D && q() !== D ? (93 === t.charCodeAt(Sr) ? (o = yt, 
                    Sr++) : (o = D, 0 === Ir && c(xt)), o !== D ? (Tr = r, r = bt(i)) : (Sr = r, r = D)) : (Sr = r, 
                    r = D)) : (Sr = r, r = D), r === D && (r = Sr, q() !== D ? (46 === t.charCodeAt(Sr) ? (n = gt, 
                    Sr++) : (n = D, 0 === Ir && c(At)), n !== D && q() !== D && (i = j()) !== D ? (Tr = r, 
                    r = kt(i)) : (Sr = r, r = D)) : (Sr = r, r = D)); r !== D; ) e.push(r), r = Sr, 
                    q() !== D ? (91 === t.charCodeAt(Sr) ? (n = vt, Sr++) : (n = D, 0 === Ir && c(mt)), 
                    n !== D && q() !== D && (i = p()) !== D && q() !== D ? (93 === t.charCodeAt(Sr) ? (o = yt, 
                    Sr++) : (o = D, 0 === Ir && c(xt)), o !== D ? (Tr = r, r = bt(i)) : (Sr = r, r = D)) : (Sr = r, 
                    r = D)) : (Sr = r, r = D), r === D && (r = Sr, q() !== D ? (46 === t.charCodeAt(Sr) ? (n = gt, 
                    Sr++) : (n = D, 0 === Ir && c(At)), n !== D && q() !== D && (i = j()) !== D ? (Tr = r, 
                    r = kt(i)) : (Sr = r, r = D)) : (Sr = r, r = D));
                    return Mr[s] = {
                        nextPos: Sr,
                        result: e
                    }, e;
                }
                function $() {
                    var e, r, n, i, o, s = 33 * Sr + 17, u = Mr[s];
                    return u ? (Sr = u.nextPos, u.result) : (e = Sr, t.substr(Sr, 3) === Pt ? (r = Pt, 
                    Sr += 3) : (r = D, 0 === Ir && c(Ct)), r !== D && U() !== D && (n = w()) !== D ? (i = Sr, 
                    q() !== D && (o = N()) !== D ? (Tr = i, i = wt(n, o)) : (Sr = i, i = D), i === D && (i = null), 
                    i !== D ? (Tr = e, e = r = Et(n, i)) : (Sr = e, e = D)) : (Sr = e, e = D), Mr[s] = {
                        nextPos: Sr,
                        result: e
                    }, e);
                }
                function N() {
                    var e, r, n, i, o, s, u, a, l = 33 * Sr + 18, f = Mr[l];
                    if (f) return Sr = f.nextPos, f.result;
                    if (e = Sr, 40 === t.charCodeAt(Sr) ? (r = lt, Sr++) : (r = D, 0 === Ir && c(ft)), 
                    r !== D && q() !== D ? (41 === t.charCodeAt(Sr) ? (n = dt, Sr++) : (n = D, 0 === Ir && c(pt)), 
                    n !== D ? (Tr = e, e = r = $t()) : (Sr = e, e = D)) : (Sr = e, e = D), e === D) if (e = Sr, 
                    40 === t.charCodeAt(Sr) ? (r = lt, Sr++) : (r = D, 0 === Ir && c(ft)), r !== D) if (q() !== D) if ((n = p()) !== D) {
                        for (i = [], o = Sr, (s = q()) !== D ? (44 === t.charCodeAt(Sr) ? (u = Nt, Sr++) : (u = D, 
                        0 === Ir && c(jt)), u !== D && q() !== D && (a = p()) !== D ? (Tr = o, o = s = zt(n, a)) : (Sr = o, 
                        o = D)) : (Sr = o, o = D); o !== D; ) i.push(o), o = Sr, (s = q()) !== D ? (44 === t.charCodeAt(Sr) ? (u = Nt, 
                        Sr++) : (u = D, 0 === Ir && c(jt)), u !== D && q() !== D && (a = p()) !== D ? (Tr = o, 
                        o = s = zt(n, a)) : (Sr = o, o = D)) : (Sr = o, o = D);
                        i !== D && (o = q()) !== D ? (41 === t.charCodeAt(Sr) ? (s = dt, Sr++) : (s = D, 
                        0 === Ir && c(pt)), s !== D ? (Tr = e, e = r = Lt(n, i)) : (Sr = e, e = D)) : (Sr = e, 
                        e = D);
                    } else Sr = e, e = D; else Sr = e, e = D; else Sr = e, e = D;
                    return Mr[l] = {
                        nextPos: Sr,
                        result: e
                    }, e;
                }
                function j() {
                    var e, r, n, i, o, s = 33 * Sr + 19, u = Mr[s];
                    if (u) return Sr = u.nextPos, u.result;
                    if (Ir++, e = Sr, r = Sr, Ir++, n = O(), Ir--, n === D ? r = void 0 : (Sr = r, r = D), 
                    r !== D) if (Tt.test(t.charAt(Sr)) ? (n = t.charAt(Sr), Sr++) : (n = D, 0 === Ir && c(Bt)), 
                    n !== D) {
                        for (i = [], Ft.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = D, 0 === Ir && c(Ot)); o !== D; ) i.push(o), 
                        Ft.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = D, 0 === Ir && c(Ot));
                        i !== D ? (Tr = e, e = r = It(n, i)) : (Sr = e, e = D);
                    } else Sr = e, e = D; else Sr = e, e = D;
                    return Ir--, e === D && (r = D, 0 === Ir && c(St)), Mr[s] = {
                        nextPos: Sr,
                        result: e
                    }, e;
                }
                function z() {
                    var e, r, n, i, o = 33 * Sr + 20, s = Mr[o];
                    return s ? (Sr = s.nextPos, s.result) : (e = Sr, 91 === t.charCodeAt(Sr) ? (r = vt, 
                    Sr++) : (r = D, 0 === Ir && c(mt)), r !== D && q() !== D ? (93 === t.charCodeAt(Sr) ? (n = yt, 
                    Sr++) : (n = D, 0 === Ir && c(xt)), n !== D ? (Tr = e, e = r = Mt()) : (Sr = e, 
                    e = D)) : (Sr = e, e = D), e === D && (e = Sr, 91 === t.charCodeAt(Sr) ? (r = vt, 
                    Sr++) : (r = D, 0 === Ir && c(mt)), r !== D && q() !== D && (n = L()) !== D && q() !== D ? (93 === t.charCodeAt(Sr) ? (i = yt, 
                    Sr++) : (i = D, 0 === Ir && c(xt)), i !== D ? (Tr = e, e = r = Rt(n)) : (Sr = e, 
                    e = D)) : (Sr = e, e = D)), Mr[o] = {
                        nextPos: Sr,
                        result: e
                    }, e);
                }
                function L() {
                    var e, r, n, i, o, s, u = 33 * Sr + 21, a = Mr[u];
                    if (a) return Sr = a.nextPos, a.result;
                    if (e = Sr, (r = p()) !== D) {
                        for (n = [], i = Sr, q() !== D ? (44 === t.charCodeAt(Sr) ? (o = Nt, Sr++) : (o = D, 
                        0 === Ir && c(jt)), o !== D && q() !== D && (s = p()) !== D ? (Tr = i, i = _t(r, s)) : (Sr = i, 
                        i = D)) : (Sr = i, i = D); i !== D; ) n.push(i), i = Sr, q() !== D ? (44 === t.charCodeAt(Sr) ? (o = Nt, 
                        Sr++) : (o = D, 0 === Ir && c(jt)), o !== D && q() !== D && (s = p()) !== D ? (Tr = i, 
                        i = _t(r, s)) : (Sr = i, i = D)) : (Sr = i, i = D);
                        n !== D ? (Tr = e, e = r = Lt(r, n)) : (Sr = e, e = D);
                    } else Sr = e, e = D;
                    return Mr[u] = {
                        nextPos: Sr,
                        result: e
                    }, e;
                }
                function S() {
                    var e, r, n, i, o, s, u = 33 * Sr + 22, a = Mr[u];
                    return a ? (Sr = a.nextPos, a.result) : (e = Sr, 123 === t.charCodeAt(Sr) ? (r = qt, 
                    Sr++) : (r = D, 0 === Ir && c(Ut)), r !== D && q() !== D ? (125 === t.charCodeAt(Sr) ? (n = Vt, 
                    Sr++) : (n = D, 0 === Ir && c(Dt)), n !== D ? (Tr = e, e = r = Ht()) : (Sr = e, 
                    e = D)) : (Sr = e, e = D), e === D && (e = Sr, 123 === t.charCodeAt(Sr) ? (r = qt, 
                    Sr++) : (r = D, 0 === Ir && c(Ut)), r !== D && q() !== D && (n = T()) !== D && q() !== D ? (i = Sr, 
                    44 === t.charCodeAt(Sr) ? (o = Nt, Sr++) : (o = D, 0 === Ir && c(jt)), o !== D && (s = q()) !== D ? i = o = [ o, s ] : (Sr = i, 
                    i = D), i === D && (i = null), i !== D ? (125 === t.charCodeAt(Sr) ? (o = Vt, Sr++) : (o = D, 
                    0 === Ir && c(Dt)), o !== D ? (Tr = e, e = r = Jt(n)) : (Sr = e, e = D)) : (Sr = e, 
                    e = D)) : (Sr = e, e = D)), Mr[u] = {
                        nextPos: Sr,
                        result: e
                    }, e);
                }
                function T() {
                    var e, r, n, i, o, s, u = 33 * Sr + 23, a = Mr[u];
                    if (a) return Sr = a.nextPos, a.result;
                    if (e = Sr, (r = B()) !== D) {
                        for (n = [], i = Sr, q() !== D ? (44 === t.charCodeAt(Sr) ? (o = Nt, Sr++) : (o = D, 
                        0 === Ir && c(jt)), o !== D && q() !== D && (s = B()) !== D ? (Tr = i, i = Wt(r, s)) : (Sr = i, 
                        i = D)) : (Sr = i, i = D); i !== D; ) n.push(i), i = Sr, q() !== D ? (44 === t.charCodeAt(Sr) ? (o = Nt, 
                        Sr++) : (o = D, 0 === Ir && c(jt)), o !== D && q() !== D && (s = B()) !== D ? (Tr = i, 
                        i = Wt(r, s)) : (Sr = i, i = D)) : (Sr = i, i = D);
                        n !== D ? (Tr = e, e = r = Lt(r, n)) : (Sr = e, e = D);
                    } else Sr = e, e = D;
                    return Mr[u] = {
                        nextPos: Sr,
                        result: e
                    }, e;
                }
                function B() {
                    var e, r, n, i, o = 33 * Sr + 24, s = Mr[o];
                    return s ? (Sr = s.nextPos, s.result) : (e = Sr, (r = j()) === D && (r = _()) === D && (r = I()), 
                    r !== D && q() !== D ? (58 === t.charCodeAt(Sr) ? (n = ke, Sr++) : (n = D, 0 === Ir && c(Pe)), 
                    n !== D && q() !== D && (i = p()) !== D ? (Tr = e, e = r = Gt(r, i)) : (Sr = e, 
                    e = D)) : (Sr = e, e = D), Mr[o] = {
                        nextPos: Sr,
                        result: e
                    }, e);
                }
                function F() {
                    var e, t = 33 * Sr + 25, r = Mr[t];
                    return r ? (Sr = r.nextPos, r.result) : ((e = O()) === D && (e = I()) === D && (e = _()), 
                    Mr[t] = {
                        nextPos: Sr,
                        result: e
                    }, e);
                }
                function O() {
                    var e, r, n = 33 * Sr + 26, i = Mr[n];
                    return i ? (Sr = i.nextPos, i.result) : (e = Sr, t.substr(Sr, 4) === Kt ? (r = Kt, 
                    Sr += 4) : (r = D, 0 === Ir && c(Qt)), r !== D && (Tr = e, r = Xt()), (e = r) === D && (e = Sr, 
                    t.substr(Sr, 4) === Yt ? (r = Yt, Sr += 4) : (r = D, 0 === Ir && c(Zt)), r !== D && (Tr = e, 
                    r = er()), (e = r) === D && (e = Sr, t.substr(Sr, 5) === tr ? (r = tr, Sr += 5) : (r = D, 
                    0 === Ir && c(rr)), r !== D && (Tr = e, r = nr()), e = r)), Mr[n] = {
                        nextPos: Sr,
                        result: e
                    }, e);
                }
                function I() {
                    var e, r, n, i, o, s = 33 * Sr + 27, u = Mr[s];
                    if (u) return Sr = u.nextPos, u.result;
                    if (Ir++, e = Sr, (r = M()) !== D) if (46 === t.charCodeAt(Sr) ? (n = gt, Sr++) : (n = D, 
                    0 === Ir && c(At)), n !== D) {
                        for (i = [], or.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = D, 0 === Ir && c(sr)); o !== D; ) i.push(o), 
                        or.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = D, 0 === Ir && c(sr));
                        i !== D ? ((o = R()) === D && (o = null), o !== D ? (Tr = e, e = r = ur()) : (Sr = e, 
                        e = D)) : (Sr = e, e = D);
                    } else Sr = e, e = D; else Sr = e, e = D;
                    if (e === D) {
                        if (e = Sr, 46 === t.charCodeAt(Sr) ? (r = gt, Sr++) : (r = D, 0 === Ir && c(At)), 
                        r !== D) {
                            if (n = [], or.test(t.charAt(Sr)) ? (i = t.charAt(Sr), Sr++) : (i = D, 0 === Ir && c(sr)), 
                            i !== D) for (;i !== D; ) n.push(i), or.test(t.charAt(Sr)) ? (i = t.charAt(Sr), 
                            Sr++) : (i = D, 0 === Ir && c(sr)); else n = D;
                            n !== D ? ((i = R()) === D && (i = null), i !== D ? (Tr = e, e = r = ur()) : (Sr = e, 
                            e = D)) : (Sr = e, e = D);
                        } else Sr = e, e = D;
                        e === D && (e = Sr, (r = M()) !== D ? ((n = R()) === D && (n = null), n !== D ? (Tr = e, 
                        e = r = ur()) : (Sr = e, e = D)) : (Sr = e, e = D));
                    }
                    return Ir--, e === D && (r = D, 0 === Ir && c(ir)), Mr[s] = {
                        nextPos: Sr,
                        result: e
                    }, e;
                }
                function M() {
                    var e, r, n, i, o = 33 * Sr + 28, s = Mr[o];
                    if (s) return Sr = s.nextPos, s.result;
                    if (48 === t.charCodeAt(Sr) ? (e = ar, Sr++) : (e = D, 0 === Ir && c(cr)), e === D) if (e = Sr, 
                    lr.test(t.charAt(Sr)) ? (r = t.charAt(Sr), Sr++) : (r = D, 0 === Ir && c(fr)), r !== D) {
                        for (n = [], or.test(t.charAt(Sr)) ? (i = t.charAt(Sr), Sr++) : (i = D, 0 === Ir && c(sr)); i !== D; ) n.push(i), 
                        or.test(t.charAt(Sr)) ? (i = t.charAt(Sr), Sr++) : (i = D, 0 === Ir && c(sr));
                        n !== D ? e = r = [ r, n ] : (Sr = e, e = D);
                    } else Sr = e, e = D;
                    return Mr[o] = {
                        nextPos: Sr,
                        result: e
                    }, e;
                }
                function R() {
                    var e, r, n, i, o, s = 33 * Sr + 29, u = Mr[s];
                    if (u) return Sr = u.nextPos, u.result;
                    if (e = Sr, t.substr(Sr, 1).toLowerCase() === dr ? (r = t.charAt(Sr), Sr++) : (r = D, 
                    0 === Ir && c(pr)), r !== D) if (Qe.test(t.charAt(Sr)) ? (n = t.charAt(Sr), Sr++) : (n = D, 
                    0 === Ir && c(Xe)), n === D && (n = null), n !== D) {
                        if (i = [], or.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = D, 0 === Ir && c(sr)), 
                        o !== D) for (;o !== D; ) i.push(o), or.test(t.charAt(Sr)) ? (o = t.charAt(Sr), 
                        Sr++) : (o = D, 0 === Ir && c(sr)); else i = D;
                        i !== D ? e = r = [ r, n, i ] : (Sr = e, e = D);
                    } else Sr = e, e = D; else Sr = e, e = D;
                    return Mr[s] = {
                        nextPos: Sr,
                        result: e
                    }, e;
                }
                function _() {
                    var e, r, n, i, o, s = 33 * Sr + 30, u = Mr[s];
                    if (u) return Sr = u.nextPos, u.result;
                    if (Ir++, e = Sr, 34 === t.charCodeAt(Sr) ? (r = vr, Sr++) : (r = D, 0 === Ir && c(mr)), 
                    r !== D) {
                        for (n = [], i = Sr, t.substr(Sr, 2) === yr ? (o = yr, Sr += 2) : (o = D, 0 === Ir && c(xr)), 
                        o !== D && (Tr = i, o = br()), (i = o) === D && (gr.test(t.charAt(Sr)) ? (i = t.charAt(Sr), 
                        Sr++) : (i = D, 0 === Ir && c(Ar))); i !== D; ) n.push(i), i = Sr, t.substr(Sr, 2) === yr ? (o = yr, 
                        Sr += 2) : (o = D, 0 === Ir && c(xr)), o !== D && (Tr = i, o = br()), (i = o) === D && (gr.test(t.charAt(Sr)) ? (i = t.charAt(Sr), 
                        Sr++) : (i = D, 0 === Ir && c(Ar)));
                        n !== D ? (34 === t.charCodeAt(Sr) ? (i = vr, Sr++) : (i = D, 0 === Ir && c(mr)), 
                        i !== D ? (Tr = e, e = r = kr(n)) : (Sr = e, e = D)) : (Sr = e, e = D);
                    } else Sr = e, e = D;
                    if (e === D) if (e = Sr, 39 === t.charCodeAt(Sr) ? (r = Pr, Sr++) : (r = D, 0 === Ir && c(Cr)), 
                    r !== D) {
                        for (n = [], i = Sr, t.substr(Sr, 2) === wr ? (o = wr, Sr += 2) : (o = D, 0 === Ir && c(Er)), 
                        o !== D && (Tr = i, o = $r()), (i = o) === D && (Nr.test(t.charAt(Sr)) ? (i = t.charAt(Sr), 
                        Sr++) : (i = D, 0 === Ir && c(jr))); i !== D; ) n.push(i), i = Sr, t.substr(Sr, 2) === wr ? (o = wr, 
                        Sr += 2) : (o = D, 0 === Ir && c(Er)), o !== D && (Tr = i, o = $r()), (i = o) === D && (Nr.test(t.charAt(Sr)) ? (i = t.charAt(Sr), 
                        Sr++) : (i = D, 0 === Ir && c(jr)));
                        n !== D ? (39 === t.charCodeAt(Sr) ? (i = Pr, Sr++) : (i = D, 0 === Ir && c(Cr)), 
                        i !== D ? (Tr = e, e = r = kr(n)) : (Sr = e, e = D)) : (Sr = e, e = D);
                    } else Sr = e, e = D;
                    return Ir--, e === D && (r = D, 0 === Ir && c(hr)), Mr[s] = {
                        nextPos: Sr,
                        result: e
                    }, e;
                }
                function q() {
                    var e, t = 33 * Sr + 31, r = Mr[t];
                    return r ? (Sr = r.nextPos, r.result) : ((e = U()) === D && (e = null), Mr[t] = {
                        nextPos: Sr,
                        result: e
                    }, e);
                }
                function U() {
                    var e, r, n = 33 * Sr + 32, i = Mr[n];
                    if (i) return Sr = i.nextPos, i.result;
                    if (e = [], zr.test(t.charAt(Sr)) ? (r = t.charAt(Sr), Sr++) : (r = D, 0 === Ir && c(Lr)), 
                    r !== D) for (;r !== D; ) e.push(r), zr.test(t.charAt(Sr)) ? (r = t.charAt(Sr), 
                    Sr++) : (r = D, 0 === Ir && c(Lr)); else e = D;
                    return Mr[n] = {
                        nextPos: Sr,
                        result: e
                    }, e;
                }
                r = void 0 !== r ? r : {};
                var V, D = {}, H = {
                    Text: l,
                    Expression: p
                }, J = l, W = function(e) {
                    return e.reduce(function(e, t) {
                        return "string" == typeof t && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t : e.push(t), 
                        e;
                    }, []);
                }, G = function(e) {
                    return e;
                }, K = {
                    type: "any"
                }, Q = function(e) {
                    return e;
                }, X = "{{{", Y = i("{{{", !1), Z = "}}}", ee = i("}}}", !1), te = function(e) {
                    return {
                        html: !0,
                        expression: e
                    };
                }, re = "{{", ne = i("{{", !1), ie = "}}", oe = i("}}", !1), se = function(e) {
                    return {
                        html: !1,
                        expression: e
                    };
                }, ue = "=", ae = i("=", !1), ce = "*=", le = i("*=", !1), fe = "/=", de = i("/=", !1), pe = "%=", he = i("%=", !1), ve = "+=", me = i("+=", !1), ye = "-=", xe = i("-=", !1), be = function(e, t, r) {
                    return {
                        type: "AssignmentExpression",
                        operator: t,
                        left: e,
                        right: r
                    };
                }, ge = "?", Ae = i("?", !1), ke = ":", Pe = i(":", !1), Ce = function(e, t, r) {
                    return {
                        type: "ConditionalExpression",
                        test: e,
                        consequent: t,
                        alternate: r
                    };
                }, we = "||", Ee = i("||", !1), $e = function(e, t) {
                    return {
                        operator: "||",
                        arg: t
                    };
                }, Ne = function(e, t) {
                    return Rr("LogicalExpression", e, t);
                }, je = "&&", ze = i("&&", !1), Le = function(e, t) {
                    return {
                        operator: "&&",
                        arg: t
                    };
                }, Se = "===", Te = i("===", !1), Be = "!==", Fe = i("!==", !1), Oe = "==", Ie = i("==", !1), Me = "!=", Re = i("!=", !1), _e = function(e, t, r) {
                    return {
                        operator: t,
                        arg: r
                    };
                }, qe = function(e, t) {
                    return Rr("BinaryExpression", e, t);
                }, Ue = "<=", Ve = i("<=", !1), De = ">=", He = i(">=", !1), Je = "<", We = i("<", !1), Ge = ">", Ke = i(">", !1), Qe = /^[+\-]/, Xe = o([ "+", "-" ], !1, !1), Ye = /^[*\/%]/, Ze = o([ "*", "/", "%" ], !1, !1), et = "++", tt = i("++", !1), rt = "--", nt = i("--", !1), it = /^[+!\-]/, ot = o([ "+", "!", "-" ], !1, !1), st = function(e, t) {
                    return {
                        type: "++" === e || "--" === e ? "UpdateExpression" : "UnaryExpression",
                        operator: e,
                        argument: t,
                        prefix: !0
                    };
                }, ut = function(e, t) {
                    return {
                        type: "UpdateExpression",
                        operator: t,
                        argument: e,
                        prefix: !1
                    };
                }, at = function(e, t) {
                    return {
                        type: "CallExpression",
                        callee: e,
                        arguments: t
                    };
                }, ct = function(e, t) {
                    return t.reduce(function(e, t) {
                        return {
                            type: "MemberExpression",
                            property: t,
                            object: e
                        };
                    }, e);
                }, lt = "(", ft = i("(", !1), dt = ")", pt = i(")", !1), ht = function(e, t) {
                    return t.reduce(function(e, t) {
                        return {
                            type: "MemberExpression",
                            object: e,
                            property: t
                        };
                    }, e);
                }, vt = "[", mt = i("[", !1), yt = "]", xt = i("]", !1), bt = function(e) {
                    return e;
                }, gt = ".", At = i(".", !1), kt = function(e) {
                    return {
                        type: "Identifier",
                        name: e.name
                    };
                }, Pt = "new", Ct = i("new", !1), wt = function(e, t) {
                    return t;
                }, Et = function(e, t) {
                    return {
                        type: "NewExpression",
                        callee: e,
                        arguments: t || []
                    };
                }, $t = function() {
                    return [];
                }, Nt = ",", jt = i(",", !1), zt = function(e, t) {
                    return t;
                }, Lt = function(e, t) {
                    return [ e ].concat(t);
                }, St = s("identifier"), Tt = /^[a-z$_]/i, Bt = o([ [ "a", "z" ], "$", "_" ], !1, !0), Ft = /^[a-z$_0-9]/i, Ot = o([ [ "a", "z" ], "$", "_", [ "0", "9" ] ], !1, !0), It = function(e, t) {
                    return {
                        type: "Identifier",
                        name: e + t.join("")
                    };
                }, Mt = function() {
                    return {
                        type: "ArrayExpression",
                        elements: []
                    };
                }, Rt = function(e) {
                    return {
                        type: "ArrayExpression",
                        elements: e
                    };
                }, _t = function(e, t) {
                    return t;
                }, qt = "{", Ut = i("{", !1), Vt = "}", Dt = i("}", !1), Ht = function() {
                    return {
                        type: "ObjectExpression",
                        properties: []
                    };
                }, Jt = function(e) {
                    return {
                        type: "ObjectExpression",
                        properties: e
                    };
                }, Wt = function(e, t) {
                    return t;
                }, Gt = function(e, t) {
                    return {
                        type: "Property",
                        key: e,
                        value: t
                    };
                }, Kt = "null", Qt = i("null", !1), Xt = function() {
                    return {
                        type: "Literal",
                        value: null
                    };
                }, Yt = "true", Zt = i("true", !1), er = function() {
                    return {
                        type: "Literal",
                        value: !0
                    };
                }, tr = "false", rr = i("false", !1), nr = function() {
                    return {
                        type: "Literal",
                        value: !1
                    };
                }, ir = s("number"), or = /^[0-9]/, sr = o([ [ "0", "9" ] ], !1, !1), ur = function() {
                    return {
                        type: "Literal",
                        value: parseFloat(n())
                    };
                }, ar = "0", cr = i("0", !1), lr = /^[1-9]/, fr = o([ [ "1", "9" ] ], !1, !1), dr = "e", pr = i("e", !0), hr = s("string"), vr = '"', mr = i('"', !1), yr = '\\"', xr = i('\\"', !1), br = function() {
                    return '"';
                }, gr = /^[^"]/, Ar = o([ '"' ], !0, !1), kr = function(e) {
                    return {
                        type: "Literal",
                        value: e.join("")
                    };
                }, Pr = "'", Cr = i("'", !1), wr = "\\'", Er = i("\\'", !1), $r = function() {
                    return "'";
                }, Nr = /^[^'']/, jr = o([ "'", "'" ], !0, !1), zr = /^[\t ]/, Lr = o([ "\t", " " ], !1, !1), Sr = 0, Tr = 0, Br = [ {
                    line: 1,
                    column: 1
                } ], Fr = 0, Or = [], Ir = 0, Mr = {};
                if ("startRule" in r) {
                    if (!(r.startRule in H)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
                    J = H[r.startRule];
                }
                var Rr = function(e, t, r) {
                    return 0 === r.length ? t : r.reduce(function(t, r) {
                        return {
                            type: e,
                            operator: r.operator,
                            left: t,
                            right: r.arg
                        };
                    }, t);
                };
                if ((V = J()) !== D && Sr === t.length) return V;
                throw V !== D && Sr < t.length && c({
                    type: "end"
                }), function(t, r, n) {
                    return new e(e.buildMessage(t, r), t, r, n);
                }(Or, Fr < t.length ? t.charAt(Fr) : null, Fr < t.length ? a(Fr, Fr + 1) : a(Fr, Fr));
            }
        };
    }(), o = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Expression";
        return i.parse(e, {
            startRule: t
        });
    }, s = function t(r, n) {
        var i = void 0, o = void 0, s = r.type, u = r.operator;
        if ("Literal" === s) i = r.value; else if ("ArrayExpression" === s) i = r.elements.map(function(e) {
            return t(e, n).value;
        }); else if ("ObjectExpression" === s) i = Object.assign.apply(Object, [ {} ].concat(r.properties.map(function(e) {
            var r;
            return r = {}, r[e.key.name || e.key.value] = t(e.value, n).value, r;
        }))); else if ("Identifier" === s) {
            for (var a = n; a && void 0 === a[r.name]; ) a = a.$parent;
            a || (a = n), i = a[r.name], o = function(e) {
                return a[r.name] = e;
            };
        } else if ("MemberExpression" === s) {
            var c = t(r.object, n).value, l = "Identifier" === r.property.type ? r.property.name : t(r.property, n).value;
            i = void 0 !== c ? c[l] : void 0, o = function(e) {
                return c[l] = e;
            };
        } else if ("ConditionalExpression" === s) i = t(r.test, n).value ? t(r.consequent, n).value : t(r.alternate, n).value; else if ("UnaryExpression" === s || "UpdateExpression" === s) {
            var f = t(r.argument, n), d = f.value;
            i = "!" === u ? !d : "+" === u ? +d : "-" === u ? -d : "++" === u ? d + 1 : "--" === u ? d - 1 : null, 
            "UpdateExpression" === s && ((o = f.set) && (i = o(i)), r.prefix || (i += "++" === u ? -1 : 1));
        } else if ("BinaryExpression" === s || "LogicalExpression" === s || "AssignmentExpression" === s) {
            var p = t(r.left, n), h = p.value, v = t(r.right, n).value;
            i = "===" === u ? h === v : "!==" === u ? h !== v : "==" === u ? h == v : "!=" === u ? h != v : "<" === u ? h < v : ">" === u ? h > v : "<=" === u ? h <= v : ">=" === u ? h >= v : "&&" === u ? h && v : "||" === u ? h || v : "+" === u ? "string" == typeof (h + v) ? e(h) + e(v) : h + v : "-" === u ? h - v : "*" === u ? h * v : "/" === u ? h / v : "%" === u ? h % v : "*=" === u ? h * v : "/=" === u ? h / v : "%=" === u ? h % v : "+=" === u ? h + v : "-=" === u ? h - v : "=" === u ? v : null, 
            "AssignmentExpression" === s && (i = (o = p.set)(i));
        } else if ("CallExpression" === s || "NewExpression" === s) {
            var m = r.callee.object ? t(r.callee.object, n).value : n, y = t(r.callee, n).value, x = r.arguments.map(function(e) {
                return t(e, n).value;
            });
            i = y ? "CallExpression" === s ? y.apply(m, x) : new (y.bind.apply(y, x))() : void 0;
        }
        return {
            value: i,
            set: o
        };
    }, u = {
        prefix: "z-",
        directives: [],
        inlineParser: void 0
    }, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, c = (function() {
        function e(e) {
            this.value = e;
        }
        function t(t) {
            function r(i, o) {
                try {
                    var s = t[i](o), u = s.value;
                    u instanceof e ? Promise.resolve(u.value).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    }) : n(s.done ? "return" : "normal", s.value);
                } catch (e) {
                    n("throw", e);
                }
            }
            function n(e, t) {
                switch (e) {
                  case "return":
                    i.resolve({
                        value: t,
                        done: !0
                    });
                    break;

                  case "throw":
                    i.reject(t);
                    break;

                  default:
                    i.resolve({
                        value: t,
                        done: !1
                    });
                }
                (i = i.next) ? r(i.key, i.arg) : o = null;
            }
            var i, o;
            this._invoke = function(e, t) {
                return new Promise(function(n, s) {
                    var u = {
                        key: e,
                        arg: t,
                        resolve: n,
                        reject: s,
                        next: null
                    };
                    o ? o = o.next = u : (i = o = u, r(e, t));
                });
            }, "function" != typeof t.return && (this.return = void 0);
        }
        "function" == typeof Symbol && Symbol.asyncIterator && (t.prototype[Symbol.asyncIterator] = function() {
            return this;
        }), t.prototype.next = function(e) {
            return this._invoke("next", e);
        }, t.prototype.throw = function(e) {
            return this._invoke("throw", e);
        }, t.prototype.return = function(e) {
            return this._invoke("return", e);
        };
    }(), function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }), l = function(e) {
        return {
            name: e.name,
            value: e.value
        };
    }, f = function(e, t, r) {
        e.binds.forEach(function(r) {
            return d(e, t, r);
        }), e.children.forEach(function(e) {
            return e[t + "Binds"](r);
        });
    }, d = function(e, t, r) {
        if (r.directive[t]) {
            var n = "initialize" === t ? [ e.node ].concat(r.args) : [ e.scope, e.node, function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.ast;
                return s(t, e.scope).value;
            } ].concat(r.args);
            r.directive[t].apply(r, n);
        }
    }, p = function(e, t, r) {
        return e instanceof h ? e : ("string" == typeof e ? e = document.querySelector(e) : e.jquery && (e = e[0]), 
        new h(e, t, r));
    }, h = function() {
        function e(t, r) {
            var n = this, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (c(this, e), this.node = t, this.children = [], this.binds = [], this.type = t.nodeType, 
            t.vnode && !r) i ? (this.parent = t.vnode, t.vnode = this, this.type = this.parent.type, 
            this.children = this.parent.children, this.binds = this.parent.binds, this.parent.children = [], 
            this.parent.binds = []) : (t.vnode.parent = this, this.pointer = t.vnode); else if (r) {
                t.vnode = this, this.blocked = r.blocked, this.type = r.type, r.binds.forEach(function(e) {
                    n.bind({
                        ast: e.ast,
                        directive: e.directive,
                        args: e.args,
                        key: e.key,
                        template: e.template
                    });
                }), r.attributes && (this.attributes = r.attributes.map(l), this.removedAttrs = r.removedAttrs.map(l));
                var o = Array.from(t.childNodes).filter(function(e) {
                    return 1 === e.nodeType || 3 === e.nodeType;
                });
                r.children.forEach(function(e) {
                    n.children.push(p(e.fragment ? t : o.shift(), e));
                });
            } else t.vnode = this, this.initialize();
        }
        return e.prototype.initialize = function() {
            var e = this, t = this.node;
            if (this.type = t.nodeType, 1 === this.type) this.tag = t.tagName, this.attributes = Array.from(t.attributes).map(l), 
            this.removedAttrs = [], u.directives.forEach(function(r) {
                if (!e.blocked) if (r.tag) {
                    var n = e.tag.match(new RegExp("^" + r.tag.replace("{prefix}", u.prefix) + "$", "i"));
                    n && e.bind({
                        directive: r,
                        args: n
                    });
                } else r.attribute && (e.attributes = e.attributes.filter(function(n) {
                    if (!e.blocked) {
                        var i = n.name.match(new RegExp("^" + r.attribute.replace("{prefix}", u.prefix) + "$", "i"));
                        if (!i) return !0;
                        var s = o(n.value || "undefined");
                        e.removedAttrs.push(l(n)), t.removeAttribute(n.name), e.bind({
                            directive: r,
                            ast: s,
                            args: i
                        });
                    }
                }));
            }), !this.blocked && t.childNodes && Array.from(t.childNodes).filter(function(e) {
                return 1 === e.nodeType || 3 === e.nodeType;
            }).map(function(t) {
                return e.children.push(p(t));
            }); else if (3 === this.type && t.nodeValue.includes("{{")) {
                var r = o(t.nodeValue, "Text");
                if (1 === r.length) {
                    if ("string" != typeof r[0]) {
                        if (r[0].html) {
                            var n = t;
                            t = this.node = document.createElement("span"), n.parentNode.replaceChild(t, n);
                        } else t.textContent = "";
                        this.bind({
                            directive: u.inlineParser,
                            ast: r[0].expression,
                            args: [ "", r[0].html ? "html" : "text" ]
                        });
                    }
                } else {
                    var i = document.createDocumentFragment();
                    this.fragment = !0, r.forEach(function(t) {
                        var r = "string" == typeof t ? document.createTextNode(t) : t.html ? document.createElement("span") : document.createTextNode(""), n = p(r);
                        "string" != typeof t && n.bind({
                            directive: u.inlineParser,
                            ast: t.expression,
                            args: [ "", t.html ? "html" : "text" ]
                        }), i.appendChild(r), e.children.push(n);
                    }), t.parentNode.replaceChild(i, t);
                }
            }
        }, e.prototype.bind = function(e) {
            if (e.directive.block && (this.blocked = !0), e.directive.template) {
                var t = e.directive.template.clone();
                Array.from(this.node.attributes).map(function(e) {
                    t.node.setAttribute(e.name, e.value);
                }), this.node.parentNode.replaceChild(t.node, this.node), this.node = t.node, this.node.vnode = this, 
                this.binds = this.binds.concat(t.binds), this.type = t.type, this.children = t.children;
            } else this.binds.push(e);
            d(this, "initialize", e);
        }, e.prototype.clone = function() {
            return p(this.node.cloneNode(!0), this);
        }, e.prototype.createBinds = function(e) {
            this.scope = e, f(this, "create", e);
        }, e.prototype.updateBinds = function() {
            f(this, "update"), this.pointer && this.pointer.updateBinds();
        }, e.prototype.destroyBinds = function() {
            var e = this;
            f(this, "destroy"), this.removedAttrs && this.removedAttrs.forEach(function(t) {
                return e.node.setAttribute(t.name, t.value);
            });
        }, e;
    }(), v = function(e) {
        if (e.inline && (u.inlineParser = e), e.template) {
            e.block = !0;
            var t = document.createElement("span");
            t.innerHTML = e.template, 1 === t.childNodes.length && (t = t.childNodes[0]), e.template = p(t);
        }
        e.order || (e.order = 100);
        var r = u.directives.findIndex(function(t) {
            return e.order < t.order;
        });
        return u.directives.splice(-1 === r ? u.directives.length : r, 0, e), e;
    }, m = 0, y = void 0, x = function(e, t) {
        e[t] && e[t].forEach(function(e) {
            return e();
        });
    }, b = function e(t, r) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        if (!n.includes(r)) return n = n.concat([ r ]), new Proxy(r, {
            get: function(e, r, n) {
                var i = Reflect.get(e, r, n);
                return e instanceof Date && "string" == typeof r ? (r.startsWith("set") && t.$(!0), 
                i.bind(e)) : e instanceof Array || "function" != typeof i ? i : i.bind(e);
            },
            set: function(r, i, o, s) {
                y || ("object" === (void 0 === o ? "undefined" : a(o)) && null !== o && (o = e(t, o, n)), 
                t.$(!0)), y = !0;
                var u = Reflect.set(r, i, o, s);
                return y = !1, u;
            },
            deleteProperty: function(e, r) {
                y || t.$(!0), y = !0;
                var n = Reflect.deleteProperty(e, r);
                return y = !1, n;
            }
        });
    }, g = function e(r, i, u) {
        var a = p(r, null, !0), c = {}, l = [], f = void 0, d = Object.assign({
            $id: m++,
            $: function(e) {
                if (a) return e ? f || (f = n(function() {
                    return d.$();
                })) : (f && (f = f()), a.updateBinds(d), x(c, "update"), l.forEach(function(e) {
                    var t = s(e.ast, d).value;
                    t !== e.val && (e.val = t, e.cb(t));
                })), d;
            },
            $destroy: function() {
                return a.destroyBinds(d), x(c, "destroy"), a = void 0, d;
            },
            $on: function(e, t) {
                return c[e] = [ t ].concat(c[e] || []), d;
            },
            $off: function(e, r) {
                return t(c[e], r), d;
            },
            $watch: function(e, t) {
                return l.push({
                    expr: e,
                    ast: o(e),
                    cb: t
                }), d;
            },
            $unwatch: function(e, r) {
                var n = l.find(function(t) {
                    return t.expr === e && t.cb === r;
                });
                return t(l, n), d;
            },
            get $parent() {
                return u || a.parent && a.parent.scope || e.root;
            }
        }, i);
        return a.createBinds(d), d.$(!0), b(d, d);
    };
    Object.assign(g, {
        version: "0.4.4",
        parse: o,
        evaluate: s,
        directive: v,
        root: {
            $parent: "undefined" != typeof global ? global : window,
            number: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                return Number(e).toFixed(t);
            },
            percent: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                return Number(100 * e).toFixed(t) + "%";
            }
        }
    }), Object.defineProperty(g, "prefix", {
        get: function() {
            return u.prefix;
        },
        set: function(e) {
            u.prefix = e;
        }
    });
    var A = [ "selected", "checked", "disabled", "readonly", "multiple", "ismap", "defer", "noresize" ];
    return [ {
        attribute: "{prefix}(text|html)",
        block: !0,
        inline: !0,
        initialize: function(e) {
            e.innerHTML = "";
        },
        update: function(t, r, n, i, o) {
            var s = e(n());
            s !== this.value && ("html" === o ? r.innerHTML = s : r.textContent = s, this.value = s);
        }
    }, {
        attribute: "{prefix}show",
        update: function(e, t, r) {
            var n = r() ? "" : "none";
            n !== this.value && (t.style.display = this.value = n);
        }
    }, {
        attribute: "{prefix}(?:attr-(.+)|(" + [ "accept", "accept-charset", "accesskey", "action", "align", "alt", "async", "autocomplete", "autofocus", "autoplay", "autosave", "buffered", "challenge", "charset", "checked", "cite", "class", "code", "codebase", "cols", "colspan", "content", "contenteditable", "contextmenu", "controls", "coords", "crossorigin", "data", "data-*", "datetime", "default", "defer", "dir", "dirname", "disabled", "download", "draggable", "dropzone", "enctype", "for", "form", "formaction", "headers", "hidden", "high", "href", "hreflang", "http-equiv", "icon", "id", "integrity", "ismap", "itemprop", "keytype", "kind", "label", "lang", "language", "list", "loop", "low", "manifest", "max", "maxlength", "minlength", "media", "method", "min", "multiple", "muted", "name", "novalidate", "open", "optimum", "pattern", "ping", "placeholder", "poster", "preload", "radiogroup", "readonly", "rel", "required", "reversed", "rows", "rowspan", "sandbox", "scope", "scoped", "seamless", "selected", "shape", "size", "sizes", "slot", "span", "spellcheck", "src", "srcdoc", "srclang", "srcset", "start", "step", "style", "summary", "tabindex", "target", "title", "type", "usemap", "value", "wrap" ].join("|") + "))",
        update: function(e, t, r, n, i, o) {
            i = i || o;
            var s = r();
            s !== this.value && (this.value = s, A.includes(i) && (s = s ? i : void 0), void 0 === s ? t.removeAttribute(i) : t.setAttribute(i, s));
        }
    }, {
        attribute: "{prefix}class-(.+)",
        update: function(e, t, r, n, i) {
            var o = r();
            o !== this.value && (this.value = o, t.classList.toggle(i, o));
        }
    }, {
        attribute: "{prefix}exist",
        order: 3,
        block: !0,
        initialize: function(e) {
            this.template = p(e.cloneNode(!0));
        },
        create: function(e, t, r, n) {
            this.marker = document.createComment(n), t.parentNode.replaceChild(this.marker, t);
        },
        update: function(e, t, r) {
            var n = !!r();
            n !== this.value && (n ? (this.vnode = this.template.clone(), this.marker.parentNode.insertBefore(this.vnode.node, this.marker), 
            this.view = g(this.vnode, void 0, e).$()) : this.view && (this.view.$destroy(), 
            this.marker.parentNode.removeChild(this.vnode.node), delete this.vnode, delete this.view), 
            this.value = n);
        }
    }, {
        attribute: "{prefix}(?:style-(.+)|(" + [ "align-.*", "all", "animation", "animation-.*", "backface-visibility", "background", "background-.*", "border", "border-.*", "bottom", "box-.*", "break-.*", "caption-side", "caret-color", "clear", "clip", "clip-path", "color", "column-.*", "columns", "content", "counter-.*", "cursor", "direction", "display", "empty-cells", "filter", "flex-.*", "float", "font", "font-.*", "grid", "grid-.*", "height", "hyphens", "image-.*", "ime-mode", "inline-size", "isolation", "justify-content", "left", "letter-spacing", "line-.*", "list-.*", "margin", "margin-.*", "mask", "mask-.*", "max-height", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "object-fit", "object-position", "offset-.*", "opacity", "order", "orphans", "outline", "outline-.*", "overflow", "overflow-.*", "padding", "padding-.*", "page-break-.*", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "scroll-.*", "shape-.*", "tab-size", "table-layout", "text-.*", "top", "touch-action", "transform", "transform-.*", "transition", "transition-.*", "unicode-bidi", "unset", "vertical-align", "visibility", "white-space", "widows", "width", "will-change", "word-.*", "writing-mode", "z-index" ].join("|") + "))",
        update: function(e, t, r, n, i, o) {
            var s = r();
            s !== this.value && (t.style[i || o] = this.value = s);
        }
    }, {
        attribute: "{prefix}model",
        block: !0,
        order: 3,
        create: function(e, t, n) {
            var i = this, s = t.tagName.toLowerCase(), a = (t.getAttribute("type") || "").toLowerCase();
            this.type = "checkbox" === a ? "checkbox" : "select" === s ? "select" : "radio" === a ? "radio" : [ "range", "number" ].includes(a) ? "number" : [ "date", "datetime-local", "time", "month", "week" ].includes(a) ? "date" : "text", 
            "radio" !== this.type || t.getAttribute("name") || t.setAttribute("name", r(e.$id + JSON.stringify(this.ast))), 
            this.getValue = function(e) {
                var t = e.getAttribute(u.prefix + "value");
                return t ? n(o(t)) : e.getAttribute("value");
            }, this.handler = function() {
                if ("radio" !== i.type || t.checked) {
                    var r = "checkbox" === i.type ? !!t.checked : "select" === i.type ? i.getValue(t.options[t.selectedIndex]) : "radio" === i.type ? i.getValue(t) : "number" === i.type ? Number(t.value) : "date" === i.type ? t.valueAsDate : t.value;
                    r !== i.value && (i.value = r, n({
                        type: "AssignmentExpression",
                        operator: "=",
                        left: i.ast,
                        right: {
                            type: "Literal",
                            value: r
                        }
                    }), e.$());
                }
            }, t.addEventListener("input", this.handler), t.addEventListener("change", this.handler), 
            "select" === this.type && (t.selectedIndex = -1);
        },
        update: function(t, r, n) {
            var i = this, o = n();
            if (o !== this.value) {
                if ("checkbox" === this.type) r.checked = !!o; else if ("select" === this.type) r.selectedIndex = Array.from(r.options).reduce(function(t, r, n) {
                    var s = i.getValue(r);
                    return r.setAttribute("value", e(s)), s === o ? n : t;
                }, -1); else if ("radio" === this.type) {
                    var s = this.getValue(r);
                    r.setAttribute("value", e(s)), r.checked = o === s;
                } else "number" === this.type ? r.value = Number(o) : "date" === this.type ? r.valueAsDate = new Date(o.getTime()) : r.value = e(o);
                this.value = o;
            }
        },
        destroy: function(e, t) {
            t.removeEventListener("input", this.handler), t.removeEventListener("change", this.handler);
        }
    }, {
        attribute: "{prefix}(.+)-in",
        order: 2,
        block: !0,
        initialize: function(e, t, r) {
            this.items = [];
            var n = e.getAttribute(u.prefix + "key");
            if (n) {
                var i = o(n);
                e.removeAttribute(u.prefix + "key"), this.key = function(e) {
                    var t;
                    return s(i, (t = {}, t[r] = e, t)).value;
                };
            } else this.key = function(e) {
                return JSON.stringify(e);
            };
            this.template = p(e.cloneNode(!0));
        },
        create: function(e, t, r, n) {
            this.marker = document.createComment(n), t.parentNode.replaceChild(this.marker, t);
        },
        update: function(e, r, n, i, o) {
            var s = this, u = n() || [], a = Object.keys(u).map(function(e) {
                return {
                    index: e,
                    computed: s.key(u[e]),
                    datum: u[e]
                };
            });
            [].concat(this.items).forEach(function(e) {
                e.key = s.key(e.datum), a.find(function(t) {
                    return t.computed === e.key;
                }) || (s.marker.parentNode.removeChild(e.node), e.view.$destroy(), t(s.items, e));
            }), a.forEach(function(r) {
                var n = s.items.find(function(e) {
                    return r.computed === e.key;
                });
                if (n) t(s.items, n), s.marker.parentNode.insertBefore(n.node, s.marker); else {
                    var i, u = s.template.clone();
                    n = {
                        key: r.computed,
                        datum: r.datum,
                        node: u.node
                    }, s.marker.parentNode.insertBefore(n.node, s.marker), n.view = g(u, (i = {}, i[o] = n.datum, 
                    i), e);
                }
                n.view.$index = r.index, n.view.$(), s.items.push(n);
            });
        }
    }, {
        attribute: "{prefix}(?:on-(.+)|(" + [ "load", "error", "focus", "blur", "click", "dblclick", "mouse.*", "keyup", "keydown", "keypress", "input", "change", "submit", "reset", "scroll", "resize", "drag.*", "drop" ].join("|") + "))",
        create: function(e, t, r, n, i, o) {
            this.handler = function(t) {
                e.$event = t, r(), e.$(), delete e.$event, "submit" === (i || o) && t.preventDefault();
            }, t.addEventListener(i || o, this.handler);
        },
        destroy: function(e, t, r, n, i, o) {
            t.removeEventListener(i || o, this.handler);
        }
    }, {
        attribute: "{prefix}skip",
        order: 1,
        block: !0
    }, {
        attribute: "{prefix}cloak",
        initialize: function(e) {
            e.display = "";
        }
    } ].forEach(v), g;
});
