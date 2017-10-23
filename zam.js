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
            var n = String(Math.random()), i = function e(t) {
                t.data === n && (t.stopPropagation(), r(), window.removeEventListener("message", e, !0));
            };
            window.addEventListener("message", i, !0), window.postMessage(n, "*");
        }
        return function() {
            t = !0;
        };
    }, i = function(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        var i = {};
        return r.forEach(function(t) {
            return i[t] = e[t];
        }), i;
    }, o = function() {
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
            function s(e) {
                return {
                    type: "other",
                    description: e
                };
            }
            function a(e) {
                var r, n = Br[e];
                if (n) return n;
                for (r = e - 1; !Br[r]; ) r--;
                for (n = {
                    line: (n = Br[r]).line,
                    column: n.column
                }; r < e; ) 10 === t.charCodeAt(r) ? (n.line++, n.column = 1) : n.column++, r++;
                return Br[e] = n, n;
            }
            function u(e, t) {
                var r = a(e), n = a(t);
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
                Or < Fr || (Or > Fr && (Fr = Or, Mr = []), Mr.push(e));
            }
            function l() {
                var e, r, n, i, o = 32 * Or + 0, s = qr[o];
                if (s) return Or = s.nextPos, s.result;
                for (e = Or, r = [], J.test(t.charAt(Or)) ? (n = t.charAt(Or), Or++) : (n = I, 0 === Rr && c(G)); n !== I; ) r.push(n), 
                J.test(t.charAt(Or)) ? (n = t.charAt(Or), Or++) : (n = I, 0 === Rr && c(G));
                if (r !== I && (n = f()) !== I && (i = l()) !== I ? (Sr = e, e = r = K(r, n, i)) : (Or = e, 
                e = I), e === I) {
                    for (e = Or, r = [], t.length > Or ? (n = t.charAt(Or), Or++) : (n = I, 0 === Rr && c(Q)); n !== I; ) r.push(n), 
                    t.length > Or ? (n = t.charAt(Or), Or++) : (n = I, 0 === Rr && c(Q));
                    r !== I && (Sr = e, r = W(r)), e = r;
                }
                return qr[o] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function f() {
                var e, r, n, i, o = 32 * Or + 1, s = qr[o];
                return s ? (Or = s.nextPos, s.result) : (e = Or, t.substr(Or, 3) === X ? (r = X, 
                Or += 3) : (r = I, 0 === Rr && c(Y)), r !== I && U() !== I && (n = d()) !== I && U() !== I ? (t.substr(Or, 3) === Z ? (i = Z, 
                Or += 3) : (i = I, 0 === Rr && c(ee)), i !== I ? (Sr = e, e = r = te(n)) : (Or = e, 
                e = I)) : (Or = e, e = I), e === I && (e = Or, t.substr(Or, 2) === re ? (r = re, 
                Or += 2) : (r = I, 0 === Rr && c(ne)), r !== I && U() !== I && (n = d()) !== I && U() !== I ? (t.substr(Or, 2) === ie ? (i = ie, 
                Or += 2) : (i = I, 0 === Rr && c(oe)), i !== I ? (Sr = e, e = r = se(n)) : (Or = e, 
                e = I)) : (Or = e, e = I)), qr[o] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function d() {
                var e, r, n, i, o = 32 * Or + 2, s = qr[o];
                return s ? (Or = s.nextPos, s.result) : (e = Or, r = h(), r !== I && U() !== I ? (61 === t.charCodeAt(Or) ? (n = ae, 
                Or++) : (n = I, 0 === Rr && c(ue)), n === I && (t.substr(Or, 2) === ce ? (n = ce, 
                Or += 2) : (n = I, 0 === Rr && c(le)), n === I && (t.substr(Or, 2) === fe ? (n = fe, 
                Or += 2) : (n = I, 0 === Rr && c(de)), n === I && (t.substr(Or, 2) === he ? (n = he, 
                Or += 2) : (n = I, 0 === Rr && c(pe)), n === I && (t.substr(Or, 2) === ve ? (n = ve, 
                Or += 2) : (n = I, 0 === Rr && c(me)), n === I && (t.substr(Or, 2) === ye ? (n = ye, 
                Or += 2) : (n = I, 0 === Rr && c(be))))))), n !== I && U() !== I && (i = d()) !== I ? (Sr = e, 
                e = r = ge(r, n, i)) : (Or = e, e = I)) : (Or = e, e = I), e === I && (e = p()), 
                qr[o] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function h() {
                var e, t = 32 * Or + 3, r = qr[t];
                return r ? (Or = r.nextPos, r.result) : ((e = k()) === I && (e = C()), qr[t] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function p() {
                var e, r, n, i, o, s, a = 32 * Or + 4, u = qr[a];
                return u ? (Or = u.nextPos, u.result) : (e = Or, r = v(), r !== I && U() !== I ? (63 === t.charCodeAt(Or) ? (n = xe, 
                Or++) : (n = I, 0 === Rr && c(Ae)), n !== I && U() !== I && (i = p()) !== I && U() !== I ? (58 === t.charCodeAt(Or) ? (o = Pe, 
                Or++) : (o = I, 0 === Rr && c(ke)), o !== I && U() !== I && (s = p()) !== I ? (Sr = e, 
                e = r = Ce(r, i, s)) : (Or = e, e = I)) : (Or = e, e = I)) : (Or = e, e = I), e === I && (e = v()), 
                qr[a] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function v() {
                var e, r, n, i, o, s, a = 32 * Or + 5, u = qr[a];
                if (u) return Or = u.nextPos, u.result;
                if (e = Or, (r = m()) !== I) {
                    for (n = [], i = Or, U() !== I ? (t.substr(Or, 2) === we ? (o = we, Or += 2) : (o = I, 
                    0 === Rr && c(Ee)), o !== I && U() !== I && (s = m()) !== I ? (Sr = i, i = Ne(r, s)) : (Or = i, 
                    i = I)) : (Or = i, i = I); i !== I; ) n.push(i), i = Or, U() !== I ? (t.substr(Or, 2) === we ? (o = we, 
                    Or += 2) : (o = I, 0 === Rr && c(Ee)), o !== I && U() !== I && (s = m()) !== I ? (Sr = i, 
                    i = Ne(r, s)) : (Or = i, i = I)) : (Or = i, i = I);
                    n !== I ? (Sr = e, e = r = je(r, n)) : (Or = e, e = I);
                } else Or = e, e = I;
                return qr[a] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function m() {
                var e, r, n, i, o, s, a = 32 * Or + 6, u = qr[a];
                if (u) return Or = u.nextPos, u.result;
                if (e = Or, (r = y()) !== I) {
                    for (n = [], i = Or, U() !== I ? (t.substr(Or, 2) === $e ? (o = $e, Or += 2) : (o = I, 
                    0 === Rr && c(ze)), o !== I && U() !== I && (s = y()) !== I ? (Sr = i, i = Le(r, s)) : (Or = i, 
                    i = I)) : (Or = i, i = I); i !== I; ) n.push(i), i = Or, U() !== I ? (t.substr(Or, 2) === $e ? (o = $e, 
                    Or += 2) : (o = I, 0 === Rr && c(ze)), o !== I && U() !== I && (s = y()) !== I ? (Sr = i, 
                    i = Le(r, s)) : (Or = i, i = I)) : (Or = i, i = I);
                    n !== I ? (Sr = e, e = r = je(r, n)) : (Or = e, e = I);
                } else Or = e, e = I;
                return qr[a] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function y() {
                var e, r, n, i, o, s, a = 32 * Or + 7, u = qr[a];
                if (u) return Or = u.nextPos, u.result;
                if (e = Or, (r = b()) !== I) {
                    for (n = [], i = Or, U() !== I ? (t.substr(Or, 3) === Te ? (o = Te, Or += 3) : (o = I, 
                    0 === Rr && c(Oe)), o === I && (t.substr(Or, 3) === Se ? (o = Se, Or += 3) : (o = I, 
                    0 === Rr && c(Be)), o === I && (t.substr(Or, 2) === Fe ? (o = Fe, Or += 2) : (o = I, 
                    0 === Rr && c(Me)), o === I && (t.substr(Or, 2) === Re ? (o = Re, Or += 2) : (o = I, 
                    0 === Rr && c(qe))))), o !== I && U() !== I && (s = b()) !== I ? (Sr = i, i = Ue(r, o, s)) : (Or = i, 
                    i = I)) : (Or = i, i = I); i !== I; ) n.push(i), i = Or, U() !== I ? (t.substr(Or, 3) === Te ? (o = Te, 
                    Or += 3) : (o = I, 0 === Rr && c(Oe)), o === I && (t.substr(Or, 3) === Se ? (o = Se, 
                    Or += 3) : (o = I, 0 === Rr && c(Be)), o === I && (t.substr(Or, 2) === Fe ? (o = Fe, 
                    Or += 2) : (o = I, 0 === Rr && c(Me)), o === I && (t.substr(Or, 2) === Re ? (o = Re, 
                    Or += 2) : (o = I, 0 === Rr && c(qe))))), o !== I && U() !== I && (s = b()) !== I ? (Sr = i, 
                    i = Ue(r, o, s)) : (Or = i, i = I)) : (Or = i, i = I);
                    n !== I ? (Sr = e, e = r = Ve(r, n)) : (Or = e, e = I);
                } else Or = e, e = I;
                return qr[a] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function b() {
                var e, r, n, i, o, s, a = 32 * Or + 8, u = qr[a];
                if (u) return Or = u.nextPos, u.result;
                if (e = Or, (r = g()) !== I) {
                    for (n = [], i = Or, U() !== I ? (t.substr(Or, 2) === De ? (o = De, Or += 2) : (o = I, 
                    0 === Rr && c(Ie)), o === I && (t.substr(Or, 2) === _e ? (o = _e, Or += 2) : (o = I, 
                    0 === Rr && c(He)), o === I && (60 === t.charCodeAt(Or) ? (o = Je, Or++) : (o = I, 
                    0 === Rr && c(Ge)), o === I && (62 === t.charCodeAt(Or) ? (o = Ke, Or++) : (o = I, 
                    0 === Rr && c(Qe))))), o !== I && U() !== I && (s = g()) !== I ? (Sr = i, i = Ue(r, o, s)) : (Or = i, 
                    i = I)) : (Or = i, i = I); i !== I; ) n.push(i), i = Or, U() !== I ? (t.substr(Or, 2) === De ? (o = De, 
                    Or += 2) : (o = I, 0 === Rr && c(Ie)), o === I && (t.substr(Or, 2) === _e ? (o = _e, 
                    Or += 2) : (o = I, 0 === Rr && c(He)), o === I && (60 === t.charCodeAt(Or) ? (o = Je, 
                    Or++) : (o = I, 0 === Rr && c(Ge)), o === I && (62 === t.charCodeAt(Or) ? (o = Ke, 
                    Or++) : (o = I, 0 === Rr && c(Qe))))), o !== I && U() !== I && (s = g()) !== I ? (Sr = i, 
                    i = Ue(r, o, s)) : (Or = i, i = I)) : (Or = i, i = I);
                    n !== I ? (Sr = e, e = r = Ve(r, n)) : (Or = e, e = I);
                } else Or = e, e = I;
                return qr[a] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function g() {
                var e, r, n, i, o, s, a = 32 * Or + 9, u = qr[a];
                if (u) return Or = u.nextPos, u.result;
                if (e = Or, (r = x()) !== I) {
                    for (n = [], i = Or, U() !== I ? (We.test(t.charAt(Or)) ? (o = t.charAt(Or), Or++) : (o = I, 
                    0 === Rr && c(Xe)), o !== I && U() !== I && (s = x()) !== I ? (Sr = i, i = Ue(r, o, s)) : (Or = i, 
                    i = I)) : (Or = i, i = I); i !== I; ) n.push(i), i = Or, U() !== I ? (We.test(t.charAt(Or)) ? (o = t.charAt(Or), 
                    Or++) : (o = I, 0 === Rr && c(Xe)), o !== I && U() !== I && (s = x()) !== I ? (Sr = i, 
                    i = Ue(r, o, s)) : (Or = i, i = I)) : (Or = i, i = I);
                    n !== I ? (Sr = e, e = r = Ve(r, n)) : (Or = e, e = I);
                } else Or = e, e = I;
                return qr[a] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function x() {
                var e, r, n, i, o, s, a = 32 * Or + 10, u = qr[a];
                if (u) return Or = u.nextPos, u.result;
                if (e = Or, (r = A()) !== I) {
                    for (n = [], i = Or, U() !== I ? (Ye.test(t.charAt(Or)) ? (o = t.charAt(Or), Or++) : (o = I, 
                    0 === Rr && c(Ze)), o !== I && U() !== I && (s = A()) !== I ? (Sr = i, i = Ue(r, o, s)) : (Or = i, 
                    i = I)) : (Or = i, i = I); i !== I; ) n.push(i), i = Or, U() !== I ? (Ye.test(t.charAt(Or)) ? (o = t.charAt(Or), 
                    Or++) : (o = I, 0 === Rr && c(Ze)), o !== I && U() !== I && (s = A()) !== I ? (Sr = i, 
                    i = Ue(r, o, s)) : (Or = i, i = I)) : (Or = i, i = I);
                    n !== I ? (Sr = e, e = r = Ve(r, n)) : (Or = e, e = I);
                } else Or = e, e = I;
                return qr[a] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function A() {
                var e, r, n, i = 32 * Or + 11, o = qr[i];
                return o ? (Or = o.nextPos, o.result) : ((e = P()) === I && (e = Or, t.substr(Or, 2) === et ? (r = et, 
                Or += 2) : (r = I, 0 === Rr && c(tt)), r === I && (t.substr(Or, 2) === rt ? (r = rt, 
                Or += 2) : (r = I, 0 === Rr && c(nt)), r === I && (it.test(t.charAt(Or)) ? (r = t.charAt(Or), 
                Or++) : (r = I, 0 === Rr && c(ot)))), r !== I && U() !== I && (n = A()) !== I ? (Sr = e, 
                e = r = st(r, n)) : (Or = e, e = I)), qr[i] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function P() {
                var e, r, n, i = 32 * Or + 12, o = qr[i];
                return o ? (Or = o.nextPos, o.result) : (e = Or, r = h(), r !== I && U() !== I ? (t.substr(Or, 2) === et ? (n = et, 
                Or += 2) : (n = I, 0 === Rr && c(tt)), n === I && (t.substr(Or, 2) === rt ? (n = rt, 
                Or += 2) : (n = I, 0 === Rr && c(nt))), n !== I ? (Sr = e, e = r = at(r, n)) : (Or = e, 
                e = I)) : (Or = e, e = I), e === I && (e = h()), qr[i] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function k() {
                var e, t, r, n, i = 32 * Or + 13, o = qr[i];
                return o ? (Or = o.nextPos, o.result) : (e = Or, t = Or, r = C(), r !== I && U() !== I && (n = N()) !== I ? (Sr = t, 
                t = r = ut(r, n)) : (Or = t, t = I), t !== I && (r = w()) !== I ? (Sr = e, e = t = ct(t, r)) : (Or = e, 
                e = I), qr[i] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function C() {
                var e, r, n, i, o, s = 32 * Or + 14, a = qr[s];
                return a ? (Or = a.nextPos, a.result) : (e = Or, (r = E()) === I && (r = j()) === I && (r = S()) === I && (r = $()) === I && (r = L()) === I && (r = Or, 
                40 === t.charCodeAt(Or) ? (n = lt, Or++) : (n = I, 0 === Rr && c(ft)), n !== I && U() !== I && (i = d()) !== I && U() !== I ? (41 === t.charCodeAt(Or) ? (o = dt, 
                Or++) : (o = I, 0 === Rr && c(ht)), o !== I ? (Sr = r, r = n = pt(i)) : (Or = r, 
                r = I)) : (Or = r, r = I)), r !== I && (n = w()) !== I ? (Sr = e, e = r = vt(r, n)) : (Or = e, 
                e = I), qr[s] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function w() {
                var e, r, n, i, o, s = 32 * Or + 15, a = qr[s];
                if (a) return Or = a.nextPos, a.result;
                for (e = [], r = Or, U() !== I ? (91 === t.charCodeAt(Or) ? (n = mt, Or++) : (n = I, 
                0 === Rr && c(yt)), n !== I && U() !== I && (i = d()) !== I && U() !== I ? (93 === t.charCodeAt(Or) ? (o = bt, 
                Or++) : (o = I, 0 === Rr && c(gt)), o !== I ? (Sr = r, r = xt(i)) : (Or = r, r = I)) : (Or = r, 
                r = I)) : (Or = r, r = I), r === I && (r = Or, U() !== I ? (46 === t.charCodeAt(Or) ? (n = At, 
                Or++) : (n = I, 0 === Rr && c(Pt)), n !== I && U() !== I && (i = j()) !== I ? (Sr = r, 
                r = kt(i)) : (Or = r, r = I)) : (Or = r, r = I)); r !== I; ) e.push(r), r = Or, 
                U() !== I ? (91 === t.charCodeAt(Or) ? (n = mt, Or++) : (n = I, 0 === Rr && c(yt)), 
                n !== I && U() !== I && (i = d()) !== I && U() !== I ? (93 === t.charCodeAt(Or) ? (o = bt, 
                Or++) : (o = I, 0 === Rr && c(gt)), o !== I ? (Sr = r, r = xt(i)) : (Or = r, r = I)) : (Or = r, 
                r = I)) : (Or = r, r = I), r === I && (r = Or, U() !== I ? (46 === t.charCodeAt(Or) ? (n = At, 
                Or++) : (n = I, 0 === Rr && c(Pt)), n !== I && U() !== I && (i = j()) !== I ? (Sr = r, 
                r = kt(i)) : (Or = r, r = I)) : (Or = r, r = I));
                return qr[s] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function E() {
                var e, r, n, i, o, s = 32 * Or + 16, a = qr[s];
                return a ? (Or = a.nextPos, a.result) : (e = Or, t.substr(Or, 3) === Ct ? (r = Ct, 
                Or += 3) : (r = I, 0 === Rr && c(wt)), r !== I && V() !== I && (n = C()) !== I ? (i = Or, 
                U() !== I && (o = N()) !== I ? (Sr = i, i = Et(n, o)) : (Or = i, i = I), i === I && (i = null), 
                i !== I ? (Sr = e, e = r = Nt(n, i)) : (Or = e, e = I)) : (Or = e, e = I), qr[s] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function N() {
                var e, r, n, i, o, s, a, u, l = 32 * Or + 17, f = qr[l];
                if (f) return Or = f.nextPos, f.result;
                if (e = Or, 40 === t.charCodeAt(Or) ? (r = lt, Or++) : (r = I, 0 === Rr && c(ft)), 
                r !== I && U() !== I ? (41 === t.charCodeAt(Or) ? (n = dt, Or++) : (n = I, 0 === Rr && c(ht)), 
                n !== I ? (Sr = e, e = r = jt()) : (Or = e, e = I)) : (Or = e, e = I), e === I) if (e = Or, 
                40 === t.charCodeAt(Or) ? (r = lt, Or++) : (r = I, 0 === Rr && c(ft)), r !== I) if (U() !== I) if ((n = d()) !== I) {
                    for (i = [], o = Or, (s = U()) !== I ? (44 === t.charCodeAt(Or) ? (a = $t, Or++) : (a = I, 
                    0 === Rr && c(zt)), a !== I && U() !== I && (u = d()) !== I ? (Sr = o, o = s = Lt(n, u)) : (Or = o, 
                    o = I)) : (Or = o, o = I); o !== I; ) i.push(o), o = Or, (s = U()) !== I ? (44 === t.charCodeAt(Or) ? (a = $t, 
                    Or++) : (a = I, 0 === Rr && c(zt)), a !== I && U() !== I && (u = d()) !== I ? (Sr = o, 
                    o = s = Lt(n, u)) : (Or = o, o = I)) : (Or = o, o = I);
                    i !== I && (o = U()) !== I ? (41 === t.charCodeAt(Or) ? (s = dt, Or++) : (s = I, 
                    0 === Rr && c(ht)), s !== I ? (Sr = e, e = r = Tt(n, i)) : (Or = e, e = I)) : (Or = e, 
                    e = I);
                } else Or = e, e = I; else Or = e, e = I; else Or = e, e = I;
                return qr[l] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function j() {
                var e, r, n, i, o, s = 32 * Or + 18, a = qr[s];
                if (a) return Or = a.nextPos, a.result;
                if (Rr++, e = Or, r = Or, Rr++, n = B(), Rr--, n === I ? r = void 0 : (Or = r, r = I), 
                r !== I) if (St.test(t.charAt(Or)) ? (n = t.charAt(Or), Or++) : (n = I, 0 === Rr && c(Bt)), 
                n !== I) {
                    for (i = [], Ft.test(t.charAt(Or)) ? (o = t.charAt(Or), Or++) : (o = I, 0 === Rr && c(Mt)); o !== I; ) i.push(o), 
                    Ft.test(t.charAt(Or)) ? (o = t.charAt(Or), Or++) : (o = I, 0 === Rr && c(Mt));
                    i !== I ? (Sr = e, e = r = Rt(n, i)) : (Or = e, e = I);
                } else Or = e, e = I; else Or = e, e = I;
                return Rr--, e === I && (r = I, 0 === Rr && c(Ot)), qr[s] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function $() {
                var e, r, n, i, o = 32 * Or + 19, s = qr[o];
                return s ? (Or = s.nextPos, s.result) : (e = Or, 91 === t.charCodeAt(Or) ? (r = mt, 
                Or++) : (r = I, 0 === Rr && c(yt)), r !== I && U() !== I ? (93 === t.charCodeAt(Or) ? (n = bt, 
                Or++) : (n = I, 0 === Rr && c(gt)), n !== I ? (Sr = e, e = r = qt()) : (Or = e, 
                e = I)) : (Or = e, e = I), e === I && (e = Or, 91 === t.charCodeAt(Or) ? (r = mt, 
                Or++) : (r = I, 0 === Rr && c(yt)), r !== I && U() !== I && (n = z()) !== I && U() !== I ? (93 === t.charCodeAt(Or) ? (i = bt, 
                Or++) : (i = I, 0 === Rr && c(gt)), i !== I ? (Sr = e, e = r = Ut(n)) : (Or = e, 
                e = I)) : (Or = e, e = I)), qr[o] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function z() {
                var e, r, n, i, o, s, a = 32 * Or + 20, u = qr[a];
                if (u) return Or = u.nextPos, u.result;
                if (e = Or, (r = d()) !== I) {
                    for (n = [], i = Or, U() !== I ? (44 === t.charCodeAt(Or) ? (o = $t, Or++) : (o = I, 
                    0 === Rr && c(zt)), o !== I && U() !== I && (s = d()) !== I ? (Sr = i, i = Vt(r, s)) : (Or = i, 
                    i = I)) : (Or = i, i = I); i !== I; ) n.push(i), i = Or, U() !== I ? (44 === t.charCodeAt(Or) ? (o = $t, 
                    Or++) : (o = I, 0 === Rr && c(zt)), o !== I && U() !== I && (s = d()) !== I ? (Sr = i, 
                    i = Vt(r, s)) : (Or = i, i = I)) : (Or = i, i = I);
                    n !== I ? (Sr = e, e = r = Tt(r, n)) : (Or = e, e = I);
                } else Or = e, e = I;
                return qr[a] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function L() {
                var e, r, n, i, o, s, a = 32 * Or + 21, u = qr[a];
                return u ? (Or = u.nextPos, u.result) : (e = Or, 123 === t.charCodeAt(Or) ? (r = Dt, 
                Or++) : (r = I, 0 === Rr && c(It)), r !== I && U() !== I ? (125 === t.charCodeAt(Or) ? (n = _t, 
                Or++) : (n = I, 0 === Rr && c(Ht)), n !== I ? (Sr = e, e = r = Jt()) : (Or = e, 
                e = I)) : (Or = e, e = I), e === I && (e = Or, 123 === t.charCodeAt(Or) ? (r = Dt, 
                Or++) : (r = I, 0 === Rr && c(It)), r !== I && U() !== I && (n = T()) !== I && U() !== I ? (i = Or, 
                44 === t.charCodeAt(Or) ? (o = $t, Or++) : (o = I, 0 === Rr && c(zt)), o !== I && (s = U()) !== I ? i = o = [ o, s ] : (Or = i, 
                i = I), i === I && (i = null), i !== I ? (125 === t.charCodeAt(Or) ? (o = _t, Or++) : (o = I, 
                0 === Rr && c(Ht)), o !== I ? (Sr = e, e = r = Gt(n)) : (Or = e, e = I)) : (Or = e, 
                e = I)) : (Or = e, e = I)), qr[a] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function T() {
                var e, r, n, i, o, s, a = 32 * Or + 22, u = qr[a];
                if (u) return Or = u.nextPos, u.result;
                if (e = Or, (r = O()) !== I) {
                    for (n = [], i = Or, U() !== I ? (44 === t.charCodeAt(Or) ? (o = $t, Or++) : (o = I, 
                    0 === Rr && c(zt)), o !== I && U() !== I && (s = O()) !== I ? (Sr = i, i = Kt(r, s)) : (Or = i, 
                    i = I)) : (Or = i, i = I); i !== I; ) n.push(i), i = Or, U() !== I ? (44 === t.charCodeAt(Or) ? (o = $t, 
                    Or++) : (o = I, 0 === Rr && c(zt)), o !== I && U() !== I && (s = O()) !== I ? (Sr = i, 
                    i = Kt(r, s)) : (Or = i, i = I)) : (Or = i, i = I);
                    n !== I ? (Sr = e, e = r = Tt(r, n)) : (Or = e, e = I);
                } else Or = e, e = I;
                return qr[a] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function O() {
                var e, r, n, i, o = 32 * Or + 23, s = qr[o];
                return s ? (Or = s.nextPos, s.result) : (e = Or, (r = j()) === I && (r = q()) === I && (r = F()), 
                r !== I && U() !== I ? (58 === t.charCodeAt(Or) ? (n = Pe, Or++) : (n = I, 0 === Rr && c(ke)), 
                n !== I && U() !== I && (i = d()) !== I ? (Sr = e, e = r = Qt(r, i)) : (Or = e, 
                e = I)) : (Or = e, e = I), qr[o] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function S() {
                var e, t = 32 * Or + 24, r = qr[t];
                return r ? (Or = r.nextPos, r.result) : ((e = B()) === I && (e = F()) === I && (e = q()), 
                qr[t] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function B() {
                var e, r, n = 32 * Or + 25, i = qr[n];
                return i ? (Or = i.nextPos, i.result) : (e = Or, t.substr(Or, 4) === Wt ? (r = Wt, 
                Or += 4) : (r = I, 0 === Rr && c(Xt)), r !== I && (Sr = e, r = Yt()), (e = r) === I && (e = Or, 
                t.substr(Or, 4) === Zt ? (r = Zt, Or += 4) : (r = I, 0 === Rr && c(er)), r !== I && (Sr = e, 
                r = tr()), (e = r) === I && (e = Or, t.substr(Or, 5) === rr ? (r = rr, Or += 5) : (r = I, 
                0 === Rr && c(nr)), r !== I && (Sr = e, r = ir()), e = r)), qr[n] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function F() {
                var e, r, n, i, o, s = 32 * Or + 26, a = qr[s];
                if (a) return Or = a.nextPos, a.result;
                if (Rr++, e = Or, (r = M()) !== I) if (46 === t.charCodeAt(Or) ? (n = At, Or++) : (n = I, 
                0 === Rr && c(Pt)), n !== I) {
                    for (i = [], sr.test(t.charAt(Or)) ? (o = t.charAt(Or), Or++) : (o = I, 0 === Rr && c(ar)); o !== I; ) i.push(o), 
                    sr.test(t.charAt(Or)) ? (o = t.charAt(Or), Or++) : (o = I, 0 === Rr && c(ar));
                    i !== I ? ((o = R()) === I && (o = null), o !== I ? (Sr = e, e = r = ur()) : (Or = e, 
                    e = I)) : (Or = e, e = I);
                } else Or = e, e = I; else Or = e, e = I;
                if (e === I) {
                    if (e = Or, 46 === t.charCodeAt(Or) ? (r = At, Or++) : (r = I, 0 === Rr && c(Pt)), 
                    r !== I) {
                        if (n = [], sr.test(t.charAt(Or)) ? (i = t.charAt(Or), Or++) : (i = I, 0 === Rr && c(ar)), 
                        i !== I) for (;i !== I; ) n.push(i), sr.test(t.charAt(Or)) ? (i = t.charAt(Or), 
                        Or++) : (i = I, 0 === Rr && c(ar)); else n = I;
                        n !== I ? ((i = R()) === I && (i = null), i !== I ? (Sr = e, e = r = ur()) : (Or = e, 
                        e = I)) : (Or = e, e = I);
                    } else Or = e, e = I;
                    e === I && (e = Or, (r = M()) !== I ? ((n = R()) === I && (n = null), n !== I ? (Sr = e, 
                    e = r = ur()) : (Or = e, e = I)) : (Or = e, e = I));
                }
                return Rr--, e === I && (r = I, 0 === Rr && c(or)), qr[s] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function M() {
                var e, r, n, i, o = 32 * Or + 27, s = qr[o];
                if (s) return Or = s.nextPos, s.result;
                if (48 === t.charCodeAt(Or) ? (e = cr, Or++) : (e = I, 0 === Rr && c(lr)), e === I) if (e = Or, 
                fr.test(t.charAt(Or)) ? (r = t.charAt(Or), Or++) : (r = I, 0 === Rr && c(dr)), r !== I) {
                    for (n = [], sr.test(t.charAt(Or)) ? (i = t.charAt(Or), Or++) : (i = I, 0 === Rr && c(ar)); i !== I; ) n.push(i), 
                    sr.test(t.charAt(Or)) ? (i = t.charAt(Or), Or++) : (i = I, 0 === Rr && c(ar));
                    n !== I ? e = r = [ r, n ] : (Or = e, e = I);
                } else Or = e, e = I;
                return qr[o] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function R() {
                var e, r, n, i, o, s = 32 * Or + 28, a = qr[s];
                if (a) return Or = a.nextPos, a.result;
                if (e = Or, t.substr(Or, 1).toLowerCase() === hr ? (r = t.charAt(Or), Or++) : (r = I, 
                0 === Rr && c(pr)), r !== I) if (We.test(t.charAt(Or)) ? (n = t.charAt(Or), Or++) : (n = I, 
                0 === Rr && c(Xe)), n === I && (n = null), n !== I) {
                    if (i = [], sr.test(t.charAt(Or)) ? (o = t.charAt(Or), Or++) : (o = I, 0 === Rr && c(ar)), 
                    o !== I) for (;o !== I; ) i.push(o), sr.test(t.charAt(Or)) ? (o = t.charAt(Or), 
                    Or++) : (o = I, 0 === Rr && c(ar)); else i = I;
                    i !== I ? e = r = [ r, n, i ] : (Or = e, e = I);
                } else Or = e, e = I; else Or = e, e = I;
                return qr[s] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function q() {
                var e, r, n, i, o, s = 32 * Or + 29, a = qr[s];
                if (a) return Or = a.nextPos, a.result;
                if (Rr++, e = Or, 34 === t.charCodeAt(Or) ? (r = mr, Or++) : (r = I, 0 === Rr && c(yr)), 
                r !== I) {
                    for (n = [], i = Or, t.substr(Or, 2) === br ? (o = br, Or += 2) : (o = I, 0 === Rr && c(gr)), 
                    o !== I && (Sr = i, o = xr()), (i = o) === I && (Ar.test(t.charAt(Or)) ? (i = t.charAt(Or), 
                    Or++) : (i = I, 0 === Rr && c(Pr))); i !== I; ) n.push(i), i = Or, t.substr(Or, 2) === br ? (o = br, 
                    Or += 2) : (o = I, 0 === Rr && c(gr)), o !== I && (Sr = i, o = xr()), (i = o) === I && (Ar.test(t.charAt(Or)) ? (i = t.charAt(Or), 
                    Or++) : (i = I, 0 === Rr && c(Pr)));
                    n !== I ? (34 === t.charCodeAt(Or) ? (i = mr, Or++) : (i = I, 0 === Rr && c(yr)), 
                    i !== I ? (Sr = e, e = r = kr(n)) : (Or = e, e = I)) : (Or = e, e = I);
                } else Or = e, e = I;
                if (e === I) if (e = Or, 39 === t.charCodeAt(Or) ? (r = Cr, Or++) : (r = I, 0 === Rr && c(wr)), 
                r !== I) {
                    for (n = [], i = Or, t.substr(Or, 2) === Er ? (o = Er, Or += 2) : (o = I, 0 === Rr && c(Nr)), 
                    o !== I && (Sr = i, o = jr()), (i = o) === I && ($r.test(t.charAt(Or)) ? (i = t.charAt(Or), 
                    Or++) : (i = I, 0 === Rr && c(zr))); i !== I; ) n.push(i), i = Or, t.substr(Or, 2) === Er ? (o = Er, 
                    Or += 2) : (o = I, 0 === Rr && c(Nr)), o !== I && (Sr = i, o = jr()), (i = o) === I && ($r.test(t.charAt(Or)) ? (i = t.charAt(Or), 
                    Or++) : (i = I, 0 === Rr && c(zr)));
                    n !== I ? (39 === t.charCodeAt(Or) ? (i = Cr, Or++) : (i = I, 0 === Rr && c(wr)), 
                    i !== I ? (Sr = e, e = r = kr(n)) : (Or = e, e = I)) : (Or = e, e = I);
                } else Or = e, e = I;
                return Rr--, e === I && (r = I, 0 === Rr && c(vr)), qr[s] = {
                    nextPos: Or,
                    result: e
                }, e;
            }
            function U() {
                var e, t = 32 * Or + 30, r = qr[t];
                return r ? (Or = r.nextPos, r.result) : ((e = V()) === I && (e = null), qr[t] = {
                    nextPos: Or,
                    result: e
                }, e);
            }
            function V() {
                var e, r, n = 32 * Or + 31, i = qr[n];
                if (i) return Or = i.nextPos, i.result;
                if (e = [], Lr.test(t.charAt(Or)) ? (r = t.charAt(Or), Or++) : (r = I, 0 === Rr && c(Tr)), 
                r !== I) for (;r !== I; ) e.push(r), Lr.test(t.charAt(Or)) ? (r = t.charAt(Or), 
                Or++) : (r = I, 0 === Rr && c(Tr)); else e = I;
                return qr[n] = {
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
            }, re = "{{", ne = i("{{", !1), ie = "}}", oe = i("}}", !1), se = function(e) {
                return {
                    html: !1,
                    expression: e
                };
            }, ae = "=", ue = i("=", !1), ce = "*=", le = i("*=", !1), fe = "/=", de = i("/=", !1), he = "%=", pe = i("%=", !1), ve = "+=", me = i("+=", !1), ye = "-=", be = i("-=", !1), ge = function(e, t, r) {
                return {
                    type: "Assignment",
                    operator: t,
                    left: e,
                    right: r
                };
            }, xe = "?", Ae = i("?", !1), Pe = ":", ke = i(":", !1), Ce = function(e, t, r) {
                return {
                    type: "Conditional",
                    test: e,
                    consequent: t,
                    alternate: r
                };
            }, we = "||", Ee = i("||", !1), Ne = function(e, t) {
                return {
                    operator: "||",
                    arg: t
                };
            }, je = function(e, t) {
                return Ur("Logical", e, t);
            }, $e = "&&", ze = i("&&", !1), Le = function(e, t) {
                return {
                    operator: "&&",
                    arg: t
                };
            }, Te = "===", Oe = i("===", !1), Se = "!==", Be = i("!==", !1), Fe = "==", Me = i("==", !1), Re = "!=", qe = i("!=", !1), Ue = function(e, t, r) {
                return {
                    operator: t,
                    arg: r
                };
            }, Ve = function(e, t) {
                return Ur("Binary", e, t);
            }, De = "<=", Ie = i("<=", !1), _e = ">=", He = i(">=", !1), Je = "<", Ge = i("<", !1), Ke = ">", Qe = i(">", !1), We = /^[+\-]/, Xe = o([ "+", "-" ], !1, !1), Ye = /^[*\/%]/, Ze = o([ "*", "/", "%" ], !1, !1), et = "++", tt = i("++", !1), rt = "--", nt = i("--", !1), it = /^[+!\-]/, ot = o([ "+", "!", "-" ], !1, !1), st = function(e, t) {
                return {
                    type: "++" === e || "--" === e ? "Update" : "Unary",
                    operator: e,
                    argument: t,
                    prefix: !0
                };
            }, at = function(e, t) {
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
            }, mt = "[", yt = i("[", !1), bt = "]", gt = i("]", !1), xt = function(e) {
                return e;
            }, At = ".", Pt = i(".", !1), kt = function(e) {
                return {
                    type: "Literal",
                    value: e.name
                };
            }, Ct = "new", wt = i("new", !1), Et = function(e, t) {
                return t;
            }, Nt = function(e, t) {
                return {
                    type: "NewExpression",
                    callee: e,
                    arguments: t || []
                };
            }, jt = function() {
                return [];
            }, $t = ",", zt = i(",", !1), Lt = function(e, t) {
                return t;
            }, Tt = function(e, t) {
                return [ e ].concat(t);
            }, Ot = s("identifier"), St = /^[a-z$_]/i, Bt = o([ [ "a", "z" ], "$", "_" ], !1, !0), Ft = /^[a-z$_0-9]/i, Mt = o([ [ "a", "z" ], "$", "_", [ "0", "9" ] ], !1, !0), Rt = function(e, t) {
                return {
                    type: "Identifier",
                    name: e + t.join("")
                };
            }, qt = function() {
                return {
                    type: "Array",
                    elements: []
                };
            }, Ut = function(e) {
                return {
                    type: "Array",
                    elements: e
                };
            }, Vt = function(e, t) {
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
            }, or = s("number"), sr = /^[0-9]/, ar = o([ [ "0", "9" ] ], !1, !1), ur = function() {
                return {
                    type: "Literal",
                    value: parseFloat(n())
                };
            }, cr = "0", lr = i("0", !1), fr = /^[1-9]/, dr = o([ [ "1", "9" ] ], !1, !1), hr = "e", pr = i("e", !0), vr = s("string"), mr = '"', yr = i('"', !1), br = '\\"', gr = i('\\"', !1), xr = function() {
                return '"';
            }, Ar = /^[^"]/, Pr = o([ '"' ], !0, !1), kr = function(e) {
                return {
                    type: "Literal",
                    value: e.join("")
                };
            }, Cr = "'", wr = i("'", !1), Er = "\\'", Nr = i("\\'", !1), jr = function() {
                return "'";
            }, $r = /^[^'']/, zr = o([ "'", "'" ], !0, !1), Lr = /^[\t ]/, Tr = o([ "\t", " " ], !1, !1), Or = 0, Sr = 0, Br = [ {
                line: 1,
                column: 1
            } ], Fr = 0, Mr = [], Rr = 0, qr = {};
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
            }(Mr, Fr < t.length ? t.charAt(Fr) : null, Fr < t.length ? u(Fr, Fr + 1) : u(Fr, Fr));
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
            parse: t
        };
    }(), s = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Expression";
        return o.parse(e, {
            startRule: t
        });
    }, a = function t(r, n) {
        var i = void 0, o = void 0, s = r.type, a = r.operator;
        if ("Literal" === s) i = r.value; else if ("Array" === s) i = r.elements.map(function(e) {
            return t(e, n).value;
        }); else if ("Object" === s) i = {}, r.properties.forEach(function(e) {
            i[e.key] = t(e.value, n).value;
        }); else if ("Identifier" === s) {
            for (var u = n; u && void 0 === u[r.name]; ) u = u.$parent;
            u || (u = n), i = u[r.name], o = function(e) {
                return u[r.name] = e, e;
            };
        } else if ("Member" === s) {
            var c = t(r.object, n).value, l = t(r.property, n).value;
            i = void 0 !== c ? c[l] : void 0, o = function(e) {
                return c[l] = e, e;
            };
        } else if ("Conditional" === s) i = t(r.test, n).value ? t(r.consequent, n).value : t(r.alternate, n).value; else if ("Unary" === s || "Update" === s) {
            var f = t(r.argument, n), d = f.value;
            i = "!" === a ? !d : "+" === a ? +d : "-" === a ? -d : "++" === a ? d + 1 : "--" === a ? d - 1 : null, 
            "Update" === s && ((o = f.set) && (i = o(i)), r.prefix || (i += "++" === a ? -1 : 1));
        } else if ("Binary" === s || "Logical" === s || "Assignment" === s) {
            var h = t(r.left, n), p = h.value, v = t(r.right, n).value;
            i = "===" === a ? p === v : "!==" === a ? p !== v : "==" === a ? p == v : "!=" === a ? p != v : "<" === a ? p < v : ">" === a ? p > v : "<=" === a ? p <= v : ">=" === a ? p >= v : "&&" === a ? p && v : "||" === a ? p || v : "+" === a ? "string" == typeof (p + v) ? e(p) + e(v) : p + v : "-" === a ? p - v : "*" === a ? p * v : "/" === a ? p / v : "%" === a ? p % v : "*=" === a ? p * v : "/=" === a ? p / v : "%=" === a ? p % v : "+=" === a ? p + v : "-=" === a ? p - v : "=" === a ? v : null, 
            "Assignment" === s && (o = h.set, i = o(i));
        } else if ("Call" === s || "NewExpression" === s) {
            var m = r.callee.object ? t(r.callee.object, n).value : n, y = t(r.callee, n).value, b = r.arguments.map(function(e) {
                return t(e, n).value;
            });
            i = y ? "Call" === s ? y.apply(m, b) : new (y.bind.apply(y, b))() : void 0;
        }
        return {
            value: i,
            set: o
        };
    }, u = {
        prefix: "z-",
        directives: [],
        inlineParser: void 0
    }, c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, l = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }, f = function(e) {
        return i(e, "name", "value");
    }, d = function(e, t, r) {
        e.binds.forEach(function(r) {
            return h(e, t, r);
        }), e.children.forEach(function(e) {
            return e[t + "Binds"](r);
        });
    }, h = function(e, t, r) {
        if (r.directive[t]) {
            var n = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.ast;
                return a(t, e.scope).value;
            }, i = "initialize" === t ? [ e.node ].concat(r.args) : [ e.scope, e.node, n ].concat(r.args);
            r.directive[t].apply(r, i);
        }
    }, p = function(e, t, r) {
        return e instanceof v ? e : ("string" == typeof e ? e = document.querySelector(e) : e.jquery && (e = e[0]), 
        new v(e, t, r));
    }, v = function() {
        function e(t, r) {
            var n = this, o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (l(this, e), this.node = t, this.children = [], this.binds = [], this.type = t.nodeType, 
            t.vnode && !r) o ? (this.parent = t.vnode, t.vnode = this, this.type = this.parent.type, 
            this.children = this.parent.children, this.binds = this.parent.binds, this.parent.children = [], 
            this.parent.binds = []) : (t.vnode.parent = this, this.pointer = t.vnode); else if (r) {
                if (t.vnode = this, this.blocked = r.blocked, this.type = r.type, r.binds.forEach(function(e) {
                    return n.bind(i(e, "ast", "directive", "args", "key", "template"));
                }), r.tagName && (this.tag = r.tagName), r.attributes && (this.attributes = r.attributes.map(f), 
                this.removedAttrs = r.removedAttrs.map(f)), r.children) {
                    var s = Array.from(t.childNodes).filter(function(e) {
                        return 1 === e.nodeType || 3 === e.nodeType || 11 === e.nodeType;
                    });
                    r.children.forEach(function(e) {
                        n.children.push(p(e.fragment ? t : s.shift(), e));
                    });
                }
            } else t.vnode = this, this.initialize();
        }
        return e.prototype.initialize = function() {
            var e = this, t = this.node;
            if (this.type = t.nodeType, 1 === this.type) {
                this.tag = t.tagName, this.attributes = Array.from(t.attributes).map(f), this.removedAttrs = [];
                Math.ceil(1e7 * Math.random());
                u.directives.forEach(function(r) {
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
                            var o = s(n.value || "undefined");
                            e.removedAttrs.push(f(n)), t.removeAttribute(n.name), e.bind({
                                directive: r,
                                ast: o,
                                args: i
                            });
                        }
                    }));
                }), !this.blocked && t.childNodes && Array.from(t.childNodes).filter(function(e) {
                    return 1 === e.nodeType || 3 === e.nodeType || 11 === e.nodeType;
                }).map(function(t) {
                    return e.children.push(p(t));
                });
            } else if (3 === this.type && t.nodeValue.indexOf("{{") > -1) {
                var r = s(t.nodeValue, "Text");
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
                this.node.parentNode.replaceChild(t.node, this.node), this.node = t.node, this.node.vnode = this, 
                this.binds = this.binds.concat(t.binds), this.type = t.type, this.children = t.children;
            } else this.binds.push(e);
            h(this, "initialize", e);
        }, e.prototype.clone = function() {
            return p(this.node.cloneNode(!0), this);
        }, e.prototype.createBinds = function(e) {
            this.scope = e, d(this, "create", e);
        }, e.prototype.updateBinds = function() {
            d(this, "update"), this.pointer && this.pointer.updateBinds();
        }, e.prototype.destroyBinds = function() {
            var e = this;
            d(this, "destroy"), this.removedAttrs && this.removedAttrs.forEach(function(t) {
                return e.node.setAttribute(t.name, t.value);
            }), delete this.scope, delete this.node.vnode;
        }, e;
    }(), m = function(e) {
        if (e.inline && (u.inlineParser = e), e.template) {
            e.block = !0;
            var t = document.createElement("span");
            t.innerHTML = e.template, e.template = p(t.childNodes[0]);
        }
        e.order || (e.order = 100);
        var r = u.directives.findIndex(function(t) {
            return e.order < t.order;
        });
        return u.directives.splice(-1 === r ? u.directives.length : r, 0, e), e;
    }, y = 0, b = void 0, g = function(e, t) {
        e[t] && e[t].forEach(function(e) {
            return e();
        });
    }, x = function(e, t, r) {
        var n = Reflect.get(e, t, r);
        return e instanceof Array || "function" != typeof n ? n : n.bind(e);
    }, A = function e(t, r) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        if (!(n.indexOf(r) > -1)) {
            n = n.concat([ r ]);
            var i = new Proxy(r, {
                get: x,
                set: function(r, i, o, s) {
                    b || ("object" !== (void 0 === o ? "undefined" : c(o)) || null === o || o instanceof Date || (o = e(t, o, n)), 
                    t.$(!0)), b = !0;
                    var a = Reflect.set(r, i, o, s);
                    return b = !1, a;
                },
                deleteProperty: function(e, r) {
                    b || t.$(!0), b = !0;
                    var n = Reflect.deleteProperty(e, r);
                    return b = !1, n;
                }
            });
            return Object.keys(r).forEach(function(e) {
                var n = r[e];
                "object" !== (void 0 === n ? "undefined" : c(n)) || n instanceof Date || r === t && "$" === e.charAt(0) || (i[e] = n);
            }), i;
        }
    }, P = function e(r, i, o) {
        var u = p(r, null, !0), c = {}, l = [], f = void 0, d = Object.assign({
            $id: y++,
            $: function(e) {
                return e ? f || (f = n(function() {
                    return d.$();
                })) : (f && (f = f()), u.updateBinds(d), g(c, "update"), l.forEach(function(e) {
                    var t = a(e.ast, d).value;
                    t !== e.val && (e.val = t, e.cb(t));
                })), d;
            },
            $destroy: function() {
                return u.destroyBinds(d), g(c, "destroy"), d;
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
                    ast: s(e),
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
                return o || u.parent && u.parent.scope || e.root;
            }
        }, i);
        return u.createBinds(d), d.$(!0), A(d, d);
    };
    Object.assign(P, {
        version: "0.4.3",
        parse: s,
        evaluate: a,
        directive: m,
        root: {
            $parent: "undefined" != typeof global ? global : window,
            number: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                return Number(e).toFixed(t);
            },
            percent: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                return Number(100 * e).toFixed(t) + "%d";
            }
        }
    }), Object.defineProperty(P, "prefix", {
        get: function() {
            return u.prefix;
        },
        set: function(e) {
            u.prefix = e;
        }
    });
    var k = [ "selected", "checked", "disabled", "readonly", "multiple", "ismap", "defer", "noresize" ];
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
            s !== this.value && (this.value = s, k.indexOf(i) > -1 && (s = s ? i : void 0), 
            void 0 === s ? t.removeAttribute(i) : t.setAttribute(i, s));
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
            this.view = P(this.vnode, void 0, e).$()) : this.view && (this.view.$destroy(), 
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
            var i = this, o = t.tagName.toLowerCase(), a = (t.getAttribute("type") || "").toLowerCase();
            this.type = "checkbox" === a ? "checkbox" : "select" === o ? "select" : "radio" === a ? "radio" : [ "range", "number" ].indexOf(a) > -1 ? "number" : [ "date", "datetime-local", "time", "month", "week" ].indexOf(a) > -1 ? "date" : "text", 
            "radio" !== this.type || t.getAttribute("name") || t.setAttribute("name", r(e.$id + JSON.stringify(this.ast))), 
            this.getValue = function(e) {
                var t = e.getAttribute(u.prefix + "value");
                return t ? n(s(t)) : e.getAttribute("value");
            }, this.handler = function() {
                if ("radio" !== i.type || t.checked) {
                    var r = "checkbox" === i.type ? !!t.checked : "select" === i.type ? i.getValue(t.options[t.selectedIndex]) : "radio" === i.type ? i.getValue(t) : "number" === i.type ? Number(t.value) : "date" === i.type ? t.valueAsDate : t.value;
                    r !== i.value && (i.value = r, n({
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
            if (o !== this.value) {
                if ("checkbox" === this.type) r.checked = !!o; else if ("select" === this.type) r.selectedIndex = Array.from(r.options).reduce(function(t, r, n) {
                    var s = i.getValue(r);
                    return r.setAttribute("value", e(s)), s === o ? n : t;
                }, -1); else if ("radio" === this.type) {
                    var s = this.getValue(r);
                    r.setAttribute("value", e(s)), r.checked = o === s;
                } else "number" === this.type ? r.value = Number(o) : "date" === this.type ? r.valueAsDate = o : r.value = e(o);
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
                var i = s(n);
                e.removeAttribute(u.prefix + "key"), this.key = function(e) {
                    var t;
                    return a(i, (t = {}, t[r] = e, t)).value;
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
            var s = this, a = n() || [], u = Object.keys(a).map(function(e) {
                return {
                    index: e,
                    computed: s.key(a[e]),
                    datum: a[e]
                };
            });
            [].concat(this.items).forEach(function(e) {
                e.key = s.key(e.datum), u.find(function(t) {
                    return t.computed === e.key;
                }) || (s.marker.parentNode.removeChild(e.node), e.view.$destroy(), t(s.items, e));
            }), u.forEach(function(r) {
                var n = s.items.find(function(e) {
                    return r.computed === e.key;
                });
                if (n) t(s.items, n), s.marker.parentNode.insertBefore(n.node, s.marker); else {
                    var i, a = s.template.clone();
                    n = {
                        key: r.computed,
                        datum: r.datum,
                        node: a.node
                    }, s.marker.parentNode.insertBefore(n.node, s.marker), n.view = P(a, (i = {}, i[o] = n.datum, 
                    i), e);
                }
                n.view.$index = r.index, n.view.$(), s.items.push(n);
            });
        }
    }, {
        attribute: "{prefix}(?:on-(.+)|(" + [ "load", "error", "focus", "blur", "click", "dblclick", "mouse.*", "keyup", "keydown", "keypress", "input", "change", "submit", "reset", "scroll", "resize", "drag.*", "drop" ].join("|") + "))",
        create: function(e, t, r, n, i, o) {
            this.handler = function(t) {
                e.$event = t, r(), delete e.$event, "submit" === (t || o) && t.preventDefault();
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
    } ].forEach(m), P;
});
