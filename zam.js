!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.zam = t();
}(this, function() {
    "use strict";
    var e = function() {
        function e(e, t) {
            function r() {
                this.constructor = e;
            }
            r.prototype = t.prototype, e.prototype = new r();
        }
        function t(e, r, n, o) {
            this.message = e, this.expected = r, this.found = n, this.location = o, this.name = "SyntaxError", 
            "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, t);
        }
        function r(e, r) {
            function n() {
                return e.substring(Mr, Br);
            }
            function o(e, t) {
                return {
                    type: "literal",
                    text: e,
                    ignoreCase: t
                };
            }
            function u(e, t, r) {
                return {
                    type: "class",
                    parts: e,
                    inverted: t,
                    ignoreCase: r
                };
            }
            function a() {
                return {
                    type: "any"
                };
            }
            function i() {
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
            function s(t) {
                var r, n = Rr[t];
                if (n) return n;
                for (r = t - 1; !Rr[r]; ) r--;
                for (n = Rr[r], n = {
                    line: n.line,
                    column: n.column
                }; r < t; ) 10 === e.charCodeAt(r) ? (n.line++, n.column = 1) : n.column++, r++;
                return Rr[t] = n, n;
            }
            function l(e, t) {
                var r = s(e), n = s(t);
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
            function f(e) {
                Br < Sr || (Br > Sr && (Sr = Br, Ur = []), Ur.push(e));
            }
            function h(e, r, n) {
                return new t(t.buildMessage(e, r), e, r, n);
            }
            function p() {
                var t, r, n, o;
                for (t = Br, r = [], Q.test(e.charAt(Br)) ? (n = e.charAt(Br), Br++) : (n = G, 0 === _r && f(W)); n !== G; ) r.push(n), 
                Q.test(e.charAt(Br)) ? (n = e.charAt(Br), Br++) : (n = G, 0 === _r && f(W));
                if (r !== G ? (n = d(), n !== G ? (o = p(), o !== G ? (Mr = t, r = X(r, n, o), t = r) : (Br = t, 
                t = G)) : (Br = t, t = G)) : (Br = t, t = G), t === G) {
                    for (t = Br, r = [], e.length > Br ? (n = e.charAt(Br), Br++) : (n = G, 0 === _r && f(Y)); n !== G; ) r.push(n), 
                    e.length > Br ? (n = e.charAt(Br), Br++) : (n = G, 0 === _r && f(Y));
                    r !== G && (Mr = t, r = Z(r)), t = r;
                }
                return t;
            }
            function d() {
                var t, r, n, o, u, a;
                return t = Br, "{{{" === e.substr(Br, 3) ? (r = ee, Br += 3) : (r = G, 0 === _r && f(te)), 
                r !== G ? (n = I(), n !== G ? (o = v(), o !== G ? (u = I(), u !== G ? ("}}}" === e.substr(Br, 3) ? (a = re, 
                Br += 3) : (a = G, 0 === _r && f(ne)), a !== G ? (Mr = t, r = oe(o), t = r) : (Br = t, 
                t = G)) : (Br = t, t = G)) : (Br = t, t = G)) : (Br = t, t = G)) : (Br = t, t = G), 
                t === G && (t = Br, "{{" === e.substr(Br, 2) ? (r = ue, Br += 2) : (r = G, 0 === _r && f(ae)), 
                r !== G ? (n = I(), n !== G ? (o = v(), o !== G ? (u = I(), u !== G ? ("}}" === e.substr(Br, 2) ? (a = ie, 
                Br += 2) : (a = G, 0 === _r && f(ce)), a !== G ? (Mr = t, r = se(o), t = r) : (Br = t, 
                t = G)) : (Br = t, t = G)) : (Br = t, t = G)) : (Br = t, t = G)) : (Br = t, t = G)), 
                t;
            }
            function v() {
                var t, r, n, o, u, a;
                return t = Br, r = m(), r !== G ? (n = I(), n !== G ? (61 === e.charCodeAt(Br) ? (o = le, 
                Br++) : (o = G, 0 === _r && f(fe)), o === G && ("*=" === e.substr(Br, 2) ? (o = he, 
                Br += 2) : (o = G, 0 === _r && f(pe)), o === G && ("/=" === e.substr(Br, 2) ? (o = de, 
                Br += 2) : (o = G, 0 === _r && f(ve)), o === G && ("%=" === e.substr(Br, 2) ? (o = me, 
                Br += 2) : (o = G, 0 === _r && f(Ae)), o === G && ("+=" === e.substr(Br, 2) ? (o = be, 
                Br += 2) : (o = G, 0 === _r && f(ye)), o === G && ("-=" === e.substr(Br, 2) ? (o = ge, 
                Br += 2) : (o = G, 0 === _r && f(Ce))))))), o !== G ? (u = I(), u !== G ? (a = v(), 
                a !== G ? (Mr = t, r = xe(r, o, a), t = r) : (Br = t, t = G)) : (Br = t, t = G)) : (Br = t, 
                t = G)) : (Br = t, t = G)) : (Br = t, t = G), t === G && (t = A()), t;
            }
            function m() {
                var e;
                return e = $(), e === G && (e = N()), e;
            }
            function A() {
                var t, r, n, o, u, a, i, c, s, l;
                return t = Br, r = b(), r !== G ? (n = I(), n !== G ? (63 === e.charCodeAt(Br) ? (o = ke, 
                Br++) : (o = G, 0 === _r && f(Ee)), o !== G ? (u = I(), u !== G ? (a = A(), a !== G ? (i = I(), 
                i !== G ? (58 === e.charCodeAt(Br) ? (c = we, Br++) : (c = G, 0 === _r && f($e)), 
                c !== G ? (s = I(), s !== G ? (l = A(), l !== G ? (Mr = t, r = Ne(r, a, l), t = r) : (Br = t, 
                t = G)) : (Br = t, t = G)) : (Br = t, t = G)) : (Br = t, t = G)) : (Br = t, t = G)) : (Br = t, 
                t = G)) : (Br = t, t = G)) : (Br = t, t = G)) : (Br = t, t = G), t === G && (t = b()), 
                t;
            }
            function b() {
                var t, r, n, o, u, a, i, c;
                if (t = Br, r = y(), r !== G) {
                    for (n = [], o = Br, u = I(), u !== G ? ("||" === e.substr(Br, 2) ? (a = Le, Br += 2) : (a = G, 
                    0 === _r && f(je)), a !== G ? (i = I(), i !== G ? (c = y(), c !== G ? (Mr = o, u = Ve(r, c), 
                    o = u) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, o = G); o !== G; ) n.push(o), 
                    o = Br, u = I(), u !== G ? ("||" === e.substr(Br, 2) ? (a = Le, Br += 2) : (a = G, 
                    0 === _r && f(je)), a !== G ? (i = I(), i !== G ? (c = y(), c !== G ? (Mr = o, u = Ve(r, c), 
                    o = u) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, o = G);
                    n !== G ? (Mr = t, r = ze(r, n), t = r) : (Br = t, t = G);
                } else Br = t, t = G;
                return t;
            }
            function y() {
                var t, r, n, o, u, a, i, c;
                if (t = Br, r = g(), r !== G) {
                    for (n = [], o = Br, u = I(), u !== G ? ("&&" === e.substr(Br, 2) ? (a = Fe, Br += 2) : (a = G, 
                    0 === _r && f(Te)), a !== G ? (i = I(), i !== G ? (c = g(), c !== G ? (Mr = o, u = Oe(r, c), 
                    o = u) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, o = G); o !== G; ) n.push(o), 
                    o = Br, u = I(), u !== G ? ("&&" === e.substr(Br, 2) ? (a = Fe, Br += 2) : (a = G, 
                    0 === _r && f(Te)), a !== G ? (i = I(), i !== G ? (c = g(), c !== G ? (Mr = o, u = Oe(r, c), 
                    o = u) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, o = G);
                    n !== G ? (Mr = t, r = ze(r, n), t = r) : (Br = t, t = G);
                } else Br = t, t = G;
                return t;
            }
            function g() {
                var t, r, n, o, u, a, i, c;
                if (t = Br, r = C(), r !== G) {
                    for (n = [], o = Br, u = I(), u !== G ? ("===" === e.substr(Br, 3) ? (a = Be, Br += 3) : (a = G, 
                    0 === _r && f(Me)), a === G && ("!==" === e.substr(Br, 3) ? (a = Re, Br += 3) : (a = G, 
                    0 === _r && f(Se)), a === G && ("==" === e.substr(Br, 2) ? (a = Ue, Br += 2) : (a = G, 
                    0 === _r && f(_e)), a === G && ("!=" === e.substr(Br, 2) ? (a = qe, Br += 2) : (a = G, 
                    0 === _r && f(He))))), a !== G ? (i = I(), i !== G ? (c = C(), c !== G ? (Mr = o, 
                    u = Ie(r, a, c), o = u) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, 
                    o = G); o !== G; ) n.push(o), o = Br, u = I(), u !== G ? ("===" === e.substr(Br, 3) ? (a = Be, 
                    Br += 3) : (a = G, 0 === _r && f(Me)), a === G && ("!==" === e.substr(Br, 3) ? (a = Re, 
                    Br += 3) : (a = G, 0 === _r && f(Se)), a === G && ("==" === e.substr(Br, 2) ? (a = Ue, 
                    Br += 2) : (a = G, 0 === _r && f(_e)), a === G && ("!=" === e.substr(Br, 2) ? (a = qe, 
                    Br += 2) : (a = G, 0 === _r && f(He))))), a !== G ? (i = I(), i !== G ? (c = C(), 
                    c !== G ? (Mr = o, u = Ie(r, a, c), o = u) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, 
                    o = G)) : (Br = o, o = G);
                    n !== G ? (Mr = t, r = Pe(r, n), t = r) : (Br = t, t = G);
                } else Br = t, t = G;
                return t;
            }
            function C() {
                var t, r, n, o, u, a, i, c;
                if (t = Br, r = x(), r !== G) {
                    for (n = [], o = Br, u = I(), u !== G ? ("<=" === e.substr(Br, 2) ? (a = De, Br += 2) : (a = G, 
                    0 === _r && f(Ge)), a === G && (">=" === e.substr(Br, 2) ? (a = Je, Br += 2) : (a = G, 
                    0 === _r && f(Ke)), a === G && (60 === e.charCodeAt(Br) ? (a = Qe, Br++) : (a = G, 
                    0 === _r && f(We)), a === G && (62 === e.charCodeAt(Br) ? (a = Xe, Br++) : (a = G, 
                    0 === _r && f(Ye))))), a !== G ? (i = I(), i !== G ? (c = x(), c !== G ? (Mr = o, 
                    u = Ie(r, a, c), o = u) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, 
                    o = G); o !== G; ) n.push(o), o = Br, u = I(), u !== G ? ("<=" === e.substr(Br, 2) ? (a = De, 
                    Br += 2) : (a = G, 0 === _r && f(Ge)), a === G && (">=" === e.substr(Br, 2) ? (a = Je, 
                    Br += 2) : (a = G, 0 === _r && f(Ke)), a === G && (60 === e.charCodeAt(Br) ? (a = Qe, 
                    Br++) : (a = G, 0 === _r && f(We)), a === G && (62 === e.charCodeAt(Br) ? (a = Xe, 
                    Br++) : (a = G, 0 === _r && f(Ye))))), a !== G ? (i = I(), i !== G ? (c = x(), c !== G ? (Mr = o, 
                    u = Ie(r, a, c), o = u) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, 
                    o = G);
                    n !== G ? (Mr = t, r = Pe(r, n), t = r) : (Br = t, t = G);
                } else Br = t, t = G;
                return t;
            }
            function x() {
                var t, r, n, o, u, a, i, c;
                if (t = Br, r = k(), r !== G) {
                    for (n = [], o = Br, u = I(), u !== G ? (Ze.test(e.charAt(Br)) ? (a = e.charAt(Br), 
                    Br++) : (a = G, 0 === _r && f(et)), a !== G ? (i = I(), i !== G ? (c = k(), c !== G ? (Mr = o, 
                    u = Ie(r, a, c), o = u) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, 
                    o = G); o !== G; ) n.push(o), o = Br, u = I(), u !== G ? (Ze.test(e.charAt(Br)) ? (a = e.charAt(Br), 
                    Br++) : (a = G, 0 === _r && f(et)), a !== G ? (i = I(), i !== G ? (c = k(), c !== G ? (Mr = o, 
                    u = Ie(r, a, c), o = u) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, 
                    o = G);
                    n !== G ? (Mr = t, r = Pe(r, n), t = r) : (Br = t, t = G);
                } else Br = t, t = G;
                return t;
            }
            function k() {
                var t, r, n, o, u, a, i, c;
                if (t = Br, r = E(), r !== G) {
                    for (n = [], o = Br, u = I(), u !== G ? (tt.test(e.charAt(Br)) ? (a = e.charAt(Br), 
                    Br++) : (a = G, 0 === _r && f(rt)), a !== G ? (i = I(), i !== G ? (c = E(), c !== G ? (Mr = o, 
                    u = Ie(r, a, c), o = u) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, 
                    o = G); o !== G; ) n.push(o), o = Br, u = I(), u !== G ? (tt.test(e.charAt(Br)) ? (a = e.charAt(Br), 
                    Br++) : (a = G, 0 === _r && f(rt)), a !== G ? (i = I(), i !== G ? (c = E(), c !== G ? (Mr = o, 
                    u = Ie(r, a, c), o = u) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, 
                    o = G);
                    n !== G ? (Mr = t, r = Pe(r, n), t = r) : (Br = t, t = G);
                } else Br = t, t = G;
                return t;
            }
            function E() {
                var t, r, n, o;
                return t = w(), t === G && (t = Br, "++" === e.substr(Br, 2) ? (r = nt, Br += 2) : (r = G, 
                0 === _r && f(ot)), r === G && ("--" === e.substr(Br, 2) ? (r = ut, Br += 2) : (r = G, 
                0 === _r && f(at)), r === G && (it.test(e.charAt(Br)) ? (r = e.charAt(Br), Br++) : (r = G, 
                0 === _r && f(ct)))), r !== G ? (n = I(), n !== G ? (o = E(), o !== G ? (Mr = t, 
                r = st(r, o), t = r) : (Br = t, t = G)) : (Br = t, t = G)) : (Br = t, t = G)), t;
            }
            function w() {
                var t, r, n, o;
                return t = Br, r = m(), r !== G ? (n = I(), n !== G ? ("++" === e.substr(Br, 2) ? (o = nt, 
                Br += 2) : (o = G, 0 === _r && f(ot)), o === G && ("--" === e.substr(Br, 2) ? (o = ut, 
                Br += 2) : (o = G, 0 === _r && f(at))), o !== G ? (Mr = t, r = lt(r, o), t = r) : (Br = t, 
                t = G)) : (Br = t, t = G)) : (Br = t, t = G), t === G && (t = m()), t;
            }
            function $() {
                var e, t, r, n, o;
                return e = Br, t = Br, r = N(), r !== G ? (n = I(), n !== G ? (o = V(), o !== G ? (Mr = t, 
                r = ft(r, o), t = r) : (Br = t, t = G)) : (Br = t, t = G)) : (Br = t, t = G), t !== G ? (r = L(), 
                r !== G ? (Mr = e, t = ht(t, r), e = t) : (Br = e, e = G)) : (Br = e, e = G), e;
            }
            function N() {
                var t, r, n, o, u, a, i;
                return t = Br, r = j(), r === G && (r = z(), r === G && (r = R(), r === G && (r = F(), 
                r === G && (r = O(), r === G && (r = Br, 40 === e.charCodeAt(Br) ? (n = pt, Br++) : (n = G, 
                0 === _r && f(dt)), n !== G ? (o = I(), o !== G ? (u = v(), u !== G ? (a = I(), 
                a !== G ? (41 === e.charCodeAt(Br) ? (i = vt, Br++) : (i = G, 0 === _r && f(mt)), 
                i !== G ? (Mr = r, n = At(u), r = n) : (Br = r, r = G)) : (Br = r, r = G)) : (Br = r, 
                r = G)) : (Br = r, r = G)) : (Br = r, r = G)))))), r !== G ? (n = L(), n !== G ? (Mr = t, 
                r = bt(r, n), t = r) : (Br = t, t = G)) : (Br = t, t = G), t;
            }
            function L() {
                var t, r, n, o, u, a, i, c;
                for (t = [], r = Br, n = I(), n !== G ? (91 === e.charCodeAt(Br) ? (o = yt, Br++) : (o = G, 
                0 === _r && f(gt)), o !== G ? (u = I(), u !== G ? (a = v(), a !== G ? (i = I(), 
                i !== G ? (93 === e.charCodeAt(Br) ? (c = Ct, Br++) : (c = G, 0 === _r && f(xt)), 
                c !== G ? (Mr = r, n = kt(a), r = n) : (Br = r, r = G)) : (Br = r, r = G)) : (Br = r, 
                r = G)) : (Br = r, r = G)) : (Br = r, r = G)) : (Br = r, r = G), r === G && (r = Br, 
                n = I(), n !== G ? (46 === e.charCodeAt(Br) ? (o = Et, Br++) : (o = G, 0 === _r && f(wt)), 
                o !== G ? (u = I(), u !== G ? (a = z(), a !== G ? (Mr = r, n = $t(a), r = n) : (Br = r, 
                r = G)) : (Br = r, r = G)) : (Br = r, r = G)) : (Br = r, r = G)); r !== G; ) t.push(r), 
                r = Br, n = I(), n !== G ? (91 === e.charCodeAt(Br) ? (o = yt, Br++) : (o = G, 0 === _r && f(gt)), 
                o !== G ? (u = I(), u !== G ? (a = v(), a !== G ? (i = I(), i !== G ? (93 === e.charCodeAt(Br) ? (c = Ct, 
                Br++) : (c = G, 0 === _r && f(xt)), c !== G ? (Mr = r, n = kt(a), r = n) : (Br = r, 
                r = G)) : (Br = r, r = G)) : (Br = r, r = G)) : (Br = r, r = G)) : (Br = r, r = G)) : (Br = r, 
                r = G), r === G && (r = Br, n = I(), n !== G ? (46 === e.charCodeAt(Br) ? (o = Et, 
                Br++) : (o = G, 0 === _r && f(wt)), o !== G ? (u = I(), u !== G ? (a = z(), a !== G ? (Mr = r, 
                n = $t(a), r = n) : (Br = r, r = G)) : (Br = r, r = G)) : (Br = r, r = G)) : (Br = r, 
                r = G));
                return t;
            }
            function j() {
                var t, r, n, o, u, a, i;
                return t = Br, "new" === e.substr(Br, 3) ? (r = Nt, Br += 3) : (r = G, 0 === _r && f(Lt)), 
                r !== G ? (n = P(), n !== G ? (o = N(), o !== G ? (u = Br, a = I(), a !== G ? (i = V(), 
                i !== G ? (Mr = u, a = jt(o, i), u = a) : (Br = u, u = G)) : (Br = u, u = G), u === G && (u = null), 
                u !== G ? (Mr = t, r = Vt(o, u), t = r) : (Br = t, t = G)) : (Br = t, t = G)) : (Br = t, 
                t = G)) : (Br = t, t = G), t;
            }
            function V() {
                var t, r, n, o, u, a, i, c, s, l;
                if (t = Br, 40 === e.charCodeAt(Br) ? (r = pt, Br++) : (r = G, 0 === _r && f(dt)), 
                r !== G ? (n = I(), n !== G ? (41 === e.charCodeAt(Br) ? (o = vt, Br++) : (o = G, 
                0 === _r && f(mt)), o !== G ? (Mr = t, r = zt(), t = r) : (Br = t, t = G)) : (Br = t, 
                t = G)) : (Br = t, t = G), t === G) if (t = Br, 40 === e.charCodeAt(Br) ? (r = pt, 
                Br++) : (r = G, 0 === _r && f(dt)), r !== G) if (n = I(), n !== G) if (o = v(), 
                o !== G) {
                    for (u = [], a = Br, i = I(), i !== G ? (44 === e.charCodeAt(Br) ? (c = Ft, Br++) : (c = G, 
                    0 === _r && f(Tt)), c !== G ? (s = I(), s !== G ? (l = v(), l !== G ? (Mr = a, i = Ot(o, l), 
                    a = i) : (Br = a, a = G)) : (Br = a, a = G)) : (Br = a, a = G)) : (Br = a, a = G); a !== G; ) u.push(a), 
                    a = Br, i = I(), i !== G ? (44 === e.charCodeAt(Br) ? (c = Ft, Br++) : (c = G, 0 === _r && f(Tt)), 
                    c !== G ? (s = I(), s !== G ? (l = v(), l !== G ? (Mr = a, i = Ot(o, l), a = i) : (Br = a, 
                    a = G)) : (Br = a, a = G)) : (Br = a, a = G)) : (Br = a, a = G);
                    u !== G ? (a = I(), a !== G ? (41 === e.charCodeAt(Br) ? (i = vt, Br++) : (i = G, 
                    0 === _r && f(mt)), i !== G ? (Mr = t, r = Bt(o, u), t = r) : (Br = t, t = G)) : (Br = t, 
                    t = G)) : (Br = t, t = G);
                } else Br = t, t = G; else Br = t, t = G; else Br = t, t = G;
                return t;
            }
            function z() {
                var t, r, n, o, u;
                if (_r++, t = Br, r = Br, _r++, n = S(), _r--, n === G ? r = void 0 : (Br = r, r = G), 
                r !== G) if (Rt.test(e.charAt(Br)) ? (n = e.charAt(Br), Br++) : (n = G, 0 === _r && f(St)), 
                n !== G) {
                    for (o = [], Ut.test(e.charAt(Br)) ? (u = e.charAt(Br), Br++) : (u = G, 0 === _r && f(_t)); u !== G; ) o.push(u), 
                    Ut.test(e.charAt(Br)) ? (u = e.charAt(Br), Br++) : (u = G, 0 === _r && f(_t));
                    o !== G ? (Mr = t, r = qt(n, o), t = r) : (Br = t, t = G);
                } else Br = t, t = G; else Br = t, t = G;
                return _r--, t === G && (r = G, 0 === _r && f(Mt)), t;
            }
            function F() {
                var t, r, n, o, u, a;
                return t = Br, 91 === e.charCodeAt(Br) ? (r = yt, Br++) : (r = G, 0 === _r && f(gt)), 
                r !== G ? (n = I(), n !== G ? (93 === e.charCodeAt(Br) ? (o = Ct, Br++) : (o = G, 
                0 === _r && f(xt)), o !== G ? (Mr = t, r = Ht(), t = r) : (Br = t, t = G)) : (Br = t, 
                t = G)) : (Br = t, t = G), t === G && (t = Br, 91 === e.charCodeAt(Br) ? (r = yt, 
                Br++) : (r = G, 0 === _r && f(gt)), r !== G ? (n = I(), n !== G ? (o = T(), o !== G ? (u = I(), 
                u !== G ? (93 === e.charCodeAt(Br) ? (a = Ct, Br++) : (a = G, 0 === _r && f(xt)), 
                a !== G ? (Mr = t, r = It(o), t = r) : (Br = t, t = G)) : (Br = t, t = G)) : (Br = t, 
                t = G)) : (Br = t, t = G)) : (Br = t, t = G)), t;
            }
            function T() {
                var t, r, n, o, u, a, i, c;
                if (t = Br, r = v(), r !== G) {
                    for (n = [], o = Br, u = I(), u !== G ? (44 === e.charCodeAt(Br) ? (a = Ft, Br++) : (a = G, 
                    0 === _r && f(Tt)), a !== G ? (i = I(), i !== G ? (c = v(), c !== G ? (Mr = o, u = Pt(r, c), 
                    o = u) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, o = G); o !== G; ) n.push(o), 
                    o = Br, u = I(), u !== G ? (44 === e.charCodeAt(Br) ? (a = Ft, Br++) : (a = G, 0 === _r && f(Tt)), 
                    a !== G ? (i = I(), i !== G ? (c = v(), c !== G ? (Mr = o, u = Pt(r, c), o = u) : (Br = o, 
                    o = G)) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, o = G);
                    n !== G ? (Mr = t, r = Bt(r, n), t = r) : (Br = t, t = G);
                } else Br = t, t = G;
                return t;
            }
            function O() {
                var t, r, n, o, u, a, i, c;
                return t = Br, 123 === e.charCodeAt(Br) ? (r = Dt, Br++) : (r = G, 0 === _r && f(Gt)), 
                r !== G ? (n = I(), n !== G ? (125 === e.charCodeAt(Br) ? (o = Jt, Br++) : (o = G, 
                0 === _r && f(Kt)), o !== G ? (Mr = t, r = Qt(), t = r) : (Br = t, t = G)) : (Br = t, 
                t = G)) : (Br = t, t = G), t === G && (t = Br, 123 === e.charCodeAt(Br) ? (r = Dt, 
                Br++) : (r = G, 0 === _r && f(Gt)), r !== G ? (n = I(), n !== G ? (o = B(), o !== G ? (u = I(), 
                u !== G ? (a = Br, 44 === e.charCodeAt(Br) ? (i = Ft, Br++) : (i = G, 0 === _r && f(Tt)), 
                i !== G ? (c = I(), c !== G ? (i = [ i, c ], a = i) : (Br = a, a = G)) : (Br = a, 
                a = G), a === G && (a = null), a !== G ? (125 === e.charCodeAt(Br) ? (i = Jt, Br++) : (i = G, 
                0 === _r && f(Kt)), i !== G ? (Mr = t, r = Wt(o), t = r) : (Br = t, t = G)) : (Br = t, 
                t = G)) : (Br = t, t = G)) : (Br = t, t = G)) : (Br = t, t = G)) : (Br = t, t = G)), 
                t;
            }
            function B() {
                var t, r, n, o, u, a, i, c;
                if (t = Br, r = M(), r !== G) {
                    for (n = [], o = Br, u = I(), u !== G ? (44 === e.charCodeAt(Br) ? (a = Ft, Br++) : (a = G, 
                    0 === _r && f(Tt)), a !== G ? (i = I(), i !== G ? (c = M(), c !== G ? (Mr = o, u = Xt(r, c), 
                    o = u) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, o = G); o !== G; ) n.push(o), 
                    o = Br, u = I(), u !== G ? (44 === e.charCodeAt(Br) ? (a = Ft, Br++) : (a = G, 0 === _r && f(Tt)), 
                    a !== G ? (i = I(), i !== G ? (c = M(), c !== G ? (Mr = o, u = Xt(r, c), o = u) : (Br = o, 
                    o = G)) : (Br = o, o = G)) : (Br = o, o = G)) : (Br = o, o = G);
                    n !== G ? (Mr = t, r = Bt(r, n), t = r) : (Br = t, t = G);
                } else Br = t, t = G;
                return t;
            }
            function M() {
                var t, r, n, o, u, a;
                return t = Br, r = z(), r === G && (r = H(), r === G && (r = U())), r !== G ? (n = I(), 
                n !== G ? (58 === e.charCodeAt(Br) ? (o = we, Br++) : (o = G, 0 === _r && f($e)), 
                o !== G ? (u = I(), u !== G ? (a = v(), a !== G ? (Mr = t, r = Yt(r, a), t = r) : (Br = t, 
                t = G)) : (Br = t, t = G)) : (Br = t, t = G)) : (Br = t, t = G)) : (Br = t, t = G), 
                t;
            }
            function R() {
                var e;
                return e = S(), e === G && (e = U(), e === G && (e = H())), e;
            }
            function S() {
                var t, r;
                return t = Br, "null" === e.substr(Br, 4) ? (r = Zt, Br += 4) : (r = G, 0 === _r && f(er)), 
                r !== G && (Mr = t, r = tr()), t = r, t === G && (t = Br, "true" === e.substr(Br, 4) ? (r = rr, 
                Br += 4) : (r = G, 0 === _r && f(nr)), r !== G && (Mr = t, r = or()), t = r, t === G && (t = Br, 
                "false" === e.substr(Br, 5) ? (r = ur, Br += 5) : (r = G, 0 === _r && f(ar)), r !== G && (Mr = t, 
                r = ir()), t = r)), t;
            }
            function U() {
                var t, r, n, o, u;
                if (_r++, t = Br, r = _(), r !== G) if (46 === e.charCodeAt(Br) ? (n = Et, Br++) : (n = G, 
                0 === _r && f(wt)), n !== G) {
                    for (o = [], sr.test(e.charAt(Br)) ? (u = e.charAt(Br), Br++) : (u = G, 0 === _r && f(lr)); u !== G; ) o.push(u), 
                    sr.test(e.charAt(Br)) ? (u = e.charAt(Br), Br++) : (u = G, 0 === _r && f(lr));
                    o !== G ? (u = q(), u === G && (u = null), u !== G ? (Mr = t, r = fr(), t = r) : (Br = t, 
                    t = G)) : (Br = t, t = G);
                } else Br = t, t = G; else Br = t, t = G;
                if (t === G) {
                    if (t = Br, 46 === e.charCodeAt(Br) ? (r = Et, Br++) : (r = G, 0 === _r && f(wt)), 
                    r !== G) {
                        if (n = [], sr.test(e.charAt(Br)) ? (o = e.charAt(Br), Br++) : (o = G, 0 === _r && f(lr)), 
                        o !== G) for (;o !== G; ) n.push(o), sr.test(e.charAt(Br)) ? (o = e.charAt(Br), 
                        Br++) : (o = G, 0 === _r && f(lr)); else n = G;
                        n !== G ? (o = q(), o === G && (o = null), o !== G ? (Mr = t, r = fr(), t = r) : (Br = t, 
                        t = G)) : (Br = t, t = G);
                    } else Br = t, t = G;
                    t === G && (t = Br, r = _(), r !== G ? (n = q(), n === G && (n = null), n !== G ? (Mr = t, 
                    r = fr(), t = r) : (Br = t, t = G)) : (Br = t, t = G));
                }
                return _r--, t === G && (r = G, 0 === _r && f(cr)), t;
            }
            function _() {
                var t, r, n, o;
                if (48 === e.charCodeAt(Br) ? (t = hr, Br++) : (t = G, 0 === _r && f(pr)), t === G) if (t = Br, 
                dr.test(e.charAt(Br)) ? (r = e.charAt(Br), Br++) : (r = G, 0 === _r && f(vr)), r !== G) {
                    for (n = [], sr.test(e.charAt(Br)) ? (o = e.charAt(Br), Br++) : (o = G, 0 === _r && f(lr)); o !== G; ) n.push(o), 
                    sr.test(e.charAt(Br)) ? (o = e.charAt(Br), Br++) : (o = G, 0 === _r && f(lr));
                    n !== G ? (r = [ r, n ], t = r) : (Br = t, t = G);
                } else Br = t, t = G;
                return t;
            }
            function q() {
                var t, r, n, o, u;
                if (t = Br, "e" === e.substr(Br, 1).toLowerCase() ? (r = e.charAt(Br), Br++) : (r = G, 
                0 === _r && f(mr)), r !== G) if (Ze.test(e.charAt(Br)) ? (n = e.charAt(Br), Br++) : (n = G, 
                0 === _r && f(et)), n === G && (n = null), n !== G) {
                    if (o = [], sr.test(e.charAt(Br)) ? (u = e.charAt(Br), Br++) : (u = G, 0 === _r && f(lr)), 
                    u !== G) for (;u !== G; ) o.push(u), sr.test(e.charAt(Br)) ? (u = e.charAt(Br), 
                    Br++) : (u = G, 0 === _r && f(lr)); else o = G;
                    o !== G ? (r = [ r, n, o ], t = r) : (Br = t, t = G);
                } else Br = t, t = G; else Br = t, t = G;
                return t;
            }
            function H() {
                var t, r, n, o, u;
                if (_r++, t = Br, 34 === e.charCodeAt(Br) ? (r = br, Br++) : (r = G, 0 === _r && f(yr)), 
                r !== G) {
                    for (n = [], o = Br, '\\"' === e.substr(Br, 2) ? (u = gr, Br += 2) : (u = G, 0 === _r && f(Cr)), 
                    u !== G && (Mr = o, u = xr()), o = u, o === G && (kr.test(e.charAt(Br)) ? (o = e.charAt(Br), 
                    Br++) : (o = G, 0 === _r && f(Er))); o !== G; ) n.push(o), o = Br, '\\"' === e.substr(Br, 2) ? (u = gr, 
                    Br += 2) : (u = G, 0 === _r && f(Cr)), u !== G && (Mr = o, u = xr()), o = u, o === G && (kr.test(e.charAt(Br)) ? (o = e.charAt(Br), 
                    Br++) : (o = G, 0 === _r && f(Er)));
                    n !== G ? (34 === e.charCodeAt(Br) ? (o = br, Br++) : (o = G, 0 === _r && f(yr)), 
                    o !== G ? (Mr = t, r = wr(n), t = r) : (Br = t, t = G)) : (Br = t, t = G);
                } else Br = t, t = G;
                if (t === G) if (t = Br, 39 === e.charCodeAt(Br) ? (r = $r, Br++) : (r = G, 0 === _r && f(Nr)), 
                r !== G) {
                    for (n = [], o = Br, "\\'" === e.substr(Br, 2) ? (u = Lr, Br += 2) : (u = G, 0 === _r && f(jr)), 
                    u !== G && (Mr = o, u = Vr()), o = u, o === G && (zr.test(e.charAt(Br)) ? (o = e.charAt(Br), 
                    Br++) : (o = G, 0 === _r && f(Fr))); o !== G; ) n.push(o), o = Br, "\\'" === e.substr(Br, 2) ? (u = Lr, 
                    Br += 2) : (u = G, 0 === _r && f(jr)), u !== G && (Mr = o, u = Vr()), o = u, o === G && (zr.test(e.charAt(Br)) ? (o = e.charAt(Br), 
                    Br++) : (o = G, 0 === _r && f(Fr)));
                    n !== G ? (39 === e.charCodeAt(Br) ? (o = $r, Br++) : (o = G, 0 === _r && f(Nr)), 
                    o !== G ? (Mr = t, r = wr(n), t = r) : (Br = t, t = G)) : (Br = t, t = G);
                } else Br = t, t = G;
                return _r--, t === G && (r = G, 0 === _r && f(Ar)), t;
            }
            function I() {
                var e;
                return e = P(), e === G && (e = null), e;
            }
            function P() {
                var t, r;
                if (t = [], Tr.test(e.charAt(Br)) ? (r = e.charAt(Br), Br++) : (r = G, 0 === _r && f(Or)), 
                r !== G) for (;r !== G; ) t.push(r), Tr.test(e.charAt(Br)) ? (r = e.charAt(Br), 
                Br++) : (r = G, 0 === _r && f(Or)); else t = G;
                return t;
            }
            r = void 0 !== r ? r : {};
            var D, G = {}, J = {
                Text: p,
                Expression: v
            }, K = p, Q = /^[^{]/, W = u([ "{" ], !0, !1), X = function(e, t, r) {
                return (e.length > 0 ? [ e.join("") ] : []).concat([ t ], r);
            }, Y = a(), Z = function(e) {
                return e.length > 0 ? [ e.join("") ] : [];
            }, ee = "{{{", te = o("{{{", !1), re = "}}}", ne = o("}}}", !1), oe = function(e) {
                return {
                    html: !0,
                    expression: e
                };
            }, ue = "{{", ae = o("{{", !1), ie = "}}", ce = o("}}", !1), se = function(e) {
                return {
                    html: !1,
                    expression: e
                };
            }, le = "=", fe = o("=", !1), he = "*=", pe = o("*=", !1), de = "/=", ve = o("/=", !1), me = "%=", Ae = o("%=", !1), be = "+=", ye = o("+=", !1), ge = "-=", Ce = o("-=", !1), xe = function(e, t, r) {
                return {
                    type: "Assignment",
                    operator: t,
                    left: e,
                    right: r
                };
            }, ke = "?", Ee = o("?", !1), we = ":", $e = o(":", !1), Ne = function(e, t, r) {
                return {
                    type: "Conditional",
                    test: e,
                    consequent: t,
                    alternate: r
                };
            }, Le = "||", je = o("||", !1), Ve = function(e, t) {
                return {
                    operator: "||",
                    arg: t
                };
            }, ze = function(e, t) {
                return qr("Logical", e, t);
            }, Fe = "&&", Te = o("&&", !1), Oe = function(e, t) {
                return {
                    operator: "&&",
                    arg: t
                };
            }, Be = "===", Me = o("===", !1), Re = "!==", Se = o("!==", !1), Ue = "==", _e = o("==", !1), qe = "!=", He = o("!=", !1), Ie = function(e, t, r) {
                return {
                    operator: t,
                    arg: r
                };
            }, Pe = function(e, t) {
                return qr("Binary", e, t);
            }, De = "<=", Ge = o("<=", !1), Je = ">=", Ke = o(">=", !1), Qe = "<", We = o("<", !1), Xe = ">", Ye = o(">", !1), Ze = /^[+\-]/, et = u([ "+", "-" ], !1, !1), tt = /^[*\/%]/, rt = u([ "*", "/", "%" ], !1, !1), nt = "++", ot = o("++", !1), ut = "--", at = o("--", !1), it = /^[+!\-]/, ct = u([ "+", "!", "-" ], !1, !1), st = function(e, t) {
                return {
                    type: "++" === e || "--" === e ? "Update" : "Unary",
                    operator: e,
                    argument: t,
                    prefix: !0
                };
            }, lt = function(e, t) {
                return {
                    type: "Update",
                    operator: t,
                    argument: e,
                    prefix: !1
                };
            }, ft = function(e, t) {
                return {
                    type: "Call",
                    callee: e,
                    arguments: t
                };
            }, ht = function(e, t) {
                return t.reduce(function(e, t) {
                    return {
                        type: "Member",
                        property: t,
                        object: e
                    };
                }, e);
            }, pt = "(", dt = o("(", !1), vt = ")", mt = o(")", !1), At = function(e) {
                return e;
            }, bt = function(e, t) {
                return t.reduce(function(e, t) {
                    return {
                        type: "Member",
                        object: e,
                        property: t
                    };
                }, e);
            }, yt = "[", gt = o("[", !1), Ct = "]", xt = o("]", !1), kt = function(e) {
                return e;
            }, Et = ".", wt = o(".", !1), $t = function(e) {
                return {
                    type: "Literal",
                    value: e.name
                };
            }, Nt = "new", Lt = o("new", !1), jt = function(e, t) {
                return t;
            }, Vt = function(e, t) {
                return {
                    type: "NewExpression",
                    callee: e,
                    arguments: t || []
                };
            }, zt = function() {
                return [];
            }, Ft = ",", Tt = o(",", !1), Ot = function(e, t) {
                return t;
            }, Bt = function(e, t) {
                return [ e ].concat(t);
            }, Mt = c("identifier"), Rt = /^[a-z$_]/i, St = u([ [ "a", "z" ], "$", "_" ], !1, !0), Ut = /^[a-z$_0-9]/i, _t = u([ [ "a", "z" ], "$", "_", [ "0", "9" ] ], !1, !0), qt = function(e, t) {
                return {
                    type: "Identifier",
                    name: e + t.join("")
                };
            }, Ht = function() {
                return {
                    type: "Array",
                    elements: []
                };
            }, It = function(e) {
                return {
                    type: "Array",
                    elements: e
                };
            }, Pt = function(e, t) {
                return t;
            }, Dt = "{", Gt = o("{", !1), Jt = "}", Kt = o("}", !1), Qt = function() {
                return {
                    type: "Object",
                    properties: []
                };
            }, Wt = function(e) {
                return {
                    type: "Object",
                    properties: e
                };
            }, Xt = function(e, t) {
                return t;
            }, Yt = function(e, t) {
                return {
                    type: "Property",
                    key: e.name || e.value,
                    value: t
                };
            }, Zt = "null", er = o("null", !1), tr = function() {
                return {
                    type: "Literal",
                    value: null
                };
            }, rr = "true", nr = o("true", !1), or = function() {
                return {
                    type: "Literal",
                    value: !0
                };
            }, ur = "false", ar = o("false", !1), ir = function() {
                return {
                    type: "Literal",
                    value: !1
                };
            }, cr = c("number"), sr = /^[0-9]/, lr = u([ [ "0", "9" ] ], !1, !1), fr = function() {
                return {
                    type: "Literal",
                    value: parseFloat(n())
                };
            }, hr = "0", pr = o("0", !1), dr = /^[1-9]/, vr = u([ [ "1", "9" ] ], !1, !1), mr = o("e", !0), Ar = c("string"), br = '"', yr = o('"', !1), gr = '\\"', Cr = o('\\"', !1), xr = function() {
                return '"';
            }, kr = /^[^"]/, Er = u([ '"' ], !0, !1), wr = function(e) {
                return {
                    type: "Literal",
                    value: e.join("")
                };
            }, $r = "'", Nr = o("'", !1), Lr = "\\'", jr = o("\\'", !1), Vr = function() {
                return "'";
            }, zr = /^[^'']/, Fr = u([ "'", "'" ], !0, !1), Tr = /^[\t ]/, Or = u([ "\t", " " ], !1, !1), Br = 0, Mr = 0, Rr = [ {
                line: 1,
                column: 1
            } ], Sr = 0, Ur = [], _r = 0;
            if ("startRule" in r) {
                if (!(r.startRule in J)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
                K = J[r.startRule];
            }
            var qr = function(e, t, r) {
                return 0 === r.length ? t : r.reduce(function(t, r) {
                    return {
                        type: e,
                        operator: r.operator,
                        left: t,
                        right: r.arg
                    };
                }, t);
            };
            if (D = K(), D !== G && Br === e.length) return D;
            throw D !== G && Br < e.length && f(i()), h(Ur, Sr < e.length ? e.charAt(Sr) : null, Sr < e.length ? l(Sr, Sr + 1) : l(Sr, Sr));
        }
        return e(t, Error), t.buildMessage = function(e, t) {
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
            function o(e) {
                return e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
                    return "\\x0" + r(e);
                }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
                    return "\\x" + r(e);
                });
            }
            function u(e) {
                return c[e.type](e);
            }
            function a(e) {
                var t, r, n = new Array(e.length);
                for (t = 0; t < e.length; t++) n[t] = u(e[t]);
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
            }
            function i(e) {
                return e ? '"' + n(e) + '"' : "end of input";
            }
            var c = {
                literal: function(e) {
                    return '"' + n(e.text) + '"';
                },
                class: function(e) {
                    var t, r = "";
                    for (t = 0; t < e.parts.length; t++) r += e.parts[t] instanceof Array ? o(e.parts[t][0]) + "-" + o(e.parts[t][1]) : o(e.parts[t]);
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
            return "Expected " + a(e) + " but " + i(t) + " found.";
        }, {
            SyntaxError: t,
            parse: r
        };
    }(), t = e.parse, r = "undefined" != typeof global ? global : window, n = function(e) {
        return Array.prototype.slice.call(e);
    }, o = function(e) {
        return String(null !== e && "undefined" != typeof e ? e : "");
    }, u = function(e, t) {
        var r = e.indexOf(t);
        r > -1 && e.splice(r, 1);
    }, a = function(e, t) {
        var r;
        return e.find(function(e) {
            return r = e.children.find(function(e) {
                return e.node === t;
            }) ? e : a(e.children, t);
        }), r;
    }, i = function(e, t) {
        e.forEach(function(e) {
            t(e), i(e.children, t);
        });
    }, c = function(e, t) {
        var r, n, o = e.type, u = e.operator;
        if ("Literal" === o) r = e.value; else if ("Array" === o) r = e.elements.map(function(e) {
            return c(e, t).value;
        }); else if ("Object" === o) r = {}, e.properties.forEach(function(e) {
            r[e.key] = c(e.value, t).value;
        }); else if ("Identifier" === o) {
            var a = t.find(function(t) {
                return "undefined" != typeof t[e.name];
            }) || t[0];
            r = a[e.name], n = function(t) {
                return a[e.name] = t, t;
            };
        } else if ("Member" === o) {
            var i = c(e.object, t).value, s = c(e.property, t).value;
            r = "undefined" != typeof i ? i[s] : void 0, n = function(e) {
                return i[s] = e, e;
            };
        } else if ("Conditional" === o) r = c(e.test, t).value ? c(e.consequent, t).value : c(e.alternate, t).value; else if ("Unary" === o || "Update" === o) {
            var l = c(e.argument, t), f = l.value;
            r = "!" === u ? !f : "+" === u ? +f : "-" === u ? -f : "++" === u ? f + 1 : "--" === u ? f - 1 : null, 
            "Update" === o && (n = l.set, n && (r = n(r)), e.prefix || (r += "++" === u ? -1 : 1));
        } else if ("Binary" === o || "Logical" === o || "Assignment" === o) {
            var h = c(e.left, t), p = h.value, d = c(e.right, t).value;
            r = "===" === u ? p === d : "!==" === u ? p !== d : "==" === u ? p == d : "!=" === u ? p != d : "<" === u ? p < d : ">" === u ? p > d : "<=" === u ? p <= d : ">=" === u ? p >= d : "&&" === u ? p && d : "||" === u ? p || d : "+" === u ? p + d : "-" === u ? p - d : "*" === u ? p * d : "/" === u ? p / d : "%" === u ? p % d : "*=" === u ? p * d : "/=" === u ? p / d : "%=" === u ? p % d : "+=" === u ? p + d : "-=" === u ? p - d : "=" === u ? d : null, 
            "Assignment" === o && (n = h.set, r = n(r));
        } else if ("Call" === o || "NewExpression" === o) {
            var v = e.callee.object ? c(e.callee.object, t).value : t[0], m = c(e.callee, t).value, A = e.arguments.map(function(e) {
                return c(e, t).value;
            });
            r = m ? "Call" === o ? m.apply(v, A) : new (m.bind.apply(m, A))() : void 0;
        }
        return {
            value: r,
            set: n
        };
    }, s = [], l = function(e, o) {
        e = "string" == typeof e ? document.querySelector(e) : e[0] || e, o = o || e.taComponent;
        var h = {}, p = [];
        h.$scopes = [ h ].concat(o ? o.$scopes : [ l.root, r ]), h.$elements = p;
        var d = function(e) {
            e.forEach(function(e) {
                e.bindings.forEach(function(e) {
                    e.update();
                }), d(e.children);
            });
        };
        h.$ = function() {
            d(p);
        };
        var v = function(e, t, r, n) {
            var o = [ t ].concat(r), u = {
                component: h,
                syntax: n,
                eval: function(e) {
                    return c(e || n, u.component.$scopes).value;
                },
                update: function() {
                    e.update && e.update.apply(u, o);
                },
                destroy: function() {
                    e.destroy && e.destroy.apply(u, o);
                }
            };
            return e.create && e.create.apply(u, o), u;
        }, m = function(e, r) {
            if ([ 1, 3 ].indexOf(e.nodeType) !== -1) if (e.taComponent) if (e.taComponent === h.$scopes[1]) {
                let t = a(h.$scopes[1].$elements, e), n = t.children.find(function(t) {
                    return t.node === e;
                });
                u(t.children, n), r.push(n), i(n.children, function(e) {
                    e.bindings.forEach(function(e) {
                        e.component = h;
                    });
                });
            } else e.taComponent.$scopes.splice(1, 0, h); else {
                e.taComponent = h;
                var o = {
                    node: e,
                    children: [],
                    bindings: []
                };
                if (r.push(o), r = o.children, 1 === e.nodeType) {
                    let u, a = n(e.attributes), i = [];
                    a.length > 0 && (u = s.find(function(r) {
                        var n, o = a.find(function(e) {
                            return n = e.name.match(r.match);
                        });
                        if (n) {
                            var u = t(o.value || "undefined", {
                                startRule: "Expression"
                            });
                            return e.removeAttribute(o.name), i.push(v(r, e, n, u)), r.block;
                        }
                    })), o.bindings = i, u || n(e.childNodes).forEach(function(e) {
                        m(e, r);
                    });
                } else if (3 === e.nodeType && e.nodeValue.indexOf("{{") > -1) {
                    var c = e.nodeValue;
                    t(c, {
                        startRule: "Text"
                    }).forEach(function(t) {
                        var n;
                        if ("string" == typeof t) n = document.createTextNode(t); else {
                            n = t.html ? document.createElement("span") : document.createTextNode(""), n.taComponent = h;
                            var o = v(f, n, [ "", t.html ? "html" : "text" ], t.expression);
                            r.push({
                                node: e,
                                children: [],
                                bindings: [ o ]
                            });
                        }
                        e.parentNode.insertBefore(n, e);
                    }), e.parentNode.removeChild(e);
                }
            }
        };
        return m(e, p), h;
    };
    l.version = "0.1.0", l.prefix = "z-", l.root = {}, l.parse = t, l.evaluate = c, 
    l.directive = function(e) {
        return e.match = new RegExp("^" + l.prefix + e.attribute + "$"), s = s.concat([ e ]).sort(function(e, t) {
            return (e.order || 100) - (t.order || 100);
        }), e;
    }, l.root.number = function(e, t) {
        return Number(e).toFixed(t || 2);
    }, l.root.percent = function(e, t) {
        return Number(100 * e).toFixed(t || 2) + "%";
    };
    var f = l.directive({
        attribute: "(text|html)",
        block: !0,
        create: function(e) {
            e.innerHTML = "";
        },
        update: function(e, t, r) {
            var n = o(this.eval());
            n !== this.prevValue && ("html" === r ? e.innerHTML = n : e.textContent = n, this.prevValue = n);
        }
    });
    l.directive({
        attribute: "show",
        update: function(e) {
            var t = !!this.eval();
            t !== this.prevValue && (e.style.display = t ? "" : "none", this.prevValue = t);
        }
    }), l.directive({
        attribute: "exist",
        order: 3,
        block: !0,
        create: function(e, t) {
            this.marker = document.createComment(t), e.parentNode.insertBefore(this.marker, e), 
            e.parentNode.removeChild(e);
        },
        update: function(e) {
            var t = !!this.eval();
            t !== this.prevValue && (t ? (this.clone = e.cloneNode(!0), this.childComponent = l(this.clone, this.component), 
            this.marker.parentNode.insertBefore(this.clone, this.marker)) : this.clone && this.marker.parentNode.removeChild(this.clone), 
            this.prevValue = t), this.clone && this.childComponent.$();
        }
    }), l.directive({
        attribute: "(.+)-in",
        order: 2,
        block: !0,
        create: function(e, t) {
            this.items = [], this.marker = document.createComment(t), e.parentNode.insertBefore(this.marker, e), 
            e.parentNode.removeChild(e);
        },
        update: function(e, t, r) {
            var n = this, o = this.eval() || [];
            n.items.forEach(function(e) {
                o.indexOf(e.data) === -1 && (n.marker.parentNode.removeChild(e.el), u(n.items, e));
            }), o.forEach(function(t) {
                var o = n.items.find(function(e) {
                    return e.data === t;
                });
                if (!o) {
                    var u = e.cloneNode(!0);
                    o = {
                        el: u,
                        zam: l(u, n.component),
                        data: t
                    }, o.zam[r] = t, n.items.push(o);
                }
                o.zam.$(), n.marker.parentNode.insertBefore(o.el, n.marker);
            });
        }
    });
    var h = [ "selected", "checked", "disabled", "readonly", "multiple", "ismap", "defer", "noresize" ];
    return l.directive({
        attribute: "attr-(.+)",
        update: function(e, t, r) {
            var n = this.eval();
            h.indexOf(r) > -1 && (n = n ? r : void 0), "undefined" == typeof n ? e.removeAttribute(r) : e.setAttribute(r, n);
        }
    }), l.directive({
        attribute: "class-(.+)",
        update: function(e, t, r) {
            e.classList.toggle(r, !!this.eval());
        }
    }), l.directive({
        attribute: "style-(.+)",
        update: function(e, t, r) {
            e.style[r] = this.eval();
        }
    }), l.directive({
        attribute: "model",
        create: function(e) {
            var t = this;
            this.handler = function() {
                e.value !== t.prevValue && (t.prevValue = e.value, t.eval({
                    type: "Assignment",
                    operator: "=",
                    left: t.syntax,
                    right: {
                        type: "Literal",
                        value: e.value
                    }
                }), t.component.$());
            }, e.addEventListener("input", this.handler);
        },
        update: function(e) {
            var t = o(this.eval());
            t !== this.prevValue && (e.value = t, this.prevValue = t);
        },
        destroy: function(e) {
            e.removeEventListener("input", this.handler);
        }
    }), l.directive({
        attribute: "on-(.+)|(load|error|focus|blur|click|dblclick|mousedown|mousemove|mouseup|mouseenter|mouseleave|mouseover|mouseout|keyup|keydown|keypress|input|change|submit|reset|scroll|resize|dragstart|dragend|dragenter|dragover|dragleave|drag|drop)",
        create: function(e, t, r, n) {
            var o = this;
            this.handler = function(e) {
                o.component.$event = e, o.eval(), delete o.component.$event, o.component.$();
            }, e.addEventListener(r || n, this.handler);
        },
        destroy: function(e, t, r) {
            e.removeEventListener(r || stdevent, this.handler);
        }
    }), l.directive({
        attribute: "skip",
        order: 1,
        block: !0
    }), l;
});
