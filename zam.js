!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.zam = t();
}(this, function() {
    "use strict";
    var e = function() {}, t = function(e) {
        return null === e || void 0 === e ? "" : String(e);
    }, r = function(e, t) {
        var r = e ? e.indexOf(t) : -1;
        r > -1 && e.splice(r, 1);
    }, n = function(e) {
        return e.split("").reduce(function(e, t) {
            return (e << 5) - e + t.charCodeAt(0) | 0;
        }, 0).toString(16);
    }, i = function(e) {
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
    }, o = function(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        var i = {};
        return r.forEach(function(t) {
            return i[t] = e[t];
        }), i;
    }, s = function() {
        function e(t, r, n, i) {
            this.message = t, this.expected = r, this.found = n, this.location = i, this.name = "SyntaxError", 
            "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, e);
        }
        function t(t, r) {
            function n() {
                return t.substring(Or, Mr);
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
                var r, n = Sr[e];
                if (n) return n;
                for (r = e - 1; !Sr[r]; ) r--;
                for (n = {
                    line: (n = Sr[r]).line,
                    column: n.column
                }; r < e; ) 10 === t.charCodeAt(r) ? (n.line++, n.column = 1) : n.column++, r++;
                return Sr[e] = n, n;
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
                Mr < Br || (Mr > Br && (Br = Mr, Fr = []), Fr.push(e));
            }
            function l() {
                var e, r, n, i, o = 32 * Mr + 0, s = Hr[o];
                if (s) return Mr = s.nextPos, s.result;
                for (e = Mr, r = [], J.test(t.charAt(Mr)) ? (n = t.charAt(Mr), Mr++) : (n = I, 0 === Rr && c(G)); n !== I; ) r.push(n), 
                J.test(t.charAt(Mr)) ? (n = t.charAt(Mr), Mr++) : (n = I, 0 === Rr && c(G));
                if (r !== I && (n = d()) !== I && (i = l()) !== I ? (Or = e, e = r = K(r, n, i)) : (Mr = e, 
                e = I), e === I) {
                    for (e = Mr, r = [], t.length > Mr ? (n = t.charAt(Mr), Mr++) : (n = I, 0 === Rr && c(Q)); n !== I; ) r.push(n), 
                    t.length > Mr ? (n = t.charAt(Mr), Mr++) : (n = I, 0 === Rr && c(Q));
                    r !== I && (Or = e, r = W(r)), e = r;
                }
                return Hr[o] = {
                    nextPos: Mr,
                    result: e
                }, e;
            }
            function d() {
                var e, r, n, i, o = 32 * Mr + 1, s = Hr[o];
                return s ? (Mr = s.nextPos, s.result) : (e = Mr, t.substr(Mr, 3) === X ? (r = X, 
                Mr += 3) : (r = I, 0 === Rr && c(Y)), r !== I && V() !== I && (n = f()) !== I && V() !== I ? (t.substr(Mr, 3) === Z ? (i = Z, 
                Mr += 3) : (i = I, 0 === Rr && c(ee)), i !== I ? (Or = e, e = r = te(n)) : (Mr = e, 
                e = I)) : (Mr = e, e = I), e === I && (e = Mr, t.substr(Mr, 2) === re ? (r = re, 
                Mr += 2) : (r = I, 0 === Rr && c(ne)), r !== I && V() !== I && (n = f()) !== I && V() !== I ? (t.substr(Mr, 2) === ie ? (i = ie, 
                Mr += 2) : (i = I, 0 === Rr && c(oe)), i !== I ? (Or = e, e = r = se(n)) : (Mr = e, 
                e = I)) : (Mr = e, e = I)), Hr[o] = {
                    nextPos: Mr,
                    result: e
                }, e);
            }
            function f() {
                var e, r, n, i, o = 32 * Mr + 2, s = Hr[o];
                return s ? (Mr = s.nextPos, s.result) : (e = Mr, r = h(), r !== I && V() !== I ? (61 === t.charCodeAt(Mr) ? (n = ae, 
                Mr++) : (n = I, 0 === Rr && c(ue)), n === I && (t.substr(Mr, 2) === ce ? (n = ce, 
                Mr += 2) : (n = I, 0 === Rr && c(le)), n === I && (t.substr(Mr, 2) === de ? (n = de, 
                Mr += 2) : (n = I, 0 === Rr && c(fe)), n === I && (t.substr(Mr, 2) === he ? (n = he, 
                Mr += 2) : (n = I, 0 === Rr && c(pe)), n === I && (t.substr(Mr, 2) === ve ? (n = ve, 
                Mr += 2) : (n = I, 0 === Rr && c(me)), n === I && (t.substr(Mr, 2) === be ? (n = be, 
                Mr += 2) : (n = I, 0 === Rr && c(ye))))))), n !== I && V() !== I && (i = f()) !== I ? (Or = e, 
                e = r = xe(r, n, i)) : (Mr = e, e = I)) : (Mr = e, e = I), e === I && (e = p()), 
                Hr[o] = {
                    nextPos: Mr,
                    result: e
                }, e);
            }
            function h() {
                var e, t = 32 * Mr + 3, r = Hr[t];
                return r ? (Mr = r.nextPos, r.result) : ((e = P()) === I && (e = C()), Hr[t] = {
                    nextPos: Mr,
                    result: e
                }, e);
            }
            function p() {
                var e, r, n, i, o, s, a = 32 * Mr + 4, u = Hr[a];
                return u ? (Mr = u.nextPos, u.result) : (e = Mr, r = v(), r !== I && V() !== I ? (63 === t.charCodeAt(Mr) ? (n = ge, 
                Mr++) : (n = I, 0 === Rr && c(Ae)), n !== I && V() !== I && (i = p()) !== I && V() !== I ? (58 === t.charCodeAt(Mr) ? (o = ke, 
                Mr++) : (o = I, 0 === Rr && c(Pe)), o !== I && V() !== I && (s = p()) !== I ? (Or = e, 
                e = r = Ce(r, i, s)) : (Mr = e, e = I)) : (Mr = e, e = I)) : (Mr = e, e = I), e === I && (e = v()), 
                Hr[a] = {
                    nextPos: Mr,
                    result: e
                }, e);
            }
            function v() {
                var e, r, n, i, o, s, a = 32 * Mr + 5, u = Hr[a];
                if (u) return Mr = u.nextPos, u.result;
                if (e = Mr, (r = m()) !== I) {
                    for (n = [], i = Mr, V() !== I ? (t.substr(Mr, 2) === we ? (o = we, Mr += 2) : (o = I, 
                    0 === Rr && c(Ee)), o !== I && V() !== I && (s = m()) !== I ? (Or = i, i = Ne(r, s)) : (Mr = i, 
                    i = I)) : (Mr = i, i = I); i !== I; ) n.push(i), i = Mr, V() !== I ? (t.substr(Mr, 2) === we ? (o = we, 
                    Mr += 2) : (o = I, 0 === Rr && c(Ee)), o !== I && V() !== I && (s = m()) !== I ? (Or = i, 
                    i = Ne(r, s)) : (Mr = i, i = I)) : (Mr = i, i = I);
                    n !== I ? (Or = e, e = r = Le(r, n)) : (Mr = e, e = I);
                } else Mr = e, e = I;
                return Hr[a] = {
                    nextPos: Mr,
                    result: e
                }, e;
            }
            function m() {
                var e, r, n, i, o, s, a = 32 * Mr + 6, u = Hr[a];
                if (u) return Mr = u.nextPos, u.result;
                if (e = Mr, (r = b()) !== I) {
                    for (n = [], i = Mr, V() !== I ? (t.substr(Mr, 2) === je ? (o = je, Mr += 2) : (o = I, 
                    0 === Rr && c($e)), o !== I && V() !== I && (s = b()) !== I ? (Or = i, i = ze(r, s)) : (Mr = i, 
                    i = I)) : (Mr = i, i = I); i !== I; ) n.push(i), i = Mr, V() !== I ? (t.substr(Mr, 2) === je ? (o = je, 
                    Mr += 2) : (o = I, 0 === Rr && c($e)), o !== I && V() !== I && (s = b()) !== I ? (Or = i, 
                    i = ze(r, s)) : (Mr = i, i = I)) : (Mr = i, i = I);
                    n !== I ? (Or = e, e = r = Le(r, n)) : (Mr = e, e = I);
                } else Mr = e, e = I;
                return Hr[a] = {
                    nextPos: Mr,
                    result: e
                }, e;
            }
            function b() {
                var e, r, n, i, o, s, a = 32 * Mr + 7, u = Hr[a];
                if (u) return Mr = u.nextPos, u.result;
                if (e = Mr, (r = y()) !== I) {
                    for (n = [], i = Mr, V() !== I ? (t.substr(Mr, 3) === Te ? (o = Te, Mr += 3) : (o = I, 
                    0 === Rr && c(Me)), o === I && (t.substr(Mr, 3) === Oe ? (o = Oe, Mr += 3) : (o = I, 
                    0 === Rr && c(Se)), o === I && (t.substr(Mr, 2) === Be ? (o = Be, Mr += 2) : (o = I, 
                    0 === Rr && c(Fe)), o === I && (t.substr(Mr, 2) === Re ? (o = Re, Mr += 2) : (o = I, 
                    0 === Rr && c(He))))), o !== I && V() !== I && (s = y()) !== I ? (Or = i, i = Ve(r, o, s)) : (Mr = i, 
                    i = I)) : (Mr = i, i = I); i !== I; ) n.push(i), i = Mr, V() !== I ? (t.substr(Mr, 3) === Te ? (o = Te, 
                    Mr += 3) : (o = I, 0 === Rr && c(Me)), o === I && (t.substr(Mr, 3) === Oe ? (o = Oe, 
                    Mr += 3) : (o = I, 0 === Rr && c(Se)), o === I && (t.substr(Mr, 2) === Be ? (o = Be, 
                    Mr += 2) : (o = I, 0 === Rr && c(Fe)), o === I && (t.substr(Mr, 2) === Re ? (o = Re, 
                    Mr += 2) : (o = I, 0 === Rr && c(He))))), o !== I && V() !== I && (s = y()) !== I ? (Or = i, 
                    i = Ve(r, o, s)) : (Mr = i, i = I)) : (Mr = i, i = I);
                    n !== I ? (Or = e, e = r = Ue(r, n)) : (Mr = e, e = I);
                } else Mr = e, e = I;
                return Hr[a] = {
                    nextPos: Mr,
                    result: e
                }, e;
            }
            function y() {
                var e, r, n, i, o, s, a = 32 * Mr + 8, u = Hr[a];
                if (u) return Mr = u.nextPos, u.result;
                if (e = Mr, (r = x()) !== I) {
                    for (n = [], i = Mr, V() !== I ? (t.substr(Mr, 2) === qe ? (o = qe, Mr += 2) : (o = I, 
                    0 === Rr && c(Ie)), o === I && (t.substr(Mr, 2) === De ? (o = De, Mr += 2) : (o = I, 
                    0 === Rr && c(_e)), o === I && (60 === t.charCodeAt(Mr) ? (o = Je, Mr++) : (o = I, 
                    0 === Rr && c(Ge)), o === I && (62 === t.charCodeAt(Mr) ? (o = Ke, Mr++) : (o = I, 
                    0 === Rr && c(Qe))))), o !== I && V() !== I && (s = x()) !== I ? (Or = i, i = Ve(r, o, s)) : (Mr = i, 
                    i = I)) : (Mr = i, i = I); i !== I; ) n.push(i), i = Mr, V() !== I ? (t.substr(Mr, 2) === qe ? (o = qe, 
                    Mr += 2) : (o = I, 0 === Rr && c(Ie)), o === I && (t.substr(Mr, 2) === De ? (o = De, 
                    Mr += 2) : (o = I, 0 === Rr && c(_e)), o === I && (60 === t.charCodeAt(Mr) ? (o = Je, 
                    Mr++) : (o = I, 0 === Rr && c(Ge)), o === I && (62 === t.charCodeAt(Mr) ? (o = Ke, 
                    Mr++) : (o = I, 0 === Rr && c(Qe))))), o !== I && V() !== I && (s = x()) !== I ? (Or = i, 
                    i = Ve(r, o, s)) : (Mr = i, i = I)) : (Mr = i, i = I);
                    n !== I ? (Or = e, e = r = Ue(r, n)) : (Mr = e, e = I);
                } else Mr = e, e = I;
                return Hr[a] = {
                    nextPos: Mr,
                    result: e
                }, e;
            }
            function x() {
                var e, r, n, i, o, s, a = 32 * Mr + 9, u = Hr[a];
                if (u) return Mr = u.nextPos, u.result;
                if (e = Mr, (r = g()) !== I) {
                    for (n = [], i = Mr, V() !== I ? (We.test(t.charAt(Mr)) ? (o = t.charAt(Mr), Mr++) : (o = I, 
                    0 === Rr && c(Xe)), o !== I && V() !== I && (s = g()) !== I ? (Or = i, i = Ve(r, o, s)) : (Mr = i, 
                    i = I)) : (Mr = i, i = I); i !== I; ) n.push(i), i = Mr, V() !== I ? (We.test(t.charAt(Mr)) ? (o = t.charAt(Mr), 
                    Mr++) : (o = I, 0 === Rr && c(Xe)), o !== I && V() !== I && (s = g()) !== I ? (Or = i, 
                    i = Ve(r, o, s)) : (Mr = i, i = I)) : (Mr = i, i = I);
                    n !== I ? (Or = e, e = r = Ue(r, n)) : (Mr = e, e = I);
                } else Mr = e, e = I;
                return Hr[a] = {
                    nextPos: Mr,
                    result: e
                }, e;
            }
            function g() {
                var e, r, n, i, o, s, a = 32 * Mr + 10, u = Hr[a];
                if (u) return Mr = u.nextPos, u.result;
                if (e = Mr, (r = A()) !== I) {
                    for (n = [], i = Mr, V() !== I ? (Ye.test(t.charAt(Mr)) ? (o = t.charAt(Mr), Mr++) : (o = I, 
                    0 === Rr && c(Ze)), o !== I && V() !== I && (s = A()) !== I ? (Or = i, i = Ve(r, o, s)) : (Mr = i, 
                    i = I)) : (Mr = i, i = I); i !== I; ) n.push(i), i = Mr, V() !== I ? (Ye.test(t.charAt(Mr)) ? (o = t.charAt(Mr), 
                    Mr++) : (o = I, 0 === Rr && c(Ze)), o !== I && V() !== I && (s = A()) !== I ? (Or = i, 
                    i = Ve(r, o, s)) : (Mr = i, i = I)) : (Mr = i, i = I);
                    n !== I ? (Or = e, e = r = Ue(r, n)) : (Mr = e, e = I);
                } else Mr = e, e = I;
                return Hr[a] = {
                    nextPos: Mr,
                    result: e
                }, e;
            }
            function A() {
                var e, r, n, i = 32 * Mr + 11, o = Hr[i];
                return o ? (Mr = o.nextPos, o.result) : ((e = k()) === I && (e = Mr, t.substr(Mr, 2) === et ? (r = et, 
                Mr += 2) : (r = I, 0 === Rr && c(tt)), r === I && (t.substr(Mr, 2) === rt ? (r = rt, 
                Mr += 2) : (r = I, 0 === Rr && c(nt)), r === I && (it.test(t.charAt(Mr)) ? (r = t.charAt(Mr), 
                Mr++) : (r = I, 0 === Rr && c(ot)))), r !== I && V() !== I && (n = A()) !== I ? (Or = e, 
                e = r = st(r, n)) : (Mr = e, e = I)), Hr[i] = {
                    nextPos: Mr,
                    result: e
                }, e);
            }
            function k() {
                var e, r, n, i = 32 * Mr + 12, o = Hr[i];
                return o ? (Mr = o.nextPos, o.result) : (e = Mr, r = h(), r !== I && V() !== I ? (t.substr(Mr, 2) === et ? (n = et, 
                Mr += 2) : (n = I, 0 === Rr && c(tt)), n === I && (t.substr(Mr, 2) === rt ? (n = rt, 
                Mr += 2) : (n = I, 0 === Rr && c(nt))), n !== I ? (Or = e, e = r = at(r, n)) : (Mr = e, 
                e = I)) : (Mr = e, e = I), e === I && (e = h()), Hr[i] = {
                    nextPos: Mr,
                    result: e
                }, e);
            }
            function P() {
                var e, t, r, n, i = 32 * Mr + 13, o = Hr[i];
                return o ? (Mr = o.nextPos, o.result) : (e = Mr, t = Mr, r = C(), r !== I && V() !== I && (n = N()) !== I ? (Or = t, 
                t = r = ut(r, n)) : (Mr = t, t = I), t !== I && (r = w()) !== I ? (Or = e, e = t = ct(t, r)) : (Mr = e, 
                e = I), Hr[i] = {
                    nextPos: Mr,
                    result: e
                }, e);
            }
            function C() {
                var e, r, n, i, o, s = 32 * Mr + 14, a = Hr[s];
                return a ? (Mr = a.nextPos, a.result) : (e = Mr, (r = E()) === I && (r = L()) === I && (r = O()) === I && (r = j()) === I && (r = z()) === I && (r = Mr, 
                40 === t.charCodeAt(Mr) ? (n = lt, Mr++) : (n = I, 0 === Rr && c(dt)), n !== I && V() !== I && (i = f()) !== I && V() !== I ? (41 === t.charCodeAt(Mr) ? (o = ft, 
                Mr++) : (o = I, 0 === Rr && c(ht)), o !== I ? (Or = r, r = n = pt(i)) : (Mr = r, 
                r = I)) : (Mr = r, r = I)), r !== I && (n = w()) !== I ? (Or = e, e = r = vt(r, n)) : (Mr = e, 
                e = I), Hr[s] = {
                    nextPos: Mr,
                    result: e
                }, e);
            }
            function w() {
                var e, r, n, i, o, s = 32 * Mr + 15, a = Hr[s];
                if (a) return Mr = a.nextPos, a.result;
                for (e = [], r = Mr, V() !== I ? (91 === t.charCodeAt(Mr) ? (n = mt, Mr++) : (n = I, 
                0 === Rr && c(bt)), n !== I && V() !== I && (i = f()) !== I && V() !== I ? (93 === t.charCodeAt(Mr) ? (o = yt, 
                Mr++) : (o = I, 0 === Rr && c(xt)), o !== I ? (Or = r, r = gt(i)) : (Mr = r, r = I)) : (Mr = r, 
                r = I)) : (Mr = r, r = I), r === I && (r = Mr, V() !== I ? (46 === t.charCodeAt(Mr) ? (n = At, 
                Mr++) : (n = I, 0 === Rr && c(kt)), n !== I && V() !== I && (i = L()) !== I ? (Or = r, 
                r = Pt(i)) : (Mr = r, r = I)) : (Mr = r, r = I)); r !== I; ) e.push(r), r = Mr, 
                V() !== I ? (91 === t.charCodeAt(Mr) ? (n = mt, Mr++) : (n = I, 0 === Rr && c(bt)), 
                n !== I && V() !== I && (i = f()) !== I && V() !== I ? (93 === t.charCodeAt(Mr) ? (o = yt, 
                Mr++) : (o = I, 0 === Rr && c(xt)), o !== I ? (Or = r, r = gt(i)) : (Mr = r, r = I)) : (Mr = r, 
                r = I)) : (Mr = r, r = I), r === I && (r = Mr, V() !== I ? (46 === t.charCodeAt(Mr) ? (n = At, 
                Mr++) : (n = I, 0 === Rr && c(kt)), n !== I && V() !== I && (i = L()) !== I ? (Or = r, 
                r = Pt(i)) : (Mr = r, r = I)) : (Mr = r, r = I));
                return Hr[s] = {
                    nextPos: Mr,
                    result: e
                }, e;
            }
            function E() {
                var e, r, n, i, o, s = 32 * Mr + 16, a = Hr[s];
                return a ? (Mr = a.nextPos, a.result) : (e = Mr, t.substr(Mr, 3) === Ct ? (r = Ct, 
                Mr += 3) : (r = I, 0 === Rr && c(wt)), r !== I && U() !== I && (n = C()) !== I ? (i = Mr, 
                V() !== I && (o = N()) !== I ? (Or = i, i = Et(n, o)) : (Mr = i, i = I), i === I && (i = null), 
                i !== I ? (Or = e, e = r = Nt(n, i)) : (Mr = e, e = I)) : (Mr = e, e = I), Hr[s] = {
                    nextPos: Mr,
                    result: e
                }, e);
            }
            function N() {
                var e, r, n, i, o, s, a, u, l = 32 * Mr + 17, d = Hr[l];
                if (d) return Mr = d.nextPos, d.result;
                if (e = Mr, 40 === t.charCodeAt(Mr) ? (r = lt, Mr++) : (r = I, 0 === Rr && c(dt)), 
                r !== I && V() !== I ? (41 === t.charCodeAt(Mr) ? (n = ft, Mr++) : (n = I, 0 === Rr && c(ht)), 
                n !== I ? (Or = e, e = r = Lt()) : (Mr = e, e = I)) : (Mr = e, e = I), e === I) if (e = Mr, 
                40 === t.charCodeAt(Mr) ? (r = lt, Mr++) : (r = I, 0 === Rr && c(dt)), r !== I) if (V() !== I) if ((n = f()) !== I) {
                    for (i = [], o = Mr, (s = V()) !== I ? (44 === t.charCodeAt(Mr) ? (a = jt, Mr++) : (a = I, 
                    0 === Rr && c($t)), a !== I && V() !== I && (u = f()) !== I ? (Or = o, o = s = zt(n, u)) : (Mr = o, 
                    o = I)) : (Mr = o, o = I); o !== I; ) i.push(o), o = Mr, (s = V()) !== I ? (44 === t.charCodeAt(Mr) ? (a = jt, 
                    Mr++) : (a = I, 0 === Rr && c($t)), a !== I && V() !== I && (u = f()) !== I ? (Or = o, 
                    o = s = zt(n, u)) : (Mr = o, o = I)) : (Mr = o, o = I);
                    i !== I && (o = V()) !== I ? (41 === t.charCodeAt(Mr) ? (s = ft, Mr++) : (s = I, 
                    0 === Rr && c(ht)), s !== I ? (Or = e, e = r = Tt(n, i)) : (Mr = e, e = I)) : (Mr = e, 
                    e = I);
                } else Mr = e, e = I; else Mr = e, e = I; else Mr = e, e = I;
                return Hr[l] = {
                    nextPos: Mr,
                    result: e
                }, e;
            }
            function L() {
                var e, r, n, i, o, s = 32 * Mr + 18, a = Hr[s];
                if (a) return Mr = a.nextPos, a.result;
                if (Rr++, e = Mr, r = Mr, Rr++, n = S(), Rr--, n === I ? r = void 0 : (Mr = r, r = I), 
                r !== I) if (Ot.test(t.charAt(Mr)) ? (n = t.charAt(Mr), Mr++) : (n = I, 0 === Rr && c(St)), 
                n !== I) {
                    for (i = [], Bt.test(t.charAt(Mr)) ? (o = t.charAt(Mr), Mr++) : (o = I, 0 === Rr && c(Ft)); o !== I; ) i.push(o), 
                    Bt.test(t.charAt(Mr)) ? (o = t.charAt(Mr), Mr++) : (o = I, 0 === Rr && c(Ft));
                    i !== I ? (Or = e, e = r = Rt(n, i)) : (Mr = e, e = I);
                } else Mr = e, e = I; else Mr = e, e = I;
                return Rr--, e === I && (r = I, 0 === Rr && c(Mt)), Hr[s] = {
                    nextPos: Mr,
                    result: e
                }, e;
            }
            function j() {
                var e, r, n, i, o = 32 * Mr + 19, s = Hr[o];
                return s ? (Mr = s.nextPos, s.result) : (e = Mr, 91 === t.charCodeAt(Mr) ? (r = mt, 
                Mr++) : (r = I, 0 === Rr && c(bt)), r !== I && V() !== I ? (93 === t.charCodeAt(Mr) ? (n = yt, 
                Mr++) : (n = I, 0 === Rr && c(xt)), n !== I ? (Or = e, e = r = Ht()) : (Mr = e, 
                e = I)) : (Mr = e, e = I), e === I && (e = Mr, 91 === t.charCodeAt(Mr) ? (r = mt, 
                Mr++) : (r = I, 0 === Rr && c(bt)), r !== I && V() !== I && (n = $()) !== I && V() !== I ? (93 === t.charCodeAt(Mr) ? (i = yt, 
                Mr++) : (i = I, 0 === Rr && c(xt)), i !== I ? (Or = e, e = r = Vt(n)) : (Mr = e, 
                e = I)) : (Mr = e, e = I)), Hr[o] = {
                    nextPos: Mr,
                    result: e
                }, e);
            }
            function $() {
                var e, r, n, i, o, s, a = 32 * Mr + 20, u = Hr[a];
                if (u) return Mr = u.nextPos, u.result;
                if (e = Mr, (r = f()) !== I) {
                    for (n = [], i = Mr, V() !== I ? (44 === t.charCodeAt(Mr) ? (o = jt, Mr++) : (o = I, 
                    0 === Rr && c($t)), o !== I && V() !== I && (s = f()) !== I ? (Or = i, i = Ut(r, s)) : (Mr = i, 
                    i = I)) : (Mr = i, i = I); i !== I; ) n.push(i), i = Mr, V() !== I ? (44 === t.charCodeAt(Mr) ? (o = jt, 
                    Mr++) : (o = I, 0 === Rr && c($t)), o !== I && V() !== I && (s = f()) !== I ? (Or = i, 
                    i = Ut(r, s)) : (Mr = i, i = I)) : (Mr = i, i = I);
                    n !== I ? (Or = e, e = r = Tt(r, n)) : (Mr = e, e = I);
                } else Mr = e, e = I;
                return Hr[a] = {
                    nextPos: Mr,
                    result: e
                }, e;
            }
            function z() {
                var e, r, n, i, o, s, a = 32 * Mr + 21, u = Hr[a];
                return u ? (Mr = u.nextPos, u.result) : (e = Mr, 123 === t.charCodeAt(Mr) ? (r = qt, 
                Mr++) : (r = I, 0 === Rr && c(It)), r !== I && V() !== I ? (125 === t.charCodeAt(Mr) ? (n = Dt, 
                Mr++) : (n = I, 0 === Rr && c(_t)), n !== I ? (Or = e, e = r = Jt()) : (Mr = e, 
                e = I)) : (Mr = e, e = I), e === I && (e = Mr, 123 === t.charCodeAt(Mr) ? (r = qt, 
                Mr++) : (r = I, 0 === Rr && c(It)), r !== I && V() !== I && (n = T()) !== I && V() !== I ? (i = Mr, 
                44 === t.charCodeAt(Mr) ? (o = jt, Mr++) : (o = I, 0 === Rr && c($t)), o !== I && (s = V()) !== I ? i = o = [ o, s ] : (Mr = i, 
                i = I), i === I && (i = null), i !== I ? (125 === t.charCodeAt(Mr) ? (o = Dt, Mr++) : (o = I, 
                0 === Rr && c(_t)), o !== I ? (Or = e, e = r = Gt(n)) : (Mr = e, e = I)) : (Mr = e, 
                e = I)) : (Mr = e, e = I)), Hr[a] = {
                    nextPos: Mr,
                    result: e
                }, e);
            }
            function T() {
                var e, r, n, i, o, s, a = 32 * Mr + 22, u = Hr[a];
                if (u) return Mr = u.nextPos, u.result;
                if (e = Mr, (r = M()) !== I) {
                    for (n = [], i = Mr, V() !== I ? (44 === t.charCodeAt(Mr) ? (o = jt, Mr++) : (o = I, 
                    0 === Rr && c($t)), o !== I && V() !== I && (s = M()) !== I ? (Or = i, i = Kt(r, s)) : (Mr = i, 
                    i = I)) : (Mr = i, i = I); i !== I; ) n.push(i), i = Mr, V() !== I ? (44 === t.charCodeAt(Mr) ? (o = jt, 
                    Mr++) : (o = I, 0 === Rr && c($t)), o !== I && V() !== I && (s = M()) !== I ? (Or = i, 
                    i = Kt(r, s)) : (Mr = i, i = I)) : (Mr = i, i = I);
                    n !== I ? (Or = e, e = r = Tt(r, n)) : (Mr = e, e = I);
                } else Mr = e, e = I;
                return Hr[a] = {
                    nextPos: Mr,
                    result: e
                }, e;
            }
            function M() {
                var e, r, n, i, o = 32 * Mr + 23, s = Hr[o];
                return s ? (Mr = s.nextPos, s.result) : (e = Mr, (r = L()) === I && (r = H()) === I && (r = B()), 
                r !== I && V() !== I ? (58 === t.charCodeAt(Mr) ? (n = ke, Mr++) : (n = I, 0 === Rr && c(Pe)), 
                n !== I && V() !== I && (i = f()) !== I ? (Or = e, e = r = Qt(r, i)) : (Mr = e, 
                e = I)) : (Mr = e, e = I), Hr[o] = {
                    nextPos: Mr,
                    result: e
                }, e);
            }
            function O() {
                var e, t = 32 * Mr + 24, r = Hr[t];
                return r ? (Mr = r.nextPos, r.result) : ((e = S()) === I && (e = B()) === I && (e = H()), 
                Hr[t] = {
                    nextPos: Mr,
                    result: e
                }, e);
            }
            function S() {
                var e, r, n = 32 * Mr + 25, i = Hr[n];
                return i ? (Mr = i.nextPos, i.result) : (e = Mr, t.substr(Mr, 4) === Wt ? (r = Wt, 
                Mr += 4) : (r = I, 0 === Rr && c(Xt)), r !== I && (Or = e, r = Yt()), (e = r) === I && (e = Mr, 
                t.substr(Mr, 4) === Zt ? (r = Zt, Mr += 4) : (r = I, 0 === Rr && c(er)), r !== I && (Or = e, 
                r = tr()), (e = r) === I && (e = Mr, t.substr(Mr, 5) === rr ? (r = rr, Mr += 5) : (r = I, 
                0 === Rr && c(nr)), r !== I && (Or = e, r = ir()), e = r)), Hr[n] = {
                    nextPos: Mr,
                    result: e
                }, e);
            }
            function B() {
                var e, r, n, i, o, s = 32 * Mr + 26, a = Hr[s];
                if (a) return Mr = a.nextPos, a.result;
                if (Rr++, e = Mr, (r = F()) !== I) if (46 === t.charCodeAt(Mr) ? (n = At, Mr++) : (n = I, 
                0 === Rr && c(kt)), n !== I) {
                    for (i = [], sr.test(t.charAt(Mr)) ? (o = t.charAt(Mr), Mr++) : (o = I, 0 === Rr && c(ar)); o !== I; ) i.push(o), 
                    sr.test(t.charAt(Mr)) ? (o = t.charAt(Mr), Mr++) : (o = I, 0 === Rr && c(ar));
                    i !== I ? ((o = R()) === I && (o = null), o !== I ? (Or = e, e = r = ur()) : (Mr = e, 
                    e = I)) : (Mr = e, e = I);
                } else Mr = e, e = I; else Mr = e, e = I;
                if (e === I) {
                    if (e = Mr, 46 === t.charCodeAt(Mr) ? (r = At, Mr++) : (r = I, 0 === Rr && c(kt)), 
                    r !== I) {
                        if (n = [], sr.test(t.charAt(Mr)) ? (i = t.charAt(Mr), Mr++) : (i = I, 0 === Rr && c(ar)), 
                        i !== I) for (;i !== I; ) n.push(i), sr.test(t.charAt(Mr)) ? (i = t.charAt(Mr), 
                        Mr++) : (i = I, 0 === Rr && c(ar)); else n = I;
                        n !== I ? ((i = R()) === I && (i = null), i !== I ? (Or = e, e = r = ur()) : (Mr = e, 
                        e = I)) : (Mr = e, e = I);
                    } else Mr = e, e = I;
                    e === I && (e = Mr, (r = F()) !== I ? ((n = R()) === I && (n = null), n !== I ? (Or = e, 
                    e = r = ur()) : (Mr = e, e = I)) : (Mr = e, e = I));
                }
                return Rr--, e === I && (r = I, 0 === Rr && c(or)), Hr[s] = {
                    nextPos: Mr,
                    result: e
                }, e;
            }
            function F() {
                var e, r, n, i, o = 32 * Mr + 27, s = Hr[o];
                if (s) return Mr = s.nextPos, s.result;
                if (48 === t.charCodeAt(Mr) ? (e = cr, Mr++) : (e = I, 0 === Rr && c(lr)), e === I) if (e = Mr, 
                dr.test(t.charAt(Mr)) ? (r = t.charAt(Mr), Mr++) : (r = I, 0 === Rr && c(fr)), r !== I) {
                    for (n = [], sr.test(t.charAt(Mr)) ? (i = t.charAt(Mr), Mr++) : (i = I, 0 === Rr && c(ar)); i !== I; ) n.push(i), 
                    sr.test(t.charAt(Mr)) ? (i = t.charAt(Mr), Mr++) : (i = I, 0 === Rr && c(ar));
                    n !== I ? e = r = [ r, n ] : (Mr = e, e = I);
                } else Mr = e, e = I;
                return Hr[o] = {
                    nextPos: Mr,
                    result: e
                }, e;
            }
            function R() {
                var e, r, n, i, o, s = 32 * Mr + 28, a = Hr[s];
                if (a) return Mr = a.nextPos, a.result;
                if (e = Mr, t.substr(Mr, 1).toLowerCase() === hr ? (r = t.charAt(Mr), Mr++) : (r = I, 
                0 === Rr && c(pr)), r !== I) if (We.test(t.charAt(Mr)) ? (n = t.charAt(Mr), Mr++) : (n = I, 
                0 === Rr && c(Xe)), n === I && (n = null), n !== I) {
                    if (i = [], sr.test(t.charAt(Mr)) ? (o = t.charAt(Mr), Mr++) : (o = I, 0 === Rr && c(ar)), 
                    o !== I) for (;o !== I; ) i.push(o), sr.test(t.charAt(Mr)) ? (o = t.charAt(Mr), 
                    Mr++) : (o = I, 0 === Rr && c(ar)); else i = I;
                    i !== I ? e = r = [ r, n, i ] : (Mr = e, e = I);
                } else Mr = e, e = I; else Mr = e, e = I;
                return Hr[s] = {
                    nextPos: Mr,
                    result: e
                }, e;
            }
            function H() {
                var e, r, n, i, o, s = 32 * Mr + 29, a = Hr[s];
                if (a) return Mr = a.nextPos, a.result;
                if (Rr++, e = Mr, 34 === t.charCodeAt(Mr) ? (r = mr, Mr++) : (r = I, 0 === Rr && c(br)), 
                r !== I) {
                    for (n = [], i = Mr, t.substr(Mr, 2) === yr ? (o = yr, Mr += 2) : (o = I, 0 === Rr && c(xr)), 
                    o !== I && (Or = i, o = gr()), (i = o) === I && (Ar.test(t.charAt(Mr)) ? (i = t.charAt(Mr), 
                    Mr++) : (i = I, 0 === Rr && c(kr))); i !== I; ) n.push(i), i = Mr, t.substr(Mr, 2) === yr ? (o = yr, 
                    Mr += 2) : (o = I, 0 === Rr && c(xr)), o !== I && (Or = i, o = gr()), (i = o) === I && (Ar.test(t.charAt(Mr)) ? (i = t.charAt(Mr), 
                    Mr++) : (i = I, 0 === Rr && c(kr)));
                    n !== I ? (34 === t.charCodeAt(Mr) ? (i = mr, Mr++) : (i = I, 0 === Rr && c(br)), 
                    i !== I ? (Or = e, e = r = Pr(n)) : (Mr = e, e = I)) : (Mr = e, e = I);
                } else Mr = e, e = I;
                if (e === I) if (e = Mr, 39 === t.charCodeAt(Mr) ? (r = Cr, Mr++) : (r = I, 0 === Rr && c(wr)), 
                r !== I) {
                    for (n = [], i = Mr, t.substr(Mr, 2) === Er ? (o = Er, Mr += 2) : (o = I, 0 === Rr && c(Nr)), 
                    o !== I && (Or = i, o = Lr()), (i = o) === I && (jr.test(t.charAt(Mr)) ? (i = t.charAt(Mr), 
                    Mr++) : (i = I, 0 === Rr && c($r))); i !== I; ) n.push(i), i = Mr, t.substr(Mr, 2) === Er ? (o = Er, 
                    Mr += 2) : (o = I, 0 === Rr && c(Nr)), o !== I && (Or = i, o = Lr()), (i = o) === I && (jr.test(t.charAt(Mr)) ? (i = t.charAt(Mr), 
                    Mr++) : (i = I, 0 === Rr && c($r)));
                    n !== I ? (39 === t.charCodeAt(Mr) ? (i = Cr, Mr++) : (i = I, 0 === Rr && c(wr)), 
                    i !== I ? (Or = e, e = r = Pr(n)) : (Mr = e, e = I)) : (Mr = e, e = I);
                } else Mr = e, e = I;
                return Rr--, e === I && (r = I, 0 === Rr && c(vr)), Hr[s] = {
                    nextPos: Mr,
                    result: e
                }, e;
            }
            function V() {
                var e, t = 32 * Mr + 30, r = Hr[t];
                return r ? (Mr = r.nextPos, r.result) : ((e = U()) === I && (e = null), Hr[t] = {
                    nextPos: Mr,
                    result: e
                }, e);
            }
            function U() {
                var e, r, n = 32 * Mr + 31, i = Hr[n];
                if (i) return Mr = i.nextPos, i.result;
                if (e = [], zr.test(t.charAt(Mr)) ? (r = t.charAt(Mr), Mr++) : (r = I, 0 === Rr && c(Tr)), 
                r !== I) for (;r !== I; ) e.push(r), zr.test(t.charAt(Mr)) ? (r = t.charAt(Mr), 
                Mr++) : (r = I, 0 === Rr && c(Tr)); else e = I;
                return Hr[n] = {
                    nextPos: Mr,
                    result: e
                }, e;
            }
            r = void 0 !== r ? r : {};
            var q, I = {}, D = {
                Text: l,
                Expression: f
            }, _ = l, J = /^[^{]/, G = o([ "{" ], !0, !1), K = function(e, t, r) {
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
            }, ae = "=", ue = i("=", !1), ce = "*=", le = i("*=", !1), de = "/=", fe = i("/=", !1), he = "%=", pe = i("%=", !1), ve = "+=", me = i("+=", !1), be = "-=", ye = i("-=", !1), xe = function(e, t, r) {
                return {
                    type: "Assignment",
                    operator: t,
                    left: e,
                    right: r
                };
            }, ge = "?", Ae = i("?", !1), ke = ":", Pe = i(":", !1), Ce = function(e, t, r) {
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
            }, Le = function(e, t) {
                return Vr("Logical", e, t);
            }, je = "&&", $e = i("&&", !1), ze = function(e, t) {
                return {
                    operator: "&&",
                    arg: t
                };
            }, Te = "===", Me = i("===", !1), Oe = "!==", Se = i("!==", !1), Be = "==", Fe = i("==", !1), Re = "!=", He = i("!=", !1), Ve = function(e, t, r) {
                return {
                    operator: t,
                    arg: r
                };
            }, Ue = function(e, t) {
                return Vr("Binary", e, t);
            }, qe = "<=", Ie = i("<=", !1), De = ">=", _e = i(">=", !1), Je = "<", Ge = i("<", !1), Ke = ">", Qe = i(">", !1), We = /^[+\-]/, Xe = o([ "+", "-" ], !1, !1), Ye = /^[*\/%]/, Ze = o([ "*", "/", "%" ], !1, !1), et = "++", tt = i("++", !1), rt = "--", nt = i("--", !1), it = /^[+!\-]/, ot = o([ "+", "!", "-" ], !1, !1), st = function(e, t) {
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
            }, lt = "(", dt = i("(", !1), ft = ")", ht = i(")", !1), pt = function(e) {
                return e;
            }, vt = function(e, t) {
                return t.reduce(function(e, t) {
                    return {
                        type: "Member",
                        object: e,
                        property: t
                    };
                }, e);
            }, mt = "[", bt = i("[", !1), yt = "]", xt = i("]", !1), gt = function(e) {
                return e;
            }, At = ".", kt = i(".", !1), Pt = function(e) {
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
            }, Lt = function() {
                return [];
            }, jt = ",", $t = i(",", !1), zt = function(e, t) {
                return t;
            }, Tt = function(e, t) {
                return [ e ].concat(t);
            }, Mt = s("identifier"), Ot = /^[a-z$_]/i, St = o([ [ "a", "z" ], "$", "_" ], !1, !0), Bt = /^[a-z$_0-9]/i, Ft = o([ [ "a", "z" ], "$", "_", [ "0", "9" ] ], !1, !0), Rt = function(e, t) {
                return {
                    type: "Identifier",
                    name: e + t.join("")
                };
            }, Ht = function() {
                return {
                    type: "Array",
                    elements: []
                };
            }, Vt = function(e) {
                return {
                    type: "Array",
                    elements: e
                };
            }, Ut = function(e, t) {
                return t;
            }, qt = "{", It = i("{", !1), Dt = "}", _t = i("}", !1), Jt = function() {
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
            }, cr = "0", lr = i("0", !1), dr = /^[1-9]/, fr = o([ [ "1", "9" ] ], !1, !1), hr = "e", pr = i("e", !0), vr = s("string"), mr = '"', br = i('"', !1), yr = '\\"', xr = i('\\"', !1), gr = function() {
                return '"';
            }, Ar = /^[^"]/, kr = o([ '"' ], !0, !1), Pr = function(e) {
                return {
                    type: "Literal",
                    value: e.join("")
                };
            }, Cr = "'", wr = i("'", !1), Er = "\\'", Nr = i("\\'", !1), Lr = function() {
                return "'";
            }, jr = /^[^'']/, $r = o([ "'", "'" ], !0, !1), zr = /^[\t ]/, Tr = o([ "\t", " " ], !1, !1), Mr = 0, Or = 0, Sr = [ {
                line: 1,
                column: 1
            } ], Br = 0, Fr = [], Rr = 0, Hr = {};
            if ("startRule" in r) {
                if (!(r.startRule in D)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
                _ = D[r.startRule];
            }
            var Vr = function(e, t, r) {
                return 0 === r.length ? t : r.reduce(function(t, r) {
                    return {
                        type: e,
                        operator: r.operator,
                        left: t,
                        right: r.arg
                    };
                }, t);
            };
            if ((q = _()) !== I && Mr === t.length) return q;
            throw q !== I && Mr < t.length && c({
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
    }(), a = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Expression";
        return s.parse(e, {
            startRule: t
        });
    }, u = function e(r, n) {
        var i = void 0, o = void 0, s = r.type, a = r.operator;
        if ("Literal" === s) i = r.value; else if ("Array" === s) i = r.elements.map(function(t) {
            return e(t, n).value;
        }); else if ("Object" === s) i = {}, r.properties.forEach(function(t) {
            i[t.key] = e(t.value, n).value;
        }); else if ("Identifier" === s) {
            for (var u = n; u && void 0 === u[r.name]; ) u = u.$parent;
            u || (u = n), i = u[r.name], o = function(e) {
                return u[r.name] = e, e;
            };
        } else if ("Member" === s) {
            var c = e(r.object, n).value, l = e(r.property, n).value;
            i = void 0 !== c ? c[l] : void 0, o = function(e) {
                return c[l] = e, e;
            };
        } else if ("Conditional" === s) i = e(r.test, n).value ? e(r.consequent, n).value : e(r.alternate, n).value; else if ("Unary" === s || "Update" === s) {
            var d = e(r.argument, n), f = d.value;
            i = "!" === a ? !f : "+" === a ? +f : "-" === a ? -f : "++" === a ? f + 1 : "--" === a ? f - 1 : null, 
            "Update" === s && ((o = d.set) && (i = o(i)), r.prefix || (i += "++" === a ? -1 : 1));
        } else if ("Binary" === s || "Logical" === s || "Assignment" === s) {
            var h = e(r.left, n), p = h.value, v = e(r.right, n).value;
            i = "===" === a ? p === v : "!==" === a ? p !== v : "==" === a ? p == v : "!=" === a ? p != v : "<" === a ? p < v : ">" === a ? p > v : "<=" === a ? p <= v : ">=" === a ? p >= v : "&&" === a ? p && v : "||" === a ? p || v : "+" === a ? "string" == typeof (p + v) ? t(p) + t(v) : p + v : "-" === a ? p - v : "*" === a ? p * v : "/" === a ? p / v : "%" === a ? p % v : "*=" === a ? p * v : "/=" === a ? p / v : "%=" === a ? p % v : "+=" === a ? p + v : "-=" === a ? p - v : "=" === a ? v : null, 
            "Assignment" === s && (o = h.set, i = o(i));
        } else if ("Call" === s || "NewExpression" === s) {
            var m = r.callee.object ? e(r.callee.object, n).value : n, b = e(r.callee, n).value, y = r.arguments.map(function(t) {
                return e(t, n).value;
            });
            i = b ? "Call" === s ? b.apply(m, y) : new (b.bind.apply(b, y))() : void 0;
        }
        return {
            value: i,
            set: o
        };
    }, c = {
        prefix: "z-",
        directives: [],
        inlineParser: void 0
    }, l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, d = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }, f = function(e) {
        return o(e, "name", "value");
    }, h = function(e, t, r) {
        e.binds.forEach(function(r) {
            return p(e, t, r);
        }), e.children.forEach(function(e) {
            return e[t + "Binds"](r);
        });
    }, p = function(e, t, r) {
        if (r.directive[t]) {
            var n = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.ast;
                return u(t, e.scope).value;
            }, i = "initialize" === t ? [ e.node ].concat(r.args) : [ e.scope, e.node, n ].concat(r.args);
            r.directive[t].apply(r, i);
        }
    }, v = function(e, t, r) {
        return e instanceof m ? e : ("string" == typeof e ? e = document.querySelector(e) : e[0] && (e = e[0]), 
        new m(e, t, r));
    }, m = function() {
        function t(r, n) {
            var i = this, s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (d(this, t), e("vnode.create", r.outerHTML || r.textContent), this.node = r, 
            this.children = [], this.binds = [], this.type = r.nodeType, r.vnode && !n) e("vnode.create - already a vnode for this node"), 
            s ? (e("vnode.create - override"), this.parent = r.vnode, r.vnode = this, this.type = this.parent.type, 
            this.children = this.parent.children, this.binds = this.parent.binds, this.parent.children = [], 
            this.parent.binds = []) : (e("vnode.create - make pointer"), r.vnode.parent = this, 
            this.pointer = r.vnode); else if (n) {
                if (r.vnode = this, this.blocked = n.blocked, this.type = n.type, n.binds.forEach(function(e) {
                    return i.bind(o(e, "ast", "directive", "args", "key", "template"));
                }), n.tagName && (this.tag = n.tagName), n.attributes && (this.attributes = n.attributes.map(f), 
                this.removedAttrs = n.removedAttrs.map(f)), n.children) {
                    var a = Array.from(r.childNodes).filter(function(e) {
                        return 1 === e.nodeType || 3 === e.nodeType;
                    });
                    n.children.forEach(function(e) {
                        i.children.push(v(e.fragment ? r : a.shift(), e));
                    });
                }
            } else r.vnode = this, this.initialize();
        }
        return t.prototype.initialize = function() {
            var t = this, r = this.node;
            if (this.type = r.nodeType, e("vnode.init", this.outerHTML, r.nodeValue, this.type, r.nodeType), 
            1 === this.type) {
                this.tag = r.tagName, this.attributes = Array.from(r.attributes).map(f), this.removedAttrs = [];
                Math.ceil(1e7 * Math.random());
                c.directives.forEach(function(e) {
                    if (!t.blocked) if (e.tag) {
                        var n = t.tag.match(new RegExp("^" + e.tag.replace("{prefix}", c.prefix) + "$", "i"));
                        n && t.bind({
                            directive: e,
                            args: n
                        });
                    } else e.attribute && (t.attributes = t.attributes.filter(function(n) {
                        if (!t.blocked) {
                            var i = n.name.match(new RegExp("^" + e.attribute.replace("{prefix}", c.prefix) + "$", "i"));
                            if (!i) return !0;
                            var o = a(n.value || "undefined");
                            t.removedAttrs.push(f(n)), r.removeAttribute(n.name), t.bind({
                                directive: e,
                                ast: o,
                                args: i
                            });
                        }
                    }));
                }), !this.blocked && r.childNodes && (e("vnode.children", r.childNodes.length), 
                Array.from(r.childNodes).filter(function(e) {
                    return 1 === e.nodeType || 3 === e.nodeType;
                }).map(function(e) {
                    return t.children.push(v(e));
                }));
            } else if (3 === this.type && r.nodeValue.indexOf("{{") > -1) {
                var n = a(r.nodeValue, "Text");
                if (1 === n.length) {
                    if ("string" != typeof n[0]) {
                        if (n[0].html) {
                            var i = r;
                            r = this.node = document.createElement("span"), i.parentNode.replaceChild(r, i);
                        } else r.textContent = "";
                        this.bind({
                            directive: c.inlineParser,
                            ast: n[0].expression,
                            args: [ "", n[0].html ? "html" : "text" ]
                        });
                    }
                } else {
                    var o = document.createDocumentFragment();
                    this.fragment = !0, n.forEach(function(e) {
                        var r = "string" == typeof e ? document.createTextNode(e) : e.html ? document.createElement("span") : document.createTextNode(""), n = v(r);
                        "string" != typeof e && n.bind({
                            directive: c.inlineParser,
                            ast: e.expression,
                            args: [ "", e.html ? "html" : "text" ]
                        }), o.appendChild(r), t.children.push(n);
                    }), r.parentNode.replaceChild(o, r);
                }
            }
        }, t.prototype.bind = function(t) {
            if (e("vnode.bind", t.directive.attribute || t.directive.tag), t.directive.block && (this.blocked = !0), 
            t.directive.template) {
                e("vnode.bind.template");
                var r = t.directive.template.clone();
                this.node.parentNode.replaceChild(r.node, this.node), this.node = r.node, this.node.vnode = this, 
                e("boo", this.binds.length, this.children.length), this.binds = this.binds.concat(r.binds), 
                this.type = r.type, this.children = r.children;
            } else this.binds.push(t);
            p(this, "initialize", t);
        }, t.prototype.clone = function() {
            return e("vnode.clone"), v(this.node.cloneNode(!0), this);
        }, t.prototype.createBinds = function(e) {
            this.scope = e, h(this, "create", e);
        }, t.prototype.updateBinds = function() {
            h(this, "update"), this.pointer && this.pointer.updateBinds();
        }, t.prototype.destroyBinds = function() {
            var t = this;
            e("vnode.destroy"), h(this, "destroy"), this.removedAttrs && this.removedAttrs.forEach(function(e) {
                return t.node.setAttribute(e.name, e.value);
            }), delete this.scope, delete this.node.vnode;
        }, t;
    }(), b = function(e) {
        if (e.inline && (c.inlineParser = e), e.template) {
            e.block = !0;
            var t = document.createElement("span");
            t.innerHTML = e.template, e.template = v(t.childNodes[0]);
        }
        e.order || (e.order = 100);
        var r = c.directives.findIndex(function(t) {
            return e.order < t.order;
        });
        return c.directives.splice(-1 === r ? c.directives.length : r, 0, e), e;
    }, y = 0, x = void 0, g = function(e, t) {
        e[t] && e[t].forEach(function(e) {
            return e();
        });
    }, A = function(e, t, r) {
        var n = Reflect.get(e, t, r);
        return e instanceof Array || "function" != typeof n ? n : n.bind(e);
    }, k = function e(t, r) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        if (!(n.indexOf(r) > -1)) {
            n = n.concat([ r ]);
            var i = new Proxy(r, {
                get: A,
                set: function(r, i, o, s) {
                    x || ("object" !== (void 0 === o ? "undefined" : l(o)) || null === o || o instanceof Date || (o = e(t, o, n)), 
                    t.$(!0)), x = !0;
                    var a = Reflect.set(r, i, o, s);
                    return x = !1, a;
                },
                deleteProperty: function(e, r) {
                    x || t.$(!0), x = !0;
                    var n = Reflect.deleteProperty(e, r);
                    return x = !1, n;
                }
            });
            return Object.keys(r).forEach(function(e) {
                var n = r[e];
                "object" !== (void 0 === n ? "undefined" : l(n)) || n instanceof Date || r === t && "$" === e.charAt(0) || (i[e] = n);
            }), i;
        }
    }, P = function e(t, n, o) {
        var s = v(t, null, !0), c = {}, l = [], d = void 0, f = Object.assign({
            $id: y++,
            $: function(e) {
                return e ? d || (d = i(function() {
                    return f.$();
                })) : (d && (d = d()), s.updateBinds(f), g(c, "update"), l.forEach(function(e) {
                    var t = u(e.ast, f).value;
                    t !== e.val && (e.val = t, e.cb(t));
                })), f;
            },
            $destroy: function() {
                return s.destroyBinds(f), g(c, "destroy"), f;
            },
            $on: function(e, t) {
                return c[e] = [ t ].concat(c[e] || []), f;
            },
            $off: function(e, t) {
                return r(c[e], t), f;
            },
            $watch: function(e, t) {
                return l.push({
                    expr: e,
                    ast: a(e),
                    cb: t
                }), f;
            },
            $unwatch: function(e, t) {
                var n = l.find(function(r) {
                    return r.expr === e && r.cb === t;
                });
                return r(l, n), f;
            },
            get $parent() {
                return o || s.parent && s.parent.scope || e.root;
            }
        }, n);
        return s.createBinds(f), f.$(!0), k(f, f);
    };
    Object.assign(P, {
        version: "0.3.1",
        parse: a,
        evaluate: u,
        directive: b,
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
    }), Object.defineProperty(P, "prefix", {
        get: function() {
            return c.prefix;
        },
        set: function(e) {
            c.prefix = e;
        }
    });
    var C = [ "selected", "checked", "disabled", "readonly", "multiple", "ismap", "defer", "noresize" ];
    return [ {
        attribute: "{prefix}(text|html)",
        block: !0,
        inline: !0,
        initialize: function(e) {
            e.innerHTML = "";
        },
        update: function(e, r, n, i, o) {
            var s = t(n());
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
            s !== this.value && (this.value = s, C.indexOf(i) > -1 && (s = s ? i : void 0), 
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
        initialize: function(t) {
            e("exist.init"), this.template = v(t.cloneNode(!0)), e("exist.template", this.template.node.outerHTML);
        },
        create: function(t, r, n, i) {
            e("exist.create"), this.marker = document.createComment(i), r.parentNode.replaceChild(this.marker, r);
        },
        update: function(t, r, n) {
            e("exist.update");
            var i = !!n();
            i !== this.value && (i ? (e("exist.insert"), this.vnode = this.template.clone(), 
            this.marker.parentNode.insertBefore(this.vnode.node, this.marker), this.view = P(this.vnode, void 0, t).$(), 
            e("exist.inserted", this.vnode.node.outerHTML)) : this.view && (e("exist.remove"), 
            this.view.$destroy(), this.marker.parentNode.removeChild(this.vnode.node), delete this.vnode, 
            delete this.view), this.value = i);
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
        create: function(e, t, r) {
            var i = this, o = t.tagName.toLowerCase(), s = (t.getAttribute("type") || "").toLowerCase();
            this.type = "checkbox" === s ? "checkbox" : "select" === o ? "select" : "radio" === s ? "radio" : [ "range", "number" ].indexOf(s) > -1 ? "number" : [ "date", "datetime-local", "time", "month", "week" ].indexOf(s) > -1 ? "date" : "text", 
            "radio" !== this.type || t.getAttribute("name") || t.setAttribute("name", n(e.$id + JSON.stringify(this.ast))), 
            this.getValue = function(e) {
                var t = e.getAttribute(c.prefix + "value");
                return t ? r(a(t)) : e.getAttribute("value");
            }, this.handler = function() {
                if ("radio" !== i.type || t.checked) {
                    var n = "checkbox" === i.type ? !!t.checked : "select" === i.type ? i.getValue(t.options[t.selectedIndex]) : "radio" === i.type ? i.getValue(t) : "number" === i.type ? Number(t.value) : "date" === i.type ? t.valueAsDate : t.value;
                    n !== i.value && (i.value = n, r({
                        type: "Assignment",
                        operator: "=",
                        left: i.ast,
                        right: {
                            type: "Literal",
                            value: n
                        }
                    }), e.$());
                }
            }, t.addEventListener("input", this.handler), t.addEventListener("change", this.handler), 
            "select" === this.type && (t.selectedIndex = -1);
        },
        update: function(e, r, n) {
            var i = this, o = n();
            if (o !== this.value) {
                if ("checkbox" === this.type) r.checked = !!o; else if ("select" === this.type) r.selectedIndex = Array.from(r.options).reduce(function(e, r, n) {
                    var s = i.getValue(r);
                    return r.setAttribute("value", t(s)), s === o ? n : e;
                }, -1); else if ("radio" === this.type) {
                    var s = this.getValue(r);
                    r.setAttribute("value", t(s)), r.checked = o === s;
                } else "number" === this.type ? r.value = Number(o) : "date" === this.type ? r.valueAsDate = o : r.value = t(o);
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
        initialize: function(t, r, n) {
            e("in.init", c.prefix + "key", t.getAttribute(c.prefix + "key")), this.items = [];
            var i = t.getAttribute(c.prefix + "key");
            if (i) {
                var o = a(i);
                t.removeAttribute(c.prefix + "key"), this.key = function(e) {
                    var t;
                    return u(o, (t = {}, t[n] = e, t)).value;
                };
            } else this.key = function(e) {
                return JSON.stringify(e);
            };
            this.template = v(t.cloneNode(!0)), e("in.template", this.template.node.outerHTML);
        },
        create: function(t, r, n, i) {
            e("in.create"), this.marker = document.createComment(i), r.parentNode.replaceChild(this.marker, r);
        },
        update: function(t, n, i, o, s) {
            var a = this;
            e("in.update");
            var u = i() || [], c = Object.keys(u).map(function(e) {
                return {
                    index: e,
                    computed: a.key(u[e]),
                    datum: u[e]
                };
            });
            [].concat(this.items).forEach(function(e) {
                e.key = a.key(e.datum), c.find(function(t) {
                    return t.computed === e.key;
                }) || (a.marker.parentNode.removeChild(e.node), e.view.$destroy(), r(a.items, e));
            }), c.forEach(function(n) {
                var i = a.items.find(function(e) {
                    return n.computed === e.key;
                });
                if (i) e("in.move"), r(a.items, i), a.marker.parentNode.insertBefore(i.node, a.marker); else {
                    var o;
                    e("in.clone");
                    var u = a.template.clone();
                    i = {
                        key: n.computed,
                        datum: n.datum,
                        node: u.node
                    }, a.marker.parentNode.insertBefore(i.node, a.marker), i.view = P(u, (o = {}, o[s] = i.datum, 
                    o), t);
                }
                i.view.$index = n.index, i.view.$(), a.items.push(i);
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
    } ].forEach(b), P;
});
