!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.tack = t();
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
                return e.substring(Rr, Mr);
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
                var r, n = Sr[t];
                if (n) return n;
                for (r = t - 1; !Sr[r]; ) r--;
                for (n = Sr[r], n = {
                    line: n.line,
                    column: n.column
                }; r < t; ) 10 === e.charCodeAt(r) ? (n.line++, n.column = 1) : n.column++, r++;
                return Sr[t] = n, n;
            }
            function f(e, t) {
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
            function l(e) {
                Mr < Ur || (Mr > Ur && (Ur = Mr, zr = []), zr.push(e));
            }
            function h(e, r, n) {
                return new t(t.buildMessage(e, r), e, r, n);
            }
            function p() {
                var t, r, n, o;
                for (t = Mr, r = [], J.test(e.charAt(Mr)) ? (n = e.charAt(Mr), Mr++) : (n = P, 0 === _r && l(K)); n !== P; ) r.push(n), 
                J.test(e.charAt(Mr)) ? (n = e.charAt(Mr), Mr++) : (n = P, 0 === _r && l(K));
                if (r !== P ? (n = d(), n !== P ? (o = p(), o !== P ? (Rr = t, r = Q(r, n, o), t = r) : (Mr = t, 
                t = P)) : (Mr = t, t = P)) : (Mr = t, t = P), t === P) {
                    for (t = Mr, r = [], e.length > Mr ? (n = e.charAt(Mr), Mr++) : (n = P, 0 === _r && l(W)); n !== P; ) r.push(n), 
                    e.length > Mr ? (n = e.charAt(Mr), Mr++) : (n = P, 0 === _r && l(W));
                    r !== P && (Rr = t, r = X(r)), t = r;
                }
                return t;
            }
            function d() {
                var t, r, n, o, u, a;
                return t = Mr, "{{{" === e.substr(Mr, 3) ? (r = Y, Mr += 3) : (r = P, 0 === _r && l(Z)), 
                r !== P ? (n = H(), n !== P ? (o = v(), o !== P ? (u = H(), u !== P ? ("}}}" === e.substr(Mr, 3) ? (a = ee, 
                Mr += 3) : (a = P, 0 === _r && l(te)), a !== P ? (Rr = t, r = re(o), t = r) : (Mr = t, 
                t = P)) : (Mr = t, t = P)) : (Mr = t, t = P)) : (Mr = t, t = P)) : (Mr = t, t = P), 
                t === P && (t = Mr, "{{" === e.substr(Mr, 2) ? (r = ne, Mr += 2) : (r = P, 0 === _r && l(oe)), 
                r !== P ? (n = H(), n !== P ? (o = v(), o !== P ? (u = H(), u !== P ? ("}}" === e.substr(Mr, 2) ? (a = ue, 
                Mr += 2) : (a = P, 0 === _r && l(ae)), a !== P ? (Rr = t, r = ie(o), t = r) : (Mr = t, 
                t = P)) : (Mr = t, t = P)) : (Mr = t, t = P)) : (Mr = t, t = P)) : (Mr = t, t = P)), 
                t;
            }
            function v() {
                var t, r, n, o, u, a;
                return t = Mr, r = A(), r !== P ? (n = H(), n !== P ? (61 === e.charCodeAt(Mr) ? (o = ce, 
                Mr++) : (o = P, 0 === _r && l(se)), o === P && ("*=" === e.substr(Mr, 2) ? (o = fe, 
                Mr += 2) : (o = P, 0 === _r && l(le)), o === P && ("/=" === e.substr(Mr, 2) ? (o = he, 
                Mr += 2) : (o = P, 0 === _r && l(pe)), o === P && ("%=" === e.substr(Mr, 2) ? (o = de, 
                Mr += 2) : (o = P, 0 === _r && l(ve)), o === P && ("+=" === e.substr(Mr, 2) ? (o = Ae, 
                Mr += 2) : (o = P, 0 === _r && l(me)), o === P && ("-=" === e.substr(Mr, 2) ? (o = ye, 
                Mr += 2) : (o = P, 0 === _r && l(ge))))))), o !== P ? (u = H(), u !== P ? (a = v(), 
                a !== P ? (Rr = t, r = Ce(r, o, a), t = r) : (Mr = t, t = P)) : (Mr = t, t = P)) : (Mr = t, 
                t = P)) : (Mr = t, t = P)) : (Mr = t, t = P), t === P && (t = m()), t;
            }
            function A() {
                var e;
                return e = N(), e === P && (e = j()), e;
            }
            function m() {
                var t, r, n, o, u, a, i, c, s, f;
                return t = Mr, r = y(), r !== P ? (n = H(), n !== P ? (63 === e.charCodeAt(Mr) ? (o = be, 
                Mr++) : (o = P, 0 === _r && l(xe)), o !== P ? (u = H(), u !== P ? (a = m(), a !== P ? (i = H(), 
                i !== P ? (58 === e.charCodeAt(Mr) ? (c = ke, Mr++) : (c = P, 0 === _r && l(Ee)), 
                c !== P ? (s = H(), s !== P ? (f = m(), f !== P ? (Rr = t, r = Le(r, a, f), t = r) : (Mr = t, 
                t = P)) : (Mr = t, t = P)) : (Mr = t, t = P)) : (Mr = t, t = P)) : (Mr = t, t = P)) : (Mr = t, 
                t = P)) : (Mr = t, t = P)) : (Mr = t, t = P)) : (Mr = t, t = P), t === P && (t = y()), 
                t;
            }
            function y() {
                var t, r, n, o, u, a, i, c;
                if (t = Mr, r = g(), r !== P) {
                    for (n = [], o = Mr, u = H(), u !== P ? ("||" === e.substr(Mr, 2) ? (a = Ne, Mr += 2) : (a = P, 
                    0 === _r && l(je)), a !== P ? (i = H(), i !== P ? (c = g(), c !== P ? (Rr = o, u = Be(r, c), 
                    o = u) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P); o !== P; ) n.push(o), 
                    o = Mr, u = H(), u !== P ? ("||" === e.substr(Mr, 2) ? (a = Ne, Mr += 2) : (a = P, 
                    0 === _r && l(je)), a !== P ? (i = H(), i !== P ? (c = g(), c !== P ? (Rr = o, u = Be(r, c), 
                    o = u) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P);
                    n !== P ? (Rr = t, r = we(r, n), t = r) : (Mr = t, t = P);
                } else Mr = t, t = P;
                return t;
            }
            function g() {
                var t, r, n, o, u, a, i, c;
                if (t = Mr, r = C(), r !== P) {
                    for (n = [], o = Mr, u = H(), u !== P ? ("&&" === e.substr(Mr, 2) ? (a = Ve, Mr += 2) : (a = P, 
                    0 === _r && l($e)), a !== P ? (i = H(), i !== P ? (c = C(), c !== P ? (Rr = o, u = Fe(r, c), 
                    o = u) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P); o !== P; ) n.push(o), 
                    o = Mr, u = H(), u !== P ? ("&&" === e.substr(Mr, 2) ? (a = Ve, Mr += 2) : (a = P, 
                    0 === _r && l($e)), a !== P ? (i = H(), i !== P ? (c = C(), c !== P ? (Rr = o, u = Fe(r, c), 
                    o = u) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P);
                    n !== P ? (Rr = t, r = we(r, n), t = r) : (Mr = t, t = P);
                } else Mr = t, t = P;
                return t;
            }
            function C() {
                var t, r, n, o, u, a, i, c;
                if (t = Mr, r = b(), r !== P) {
                    for (n = [], o = Mr, u = H(), u !== P ? ("===" === e.substr(Mr, 3) ? (a = Oe, Mr += 3) : (a = P, 
                    0 === _r && l(Te)), a === P && ("!==" === e.substr(Mr, 3) ? (a = Me, Mr += 3) : (a = P, 
                    0 === _r && l(Re)), a === P && ("==" === e.substr(Mr, 2) ? (a = Se, Mr += 2) : (a = P, 
                    0 === _r && l(Ue)), a === P && ("!=" === e.substr(Mr, 2) ? (a = ze, Mr += 2) : (a = P, 
                    0 === _r && l(_e))))), a !== P ? (i = H(), i !== P ? (c = b(), c !== P ? (Rr = o, 
                    u = qe(r, a, c), o = u) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, 
                    o = P); o !== P; ) n.push(o), o = Mr, u = H(), u !== P ? ("===" === e.substr(Mr, 3) ? (a = Oe, 
                    Mr += 3) : (a = P, 0 === _r && l(Te)), a === P && ("!==" === e.substr(Mr, 3) ? (a = Me, 
                    Mr += 3) : (a = P, 0 === _r && l(Re)), a === P && ("==" === e.substr(Mr, 2) ? (a = Se, 
                    Mr += 2) : (a = P, 0 === _r && l(Ue)), a === P && ("!=" === e.substr(Mr, 2) ? (a = ze, 
                    Mr += 2) : (a = P, 0 === _r && l(_e))))), a !== P ? (i = H(), i !== P ? (c = b(), 
                    c !== P ? (Rr = o, u = qe(r, a, c), o = u) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, 
                    o = P)) : (Mr = o, o = P);
                    n !== P ? (Rr = t, r = He(r, n), t = r) : (Mr = t, t = P);
                } else Mr = t, t = P;
                return t;
            }
            function b() {
                var t, r, n, o, u, a, i, c;
                if (t = Mr, r = x(), r !== P) {
                    for (n = [], o = Mr, u = H(), u !== P ? ("<=" === e.substr(Mr, 2) ? (a = Ie, Mr += 2) : (a = P, 
                    0 === _r && l(Pe)), a === P && (">=" === e.substr(Mr, 2) ? (a = De, Mr += 2) : (a = P, 
                    0 === _r && l(Ge)), a === P && (60 === e.charCodeAt(Mr) ? (a = Je, Mr++) : (a = P, 
                    0 === _r && l(Ke)), a === P && (62 === e.charCodeAt(Mr) ? (a = Qe, Mr++) : (a = P, 
                    0 === _r && l(We))))), a !== P ? (i = H(), i !== P ? (c = x(), c !== P ? (Rr = o, 
                    u = qe(r, a, c), o = u) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, 
                    o = P); o !== P; ) n.push(o), o = Mr, u = H(), u !== P ? ("<=" === e.substr(Mr, 2) ? (a = Ie, 
                    Mr += 2) : (a = P, 0 === _r && l(Pe)), a === P && (">=" === e.substr(Mr, 2) ? (a = De, 
                    Mr += 2) : (a = P, 0 === _r && l(Ge)), a === P && (60 === e.charCodeAt(Mr) ? (a = Je, 
                    Mr++) : (a = P, 0 === _r && l(Ke)), a === P && (62 === e.charCodeAt(Mr) ? (a = Qe, 
                    Mr++) : (a = P, 0 === _r && l(We))))), a !== P ? (i = H(), i !== P ? (c = x(), c !== P ? (Rr = o, 
                    u = qe(r, a, c), o = u) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, 
                    o = P);
                    n !== P ? (Rr = t, r = He(r, n), t = r) : (Mr = t, t = P);
                } else Mr = t, t = P;
                return t;
            }
            function x() {
                var t, r, n, o, u, a, i, c;
                if (t = Mr, r = k(), r !== P) {
                    for (n = [], o = Mr, u = H(), u !== P ? (Xe.test(e.charAt(Mr)) ? (a = e.charAt(Mr), 
                    Mr++) : (a = P, 0 === _r && l(Ye)), a !== P ? (i = H(), i !== P ? (c = k(), c !== P ? (Rr = o, 
                    u = qe(r, a, c), o = u) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, 
                    o = P); o !== P; ) n.push(o), o = Mr, u = H(), u !== P ? (Xe.test(e.charAt(Mr)) ? (a = e.charAt(Mr), 
                    Mr++) : (a = P, 0 === _r && l(Ye)), a !== P ? (i = H(), i !== P ? (c = k(), c !== P ? (Rr = o, 
                    u = qe(r, a, c), o = u) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, 
                    o = P);
                    n !== P ? (Rr = t, r = He(r, n), t = r) : (Mr = t, t = P);
                } else Mr = t, t = P;
                return t;
            }
            function k() {
                var t, r, n, o, u, a, i, c;
                if (t = Mr, r = E(), r !== P) {
                    for (n = [], o = Mr, u = H(), u !== P ? (Ze.test(e.charAt(Mr)) ? (a = e.charAt(Mr), 
                    Mr++) : (a = P, 0 === _r && l(et)), a !== P ? (i = H(), i !== P ? (c = E(), c !== P ? (Rr = o, 
                    u = qe(r, a, c), o = u) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, 
                    o = P); o !== P; ) n.push(o), o = Mr, u = H(), u !== P ? (Ze.test(e.charAt(Mr)) ? (a = e.charAt(Mr), 
                    Mr++) : (a = P, 0 === _r && l(et)), a !== P ? (i = H(), i !== P ? (c = E(), c !== P ? (Rr = o, 
                    u = qe(r, a, c), o = u) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, 
                    o = P);
                    n !== P ? (Rr = t, r = He(r, n), t = r) : (Mr = t, t = P);
                } else Mr = t, t = P;
                return t;
            }
            function E() {
                var t, r, n, o;
                return t = L(), t === P && (t = Mr, "++" === e.substr(Mr, 2) ? (r = tt, Mr += 2) : (r = P, 
                0 === _r && l(rt)), r === P && ("--" === e.substr(Mr, 2) ? (r = nt, Mr += 2) : (r = P, 
                0 === _r && l(ot)), r === P && (ut.test(e.charAt(Mr)) ? (r = e.charAt(Mr), Mr++) : (r = P, 
                0 === _r && l(at)))), r !== P ? (n = H(), n !== P ? (o = E(), o !== P ? (Rr = t, 
                r = it(r, o), t = r) : (Mr = t, t = P)) : (Mr = t, t = P)) : (Mr = t, t = P)), t;
            }
            function L() {
                var t, r, n, o;
                return t = Mr, r = A(), r !== P ? (n = H(), n !== P ? ("++" === e.substr(Mr, 2) ? (o = tt, 
                Mr += 2) : (o = P, 0 === _r && l(rt)), o === P && ("--" === e.substr(Mr, 2) ? (o = nt, 
                Mr += 2) : (o = P, 0 === _r && l(ot))), o !== P ? (Rr = t, r = ct(r, o), t = r) : (Mr = t, 
                t = P)) : (Mr = t, t = P)) : (Mr = t, t = P), t === P && (t = A()), t;
            }
            function N() {
                var t, r, n, o, u, a, i, c, s, f;
                if (t = Mr, r = Mr, n = j(), n !== P ? (o = H(), o !== P ? (u = B(), u !== P ? (Rr = r, 
                n = st(n, u), r = n) : (Mr = r, r = P)) : (Mr = r, r = P)) : (Mr = r, r = P), r !== P) {
                    for (n = [], o = Mr, u = H(), u !== P ? (a = B(), a !== P ? (Rr = o, u = ft(r, a), 
                    o = u) : (Mr = o, o = P)) : (Mr = o, o = P), o === P && (o = Mr, u = H(), u !== P ? (91 === e.charCodeAt(Mr) ? (a = lt, 
                    Mr++) : (a = P, 0 === _r && l(ht)), a !== P ? (i = H(), i !== P ? (c = v(), c !== P ? (s = H(), 
                    s !== P ? (93 === e.charCodeAt(Mr) ? (f = pt, Mr++) : (f = P, 0 === _r && l(dt)), 
                    f !== P ? (Rr = o, u = vt(r, c), o = u) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, 
                    o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P), o === P && (o = Mr, 
                    u = H(), u !== P ? (46 === e.charCodeAt(Mr) ? (a = At, Mr++) : (a = P, 0 === _r && l(mt)), 
                    a !== P ? (i = H(), i !== P ? (c = w(), c !== P ? (Rr = o, u = yt(r, c), o = u) : (Mr = o, 
                    o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P))); o !== P; ) n.push(o), 
                    o = Mr, u = H(), u !== P ? (a = B(), a !== P ? (Rr = o, u = ft(r, a), o = u) : (Mr = o, 
                    o = P)) : (Mr = o, o = P), o === P && (o = Mr, u = H(), u !== P ? (91 === e.charCodeAt(Mr) ? (a = lt, 
                    Mr++) : (a = P, 0 === _r && l(ht)), a !== P ? (i = H(), i !== P ? (c = v(), c !== P ? (s = H(), 
                    s !== P ? (93 === e.charCodeAt(Mr) ? (f = pt, Mr++) : (f = P, 0 === _r && l(dt)), 
                    f !== P ? (Rr = o, u = vt(r, c), o = u) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, 
                    o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P), o === P && (o = Mr, 
                    u = H(), u !== P ? (46 === e.charCodeAt(Mr) ? (a = At, Mr++) : (a = P, 0 === _r && l(mt)), 
                    a !== P ? (i = H(), i !== P ? (c = w(), c !== P ? (Rr = o, u = yt(r, c), o = u) : (Mr = o, 
                    o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)));
                    n !== P ? (Rr = t, r = gt(r, n), t = r) : (Mr = t, t = P);
                } else Mr = t, t = P;
                return t;
            }
            function j() {
                var t, r, n, o, u, a, i, c, s, f;
                if (t = Mr, r = w(), r === P && (r = M(), r === P && (r = V(), r === P && (r = F(), 
                r === P && (r = Mr, 40 === e.charCodeAt(Mr) ? (n = Ct, Mr++) : (n = P, 0 === _r && l(bt)), 
                n !== P ? (o = H(), o !== P ? (u = v(), u !== P ? (a = H(), a !== P ? (41 === e.charCodeAt(Mr) ? (i = xt, 
                Mr++) : (i = P, 0 === _r && l(kt)), i !== P ? (Rr = r, n = Et(u), r = n) : (Mr = r, 
                r = P)) : (Mr = r, r = P)) : (Mr = r, r = P)) : (Mr = r, r = P)) : (Mr = r, r = P))))), 
                r !== P) {
                    for (n = [], o = Mr, u = H(), u !== P ? (91 === e.charCodeAt(Mr) ? (a = lt, Mr++) : (a = P, 
                    0 === _r && l(ht)), a !== P ? (i = H(), i !== P ? (c = v(), c !== P ? (s = H(), 
                    s !== P ? (93 === e.charCodeAt(Mr) ? (f = pt, Mr++) : (f = P, 0 === _r && l(dt)), 
                    f !== P ? (Rr = o, u = Lt(r, c), o = u) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, 
                    o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P), o === P && (o = Mr, 
                    u = H(), u !== P ? (46 === e.charCodeAt(Mr) ? (a = At, Mr++) : (a = P, 0 === _r && l(mt)), 
                    a !== P ? (i = H(), i !== P ? (c = w(), c !== P ? (Rr = o, u = Nt(r, c), o = u) : (Mr = o, 
                    o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)); o !== P; ) n.push(o), 
                    o = Mr, u = H(), u !== P ? (91 === e.charCodeAt(Mr) ? (a = lt, Mr++) : (a = P, 0 === _r && l(ht)), 
                    a !== P ? (i = H(), i !== P ? (c = v(), c !== P ? (s = H(), s !== P ? (93 === e.charCodeAt(Mr) ? (f = pt, 
                    Mr++) : (f = P, 0 === _r && l(dt)), f !== P ? (Rr = o, u = Lt(r, c), o = u) : (Mr = o, 
                    o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, 
                    o = P), o === P && (o = Mr, u = H(), u !== P ? (46 === e.charCodeAt(Mr) ? (a = At, 
                    Mr++) : (a = P, 0 === _r && l(mt)), a !== P ? (i = H(), i !== P ? (c = w(), c !== P ? (Rr = o, 
                    u = Nt(r, c), o = u) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, 
                    o = P));
                    n !== P ? (Rr = t, r = jt(r, n), t = r) : (Mr = t, t = P);
                } else Mr = t, t = P;
                return t;
            }
            function B() {
                var t, r, n, o, u, a, i, c, s, f;
                if (t = Mr, 40 === e.charCodeAt(Mr) ? (r = Ct, Mr++) : (r = P, 0 === _r && l(bt)), 
                r !== P ? (n = H(), n !== P ? (41 === e.charCodeAt(Mr) ? (o = xt, Mr++) : (o = P, 
                0 === _r && l(kt)), o !== P ? (Rr = t, r = Bt(), t = r) : (Mr = t, t = P)) : (Mr = t, 
                t = P)) : (Mr = t, t = P), t === P) if (t = Mr, 40 === e.charCodeAt(Mr) ? (r = Ct, 
                Mr++) : (r = P, 0 === _r && l(bt)), r !== P) if (n = H(), n !== P) if (o = v(), 
                o !== P) {
                    for (u = [], a = Mr, i = H(), i !== P ? (44 === e.charCodeAt(Mr) ? (c = wt, Mr++) : (c = P, 
                    0 === _r && l(Vt)), c !== P ? (s = H(), s !== P ? (f = v(), f !== P ? (Rr = a, i = $t(o, f), 
                    a = i) : (Mr = a, a = P)) : (Mr = a, a = P)) : (Mr = a, a = P)) : (Mr = a, a = P); a !== P; ) u.push(a), 
                    a = Mr, i = H(), i !== P ? (44 === e.charCodeAt(Mr) ? (c = wt, Mr++) : (c = P, 0 === _r && l(Vt)), 
                    c !== P ? (s = H(), s !== P ? (f = v(), f !== P ? (Rr = a, i = $t(o, f), a = i) : (Mr = a, 
                    a = P)) : (Mr = a, a = P)) : (Mr = a, a = P)) : (Mr = a, a = P);
                    u !== P ? (a = H(), a !== P ? (41 === e.charCodeAt(Mr) ? (i = xt, Mr++) : (i = P, 
                    0 === _r && l(kt)), i !== P ? (Rr = t, r = Ft(o, u), t = r) : (Mr = t, t = P)) : (Mr = t, 
                    t = P)) : (Mr = t, t = P);
                } else Mr = t, t = P; else Mr = t, t = P; else Mr = t, t = P;
                return t;
            }
            function w() {
                var t, r, n, o, u;
                if (_r++, t = Mr, r = Mr, _r++, n = R(), _r--, n === P ? r = void 0 : (Mr = r, r = P), 
                r !== P) if (Tt.test(e.charAt(Mr)) ? (n = e.charAt(Mr), Mr++) : (n = P, 0 === _r && l(Mt)), 
                n !== P) {
                    for (o = [], Rt.test(e.charAt(Mr)) ? (u = e.charAt(Mr), Mr++) : (u = P, 0 === _r && l(St)); u !== P; ) o.push(u), 
                    Rt.test(e.charAt(Mr)) ? (u = e.charAt(Mr), Mr++) : (u = P, 0 === _r && l(St));
                    o !== P ? (Rr = t, r = Ut(n, o), t = r) : (Mr = t, t = P);
                } else Mr = t, t = P; else Mr = t, t = P;
                return _r--, t === P && (r = P, 0 === _r && l(Ot)), t;
            }
            function V() {
                var t, r, n, o, u, a;
                return t = Mr, 91 === e.charCodeAt(Mr) ? (r = lt, Mr++) : (r = P, 0 === _r && l(ht)), 
                r !== P ? (n = H(), n !== P ? (93 === e.charCodeAt(Mr) ? (o = pt, Mr++) : (o = P, 
                0 === _r && l(dt)), o !== P ? (Rr = t, r = zt(), t = r) : (Mr = t, t = P)) : (Mr = t, 
                t = P)) : (Mr = t, t = P), t === P && (t = Mr, 91 === e.charCodeAt(Mr) ? (r = lt, 
                Mr++) : (r = P, 0 === _r && l(ht)), r !== P ? (n = H(), n !== P ? (o = $(), o !== P ? (u = H(), 
                u !== P ? (93 === e.charCodeAt(Mr) ? (a = pt, Mr++) : (a = P, 0 === _r && l(dt)), 
                a !== P ? (Rr = t, r = _t(o), t = r) : (Mr = t, t = P)) : (Mr = t, t = P)) : (Mr = t, 
                t = P)) : (Mr = t, t = P)) : (Mr = t, t = P)), t;
            }
            function $() {
                var t, r, n, o, u, a, i, c;
                if (t = Mr, r = v(), r !== P) {
                    for (n = [], o = Mr, u = H(), u !== P ? (44 === e.charCodeAt(Mr) ? (a = wt, Mr++) : (a = P, 
                    0 === _r && l(Vt)), a !== P ? (i = H(), i !== P ? (c = v(), c !== P ? (Rr = o, u = qt(r, c), 
                    o = u) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P); o !== P; ) n.push(o), 
                    o = Mr, u = H(), u !== P ? (44 === e.charCodeAt(Mr) ? (a = wt, Mr++) : (a = P, 0 === _r && l(Vt)), 
                    a !== P ? (i = H(), i !== P ? (c = v(), c !== P ? (Rr = o, u = qt(r, c), o = u) : (Mr = o, 
                    o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P);
                    n !== P ? (Rr = t, r = Ft(r, n), t = r) : (Mr = t, t = P);
                } else Mr = t, t = P;
                return t;
            }
            function F() {
                var t, r, n, o, u, a, i, c;
                return t = Mr, 123 === e.charCodeAt(Mr) ? (r = Ht, Mr++) : (r = P, 0 === _r && l(It)), 
                r !== P ? (n = H(), n !== P ? (125 === e.charCodeAt(Mr) ? (o = Pt, Mr++) : (o = P, 
                0 === _r && l(Dt)), o !== P ? (Rr = t, r = Gt(), t = r) : (Mr = t, t = P)) : (Mr = t, 
                t = P)) : (Mr = t, t = P), t === P && (t = Mr, 123 === e.charCodeAt(Mr) ? (r = Ht, 
                Mr++) : (r = P, 0 === _r && l(It)), r !== P ? (n = H(), n !== P ? (o = O(), o !== P ? (u = H(), 
                u !== P ? (a = Mr, 44 === e.charCodeAt(Mr) ? (i = wt, Mr++) : (i = P, 0 === _r && l(Vt)), 
                i !== P ? (c = H(), c !== P ? (i = [ i, c ], a = i) : (Mr = a, a = P)) : (Mr = a, 
                a = P), a === P && (a = null), a !== P ? (125 === e.charCodeAt(Mr) ? (i = Pt, Mr++) : (i = P, 
                0 === _r && l(Dt)), i !== P ? (Rr = t, r = Jt(o), t = r) : (Mr = t, t = P)) : (Mr = t, 
                t = P)) : (Mr = t, t = P)) : (Mr = t, t = P)) : (Mr = t, t = P)) : (Mr = t, t = P)), 
                t;
            }
            function O() {
                var t, r, n, o, u, a, i, c;
                if (t = Mr, r = T(), r !== P) {
                    for (n = [], o = Mr, u = H(), u !== P ? (44 === e.charCodeAt(Mr) ? (a = wt, Mr++) : (a = P, 
                    0 === _r && l(Vt)), a !== P ? (i = H(), i !== P ? (c = T(), c !== P ? (Rr = o, u = Kt(r, c), 
                    o = u) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P); o !== P; ) n.push(o), 
                    o = Mr, u = H(), u !== P ? (44 === e.charCodeAt(Mr) ? (a = wt, Mr++) : (a = P, 0 === _r && l(Vt)), 
                    a !== P ? (i = H(), i !== P ? (c = T(), c !== P ? (Rr = o, u = Kt(r, c), o = u) : (Mr = o, 
                    o = P)) : (Mr = o, o = P)) : (Mr = o, o = P)) : (Mr = o, o = P);
                    n !== P ? (Rr = t, r = Ft(r, n), t = r) : (Mr = t, t = P);
                } else Mr = t, t = P;
                return t;
            }
            function T() {
                var t, r, n, o, u, a;
                return t = Mr, r = w(), r === P && (r = _(), r === P && (r = S())), r !== P ? (n = H(), 
                n !== P ? (58 === e.charCodeAt(Mr) ? (o = ke, Mr++) : (o = P, 0 === _r && l(Ee)), 
                o !== P ? (u = H(), u !== P ? (a = v(), a !== P ? (Rr = t, r = Qt(r, a), t = r) : (Mr = t, 
                t = P)) : (Mr = t, t = P)) : (Mr = t, t = P)) : (Mr = t, t = P)) : (Mr = t, t = P), 
                t;
            }
            function M() {
                var e;
                return e = R(), e === P && (e = S(), e === P && (e = _())), e;
            }
            function R() {
                var t, r;
                return t = Mr, "null" === e.substr(Mr, 4) ? (r = Wt, Mr += 4) : (r = P, 0 === _r && l(Xt)), 
                r !== P && (Rr = t, r = Yt()), t = r, t === P && (t = Mr, "true" === e.substr(Mr, 4) ? (r = Zt, 
                Mr += 4) : (r = P, 0 === _r && l(er)), r !== P && (Rr = t, r = tr()), t = r, t === P && (t = Mr, 
                "false" === e.substr(Mr, 5) ? (r = rr, Mr += 5) : (r = P, 0 === _r && l(nr)), r !== P && (Rr = t, 
                r = or()), t = r)), t;
            }
            function S() {
                var t, r, n, o, u;
                if (_r++, t = Mr, r = U(), r !== P) if (46 === e.charCodeAt(Mr) ? (n = At, Mr++) : (n = P, 
                0 === _r && l(mt)), n !== P) {
                    for (o = [], ar.test(e.charAt(Mr)) ? (u = e.charAt(Mr), Mr++) : (u = P, 0 === _r && l(ir)); u !== P; ) o.push(u), 
                    ar.test(e.charAt(Mr)) ? (u = e.charAt(Mr), Mr++) : (u = P, 0 === _r && l(ir));
                    o !== P ? (u = z(), u === P && (u = null), u !== P ? (Rr = t, r = cr(), t = r) : (Mr = t, 
                    t = P)) : (Mr = t, t = P);
                } else Mr = t, t = P; else Mr = t, t = P;
                if (t === P) {
                    if (t = Mr, 46 === e.charCodeAt(Mr) ? (r = At, Mr++) : (r = P, 0 === _r && l(mt)), 
                    r !== P) {
                        if (n = [], ar.test(e.charAt(Mr)) ? (o = e.charAt(Mr), Mr++) : (o = P, 0 === _r && l(ir)), 
                        o !== P) for (;o !== P; ) n.push(o), ar.test(e.charAt(Mr)) ? (o = e.charAt(Mr), 
                        Mr++) : (o = P, 0 === _r && l(ir)); else n = P;
                        n !== P ? (o = z(), o === P && (o = null), o !== P ? (Rr = t, r = cr(), t = r) : (Mr = t, 
                        t = P)) : (Mr = t, t = P);
                    } else Mr = t, t = P;
                    t === P && (t = Mr, r = U(), r !== P ? (n = z(), n === P && (n = null), n !== P ? (Rr = t, 
                    r = cr(), t = r) : (Mr = t, t = P)) : (Mr = t, t = P));
                }
                return _r--, t === P && (r = P, 0 === _r && l(ur)), t;
            }
            function U() {
                var t, r, n, o;
                if (48 === e.charCodeAt(Mr) ? (t = sr, Mr++) : (t = P, 0 === _r && l(fr)), t === P) if (t = Mr, 
                lr.test(e.charAt(Mr)) ? (r = e.charAt(Mr), Mr++) : (r = P, 0 === _r && l(hr)), r !== P) {
                    for (n = [], ar.test(e.charAt(Mr)) ? (o = e.charAt(Mr), Mr++) : (o = P, 0 === _r && l(ir)); o !== P; ) n.push(o), 
                    ar.test(e.charAt(Mr)) ? (o = e.charAt(Mr), Mr++) : (o = P, 0 === _r && l(ir));
                    n !== P ? (r = [ r, n ], t = r) : (Mr = t, t = P);
                } else Mr = t, t = P;
                return t;
            }
            function z() {
                var t, r, n, o, u;
                if (t = Mr, "e" === e.substr(Mr, 1).toLowerCase() ? (r = e.charAt(Mr), Mr++) : (r = P, 
                0 === _r && l(pr)), r !== P) if (Xe.test(e.charAt(Mr)) ? (n = e.charAt(Mr), Mr++) : (n = P, 
                0 === _r && l(Ye)), n === P && (n = null), n !== P) {
                    if (o = [], ar.test(e.charAt(Mr)) ? (u = e.charAt(Mr), Mr++) : (u = P, 0 === _r && l(ir)), 
                    u !== P) for (;u !== P; ) o.push(u), ar.test(e.charAt(Mr)) ? (u = e.charAt(Mr), 
                    Mr++) : (u = P, 0 === _r && l(ir)); else o = P;
                    o !== P ? (r = [ r, n, o ], t = r) : (Mr = t, t = P);
                } else Mr = t, t = P; else Mr = t, t = P;
                return t;
            }
            function _() {
                var t, r, n, o, u;
                if (_r++, t = Mr, 34 === e.charCodeAt(Mr) ? (r = vr, Mr++) : (r = P, 0 === _r && l(Ar)), 
                r !== P) {
                    for (n = [], o = Mr, '\\"' === e.substr(Mr, 2) ? (u = mr, Mr += 2) : (u = P, 0 === _r && l(yr)), 
                    u !== P && (Rr = o, u = gr()), o = u, o === P && (Cr.test(e.charAt(Mr)) ? (o = e.charAt(Mr), 
                    Mr++) : (o = P, 0 === _r && l(br))); o !== P; ) n.push(o), o = Mr, '\\"' === e.substr(Mr, 2) ? (u = mr, 
                    Mr += 2) : (u = P, 0 === _r && l(yr)), u !== P && (Rr = o, u = gr()), o = u, o === P && (Cr.test(e.charAt(Mr)) ? (o = e.charAt(Mr), 
                    Mr++) : (o = P, 0 === _r && l(br)));
                    n !== P ? (34 === e.charCodeAt(Mr) ? (o = vr, Mr++) : (o = P, 0 === _r && l(Ar)), 
                    o !== P ? (Rr = t, r = xr(n), t = r) : (Mr = t, t = P)) : (Mr = t, t = P);
                } else Mr = t, t = P;
                if (t === P) if (t = Mr, 39 === e.charCodeAt(Mr) ? (r = kr, Mr++) : (r = P, 0 === _r && l(Er)), 
                r !== P) {
                    for (n = [], o = Mr, "\\'" === e.substr(Mr, 2) ? (u = Lr, Mr += 2) : (u = P, 0 === _r && l(Nr)), 
                    u !== P && (Rr = o, u = jr()), o = u, o === P && (Br.test(e.charAt(Mr)) ? (o = e.charAt(Mr), 
                    Mr++) : (o = P, 0 === _r && l(wr))); o !== P; ) n.push(o), o = Mr, "\\'" === e.substr(Mr, 2) ? (u = Lr, 
                    Mr += 2) : (u = P, 0 === _r && l(Nr)), u !== P && (Rr = o, u = jr()), o = u, o === P && (Br.test(e.charAt(Mr)) ? (o = e.charAt(Mr), 
                    Mr++) : (o = P, 0 === _r && l(wr)));
                    n !== P ? (39 === e.charCodeAt(Mr) ? (o = kr, Mr++) : (o = P, 0 === _r && l(Er)), 
                    o !== P ? (Rr = t, r = xr(n), t = r) : (Mr = t, t = P)) : (Mr = t, t = P);
                } else Mr = t, t = P;
                return _r--, t === P && (r = P, 0 === _r && l(dr)), t;
            }
            function q() {
                var t, r;
                return _r++, 9 === e.charCodeAt(Mr) ? (t = $r, Mr++) : (t = P, 0 === _r && l(Fr)), 
                t === P && (32 === e.charCodeAt(Mr) ? (t = Or, Mr++) : (t = P, 0 === _r && l(Tr))), 
                _r--, t === P && (r = P, 0 === _r && l(Vr)), t;
            }
            function H() {
                var e, t;
                for (e = [], t = q(); t !== P; ) e.push(t), t = q();
                return e;
            }
            r = void 0 !== r ? r : {};
            var I, P = {}, D = {
                Text: p,
                Expression: v
            }, G = p, J = /^[^{]/, K = u([ "{" ], !0, !1), Q = function(e, t, r) {
                return (e.length > 0 ? [ e.join("") ] : []).concat([ t ], r);
            }, W = a(), X = function(e) {
                return e.length > 0 ? [ e.join("") ] : [];
            }, Y = "{{{", Z = o("{{{", !1), ee = "}}}", te = o("}}}", !1), re = function(e) {
                return {
                    html: !0,
                    expression: e
                };
            }, ne = "{{", oe = o("{{", !1), ue = "}}", ae = o("}}", !1), ie = function(e) {
                return {
                    html: !1,
                    expression: e
                };
            }, ce = "=", se = o("=", !1), fe = "*=", le = o("*=", !1), he = "/=", pe = o("/=", !1), de = "%=", ve = o("%=", !1), Ae = "+=", me = o("+=", !1), ye = "-=", ge = o("-=", !1), Ce = function(e, t, r) {
                return {
                    type: "Assignment",
                    operator: t,
                    left: e,
                    right: r
                };
            }, be = "?", xe = o("?", !1), ke = ":", Ee = o(":", !1), Le = function(e, t, r) {
                return {
                    type: "Conditional",
                    test: e,
                    consequent: t,
                    alternate: r
                };
            }, Ne = "||", je = o("||", !1), Be = function(e, t) {
                return {
                    operator: "||",
                    arg: t
                };
            }, we = function(e, t) {
                return Hr("Logical", e, t);
            }, Ve = "&&", $e = o("&&", !1), Fe = function(e, t) {
                return {
                    operator: "&&",
                    arg: t
                };
            }, Oe = "===", Te = o("===", !1), Me = "!==", Re = o("!==", !1), Se = "==", Ue = o("==", !1), ze = "!=", _e = o("!=", !1), qe = function(e, t, r) {
                return {
                    operator: t,
                    arg: r
                };
            }, He = function(e, t) {
                return Hr("Binary", e, t);
            }, Ie = "<=", Pe = o("<=", !1), De = ">=", Ge = o(">=", !1), Je = "<", Ke = o("<", !1), Qe = ">", We = o(">", !1), Xe = /^[+\-]/, Ye = u([ "+", "-" ], !1, !1), Ze = /^[*\/%]/, et = u([ "*", "/", "%" ], !1, !1), tt = "++", rt = o("++", !1), nt = "--", ot = o("--", !1), ut = /^[+!\-]/, at = u([ "+", "!", "-" ], !1, !1), it = function(e, t) {
                return {
                    type: "++" === e || "--" === e ? "Update" : "Unary",
                    operator: e,
                    argument: t,
                    prefix: !0
                };
            }, ct = function(e, t) {
                return {
                    type: "Update",
                    operator: t,
                    argument: e,
                    prefix: !1
                };
            }, st = function(e, t) {
                return {
                    type: "Call",
                    callee: e,
                    arguments: t
                };
            }, ft = function(e, t) {
                return {
                    type: "Call",
                    arguments: t
                };
            }, lt = "[", ht = o("[", !1), pt = "]", dt = o("]", !1), vt = function(e, t) {
                return {
                    type: "Member",
                    property: t
                };
            }, At = ".", mt = o(".", !1), yt = function(e, t) {
                return {
                    type: "Member",
                    property: {
                        type: "Literal",
                        value: t.name
                    }
                };
            }, gt = function(e, t) {
                return t.reduce(function(e, t) {
                    return t[qr[t.type]] = e, t;
                }, e);
            }, Ct = "(", bt = o("(", !1), xt = ")", kt = o(")", !1), Et = function(e) {
                return e;
            }, Lt = function(e, t) {
                return {
                    property: t
                };
            }, Nt = function(e, t) {
                return {
                    property: {
                        type: "Literal",
                        value: t.name
                    }
                };
            }, jt = function(e, t) {
                return t.reduce(function(e, t) {
                    return {
                        type: "Member",
                        object: e,
                        property: t.property
                    };
                }, e);
            }, Bt = function() {
                return [];
            }, wt = ",", Vt = o(",", !1), $t = function(e, t) {
                return t;
            }, Ft = function(e, t) {
                return [ e ].concat(t);
            }, Ot = c("identifier"), Tt = /^[a-z$_]/i, Mt = u([ [ "a", "z" ], "$", "_" ], !1, !0), Rt = /^[a-z$_0-9]/i, St = u([ [ "a", "z" ], "$", "_", [ "0", "9" ] ], !1, !0), Ut = function(e, t) {
                return {
                    type: "Identifier",
                    name: e + t.join("")
                };
            }, zt = function() {
                return {
                    type: "Array",
                    elements: []
                };
            }, _t = function(e) {
                return {
                    type: "Array",
                    elements: e
                };
            }, qt = function(e, t) {
                return t;
            }, Ht = "{", It = o("{", !1), Pt = "}", Dt = o("}", !1), Gt = function() {
                return {
                    type: "Object",
                    properties: []
                };
            }, Jt = function(e) {
                return {
                    type: "Object",
                    properties: e
                };
            }, Kt = function(e, t) {
                return t;
            }, Qt = function(e, t) {
                return {
                    type: "Property",
                    key: e.name || e.value,
                    value: t
                };
            }, Wt = "null", Xt = o("null", !1), Yt = function() {
                return {
                    type: "Literal",
                    value: null
                };
            }, Zt = "true", er = o("true", !1), tr = function() {
                return {
                    type: "Literal",
                    value: !0
                };
            }, rr = "false", nr = o("false", !1), or = function() {
                return {
                    type: "Literal",
                    value: !1
                };
            }, ur = c("number"), ar = /^[0-9]/, ir = u([ [ "0", "9" ] ], !1, !1), cr = function() {
                return {
                    type: "Literal",
                    value: parseFloat(n())
                };
            }, sr = "0", fr = o("0", !1), lr = /^[1-9]/, hr = u([ [ "1", "9" ] ], !1, !1), pr = o("e", !0), dr = c("string"), vr = '"', Ar = o('"', !1), mr = '\\"', yr = o('\\"', !1), gr = function() {
                return '"';
            }, Cr = /^[^"]/, br = u([ '"' ], !0, !1), xr = function(e) {
                return {
                    type: "Literal",
                    value: e.join("")
                };
            }, kr = "'", Er = o("'", !1), Lr = "\\'", Nr = o("\\'", !1), jr = function() {
                return "'";
            }, Br = /^[^'']/, wr = u([ "'", "'" ], !0, !1), Vr = c("whitespace"), $r = "\t", Fr = o("\t", !1), Or = " ", Tr = o(" ", !1), Mr = 0, Rr = 0, Sr = [ {
                line: 1,
                column: 1
            } ], Ur = 0, zr = [], _r = 0;
            if ("startRule" in r) {
                if (!(r.startRule in D)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
                G = D[r.startRule];
            }
            var qr = {
                Call: "callee",
                Member: "object"
            }, Hr = function(e, t, r) {
                return 0 === r.length ? t : r.reduce(function(t, r) {
                    return {
                        type: e,
                        operator: r.operator,
                        left: t,
                        right: r.arg
                    };
                }, t);
            };
            if (I = G(), I !== P && Mr === e.length) return I;
            throw I !== P && Mr < e.length && l(i()), h(zr, Ur < e.length ? e.charAt(Ur) : null, Ur < e.length ? f(Ur, Ur + 1) : f(Ur, Ur));
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
        var r, n, o, a = e.type, i = e.operator;
        if ("Literal" === a) r = e.value; else if ("Array" === a) r = e.elements.map(function(e) {
            return u(e, t).value;
        }); else if ("Object" === a) r = {}, e.properties.forEach(function(e) {
            r[e.key] = u(e.value, t).value;
        }); else if ("Identifier" === a) o = t.find(function(t) {
            return "undefined" != typeof t[e.name];
        }) || t[0], r = o[e.name], n = function(t) {
            return o[e.name] = t, t;
        }; else if ("Member" === a) {
            var c = u(e.object, t).value, s = u(e.property, t).value;
            r = "undefined" != typeof c ? c[s] : void 0, n = function(e) {
                return c[s] = e, e;
            };
        } else if ("Conditional" === a) r = u(e.test, t).value ? u(e.consequent, t).value : u(e.alternate, t).value; else if ("Unary" === a || "Update" === a) {
            var f = u(e.argument, t), l = f.value;
            r = "!" === i ? !l : "+" === i ? +l : "-" === i ? -l : "++" === i ? l + 1 : "--" === i ? l - 1 : null, 
            "Update" === a && (n = f.set, n && (r = n(r)), e.prefix && (r += "++" === i ? -1 : 1));
        } else if ("Binary" === a || "Logical" === a || "Assignment" === a) {
            var h = u(e.left, t), p = h.value, d = u(e.right, t).value;
            r = "===" === i ? p === d : "!==" === i ? p !== d : "==" === i ? p == d : "!=" === i ? p != d : "<" === i ? p < d : ">" === i ? p > d : "<=" === i ? p <= d : ">=" === i ? p >= d : "&&" === i ? p && d : "||" === i ? p || d : "+" === i ? p + d : "-" === i ? p - d : "*" === i ? p * d : "/" === i ? p / d : "%" === i ? p % d : "*=" === i ? p * d : "/=" === i ? p / d : "%=" === i ? p % d : "+=" === i ? p + d : "-=" === i ? p - d : "=" === i ? d : null, 
            "Assignment" === a && (n = h.set, r = n(r));
        } else if ("Call" === a) {
            var v = e.callee.object ? u(e.callee.object, t).value : t[0], A = u(e.callee, t).value, m = e.arguments.map(function(e) {
                return u(e, t).value;
            });
            r = A ? A.apply(v, m) : void 0;
        }
        return {
            value: r,
            set: n
        };
    }, a = function(e, o) {
        e = "string" == typeof e ? document.querySelector(e) : e[0] || e;
        var c = {}, s = [];
        c.$ = function() {
            s.forEach(function(e) {
                e.taBindings.forEach(function(e) {
                    e.update();
                });
            });
        };
        var f = function(e, t, n, i) {
            "function" == typeof e && (e = {
                update: e
            });
            var s = {
                component: c,
                block: e.block,
                syntax: i,
                eval: function(e) {
                    var t = [ c ];
                    return o && t.push(o), t.push(a.root, r), u(e || i, t).value;
                },
                update: function() {
                    e.update && e.update.apply(s, [ t ].concat(n));
                },
                remove: function() {
                    var e = t.taBindings.indexOf(s);
                    e > -1 && t.taBindings.splice(e, 1);
                }
            };
            return e.create && e.create.apply(s, [ t ].concat(n)), t.taBindings.push(s), s;
        }, l = function(r) {
            if (!([ 1, 3 ].indexOf(r.nodeType) === -1 || r.taComponent && e.contains(r.taEl))) if (r.taComponent && r.taBindings.forEach(function(e) {
                e.remove();
            }), r.taComponent = c, r.taEl = e, r.taBindings = [], 1 === r.nodeType) {
                var o = n(r.attributes), u = Object.keys(a.directives).sort(function(e, t) {
                    return (a.directives[e].order || 100) - (a.directives[t].order || 100);
                }).find(function(e) {
                    var n, u = o.find(function(t) {
                        return n = t.name.match(new RegExp("^" + a.prefix + "(?:" + e + ")$"));
                    });
                    if (n) {
                        var i = t(u.value || "undefined", {
                            startRule: "Expression"
                        });
                        r.removeAttribute(u.name);
                        var c = f(a.directives[e], r, n, i);
                        return s.indexOf(r) === -1 && s.push(r), c.block;
                    }
                });
                u || n(r.childNodes).forEach(l);
            } else if (3 === r.nodeType && r.nodeValue.indexOf("{{") > -1) {
                var h = r.nodeValue;
                t(h, {
                    startRule: "Text"
                }).forEach(function(e) {
                    var t;
                    "string" == typeof e ? t = document.createTextNode(e) : (t = e.html ? document.createElement("span") : document.createTextNode(""), 
                    t.taComponent = c, t.taBindings = [], f(i, t, [ "", e.html ? "html" : "text" ], e.expression), 
                    s.push(t)), r.parentNode.insertBefore(t, r);
                }), r.parentNode.removeChild(r);
            }
        };
        return l(e, 0), c;
    };
    a.version = "0.1.0", a.prefix = "ta-", a.root = {}, a.directives = {}, a.currency = "£", 
    a.parse = t, a.evaluate = u, a.root.number = function(e, t) {
        return Number(e).toFixed(t || 2);
    }, a.root.percent = function(e, t) {
        return Number(100 * e).toFixed(t || 2) + "%";
    };
    var i = a.directives["(text|html)"] = {
        block: !0,
        create: function(e) {
            e.innerHTML = "";
        },
        update: function(e, t, r) {
            var n = o(this.eval());
            n !== this.prevValue && ("html" === r ? e.innerHTML = n : e.textContent = n, this.prevValue = n);
        }
    };
    a.directives.show = function(e) {
        var t = !!this.eval();
        t !== this.prevValue && (e.style.display = t ? "" : "none", this.prevValue = t);
    }, a.directives.exist = {
        order: 3,
        block: !0,
        create: function(e, t) {
            this.marker = document.createComment(t), e.parentNode.insertBefore(this.marker, e), 
            e.parentNode.removeChild(e);
        },
        update: function(e) {
            var t = !!this.eval();
            t !== this.prevValue && (t ? (this.clone = e.cloneNode(!0), this.childComponent = a(this.clone, this.component), 
            this.marker.parentNode.insertBefore(this.clone, this.marker)) : this.clone && this.marker.parentNode.removeChild(this.clone), 
            this.prevValue = t), this.clone && this.childComponent.$();
        }
    }, a.directives["each-(.+)"] = {
        order: 2,
        block: !0,
        create: function(e, t) {
            this.items = [], this.marker = document.createComment(t), e.parentNode.insertBefore(this.marker, e), 
            e.parentNode.removeChild(e);
        },
        update: function(e, t, r) {
            var n = this, o = this.eval() || [];
            n.items.forEach(function(e) {
                o.indexOf(e.data) === -1 && (n.marker.parentNode.removeChild(e.el), n.items.splice(n.items.indexOf(e), 1));
            }), o.forEach(function(t) {
                var o = n.items.find(function(e) {
                    return e.data === t;
                });
                if (!o) {
                    var u = e.cloneNode(!0);
                    o = {
                        el: u,
                        tack: a(u),
                        data: t
                    }, o.tack[r] = t, n.items.push(o);
                }
                o.tack.$(), n.marker.parentNode.insertBefore(o.el, n.marker);
            });
        }
    };
    var c = [ "selected", "checked", "disabled", "readonly", "multiple", "ismap", "defer", "noresize" ];
    return a.directives["attr-(.+)"] = function(e, t, r) {
        var n = this.eval();
        c.indexOf(r) > -1 && (n = n ? r : void 0), "undefined" == typeof n ? e.removeAttribute(r) : e.setAttribute(r, n);
    }, a.directives["class-(.+)"] = function(e, t, r) {
        e.classList.toggle(r, !!this.eval());
    }, a.directives["style-(.+)"] = function(e, t, r) {
        e.style[r] = this.eval();
    }, a.directives.model = {
        create: function(e) {
            var t = this, r = function() {
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
            e.addEventListener("input", r);
        },
        update: function(e) {
            var t = o(this.eval());
            t !== this.prevValue && (e.value = t, this.prevValue = t);
        }
    }, a.directives["on-(.+)"] = {
        create: function(e, t, r) {
            var n = this;
            e.addEventListener(r, function(e) {
                n.component.$event = e, n.eval(), delete n.component.$event, n.component.$();
            });
        }
    }, a.directives.skip = {
        order: 1,
        block: !0
    }, a;
});
