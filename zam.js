!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.zam = t();
}(this, function() {
    "use strict";
    var e = function(e) {
        return String(null !== e && void 0 !== e ? e : "");
    }, t = function(e, t) {
        var r = e.indexOf(t);
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
            var n = String(Math.random()), i = function e(t) {
                t.data === n && (t.stopPropagation(), r(), window.removeEventListener("message", e, !0));
            };
            window.addEventListener("message", i, !0), window.postMessage(n, "*");
        }
        return function() {
            t = !0;
        };
    }, i = function() {
        function e(t, r, n, i) {
            this.message = t, this.expected = r, this.found = n, this.location = i, this.name = "SyntaxError", 
            "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, e);
        }
        function t(t, r) {
            function n() {
                return t.substring(Sr, Or);
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
            function a(e) {
                return {
                    type: "other",
                    description: e
                };
            }
            function s(e) {
                var r, n = Tr[e];
                if (n) return n;
                for (r = e - 1; !Tr[r]; ) r--;
                for (n = {
                    line: (n = Tr[r]).line,
                    column: n.column
                }; r < e; ) 10 === t.charCodeAt(r) ? (n.line++, n.column = 1) : n.column++, r++;
                return Tr[e] = n, n;
            }
            function u(e, t) {
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
            function c(e) {
                Or < Br || (Or > Br && (Br = Or, Fr = []), Fr.push(e));
            }
            function l() {
                var e, r, n, i, o = 32 * Or + 0, a = Rr[o];
                if (a) return Or = a.nextPos, a.result;
                for (e = Or, r = [], J.test(t.charAt(Or)) ? (n = t.charAt(Or), Or++) : (n = I, 0 === Mr && c(G)); n !== I; ) r.push(n), 
                J.test(t.charAt(Or)) ? (n = t.charAt(Or), Or++) : (n = I, 0 === Mr && c(G));
                if (r !== I && (n = f()) !== I && (i = l()) !== I ? (Sr = e, e = r = K(r, n, i)) : (Or = e, 
                e = I), e === I) {
                    for (e = Or, r = [], t.length > Or ? (n = t.charAt(Or), Or++) : (n = I, 0 === Mr && c(Q)); n !== I; ) r.push(n), 
                    t.length > Or ? (n = t.charAt(Or), Or++) : (n = I, 0 === Mr && c(Q));
                    r !== I && (Sr = e, r = W(r)), e = r;
                }
                return Rr[o] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function f() {
                var e, r, n, i, o = 32 * Or + 1, a = Rr[o];
                return a ? (Or = a.nextPos, a.result) : (e = Or, t.substr(Or, 3) === X ? (r = X, 
                Or += 3) : (r = I, 0 === Mr && c(Y)), r !== I && U() !== I && (n = d()) !== I && U() !== I ? (t.substr(Or, 3) === Z ? (i = Z, 
                Or += 3) : (i = I, 0 === Mr && c(ee)), i !== I ? (Sr = e, e = r = te(n)) : (Or = e, 
                e = I)) : (Or = e, e = I), e === I && (e = Or, t.substr(Or, 2) === re ? (r = re, 
                Or += 2) : (r = I, 0 === Mr && c(ne)), r !== I && U() !== I && (n = d()) !== I && U() !== I ? (t.substr(Or, 2) === ie ? (i = ie, 
                Or += 2) : (i = I, 0 === Mr && c(oe)), i !== I ? (Sr = e, e = r = ae(n)) : (Or = e, 
                e = I)) : (Or = e, e = I)), Rr[o] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function d() {
                var e, r, n, i, o = 32 * Or + 2, a = Rr[o];
                return a ? (Or = a.nextPos, a.result) : (e = Or, r = h(), r !== I && U() !== I ? (61 === t.charCodeAt(Or) ? (n = se, 
                Or++) : (n = I, 0 === Mr && c(ue)), n === I && (t.substr(Or, 2) === ce ? (n = ce, 
                Or += 2) : (n = I, 0 === Mr && c(le)), n === I && (t.substr(Or, 2) === fe ? (n = fe, 
                Or += 2) : (n = I, 0 === Mr && c(de)), n === I && (t.substr(Or, 2) === he ? (n = he, 
                Or += 2) : (n = I, 0 === Mr && c(pe)), n === I && (t.substr(Or, 2) === ve ? (n = ve, 
                Or += 2) : (n = I, 0 === Mr && c(me)), n === I && (t.substr(Or, 2) === be ? (n = be, 
                Or += 2) : (n = I, 0 === Mr && c(ye))))))), n !== I && U() !== I && (i = d()) !== I ? (Sr = e, 
                e = r = ge(r, n, i)) : (Or = e, e = I)) : (Or = e, e = I), e === I && (e = p()), 
                Rr[o] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function h() {
                var e, t = 32 * Or + 3, r = Rr[t];
                return r ? (Or = r.nextPos, r.result) : ((e = C()) === I && (e = k()), Rr[t] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function p() {
                var e, r, n, i, o, a, s = 32 * Or + 4, u = Rr[s];
                return u ? (Or = u.nextPos, u.result) : (e = Or, r = v(), r !== I && U() !== I ? (63 === t.charCodeAt(Or) ? (n = xe, 
                Or++) : (n = I, 0 === Mr && c(Ae)), n !== I && U() !== I && (i = p()) !== I && U() !== I ? (58 === t.charCodeAt(Or) ? (o = Pe, 
                Or++) : (o = I, 0 === Mr && c(Ce)), o !== I && U() !== I && (a = p()) !== I ? (Sr = e, 
                e = r = ke(r, i, a)) : (Or = e, e = I)) : (Or = e, e = I)) : (Or = e, e = I), e === I && (e = v()), 
                Rr[s] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function v() {
                var e, r, n, i, o, a, s = 32 * Or + 5, u = Rr[s];
                if (u) return Or = u.nextPos, u.result;
                if (e = Or, (r = m()) !== I) {
                    for (n = [], i = Or, U() !== I ? (t.substr(Or, 2) === we ? (o = we, Or += 2) : (o = I, 
                    0 === Mr && c(Ee)), o !== I && U() !== I && (a = m()) !== I ? (Sr = i, i = $e(r, a)) : (Or = i, 
                    i = I)) : (Or = i, i = I); i !== I; ) n.push(i), i = Or, U() !== I ? (t.substr(Or, 2) === we ? (o = we, 
                    Or += 2) : (o = I, 0 === Mr && c(Ee)), o !== I && U() !== I && (a = m()) !== I ? (Sr = i, 
                    i = $e(r, a)) : (Or = i, i = I)) : (Or = i, i = I);
                    n !== I ? (Sr = e, e = r = Ne(r, n)) : (Or = e, e = I);
                } else Or = e, e = I;
                return Rr[s] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function m() {
                var e, r, n, i, o, a, s = 32 * Or + 6, u = Rr[s];
                if (u) return Or = u.nextPos, u.result;
                if (e = Or, (r = b()) !== I) {
                    for (n = [], i = Or, U() !== I ? (t.substr(Or, 2) === je ? (o = je, Or += 2) : (o = I, 
                    0 === Mr && c(Le)), o !== I && U() !== I && (a = b()) !== I ? (Sr = i, i = ze(r, a)) : (Or = i, 
                    i = I)) : (Or = i, i = I); i !== I; ) n.push(i), i = Or, U() !== I ? (t.substr(Or, 2) === je ? (o = je, 
                    Or += 2) : (o = I, 0 === Mr && c(Le)), o !== I && U() !== I && (a = b()) !== I ? (Sr = i, 
                    i = ze(r, a)) : (Or = i, i = I)) : (Or = i, i = I);
                    n !== I ? (Sr = e, e = r = Ne(r, n)) : (Or = e, e = I);
                } else Or = e, e = I;
                return Rr[s] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function b() {
                var e, r, n, i, o, a, s = 32 * Or + 7, u = Rr[s];
                if (u) return Or = u.nextPos, u.result;
                if (e = Or, (r = y()) !== I) {
                    for (n = [], i = Or, U() !== I ? (t.substr(Or, 3) === Ve ? (o = Ve, Or += 3) : (o = I, 
                    0 === Mr && c(Oe)), o === I && (t.substr(Or, 3) === Se ? (o = Se, Or += 3) : (o = I, 
                    0 === Mr && c(Te)), o === I && (t.substr(Or, 2) === Be ? (o = Be, Or += 2) : (o = I, 
                    0 === Mr && c(Fe)), o === I && (t.substr(Or, 2) === Me ? (o = Me, Or += 2) : (o = I, 
                    0 === Mr && c(Re))))), o !== I && U() !== I && (a = y()) !== I ? (Sr = i, i = Ue(r, o, a)) : (Or = i, 
                    i = I)) : (Or = i, i = I); i !== I; ) n.push(i), i = Or, U() !== I ? (t.substr(Or, 3) === Ve ? (o = Ve, 
                    Or += 3) : (o = I, 0 === Mr && c(Oe)), o === I && (t.substr(Or, 3) === Se ? (o = Se, 
                    Or += 3) : (o = I, 0 === Mr && c(Te)), o === I && (t.substr(Or, 2) === Be ? (o = Be, 
                    Or += 2) : (o = I, 0 === Mr && c(Fe)), o === I && (t.substr(Or, 2) === Me ? (o = Me, 
                    Or += 2) : (o = I, 0 === Mr && c(Re))))), o !== I && U() !== I && (a = y()) !== I ? (Sr = i, 
                    i = Ue(r, o, a)) : (Or = i, i = I)) : (Or = i, i = I);
                    n !== I ? (Sr = e, e = r = qe(r, n)) : (Or = e, e = I);
                } else Or = e, e = I;
                return Rr[s] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function y() {
                var e, r, n, i, o, a, s = 32 * Or + 8, u = Rr[s];
                if (u) return Or = u.nextPos, u.result;
                if (e = Or, (r = g()) !== I) {
                    for (n = [], i = Or, U() !== I ? (t.substr(Or, 2) === De ? (o = De, Or += 2) : (o = I, 
                    0 === Mr && c(Ie)), o === I && (t.substr(Or, 2) === _e ? (o = _e, Or += 2) : (o = I, 
                    0 === Mr && c(He)), o === I && (60 === t.charCodeAt(Or) ? (o = Je, Or++) : (o = I, 
                    0 === Mr && c(Ge)), o === I && (62 === t.charCodeAt(Or) ? (o = Ke, Or++) : (o = I, 
                    0 === Mr && c(Qe))))), o !== I && U() !== I && (a = g()) !== I ? (Sr = i, i = Ue(r, o, a)) : (Or = i, 
                    i = I)) : (Or = i, i = I); i !== I; ) n.push(i), i = Or, U() !== I ? (t.substr(Or, 2) === De ? (o = De, 
                    Or += 2) : (o = I, 0 === Mr && c(Ie)), o === I && (t.substr(Or, 2) === _e ? (o = _e, 
                    Or += 2) : (o = I, 0 === Mr && c(He)), o === I && (60 === t.charCodeAt(Or) ? (o = Je, 
                    Or++) : (o = I, 0 === Mr && c(Ge)), o === I && (62 === t.charCodeAt(Or) ? (o = Ke, 
                    Or++) : (o = I, 0 === Mr && c(Qe))))), o !== I && U() !== I && (a = g()) !== I ? (Sr = i, 
                    i = Ue(r, o, a)) : (Or = i, i = I)) : (Or = i, i = I);
                    n !== I ? (Sr = e, e = r = qe(r, n)) : (Or = e, e = I);
                } else Or = e, e = I;
                return Rr[s] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function g() {
                var e, r, n, i, o, a, s = 32 * Or + 9, u = Rr[s];
                if (u) return Or = u.nextPos, u.result;
                if (e = Or, (r = x()) !== I) {
                    for (n = [], i = Or, U() !== I ? (We.test(t.charAt(Or)) ? (o = t.charAt(Or), Or++) : (o = I, 
                    0 === Mr && c(Xe)), o !== I && U() !== I && (a = x()) !== I ? (Sr = i, i = Ue(r, o, a)) : (Or = i, 
                    i = I)) : (Or = i, i = I); i !== I; ) n.push(i), i = Or, U() !== I ? (We.test(t.charAt(Or)) ? (o = t.charAt(Or), 
                    Or++) : (o = I, 0 === Mr && c(Xe)), o !== I && U() !== I && (a = x()) !== I ? (Sr = i, 
                    i = Ue(r, o, a)) : (Or = i, i = I)) : (Or = i, i = I);
                    n !== I ? (Sr = e, e = r = qe(r, n)) : (Or = e, e = I);
                } else Or = e, e = I;
                return Rr[s] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function x() {
                var e, r, n, i, o, a, s = 32 * Or + 10, u = Rr[s];
                if (u) return Or = u.nextPos, u.result;
                if (e = Or, (r = A()) !== I) {
                    for (n = [], i = Or, U() !== I ? (Ye.test(t.charAt(Or)) ? (o = t.charAt(Or), Or++) : (o = I, 
                    0 === Mr && c(Ze)), o !== I && U() !== I && (a = A()) !== I ? (Sr = i, i = Ue(r, o, a)) : (Or = i, 
                    i = I)) : (Or = i, i = I); i !== I; ) n.push(i), i = Or, U() !== I ? (Ye.test(t.charAt(Or)) ? (o = t.charAt(Or), 
                    Or++) : (o = I, 0 === Mr && c(Ze)), o !== I && U() !== I && (a = A()) !== I ? (Sr = i, 
                    i = Ue(r, o, a)) : (Or = i, i = I)) : (Or = i, i = I);
                    n !== I ? (Sr = e, e = r = qe(r, n)) : (Or = e, e = I);
                } else Or = e, e = I;
                return Rr[s] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function A() {
                var e, r, n, i = 32 * Or + 11, o = Rr[i];
                return o ? (Or = o.nextPos, o.result) : ((e = P()) === I && (e = Or, t.substr(Or, 2) === et ? (r = et, 
                Or += 2) : (r = I, 0 === Mr && c(tt)), r === I && (t.substr(Or, 2) === rt ? (r = rt, 
                Or += 2) : (r = I, 0 === Mr && c(nt)), r === I && (it.test(t.charAt(Or)) ? (r = t.charAt(Or), 
                Or++) : (r = I, 0 === Mr && c(ot)))), r !== I && U() !== I && (n = A()) !== I ? (Sr = e, 
                e = r = at(r, n)) : (Or = e, e = I)), Rr[i] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function P() {
                var e, r, n, i = 32 * Or + 12, o = Rr[i];
                return o ? (Or = o.nextPos, o.result) : (e = Or, r = h(), r !== I && U() !== I ? (t.substr(Or, 2) === et ? (n = et, 
                Or += 2) : (n = I, 0 === Mr && c(tt)), n === I && (t.substr(Or, 2) === rt ? (n = rt, 
                Or += 2) : (n = I, 0 === Mr && c(nt))), n !== I ? (Sr = e, e = r = st(r, n)) : (Or = e, 
                e = I)) : (Or = e, e = I), e === I && (e = h()), Rr[i] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function C() {
                var e, t, r, n, i = 32 * Or + 13, o = Rr[i];
                return o ? (Or = o.nextPos, o.result) : (e = Or, t = Or, r = k(), r !== I && U() !== I && (n = $()) !== I ? (Sr = t, 
                t = r = ut(r, n)) : (Or = t, t = I), t !== I && (r = w()) !== I ? (Sr = e, e = t = ct(t, r)) : (Or = e, 
                e = I), Rr[i] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function k() {
                var e, r, n, i, o, a = 32 * Or + 14, s = Rr[a];
                return s ? (Or = s.nextPos, s.result) : (e = Or, (r = E()) === I && (r = N()) === I && (r = S()) === I && (r = j()) === I && (r = z()) === I && (r = Or, 
                40 === t.charCodeAt(Or) ? (n = lt, Or++) : (n = I, 0 === Mr && c(ft)), n !== I && U() !== I && (i = d()) !== I && U() !== I ? (41 === t.charCodeAt(Or) ? (o = dt, 
                Or++) : (o = I, 0 === Mr && c(ht)), o !== I ? (Sr = r, r = n = pt(i)) : (Or = r, 
                r = I)) : (Or = r, r = I)), r !== I && (n = w()) !== I ? (Sr = e, e = r = vt(r, n)) : (Or = e, 
                e = I), Rr[a] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function w() {
                var e, r, n, i, o, a = 32 * Or + 15, s = Rr[a];
                if (s) return Or = s.nextPos, s.result;
                for (e = [], r = Or, U() !== I ? (91 === t.charCodeAt(Or) ? (n = mt, Or++) : (n = I, 
                0 === Mr && c(bt)), n !== I && U() !== I && (i = d()) !== I && U() !== I ? (93 === t.charCodeAt(Or) ? (o = yt, 
                Or++) : (o = I, 0 === Mr && c(gt)), o !== I ? (Sr = r, r = xt(i)) : (Or = r, r = I)) : (Or = r, 
                r = I)) : (Or = r, r = I), r === I && (r = Or, U() !== I ? (46 === t.charCodeAt(Or) ? (n = At, 
                Or++) : (n = I, 0 === Mr && c(Pt)), n !== I && U() !== I && (i = N()) !== I ? (Sr = r, 
                r = Ct(i)) : (Or = r, r = I)) : (Or = r, r = I)); r !== I; ) e.push(r), r = Or, 
                U() !== I ? (91 === t.charCodeAt(Or) ? (n = mt, Or++) : (n = I, 0 === Mr && c(bt)), 
                n !== I && U() !== I && (i = d()) !== I && U() !== I ? (93 === t.charCodeAt(Or) ? (o = yt, 
                Or++) : (o = I, 0 === Mr && c(gt)), o !== I ? (Sr = r, r = xt(i)) : (Or = r, r = I)) : (Or = r, 
                r = I)) : (Or = r, r = I), r === I && (r = Or, U() !== I ? (46 === t.charCodeAt(Or) ? (n = At, 
                Or++) : (n = I, 0 === Mr && c(Pt)), n !== I && U() !== I && (i = N()) !== I ? (Sr = r, 
                r = Ct(i)) : (Or = r, r = I)) : (Or = r, r = I));
                return Rr[a] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function E() {
                var e, r, n, i, o, a = 32 * Or + 16, s = Rr[a];
                return s ? (Or = s.nextPos, s.result) : (e = Or, t.substr(Or, 3) === kt ? (r = kt, 
                Or += 3) : (r = I, 0 === Mr && c(wt)), r !== I && q() !== I && (n = k()) !== I ? (i = Or, 
                U() !== I && (o = $()) !== I ? (Sr = i, i = Et(n, o)) : (Or = i, i = I), i === I && (i = null), 
                i !== I ? (Sr = e, e = r = $t(n, i)) : (Or = e, e = I)) : (Or = e, e = I), Rr[a] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function $() {
                var e, r, n, i, o, a, s, u, l = 32 * Or + 17, f = Rr[l];
                if (f) return Or = f.nextPos, f.result;
                if (e = Or, 40 === t.charCodeAt(Or) ? (r = lt, Or++) : (r = I, 0 === Mr && c(ft)), 
                r !== I && U() !== I ? (41 === t.charCodeAt(Or) ? (n = dt, Or++) : (n = I, 0 === Mr && c(ht)), 
                n !== I ? (Sr = e, e = r = Nt()) : (Or = e, e = I)) : (Or = e, e = I), e === I) if (e = Or, 
                40 === t.charCodeAt(Or) ? (r = lt, Or++) : (r = I, 0 === Mr && c(ft)), r !== I) if (U() !== I) if ((n = d()) !== I) {
                    for (i = [], o = Or, (a = U()) !== I ? (44 === t.charCodeAt(Or) ? (s = jt, Or++) : (s = I, 
                    0 === Mr && c(Lt)), s !== I && U() !== I && (u = d()) !== I ? (Sr = o, o = a = zt(n, u)) : (Or = o, 
                    o = I)) : (Or = o, o = I); o !== I; ) i.push(o), o = Or, (a = U()) !== I ? (44 === t.charCodeAt(Or) ? (s = jt, 
                    Or++) : (s = I, 0 === Mr && c(Lt)), s !== I && U() !== I && (u = d()) !== I ? (Sr = o, 
                    o = a = zt(n, u)) : (Or = o, o = I)) : (Or = o, o = I);
                    i !== I && (o = U()) !== I ? (41 === t.charCodeAt(Or) ? (a = dt, Or++) : (a = I, 
                    0 === Mr && c(ht)), a !== I ? (Sr = e, e = r = Vt(n, i)) : (Or = e, e = I)) : (Or = e, 
                    e = I);
                } else Or = e, e = I; else Or = e, e = I; else Or = e, e = I;
                return Rr[l] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function N() {
                var e, r, n, i, o, a = 32 * Or + 18, s = Rr[a];
                if (s) return Or = s.nextPos, s.result;
                if (Mr++, e = Or, r = Or, Mr++, n = T(), Mr--, n === I ? r = void 0 : (Or = r, r = I), 
                r !== I) if (St.test(t.charAt(Or)) ? (n = t.charAt(Or), Or++) : (n = I, 0 === Mr && c(Tt)), 
                n !== I) {
                    for (i = [], Bt.test(t.charAt(Or)) ? (o = t.charAt(Or), Or++) : (o = I, 0 === Mr && c(Ft)); o !== I; ) i.push(o), 
                    Bt.test(t.charAt(Or)) ? (o = t.charAt(Or), Or++) : (o = I, 0 === Mr && c(Ft));
                    i !== I ? (Sr = e, e = r = Mt(n, i)) : (Or = e, e = I);
                } else Or = e, e = I; else Or = e, e = I;
                return Mr--, e === I && (r = I, 0 === Mr && c(Ot)), Rr[a] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function j() {
                var e, r, n, i, o = 32 * Or + 19, a = Rr[o];
                return a ? (Or = a.nextPos, a.result) : (e = Or, 91 === t.charCodeAt(Or) ? (r = mt, 
                Or++) : (r = I, 0 === Mr && c(bt)), r !== I && U() !== I ? (93 === t.charCodeAt(Or) ? (n = yt, 
                Or++) : (n = I, 0 === Mr && c(gt)), n !== I ? (Sr = e, e = r = Rt()) : (Or = e, 
                e = I)) : (Or = e, e = I), e === I && (e = Or, 91 === t.charCodeAt(Or) ? (r = mt, 
                Or++) : (r = I, 0 === Mr && c(bt)), r !== I && U() !== I && (n = L()) !== I && U() !== I ? (93 === t.charCodeAt(Or) ? (i = yt, 
                Or++) : (i = I, 0 === Mr && c(gt)), i !== I ? (Sr = e, e = r = Ut(n)) : (Or = e, 
                e = I)) : (Or = e, e = I)), Rr[o] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function L() {
                var e, r, n, i, o, a, s = 32 * Or + 20, u = Rr[s];
                if (u) return Or = u.nextPos, u.result;
                if (e = Or, (r = d()) !== I) {
                    for (n = [], i = Or, U() !== I ? (44 === t.charCodeAt(Or) ? (o = jt, Or++) : (o = I, 
                    0 === Mr && c(Lt)), o !== I && U() !== I && (a = d()) !== I ? (Sr = i, i = qt(r, a)) : (Or = i, 
                    i = I)) : (Or = i, i = I); i !== I; ) n.push(i), i = Or, U() !== I ? (44 === t.charCodeAt(Or) ? (o = jt, 
                    Or++) : (o = I, 0 === Mr && c(Lt)), o !== I && U() !== I && (a = d()) !== I ? (Sr = i, 
                    i = qt(r, a)) : (Or = i, i = I)) : (Or = i, i = I);
                    n !== I ? (Sr = e, e = r = Vt(r, n)) : (Or = e, e = I);
                } else Or = e, e = I;
                return Rr[s] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function z() {
                var e, r, n, i, o, a, s = 32 * Or + 21, u = Rr[s];
                return u ? (Or = u.nextPos, u.result) : (e = Or, 123 === t.charCodeAt(Or) ? (r = Dt, 
                Or++) : (r = I, 0 === Mr && c(It)), r !== I && U() !== I ? (125 === t.charCodeAt(Or) ? (n = _t, 
                Or++) : (n = I, 0 === Mr && c(Ht)), n !== I ? (Sr = e, e = r = Jt()) : (Or = e, 
                e = I)) : (Or = e, e = I), e === I && (e = Or, 123 === t.charCodeAt(Or) ? (r = Dt, 
                Or++) : (r = I, 0 === Mr && c(It)), r !== I && U() !== I && (n = V()) !== I && U() !== I ? (i = Or, 
                44 === t.charCodeAt(Or) ? (o = jt, Or++) : (o = I, 0 === Mr && c(Lt)), o !== I && (a = U()) !== I ? i = o = [ o, a ] : (Or = i, 
                i = I), i === I && (i = null), i !== I ? (125 === t.charCodeAt(Or) ? (o = _t, Or++) : (o = I, 
                0 === Mr && c(Ht)), o !== I ? (Sr = e, e = r = Gt(n)) : (Or = e, e = I)) : (Or = e, 
                e = I)) : (Or = e, e = I)), Rr[s] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function V() {
                var e, r, n, i, o, a, s = 32 * Or + 22, u = Rr[s];
                if (u) return Or = u.nextPos, u.result;
                if (e = Or, (r = O()) !== I) {
                    for (n = [], i = Or, U() !== I ? (44 === t.charCodeAt(Or) ? (o = jt, Or++) : (o = I, 
                    0 === Mr && c(Lt)), o !== I && U() !== I && (a = O()) !== I ? (Sr = i, i = Kt(r, a)) : (Or = i, 
                    i = I)) : (Or = i, i = I); i !== I; ) n.push(i), i = Or, U() !== I ? (44 === t.charCodeAt(Or) ? (o = jt, 
                    Or++) : (o = I, 0 === Mr && c(Lt)), o !== I && U() !== I && (a = O()) !== I ? (Sr = i, 
                    i = Kt(r, a)) : (Or = i, i = I)) : (Or = i, i = I);
                    n !== I ? (Sr = e, e = r = Vt(r, n)) : (Or = e, e = I);
                } else Or = e, e = I;
                return Rr[s] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function O() {
                var e, r, n, i, o = 32 * Or + 23, a = Rr[o];
                return a ? (Or = a.nextPos, a.result) : (e = Or, (r = N()) === I && (r = R()) === I && (r = B()), 
                r !== I && U() !== I ? (58 === t.charCodeAt(Or) ? (n = Pe, Or++) : (n = I, 0 === Mr && c(Ce)), 
                n !== I && U() !== I && (i = d()) !== I ? (Sr = e, e = r = Qt(r, i)) : (Or = e, 
                e = I)) : (Or = e, e = I), Rr[o] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function S() {
                var e, t = 32 * Or + 24, r = Rr[t];
                return r ? (Or = r.nextPos, r.result) : ((e = T()) === I && (e = B()) === I && (e = R()), 
                Rr[t] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function T() {
                var e, r, n = 32 * Or + 25, i = Rr[n];
                return i ? (Or = i.nextPos, i.result) : (e = Or, t.substr(Or, 4) === Wt ? (r = Wt, 
                Or += 4) : (r = I, 0 === Mr && c(Xt)), r !== I && (Sr = e, r = Yt()), (e = r) === I && (e = Or, 
                t.substr(Or, 4) === Zt ? (r = Zt, Or += 4) : (r = I, 0 === Mr && c(er)), r !== I && (Sr = e, 
                r = tr()), (e = r) === I && (e = Or, t.substr(Or, 5) === rr ? (r = rr, Or += 5) : (r = I, 
                0 === Mr && c(nr)), r !== I && (Sr = e, r = ir()), e = r)), Rr[n] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function B() {
                var e, r, n, i, o, a = 32 * Or + 26, s = Rr[a];
                if (s) return Or = s.nextPos, s.result;
                if (Mr++, e = Or, (r = F()) !== I) if (46 === t.charCodeAt(Or) ? (n = At, Or++) : (n = I, 
                0 === Mr && c(Pt)), n !== I) {
                    for (i = [], ar.test(t.charAt(Or)) ? (o = t.charAt(Or), Or++) : (o = I, 0 === Mr && c(sr)); o !== I; ) i.push(o), 
                    ar.test(t.charAt(Or)) ? (o = t.charAt(Or), Or++) : (o = I, 0 === Mr && c(sr));
                    i !== I ? ((o = M()) === I && (o = null), o !== I ? (Sr = e, e = r = ur()) : (Or = e, 
                    e = I)) : (Or = e, e = I);
                } else Or = e, e = I; else Or = e, e = I;
                if (e === I) {
                    if (e = Or, 46 === t.charCodeAt(Or) ? (r = At, Or++) : (r = I, 0 === Mr && c(Pt)), 
                    r !== I) {
                        if (n = [], ar.test(t.charAt(Or)) ? (i = t.charAt(Or), Or++) : (i = I, 0 === Mr && c(sr)), 
                        i !== I) for (;i !== I; ) n.push(i), ar.test(t.charAt(Or)) ? (i = t.charAt(Or), 
                        Or++) : (i = I, 0 === Mr && c(sr)); else n = I;
                        n !== I ? ((i = M()) === I && (i = null), i !== I ? (Sr = e, e = r = ur()) : (Or = e, 
                        e = I)) : (Or = e, e = I);
                    } else Or = e, e = I;
                    e === I && (e = Or, (r = F()) !== I ? ((n = M()) === I && (n = null), n !== I ? (Sr = e, 
                    e = r = ur()) : (Or = e, e = I)) : (Or = e, e = I));
                }
                return Mr--, e === I && (r = I, 0 === Mr && c(or)), Rr[a] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function F() {
                var e, r, n, i, o = 32 * Or + 27, a = Rr[o];
                if (a) return Or = a.nextPos, a.result;
                if (48 === t.charCodeAt(Or) ? (e = cr, Or++) : (e = I, 0 === Mr && c(lr)), e === I) if (e = Or, 
                fr.test(t.charAt(Or)) ? (r = t.charAt(Or), Or++) : (r = I, 0 === Mr && c(dr)), r !== I) {
                    for (n = [], ar.test(t.charAt(Or)) ? (i = t.charAt(Or), Or++) : (i = I, 0 === Mr && c(sr)); i !== I; ) n.push(i), 
                    ar.test(t.charAt(Or)) ? (i = t.charAt(Or), Or++) : (i = I, 0 === Mr && c(sr));
                    n !== I ? e = r = [ r, n ] : (Or = e, e = I);
                } else Or = e, e = I;
                return Rr[o] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function M() {
                var e, r, n, i, o, a = 32 * Or + 28, s = Rr[a];
                if (s) return Or = s.nextPos, s.result;
                if (e = Or, t.substr(Or, 1).toLowerCase() === hr ? (r = t.charAt(Or), Or++) : (r = I, 
                0 === Mr && c(pr)), r !== I) if (We.test(t.charAt(Or)) ? (n = t.charAt(Or), Or++) : (n = I, 
                0 === Mr && c(Xe)), n === I && (n = null), n !== I) {
                    if (i = [], ar.test(t.charAt(Or)) ? (o = t.charAt(Or), Or++) : (o = I, 0 === Mr && c(sr)), 
                    o !== I) for (;o !== I; ) i.push(o), ar.test(t.charAt(Or)) ? (o = t.charAt(Or), 
                    Or++) : (o = I, 0 === Mr && c(sr)); else i = I;
                    i !== I ? e = r = [ r, n, i ] : (Or = e, e = I);
                } else Or = e, e = I; else Or = e, e = I;
                return Rr[a] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function R() {
                var e, r, n, i, o, a = 32 * Or + 29, s = Rr[a];
                if (s) return Or = s.nextPos, s.result;
                if (Mr++, e = Or, 34 === t.charCodeAt(Or) ? (r = mr, Or++) : (r = I, 0 === Mr && c(br)), 
                r !== I) {
                    for (n = [], i = Or, t.substr(Or, 2) === yr ? (o = yr, Or += 2) : (o = I, 0 === Mr && c(gr)), 
                    o !== I && (Sr = i, o = xr()), (i = o) === I && (Ar.test(t.charAt(Or)) ? (i = t.charAt(Or), 
                    Or++) : (i = I, 0 === Mr && c(Pr))); i !== I; ) n.push(i), i = Or, t.substr(Or, 2) === yr ? (o = yr, 
                    Or += 2) : (o = I, 0 === Mr && c(gr)), o !== I && (Sr = i, o = xr()), (i = o) === I && (Ar.test(t.charAt(Or)) ? (i = t.charAt(Or), 
                    Or++) : (i = I, 0 === Mr && c(Pr)));
                    n !== I ? (34 === t.charCodeAt(Or) ? (i = mr, Or++) : (i = I, 0 === Mr && c(br)), 
                    i !== I ? (Sr = e, e = r = Cr(n)) : (Or = e, e = I)) : (Or = e, e = I);
                } else Or = e, e = I;
                if (e === I) if (e = Or, 39 === t.charCodeAt(Or) ? (r = kr, Or++) : (r = I, 0 === Mr && c(wr)), 
                r !== I) {
                    for (n = [], i = Or, t.substr(Or, 2) === Er ? (o = Er, Or += 2) : (o = I, 0 === Mr && c($r)), 
                    o !== I && (Sr = i, o = Nr()), (i = o) === I && (jr.test(t.charAt(Or)) ? (i = t.charAt(Or), 
                    Or++) : (i = I, 0 === Mr && c(Lr))); i !== I; ) n.push(i), i = Or, t.substr(Or, 2) === Er ? (o = Er, 
                    Or += 2) : (o = I, 0 === Mr && c($r)), o !== I && (Sr = i, o = Nr()), (i = o) === I && (jr.test(t.charAt(Or)) ? (i = t.charAt(Or), 
                    Or++) : (i = I, 0 === Mr && c(Lr)));
                    n !== I ? (39 === t.charCodeAt(Or) ? (i = kr, Or++) : (i = I, 0 === Mr && c(wr)), 
                    i !== I ? (Sr = e, e = r = Cr(n)) : (Or = e, e = I)) : (Or = e, e = I);
                } else Or = e, e = I;
                return Mr--, e === I && (r = I, 0 === Mr && c(vr)), Rr[a] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function U() {
                var e, t = 32 * Or + 30, r = Rr[t];
                return r ? (Or = r.nextPos, r.result) : ((e = q()) === I && (e = null), Rr[t] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function q() {
                var e, r, n = 32 * Or + 31, i = Rr[n];
                if (i) return Or = i.nextPos, i.result;
                if (e = [], zr.test(t.charAt(Or)) ? (r = t.charAt(Or), Or++) : (r = I, 0 === Mr && c(Vr)), 
                r !== I) for (;r !== I; ) e.push(r), zr.test(t.charAt(Or)) ? (r = t.charAt(Or), 
                Or++) : (r = I, 0 === Mr && c(Vr)); else e = I;
                return Rr[n] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            r = void 0 !== r ? r : {};
            var D, I = {}, _ = {
                Text: l,
                Expression: d
            }, H = l, J = /^[^{]/, G = o([ "{" ], !0, !1), K = function(e, t, r) {
                return (e.length > 0 ? [ e.join("") ] : []).concat([ t ], r);
            }, Q = {
                type: "any"
            }, W = function(e) {
                return e.length > 0 ? [ e.join("") ] : [];
            }, X = "{{{", Y = i("{{{", !1), Z = "}}}", ee = i("}}}", !1), te = function(e) {
                return {
                    html: !0,
                    expression: e
                };
            }, re = "{{", ne = i("{{", !1), ie = "}}", oe = i("}}", !1), ae = function(e) {
                return {
                    html: !1,
                    expression: e
                };
            }, se = "=", ue = i("=", !1), ce = "*=", le = i("*=", !1), fe = "/=", de = i("/=", !1), he = "%=", pe = i("%=", !1), ve = "+=", me = i("+=", !1), be = "-=", ye = i("-=", !1), ge = function(e, t, r) {
                return {
                    type: "Assignment",
                    operator: t,
                    left: e,
                    right: r
                };
            }, xe = "?", Ae = i("?", !1), Pe = ":", Ce = i(":", !1), ke = function(e, t, r) {
                return {
                    type: "Conditional",
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
                return Ur("Logical", e, t);
            }, je = "&&", Le = i("&&", !1), ze = function(e, t) {
                return {
                    operator: "&&",
                    arg: t
                };
            }, Ve = "===", Oe = i("===", !1), Se = "!==", Te = i("!==", !1), Be = "==", Fe = i("==", !1), Me = "!=", Re = i("!=", !1), Ue = function(e, t, r) {
                return {
                    operator: t,
                    arg: r
                };
            }, qe = function(e, t) {
                return Ur("Binary", e, t);
            }, De = "<=", Ie = i("<=", !1), _e = ">=", He = i(">=", !1), Je = "<", Ge = i("<", !1), Ke = ">", Qe = i(">", !1), We = /^[+\-]/, Xe = o([ "+", "-" ], !1, !1), Ye = /^[*\/%]/, Ze = o([ "*", "/", "%" ], !1, !1), et = "++", tt = i("++", !1), rt = "--", nt = i("--", !1), it = /^[+!\-]/, ot = o([ "+", "!", "-" ], !1, !1), at = function(e, t) {
                return {
                    type: "++" === e || "--" === e ? "Update" : "Unary",
                    operator: e,
                    argument: t,
                    prefix: !0
                };
            }, st = function(e, t) {
                return {
                    type: "Update",
                    operator: t,
                    argument: e,
                    prefix: !1
                };
            }, ut = function(e, t) {
                return {
                    type: "Call",
                    callee: e,
                    arguments: t
                };
            }, ct = function(e, t) {
                return t.reduce(function(e, t) {
                    return {
                        type: "Member",
                        property: t,
                        object: e
                    };
                }, e);
            }, lt = "(", ft = i("(", !1), dt = ")", ht = i(")", !1), pt = function(e) {
                return e;
            }, vt = function(e, t) {
                return t.reduce(function(e, t) {
                    return {
                        type: "Member",
                        object: e,
                        property: t
                    };
                }, e);
            }, mt = "[", bt = i("[", !1), yt = "]", gt = i("]", !1), xt = function(e) {
                return e;
            }, At = ".", Pt = i(".", !1), Ct = function(e) {
                return {
                    type: "Literal",
                    value: e.name
                };
            }, kt = "new", wt = i("new", !1), Et = function(e, t) {
                return t;
            }, $t = function(e, t) {
                return {
                    type: "NewExpression",
                    callee: e,
                    arguments: t || []
                };
            }, Nt = function() {
                return [];
            }, jt = ",", Lt = i(",", !1), zt = function(e, t) {
                return t;
            }, Vt = function(e, t) {
                return [ e ].concat(t);
            }, Ot = a("identifier"), St = /^[a-z$_]/i, Tt = o([ [ "a", "z" ], "$", "_" ], !1, !0), Bt = /^[a-z$_0-9]/i, Ft = o([ [ "a", "z" ], "$", "_", [ "0", "9" ] ], !1, !0), Mt = function(e, t) {
                return {
                    type: "Identifier",
                    name: e + t.join("")
                };
            }, Rt = function() {
                return {
                    type: "Array",
                    elements: []
                };
            }, Ut = function(e) {
                return {
                    type: "Array",
                    elements: e
                };
            }, qt = function(e, t) {
                return t;
            }, Dt = "{", It = i("{", !1), _t = "}", Ht = i("}", !1), Jt = function() {
                return {
                    type: "Object",
                    properties: []
                };
            }, Gt = function(e) {
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
            }, Wt = "null", Xt = i("null", !1), Yt = function() {
                return {
                    type: "Literal",
                    value: null
                };
            }, Zt = "true", er = i("true", !1), tr = function() {
                return {
                    type: "Literal",
                    value: !0
                };
            }, rr = "false", nr = i("false", !1), ir = function() {
                return {
                    type: "Literal",
                    value: !1
                };
            }, or = a("number"), ar = /^[0-9]/, sr = o([ [ "0", "9" ] ], !1, !1), ur = function() {
                return {
                    type: "Literal",
                    value: parseFloat(n())
                };
            }, cr = "0", lr = i("0", !1), fr = /^[1-9]/, dr = o([ [ "1", "9" ] ], !1, !1), hr = "e", pr = i("e", !0), vr = a("string"), mr = '"', br = i('"', !1), yr = '\\"', gr = i('\\"', !1), xr = function() {
                return '"';
            }, Ar = /^[^"]/, Pr = o([ '"' ], !0, !1), Cr = function(e) {
                return {
                    type: "Literal",
                    value: e.join("")
                };
            }, kr = "'", wr = i("'", !1), Er = "\\'", $r = i("\\'", !1), Nr = function() {
                return "'";
            }, jr = /^[^'']/, Lr = o([ "'", "'" ], !0, !1), zr = /^[\t ]/, Vr = o([ "\t", " " ], !1, !1), Or = 0, Sr = 0, Tr = [ {
                line: 1,
                column: 1
            } ], Br = 0, Fr = [], Mr = 0, Rr = {};
            if ("startRule" in r) {
                if (!(r.startRule in _)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
                H = _[r.startRule];
            }
            var Ur = function(e, t, r) {
                return 0 === r.length ? t : r.reduce(function(t, r) {
                    return {
                        type: e,
                        operator: r.operator,
                        left: t,
                        right: r.arg
                    };
                }, t);
            };
            if ((D = H()) !== I && Or === t.length) return D;
            throw D !== I && Or < t.length && c({
                type: "end"
            }), function(t, r, n) {
                return new e(e.buildMessage(t, r), t, r, n);
            }(Fr, Br < t.length ? t.charAt(Br) : null, Br < t.length ? u(Br, Br + 1) : u(Br, Br));
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
                return a[e.type](e);
            }
            var a = {
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
            parse: t
        };
    }(), o = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Expression";
        return i.parse(e, {
            startRule: t
        });
    }, a = function t(r, n) {
        var i = void 0, o = void 0, a = r.type, s = r.operator;
        if ("Literal" === a) i = r.value; else if ("Array" === a) i = r.elements.map(function(e) {
            return t(e, n).value;
        }); else if ("Object" === a) i = {}, r.properties.forEach(function(e) {
            i[e.key] = t(e.value, n).value;
        }); else if ("Identifier" === a) {
            for (var u = n; u && void 0 === u[r.name]; ) u = u.$parent;
            u || (u = n), i = u[r.name], o = function(e) {
                return u[r.name] = e, e;
            };
        } else if ("Member" === a) {
            var c = t(r.object, n).value, l = t(r.property, n).value;
            i = void 0 !== c ? c[l] : void 0, o = function(e) {
                return c[l] = e, e;
            };
        } else if ("Conditional" === a) i = t(r.test, n).value ? t(r.consequent, n).value : t(r.alternate, n).value; else if ("Unary" === a || "Update" === a) {
            var f = t(r.argument, n), d = f.value;
            i = "!" === s ? !d : "+" === s ? +d : "-" === s ? -d : "++" === s ? d + 1 : "--" === s ? d - 1 : null, 
            "Update" === a && ((o = f.set) && (i = o(i)), r.prefix || (i += "++" === s ? -1 : 1));
        } else if ("Binary" === a || "Logical" === a || "Assignment" === a) {
            var h = t(r.left, n), p = h.value, v = t(r.right, n).value;
            i = "===" === s ? p === v : "!==" === s ? p !== v : "==" === s ? p == v : "!=" === s ? p != v : "<" === s ? p < v : ">" === s ? p > v : "<=" === s ? p <= v : ">=" === s ? p >= v : "&&" === s ? p && v : "||" === s ? p || v : "+" === s ? "string" == typeof (p + v) ? e(p) + e(v) : p + v : "-" === s ? p - v : "*" === s ? p * v : "/" === s ? p / v : "%" === s ? p % v : "*=" === s ? p * v : "/=" === s ? p / v : "%=" === s ? p % v : "+=" === s ? p + v : "-=" === s ? p - v : "=" === s ? v : null, 
            "Assignment" === a && (o = h.set, i = o(i));
        } else if ("Call" === a || "NewExpression" === a) {
            var m = r.callee.object ? t(r.callee.object, n).value : n, b = t(r.callee, n).value, y = r.arguments.map(function(e) {
                return t(e, n).value;
            });
            i = b ? "Call" === a ? b.apply(m, y) : new (b.bind.apply(b, y))() : void 0;
        }
        return {
            value: i,
            set: o
        };
    }, s = [], u = function e(t) {
        return t.inline && (e.inlineParser = t), t.template && (t.block = !0, t.order = .5), 
        t.order || (t.order = 100), s.push(t), s.sort(function(e, t) {
            return e.order - t.order;
        }), t;
    };
    u.forEach = s.forEach.bind(s), u.directives = s, u.prefix = "z-";
    var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, l = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }, f = function() {
        function e(t, r) {
            var n = this, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (l(this, e), this.node = t, this.type = t.nodeType, this.id = Math.floor(1e3 + 9e3 * Math.random()).toString(16), 
            this.children = [], this.binds = [], t.vnode && !r) i ? (this.parent = t.vnode, 
            t.vnode = this, this.children = this.parent.children, this.binds = this.parent.binds, 
            this.parent.children = [], this.parent.binds = []) : (t.vnode.parent = this, this.pointer = t.vnode); else if (r) {
                if (t.vnode = this, this.blocked = r.blocked, r.binds.forEach(function(e) {
                    n.bind({
                        ast: e.ast,
                        directive: e.directive,
                        args: e.args,
                        key: e.key
                    });
                }), r.tagName && (this.tag = r.tagName), r.attributes && (this.attributes = r.attributes.map(function(e) {
                    return {
                        name: e.name,
                        value: e.value
                    };
                }), this.removedAttrs = r.removedAttrs.map(function(e) {
                    return {
                        name: e.name,
                        value: e.value
                    };
                })), r.children) {
                    var o = Array.from(t.childNodes).filter(function(e) {
                        return 1 === e.nodeType || 3 === e.nodeType;
                    });
                    r.children.forEach(function(e) {
                        n.children.push(e.fragment ? h(t, e) : h(o.shift(), e));
                    });
                }
            } else t.vnode = this, this.initialize();
        }
        return e.prototype.initialize = function() {
            var e = this, t = this.node;
            if (1 === this.type) this.tag = t.tagName, this.attributes = Array.from(t.attributes).map(function(e) {
                return {
                    name: e.name,
                    value: e.value
                };
            }), this.removedAttrs = [], u.directives.forEach(function(r) {
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
                        var a = o(n.value || "undefined");
                        e.removedAttrs.push(n), t.removeAttribute(n.name), e.bind({
                            directive: r,
                            ast: a,
                            args: i
                        });
                    }
                }));
            }), !this.blocked && t.childNodes && Array.from(t.childNodes).filter(function(e) {
                return 1 === e.nodeType || 3 === e.nodeType;
            }).map(function(t) {
                return e.children.push(h(t));
            }); else if (3 === this.type && t.nodeValue.indexOf("{{") > -1) {
                var r = o(t.nodeValue, "Text");
                if (1 === r.length) {
                    if ("string" != typeof r[0]) {
                        if (r[0].html) {
                            var n = this.node;
                            t = this.node = document.createElement("span"), n.parentNode.replaceChild(this.node, n);
                        } else this.node.textContent = "";
                        this.bind({
                            directive: u.inlineParser,
                            ast: r[0].expression,
                            args: [ "", r[0].html ? "html" : "text" ]
                        });
                    }
                } else {
                    var i = document.createDocumentFragment();
                    this.fragment = !0, r.forEach(function(t) {
                        var r = "string" == typeof t ? document.createTextNode(t) : t.html ? document.createElement("span") : document.createTextNode(""), n = h(r);
                        "string" != typeof t && n.bind({
                            directive: u.inlineParser,
                            ast: t.expression,
                            args: [ "", t.html ? "html" : "text" ]
                        }), i.appendChild(r), e.children.push(n);
                    }), t.parentNode.replaceChild(i, t);
                }
            }
        }, e.prototype.bind = function(e) {
            if (this.binds.push(e), e.directive.block && (this.blocked = !0), e.directive.template) {
                var t = document.createElement("span");
                t.innerHTML = e.directive.template, t = t.childNodes[0], Array.from(this.attributes).forEach(function(e) {
                    return t.setAttribute(e.name, e.value);
                }), this.node.parentNode.replaceChild(t, this.node), this.node = t, this.tag = t.tagName;
            }
            d(e, "initialize", void 0, this);
        }, e.prototype.clone = function() {
            var e = this.node.cloneNode(!0);
            return delete e.vnode, h(e, this);
        }, e.prototype.createBinds = function(e) {
            var t = this;
            this.scope = e, this.binds.forEach(function(r) {
                return d(r, "create", e, t);
            }), this.children.forEach(function(t) {
                return t.createBinds(e);
            });
        }, e.prototype.updateBinds = function(e) {
            var t = this;
            this.scope = e, this.binds.forEach(function(r) {
                return d(r, "update", e, t);
            }), this.children.forEach(function(t) {
                return t.updateBinds(e);
            }), this.pointer && this.pointer.updateBinds(this.pointer.scope);
        }, e.prototype.destroyBinds = function(e) {
            var t = this;
            this.scope = e, this.binds.forEach(function(r) {
                d(r, "destroy", e, t), t.removedAttrs && t.removedAttrs.forEach(function(e) {
                    return t.node.setAttribute(e.name, e.value);
                });
            }), delete this.scope, delete this.node.vnode;
        }, e;
    }(), d = function(e, t, r, n) {
        if (e.directive[t]) {
            var i = function(t) {
                return a(t || e.ast, r).value;
            };
            if ("initialize" === t) {
                var o;
                (o = e.directive[t]).call.apply(o, [ e, n.node ].concat(e.args));
            } else {
                var s;
                (s = e.directive[t]).call.apply(s, [ e, r, n.node, i ].concat(e.args));
            }
        }
    }, h = function(e, t, r) {
        return e instanceof f ? e : ("string" == typeof e ? e = document.querySelector(e) : e[0] && (e = e[0]), 
        new f(e, t, r));
    }, p = 0, v = void 0, m = function(e, t) {
        e[t] && e[t].forEach(function(e) {
            return e();
        });
    }, b = function(e, t, r) {
        var n = Reflect.get(e, t, r);
        return e instanceof Array || "function" != typeof n ? n : n.bind(e);
    }, y = function e(t, r) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        if (!(n.indexOf(r) > -1)) {
            n = n.concat([ r ]);
            var i = new Proxy(r, {
                get: b,
                set: function(r, i, o, a) {
                    v || ("object" !== (void 0 === o ? "undefined" : c(o)) || null === o || o instanceof Date || (o = e(t, o, n)), 
                    t.$(!0)), v = !0;
                    var s = Reflect.set(r, i, o, a);
                    return v = !1, s;
                },
                deleteProperty: function(e, r) {
                    v || t.$(!0), v = !0;
                    var n = Reflect.deleteProperty(e, r);
                    return v = !1, n;
                }
            });
            return r instanceof Array ? r.forEach(function(e, t) {
                "object" !== (void 0 === e ? "undefined" : c(e)) || e instanceof Date || (i[t] = e);
            }) : Object.keys(r).forEach(function(e) {
                var n = r[e];
                "object" !== (void 0 === n ? "undefined" : c(n)) || n instanceof Date || r === t && "$" === e.charAt(0) || (i[e] = n);
            }), i;
        }
    }, g = function e(r, i, s) {
        var u = h(r, null, !0), c = {}, l = [], f = void 0, d = void 0, v = Object.assign({
            $id: p++,
            $: function(e) {
                e ? f || (f = n(function() {
                    return v.$();
                })) : (f && (f = f()), u.updateBinds(v), m(c, "update"));
            },
            $destroy: function() {
                u.destroyBinds(v), d = !0, m(c, "destroy");
            },
            $on: function(e, t) {
                c[e] || (c[e] = []), c[e].push(t);
            },
            $off: function(e, r) {
                c[e] && t(c[e], r);
            },
            $watch: function(e, t) {
                l.push({
                    expr: e,
                    syntax: o(e),
                    cb: t
                });
            },
            $unwatch: function(e, r) {
                var n = l.find(function(t) {
                    return t.expr === e && t.cb === r;
                });
                n && t(l, n);
            },
            get $parent() {
                return s || u.parent && u.parent.scope || e.root;
            }
        }, i);
        return v.$on("update", function() {
            l.forEach(function(e) {
                var t = a(e.syntax, v).value;
                t !== e.val && (e.val = t, e.cb(t));
            });
        }), u.createBinds(v), v.$(!0), y(v, v);
    };
    Object.assign(g, {
        version: "0.2.1",
        parse: o,
        evaluate: a,
        directive: u,
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
    var x = [ "selected", "checked", "disabled", "readonly", "multiple", "ismap", "defer", "noresize" ];
    return [ {
        attribute: "{prefix}(text|html)",
        block: !0,
        inline: !0,
        create: function(e, t) {
            t.innerHTML = "";
        },
        update: function(t, r, n, i, o) {
            var a = e(n());
            a !== this.prevValue && ("html" === o ? r.innerHTML = a : r.textContent = a, this.prevValue = a);
        }
    }, {
        attribute: "{prefix}show",
        update: function(e, t, r) {
            var n = r() ? "" : "none";
            n !== this.prevValue && (t.style.display = n, this.prevValue = n);
        }
    }, {
        attribute: "{prefix}(?:attr-(.+)|(" + [ "accept", "accept-charset", "accesskey", "action", "align", "alt", "async", "autocomplete", "autofocus", "autoplay", "autosave", "buffered", "challenge", "charset", "checked", "cite", "class", "code", "codebase", "cols", "colspan", "content", "contenteditable", "contextmenu", "controls", "coords", "crossorigin", "data", "data-*", "datetime", "default", "defer", "dir", "dirname", "disabled", "download", "draggable", "dropzone", "enctype", "for", "form", "formaction", "headers", "hidden", "high", "href", "hreflang", "http-equiv", "icon", "id", "integrity", "ismap", "itemprop", "keytype", "kind", "label", "lang", "language", "list", "loop", "low", "manifest", "max", "maxlength", "minlength", "media", "method", "min", "multiple", "muted", "name", "novalidate", "open", "optimum", "pattern", "ping", "placeholder", "poster", "preload", "radiogroup", "readonly", "rel", "required", "reversed", "rows", "rowspan", "sandbox", "scope", "scoped", "seamless", "selected", "shape", "size", "sizes", "slot", "span", "spellcheck", "src", "srcdoc", "srclang", "srcset", "start", "step", "style", "summary", "tabindex", "target", "title", "type", "usemap", "value", "wrap" ].join("|") + "))",
        update: function(e, t, r, n, i, o) {
            i = i || o;
            var a = r();
            a !== this.prevValue && (this.prevValue = a, x.indexOf(i) > -1 && (a = a ? i : void 0), 
            void 0 === a ? t.removeAttribute(i) : t.setAttribute(i, a));
        }
    }, {
        attribute: "{prefix}class-(.+)",
        update: function(e, t, r, n, i) {
            var o = r();
            o !== this.prevValue && (this.prevValue = o, t.classList.toggle(i, o));
        }
    }, {
        attribute: "{prefix}exist",
        order: 3,
        block: !0,
        initialize: function(e) {
            this.template = h(e.cloneNode(!0));
        },
        create: function(e, t, r, n) {
            var i = this;
            this.marker = document.createComment(n), t.parentNode.replaceChild(this.marker, t), 
            e.$on("update", function() {
                i.view && i.view.$();
            });
        },
        update: function(e, t, r) {
            var n = !!r();
            n !== this.prevValue && (n ? (this.vnode = this.template.clone(), this.marker.parentNode.insertBefore(this.vnode.node, this.marker), 
            this.view = g(this.vnode, void 0, e)) : this.view && (this.marker.parentNode.removeChild(this.vnode.node), 
            this.view.$destroy(), delete this.vnode, delete this.view), this.prevValue = n);
        }
    }, {
        attribute: "{prefix}(?:style-(.+)|(" + [ "align-.*", "all", "animation", "animation-.*", "backface-visibility", "background", "background-.*", "border", "border-.*", "bottom", "box-.*", "break-.*", "caption-side", "caret-color", "clear", "clip", "clip-path", "color", "column-.*", "columns", "content", "counter-.*", "cursor", "direction", "display", "empty-cells", "filter", "flex-.*", "float", "font", "font-.*", "grid", "grid-.*", "height", "hyphens", "image-.*", "ime-mode", "inline-size", "isolation", "justify-content", "left", "letter-spacing", "line-.*", "list-.*", "margin", "margin-.*", "mask", "mask-.*", "max-height", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "object-fit", "object-position", "offset-.*", "opacity", "order", "orphans", "outline", "outline-.*", "overflow", "overflow-.*", "padding", "padding-.*", "page-break-.*", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "scroll-.*", "shape-.*", "tab-size", "table-layout", "text-.*", "top", "touch-action", "transform", "transform-.*", "transition", "transition-.*", "unicode-bidi", "unset", "vertical-align", "visibility", "white-space", "widows", "width", "will-change", "word-.*", "writing-mode", "z-index" ].join("|") + "))",
        update: function(e, t, r, n, i, o) {
            var a = r();
            a !== this.prevValue && (this.prevValue = a, t.style[i || o] = a);
        }
    }, {
        attribute: "{prefix}model",
        block: !0,
        order: 3,
        create: function(e, t, n) {
            var i = this, a = t.tagName.toLowerCase(), s = (t.getAttribute("type") || "").toLowerCase();
            this.type = "checkbox" === s ? "checkbox" : "select" === a ? "select" : "radio" === s ? "radio" : [ "range", "number" ].indexOf(s) > -1 ? "number" : [ "date", "datetime-local", "time", "month", "week" ].indexOf(s) > -1 ? "date" : "text", 
            "radio" !== this.type || t.getAttribute("name") || t.setAttribute("name", r(e.$id + JSON.stringify(this.ast))), 
            this.getValue = function(e) {
                var t = e.getAttribute(u.prefix + "value");
                return t ? n(o(t)) : e.getAttribute("value");
            }, this.handler = function() {
                if ("radio" !== i.type || t.checked) {
                    var r = "checkbox" === i.type ? !!t.checked : "select" === i.type ? i.getValue(t.options[t.selectedIndex]) : "radio" === i.type ? i.getValue(t) : "number" === i.type ? Number(t.value) : "date" === i.type ? t.valueAsDate : t.value;
                    r !== i.prevValue && (i.prevValue = r, n({
                        type: "Assignment",
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
            if (o !== this.prevValue) {
                if ("checkbox" === this.type) r.checked = !!o; else if ("select" === this.type) r.selectedIndex = Array.from(r.options).reduce(function(t, r, n) {
                    var a = i.getValue(r);
                    return r.setAttribute("value", e(a)), a === o ? n : t;
                }, -1); else if ("radio" === this.type) {
                    var a = this.getValue(r);
                    r.setAttribute("value", e(a)), r.checked = o === a;
                } else "number" === this.type ? r.value = Number(o) : "date" === this.type ? r.valueAsDate = o : r.value = e(o);
                this.prevValue = o;
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
                    return a(i, (t = {}, t[r] = e, t)).value;
                };
            } else this.key = function(e) {
                return JSON.stringify(e);
            };
            this.vnode = h(e.cloneNode(!0));
        },
        create: function(e, t, r, n) {
            this.marker = document.createComment(n), t.parentNode.replaceChild(this.marker, t);
        },
        update: function(e, t, r, n, i) {
            var o = this, a = r() || [], s = Object.keys(a);
            this.items = this.items.filter(function(e) {
                var t = s.findIndex(function(t) {
                    return o.key(a[t]) === o.key(e.datum);
                });
                return t > -1 ? (e.view.$index = s[t], e.view.$(), s.splice(t, 1), !0) : (o.marker.parentNode.removeChild(e.vnode.node), 
                e.view.$destroy(), !1);
            }), s.map(function(t) {
                var r;
                if (!o.items.find(function(e) {
                    return o.key(a[t]) === o.key(e.datum);
                })) {
                    var n = o.vnode.clone(), s = {
                        vnode: n,
                        datum: a[t]
                    };
                    o.marker.parentNode.insertBefore(n.node, o.marker), s.view = g(s.vnode, (r = {}, 
                    r[i] = s.datum, r.$index = t, r), e), s.view.$(), o.items.push(s);
                }
            });
        }
    }, {
        attribute: "{prefix}(?:on-(.+)|(" + [ "load", "error", "focus", "blur", "click", "dblclick", "mouse.*", "keyup", "keydown", "keypress", "input", "change", "submit", "reset", "scroll", "resize", "drag.*", "drop" ].join("|") + "))",
        create: function(e, t, r, n, i, o) {
            this.handler = function(t) {
                e.$event = t, r(), delete e.$event;
            }, t.addEventListener(i || o, this.handler);
        },
        destroy: function(e, t, r, n, i, o) {
            t.removeEventListener(i || o, this.handler);
        }
    }, {
        attribute: "{prefix}skip",
        order: 1,
        block: !0
    } ].forEach(u), g;
});
