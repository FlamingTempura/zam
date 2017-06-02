!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.zam = t();
}(this, function() {
    "use strict";
    var e = function(e) {
        return String(null !== e && void 0 !== e ? e : "");
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
            function a(e) {
                return {
                    type: "other",
                    description: e
                };
            }
            function s(e) {
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
                Sr < Fr || (Sr > Fr && (Fr = Sr, Mr = []), Mr.push(e));
            }
            function l() {
                var e, r, n, i, o = 32 * Sr + 0, a = Ur[o];
                if (a) return Sr = a.nextPos, a.result;
                for (e = Sr, r = [], J.test(t.charAt(Sr)) ? (n = t.charAt(Sr), Sr++) : (n = I, 0 === Rr && c(G)); n !== I; ) r.push(n), 
                J.test(t.charAt(Sr)) ? (n = t.charAt(Sr), Sr++) : (n = I, 0 === Rr && c(G));
                if (r !== I && (n = f()) !== I && (i = l()) !== I ? (Tr = e, e = r = K(r, n, i)) : (Sr = e, 
                e = I), e === I) {
                    for (e = Sr, r = [], t.length > Sr ? (n = t.charAt(Sr), Sr++) : (n = I, 0 === Rr && c(Q)); n !== I; ) r.push(n), 
                    t.length > Sr ? (n = t.charAt(Sr), Sr++) : (n = I, 0 === Rr && c(Q));
                    r !== I && (Tr = e, r = W(r)), e = r;
                }
                return Ur[o] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function f() {
                var e, r, n, i, o = 32 * Sr + 1, a = Ur[o];
                return a ? (Sr = a.nextPos, a.result) : (e = Sr, t.substr(Sr, 3) === X ? (r = X, 
                Sr += 3) : (r = I, 0 === Rr && c(Y)), r !== I && V() !== I && (n = d()) !== I && V() !== I ? (t.substr(Sr, 3) === Z ? (i = Z, 
                Sr += 3) : (i = I, 0 === Rr && c(ee)), i !== I ? (Tr = e, e = r = te(n)) : (Sr = e, 
                e = I)) : (Sr = e, e = I), e === I && (e = Sr, t.substr(Sr, 2) === re ? (r = re, 
                Sr += 2) : (r = I, 0 === Rr && c(ne)), r !== I && V() !== I && (n = d()) !== I && V() !== I ? (t.substr(Sr, 2) === ie ? (i = ie, 
                Sr += 2) : (i = I, 0 === Rr && c(oe)), i !== I ? (Tr = e, e = r = ae(n)) : (Sr = e, 
                e = I)) : (Sr = e, e = I)), Ur[o] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function d() {
                var e, r, n, i, o = 32 * Sr + 2, a = Ur[o];
                return a ? (Sr = a.nextPos, a.result) : (e = Sr, r = h(), r !== I && V() !== I ? (61 === t.charCodeAt(Sr) ? (n = se, 
                Sr++) : (n = I, 0 === Rr && c(ue)), n === I && (t.substr(Sr, 2) === ce ? (n = ce, 
                Sr += 2) : (n = I, 0 === Rr && c(le)), n === I && (t.substr(Sr, 2) === fe ? (n = fe, 
                Sr += 2) : (n = I, 0 === Rr && c(de)), n === I && (t.substr(Sr, 2) === he ? (n = he, 
                Sr += 2) : (n = I, 0 === Rr && c(pe)), n === I && (t.substr(Sr, 2) === ve ? (n = ve, 
                Sr += 2) : (n = I, 0 === Rr && c(me)), n === I && (t.substr(Sr, 2) === be ? (n = be, 
                Sr += 2) : (n = I, 0 === Rr && c(ye))))))), n !== I && V() !== I && (i = d()) !== I ? (Tr = e, 
                e = r = ge(r, n, i)) : (Sr = e, e = I)) : (Sr = e, e = I), e === I && (e = p()), 
                Ur[o] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function h() {
                var e, t = 32 * Sr + 3, r = Ur[t];
                return r ? (Sr = r.nextPos, r.result) : ((e = k()) === I && (e = C()), Ur[t] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function p() {
                var e, r, n, i, o, a, s = 32 * Sr + 4, u = Ur[s];
                return u ? (Sr = u.nextPos, u.result) : (e = Sr, r = v(), r !== I && V() !== I ? (63 === t.charCodeAt(Sr) ? (n = xe, 
                Sr++) : (n = I, 0 === Rr && c(Ae)), n !== I && V() !== I && (i = p()) !== I && V() !== I ? (58 === t.charCodeAt(Sr) ? (o = Pe, 
                Sr++) : (o = I, 0 === Rr && c(ke)), o !== I && V() !== I && (a = p()) !== I ? (Tr = e, 
                e = r = Ce(r, i, a)) : (Sr = e, e = I)) : (Sr = e, e = I)) : (Sr = e, e = I), e === I && (e = v()), 
                Ur[s] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function v() {
                var e, r, n, i, o, a, s = 32 * Sr + 5, u = Ur[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = m()) !== I) {
                    for (n = [], i = Sr, V() !== I ? (t.substr(Sr, 2) === we ? (o = we, Sr += 2) : (o = I, 
                    0 === Rr && c(Ee)), o !== I && V() !== I && (a = m()) !== I ? (Tr = i, i = Ne(r, a)) : (Sr = i, 
                    i = I)) : (Sr = i, i = I); i !== I; ) n.push(i), i = Sr, V() !== I ? (t.substr(Sr, 2) === we ? (o = we, 
                    Sr += 2) : (o = I, 0 === Rr && c(Ee)), o !== I && V() !== I && (a = m()) !== I ? (Tr = i, 
                    i = Ne(r, a)) : (Sr = i, i = I)) : (Sr = i, i = I);
                    n !== I ? (Tr = e, e = r = je(r, n)) : (Sr = e, e = I);
                } else Sr = e, e = I;
                return Ur[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function m() {
                var e, r, n, i, o, a, s = 32 * Sr + 6, u = Ur[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = b()) !== I) {
                    for (n = [], i = Sr, V() !== I ? (t.substr(Sr, 2) === $e ? (o = $e, Sr += 2) : (o = I, 
                    0 === Rr && c(Le)), o !== I && V() !== I && (a = b()) !== I ? (Tr = i, i = ze(r, a)) : (Sr = i, 
                    i = I)) : (Sr = i, i = I); i !== I; ) n.push(i), i = Sr, V() !== I ? (t.substr(Sr, 2) === $e ? (o = $e, 
                    Sr += 2) : (o = I, 0 === Rr && c(Le)), o !== I && V() !== I && (a = b()) !== I ? (Tr = i, 
                    i = ze(r, a)) : (Sr = i, i = I)) : (Sr = i, i = I);
                    n !== I ? (Tr = e, e = r = je(r, n)) : (Sr = e, e = I);
                } else Sr = e, e = I;
                return Ur[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function b() {
                var e, r, n, i, o, a, s = 32 * Sr + 7, u = Ur[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = y()) !== I) {
                    for (n = [], i = Sr, V() !== I ? (t.substr(Sr, 3) === Oe ? (o = Oe, Sr += 3) : (o = I, 
                    0 === Rr && c(Se)), o === I && (t.substr(Sr, 3) === Te ? (o = Te, Sr += 3) : (o = I, 
                    0 === Rr && c(Be)), o === I && (t.substr(Sr, 2) === Fe ? (o = Fe, Sr += 2) : (o = I, 
                    0 === Rr && c(Me)), o === I && (t.substr(Sr, 2) === Re ? (o = Re, Sr += 2) : (o = I, 
                    0 === Rr && c(Ue))))), o !== I && V() !== I && (a = y()) !== I ? (Tr = i, i = Ve(r, o, a)) : (Sr = i, 
                    i = I)) : (Sr = i, i = I); i !== I; ) n.push(i), i = Sr, V() !== I ? (t.substr(Sr, 3) === Oe ? (o = Oe, 
                    Sr += 3) : (o = I, 0 === Rr && c(Se)), o === I && (t.substr(Sr, 3) === Te ? (o = Te, 
                    Sr += 3) : (o = I, 0 === Rr && c(Be)), o === I && (t.substr(Sr, 2) === Fe ? (o = Fe, 
                    Sr += 2) : (o = I, 0 === Rr && c(Me)), o === I && (t.substr(Sr, 2) === Re ? (o = Re, 
                    Sr += 2) : (o = I, 0 === Rr && c(Ue))))), o !== I && V() !== I && (a = y()) !== I ? (Tr = i, 
                    i = Ve(r, o, a)) : (Sr = i, i = I)) : (Sr = i, i = I);
                    n !== I ? (Tr = e, e = r = qe(r, n)) : (Sr = e, e = I);
                } else Sr = e, e = I;
                return Ur[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function y() {
                var e, r, n, i, o, a, s = 32 * Sr + 8, u = Ur[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = g()) !== I) {
                    for (n = [], i = Sr, V() !== I ? (t.substr(Sr, 2) === De ? (o = De, Sr += 2) : (o = I, 
                    0 === Rr && c(Ie)), o === I && (t.substr(Sr, 2) === _e ? (o = _e, Sr += 2) : (o = I, 
                    0 === Rr && c(He)), o === I && (60 === t.charCodeAt(Sr) ? (o = Je, Sr++) : (o = I, 
                    0 === Rr && c(Ge)), o === I && (62 === t.charCodeAt(Sr) ? (o = Ke, Sr++) : (o = I, 
                    0 === Rr && c(Qe))))), o !== I && V() !== I && (a = g()) !== I ? (Tr = i, i = Ve(r, o, a)) : (Sr = i, 
                    i = I)) : (Sr = i, i = I); i !== I; ) n.push(i), i = Sr, V() !== I ? (t.substr(Sr, 2) === De ? (o = De, 
                    Sr += 2) : (o = I, 0 === Rr && c(Ie)), o === I && (t.substr(Sr, 2) === _e ? (o = _e, 
                    Sr += 2) : (o = I, 0 === Rr && c(He)), o === I && (60 === t.charCodeAt(Sr) ? (o = Je, 
                    Sr++) : (o = I, 0 === Rr && c(Ge)), o === I && (62 === t.charCodeAt(Sr) ? (o = Ke, 
                    Sr++) : (o = I, 0 === Rr && c(Qe))))), o !== I && V() !== I && (a = g()) !== I ? (Tr = i, 
                    i = Ve(r, o, a)) : (Sr = i, i = I)) : (Sr = i, i = I);
                    n !== I ? (Tr = e, e = r = qe(r, n)) : (Sr = e, e = I);
                } else Sr = e, e = I;
                return Ur[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function g() {
                var e, r, n, i, o, a, s = 32 * Sr + 9, u = Ur[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = x()) !== I) {
                    for (n = [], i = Sr, V() !== I ? (We.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = I, 
                    0 === Rr && c(Xe)), o !== I && V() !== I && (a = x()) !== I ? (Tr = i, i = Ve(r, o, a)) : (Sr = i, 
                    i = I)) : (Sr = i, i = I); i !== I; ) n.push(i), i = Sr, V() !== I ? (We.test(t.charAt(Sr)) ? (o = t.charAt(Sr), 
                    Sr++) : (o = I, 0 === Rr && c(Xe)), o !== I && V() !== I && (a = x()) !== I ? (Tr = i, 
                    i = Ve(r, o, a)) : (Sr = i, i = I)) : (Sr = i, i = I);
                    n !== I ? (Tr = e, e = r = qe(r, n)) : (Sr = e, e = I);
                } else Sr = e, e = I;
                return Ur[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function x() {
                var e, r, n, i, o, a, s = 32 * Sr + 10, u = Ur[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = A()) !== I) {
                    for (n = [], i = Sr, V() !== I ? (Ye.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = I, 
                    0 === Rr && c(Ze)), o !== I && V() !== I && (a = A()) !== I ? (Tr = i, i = Ve(r, o, a)) : (Sr = i, 
                    i = I)) : (Sr = i, i = I); i !== I; ) n.push(i), i = Sr, V() !== I ? (Ye.test(t.charAt(Sr)) ? (o = t.charAt(Sr), 
                    Sr++) : (o = I, 0 === Rr && c(Ze)), o !== I && V() !== I && (a = A()) !== I ? (Tr = i, 
                    i = Ve(r, o, a)) : (Sr = i, i = I)) : (Sr = i, i = I);
                    n !== I ? (Tr = e, e = r = qe(r, n)) : (Sr = e, e = I);
                } else Sr = e, e = I;
                return Ur[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function A() {
                var e, r, n, i = 32 * Sr + 11, o = Ur[i];
                return o ? (Sr = o.nextPos, o.result) : ((e = P()) === I && (e = Sr, t.substr(Sr, 2) === et ? (r = et, 
                Sr += 2) : (r = I, 0 === Rr && c(tt)), r === I && (t.substr(Sr, 2) === rt ? (r = rt, 
                Sr += 2) : (r = I, 0 === Rr && c(nt)), r === I && (it.test(t.charAt(Sr)) ? (r = t.charAt(Sr), 
                Sr++) : (r = I, 0 === Rr && c(ot)))), r !== I && V() !== I && (n = A()) !== I ? (Tr = e, 
                e = r = at(r, n)) : (Sr = e, e = I)), Ur[i] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function P() {
                var e, r, n, i = 32 * Sr + 12, o = Ur[i];
                return o ? (Sr = o.nextPos, o.result) : (e = Sr, r = h(), r !== I && V() !== I ? (t.substr(Sr, 2) === et ? (n = et, 
                Sr += 2) : (n = I, 0 === Rr && c(tt)), n === I && (t.substr(Sr, 2) === rt ? (n = rt, 
                Sr += 2) : (n = I, 0 === Rr && c(nt))), n !== I ? (Tr = e, e = r = st(r, n)) : (Sr = e, 
                e = I)) : (Sr = e, e = I), e === I && (e = h()), Ur[i] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function k() {
                var e, t, r, n, i = 32 * Sr + 13, o = Ur[i];
                return o ? (Sr = o.nextPos, o.result) : (e = Sr, t = Sr, r = C(), r !== I && V() !== I && (n = N()) !== I ? (Tr = t, 
                t = r = ut(r, n)) : (Sr = t, t = I), t !== I && (r = w()) !== I ? (Tr = e, e = t = ct(t, r)) : (Sr = e, 
                e = I), Ur[i] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function C() {
                var e, r, n, i, o, a = 32 * Sr + 14, s = Ur[a];
                return s ? (Sr = s.nextPos, s.result) : (e = Sr, (r = E()) === I && (r = j()) === I && (r = T()) === I && (r = $()) === I && (r = z()) === I && (r = Sr, 
                40 === t.charCodeAt(Sr) ? (n = lt, Sr++) : (n = I, 0 === Rr && c(ft)), n !== I && V() !== I && (i = d()) !== I && V() !== I ? (41 === t.charCodeAt(Sr) ? (o = dt, 
                Sr++) : (o = I, 0 === Rr && c(ht)), o !== I ? (Tr = r, r = n = pt(i)) : (Sr = r, 
                r = I)) : (Sr = r, r = I)), r !== I && (n = w()) !== I ? (Tr = e, e = r = vt(r, n)) : (Sr = e, 
                e = I), Ur[a] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function w() {
                var e, r, n, i, o, a = 32 * Sr + 15, s = Ur[a];
                if (s) return Sr = s.nextPos, s.result;
                for (e = [], r = Sr, V() !== I ? (91 === t.charCodeAt(Sr) ? (n = mt, Sr++) : (n = I, 
                0 === Rr && c(bt)), n !== I && V() !== I && (i = d()) !== I && V() !== I ? (93 === t.charCodeAt(Sr) ? (o = yt, 
                Sr++) : (o = I, 0 === Rr && c(gt)), o !== I ? (Tr = r, r = xt(i)) : (Sr = r, r = I)) : (Sr = r, 
                r = I)) : (Sr = r, r = I), r === I && (r = Sr, V() !== I ? (46 === t.charCodeAt(Sr) ? (n = At, 
                Sr++) : (n = I, 0 === Rr && c(Pt)), n !== I && V() !== I && (i = j()) !== I ? (Tr = r, 
                r = kt(i)) : (Sr = r, r = I)) : (Sr = r, r = I)); r !== I; ) e.push(r), r = Sr, 
                V() !== I ? (91 === t.charCodeAt(Sr) ? (n = mt, Sr++) : (n = I, 0 === Rr && c(bt)), 
                n !== I && V() !== I && (i = d()) !== I && V() !== I ? (93 === t.charCodeAt(Sr) ? (o = yt, 
                Sr++) : (o = I, 0 === Rr && c(gt)), o !== I ? (Tr = r, r = xt(i)) : (Sr = r, r = I)) : (Sr = r, 
                r = I)) : (Sr = r, r = I), r === I && (r = Sr, V() !== I ? (46 === t.charCodeAt(Sr) ? (n = At, 
                Sr++) : (n = I, 0 === Rr && c(Pt)), n !== I && V() !== I && (i = j()) !== I ? (Tr = r, 
                r = kt(i)) : (Sr = r, r = I)) : (Sr = r, r = I));
                return Ur[a] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function E() {
                var e, r, n, i, o, a = 32 * Sr + 16, s = Ur[a];
                return s ? (Sr = s.nextPos, s.result) : (e = Sr, t.substr(Sr, 3) === Ct ? (r = Ct, 
                Sr += 3) : (r = I, 0 === Rr && c(wt)), r !== I && q() !== I && (n = C()) !== I ? (i = Sr, 
                V() !== I && (o = N()) !== I ? (Tr = i, i = Et(n, o)) : (Sr = i, i = I), i === I && (i = null), 
                i !== I ? (Tr = e, e = r = Nt(n, i)) : (Sr = e, e = I)) : (Sr = e, e = I), Ur[a] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function N() {
                var e, r, n, i, o, a, s, u, l = 32 * Sr + 17, f = Ur[l];
                if (f) return Sr = f.nextPos, f.result;
                if (e = Sr, 40 === t.charCodeAt(Sr) ? (r = lt, Sr++) : (r = I, 0 === Rr && c(ft)), 
                r !== I && V() !== I ? (41 === t.charCodeAt(Sr) ? (n = dt, Sr++) : (n = I, 0 === Rr && c(ht)), 
                n !== I ? (Tr = e, e = r = jt()) : (Sr = e, e = I)) : (Sr = e, e = I), e === I) if (e = Sr, 
                40 === t.charCodeAt(Sr) ? (r = lt, Sr++) : (r = I, 0 === Rr && c(ft)), r !== I) if (V() !== I) if ((n = d()) !== I) {
                    for (i = [], o = Sr, (a = V()) !== I ? (44 === t.charCodeAt(Sr) ? (s = $t, Sr++) : (s = I, 
                    0 === Rr && c(Lt)), s !== I && V() !== I && (u = d()) !== I ? (Tr = o, o = a = zt(n, u)) : (Sr = o, 
                    o = I)) : (Sr = o, o = I); o !== I; ) i.push(o), o = Sr, (a = V()) !== I ? (44 === t.charCodeAt(Sr) ? (s = $t, 
                    Sr++) : (s = I, 0 === Rr && c(Lt)), s !== I && V() !== I && (u = d()) !== I ? (Tr = o, 
                    o = a = zt(n, u)) : (Sr = o, o = I)) : (Sr = o, o = I);
                    i !== I && (o = V()) !== I ? (41 === t.charCodeAt(Sr) ? (a = dt, Sr++) : (a = I, 
                    0 === Rr && c(ht)), a !== I ? (Tr = e, e = r = Ot(n, i)) : (Sr = e, e = I)) : (Sr = e, 
                    e = I);
                } else Sr = e, e = I; else Sr = e, e = I; else Sr = e, e = I;
                return Ur[l] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function j() {
                var e, r, n, i, o, a = 32 * Sr + 18, s = Ur[a];
                if (s) return Sr = s.nextPos, s.result;
                if (Rr++, e = Sr, r = Sr, Rr++, n = B(), Rr--, n === I ? r = void 0 : (Sr = r, r = I), 
                r !== I) if (Tt.test(t.charAt(Sr)) ? (n = t.charAt(Sr), Sr++) : (n = I, 0 === Rr && c(Bt)), 
                n !== I) {
                    for (i = [], Ft.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = I, 0 === Rr && c(Mt)); o !== I; ) i.push(o), 
                    Ft.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = I, 0 === Rr && c(Mt));
                    i !== I ? (Tr = e, e = r = Rt(n, i)) : (Sr = e, e = I);
                } else Sr = e, e = I; else Sr = e, e = I;
                return Rr--, e === I && (r = I, 0 === Rr && c(St)), Ur[a] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function $() {
                var e, r, n, i, o = 32 * Sr + 19, a = Ur[o];
                return a ? (Sr = a.nextPos, a.result) : (e = Sr, 91 === t.charCodeAt(Sr) ? (r = mt, 
                Sr++) : (r = I, 0 === Rr && c(bt)), r !== I && V() !== I ? (93 === t.charCodeAt(Sr) ? (n = yt, 
                Sr++) : (n = I, 0 === Rr && c(gt)), n !== I ? (Tr = e, e = r = Ut()) : (Sr = e, 
                e = I)) : (Sr = e, e = I), e === I && (e = Sr, 91 === t.charCodeAt(Sr) ? (r = mt, 
                Sr++) : (r = I, 0 === Rr && c(bt)), r !== I && V() !== I && (n = L()) !== I && V() !== I ? (93 === t.charCodeAt(Sr) ? (i = yt, 
                Sr++) : (i = I, 0 === Rr && c(gt)), i !== I ? (Tr = e, e = r = Vt(n)) : (Sr = e, 
                e = I)) : (Sr = e, e = I)), Ur[o] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function L() {
                var e, r, n, i, o, a, s = 32 * Sr + 20, u = Ur[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = d()) !== I) {
                    for (n = [], i = Sr, V() !== I ? (44 === t.charCodeAt(Sr) ? (o = $t, Sr++) : (o = I, 
                    0 === Rr && c(Lt)), o !== I && V() !== I && (a = d()) !== I ? (Tr = i, i = qt(r, a)) : (Sr = i, 
                    i = I)) : (Sr = i, i = I); i !== I; ) n.push(i), i = Sr, V() !== I ? (44 === t.charCodeAt(Sr) ? (o = $t, 
                    Sr++) : (o = I, 0 === Rr && c(Lt)), o !== I && V() !== I && (a = d()) !== I ? (Tr = i, 
                    i = qt(r, a)) : (Sr = i, i = I)) : (Sr = i, i = I);
                    n !== I ? (Tr = e, e = r = Ot(r, n)) : (Sr = e, e = I);
                } else Sr = e, e = I;
                return Ur[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function z() {
                var e, r, n, i, o, a, s = 32 * Sr + 21, u = Ur[s];
                return u ? (Sr = u.nextPos, u.result) : (e = Sr, 123 === t.charCodeAt(Sr) ? (r = Dt, 
                Sr++) : (r = I, 0 === Rr && c(It)), r !== I && V() !== I ? (125 === t.charCodeAt(Sr) ? (n = _t, 
                Sr++) : (n = I, 0 === Rr && c(Ht)), n !== I ? (Tr = e, e = r = Jt()) : (Sr = e, 
                e = I)) : (Sr = e, e = I), e === I && (e = Sr, 123 === t.charCodeAt(Sr) ? (r = Dt, 
                Sr++) : (r = I, 0 === Rr && c(It)), r !== I && V() !== I && (n = O()) !== I && V() !== I ? (i = Sr, 
                44 === t.charCodeAt(Sr) ? (o = $t, Sr++) : (o = I, 0 === Rr && c(Lt)), o !== I && (a = V()) !== I ? i = o = [ o, a ] : (Sr = i, 
                i = I), i === I && (i = null), i !== I ? (125 === t.charCodeAt(Sr) ? (o = _t, Sr++) : (o = I, 
                0 === Rr && c(Ht)), o !== I ? (Tr = e, e = r = Gt(n)) : (Sr = e, e = I)) : (Sr = e, 
                e = I)) : (Sr = e, e = I)), Ur[s] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function O() {
                var e, r, n, i, o, a, s = 32 * Sr + 22, u = Ur[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = S()) !== I) {
                    for (n = [], i = Sr, V() !== I ? (44 === t.charCodeAt(Sr) ? (o = $t, Sr++) : (o = I, 
                    0 === Rr && c(Lt)), o !== I && V() !== I && (a = S()) !== I ? (Tr = i, i = Kt(r, a)) : (Sr = i, 
                    i = I)) : (Sr = i, i = I); i !== I; ) n.push(i), i = Sr, V() !== I ? (44 === t.charCodeAt(Sr) ? (o = $t, 
                    Sr++) : (o = I, 0 === Rr && c(Lt)), o !== I && V() !== I && (a = S()) !== I ? (Tr = i, 
                    i = Kt(r, a)) : (Sr = i, i = I)) : (Sr = i, i = I);
                    n !== I ? (Tr = e, e = r = Ot(r, n)) : (Sr = e, e = I);
                } else Sr = e, e = I;
                return Ur[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function S() {
                var e, r, n, i, o = 32 * Sr + 23, a = Ur[o];
                return a ? (Sr = a.nextPos, a.result) : (e = Sr, (r = j()) === I && (r = U()) === I && (r = F()), 
                r !== I && V() !== I ? (58 === t.charCodeAt(Sr) ? (n = Pe, Sr++) : (n = I, 0 === Rr && c(ke)), 
                n !== I && V() !== I && (i = d()) !== I ? (Tr = e, e = r = Qt(r, i)) : (Sr = e, 
                e = I)) : (Sr = e, e = I), Ur[o] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function T() {
                var e, t = 32 * Sr + 24, r = Ur[t];
                return r ? (Sr = r.nextPos, r.result) : ((e = B()) === I && (e = F()) === I && (e = U()), 
                Ur[t] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function B() {
                var e, r, n = 32 * Sr + 25, i = Ur[n];
                return i ? (Sr = i.nextPos, i.result) : (e = Sr, t.substr(Sr, 4) === Wt ? (r = Wt, 
                Sr += 4) : (r = I, 0 === Rr && c(Xt)), r !== I && (Tr = e, r = Yt()), (e = r) === I && (e = Sr, 
                t.substr(Sr, 4) === Zt ? (r = Zt, Sr += 4) : (r = I, 0 === Rr && c(er)), r !== I && (Tr = e, 
                r = tr()), (e = r) === I && (e = Sr, t.substr(Sr, 5) === rr ? (r = rr, Sr += 5) : (r = I, 
                0 === Rr && c(nr)), r !== I && (Tr = e, r = ir()), e = r)), Ur[n] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function F() {
                var e, r, n, i, o, a = 32 * Sr + 26, s = Ur[a];
                if (s) return Sr = s.nextPos, s.result;
                if (Rr++, e = Sr, (r = M()) !== I) if (46 === t.charCodeAt(Sr) ? (n = At, Sr++) : (n = I, 
                0 === Rr && c(Pt)), n !== I) {
                    for (i = [], ar.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = I, 0 === Rr && c(sr)); o !== I; ) i.push(o), 
                    ar.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = I, 0 === Rr && c(sr));
                    i !== I ? ((o = R()) === I && (o = null), o !== I ? (Tr = e, e = r = ur()) : (Sr = e, 
                    e = I)) : (Sr = e, e = I);
                } else Sr = e, e = I; else Sr = e, e = I;
                if (e === I) {
                    if (e = Sr, 46 === t.charCodeAt(Sr) ? (r = At, Sr++) : (r = I, 0 === Rr && c(Pt)), 
                    r !== I) {
                        if (n = [], ar.test(t.charAt(Sr)) ? (i = t.charAt(Sr), Sr++) : (i = I, 0 === Rr && c(sr)), 
                        i !== I) for (;i !== I; ) n.push(i), ar.test(t.charAt(Sr)) ? (i = t.charAt(Sr), 
                        Sr++) : (i = I, 0 === Rr && c(sr)); else n = I;
                        n !== I ? ((i = R()) === I && (i = null), i !== I ? (Tr = e, e = r = ur()) : (Sr = e, 
                        e = I)) : (Sr = e, e = I);
                    } else Sr = e, e = I;
                    e === I && (e = Sr, (r = M()) !== I ? ((n = R()) === I && (n = null), n !== I ? (Tr = e, 
                    e = r = ur()) : (Sr = e, e = I)) : (Sr = e, e = I));
                }
                return Rr--, e === I && (r = I, 0 === Rr && c(or)), Ur[a] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function M() {
                var e, r, n, i, o = 32 * Sr + 27, a = Ur[o];
                if (a) return Sr = a.nextPos, a.result;
                if (48 === t.charCodeAt(Sr) ? (e = cr, Sr++) : (e = I, 0 === Rr && c(lr)), e === I) if (e = Sr, 
                fr.test(t.charAt(Sr)) ? (r = t.charAt(Sr), Sr++) : (r = I, 0 === Rr && c(dr)), r !== I) {
                    for (n = [], ar.test(t.charAt(Sr)) ? (i = t.charAt(Sr), Sr++) : (i = I, 0 === Rr && c(sr)); i !== I; ) n.push(i), 
                    ar.test(t.charAt(Sr)) ? (i = t.charAt(Sr), Sr++) : (i = I, 0 === Rr && c(sr));
                    n !== I ? e = r = [ r, n ] : (Sr = e, e = I);
                } else Sr = e, e = I;
                return Ur[o] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function R() {
                var e, r, n, i, o, a = 32 * Sr + 28, s = Ur[a];
                if (s) return Sr = s.nextPos, s.result;
                if (e = Sr, t.substr(Sr, 1).toLowerCase() === hr ? (r = t.charAt(Sr), Sr++) : (r = I, 
                0 === Rr && c(pr)), r !== I) if (We.test(t.charAt(Sr)) ? (n = t.charAt(Sr), Sr++) : (n = I, 
                0 === Rr && c(Xe)), n === I && (n = null), n !== I) {
                    if (i = [], ar.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = I, 0 === Rr && c(sr)), 
                    o !== I) for (;o !== I; ) i.push(o), ar.test(t.charAt(Sr)) ? (o = t.charAt(Sr), 
                    Sr++) : (o = I, 0 === Rr && c(sr)); else i = I;
                    i !== I ? e = r = [ r, n, i ] : (Sr = e, e = I);
                } else Sr = e, e = I; else Sr = e, e = I;
                return Ur[a] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function U() {
                var e, r, n, i, o, a = 32 * Sr + 29, s = Ur[a];
                if (s) return Sr = s.nextPos, s.result;
                if (Rr++, e = Sr, 34 === t.charCodeAt(Sr) ? (r = mr, Sr++) : (r = I, 0 === Rr && c(br)), 
                r !== I) {
                    for (n = [], i = Sr, t.substr(Sr, 2) === yr ? (o = yr, Sr += 2) : (o = I, 0 === Rr && c(gr)), 
                    o !== I && (Tr = i, o = xr()), (i = o) === I && (Ar.test(t.charAt(Sr)) ? (i = t.charAt(Sr), 
                    Sr++) : (i = I, 0 === Rr && c(Pr))); i !== I; ) n.push(i), i = Sr, t.substr(Sr, 2) === yr ? (o = yr, 
                    Sr += 2) : (o = I, 0 === Rr && c(gr)), o !== I && (Tr = i, o = xr()), (i = o) === I && (Ar.test(t.charAt(Sr)) ? (i = t.charAt(Sr), 
                    Sr++) : (i = I, 0 === Rr && c(Pr)));
                    n !== I ? (34 === t.charCodeAt(Sr) ? (i = mr, Sr++) : (i = I, 0 === Rr && c(br)), 
                    i !== I ? (Tr = e, e = r = kr(n)) : (Sr = e, e = I)) : (Sr = e, e = I);
                } else Sr = e, e = I;
                if (e === I) if (e = Sr, 39 === t.charCodeAt(Sr) ? (r = Cr, Sr++) : (r = I, 0 === Rr && c(wr)), 
                r !== I) {
                    for (n = [], i = Sr, t.substr(Sr, 2) === Er ? (o = Er, Sr += 2) : (o = I, 0 === Rr && c(Nr)), 
                    o !== I && (Tr = i, o = jr()), (i = o) === I && ($r.test(t.charAt(Sr)) ? (i = t.charAt(Sr), 
                    Sr++) : (i = I, 0 === Rr && c(Lr))); i !== I; ) n.push(i), i = Sr, t.substr(Sr, 2) === Er ? (o = Er, 
                    Sr += 2) : (o = I, 0 === Rr && c(Nr)), o !== I && (Tr = i, o = jr()), (i = o) === I && ($r.test(t.charAt(Sr)) ? (i = t.charAt(Sr), 
                    Sr++) : (i = I, 0 === Rr && c(Lr)));
                    n !== I ? (39 === t.charCodeAt(Sr) ? (i = Cr, Sr++) : (i = I, 0 === Rr && c(wr)), 
                    i !== I ? (Tr = e, e = r = kr(n)) : (Sr = e, e = I)) : (Sr = e, e = I);
                } else Sr = e, e = I;
                return Rr--, e === I && (r = I, 0 === Rr && c(vr)), Ur[a] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function V() {
                var e, t = 32 * Sr + 30, r = Ur[t];
                return r ? (Sr = r.nextPos, r.result) : ((e = q()) === I && (e = null), Ur[t] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function q() {
                var e, r, n = 32 * Sr + 31, i = Ur[n];
                if (i) return Sr = i.nextPos, i.result;
                if (e = [], zr.test(t.charAt(Sr)) ? (r = t.charAt(Sr), Sr++) : (r = I, 0 === Rr && c(Or)), 
                r !== I) for (;r !== I; ) e.push(r), zr.test(t.charAt(Sr)) ? (r = t.charAt(Sr), 
                Sr++) : (r = I, 0 === Rr && c(Or)); else e = I;
                return Ur[n] = {
                    nextPos: Sr,
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
                return Vr("Logical", e, t);
            }, $e = "&&", Le = i("&&", !1), ze = function(e, t) {
                return {
                    operator: "&&",
                    arg: t
                };
            }, Oe = "===", Se = i("===", !1), Te = "!==", Be = i("!==", !1), Fe = "==", Me = i("==", !1), Re = "!=", Ue = i("!=", !1), Ve = function(e, t, r) {
                return {
                    operator: t,
                    arg: r
                };
            }, qe = function(e, t) {
                return Vr("Binary", e, t);
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
            }, $t = ",", Lt = i(",", !1), zt = function(e, t) {
                return t;
            }, Ot = function(e, t) {
                return [ e ].concat(t);
            }, St = a("identifier"), Tt = /^[a-z$_]/i, Bt = o([ [ "a", "z" ], "$", "_" ], !1, !0), Ft = /^[a-z$_0-9]/i, Mt = o([ [ "a", "z" ], "$", "_", [ "0", "9" ] ], !1, !0), Rt = function(e, t) {
                return {
                    type: "Identifier",
                    name: e + t.join("")
                };
            }, Ut = function() {
                return {
                    type: "Array",
                    elements: []
                };
            }, Vt = function(e) {
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
            }, Ar = /^[^"]/, Pr = o([ '"' ], !0, !1), kr = function(e) {
                return {
                    type: "Literal",
                    value: e.join("")
                };
            }, Cr = "'", wr = i("'", !1), Er = "\\'", Nr = i("\\'", !1), jr = function() {
                return "'";
            }, $r = /^[^'']/, Lr = o([ "'", "'" ], !0, !1), zr = /^[\t ]/, Or = o([ "\t", " " ], !1, !1), Sr = 0, Tr = 0, Br = [ {
                line: 1,
                column: 1
            } ], Fr = 0, Mr = [], Rr = 0, Ur = {};
            if ("startRule" in r) {
                if (!(r.startRule in _)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
                H = _[r.startRule];
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
            if ((D = H()) !== I && Sr === t.length) return D;
            throw D !== I && Sr < t.length && c({
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
    }(), a = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Expression";
        return o.parse(e, {
            startRule: t
        });
    }, s = function t(r, n) {
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
    }, u = [], c = function e(t) {
        return t.inline && (e.inlineParser = t), t.template && (t.block = !0, t.order = .5), 
        t.order || (t.order = 100), u.push(t), u.sort(function(e, t) {
            return e.order - t.order;
        }), t;
    };
    c.forEach = u.forEach.bind(u), c.directives = u, c.prefix = "z-";
    var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, f = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }, d = function(e) {
        return i(e, "name", "value");
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
                return s(t, e.scope).value;
            }, i = "initialize" === t ? [ e.node ].concat(r.args) : [ e.scope, e.node, n ].concat(r.args);
            r.directive[t].apply(r, i);
        }
    }, v = function(e, t, r) {
        return e instanceof m ? e : ("string" == typeof e ? e = document.querySelector(e) : e[0] && (e = e[0]), 
        new m(e, t, r));
    }, m = function() {
        function e(t, r) {
            var n = this, o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (f(this, e), this.node = t, this.type = t.nodeType, this.children = [], this.binds = [], 
            t.vnode && !r) o ? (this.parent = t.vnode, t.vnode = this, this.children = this.parent.children, 
            this.binds = this.parent.binds, this.parent.children = [], this.parent.binds = []) : (t.vnode.parent = this, 
            this.pointer = t.vnode); else if (r) {
                if (t.vnode = this, this.blocked = r.blocked, r.binds.forEach(function(e) {
                    return n.bind(i(e, "ast", "directive", "args", "key", "template"));
                }), r.tagName && (this.tag = r.tagName), r.attributes && (this.attributes = r.attributes.map(d), 
                this.removedAttrs = r.removedAttrs.map(d)), r.children) {
                    var a = Array.from(t.childNodes).filter(function(e) {
                        return 1 === e.nodeType || 3 === e.nodeType;
                    });
                    r.children.forEach(function(e) {
                        n.children.push(v(e.fragment ? t : a.shift(), e));
                    });
                }
            } else t.vnode = this, this.initialize();
        }
        return e.prototype.initialize = function() {
            var e = this, t = this.node;
            if (1 === this.type) this.tag = t.tagName, this.attributes = Array.from(t.attributes).map(d), 
            this.removedAttrs = [], c.directives.forEach(function(r) {
                if (!e.blocked) if (r.tag) {
                    var n = e.tag.match(new RegExp("^" + r.tag.replace("{prefix}", c.prefix) + "$", "i"));
                    n && e.bind({
                        directive: r,
                        args: n
                    });
                } else r.attribute && (e.attributes = e.attributes.filter(function(n) {
                    if (!e.blocked) {
                        var i = n.name.match(new RegExp("^" + r.attribute.replace("{prefix}", c.prefix) + "$", "i"));
                        if (!i) return !0;
                        var o = a(n.value || "undefined");
                        e.removedAttrs.push(d(n)), t.removeAttribute(n.name), e.bind({
                            directive: r,
                            ast: o,
                            args: i
                        });
                    }
                }));
            }), !this.blocked && t.childNodes && Array.from(t.childNodes).filter(function(e) {
                return 1 === e.nodeType || 3 === e.nodeType;
            }).map(function(t) {
                return e.children.push(v(t));
            }); else if (3 === this.type && t.nodeValue.indexOf("{{") > -1) {
                var r = a(t.nodeValue, "Text");
                if (1 === r.length) {
                    if ("string" != typeof r[0]) {
                        if (r[0].html) {
                            var n = t;
                            t = this.node = document.createElement("span"), n.parentNode.replaceChild(t, n);
                        } else t.textContent = "";
                        this.bind({
                            directive: c.inlineParser,
                            ast: r[0].expression,
                            args: [ "", r[0].html ? "html" : "text" ]
                        });
                    }
                } else {
                    var i = document.createDocumentFragment();
                    this.fragment = !0, r.forEach(function(t) {
                        var r = "string" == typeof t ? document.createTextNode(t) : t.html ? document.createElement("span") : document.createTextNode(""), n = v(r);
                        "string" != typeof t && n.bind({
                            directive: c.inlineParser,
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
            p(this, "initialize", e);
        }, e.prototype.clone = function() {
            return v(this.node.cloneNode(!0), this);
        }, e.prototype.createBinds = function(e) {
            this.scope = e, h(this, "create", e);
        }, e.prototype.updateBinds = function() {
            h(this, "update"), this.pointer && this.pointer.updateBinds(this.pointer.scope);
        }, e.prototype.destroyBinds = function() {
            var e = this;
            h(this, "destroy"), this.removedAttrs && this.removedAttrs.forEach(function(t) {
                return e.node.setAttribute(t.name, t.value);
            }), delete this.scope, delete this.node.vnode;
        }, e;
    }(), b = 0, y = void 0, g = function(e, t) {
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
                set: function(r, i, o, a) {
                    y || ("object" !== (void 0 === o ? "undefined" : l(o)) || null === o || o instanceof Date || (o = e(t, o, n)), 
                    t.$(!0)), y = !0;
                    var s = Reflect.set(r, i, o, a);
                    return y = !1, s;
                },
                deleteProperty: function(e, r) {
                    y || t.$(!0), y = !0;
                    var n = Reflect.deleteProperty(e, r);
                    return y = !1, n;
                }
            });
            return Object.keys(r).forEach(function(e) {
                var n = r[e];
                "object" !== (void 0 === n ? "undefined" : l(n)) || n instanceof Date || r === t && "$" === e.charAt(0) || (i[e] = n);
            }), i;
        }
    }, P = function e(r, i, o) {
        var u = v(r, null, !0), c = {}, l = [], f = void 0, d = Object.assign({
            $id: b++,
            $: function(e) {
                return e ? f || (f = n(function() {
                    return d.$();
                })) : (f && (f = f()), u.updateBinds(d), g(c, "update"), l.forEach(function(e) {
                    var t = s(e.ast, d).value;
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
                    ast: a(e),
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
        version: "0.3.1",
        parse: a,
        evaluate: s,
        directive: c,
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
    var k = [ "selected", "checked", "disabled", "readonly", "multiple", "ismap", "defer", "noresize" ];
    return [ {
        attribute: "{prefix}(text|html)",
        block: !0,
        inline: !0,
        create: function(e, t) {
            t.innerHTML = "";
        },
        update: function(t, r, n, i, o) {
            var a = e(n());
            a !== this.value && ("html" === o ? r.innerHTML = a : r.textContent = a, this.value = a);
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
            var a = r();
            a !== this.value && (this.value = a, k.indexOf(i) > -1 && (a = a ? i : void 0), 
            void 0 === a ? t.removeAttribute(i) : t.setAttribute(i, a));
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
            this.template = v(e.cloneNode(!0));
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
            var a = r();
            a !== this.value && (t.style[i || o] = this.value = a);
        }
    }, {
        attribute: "{prefix}model",
        block: !0,
        order: 3,
        create: function(e, t, n) {
            var i = this, o = t.tagName.toLowerCase(), s = (t.getAttribute("type") || "").toLowerCase();
            this.type = "checkbox" === s ? "checkbox" : "select" === o ? "select" : "radio" === s ? "radio" : [ "range", "number" ].indexOf(s) > -1 ? "number" : [ "date", "datetime-local", "time", "month", "week" ].indexOf(s) > -1 ? "date" : "text", 
            "radio" !== this.type || t.getAttribute("name") || t.setAttribute("name", r(e.$id + JSON.stringify(this.ast))), 
            this.getValue = function(e) {
                var t = e.getAttribute(c.prefix + "value");
                return t ? n(a(t)) : e.getAttribute("value");
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
                    var a = i.getValue(r);
                    return r.setAttribute("value", e(a)), a === o ? n : t;
                }, -1); else if ("radio" === this.type) {
                    var a = this.getValue(r);
                    r.setAttribute("value", e(a)), r.checked = o === a;
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
            var n = e.getAttribute(c.prefix + "key");
            if (n) {
                var i = a(n);
                e.removeAttribute(c.prefix + "key"), this.key = function(e) {
                    var t;
                    return s(i, (t = {}, t[r] = e, t)).value;
                };
            } else this.key = function(e) {
                return JSON.stringify(e);
            };
            this.template = v(e.cloneNode(!0));
        },
        create: function(e, t, r, n) {
            this.marker = document.createComment(n), t.parentNode.replaceChild(this.marker, t);
        },
        update: function(e, r, n, i, o) {
            var a = this, s = n() || [], u = Object.keys(s).map(function(e) {
                return {
                    index: e,
                    computed: a.key(s[e]),
                    datum: s[e]
                };
            });
            [].concat(this.items).forEach(function(e) {
                e.key = a.key(e.datum), u.find(function(t) {
                    return t.computed === e.key;
                }) || (a.marker.parentNode.removeChild(e.node), e.view.$destroy(), t(a.items, e));
            }), u.forEach(function(r) {
                var n = a.items.find(function(e) {
                    return r.computed === e.key;
                });
                if (n) t(a.items, n), a.marker.parentNode.insertBefore(n.node, a.marker); else {
                    var i, s = a.template.clone();
                    n = {
                        key: r.computed,
                        datum: r.datum,
                        node: s.node
                    }, a.marker.parentNode.insertBefore(n.node, a.marker), n.view = P(s, (i = {}, i[o] = n.datum, 
                    i), e);
                }
                n.view.$index = r.index, n.view.$(), a.items.push(n);
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
    } ].forEach(c), P;
});
