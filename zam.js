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
        var e;
        return (e = console).log.apply(e, arguments);
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
                var r, n = Or[e];
                if (n) return n;
                for (r = e - 1; !Or[r]; ) r--;
                for (n = {
                    line: (n = Or[r]).line,
                    column: n.column
                }; r < e; ) 10 === t.charCodeAt(r) ? (n.line++, n.column = 1) : n.column++, r++;
                return Or[e] = n, n;
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
                Sr < Fr || (Sr > Fr && (Fr = Sr, Br = []), Br.push(e));
            }
            function l() {
                var e, r, n, i, o = 32 * Sr + 0, a = Rr[o];
                if (a) return Sr = a.nextPos, a.result;
                for (e = Sr, r = [], J.test(t.charAt(Sr)) ? (n = t.charAt(Sr), Sr++) : (n = q, 0 === Mr && c(G)); n !== q; ) r.push(n), 
                J.test(t.charAt(Sr)) ? (n = t.charAt(Sr), Sr++) : (n = q, 0 === Mr && c(G));
                if (r !== q && (n = f()) !== q && (i = l()) !== q ? (Tr = e, e = r = X(r, n, i)) : (Sr = e, 
                e = q), e === q) {
                    for (e = Sr, r = [], t.length > Sr ? (n = t.charAt(Sr), Sr++) : (n = q, 0 === Mr && c(K)); n !== q; ) r.push(n), 
                    t.length > Sr ? (n = t.charAt(Sr), Sr++) : (n = q, 0 === Mr && c(K));
                    r !== q && (Tr = e, r = Q(r)), e = r;
                }
                return Rr[o] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function f() {
                var e, r, n, i, o = 32 * Sr + 1, a = Rr[o];
                return a ? (Sr = a.nextPos, a.result) : (e = Sr, t.substr(Sr, 3) === W ? (r = W, 
                Sr += 3) : (r = q, 0 === Mr && c(Y)), r !== q && D() !== q && (n = d()) !== q && D() !== q ? (t.substr(Sr, 3) === Z ? (i = Z, 
                Sr += 3) : (i = q, 0 === Mr && c(ee)), i !== q ? (Tr = e, e = r = te(n)) : (Sr = e, 
                e = q)) : (Sr = e, e = q), e === q && (e = Sr, t.substr(Sr, 2) === re ? (r = re, 
                Sr += 2) : (r = q, 0 === Mr && c(ne)), r !== q && D() !== q && (n = d()) !== q && D() !== q ? (t.substr(Sr, 2) === ie ? (i = ie, 
                Sr += 2) : (i = q, 0 === Mr && c(oe)), i !== q ? (Tr = e, e = r = ae(n)) : (Sr = e, 
                e = q)) : (Sr = e, e = q)), Rr[o] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function d() {
                var e, r, n, i, o = 32 * Sr + 2, a = Rr[o];
                return a ? (Sr = a.nextPos, a.result) : (e = Sr, r = h(), r !== q && D() !== q ? (61 === t.charCodeAt(Sr) ? (n = se, 
                Sr++) : (n = q, 0 === Mr && c(ue)), n === q && (t.substr(Sr, 2) === ce ? (n = ce, 
                Sr += 2) : (n = q, 0 === Mr && c(le)), n === q && (t.substr(Sr, 2) === fe ? (n = fe, 
                Sr += 2) : (n = q, 0 === Mr && c(de)), n === q && (t.substr(Sr, 2) === he ? (n = he, 
                Sr += 2) : (n = q, 0 === Mr && c(pe)), n === q && (t.substr(Sr, 2) === ve ? (n = ve, 
                Sr += 2) : (n = q, 0 === Mr && c(me)), n === q && (t.substr(Sr, 2) === be ? (n = be, 
                Sr += 2) : (n = q, 0 === Mr && c(ge))))))), n !== q && D() !== q && (i = d()) !== q ? (Tr = e, 
                e = r = ye(r, n, i)) : (Sr = e, e = q)) : (Sr = e, e = q), e === q && (e = p()), 
                Rr[o] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function h() {
                var e, t = 32 * Sr + 3, r = Rr[t];
                return r ? (Sr = r.nextPos, r.result) : ((e = P()) === q && (e = k()), Rr[t] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function p() {
                var e, r, n, i, o, a, s = 32 * Sr + 4, u = Rr[s];
                return u ? (Sr = u.nextPos, u.result) : (e = Sr, r = v(), r !== q && D() !== q ? (63 === t.charCodeAt(Sr) ? (n = xe, 
                Sr++) : (n = q, 0 === Mr && c(Ae)), n !== q && D() !== q && (i = p()) !== q && D() !== q ? (58 === t.charCodeAt(Sr) ? (o = Ce, 
                Sr++) : (o = q, 0 === Mr && c(Pe)), o !== q && D() !== q && (a = p()) !== q ? (Tr = e, 
                e = r = ke(r, i, a)) : (Sr = e, e = q)) : (Sr = e, e = q)) : (Sr = e, e = q), e === q && (e = v()), 
                Rr[s] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function v() {
                var e, r, n, i, o, a, s = 32 * Sr + 5, u = Rr[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = m()) !== q) {
                    for (n = [], i = Sr, D() !== q ? (t.substr(Sr, 2) === we ? (o = we, Sr += 2) : (o = q, 
                    0 === Mr && c(Ee)), o !== q && D() !== q && (a = m()) !== q ? (Tr = i, i = $e(r, a)) : (Sr = i, 
                    i = q)) : (Sr = i, i = q); i !== q; ) n.push(i), i = Sr, D() !== q ? (t.substr(Sr, 2) === we ? (o = we, 
                    Sr += 2) : (o = q, 0 === Mr && c(Ee)), o !== q && D() !== q && (a = m()) !== q ? (Tr = i, 
                    i = $e(r, a)) : (Sr = i, i = q)) : (Sr = i, i = q);
                    n !== q ? (Tr = e, e = r = je(r, n)) : (Sr = e, e = q);
                } else Sr = e, e = q;
                return Rr[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function m() {
                var e, r, n, i, o, a, s = 32 * Sr + 6, u = Rr[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = b()) !== q) {
                    for (n = [], i = Sr, D() !== q ? (t.substr(Sr, 2) === Ne ? (o = Ne, Sr += 2) : (o = q, 
                    0 === Mr && c(ze)), o !== q && D() !== q && (a = b()) !== q ? (Tr = i, i = Le(r, a)) : (Sr = i, 
                    i = q)) : (Sr = i, i = q); i !== q; ) n.push(i), i = Sr, D() !== q ? (t.substr(Sr, 2) === Ne ? (o = Ne, 
                    Sr += 2) : (o = q, 0 === Mr && c(ze)), o !== q && D() !== q && (a = b()) !== q ? (Tr = i, 
                    i = Le(r, a)) : (Sr = i, i = q)) : (Sr = i, i = q);
                    n !== q ? (Tr = e, e = r = je(r, n)) : (Sr = e, e = q);
                } else Sr = e, e = q;
                return Rr[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function b() {
                var e, r, n, i, o, a, s = 32 * Sr + 7, u = Rr[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = g()) !== q) {
                    for (n = [], i = Sr, D() !== q ? (t.substr(Sr, 3) === Ve ? (o = Ve, Sr += 3) : (o = q, 
                    0 === Mr && c(Se)), o === q && (t.substr(Sr, 3) === Te ? (o = Te, Sr += 3) : (o = q, 
                    0 === Mr && c(Oe)), o === q && (t.substr(Sr, 2) === Fe ? (o = Fe, Sr += 2) : (o = q, 
                    0 === Mr && c(Be)), o === q && (t.substr(Sr, 2) === Me ? (o = Me, Sr += 2) : (o = q, 
                    0 === Mr && c(Re))))), o !== q && D() !== q && (a = g()) !== q ? (Tr = i, i = De(r, o, a)) : (Sr = i, 
                    i = q)) : (Sr = i, i = q); i !== q; ) n.push(i), i = Sr, D() !== q ? (t.substr(Sr, 3) === Ve ? (o = Ve, 
                    Sr += 3) : (o = q, 0 === Mr && c(Se)), o === q && (t.substr(Sr, 3) === Te ? (o = Te, 
                    Sr += 3) : (o = q, 0 === Mr && c(Oe)), o === q && (t.substr(Sr, 2) === Fe ? (o = Fe, 
                    Sr += 2) : (o = q, 0 === Mr && c(Be)), o === q && (t.substr(Sr, 2) === Me ? (o = Me, 
                    Sr += 2) : (o = q, 0 === Mr && c(Re))))), o !== q && D() !== q && (a = g()) !== q ? (Tr = i, 
                    i = De(r, o, a)) : (Sr = i, i = q)) : (Sr = i, i = q);
                    n !== q ? (Tr = e, e = r = Ie(r, n)) : (Sr = e, e = q);
                } else Sr = e, e = q;
                return Rr[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function g() {
                var e, r, n, i, o, a, s = 32 * Sr + 8, u = Rr[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = y()) !== q) {
                    for (n = [], i = Sr, D() !== q ? (t.substr(Sr, 2) === Ue ? (o = Ue, Sr += 2) : (o = q, 
                    0 === Mr && c(qe)), o === q && (t.substr(Sr, 2) === _e ? (o = _e, Sr += 2) : (o = q, 
                    0 === Mr && c(He)), o === q && (60 === t.charCodeAt(Sr) ? (o = Je, Sr++) : (o = q, 
                    0 === Mr && c(Ge)), o === q && (62 === t.charCodeAt(Sr) ? (o = Xe, Sr++) : (o = q, 
                    0 === Mr && c(Ke))))), o !== q && D() !== q && (a = y()) !== q ? (Tr = i, i = De(r, o, a)) : (Sr = i, 
                    i = q)) : (Sr = i, i = q); i !== q; ) n.push(i), i = Sr, D() !== q ? (t.substr(Sr, 2) === Ue ? (o = Ue, 
                    Sr += 2) : (o = q, 0 === Mr && c(qe)), o === q && (t.substr(Sr, 2) === _e ? (o = _e, 
                    Sr += 2) : (o = q, 0 === Mr && c(He)), o === q && (60 === t.charCodeAt(Sr) ? (o = Je, 
                    Sr++) : (o = q, 0 === Mr && c(Ge)), o === q && (62 === t.charCodeAt(Sr) ? (o = Xe, 
                    Sr++) : (o = q, 0 === Mr && c(Ke))))), o !== q && D() !== q && (a = y()) !== q ? (Tr = i, 
                    i = De(r, o, a)) : (Sr = i, i = q)) : (Sr = i, i = q);
                    n !== q ? (Tr = e, e = r = Ie(r, n)) : (Sr = e, e = q);
                } else Sr = e, e = q;
                return Rr[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function y() {
                var e, r, n, i, o, a, s = 32 * Sr + 9, u = Rr[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = x()) !== q) {
                    for (n = [], i = Sr, D() !== q ? (Qe.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = q, 
                    0 === Mr && c(We)), o !== q && D() !== q && (a = x()) !== q ? (Tr = i, i = De(r, o, a)) : (Sr = i, 
                    i = q)) : (Sr = i, i = q); i !== q; ) n.push(i), i = Sr, D() !== q ? (Qe.test(t.charAt(Sr)) ? (o = t.charAt(Sr), 
                    Sr++) : (o = q, 0 === Mr && c(We)), o !== q && D() !== q && (a = x()) !== q ? (Tr = i, 
                    i = De(r, o, a)) : (Sr = i, i = q)) : (Sr = i, i = q);
                    n !== q ? (Tr = e, e = r = Ie(r, n)) : (Sr = e, e = q);
                } else Sr = e, e = q;
                return Rr[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function x() {
                var e, r, n, i, o, a, s = 32 * Sr + 10, u = Rr[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = A()) !== q) {
                    for (n = [], i = Sr, D() !== q ? (Ye.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = q, 
                    0 === Mr && c(Ze)), o !== q && D() !== q && (a = A()) !== q ? (Tr = i, i = De(r, o, a)) : (Sr = i, 
                    i = q)) : (Sr = i, i = q); i !== q; ) n.push(i), i = Sr, D() !== q ? (Ye.test(t.charAt(Sr)) ? (o = t.charAt(Sr), 
                    Sr++) : (o = q, 0 === Mr && c(Ze)), o !== q && D() !== q && (a = A()) !== q ? (Tr = i, 
                    i = De(r, o, a)) : (Sr = i, i = q)) : (Sr = i, i = q);
                    n !== q ? (Tr = e, e = r = Ie(r, n)) : (Sr = e, e = q);
                } else Sr = e, e = q;
                return Rr[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function A() {
                var e, r, n, i = 32 * Sr + 11, o = Rr[i];
                return o ? (Sr = o.nextPos, o.result) : ((e = C()) === q && (e = Sr, t.substr(Sr, 2) === et ? (r = et, 
                Sr += 2) : (r = q, 0 === Mr && c(tt)), r === q && (t.substr(Sr, 2) === rt ? (r = rt, 
                Sr += 2) : (r = q, 0 === Mr && c(nt)), r === q && (it.test(t.charAt(Sr)) ? (r = t.charAt(Sr), 
                Sr++) : (r = q, 0 === Mr && c(ot)))), r !== q && D() !== q && (n = A()) !== q ? (Tr = e, 
                e = r = at(r, n)) : (Sr = e, e = q)), Rr[i] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function C() {
                var e, r, n, i = 32 * Sr + 12, o = Rr[i];
                return o ? (Sr = o.nextPos, o.result) : (e = Sr, r = h(), r !== q && D() !== q ? (t.substr(Sr, 2) === et ? (n = et, 
                Sr += 2) : (n = q, 0 === Mr && c(tt)), n === q && (t.substr(Sr, 2) === rt ? (n = rt, 
                Sr += 2) : (n = q, 0 === Mr && c(nt))), n !== q ? (Tr = e, e = r = st(r, n)) : (Sr = e, 
                e = q)) : (Sr = e, e = q), e === q && (e = h()), Rr[i] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function P() {
                var e, t, r, n, i = 32 * Sr + 13, o = Rr[i];
                return o ? (Sr = o.nextPos, o.result) : (e = Sr, t = Sr, r = k(), r !== q && D() !== q && (n = $()) !== q ? (Tr = t, 
                t = r = ut(r, n)) : (Sr = t, t = q), t !== q && (r = w()) !== q ? (Tr = e, e = t = ct(t, r)) : (Sr = e, 
                e = q), Rr[i] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function k() {
                var e, r, n, i, o, a = 32 * Sr + 14, s = Rr[a];
                return s ? (Sr = s.nextPos, s.result) : (e = Sr, (r = E()) === q && (r = j()) === q && (r = T()) === q && (r = N()) === q && (r = L()) === q && (r = Sr, 
                40 === t.charCodeAt(Sr) ? (n = lt, Sr++) : (n = q, 0 === Mr && c(ft)), n !== q && D() !== q && (i = d()) !== q && D() !== q ? (41 === t.charCodeAt(Sr) ? (o = dt, 
                Sr++) : (o = q, 0 === Mr && c(ht)), o !== q ? (Tr = r, r = n = pt(i)) : (Sr = r, 
                r = q)) : (Sr = r, r = q)), r !== q && (n = w()) !== q ? (Tr = e, e = r = vt(r, n)) : (Sr = e, 
                e = q), Rr[a] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function w() {
                var e, r, n, i, o, a = 32 * Sr + 15, s = Rr[a];
                if (s) return Sr = s.nextPos, s.result;
                for (e = [], r = Sr, D() !== q ? (91 === t.charCodeAt(Sr) ? (n = mt, Sr++) : (n = q, 
                0 === Mr && c(bt)), n !== q && D() !== q && (i = d()) !== q && D() !== q ? (93 === t.charCodeAt(Sr) ? (o = gt, 
                Sr++) : (o = q, 0 === Mr && c(yt)), o !== q ? (Tr = r, r = xt(i)) : (Sr = r, r = q)) : (Sr = r, 
                r = q)) : (Sr = r, r = q), r === q && (r = Sr, D() !== q ? (46 === t.charCodeAt(Sr) ? (n = At, 
                Sr++) : (n = q, 0 === Mr && c(Ct)), n !== q && D() !== q && (i = j()) !== q ? (Tr = r, 
                r = Pt(i)) : (Sr = r, r = q)) : (Sr = r, r = q)); r !== q; ) e.push(r), r = Sr, 
                D() !== q ? (91 === t.charCodeAt(Sr) ? (n = mt, Sr++) : (n = q, 0 === Mr && c(bt)), 
                n !== q && D() !== q && (i = d()) !== q && D() !== q ? (93 === t.charCodeAt(Sr) ? (o = gt, 
                Sr++) : (o = q, 0 === Mr && c(yt)), o !== q ? (Tr = r, r = xt(i)) : (Sr = r, r = q)) : (Sr = r, 
                r = q)) : (Sr = r, r = q), r === q && (r = Sr, D() !== q ? (46 === t.charCodeAt(Sr) ? (n = At, 
                Sr++) : (n = q, 0 === Mr && c(Ct)), n !== q && D() !== q && (i = j()) !== q ? (Tr = r, 
                r = Pt(i)) : (Sr = r, r = q)) : (Sr = r, r = q));
                return Rr[a] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function E() {
                var e, r, n, i, o, a = 32 * Sr + 16, s = Rr[a];
                return s ? (Sr = s.nextPos, s.result) : (e = Sr, t.substr(Sr, 3) === kt ? (r = kt, 
                Sr += 3) : (r = q, 0 === Mr && c(wt)), r !== q && I() !== q && (n = k()) !== q ? (i = Sr, 
                D() !== q && (o = $()) !== q ? (Tr = i, i = Et(n, o)) : (Sr = i, i = q), i === q && (i = null), 
                i !== q ? (Tr = e, e = r = $t(n, i)) : (Sr = e, e = q)) : (Sr = e, e = q), Rr[a] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function $() {
                var e, r, n, i, o, a, s, u, l = 32 * Sr + 17, f = Rr[l];
                if (f) return Sr = f.nextPos, f.result;
                if (e = Sr, 40 === t.charCodeAt(Sr) ? (r = lt, Sr++) : (r = q, 0 === Mr && c(ft)), 
                r !== q && D() !== q ? (41 === t.charCodeAt(Sr) ? (n = dt, Sr++) : (n = q, 0 === Mr && c(ht)), 
                n !== q ? (Tr = e, e = r = jt()) : (Sr = e, e = q)) : (Sr = e, e = q), e === q) if (e = Sr, 
                40 === t.charCodeAt(Sr) ? (r = lt, Sr++) : (r = q, 0 === Mr && c(ft)), r !== q) if (D() !== q) if ((n = d()) !== q) {
                    for (i = [], o = Sr, (a = D()) !== q ? (44 === t.charCodeAt(Sr) ? (s = Nt, Sr++) : (s = q, 
                    0 === Mr && c(zt)), s !== q && D() !== q && (u = d()) !== q ? (Tr = o, o = a = Lt(n, u)) : (Sr = o, 
                    o = q)) : (Sr = o, o = q); o !== q; ) i.push(o), o = Sr, (a = D()) !== q ? (44 === t.charCodeAt(Sr) ? (s = Nt, 
                    Sr++) : (s = q, 0 === Mr && c(zt)), s !== q && D() !== q && (u = d()) !== q ? (Tr = o, 
                    o = a = Lt(n, u)) : (Sr = o, o = q)) : (Sr = o, o = q);
                    i !== q && (o = D()) !== q ? (41 === t.charCodeAt(Sr) ? (a = dt, Sr++) : (a = q, 
                    0 === Mr && c(ht)), a !== q ? (Tr = e, e = r = Vt(n, i)) : (Sr = e, e = q)) : (Sr = e, 
                    e = q);
                } else Sr = e, e = q; else Sr = e, e = q; else Sr = e, e = q;
                return Rr[l] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function j() {
                var e, r, n, i, o, a = 32 * Sr + 18, s = Rr[a];
                if (s) return Sr = s.nextPos, s.result;
                if (Mr++, e = Sr, r = Sr, Mr++, n = O(), Mr--, n === q ? r = void 0 : (Sr = r, r = q), 
                r !== q) if (Tt.test(t.charAt(Sr)) ? (n = t.charAt(Sr), Sr++) : (n = q, 0 === Mr && c(Ot)), 
                n !== q) {
                    for (i = [], Ft.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = q, 0 === Mr && c(Bt)); o !== q; ) i.push(o), 
                    Ft.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = q, 0 === Mr && c(Bt));
                    i !== q ? (Tr = e, e = r = Mt(n, i)) : (Sr = e, e = q);
                } else Sr = e, e = q; else Sr = e, e = q;
                return Mr--, e === q && (r = q, 0 === Mr && c(St)), Rr[a] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function N() {
                var e, r, n, i, o = 32 * Sr + 19, a = Rr[o];
                return a ? (Sr = a.nextPos, a.result) : (e = Sr, 91 === t.charCodeAt(Sr) ? (r = mt, 
                Sr++) : (r = q, 0 === Mr && c(bt)), r !== q && D() !== q ? (93 === t.charCodeAt(Sr) ? (n = gt, 
                Sr++) : (n = q, 0 === Mr && c(yt)), n !== q ? (Tr = e, e = r = Rt()) : (Sr = e, 
                e = q)) : (Sr = e, e = q), e === q && (e = Sr, 91 === t.charCodeAt(Sr) ? (r = mt, 
                Sr++) : (r = q, 0 === Mr && c(bt)), r !== q && D() !== q && (n = z()) !== q && D() !== q ? (93 === t.charCodeAt(Sr) ? (i = gt, 
                Sr++) : (i = q, 0 === Mr && c(yt)), i !== q ? (Tr = e, e = r = Dt(n)) : (Sr = e, 
                e = q)) : (Sr = e, e = q)), Rr[o] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function z() {
                var e, r, n, i, o, a, s = 32 * Sr + 20, u = Rr[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = d()) !== q) {
                    for (n = [], i = Sr, D() !== q ? (44 === t.charCodeAt(Sr) ? (o = Nt, Sr++) : (o = q, 
                    0 === Mr && c(zt)), o !== q && D() !== q && (a = d()) !== q ? (Tr = i, i = It(r, a)) : (Sr = i, 
                    i = q)) : (Sr = i, i = q); i !== q; ) n.push(i), i = Sr, D() !== q ? (44 === t.charCodeAt(Sr) ? (o = Nt, 
                    Sr++) : (o = q, 0 === Mr && c(zt)), o !== q && D() !== q && (a = d()) !== q ? (Tr = i, 
                    i = It(r, a)) : (Sr = i, i = q)) : (Sr = i, i = q);
                    n !== q ? (Tr = e, e = r = Vt(r, n)) : (Sr = e, e = q);
                } else Sr = e, e = q;
                return Rr[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function L() {
                var e, r, n, i, o, a, s = 32 * Sr + 21, u = Rr[s];
                return u ? (Sr = u.nextPos, u.result) : (e = Sr, 123 === t.charCodeAt(Sr) ? (r = Ut, 
                Sr++) : (r = q, 0 === Mr && c(qt)), r !== q && D() !== q ? (125 === t.charCodeAt(Sr) ? (n = _t, 
                Sr++) : (n = q, 0 === Mr && c(Ht)), n !== q ? (Tr = e, e = r = Jt()) : (Sr = e, 
                e = q)) : (Sr = e, e = q), e === q && (e = Sr, 123 === t.charCodeAt(Sr) ? (r = Ut, 
                Sr++) : (r = q, 0 === Mr && c(qt)), r !== q && D() !== q && (n = V()) !== q && D() !== q ? (i = Sr, 
                44 === t.charCodeAt(Sr) ? (o = Nt, Sr++) : (o = q, 0 === Mr && c(zt)), o !== q && (a = D()) !== q ? i = o = [ o, a ] : (Sr = i, 
                i = q), i === q && (i = null), i !== q ? (125 === t.charCodeAt(Sr) ? (o = _t, Sr++) : (o = q, 
                0 === Mr && c(Ht)), o !== q ? (Tr = e, e = r = Gt(n)) : (Sr = e, e = q)) : (Sr = e, 
                e = q)) : (Sr = e, e = q)), Rr[s] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function V() {
                var e, r, n, i, o, a, s = 32 * Sr + 22, u = Rr[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = S()) !== q) {
                    for (n = [], i = Sr, D() !== q ? (44 === t.charCodeAt(Sr) ? (o = Nt, Sr++) : (o = q, 
                    0 === Mr && c(zt)), o !== q && D() !== q && (a = S()) !== q ? (Tr = i, i = Xt(r, a)) : (Sr = i, 
                    i = q)) : (Sr = i, i = q); i !== q; ) n.push(i), i = Sr, D() !== q ? (44 === t.charCodeAt(Sr) ? (o = Nt, 
                    Sr++) : (o = q, 0 === Mr && c(zt)), o !== q && D() !== q && (a = S()) !== q ? (Tr = i, 
                    i = Xt(r, a)) : (Sr = i, i = q)) : (Sr = i, i = q);
                    n !== q ? (Tr = e, e = r = Vt(r, n)) : (Sr = e, e = q);
                } else Sr = e, e = q;
                return Rr[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function S() {
                var e, r, n, i, o = 32 * Sr + 23, a = Rr[o];
                return a ? (Sr = a.nextPos, a.result) : (e = Sr, (r = j()) === q && (r = R()) === q && (r = F()), 
                r !== q && D() !== q ? (58 === t.charCodeAt(Sr) ? (n = Ce, Sr++) : (n = q, 0 === Mr && c(Pe)), 
                n !== q && D() !== q && (i = d()) !== q ? (Tr = e, e = r = Kt(r, i)) : (Sr = e, 
                e = q)) : (Sr = e, e = q), Rr[o] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function T() {
                var e, t = 32 * Sr + 24, r = Rr[t];
                return r ? (Sr = r.nextPos, r.result) : ((e = O()) === q && (e = F()) === q && (e = R()), 
                Rr[t] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function O() {
                var e, r, n = 32 * Sr + 25, i = Rr[n];
                return i ? (Sr = i.nextPos, i.result) : (e = Sr, t.substr(Sr, 4) === Qt ? (r = Qt, 
                Sr += 4) : (r = q, 0 === Mr && c(Wt)), r !== q && (Tr = e, r = Yt()), (e = r) === q && (e = Sr, 
                t.substr(Sr, 4) === Zt ? (r = Zt, Sr += 4) : (r = q, 0 === Mr && c(er)), r !== q && (Tr = e, 
                r = tr()), (e = r) === q && (e = Sr, t.substr(Sr, 5) === rr ? (r = rr, Sr += 5) : (r = q, 
                0 === Mr && c(nr)), r !== q && (Tr = e, r = ir()), e = r)), Rr[n] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function F() {
                var e, r, n, i, o, a = 32 * Sr + 26, s = Rr[a];
                if (s) return Sr = s.nextPos, s.result;
                if (Mr++, e = Sr, (r = B()) !== q) if (46 === t.charCodeAt(Sr) ? (n = At, Sr++) : (n = q, 
                0 === Mr && c(Ct)), n !== q) {
                    for (i = [], ar.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = q, 0 === Mr && c(sr)); o !== q; ) i.push(o), 
                    ar.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = q, 0 === Mr && c(sr));
                    i !== q ? ((o = M()) === q && (o = null), o !== q ? (Tr = e, e = r = ur()) : (Sr = e, 
                    e = q)) : (Sr = e, e = q);
                } else Sr = e, e = q; else Sr = e, e = q;
                if (e === q) {
                    if (e = Sr, 46 === t.charCodeAt(Sr) ? (r = At, Sr++) : (r = q, 0 === Mr && c(Ct)), 
                    r !== q) {
                        if (n = [], ar.test(t.charAt(Sr)) ? (i = t.charAt(Sr), Sr++) : (i = q, 0 === Mr && c(sr)), 
                        i !== q) for (;i !== q; ) n.push(i), ar.test(t.charAt(Sr)) ? (i = t.charAt(Sr), 
                        Sr++) : (i = q, 0 === Mr && c(sr)); else n = q;
                        n !== q ? ((i = M()) === q && (i = null), i !== q ? (Tr = e, e = r = ur()) : (Sr = e, 
                        e = q)) : (Sr = e, e = q);
                    } else Sr = e, e = q;
                    e === q && (e = Sr, (r = B()) !== q ? ((n = M()) === q && (n = null), n !== q ? (Tr = e, 
                    e = r = ur()) : (Sr = e, e = q)) : (Sr = e, e = q));
                }
                return Mr--, e === q && (r = q, 0 === Mr && c(or)), Rr[a] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function B() {
                var e, r, n, i, o = 32 * Sr + 27, a = Rr[o];
                if (a) return Sr = a.nextPos, a.result;
                if (48 === t.charCodeAt(Sr) ? (e = cr, Sr++) : (e = q, 0 === Mr && c(lr)), e === q) if (e = Sr, 
                fr.test(t.charAt(Sr)) ? (r = t.charAt(Sr), Sr++) : (r = q, 0 === Mr && c(dr)), r !== q) {
                    for (n = [], ar.test(t.charAt(Sr)) ? (i = t.charAt(Sr), Sr++) : (i = q, 0 === Mr && c(sr)); i !== q; ) n.push(i), 
                    ar.test(t.charAt(Sr)) ? (i = t.charAt(Sr), Sr++) : (i = q, 0 === Mr && c(sr));
                    n !== q ? e = r = [ r, n ] : (Sr = e, e = q);
                } else Sr = e, e = q;
                return Rr[o] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function M() {
                var e, r, n, i, o, a = 32 * Sr + 28, s = Rr[a];
                if (s) return Sr = s.nextPos, s.result;
                if (e = Sr, t.substr(Sr, 1).toLowerCase() === hr ? (r = t.charAt(Sr), Sr++) : (r = q, 
                0 === Mr && c(pr)), r !== q) if (Qe.test(t.charAt(Sr)) ? (n = t.charAt(Sr), Sr++) : (n = q, 
                0 === Mr && c(We)), n === q && (n = null), n !== q) {
                    if (i = [], ar.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = q, 0 === Mr && c(sr)), 
                    o !== q) for (;o !== q; ) i.push(o), ar.test(t.charAt(Sr)) ? (o = t.charAt(Sr), 
                    Sr++) : (o = q, 0 === Mr && c(sr)); else i = q;
                    i !== q ? e = r = [ r, n, i ] : (Sr = e, e = q);
                } else Sr = e, e = q; else Sr = e, e = q;
                return Rr[a] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function R() {
                var e, r, n, i, o, a = 32 * Sr + 29, s = Rr[a];
                if (s) return Sr = s.nextPos, s.result;
                if (Mr++, e = Sr, 34 === t.charCodeAt(Sr) ? (r = mr, Sr++) : (r = q, 0 === Mr && c(br)), 
                r !== q) {
                    for (n = [], i = Sr, t.substr(Sr, 2) === gr ? (o = gr, Sr += 2) : (o = q, 0 === Mr && c(yr)), 
                    o !== q && (Tr = i, o = xr()), (i = o) === q && (Ar.test(t.charAt(Sr)) ? (i = t.charAt(Sr), 
                    Sr++) : (i = q, 0 === Mr && c(Cr))); i !== q; ) n.push(i), i = Sr, t.substr(Sr, 2) === gr ? (o = gr, 
                    Sr += 2) : (o = q, 0 === Mr && c(yr)), o !== q && (Tr = i, o = xr()), (i = o) === q && (Ar.test(t.charAt(Sr)) ? (i = t.charAt(Sr), 
                    Sr++) : (i = q, 0 === Mr && c(Cr)));
                    n !== q ? (34 === t.charCodeAt(Sr) ? (i = mr, Sr++) : (i = q, 0 === Mr && c(br)), 
                    i !== q ? (Tr = e, e = r = Pr(n)) : (Sr = e, e = q)) : (Sr = e, e = q);
                } else Sr = e, e = q;
                if (e === q) if (e = Sr, 39 === t.charCodeAt(Sr) ? (r = kr, Sr++) : (r = q, 0 === Mr && c(wr)), 
                r !== q) {
                    for (n = [], i = Sr, t.substr(Sr, 2) === Er ? (o = Er, Sr += 2) : (o = q, 0 === Mr && c($r)), 
                    o !== q && (Tr = i, o = jr()), (i = o) === q && (Nr.test(t.charAt(Sr)) ? (i = t.charAt(Sr), 
                    Sr++) : (i = q, 0 === Mr && c(zr))); i !== q; ) n.push(i), i = Sr, t.substr(Sr, 2) === Er ? (o = Er, 
                    Sr += 2) : (o = q, 0 === Mr && c($r)), o !== q && (Tr = i, o = jr()), (i = o) === q && (Nr.test(t.charAt(Sr)) ? (i = t.charAt(Sr), 
                    Sr++) : (i = q, 0 === Mr && c(zr)));
                    n !== q ? (39 === t.charCodeAt(Sr) ? (i = kr, Sr++) : (i = q, 0 === Mr && c(wr)), 
                    i !== q ? (Tr = e, e = r = Pr(n)) : (Sr = e, e = q)) : (Sr = e, e = q);
                } else Sr = e, e = q;
                return Mr--, e === q && (r = q, 0 === Mr && c(vr)), Rr[a] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function D() {
                var e, t = 32 * Sr + 30, r = Rr[t];
                return r ? (Sr = r.nextPos, r.result) : ((e = I()) === q && (e = null), Rr[t] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function I() {
                var e, r, n = 32 * Sr + 31, i = Rr[n];
                if (i) return Sr = i.nextPos, i.result;
                if (e = [], Lr.test(t.charAt(Sr)) ? (r = t.charAt(Sr), Sr++) : (r = q, 0 === Mr && c(Vr)), 
                r !== q) for (;r !== q; ) e.push(r), Lr.test(t.charAt(Sr)) ? (r = t.charAt(Sr), 
                Sr++) : (r = q, 0 === Mr && c(Vr)); else e = q;
                return Rr[n] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            r = void 0 !== r ? r : {};
            var U, q = {}, _ = {
                Text: l,
                Expression: d
            }, H = l, J = /^[^{]/, G = o([ "{" ], !0, !1), X = function(e, t, r) {
                return (e.length > 0 ? [ e.join("") ] : []).concat([ t ], r);
            }, K = {
                type: "any"
            }, Q = function(e) {
                return e.length > 0 ? [ e.join("") ] : [];
            }, W = "{{{", Y = i("{{{", !1), Z = "}}}", ee = i("}}}", !1), te = function(e) {
                return {
                    html: !0,
                    expression: e
                };
            }, re = "{{", ne = i("{{", !1), ie = "}}", oe = i("}}", !1), ae = function(e) {
                return {
                    html: !1,
                    expression: e
                };
            }, se = "=", ue = i("=", !1), ce = "*=", le = i("*=", !1), fe = "/=", de = i("/=", !1), he = "%=", pe = i("%=", !1), ve = "+=", me = i("+=", !1), be = "-=", ge = i("-=", !1), ye = function(e, t, r) {
                return {
                    type: "Assignment",
                    operator: t,
                    left: e,
                    right: r
                };
            }, xe = "?", Ae = i("?", !1), Ce = ":", Pe = i(":", !1), ke = function(e, t, r) {
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
            }, je = function(e, t) {
                return Dr("Logical", e, t);
            }, Ne = "&&", ze = i("&&", !1), Le = function(e, t) {
                return {
                    operator: "&&",
                    arg: t
                };
            }, Ve = "===", Se = i("===", !1), Te = "!==", Oe = i("!==", !1), Fe = "==", Be = i("==", !1), Me = "!=", Re = i("!=", !1), De = function(e, t, r) {
                return {
                    operator: t,
                    arg: r
                };
            }, Ie = function(e, t) {
                return Dr("Binary", e, t);
            }, Ue = "<=", qe = i("<=", !1), _e = ">=", He = i(">=", !1), Je = "<", Ge = i("<", !1), Xe = ">", Ke = i(">", !1), Qe = /^[+\-]/, We = o([ "+", "-" ], !1, !1), Ye = /^[*\/%]/, Ze = o([ "*", "/", "%" ], !1, !1), et = "++", tt = i("++", !1), rt = "--", nt = i("--", !1), it = /^[+!\-]/, ot = o([ "+", "!", "-" ], !1, !1), at = function(e, t) {
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
            }, mt = "[", bt = i("[", !1), gt = "]", yt = i("]", !1), xt = function(e) {
                return e;
            }, At = ".", Ct = i(".", !1), Pt = function(e) {
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
            }, jt = function() {
                return [];
            }, Nt = ",", zt = i(",", !1), Lt = function(e, t) {
                return t;
            }, Vt = function(e, t) {
                return [ e ].concat(t);
            }, St = a("identifier"), Tt = /^[a-z$_]/i, Ot = o([ [ "a", "z" ], "$", "_" ], !1, !0), Ft = /^[a-z$_0-9]/i, Bt = o([ [ "a", "z" ], "$", "_", [ "0", "9" ] ], !1, !0), Mt = function(e, t) {
                return {
                    type: "Identifier",
                    name: e + t.join("")
                };
            }, Rt = function() {
                return {
                    type: "Array",
                    elements: []
                };
            }, Dt = function(e) {
                return {
                    type: "Array",
                    elements: e
                };
            }, It = function(e, t) {
                return t;
            }, Ut = "{", qt = i("{", !1), _t = "}", Ht = i("}", !1), Jt = function() {
                return {
                    type: "Object",
                    properties: []
                };
            }, Gt = function(e) {
                return {
                    type: "Object",
                    properties: e
                };
            }, Xt = function(e, t) {
                return t;
            }, Kt = function(e, t) {
                return {
                    type: "Property",
                    key: e.name || e.value,
                    value: t
                };
            }, Qt = "null", Wt = i("null", !1), Yt = function() {
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
            }, cr = "0", lr = i("0", !1), fr = /^[1-9]/, dr = o([ [ "1", "9" ] ], !1, !1), hr = "e", pr = i("e", !0), vr = a("string"), mr = '"', br = i('"', !1), gr = '\\"', yr = i('\\"', !1), xr = function() {
                return '"';
            }, Ar = /^[^"]/, Cr = o([ '"' ], !0, !1), Pr = function(e) {
                return {
                    type: "Literal",
                    value: e.join("")
                };
            }, kr = "'", wr = i("'", !1), Er = "\\'", $r = i("\\'", !1), jr = function() {
                return "'";
            }, Nr = /^[^'']/, zr = o([ "'", "'" ], !0, !1), Lr = /^[\t ]/, Vr = o([ "\t", " " ], !1, !1), Sr = 0, Tr = 0, Or = [ {
                line: 1,
                column: 1
            } ], Fr = 0, Br = [], Mr = 0, Rr = {};
            if ("startRule" in r) {
                if (!(r.startRule in _)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
                H = _[r.startRule];
            }
            var Dr = function(e, t, r) {
                return 0 === r.length ? t : r.reduce(function(t, r) {
                    return {
                        type: e,
                        operator: r.operator,
                        left: t,
                        right: r.arg
                    };
                }, t);
            };
            if ((U = H()) !== q && Sr === t.length) return U;
            throw U !== q && Sr < t.length && c({
                type: "end"
            }), function(t, r, n) {
                return new e(e.buildMessage(t, r), t, r, n);
            }(Br, Fr < t.length ? t.charAt(Fr) : null, Fr < t.length ? u(Fr, Fr + 1) : u(Fr, Fr));
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
            var m = r.callee.object ? t(r.callee.object, n).value : n, b = t(r.callee, n).value, g = r.arguments.map(function(e) {
                return t(e, n).value;
            });
            i = b ? "Call" === a ? b.apply(m, g) : new (b.bind.apply(b, g))() : void 0;
        }
        return {
            value: i,
            set: o
        };
    }, u = [], c = void 0, l = function(e) {
        return e.inline && (c = e), e.template && (e.block = !0, e.order = .5), e.order || (e.order = 100), 
        u.push(e), u.sort(function(e, t) {
            return e.order - t.order;
        }), e;
    }, f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, d = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }, h = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    }(), p = function(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e;
    }, v = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
            return r;
        }
        return Array.from(e);
    }, m = function() {
        function e(t, r) {
            var n = this, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (d(this, e), Object.assign(this, r), this.node = t, this.type = t.nodeType, this.id = Math.floor(1e3 + 9e3 * Math.random()).toString(16), 
            this.children = [], this.binds = [], t.vnode && !r) i ? (this.parent = t.vnode, 
            t.vnode = this, this.children = this.parent.children, this.binds = this.parent.binds, 
            this.parent.children = [], this.parent.binds = []) : (t.vnode.parent = this, this.pointer = t.vnode); else if (r) {
                if (t.vnode = this, r.binds.map(function(e) {
                    return n.binds.push(Object.assign({}, e));
                }), r.children) {
                    var o = Array.from(t.childNodes).filter(function(e) {
                        return 1 === e.nodeType || 3 === e.nodeType;
                    });
                    r.children.forEach(function(e) {
                        n.children.push(e.fragment ? g(t, e) : g(o.shift(), e));
                    });
                }
            } else t.vnode = this, this.initialize();
        }
        return h(e, [ {
            key: "initialize",
            value: function() {
                var e = this, t = this.node;
                if (1 === this.type) this.tag = t.tagName, this.attributes = Array.from(t.attributes).map(function(e) {
                    return {
                        name: e.name,
                        value: e.value
                    };
                }), this.removedAttrs = [], u.forEach(function(r) {
                    if (!e.blocked) if (r.tag) {
                        var n = e.tag.match(new RegExp("^" + r.tag.replace("{prefix}", "z-") + "$", "i"));
                        n && e.bind({
                            directive: r,
                            args: n
                        });
                    } else r.attribute && (e.attributes = e.attributes.filter(function(n) {
                        if (!e.blocked) {
                            var i = n.name.match(new RegExp("^" + r.attribute.replace("{prefix}", "z-") + "$", "i"));
                            if (!i) return !0;
                            var o = a(n.value || "undefined");
                            e.removedAttrs.push(n), t.removeAttribute(n.name), e.bind({
                                directive: r,
                                ast: o,
                                args: i
                            });
                        }
                    }));
                }), !this.blocked && t.childNodes && Array.from(t.childNodes).filter(function(e) {
                    return 1 === e.nodeType || 3 === e.nodeType;
                }).map(function(t) {
                    return e.children.push(g(t));
                }); else if (3 === this.type) {
                    var r = a(t.nodeValue, "Text");
                    if (1 === r.length) {
                        if ("string" != typeof r[0]) {
                            if (r[0].html) {
                                var n = this.node;
                                t = this.node = document.createElement("span"), n.parentNode.replaceChild(this.node, n);
                            } else this.node.textContent = "";
                            this.bind({
                                directive: c,
                                ast: r[0].expression,
                                args: [ "", r[0].html ? "html" : "text" ]
                            });
                        }
                    } else if (r.length > 1) {
                        var i = document.createDocumentFragment();
                        this.fragment = !0, r.forEach(function(t) {
                            var r = "string" == typeof t ? document.createTextNode(t) : t.html ? document.createElement("span") : document.createTextNode(""), n = g(r);
                            "string" != typeof t && n.bind({
                                directive: c,
                                ast: t.expression,
                                args: [ "", t.html ? "html" : "text" ]
                            }), i.appendChild(r), e.children.push(n);
                        }), t.parentNode.replaceChild(i, t);
                    }
                }
            }
        }, {
            key: "bind",
            value: function(e) {
                if (this.binds.push(e), e.directive.block && (this.blocked = !0), e.directive.template) {
                    var t = document.createElement("span");
                    t.innerHTML = e.directive.template, t = t.childNodes[0], Array.from(this.attributes).forEach(function(e) {
                        return t.setAttribute(e.name, e.value);
                    }), this.node.parentNode.replaceChild(t, this.node), this.node = t, this.tag = t.tagName;
                }
                b(e, "initialize", void 0, this);
            }
        }, {
            key: "clone",
            value: function() {
                var e = this.node.cloneNode(!0);
                return delete e.vnode, g(e, this);
            }
        }, {
            key: "createBinds",
            value: function(e) {
                var t = this;
                this.scope = e, this.binds.forEach(function(r) {
                    return b(r, "create", e, t);
                }), this.children.forEach(function(t) {
                    return t.createBinds(e);
                });
            }
        }, {
            key: "updateBinds",
            value: function(e) {
                var t = this;
                this.scope = e, this.binds.forEach(function(r) {
                    return b(r, "update", e, t);
                }), this.children.forEach(function(t) {
                    return t.updateBinds(e);
                });
            }
        }, {
            key: "destroyBinds",
            value: function(e) {
                var t = this;
                this.scope = e, this.binds.forEach(function(r) {
                    b(r, "destroy", e, t), t.removedAttrs && t.removedAttrs.forEach(function(e) {
                        return t.node.setAttribute(e.name, e.value);
                    });
                }), delete this.scope, delete this.node.vnode;
            }
        }, {
            key: "print",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                i(e + this.toString()), this.children && this.children.forEach(function(t) {
                    return t.print(e + " ");
                });
            }
        }, {
            key: "toString",
            value: function() {
                return this.pointer ? "[" + this.id + "] POINTER --\x3e " + this.pointer.toString() : 1 === this.type ? "[" + this.id + "] <" + [ this.tag ].concat((this.removedAttrs || []).map(function(e) {
                    return e.name;
                })).join(" ") + ">" : this.fragment ? "[" + this.id + "] FRAGMENT" : "[" + this.id + "] TEXT " + (this.node.nodeValue || "undef").trim() + (this.binds.length > 0 ? " BIND" : "");
            }
        } ]), e;
    }(), b = function(e, t, r, n) {
        if (e.directive[t]) {
            var i = function(t) {
                return s(t || e.ast, r).value;
            };
            if ("initialize" === t) {
                var o;
                (o = e.directive[t]).call.apply(o, [ e, n.node ].concat(v(e.args)));
            } else {
                var a;
                (a = e.directive[t]).call.apply(a, [ e, r, n.node, i ].concat(v(e.args)));
            }
        }
    }, g = function(e, t, r) {
        return e instanceof m ? e : ("string" == typeof e ? e = document.querySelector(e) : e[0] && (e = e[0]), 
        new m(e, t, r));
    }, y = 0, x = function e(r, i, o) {
        var u = g(r, null, !0), c = {}, l = [], d = void 0, h = function() {
            d || (d = n(v.$));
        }, p = void 0, v = Object.assign({
            $id: y++,
            $: function() {
                p || (d && (d = d()), u.updateBinds(v), v.$emit("update"));
            },
            $destroy: function() {
                u.destroyBinds(v), p = !0, v.$emit("destroy");
            },
            $on: function(e, t) {
                c[e] || (c[e] = []), c[e].push(t);
            },
            $off: function(e, r) {
                c[e] && t(c[e], r);
            },
            $emit: function(e) {
                c[e] && c[e].forEach(function(e) {
                    return e();
                });
            },
            $watch: function(e, t) {
                l.push({
                    expr: e,
                    syntax: a(e),
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
                return o || u.parent && u.parent.scope || e.root;
            }
        }, i);
        v.$on("update", function() {
            !function e(t) {
                t.forEach(function(t) {
                    t.pointer ? t.pointer.scope && t.pointer.scope !== v && t.pointer.scope.$() : e(t.children);
                });
            }(u.children), l.forEach(function(e) {
                var t = s(e.syntax, v).value;
                t !== e.val && (e.val = t, e.cb(t));
            });
        }), u.createBinds(v);
        return h(), function e(t) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            if (!(r.indexOf(t) > -1)) {
                r = r.concat([ t ]);
                var n = new Proxy(t, {
                    get: function(e, t, r) {
                        var n = Reflect.get(e, t, r);
                        return e instanceof Array || "function" != typeof n ? n : n.bind(e);
                    },
                    set: function(t, n, i, o) {
                        t === v && "$" === n.charAt(0) ? console.warn("Properties beginning with $ are reserved for zam") : A || ("object" !== (void 0 === i ? "undefined" : f(i)) || i instanceof Date || (i = e(i, r)), 
                        h()), A = !0;
                        var a = Reflect.set(t, n, i, o);
                        return A = !1, a;
                    }
                });
                return t instanceof Array ? t.forEach(function(e, t) {
                    "object" !== (void 0 === e ? "undefined" : f(e)) || e instanceof Date || (n[t] = e);
                }) : Object.keys(t).forEach(function(e) {
                    var r = t[e];
                    "object" !== (void 0 === r ? "undefined" : f(r)) || r instanceof Date || t === v && "$" === e.charAt(0) || (n[e] = r);
                }), n;
            }
        }(v);
    }, A = void 0;
    Object.assign(x, {
        version: "0.2.1",
        parse: a,
        evaluate: s,
        prefix: "z-",
        directive: l,
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
    });
    var C = [ "selected", "checked", "disabled", "readonly", "multiple", "ismap", "defer", "noresize" ];
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
            a !== this.prevValue && (this.prevValue = a, C.indexOf(i) > -1 && (a = a ? i : void 0), 
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
            this.template = g(e.cloneNode(!0));
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
            this.view = x(this.vnode, void 0, e)) : this.view && (this.marker.parentNode.removeChild(this.vnode.node), 
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
        create: function(e, t, n) {
            var i = this, o = t.tagName.toLowerCase(), s = (t.getAttribute("type") || "").toLowerCase();
            this.type = "checkbox" === s ? "checkbox" : "select" === o ? "select" : "radio" === s ? "radio" : [ "range", "number" ].indexOf(s) > -1 ? "number" : [ "date", "datetime-local", "time", "month", "week" ].indexOf(s) > -1 ? "date" : "text", 
            "radio" !== this.type || t.getAttribute("name") || t.setAttribute("name", r(e.$id + JSON.stringify(this.ast))), 
            this.getValue = function(e) {
                var t = e.getAttribute("z-value");
                return t ? n(a(t)) : e.getAttribute("value");
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
        initialize: function(e) {
            this.items = [], this.key = function(e) {
                return JSON.stringify(e);
            }, this.vnode = g(e.cloneNode(!0));
        },
        create: function(e, t, r, n) {
            var i = this;
            this.marker = document.createComment(n), t.parentNode.replaceChild(this.marker, t), 
            e.$on("update", function() {
                return i.items.forEach(function(e) {
                    return e.view.$();
                });
            });
        },
        update: function(e, r, n, i, o) {
            var a = this, s = n() || [], u = void 0;
            this.items.forEach(function(e) {
                if (!s.find(function(t) {
                    return a.key(t) === a.key(e.data);
                })) {
                    try {
                        a.marker.parentNode.removeChild(e.vnode.node);
                    } catch (e) {}
                    e.view.$destroy(), t(a.items, e);
                }
            }), s.forEach(function(e) {
                if (!a.items.find(function(t) {
                    return a.key(t.data) === a.key(e);
                })) {
                    var t = a.vnode.clone();
                    a.items.push({
                        vnode: t,
                        data: e
                    }), u || (u = document.createDocumentFragment()), u.appendChild(t.node);
                }
            }), u && this.marker.parentNode.insertBefore(u, this.marker), this.items.forEach(function(t) {
                t.view || (t.view = x(t.vnode, p({}, o, t.data), e));
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
    } ].forEach(l), x;
});
