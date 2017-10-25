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
    }, i = function() {
        function e(t, r, n, i) {
            this.message = t, this.expected = r, this.found = n, this.location = i, this.name = "SyntaxError", 
            "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, e);
        }
        function t(t, r) {
            function n() {
                return t.substring(Or, Tr);
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
                Tr < Fr || (Tr > Fr && (Fr = Tr, Mr = []), Mr.push(e));
            }
            function l() {
                var e, r, n, i, o = 32 * Tr + 0, s = Ir[o];
                if (s) return Tr = s.nextPos, s.result;
                for (e = Tr, r = [], J.test(t.charAt(Tr)) ? (n = t.charAt(Tr), Tr++) : (n = V, 0 === Rr && c(G)); n !== V; ) r.push(n), 
                J.test(t.charAt(Tr)) ? (n = t.charAt(Tr), Tr++) : (n = V, 0 === Rr && c(G));
                if (r !== V && (n = f()) !== V && (i = l()) !== V ? (Or = e, e = r = K(r, n, i)) : (Tr = e, 
                e = V), e === V) {
                    for (e = Tr, r = [], t.length > Tr ? (n = t.charAt(Tr), Tr++) : (n = V, 0 === Rr && c(Q)); n !== V; ) r.push(n), 
                    t.length > Tr ? (n = t.charAt(Tr), Tr++) : (n = V, 0 === Rr && c(Q));
                    r !== V && (Or = e, r = W(r)), e = r;
                }
                return Ir[o] = {
                    nextPos: Tr,
                    result: e
                }, e;
            }
            function f() {
                var e, r, n, i, o = 32 * Tr + 1, s = Ir[o];
                return s ? (Tr = s.nextPos, s.result) : (e = Tr, t.substr(Tr, 3) === X ? (r = X, 
                Tr += 3) : (r = V, 0 === Rr && c(Y)), r !== V && _() !== V && (n = d()) !== V && _() !== V ? (t.substr(Tr, 3) === Z ? (i = Z, 
                Tr += 3) : (i = V, 0 === Rr && c(ee)), i !== V ? (Or = e, e = r = te(n)) : (Tr = e, 
                e = V)) : (Tr = e, e = V), e === V && (e = Tr, t.substr(Tr, 2) === re ? (r = re, 
                Tr += 2) : (r = V, 0 === Rr && c(ne)), r !== V && _() !== V && (n = d()) !== V && _() !== V ? (t.substr(Tr, 2) === ie ? (i = ie, 
                Tr += 2) : (i = V, 0 === Rr && c(oe)), i !== V ? (Or = e, e = r = se(n)) : (Tr = e, 
                e = V)) : (Tr = e, e = V)), Ir[o] = {
                    nextPos: Tr,
                    result: e
                }, e);
            }
            function d() {
                var e, r, n, i, o = 32 * Tr + 2, s = Ir[o];
                return s ? (Tr = s.nextPos, s.result) : (e = Tr, r = h(), r !== V && _() !== V ? (61 === t.charCodeAt(Tr) ? (n = ae, 
                Tr++) : (n = V, 0 === Rr && c(ue)), n === V && (t.substr(Tr, 2) === ce ? (n = ce, 
                Tr += 2) : (n = V, 0 === Rr && c(le)), n === V && (t.substr(Tr, 2) === fe ? (n = fe, 
                Tr += 2) : (n = V, 0 === Rr && c(de)), n === V && (t.substr(Tr, 2) === he ? (n = he, 
                Tr += 2) : (n = V, 0 === Rr && c(pe)), n === V && (t.substr(Tr, 2) === ve ? (n = ve, 
                Tr += 2) : (n = V, 0 === Rr && c(me)), n === V && (t.substr(Tr, 2) === ye ? (n = ye, 
                Tr += 2) : (n = V, 0 === Rr && c(be))))))), n !== V && _() !== V && (i = d()) !== V ? (Or = e, 
                e = r = ge(r, n, i)) : (Tr = e, e = V)) : (Tr = e, e = V), e === V && (e = p()), 
                Ir[o] = {
                    nextPos: Tr,
                    result: e
                }, e);
            }
            function h() {
                var e, t = 32 * Tr + 3, r = Ir[t];
                return r ? (Tr = r.nextPos, r.result) : ((e = P()) === V && (e = C()), Ir[t] = {
                    nextPos: Tr,
                    result: e
                }, e);
            }
            function p() {
                var e, r, n, i, o, s, a = 32 * Tr + 4, u = Ir[a];
                return u ? (Tr = u.nextPos, u.result) : (e = Tr, r = v(), r !== V && _() !== V ? (63 === t.charCodeAt(Tr) ? (n = xe, 
                Tr++) : (n = V, 0 === Rr && c(Ae)), n !== V && _() !== V && (i = p()) !== V && _() !== V ? (58 === t.charCodeAt(Tr) ? (o = ke, 
                Tr++) : (o = V, 0 === Rr && c(Pe)), o !== V && _() !== V && (s = p()) !== V ? (Or = e, 
                e = r = Ce(r, i, s)) : (Tr = e, e = V)) : (Tr = e, e = V)) : (Tr = e, e = V), e === V && (e = v()), 
                Ir[a] = {
                    nextPos: Tr,
                    result: e
                }, e);
            }
            function v() {
                var e, r, n, i, o, s, a = 32 * Tr + 5, u = Ir[a];
                if (u) return Tr = u.nextPos, u.result;
                if (e = Tr, (r = m()) !== V) {
                    for (n = [], i = Tr, _() !== V ? (t.substr(Tr, 2) === we ? (o = we, Tr += 2) : (o = V, 
                    0 === Rr && c(Ee)), o !== V && _() !== V && (s = m()) !== V ? (Or = i, i = je(r, s)) : (Tr = i, 
                    i = V)) : (Tr = i, i = V); i !== V; ) n.push(i), i = Tr, _() !== V ? (t.substr(Tr, 2) === we ? (o = we, 
                    Tr += 2) : (o = V, 0 === Rr && c(Ee)), o !== V && _() !== V && (s = m()) !== V ? (Or = i, 
                    i = je(r, s)) : (Tr = i, i = V)) : (Tr = i, i = V);
                    n !== V ? (Or = e, e = r = Ne(r, n)) : (Tr = e, e = V);
                } else Tr = e, e = V;
                return Ir[a] = {
                    nextPos: Tr,
                    result: e
                }, e;
            }
            function m() {
                var e, r, n, i, o, s, a = 32 * Tr + 6, u = Ir[a];
                if (u) return Tr = u.nextPos, u.result;
                if (e = Tr, (r = y()) !== V) {
                    for (n = [], i = Tr, _() !== V ? (t.substr(Tr, 2) === $e ? (o = $e, Tr += 2) : (o = V, 
                    0 === Rr && c(ze)), o !== V && _() !== V && (s = y()) !== V ? (Or = i, i = Le(r, s)) : (Tr = i, 
                    i = V)) : (Tr = i, i = V); i !== V; ) n.push(i), i = Tr, _() !== V ? (t.substr(Tr, 2) === $e ? (o = $e, 
                    Tr += 2) : (o = V, 0 === Rr && c(ze)), o !== V && _() !== V && (s = y()) !== V ? (Or = i, 
                    i = Le(r, s)) : (Tr = i, i = V)) : (Tr = i, i = V);
                    n !== V ? (Or = e, e = r = Ne(r, n)) : (Tr = e, e = V);
                } else Tr = e, e = V;
                return Ir[a] = {
                    nextPos: Tr,
                    result: e
                }, e;
            }
            function y() {
                var e, r, n, i, o, s, a = 32 * Tr + 7, u = Ir[a];
                if (u) return Tr = u.nextPos, u.result;
                if (e = Tr, (r = b()) !== V) {
                    for (n = [], i = Tr, _() !== V ? (t.substr(Tr, 3) === Se ? (o = Se, Tr += 3) : (o = V, 
                    0 === Rr && c(Te)), o === V && (t.substr(Tr, 3) === Oe ? (o = Oe, Tr += 3) : (o = V, 
                    0 === Rr && c(Be)), o === V && (t.substr(Tr, 2) === Fe ? (o = Fe, Tr += 2) : (o = V, 
                    0 === Rr && c(Me)), o === V && (t.substr(Tr, 2) === Re ? (o = Re, Tr += 2) : (o = V, 
                    0 === Rr && c(Ie))))), o !== V && _() !== V && (s = b()) !== V ? (Or = i, i = _e(r, o, s)) : (Tr = i, 
                    i = V)) : (Tr = i, i = V); i !== V; ) n.push(i), i = Tr, _() !== V ? (t.substr(Tr, 3) === Se ? (o = Se, 
                    Tr += 3) : (o = V, 0 === Rr && c(Te)), o === V && (t.substr(Tr, 3) === Oe ? (o = Oe, 
                    Tr += 3) : (o = V, 0 === Rr && c(Be)), o === V && (t.substr(Tr, 2) === Fe ? (o = Fe, 
                    Tr += 2) : (o = V, 0 === Rr && c(Me)), o === V && (t.substr(Tr, 2) === Re ? (o = Re, 
                    Tr += 2) : (o = V, 0 === Rr && c(Ie))))), o !== V && _() !== V && (s = b()) !== V ? (Or = i, 
                    i = _e(r, o, s)) : (Tr = i, i = V)) : (Tr = i, i = V);
                    n !== V ? (Or = e, e = r = qe(r, n)) : (Tr = e, e = V);
                } else Tr = e, e = V;
                return Ir[a] = {
                    nextPos: Tr,
                    result: e
                }, e;
            }
            function b() {
                var e, r, n, i, o, s, a = 32 * Tr + 8, u = Ir[a];
                if (u) return Tr = u.nextPos, u.result;
                if (e = Tr, (r = g()) !== V) {
                    for (n = [], i = Tr, _() !== V ? (t.substr(Tr, 2) === Ue ? (o = Ue, Tr += 2) : (o = V, 
                    0 === Rr && c(Ve)), o === V && (t.substr(Tr, 2) === De ? (o = De, Tr += 2) : (o = V, 
                    0 === Rr && c(He)), o === V && (60 === t.charCodeAt(Tr) ? (o = Je, Tr++) : (o = V, 
                    0 === Rr && c(Ge)), o === V && (62 === t.charCodeAt(Tr) ? (o = Ke, Tr++) : (o = V, 
                    0 === Rr && c(Qe))))), o !== V && _() !== V && (s = g()) !== V ? (Or = i, i = _e(r, o, s)) : (Tr = i, 
                    i = V)) : (Tr = i, i = V); i !== V; ) n.push(i), i = Tr, _() !== V ? (t.substr(Tr, 2) === Ue ? (o = Ue, 
                    Tr += 2) : (o = V, 0 === Rr && c(Ve)), o === V && (t.substr(Tr, 2) === De ? (o = De, 
                    Tr += 2) : (o = V, 0 === Rr && c(He)), o === V && (60 === t.charCodeAt(Tr) ? (o = Je, 
                    Tr++) : (o = V, 0 === Rr && c(Ge)), o === V && (62 === t.charCodeAt(Tr) ? (o = Ke, 
                    Tr++) : (o = V, 0 === Rr && c(Qe))))), o !== V && _() !== V && (s = g()) !== V ? (Or = i, 
                    i = _e(r, o, s)) : (Tr = i, i = V)) : (Tr = i, i = V);
                    n !== V ? (Or = e, e = r = qe(r, n)) : (Tr = e, e = V);
                } else Tr = e, e = V;
                return Ir[a] = {
                    nextPos: Tr,
                    result: e
                }, e;
            }
            function g() {
                var e, r, n, i, o, s, a = 32 * Tr + 9, u = Ir[a];
                if (u) return Tr = u.nextPos, u.result;
                if (e = Tr, (r = x()) !== V) {
                    for (n = [], i = Tr, _() !== V ? (We.test(t.charAt(Tr)) ? (o = t.charAt(Tr), Tr++) : (o = V, 
                    0 === Rr && c(Xe)), o !== V && _() !== V && (s = x()) !== V ? (Or = i, i = _e(r, o, s)) : (Tr = i, 
                    i = V)) : (Tr = i, i = V); i !== V; ) n.push(i), i = Tr, _() !== V ? (We.test(t.charAt(Tr)) ? (o = t.charAt(Tr), 
                    Tr++) : (o = V, 0 === Rr && c(Xe)), o !== V && _() !== V && (s = x()) !== V ? (Or = i, 
                    i = _e(r, o, s)) : (Tr = i, i = V)) : (Tr = i, i = V);
                    n !== V ? (Or = e, e = r = qe(r, n)) : (Tr = e, e = V);
                } else Tr = e, e = V;
                return Ir[a] = {
                    nextPos: Tr,
                    result: e
                }, e;
            }
            function x() {
                var e, r, n, i, o, s, a = 32 * Tr + 10, u = Ir[a];
                if (u) return Tr = u.nextPos, u.result;
                if (e = Tr, (r = A()) !== V) {
                    for (n = [], i = Tr, _() !== V ? (Ye.test(t.charAt(Tr)) ? (o = t.charAt(Tr), Tr++) : (o = V, 
                    0 === Rr && c(Ze)), o !== V && _() !== V && (s = A()) !== V ? (Or = i, i = _e(r, o, s)) : (Tr = i, 
                    i = V)) : (Tr = i, i = V); i !== V; ) n.push(i), i = Tr, _() !== V ? (Ye.test(t.charAt(Tr)) ? (o = t.charAt(Tr), 
                    Tr++) : (o = V, 0 === Rr && c(Ze)), o !== V && _() !== V && (s = A()) !== V ? (Or = i, 
                    i = _e(r, o, s)) : (Tr = i, i = V)) : (Tr = i, i = V);
                    n !== V ? (Or = e, e = r = qe(r, n)) : (Tr = e, e = V);
                } else Tr = e, e = V;
                return Ir[a] = {
                    nextPos: Tr,
                    result: e
                }, e;
            }
            function A() {
                var e, r, n, i = 32 * Tr + 11, o = Ir[i];
                return o ? (Tr = o.nextPos, o.result) : ((e = k()) === V && (e = Tr, t.substr(Tr, 2) === et ? (r = et, 
                Tr += 2) : (r = V, 0 === Rr && c(tt)), r === V && (t.substr(Tr, 2) === rt ? (r = rt, 
                Tr += 2) : (r = V, 0 === Rr && c(nt)), r === V && (it.test(t.charAt(Tr)) ? (r = t.charAt(Tr), 
                Tr++) : (r = V, 0 === Rr && c(ot)))), r !== V && _() !== V && (n = A()) !== V ? (Or = e, 
                e = r = st(r, n)) : (Tr = e, e = V)), Ir[i] = {
                    nextPos: Tr,
                    result: e
                }, e);
            }
            function k() {
                var e, r, n, i = 32 * Tr + 12, o = Ir[i];
                return o ? (Tr = o.nextPos, o.result) : (e = Tr, r = h(), r !== V && _() !== V ? (t.substr(Tr, 2) === et ? (n = et, 
                Tr += 2) : (n = V, 0 === Rr && c(tt)), n === V && (t.substr(Tr, 2) === rt ? (n = rt, 
                Tr += 2) : (n = V, 0 === Rr && c(nt))), n !== V ? (Or = e, e = r = at(r, n)) : (Tr = e, 
                e = V)) : (Tr = e, e = V), e === V && (e = h()), Ir[i] = {
                    nextPos: Tr,
                    result: e
                }, e);
            }
            function P() {
                var e, t, r, n, i = 32 * Tr + 13, o = Ir[i];
                return o ? (Tr = o.nextPos, o.result) : (e = Tr, t = Tr, r = C(), r !== V && _() !== V && (n = j()) !== V ? (Or = t, 
                t = r = ut(r, n)) : (Tr = t, t = V), t !== V && (r = w()) !== V ? (Or = e, e = t = ct(t, r)) : (Tr = e, 
                e = V), Ir[i] = {
                    nextPos: Tr,
                    result: e
                }, e);
            }
            function C() {
                var e, r, n, i, o, s = 32 * Tr + 14, a = Ir[s];
                return a ? (Tr = a.nextPos, a.result) : (e = Tr, (r = E()) === V && (r = N()) === V && (r = O()) === V && (r = $()) === V && (r = L()) === V && (r = Tr, 
                40 === t.charCodeAt(Tr) ? (n = lt, Tr++) : (n = V, 0 === Rr && c(ft)), n !== V && _() !== V && (i = d()) !== V && _() !== V ? (41 === t.charCodeAt(Tr) ? (o = dt, 
                Tr++) : (o = V, 0 === Rr && c(ht)), o !== V ? (Or = r, r = n = pt(i)) : (Tr = r, 
                r = V)) : (Tr = r, r = V)), r !== V && (n = w()) !== V ? (Or = e, e = r = vt(r, n)) : (Tr = e, 
                e = V), Ir[s] = {
                    nextPos: Tr,
                    result: e
                }, e);
            }
            function w() {
                var e, r, n, i, o, s = 32 * Tr + 15, a = Ir[s];
                if (a) return Tr = a.nextPos, a.result;
                for (e = [], r = Tr, _() !== V ? (91 === t.charCodeAt(Tr) ? (n = mt, Tr++) : (n = V, 
                0 === Rr && c(yt)), n !== V && _() !== V && (i = d()) !== V && _() !== V ? (93 === t.charCodeAt(Tr) ? (o = bt, 
                Tr++) : (o = V, 0 === Rr && c(gt)), o !== V ? (Or = r, r = xt(i)) : (Tr = r, r = V)) : (Tr = r, 
                r = V)) : (Tr = r, r = V), r === V && (r = Tr, _() !== V ? (46 === t.charCodeAt(Tr) ? (n = At, 
                Tr++) : (n = V, 0 === Rr && c(kt)), n !== V && _() !== V && (i = N()) !== V ? (Or = r, 
                r = Pt(i)) : (Tr = r, r = V)) : (Tr = r, r = V)); r !== V; ) e.push(r), r = Tr, 
                _() !== V ? (91 === t.charCodeAt(Tr) ? (n = mt, Tr++) : (n = V, 0 === Rr && c(yt)), 
                n !== V && _() !== V && (i = d()) !== V && _() !== V ? (93 === t.charCodeAt(Tr) ? (o = bt, 
                Tr++) : (o = V, 0 === Rr && c(gt)), o !== V ? (Or = r, r = xt(i)) : (Tr = r, r = V)) : (Tr = r, 
                r = V)) : (Tr = r, r = V), r === V && (r = Tr, _() !== V ? (46 === t.charCodeAt(Tr) ? (n = At, 
                Tr++) : (n = V, 0 === Rr && c(kt)), n !== V && _() !== V && (i = N()) !== V ? (Or = r, 
                r = Pt(i)) : (Tr = r, r = V)) : (Tr = r, r = V));
                return Ir[s] = {
                    nextPos: Tr,
                    result: e
                }, e;
            }
            function E() {
                var e, r, n, i, o, s = 32 * Tr + 16, a = Ir[s];
                return a ? (Tr = a.nextPos, a.result) : (e = Tr, t.substr(Tr, 3) === Ct ? (r = Ct, 
                Tr += 3) : (r = V, 0 === Rr && c(wt)), r !== V && q() !== V && (n = C()) !== V ? (i = Tr, 
                _() !== V && (o = j()) !== V ? (Or = i, i = Et(n, o)) : (Tr = i, i = V), i === V && (i = null), 
                i !== V ? (Or = e, e = r = jt(n, i)) : (Tr = e, e = V)) : (Tr = e, e = V), Ir[s] = {
                    nextPos: Tr,
                    result: e
                }, e);
            }
            function j() {
                var e, r, n, i, o, s, a, u, l = 32 * Tr + 17, f = Ir[l];
                if (f) return Tr = f.nextPos, f.result;
                if (e = Tr, 40 === t.charCodeAt(Tr) ? (r = lt, Tr++) : (r = V, 0 === Rr && c(ft)), 
                r !== V && _() !== V ? (41 === t.charCodeAt(Tr) ? (n = dt, Tr++) : (n = V, 0 === Rr && c(ht)), 
                n !== V ? (Or = e, e = r = Nt()) : (Tr = e, e = V)) : (Tr = e, e = V), e === V) if (e = Tr, 
                40 === t.charCodeAt(Tr) ? (r = lt, Tr++) : (r = V, 0 === Rr && c(ft)), r !== V) if (_() !== V) if ((n = d()) !== V) {
                    for (i = [], o = Tr, (s = _()) !== V ? (44 === t.charCodeAt(Tr) ? (a = $t, Tr++) : (a = V, 
                    0 === Rr && c(zt)), a !== V && _() !== V && (u = d()) !== V ? (Or = o, o = s = Lt(n, u)) : (Tr = o, 
                    o = V)) : (Tr = o, o = V); o !== V; ) i.push(o), o = Tr, (s = _()) !== V ? (44 === t.charCodeAt(Tr) ? (a = $t, 
                    Tr++) : (a = V, 0 === Rr && c(zt)), a !== V && _() !== V && (u = d()) !== V ? (Or = o, 
                    o = s = Lt(n, u)) : (Tr = o, o = V)) : (Tr = o, o = V);
                    i !== V && (o = _()) !== V ? (41 === t.charCodeAt(Tr) ? (s = dt, Tr++) : (s = V, 
                    0 === Rr && c(ht)), s !== V ? (Or = e, e = r = St(n, i)) : (Tr = e, e = V)) : (Tr = e, 
                    e = V);
                } else Tr = e, e = V; else Tr = e, e = V; else Tr = e, e = V;
                return Ir[l] = {
                    nextPos: Tr,
                    result: e
                }, e;
            }
            function N() {
                var e, r, n, i, o, s = 32 * Tr + 18, a = Ir[s];
                if (a) return Tr = a.nextPos, a.result;
                if (Rr++, e = Tr, r = Tr, Rr++, n = B(), Rr--, n === V ? r = void 0 : (Tr = r, r = V), 
                r !== V) if (Ot.test(t.charAt(Tr)) ? (n = t.charAt(Tr), Tr++) : (n = V, 0 === Rr && c(Bt)), 
                n !== V) {
                    for (i = [], Ft.test(t.charAt(Tr)) ? (o = t.charAt(Tr), Tr++) : (o = V, 0 === Rr && c(Mt)); o !== V; ) i.push(o), 
                    Ft.test(t.charAt(Tr)) ? (o = t.charAt(Tr), Tr++) : (o = V, 0 === Rr && c(Mt));
                    i !== V ? (Or = e, e = r = Rt(n, i)) : (Tr = e, e = V);
                } else Tr = e, e = V; else Tr = e, e = V;
                return Rr--, e === V && (r = V, 0 === Rr && c(Tt)), Ir[s] = {
                    nextPos: Tr,
                    result: e
                }, e;
            }
            function $() {
                var e, r, n, i, o = 32 * Tr + 19, s = Ir[o];
                return s ? (Tr = s.nextPos, s.result) : (e = Tr, 91 === t.charCodeAt(Tr) ? (r = mt, 
                Tr++) : (r = V, 0 === Rr && c(yt)), r !== V && _() !== V ? (93 === t.charCodeAt(Tr) ? (n = bt, 
                Tr++) : (n = V, 0 === Rr && c(gt)), n !== V ? (Or = e, e = r = It()) : (Tr = e, 
                e = V)) : (Tr = e, e = V), e === V && (e = Tr, 91 === t.charCodeAt(Tr) ? (r = mt, 
                Tr++) : (r = V, 0 === Rr && c(yt)), r !== V && _() !== V && (n = z()) !== V && _() !== V ? (93 === t.charCodeAt(Tr) ? (i = bt, 
                Tr++) : (i = V, 0 === Rr && c(gt)), i !== V ? (Or = e, e = r = _t(n)) : (Tr = e, 
                e = V)) : (Tr = e, e = V)), Ir[o] = {
                    nextPos: Tr,
                    result: e
                }, e);
            }
            function z() {
                var e, r, n, i, o, s, a = 32 * Tr + 20, u = Ir[a];
                if (u) return Tr = u.nextPos, u.result;
                if (e = Tr, (r = d()) !== V) {
                    for (n = [], i = Tr, _() !== V ? (44 === t.charCodeAt(Tr) ? (o = $t, Tr++) : (o = V, 
                    0 === Rr && c(zt)), o !== V && _() !== V && (s = d()) !== V ? (Or = i, i = qt(r, s)) : (Tr = i, 
                    i = V)) : (Tr = i, i = V); i !== V; ) n.push(i), i = Tr, _() !== V ? (44 === t.charCodeAt(Tr) ? (o = $t, 
                    Tr++) : (o = V, 0 === Rr && c(zt)), o !== V && _() !== V && (s = d()) !== V ? (Or = i, 
                    i = qt(r, s)) : (Tr = i, i = V)) : (Tr = i, i = V);
                    n !== V ? (Or = e, e = r = St(r, n)) : (Tr = e, e = V);
                } else Tr = e, e = V;
                return Ir[a] = {
                    nextPos: Tr,
                    result: e
                }, e;
            }
            function L() {
                var e, r, n, i, o, s, a = 32 * Tr + 21, u = Ir[a];
                return u ? (Tr = u.nextPos, u.result) : (e = Tr, 123 === t.charCodeAt(Tr) ? (r = Ut, 
                Tr++) : (r = V, 0 === Rr && c(Vt)), r !== V && _() !== V ? (125 === t.charCodeAt(Tr) ? (n = Dt, 
                Tr++) : (n = V, 0 === Rr && c(Ht)), n !== V ? (Or = e, e = r = Jt()) : (Tr = e, 
                e = V)) : (Tr = e, e = V), e === V && (e = Tr, 123 === t.charCodeAt(Tr) ? (r = Ut, 
                Tr++) : (r = V, 0 === Rr && c(Vt)), r !== V && _() !== V && (n = S()) !== V && _() !== V ? (i = Tr, 
                44 === t.charCodeAt(Tr) ? (o = $t, Tr++) : (o = V, 0 === Rr && c(zt)), o !== V && (s = _()) !== V ? i = o = [ o, s ] : (Tr = i, 
                i = V), i === V && (i = null), i !== V ? (125 === t.charCodeAt(Tr) ? (o = Dt, Tr++) : (o = V, 
                0 === Rr && c(Ht)), o !== V ? (Or = e, e = r = Gt(n)) : (Tr = e, e = V)) : (Tr = e, 
                e = V)) : (Tr = e, e = V)), Ir[a] = {
                    nextPos: Tr,
                    result: e
                }, e);
            }
            function S() {
                var e, r, n, i, o, s, a = 32 * Tr + 22, u = Ir[a];
                if (u) return Tr = u.nextPos, u.result;
                if (e = Tr, (r = T()) !== V) {
                    for (n = [], i = Tr, _() !== V ? (44 === t.charCodeAt(Tr) ? (o = $t, Tr++) : (o = V, 
                    0 === Rr && c(zt)), o !== V && _() !== V && (s = T()) !== V ? (Or = i, i = Kt(r, s)) : (Tr = i, 
                    i = V)) : (Tr = i, i = V); i !== V; ) n.push(i), i = Tr, _() !== V ? (44 === t.charCodeAt(Tr) ? (o = $t, 
                    Tr++) : (o = V, 0 === Rr && c(zt)), o !== V && _() !== V && (s = T()) !== V ? (Or = i, 
                    i = Kt(r, s)) : (Tr = i, i = V)) : (Tr = i, i = V);
                    n !== V ? (Or = e, e = r = St(r, n)) : (Tr = e, e = V);
                } else Tr = e, e = V;
                return Ir[a] = {
                    nextPos: Tr,
                    result: e
                }, e;
            }
            function T() {
                var e, r, n, i, o = 32 * Tr + 23, s = Ir[o];
                return s ? (Tr = s.nextPos, s.result) : (e = Tr, (r = N()) === V && (r = I()) === V && (r = F()), 
                r !== V && _() !== V ? (58 === t.charCodeAt(Tr) ? (n = ke, Tr++) : (n = V, 0 === Rr && c(Pe)), 
                n !== V && _() !== V && (i = d()) !== V ? (Or = e, e = r = Qt(r, i)) : (Tr = e, 
                e = V)) : (Tr = e, e = V), Ir[o] = {
                    nextPos: Tr,
                    result: e
                }, e);
            }
            function O() {
                var e, t = 32 * Tr + 24, r = Ir[t];
                return r ? (Tr = r.nextPos, r.result) : ((e = B()) === V && (e = F()) === V && (e = I()), 
                Ir[t] = {
                    nextPos: Tr,
                    result: e
                }, e);
            }
            function B() {
                var e, r, n = 32 * Tr + 25, i = Ir[n];
                return i ? (Tr = i.nextPos, i.result) : (e = Tr, t.substr(Tr, 4) === Wt ? (r = Wt, 
                Tr += 4) : (r = V, 0 === Rr && c(Xt)), r !== V && (Or = e, r = Yt()), (e = r) === V && (e = Tr, 
                t.substr(Tr, 4) === Zt ? (r = Zt, Tr += 4) : (r = V, 0 === Rr && c(er)), r !== V && (Or = e, 
                r = tr()), (e = r) === V && (e = Tr, t.substr(Tr, 5) === rr ? (r = rr, Tr += 5) : (r = V, 
                0 === Rr && c(nr)), r !== V && (Or = e, r = ir()), e = r)), Ir[n] = {
                    nextPos: Tr,
                    result: e
                }, e);
            }
            function F() {
                var e, r, n, i, o, s = 32 * Tr + 26, a = Ir[s];
                if (a) return Tr = a.nextPos, a.result;
                if (Rr++, e = Tr, (r = M()) !== V) if (46 === t.charCodeAt(Tr) ? (n = At, Tr++) : (n = V, 
                0 === Rr && c(kt)), n !== V) {
                    for (i = [], sr.test(t.charAt(Tr)) ? (o = t.charAt(Tr), Tr++) : (o = V, 0 === Rr && c(ar)); o !== V; ) i.push(o), 
                    sr.test(t.charAt(Tr)) ? (o = t.charAt(Tr), Tr++) : (o = V, 0 === Rr && c(ar));
                    i !== V ? ((o = R()) === V && (o = null), o !== V ? (Or = e, e = r = ur()) : (Tr = e, 
                    e = V)) : (Tr = e, e = V);
                } else Tr = e, e = V; else Tr = e, e = V;
                if (e === V) {
                    if (e = Tr, 46 === t.charCodeAt(Tr) ? (r = At, Tr++) : (r = V, 0 === Rr && c(kt)), 
                    r !== V) {
                        if (n = [], sr.test(t.charAt(Tr)) ? (i = t.charAt(Tr), Tr++) : (i = V, 0 === Rr && c(ar)), 
                        i !== V) for (;i !== V; ) n.push(i), sr.test(t.charAt(Tr)) ? (i = t.charAt(Tr), 
                        Tr++) : (i = V, 0 === Rr && c(ar)); else n = V;
                        n !== V ? ((i = R()) === V && (i = null), i !== V ? (Or = e, e = r = ur()) : (Tr = e, 
                        e = V)) : (Tr = e, e = V);
                    } else Tr = e, e = V;
                    e === V && (e = Tr, (r = M()) !== V ? ((n = R()) === V && (n = null), n !== V ? (Or = e, 
                    e = r = ur()) : (Tr = e, e = V)) : (Tr = e, e = V));
                }
                return Rr--, e === V && (r = V, 0 === Rr && c(or)), Ir[s] = {
                    nextPos: Tr,
                    result: e
                }, e;
            }
            function M() {
                var e, r, n, i, o = 32 * Tr + 27, s = Ir[o];
                if (s) return Tr = s.nextPos, s.result;
                if (48 === t.charCodeAt(Tr) ? (e = cr, Tr++) : (e = V, 0 === Rr && c(lr)), e === V) if (e = Tr, 
                fr.test(t.charAt(Tr)) ? (r = t.charAt(Tr), Tr++) : (r = V, 0 === Rr && c(dr)), r !== V) {
                    for (n = [], sr.test(t.charAt(Tr)) ? (i = t.charAt(Tr), Tr++) : (i = V, 0 === Rr && c(ar)); i !== V; ) n.push(i), 
                    sr.test(t.charAt(Tr)) ? (i = t.charAt(Tr), Tr++) : (i = V, 0 === Rr && c(ar));
                    n !== V ? e = r = [ r, n ] : (Tr = e, e = V);
                } else Tr = e, e = V;
                return Ir[o] = {
                    nextPos: Tr,
                    result: e
                }, e;
            }
            function R() {
                var e, r, n, i, o, s = 32 * Tr + 28, a = Ir[s];
                if (a) return Tr = a.nextPos, a.result;
                if (e = Tr, t.substr(Tr, 1).toLowerCase() === hr ? (r = t.charAt(Tr), Tr++) : (r = V, 
                0 === Rr && c(pr)), r !== V) if (We.test(t.charAt(Tr)) ? (n = t.charAt(Tr), Tr++) : (n = V, 
                0 === Rr && c(Xe)), n === V && (n = null), n !== V) {
                    if (i = [], sr.test(t.charAt(Tr)) ? (o = t.charAt(Tr), Tr++) : (o = V, 0 === Rr && c(ar)), 
                    o !== V) for (;o !== V; ) i.push(o), sr.test(t.charAt(Tr)) ? (o = t.charAt(Tr), 
                    Tr++) : (o = V, 0 === Rr && c(ar)); else i = V;
                    i !== V ? e = r = [ r, n, i ] : (Tr = e, e = V);
                } else Tr = e, e = V; else Tr = e, e = V;
                return Ir[s] = {
                    nextPos: Tr,
                    result: e
                }, e;
            }
            function I() {
                var e, r, n, i, o, s = 32 * Tr + 29, a = Ir[s];
                if (a) return Tr = a.nextPos, a.result;
                if (Rr++, e = Tr, 34 === t.charCodeAt(Tr) ? (r = mr, Tr++) : (r = V, 0 === Rr && c(yr)), 
                r !== V) {
                    for (n = [], i = Tr, t.substr(Tr, 2) === br ? (o = br, Tr += 2) : (o = V, 0 === Rr && c(gr)), 
                    o !== V && (Or = i, o = xr()), (i = o) === V && (Ar.test(t.charAt(Tr)) ? (i = t.charAt(Tr), 
                    Tr++) : (i = V, 0 === Rr && c(kr))); i !== V; ) n.push(i), i = Tr, t.substr(Tr, 2) === br ? (o = br, 
                    Tr += 2) : (o = V, 0 === Rr && c(gr)), o !== V && (Or = i, o = xr()), (i = o) === V && (Ar.test(t.charAt(Tr)) ? (i = t.charAt(Tr), 
                    Tr++) : (i = V, 0 === Rr && c(kr)));
                    n !== V ? (34 === t.charCodeAt(Tr) ? (i = mr, Tr++) : (i = V, 0 === Rr && c(yr)), 
                    i !== V ? (Or = e, e = r = Pr(n)) : (Tr = e, e = V)) : (Tr = e, e = V);
                } else Tr = e, e = V;
                if (e === V) if (e = Tr, 39 === t.charCodeAt(Tr) ? (r = Cr, Tr++) : (r = V, 0 === Rr && c(wr)), 
                r !== V) {
                    for (n = [], i = Tr, t.substr(Tr, 2) === Er ? (o = Er, Tr += 2) : (o = V, 0 === Rr && c(jr)), 
                    o !== V && (Or = i, o = Nr()), (i = o) === V && ($r.test(t.charAt(Tr)) ? (i = t.charAt(Tr), 
                    Tr++) : (i = V, 0 === Rr && c(zr))); i !== V; ) n.push(i), i = Tr, t.substr(Tr, 2) === Er ? (o = Er, 
                    Tr += 2) : (o = V, 0 === Rr && c(jr)), o !== V && (Or = i, o = Nr()), (i = o) === V && ($r.test(t.charAt(Tr)) ? (i = t.charAt(Tr), 
                    Tr++) : (i = V, 0 === Rr && c(zr)));
                    n !== V ? (39 === t.charCodeAt(Tr) ? (i = Cr, Tr++) : (i = V, 0 === Rr && c(wr)), 
                    i !== V ? (Or = e, e = r = Pr(n)) : (Tr = e, e = V)) : (Tr = e, e = V);
                } else Tr = e, e = V;
                return Rr--, e === V && (r = V, 0 === Rr && c(vr)), Ir[s] = {
                    nextPos: Tr,
                    result: e
                }, e;
            }
            function _() {
                var e, t = 32 * Tr + 30, r = Ir[t];
                return r ? (Tr = r.nextPos, r.result) : ((e = q()) === V && (e = null), Ir[t] = {
                    nextPos: Tr,
                    result: e
                }, e);
            }
            function q() {
                var e, r, n = 32 * Tr + 31, i = Ir[n];
                if (i) return Tr = i.nextPos, i.result;
                if (e = [], Lr.test(t.charAt(Tr)) ? (r = t.charAt(Tr), Tr++) : (r = V, 0 === Rr && c(Sr)), 
                r !== V) for (;r !== V; ) e.push(r), Lr.test(t.charAt(Tr)) ? (r = t.charAt(Tr), 
                Tr++) : (r = V, 0 === Rr && c(Sr)); else e = V;
                return Ir[n] = {
                    nextPos: Tr,
                    result: e
                }, e;
            }
            r = void 0 !== r ? r : {};
            var U, V = {}, D = {
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
            }, xe = "?", Ae = i("?", !1), ke = ":", Pe = i(":", !1), Ce = function(e, t, r) {
                return {
                    type: "Conditional",
                    test: e,
                    consequent: t,
                    alternate: r
                };
            }, we = "||", Ee = i("||", !1), je = function(e, t) {
                return {
                    operator: "||",
                    arg: t
                };
            }, Ne = function(e, t) {
                return _r("Logical", e, t);
            }, $e = "&&", ze = i("&&", !1), Le = function(e, t) {
                return {
                    operator: "&&",
                    arg: t
                };
            }, Se = "===", Te = i("===", !1), Oe = "!==", Be = i("!==", !1), Fe = "==", Me = i("==", !1), Re = "!=", Ie = i("!=", !1), _e = function(e, t, r) {
                return {
                    operator: t,
                    arg: r
                };
            }, qe = function(e, t) {
                return _r("Binary", e, t);
            }, Ue = "<=", Ve = i("<=", !1), De = ">=", He = i(">=", !1), Je = "<", Ge = i("<", !1), Ke = ">", Qe = i(">", !1), We = /^[+\-]/, Xe = o([ "+", "-" ], !1, !1), Ye = /^[*\/%]/, Ze = o([ "*", "/", "%" ], !1, !1), et = "++", tt = i("++", !1), rt = "--", nt = i("--", !1), it = /^[+!\-]/, ot = o([ "+", "!", "-" ], !1, !1), st = function(e, t) {
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
            }, At = ".", kt = i(".", !1), Pt = function(e) {
                return {
                    type: "Literal",
                    value: e.name
                };
            }, Ct = "new", wt = i("new", !1), Et = function(e, t) {
                return t;
            }, jt = function(e, t) {
                return {
                    type: "NewExpression",
                    callee: e,
                    arguments: t || []
                };
            }, Nt = function() {
                return [];
            }, $t = ",", zt = i(",", !1), Lt = function(e, t) {
                return t;
            }, St = function(e, t) {
                return [ e ].concat(t);
            }, Tt = s("identifier"), Ot = /^[a-z$_]/i, Bt = o([ [ "a", "z" ], "$", "_" ], !1, !0), Ft = /^[a-z$_0-9]/i, Mt = o([ [ "a", "z" ], "$", "_", [ "0", "9" ] ], !1, !0), Rt = function(e, t) {
                return {
                    type: "Identifier",
                    name: e + t.join("")
                };
            }, It = function() {
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
            }, Ut = "{", Vt = i("{", !1), Dt = "}", Ht = i("}", !1), Jt = function() {
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
            }, Ar = /^[^"]/, kr = o([ '"' ], !0, !1), Pr = function(e) {
                return {
                    type: "Literal",
                    value: e.join("")
                };
            }, Cr = "'", wr = i("'", !1), Er = "\\'", jr = i("\\'", !1), Nr = function() {
                return "'";
            }, $r = /^[^'']/, zr = o([ "'", "'" ], !0, !1), Lr = /^[\t ]/, Sr = o([ "\t", " " ], !1, !1), Tr = 0, Or = 0, Br = [ {
                line: 1,
                column: 1
            } ], Fr = 0, Mr = [], Rr = 0, Ir = {};
            if ("startRule" in r) {
                if (!(r.startRule in D)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
                H = D[r.startRule];
            }
            var _r = function(e, t, r) {
                return 0 === r.length ? t : r.reduce(function(t, r) {
                    return {
                        type: e,
                        operator: r.operator,
                        left: t,
                        right: r.arg
                    };
                }, t);
            };
            if ((U = H()) !== V && Tr === t.length) return U;
            throw U !== V && Tr < t.length && c({
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
    }(), o = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Expression";
        return i.parse(e, {
            startRule: t
        });
    }, s = function t(r, n) {
        var i = void 0, o = void 0, s = r.type, a = r.operator;
        if ("Literal" === s) i = r.value; else if ("Array" === s) i = r.elements.map(function(e) {
            return t(e, n).value;
        }); else if ("Object" === s) i = Object.assign.apply(Object, [ {} ].concat(r.properties.map(function(e) {
            var r;
            return r = {}, r[e.key] = t(e.value, n).value, r;
        }))); else if ("Identifier" === s) {
            for (var u = n; u && void 0 === u[r.name]; ) u = u.$parent;
            u || (u = n), i = u[r.name], o = function(e) {
                return u[r.name] = e;
            };
        } else if ("Member" === s) {
            var c = t(r.object, n).value, l = t(r.property, n).value;
            i = void 0 !== c ? c[l] : void 0, o = function(e) {
                return c[l] = e;
            };
        } else if ("Conditional" === s) i = t(r.test, n).value ? t(r.consequent, n).value : t(r.alternate, n).value; else if ("Unary" === s || "Update" === s) {
            var f = t(r.argument, n), d = f.value;
            i = "!" === a ? !d : "+" === a ? +d : "-" === a ? -d : "++" === a ? d + 1 : "--" === a ? d - 1 : null, 
            "Update" === s && ((o = f.set) && (i = o(i)), r.prefix || (i += "++" === a ? -1 : 1));
        } else if ("Binary" === s || "Logical" === s || "Assignment" === s) {
            var h = t(r.left, n), p = h.value, v = t(r.right, n).value;
            i = "===" === a ? p === v : "!==" === a ? p !== v : "==" === a ? p == v : "!=" === a ? p != v : "<" === a ? p < v : ">" === a ? p > v : "<=" === a ? p <= v : ">=" === a ? p >= v : "&&" === a ? p && v : "||" === a ? p || v : "+" === a ? "string" == typeof (p + v) ? e(p) + e(v) : p + v : "-" === a ? p - v : "*" === a ? p * v : "/" === a ? p / v : "%" === a ? p % v : "*=" === a ? p * v : "/=" === a ? p / v : "%=" === a ? p % v : "+=" === a ? p + v : "-=" === a ? p - v : "=" === a ? v : null, 
            "Assignment" === s && (i = (o = h.set)(i));
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
    }, a = {
        prefix: "z-",
        directives: [],
        inlineParser: void 0
    }, u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, c = (function() {
        function e(e) {
            this.value = e;
        }
        function t(t) {
            function r(e, t) {
                return new Promise(function(r, i) {
                    var a = {
                        key: e,
                        arg: t,
                        resolve: r,
                        reject: i,
                        next: null
                    };
                    s ? s = s.next = a : (o = s = a, n(e, t));
                });
            }
            function n(r, o) {
                try {
                    var s = t[r](o), a = s.value;
                    a instanceof e ? Promise.resolve(a.value).then(function(e) {
                        n("next", e);
                    }, function(e) {
                        n("throw", e);
                    }) : i(s.done ? "return" : "normal", s.value);
                } catch (e) {
                    i("throw", e);
                }
            }
            function i(e, t) {
                switch (e) {
                  case "return":
                    o.resolve({
                        value: t,
                        done: !0
                    });
                    break;

                  case "throw":
                    o.reject(t);
                    break;

                  default:
                    o.resolve({
                        value: t,
                        done: !1
                    });
                }
                (o = o.next) ? n(o.key, o.arg) : s = null;
            }
            var o, s;
            this._invoke = r, "function" != typeof t.return && (this.return = void 0);
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
            var n = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.ast;
                return s(t, e.scope).value;
            }, i = "initialize" === t ? [ e.node ].concat(r.args) : [ e.scope, e.node, n ].concat(r.args);
            r.directive[t].apply(r, i);
        }
    }, h = function(e, t, r) {
        return e instanceof p ? e : ("string" == typeof e ? e = document.querySelector(e) : e.jquery && (e = e[0]), 
        new p(e, t, r));
    }, p = function() {
        function e(t, r) {
            var n = this, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (c(this, e), this.node = t, this.children = [], this.binds = [], this.type = t.nodeType, 
            t.vnode && !r) i ? (this.parent = t.vnode, t.vnode = this, this.type = this.parent.type, 
            this.children = this.parent.children, this.binds = this.parent.binds, this.parent.children = [], 
            this.parent.binds = []) : (t.vnode.parent = this, this.pointer = t.vnode); else if (r) {
                if (t.vnode = this, this.blocked = r.blocked, this.type = r.type, r.binds.forEach(function(e) {
                    n.bind({
                        ast: e.ast,
                        directive: e.directive,
                        args: e.args,
                        key: e.key,
                        template: e.template
                    });
                }), r.tagName && (this.tag = r.tagName), r.attributes && (this.attributes = r.attributes.map(l), 
                this.removedAttrs = r.removedAttrs.map(l)), r.children) {
                    var o = Array.from(t.childNodes).filter(function(e) {
                        return 1 === e.nodeType || 3 === e.nodeType || 11 === e.nodeType;
                    });
                    r.children.forEach(function(e) {
                        n.children.push(h(e.fragment ? t : o.shift(), e));
                    });
                }
            } else t.vnode = this, this.initialize();
        }
        return e.prototype.initialize = function() {
            var e = this, t = this.node;
            if (this.type = t.nodeType, 1 === this.type) this.tag = t.tagName, this.attributes = Array.from(t.attributes).map(l), 
            this.removedAttrs = [], a.directives.forEach(function(r) {
                if (!e.blocked) if (r.tag) {
                    var n = e.tag.match(new RegExp("^" + r.tag.replace("{prefix}", a.prefix) + "$", "i"));
                    n && e.bind({
                        directive: r,
                        args: n
                    });
                } else r.attribute && (e.attributes = e.attributes.filter(function(n) {
                    if (!e.blocked) {
                        var i = n.name.match(new RegExp("^" + r.attribute.replace("{prefix}", a.prefix) + "$", "i"));
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
                return 1 === e.nodeType || 3 === e.nodeType || 11 === e.nodeType;
            }).map(function(t) {
                return e.children.push(h(t));
            }); else if (3 === this.type && t.nodeValue.includes("{{")) {
                var r = o(t.nodeValue, "Text");
                if (1 === r.length) {
                    if ("string" != typeof r[0]) {
                        if (r[0].html) {
                            var n = t;
                            t = this.node = document.createElement("span"), n.parentNode.replaceChild(t, n);
                        } else t.textContent = "";
                        this.bind({
                            directive: a.inlineParser,
                            ast: r[0].expression,
                            args: [ "", r[0].html ? "html" : "text" ]
                        });
                    }
                } else {
                    var i = document.createDocumentFragment();
                    this.fragment = !0, r.forEach(function(t) {
                        var r = "string" == typeof t ? document.createTextNode(t) : t.html ? document.createElement("span") : document.createTextNode(""), n = h(r);
                        "string" != typeof t && n.bind({
                            directive: a.inlineParser,
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
            d(this, "initialize", e);
        }, e.prototype.clone = function() {
            return h(this.node.cloneNode(!0), this);
        }, e.prototype.createBinds = function(e) {
            this.scope = e, f(this, "create", e);
        }, e.prototype.updateBinds = function() {
            f(this, "update"), this.pointer && this.pointer.updateBinds();
        }, e.prototype.destroyBinds = function() {
            var e = this;
            f(this, "destroy"), this.removedAttrs && this.removedAttrs.forEach(function(t) {
                return e.node.setAttribute(t.name, t.value);
            }), delete this.scope, delete this.node.vnode;
        }, e;
    }(), v = function(e) {
        if (e.inline && (a.inlineParser = e), e.template) {
            e.block = !0;
            var t = document.createElement("span");
            t.innerHTML = e.template, e.template = h(t.childNodes[0]);
        }
        e.order || (e.order = 100);
        var r = a.directives.findIndex(function(t) {
            return e.order < t.order;
        });
        return a.directives.splice(-1 === r ? a.directives.length : r, 0, e), e;
    }, m = 0, y = void 0, b = function(e, t) {
        e[t] && e[t].forEach(function(e) {
            return e();
        });
    }, g = function(e, t, r) {
        var n = Reflect.get(e, t, r);
        return e instanceof Array || "function" != typeof n ? n : n.bind(e);
    }, x = function e(t, r) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        if (!n.includes(r)) {
            n = n.concat([ r ]);
            var i = new Proxy(r, {
                get: g,
                set: function(r, i, o, s) {
                    y || ("object" !== (void 0 === o ? "undefined" : u(o)) || null === o || o instanceof Date || (o = e(t, o, n)), 
                    t.$(!0)), y = !0;
                    var a = Reflect.set(r, i, o, s);
                    return y = !1, a;
                },
                deleteProperty: function(e, r) {
                    y || t.$(!0), y = !0;
                    var n = Reflect.deleteProperty(e, r);
                    return y = !1, n;
                }
            });
            return Object.entries(r).filter(function(e) {
                var n = e.k, i = e.o;
                return !("object" !== (void 0 === i ? "undefined" : u(i)) || i instanceof Date || r === t && "$" === n.charAt(0));
            }).forEach(function(e) {
                var t = e.k, r = e.o;
                return i[t] = r;
            }), i;
        }
    }, A = function e(r, i, a) {
        var u = h(r, null, !0), c = {}, l = [], f = void 0, d = Object.assign({
            $id: m++,
            $: function(e) {
                return e ? f || (f = n(function() {
                    return d.$();
                })) : (f && (f = f()), u.updateBinds(d), b(c, "update"), l.forEach(function(e) {
                    var t = s(e.ast, d).value;
                    t !== e.val && (e.val = t, e.cb(t));
                })), d;
            },
            $destroy: function() {
                return u.destroyBinds(d), b(c, "destroy"), d;
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
                return a || u.parent && u.parent.scope || e.root;
            }
        }, i);
        return u.createBinds(d), d.$(!0), x(d, d);
    };
    Object.assign(A, {
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
    }), Object.defineProperty(A, "prefix", {
        get: function() {
            return a.prefix;
        },
        set: function(e) {
            a.prefix = e;
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
            s !== this.value && (this.value = s, k.includes(i) && (s = s ? i : void 0), void 0 === s ? t.removeAttribute(i) : t.setAttribute(i, s));
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
            this.template = h(e.cloneNode(!0));
        },
        create: function(e, t, r, n) {
            this.marker = document.createComment(n), t.parentNode.replaceChild(this.marker, t);
        },
        update: function(e, t, r) {
            var n = !!r();
            n !== this.value && (n ? (this.vnode = this.template.clone(), this.marker.parentNode.insertBefore(this.vnode.node, this.marker), 
            this.view = A(this.vnode, void 0, e).$()) : this.view && (this.view.$destroy(), 
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
            var i = this, s = t.tagName.toLowerCase(), u = (t.getAttribute("type") || "").toLowerCase();
            this.type = "checkbox" === u ? "checkbox" : "select" === s ? "select" : "radio" === u ? "radio" : [ "range", "number" ].includes(u) ? "number" : [ "date", "datetime-local", "time", "month", "week" ].includes(u) ? "date" : "text", 
            "radio" !== this.type || t.getAttribute("name") || t.setAttribute("name", r(e.$id + JSON.stringify(this.ast))), 
            this.getValue = function(e) {
                var t = e.getAttribute(a.prefix + "value");
                return t ? n(o(t)) : e.getAttribute("value");
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
            var n = e.getAttribute(a.prefix + "key");
            if (n) {
                var i = o(n);
                e.removeAttribute(a.prefix + "key"), this.key = function(e) {
                    var t;
                    return s(i, (t = {}, t[r] = e, t)).value;
                };
            } else this.key = function(e) {
                return JSON.stringify(e);
            };
            this.template = h(e.cloneNode(!0));
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
                    }, s.marker.parentNode.insertBefore(n.node, s.marker), n.view = A(a, (i = {}, i[o] = n.datum, 
                    i), e);
                }
                n.view.$index = r.index, n.view.$(), s.items.push(n);
            });
        }
    }, {
        attribute: "{prefix}(?:on-(.+)|(" + [ "load", "error", "focus", "blur", "click", "dblclick", "mouse.*", "keyup", "keydown", "keypress", "input", "change", "submit", "reset", "scroll", "resize", "drag.*", "drop" ].join("|") + "))",
        create: function(e, t, r, n, i, o) {
            this.handler = function(t) {
                e.$event = t, r(), e.$(), delete e.$event, "submit" === (t || o) && t.preventDefault();
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
    } ].forEach(v), A;
});
