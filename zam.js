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
                return t.substring(Or, Sr);
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
                Sr < Br || (Sr > Br && (Br = Sr, Fr = []), Fr.push(e));
            }
            function l() {
                var e, r, n, i, o = 32 * Sr + 0, a = Rr[o];
                if (a) return Sr = a.nextPos, a.result;
                for (e = Sr, r = [], J.test(t.charAt(Sr)) ? (n = t.charAt(Sr), Sr++) : (n = D, 0 === Mr && c(Y)); n !== D; ) r.push(n), 
                J.test(t.charAt(Sr)) ? (n = t.charAt(Sr), Sr++) : (n = D, 0 === Mr && c(Y));
                if (r !== D && (n = f()) !== D && (i = l()) !== D ? (Or = e, e = r = G(r, n, i)) : (Sr = e, 
                e = D), e === D) {
                    for (e = Sr, r = [], t.length > Sr ? (n = t.charAt(Sr), Sr++) : (n = D, 0 === Mr && c(K)); n !== D; ) r.push(n), 
                    t.length > Sr ? (n = t.charAt(Sr), Sr++) : (n = D, 0 === Mr && c(K));
                    r !== D && (Or = e, r = Q(r)), e = r;
                }
                return Rr[o] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function f() {
                var e, r, n, i, o = 32 * Sr + 1, a = Rr[o];
                return a ? (Sr = a.nextPos, a.result) : (e = Sr, t.substr(Sr, 3) === W ? (r = W, 
                Sr += 3) : (r = D, 0 === Mr && c(X)), r !== D && H() !== D && (n = d()) !== D && H() !== D ? (t.substr(Sr, 3) === Z ? (i = Z, 
                Sr += 3) : (i = D, 0 === Mr && c(ee)), i !== D ? (Or = e, e = r = te(n)) : (Sr = e, 
                e = D)) : (Sr = e, e = D), e === D && (e = Sr, t.substr(Sr, 2) === re ? (r = re, 
                Sr += 2) : (r = D, 0 === Mr && c(ne)), r !== D && H() !== D && (n = d()) !== D && H() !== D ? (t.substr(Sr, 2) === ie ? (i = ie, 
                Sr += 2) : (i = D, 0 === Mr && c(oe)), i !== D ? (Or = e, e = r = ae(n)) : (Sr = e, 
                e = D)) : (Sr = e, e = D)), Rr[o] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function d() {
                var e, r, n, i, o = 32 * Sr + 2, a = Rr[o];
                return a ? (Sr = a.nextPos, a.result) : (e = Sr, r = h(), r !== D && H() !== D ? (61 === t.charCodeAt(Sr) ? (n = se, 
                Sr++) : (n = D, 0 === Mr && c(ue)), n === D && (t.substr(Sr, 2) === ce ? (n = ce, 
                Sr += 2) : (n = D, 0 === Mr && c(le)), n === D && (t.substr(Sr, 2) === fe ? (n = fe, 
                Sr += 2) : (n = D, 0 === Mr && c(de)), n === D && (t.substr(Sr, 2) === he ? (n = he, 
                Sr += 2) : (n = D, 0 === Mr && c(pe)), n === D && (t.substr(Sr, 2) === ve ? (n = ve, 
                Sr += 2) : (n = D, 0 === Mr && c(me)), n === D && (t.substr(Sr, 2) === be ? (n = be, 
                Sr += 2) : (n = D, 0 === Mr && c(ge))))))), n !== D && H() !== D && (i = d()) !== D ? (Or = e, 
                e = r = ye(r, n, i)) : (Sr = e, e = D)) : (Sr = e, e = D), e === D && (e = p()), 
                Rr[o] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function h() {
                var e, t = 32 * Sr + 3, r = Rr[t];
                return r ? (Sr = r.nextPos, r.result) : ((e = C()) === D && (e = k()), Rr[t] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function p() {
                var e, r, n, i, o, a, s = 32 * Sr + 4, u = Rr[s];
                return u ? (Sr = u.nextPos, u.result) : (e = Sr, r = v(), r !== D && H() !== D ? (63 === t.charCodeAt(Sr) ? (n = xe, 
                Sr++) : (n = D, 0 === Mr && c(Ae)), n !== D && H() !== D && (i = p()) !== D && H() !== D ? (58 === t.charCodeAt(Sr) ? (o = Pe, 
                Sr++) : (o = D, 0 === Mr && c(Ce)), o !== D && H() !== D && (a = p()) !== D ? (Or = e, 
                e = r = ke(r, i, a)) : (Sr = e, e = D)) : (Sr = e, e = D)) : (Sr = e, e = D), e === D && (e = v()), 
                Rr[s] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function v() {
                var e, r, n, i, o, a, s = 32 * Sr + 5, u = Rr[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = m()) !== D) {
                    for (n = [], i = Sr, H() !== D ? (t.substr(Sr, 2) === we ? (o = we, Sr += 2) : (o = D, 
                    0 === Mr && c(Ee)), o !== D && H() !== D && (a = m()) !== D ? (Or = i, i = $e(r, a)) : (Sr = i, 
                    i = D)) : (Sr = i, i = D); i !== D; ) n.push(i), i = Sr, H() !== D ? (t.substr(Sr, 2) === we ? (o = we, 
                    Sr += 2) : (o = D, 0 === Mr && c(Ee)), o !== D && H() !== D && (a = m()) !== D ? (Or = i, 
                    i = $e(r, a)) : (Sr = i, i = D)) : (Sr = i, i = D);
                    n !== D ? (Or = e, e = r = Ne(r, n)) : (Sr = e, e = D);
                } else Sr = e, e = D;
                return Rr[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function m() {
                var e, r, n, i, o, a, s = 32 * Sr + 6, u = Rr[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = b()) !== D) {
                    for (n = [], i = Sr, H() !== D ? (t.substr(Sr, 2) === je ? (o = je, Sr += 2) : (o = D, 
                    0 === Mr && c(Le)), o !== D && H() !== D && (a = b()) !== D ? (Or = i, i = ze(r, a)) : (Sr = i, 
                    i = D)) : (Sr = i, i = D); i !== D; ) n.push(i), i = Sr, H() !== D ? (t.substr(Sr, 2) === je ? (o = je, 
                    Sr += 2) : (o = D, 0 === Mr && c(Le)), o !== D && H() !== D && (a = b()) !== D ? (Or = i, 
                    i = ze(r, a)) : (Sr = i, i = D)) : (Sr = i, i = D);
                    n !== D ? (Or = e, e = r = Ne(r, n)) : (Sr = e, e = D);
                } else Sr = e, e = D;
                return Rr[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function b() {
                var e, r, n, i, o, a, s = 32 * Sr + 7, u = Rr[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = g()) !== D) {
                    for (n = [], i = Sr, H() !== D ? (t.substr(Sr, 3) === Ve ? (o = Ve, Sr += 3) : (o = D, 
                    0 === Mr && c(Se)), o === D && (t.substr(Sr, 3) === Oe ? (o = Oe, Sr += 3) : (o = D, 
                    0 === Mr && c(Te)), o === D && (t.substr(Sr, 2) === Be ? (o = Be, Sr += 2) : (o = D, 
                    0 === Mr && c(Fe)), o === D && (t.substr(Sr, 2) === Me ? (o = Me, Sr += 2) : (o = D, 
                    0 === Mr && c(Re))))), o !== D && H() !== D && (a = g()) !== D ? (Or = i, i = He(r, o, a)) : (Sr = i, 
                    i = D)) : (Sr = i, i = D); i !== D; ) n.push(i), i = Sr, H() !== D ? (t.substr(Sr, 3) === Ve ? (o = Ve, 
                    Sr += 3) : (o = D, 0 === Mr && c(Se)), o === D && (t.substr(Sr, 3) === Oe ? (o = Oe, 
                    Sr += 3) : (o = D, 0 === Mr && c(Te)), o === D && (t.substr(Sr, 2) === Be ? (o = Be, 
                    Sr += 2) : (o = D, 0 === Mr && c(Fe)), o === D && (t.substr(Sr, 2) === Me ? (o = Me, 
                    Sr += 2) : (o = D, 0 === Mr && c(Re))))), o !== D && H() !== D && (a = g()) !== D ? (Or = i, 
                    i = He(r, o, a)) : (Sr = i, i = D)) : (Sr = i, i = D);
                    n !== D ? (Or = e, e = r = Ue(r, n)) : (Sr = e, e = D);
                } else Sr = e, e = D;
                return Rr[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function g() {
                var e, r, n, i, o, a, s = 32 * Sr + 8, u = Rr[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = y()) !== D) {
                    for (n = [], i = Sr, H() !== D ? (t.substr(Sr, 2) === qe ? (o = qe, Sr += 2) : (o = D, 
                    0 === Mr && c(De)), o === D && (t.substr(Sr, 2) === Ie ? (o = Ie, Sr += 2) : (o = D, 
                    0 === Mr && c(_e)), o === D && (60 === t.charCodeAt(Sr) ? (o = Je, Sr++) : (o = D, 
                    0 === Mr && c(Ye)), o === D && (62 === t.charCodeAt(Sr) ? (o = Ge, Sr++) : (o = D, 
                    0 === Mr && c(Ke))))), o !== D && H() !== D && (a = y()) !== D ? (Or = i, i = He(r, o, a)) : (Sr = i, 
                    i = D)) : (Sr = i, i = D); i !== D; ) n.push(i), i = Sr, H() !== D ? (t.substr(Sr, 2) === qe ? (o = qe, 
                    Sr += 2) : (o = D, 0 === Mr && c(De)), o === D && (t.substr(Sr, 2) === Ie ? (o = Ie, 
                    Sr += 2) : (o = D, 0 === Mr && c(_e)), o === D && (60 === t.charCodeAt(Sr) ? (o = Je, 
                    Sr++) : (o = D, 0 === Mr && c(Ye)), o === D && (62 === t.charCodeAt(Sr) ? (o = Ge, 
                    Sr++) : (o = D, 0 === Mr && c(Ke))))), o !== D && H() !== D && (a = y()) !== D ? (Or = i, 
                    i = He(r, o, a)) : (Sr = i, i = D)) : (Sr = i, i = D);
                    n !== D ? (Or = e, e = r = Ue(r, n)) : (Sr = e, e = D);
                } else Sr = e, e = D;
                return Rr[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function y() {
                var e, r, n, i, o, a, s = 32 * Sr + 9, u = Rr[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = x()) !== D) {
                    for (n = [], i = Sr, H() !== D ? (Qe.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = D, 
                    0 === Mr && c(We)), o !== D && H() !== D && (a = x()) !== D ? (Or = i, i = He(r, o, a)) : (Sr = i, 
                    i = D)) : (Sr = i, i = D); i !== D; ) n.push(i), i = Sr, H() !== D ? (Qe.test(t.charAt(Sr)) ? (o = t.charAt(Sr), 
                    Sr++) : (o = D, 0 === Mr && c(We)), o !== D && H() !== D && (a = x()) !== D ? (Or = i, 
                    i = He(r, o, a)) : (Sr = i, i = D)) : (Sr = i, i = D);
                    n !== D ? (Or = e, e = r = Ue(r, n)) : (Sr = e, e = D);
                } else Sr = e, e = D;
                return Rr[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function x() {
                var e, r, n, i, o, a, s = 32 * Sr + 10, u = Rr[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = A()) !== D) {
                    for (n = [], i = Sr, H() !== D ? (Xe.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = D, 
                    0 === Mr && c(Ze)), o !== D && H() !== D && (a = A()) !== D ? (Or = i, i = He(r, o, a)) : (Sr = i, 
                    i = D)) : (Sr = i, i = D); i !== D; ) n.push(i), i = Sr, H() !== D ? (Xe.test(t.charAt(Sr)) ? (o = t.charAt(Sr), 
                    Sr++) : (o = D, 0 === Mr && c(Ze)), o !== D && H() !== D && (a = A()) !== D ? (Or = i, 
                    i = He(r, o, a)) : (Sr = i, i = D)) : (Sr = i, i = D);
                    n !== D ? (Or = e, e = r = Ue(r, n)) : (Sr = e, e = D);
                } else Sr = e, e = D;
                return Rr[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function A() {
                var e, r, n, i = 32 * Sr + 11, o = Rr[i];
                return o ? (Sr = o.nextPos, o.result) : ((e = P()) === D && (e = Sr, t.substr(Sr, 2) === et ? (r = et, 
                Sr += 2) : (r = D, 0 === Mr && c(tt)), r === D && (t.substr(Sr, 2) === rt ? (r = rt, 
                Sr += 2) : (r = D, 0 === Mr && c(nt)), r === D && (it.test(t.charAt(Sr)) ? (r = t.charAt(Sr), 
                Sr++) : (r = D, 0 === Mr && c(ot)))), r !== D && H() !== D && (n = A()) !== D ? (Or = e, 
                e = r = at(r, n)) : (Sr = e, e = D)), Rr[i] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function P() {
                var e, r, n, i = 32 * Sr + 12, o = Rr[i];
                return o ? (Sr = o.nextPos, o.result) : (e = Sr, r = h(), r !== D && H() !== D ? (t.substr(Sr, 2) === et ? (n = et, 
                Sr += 2) : (n = D, 0 === Mr && c(tt)), n === D && (t.substr(Sr, 2) === rt ? (n = rt, 
                Sr += 2) : (n = D, 0 === Mr && c(nt))), n !== D ? (Or = e, e = r = st(r, n)) : (Sr = e, 
                e = D)) : (Sr = e, e = D), e === D && (e = h()), Rr[i] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function C() {
                var e, t, r, n, i = 32 * Sr + 13, o = Rr[i];
                return o ? (Sr = o.nextPos, o.result) : (e = Sr, t = Sr, r = k(), r !== D && H() !== D && (n = $()) !== D ? (Or = t, 
                t = r = ut(r, n)) : (Sr = t, t = D), t !== D && (r = w()) !== D ? (Or = e, e = t = ct(t, r)) : (Sr = e, 
                e = D), Rr[i] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function k() {
                var e, r, n, i, o, a = 32 * Sr + 14, s = Rr[a];
                return s ? (Sr = s.nextPos, s.result) : (e = Sr, (r = E()) === D && (r = N()) === D && (r = O()) === D && (r = j()) === D && (r = z()) === D && (r = Sr, 
                40 === t.charCodeAt(Sr) ? (n = lt, Sr++) : (n = D, 0 === Mr && c(ft)), n !== D && H() !== D && (i = d()) !== D && H() !== D ? (41 === t.charCodeAt(Sr) ? (o = dt, 
                Sr++) : (o = D, 0 === Mr && c(ht)), o !== D ? (Or = r, r = n = pt(i)) : (Sr = r, 
                r = D)) : (Sr = r, r = D)), r !== D && (n = w()) !== D ? (Or = e, e = r = vt(r, n)) : (Sr = e, 
                e = D), Rr[a] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function w() {
                var e, r, n, i, o, a = 32 * Sr + 15, s = Rr[a];
                if (s) return Sr = s.nextPos, s.result;
                for (e = [], r = Sr, H() !== D ? (91 === t.charCodeAt(Sr) ? (n = mt, Sr++) : (n = D, 
                0 === Mr && c(bt)), n !== D && H() !== D && (i = d()) !== D && H() !== D ? (93 === t.charCodeAt(Sr) ? (o = gt, 
                Sr++) : (o = D, 0 === Mr && c(yt)), o !== D ? (Or = r, r = xt(i)) : (Sr = r, r = D)) : (Sr = r, 
                r = D)) : (Sr = r, r = D), r === D && (r = Sr, H() !== D ? (46 === t.charCodeAt(Sr) ? (n = At, 
                Sr++) : (n = D, 0 === Mr && c(Pt)), n !== D && H() !== D && (i = N()) !== D ? (Or = r, 
                r = Ct(i)) : (Sr = r, r = D)) : (Sr = r, r = D)); r !== D; ) e.push(r), r = Sr, 
                H() !== D ? (91 === t.charCodeAt(Sr) ? (n = mt, Sr++) : (n = D, 0 === Mr && c(bt)), 
                n !== D && H() !== D && (i = d()) !== D && H() !== D ? (93 === t.charCodeAt(Sr) ? (o = gt, 
                Sr++) : (o = D, 0 === Mr && c(yt)), o !== D ? (Or = r, r = xt(i)) : (Sr = r, r = D)) : (Sr = r, 
                r = D)) : (Sr = r, r = D), r === D && (r = Sr, H() !== D ? (46 === t.charCodeAt(Sr) ? (n = At, 
                Sr++) : (n = D, 0 === Mr && c(Pt)), n !== D && H() !== D && (i = N()) !== D ? (Or = r, 
                r = Ct(i)) : (Sr = r, r = D)) : (Sr = r, r = D));
                return Rr[a] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function E() {
                var e, r, n, i, o, a = 32 * Sr + 16, s = Rr[a];
                return s ? (Sr = s.nextPos, s.result) : (e = Sr, t.substr(Sr, 3) === kt ? (r = kt, 
                Sr += 3) : (r = D, 0 === Mr && c(wt)), r !== D && U() !== D && (n = k()) !== D ? (i = Sr, 
                H() !== D && (o = $()) !== D ? (Or = i, i = Et(n, o)) : (Sr = i, i = D), i === D && (i = null), 
                i !== D ? (Or = e, e = r = $t(n, i)) : (Sr = e, e = D)) : (Sr = e, e = D), Rr[a] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function $() {
                var e, r, n, i, o, a, s, u, l = 32 * Sr + 17, f = Rr[l];
                if (f) return Sr = f.nextPos, f.result;
                if (e = Sr, 40 === t.charCodeAt(Sr) ? (r = lt, Sr++) : (r = D, 0 === Mr && c(ft)), 
                r !== D && H() !== D ? (41 === t.charCodeAt(Sr) ? (n = dt, Sr++) : (n = D, 0 === Mr && c(ht)), 
                n !== D ? (Or = e, e = r = Nt()) : (Sr = e, e = D)) : (Sr = e, e = D), e === D) if (e = Sr, 
                40 === t.charCodeAt(Sr) ? (r = lt, Sr++) : (r = D, 0 === Mr && c(ft)), r !== D) if (H() !== D) if ((n = d()) !== D) {
                    for (i = [], o = Sr, (a = H()) !== D ? (44 === t.charCodeAt(Sr) ? (s = jt, Sr++) : (s = D, 
                    0 === Mr && c(Lt)), s !== D && H() !== D && (u = d()) !== D ? (Or = o, o = a = zt(n, u)) : (Sr = o, 
                    o = D)) : (Sr = o, o = D); o !== D; ) i.push(o), o = Sr, (a = H()) !== D ? (44 === t.charCodeAt(Sr) ? (s = jt, 
                    Sr++) : (s = D, 0 === Mr && c(Lt)), s !== D && H() !== D && (u = d()) !== D ? (Or = o, 
                    o = a = zt(n, u)) : (Sr = o, o = D)) : (Sr = o, o = D);
                    i !== D && (o = H()) !== D ? (41 === t.charCodeAt(Sr) ? (a = dt, Sr++) : (a = D, 
                    0 === Mr && c(ht)), a !== D ? (Or = e, e = r = Vt(n, i)) : (Sr = e, e = D)) : (Sr = e, 
                    e = D);
                } else Sr = e, e = D; else Sr = e, e = D; else Sr = e, e = D;
                return Rr[l] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function N() {
                var e, r, n, i, o, a = 32 * Sr + 18, s = Rr[a];
                if (s) return Sr = s.nextPos, s.result;
                if (Mr++, e = Sr, r = Sr, Mr++, n = T(), Mr--, n === D ? r = void 0 : (Sr = r, r = D), 
                r !== D) if (Ot.test(t.charAt(Sr)) ? (n = t.charAt(Sr), Sr++) : (n = D, 0 === Mr && c(Tt)), 
                n !== D) {
                    for (i = [], Bt.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = D, 0 === Mr && c(Ft)); o !== D; ) i.push(o), 
                    Bt.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = D, 0 === Mr && c(Ft));
                    i !== D ? (Or = e, e = r = Mt(n, i)) : (Sr = e, e = D);
                } else Sr = e, e = D; else Sr = e, e = D;
                return Mr--, e === D && (r = D, 0 === Mr && c(St)), Rr[a] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function j() {
                var e, r, n, i, o = 32 * Sr + 19, a = Rr[o];
                return a ? (Sr = a.nextPos, a.result) : (e = Sr, 91 === t.charCodeAt(Sr) ? (r = mt, 
                Sr++) : (r = D, 0 === Mr && c(bt)), r !== D && H() !== D ? (93 === t.charCodeAt(Sr) ? (n = gt, 
                Sr++) : (n = D, 0 === Mr && c(yt)), n !== D ? (Or = e, e = r = Rt()) : (Sr = e, 
                e = D)) : (Sr = e, e = D), e === D && (e = Sr, 91 === t.charCodeAt(Sr) ? (r = mt, 
                Sr++) : (r = D, 0 === Mr && c(bt)), r !== D && H() !== D && (n = L()) !== D && H() !== D ? (93 === t.charCodeAt(Sr) ? (i = gt, 
                Sr++) : (i = D, 0 === Mr && c(yt)), i !== D ? (Or = e, e = r = Ht(n)) : (Sr = e, 
                e = D)) : (Sr = e, e = D)), Rr[o] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function L() {
                var e, r, n, i, o, a, s = 32 * Sr + 20, u = Rr[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = d()) !== D) {
                    for (n = [], i = Sr, H() !== D ? (44 === t.charCodeAt(Sr) ? (o = jt, Sr++) : (o = D, 
                    0 === Mr && c(Lt)), o !== D && H() !== D && (a = d()) !== D ? (Or = i, i = Ut(r, a)) : (Sr = i, 
                    i = D)) : (Sr = i, i = D); i !== D; ) n.push(i), i = Sr, H() !== D ? (44 === t.charCodeAt(Sr) ? (o = jt, 
                    Sr++) : (o = D, 0 === Mr && c(Lt)), o !== D && H() !== D && (a = d()) !== D ? (Or = i, 
                    i = Ut(r, a)) : (Sr = i, i = D)) : (Sr = i, i = D);
                    n !== D ? (Or = e, e = r = Vt(r, n)) : (Sr = e, e = D);
                } else Sr = e, e = D;
                return Rr[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function z() {
                var e, r, n, i, o, a, s = 32 * Sr + 21, u = Rr[s];
                return u ? (Sr = u.nextPos, u.result) : (e = Sr, 123 === t.charCodeAt(Sr) ? (r = qt, 
                Sr++) : (r = D, 0 === Mr && c(Dt)), r !== D && H() !== D ? (125 === t.charCodeAt(Sr) ? (n = It, 
                Sr++) : (n = D, 0 === Mr && c(_t)), n !== D ? (Or = e, e = r = Jt()) : (Sr = e, 
                e = D)) : (Sr = e, e = D), e === D && (e = Sr, 123 === t.charCodeAt(Sr) ? (r = qt, 
                Sr++) : (r = D, 0 === Mr && c(Dt)), r !== D && H() !== D && (n = V()) !== D && H() !== D ? (i = Sr, 
                44 === t.charCodeAt(Sr) ? (o = jt, Sr++) : (o = D, 0 === Mr && c(Lt)), o !== D && (a = H()) !== D ? i = o = [ o, a ] : (Sr = i, 
                i = D), i === D && (i = null), i !== D ? (125 === t.charCodeAt(Sr) ? (o = It, Sr++) : (o = D, 
                0 === Mr && c(_t)), o !== D ? (Or = e, e = r = Yt(n)) : (Sr = e, e = D)) : (Sr = e, 
                e = D)) : (Sr = e, e = D)), Rr[s] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function V() {
                var e, r, n, i, o, a, s = 32 * Sr + 22, u = Rr[s];
                if (u) return Sr = u.nextPos, u.result;
                if (e = Sr, (r = S()) !== D) {
                    for (n = [], i = Sr, H() !== D ? (44 === t.charCodeAt(Sr) ? (o = jt, Sr++) : (o = D, 
                    0 === Mr && c(Lt)), o !== D && H() !== D && (a = S()) !== D ? (Or = i, i = Gt(r, a)) : (Sr = i, 
                    i = D)) : (Sr = i, i = D); i !== D; ) n.push(i), i = Sr, H() !== D ? (44 === t.charCodeAt(Sr) ? (o = jt, 
                    Sr++) : (o = D, 0 === Mr && c(Lt)), o !== D && H() !== D && (a = S()) !== D ? (Or = i, 
                    i = Gt(r, a)) : (Sr = i, i = D)) : (Sr = i, i = D);
                    n !== D ? (Or = e, e = r = Vt(r, n)) : (Sr = e, e = D);
                } else Sr = e, e = D;
                return Rr[s] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function S() {
                var e, r, n, i, o = 32 * Sr + 23, a = Rr[o];
                return a ? (Sr = a.nextPos, a.result) : (e = Sr, (r = N()) === D && (r = R()) === D && (r = B()), 
                r !== D && H() !== D ? (58 === t.charCodeAt(Sr) ? (n = Pe, Sr++) : (n = D, 0 === Mr && c(Ce)), 
                n !== D && H() !== D && (i = d()) !== D ? (Or = e, e = r = Kt(r, i)) : (Sr = e, 
                e = D)) : (Sr = e, e = D), Rr[o] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function O() {
                var e, t = 32 * Sr + 24, r = Rr[t];
                return r ? (Sr = r.nextPos, r.result) : ((e = T()) === D && (e = B()) === D && (e = R()), 
                Rr[t] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function T() {
                var e, r, n = 32 * Sr + 25, i = Rr[n];
                return i ? (Sr = i.nextPos, i.result) : (e = Sr, t.substr(Sr, 4) === Qt ? (r = Qt, 
                Sr += 4) : (r = D, 0 === Mr && c(Wt)), r !== D && (Or = e, r = Xt()), (e = r) === D && (e = Sr, 
                t.substr(Sr, 4) === Zt ? (r = Zt, Sr += 4) : (r = D, 0 === Mr && c(er)), r !== D && (Or = e, 
                r = tr()), (e = r) === D && (e = Sr, t.substr(Sr, 5) === rr ? (r = rr, Sr += 5) : (r = D, 
                0 === Mr && c(nr)), r !== D && (Or = e, r = ir()), e = r)), Rr[n] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function B() {
                var e, r, n, i, o, a = 32 * Sr + 26, s = Rr[a];
                if (s) return Sr = s.nextPos, s.result;
                if (Mr++, e = Sr, (r = F()) !== D) if (46 === t.charCodeAt(Sr) ? (n = At, Sr++) : (n = D, 
                0 === Mr && c(Pt)), n !== D) {
                    for (i = [], ar.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = D, 0 === Mr && c(sr)); o !== D; ) i.push(o), 
                    ar.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = D, 0 === Mr && c(sr));
                    i !== D ? ((o = M()) === D && (o = null), o !== D ? (Or = e, e = r = ur()) : (Sr = e, 
                    e = D)) : (Sr = e, e = D);
                } else Sr = e, e = D; else Sr = e, e = D;
                if (e === D) {
                    if (e = Sr, 46 === t.charCodeAt(Sr) ? (r = At, Sr++) : (r = D, 0 === Mr && c(Pt)), 
                    r !== D) {
                        if (n = [], ar.test(t.charAt(Sr)) ? (i = t.charAt(Sr), Sr++) : (i = D, 0 === Mr && c(sr)), 
                        i !== D) for (;i !== D; ) n.push(i), ar.test(t.charAt(Sr)) ? (i = t.charAt(Sr), 
                        Sr++) : (i = D, 0 === Mr && c(sr)); else n = D;
                        n !== D ? ((i = M()) === D && (i = null), i !== D ? (Or = e, e = r = ur()) : (Sr = e, 
                        e = D)) : (Sr = e, e = D);
                    } else Sr = e, e = D;
                    e === D && (e = Sr, (r = F()) !== D ? ((n = M()) === D && (n = null), n !== D ? (Or = e, 
                    e = r = ur()) : (Sr = e, e = D)) : (Sr = e, e = D));
                }
                return Mr--, e === D && (r = D, 0 === Mr && c(or)), Rr[a] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function F() {
                var e, r, n, i, o = 32 * Sr + 27, a = Rr[o];
                if (a) return Sr = a.nextPos, a.result;
                if (48 === t.charCodeAt(Sr) ? (e = cr, Sr++) : (e = D, 0 === Mr && c(lr)), e === D) if (e = Sr, 
                fr.test(t.charAt(Sr)) ? (r = t.charAt(Sr), Sr++) : (r = D, 0 === Mr && c(dr)), r !== D) {
                    for (n = [], ar.test(t.charAt(Sr)) ? (i = t.charAt(Sr), Sr++) : (i = D, 0 === Mr && c(sr)); i !== D; ) n.push(i), 
                    ar.test(t.charAt(Sr)) ? (i = t.charAt(Sr), Sr++) : (i = D, 0 === Mr && c(sr));
                    n !== D ? e = r = [ r, n ] : (Sr = e, e = D);
                } else Sr = e, e = D;
                return Rr[o] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function M() {
                var e, r, n, i, o, a = 32 * Sr + 28, s = Rr[a];
                if (s) return Sr = s.nextPos, s.result;
                if (e = Sr, t.substr(Sr, 1).toLowerCase() === hr ? (r = t.charAt(Sr), Sr++) : (r = D, 
                0 === Mr && c(pr)), r !== D) if (Qe.test(t.charAt(Sr)) ? (n = t.charAt(Sr), Sr++) : (n = D, 
                0 === Mr && c(We)), n === D && (n = null), n !== D) {
                    if (i = [], ar.test(t.charAt(Sr)) ? (o = t.charAt(Sr), Sr++) : (o = D, 0 === Mr && c(sr)), 
                    o !== D) for (;o !== D; ) i.push(o), ar.test(t.charAt(Sr)) ? (o = t.charAt(Sr), 
                    Sr++) : (o = D, 0 === Mr && c(sr)); else i = D;
                    i !== D ? e = r = [ r, n, i ] : (Sr = e, e = D);
                } else Sr = e, e = D; else Sr = e, e = D;
                return Rr[a] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function R() {
                var e, r, n, i, o, a = 32 * Sr + 29, s = Rr[a];
                if (s) return Sr = s.nextPos, s.result;
                if (Mr++, e = Sr, 34 === t.charCodeAt(Sr) ? (r = mr, Sr++) : (r = D, 0 === Mr && c(br)), 
                r !== D) {
                    for (n = [], i = Sr, t.substr(Sr, 2) === gr ? (o = gr, Sr += 2) : (o = D, 0 === Mr && c(yr)), 
                    o !== D && (Or = i, o = xr()), (i = o) === D && (Ar.test(t.charAt(Sr)) ? (i = t.charAt(Sr), 
                    Sr++) : (i = D, 0 === Mr && c(Pr))); i !== D; ) n.push(i), i = Sr, t.substr(Sr, 2) === gr ? (o = gr, 
                    Sr += 2) : (o = D, 0 === Mr && c(yr)), o !== D && (Or = i, o = xr()), (i = o) === D && (Ar.test(t.charAt(Sr)) ? (i = t.charAt(Sr), 
                    Sr++) : (i = D, 0 === Mr && c(Pr)));
                    n !== D ? (34 === t.charCodeAt(Sr) ? (i = mr, Sr++) : (i = D, 0 === Mr && c(br)), 
                    i !== D ? (Or = e, e = r = Cr(n)) : (Sr = e, e = D)) : (Sr = e, e = D);
                } else Sr = e, e = D;
                if (e === D) if (e = Sr, 39 === t.charCodeAt(Sr) ? (r = kr, Sr++) : (r = D, 0 === Mr && c(wr)), 
                r !== D) {
                    for (n = [], i = Sr, t.substr(Sr, 2) === Er ? (o = Er, Sr += 2) : (o = D, 0 === Mr && c($r)), 
                    o !== D && (Or = i, o = Nr()), (i = o) === D && (jr.test(t.charAt(Sr)) ? (i = t.charAt(Sr), 
                    Sr++) : (i = D, 0 === Mr && c(Lr))); i !== D; ) n.push(i), i = Sr, t.substr(Sr, 2) === Er ? (o = Er, 
                    Sr += 2) : (o = D, 0 === Mr && c($r)), o !== D && (Or = i, o = Nr()), (i = o) === D && (jr.test(t.charAt(Sr)) ? (i = t.charAt(Sr), 
                    Sr++) : (i = D, 0 === Mr && c(Lr)));
                    n !== D ? (39 === t.charCodeAt(Sr) ? (i = kr, Sr++) : (i = D, 0 === Mr && c(wr)), 
                    i !== D ? (Or = e, e = r = Cr(n)) : (Sr = e, e = D)) : (Sr = e, e = D);
                } else Sr = e, e = D;
                return Mr--, e === D && (r = D, 0 === Mr && c(vr)), Rr[a] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            function H() {
                var e, t = 32 * Sr + 30, r = Rr[t];
                return r ? (Sr = r.nextPos, r.result) : ((e = U()) === D && (e = null), Rr[t] = {
                    nextPos: Sr,
                    result: e
                }, e);
            }
            function U() {
                var e, r, n = 32 * Sr + 31, i = Rr[n];
                if (i) return Sr = i.nextPos, i.result;
                if (e = [], zr.test(t.charAt(Sr)) ? (r = t.charAt(Sr), Sr++) : (r = D, 0 === Mr && c(Vr)), 
                r !== D) for (;r !== D; ) e.push(r), zr.test(t.charAt(Sr)) ? (r = t.charAt(Sr), 
                Sr++) : (r = D, 0 === Mr && c(Vr)); else e = D;
                return Rr[n] = {
                    nextPos: Sr,
                    result: e
                }, e;
            }
            r = void 0 !== r ? r : {};
            var q, D = {}, I = {
                Text: l,
                Expression: d
            }, _ = l, J = /^[^{]/, Y = o([ "{" ], !0, !1), G = function(e, t, r) {
                return (e.length > 0 ? [ e.join("") ] : []).concat([ t ], r);
            }, K = {
                type: "any"
            }, Q = function(e) {
                return e.length > 0 ? [ e.join("") ] : [];
            }, W = "{{{", X = i("{{{", !1), Z = "}}}", ee = i("}}}", !1), te = function(e) {
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
                return Hr("Logical", e, t);
            }, je = "&&", Le = i("&&", !1), ze = function(e, t) {
                return {
                    operator: "&&",
                    arg: t
                };
            }, Ve = "===", Se = i("===", !1), Oe = "!==", Te = i("!==", !1), Be = "==", Fe = i("==", !1), Me = "!=", Re = i("!=", !1), He = function(e, t, r) {
                return {
                    operator: t,
                    arg: r
                };
            }, Ue = function(e, t) {
                return Hr("Binary", e, t);
            }, qe = "<=", De = i("<=", !1), Ie = ">=", _e = i(">=", !1), Je = "<", Ye = i("<", !1), Ge = ">", Ke = i(">", !1), Qe = /^[+\-]/, We = o([ "+", "-" ], !1, !1), Xe = /^[*\/%]/, Ze = o([ "*", "/", "%" ], !1, !1), et = "++", tt = i("++", !1), rt = "--", nt = i("--", !1), it = /^[+!\-]/, ot = o([ "+", "!", "-" ], !1, !1), at = function(e, t) {
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
            }, St = a("identifier"), Ot = /^[a-z$_]/i, Tt = o([ [ "a", "z" ], "$", "_" ], !1, !0), Bt = /^[a-z$_0-9]/i, Ft = o([ [ "a", "z" ], "$", "_", [ "0", "9" ] ], !1, !0), Mt = function(e, t) {
                return {
                    type: "Identifier",
                    name: e + t.join("")
                };
            }, Rt = function() {
                return {
                    type: "Array",
                    elements: []
                };
            }, Ht = function(e) {
                return {
                    type: "Array",
                    elements: e
                };
            }, Ut = function(e, t) {
                return t;
            }, qt = "{", Dt = i("{", !1), It = "}", _t = i("}", !1), Jt = function() {
                return {
                    type: "Object",
                    properties: []
                };
            }, Yt = function(e) {
                return {
                    type: "Object",
                    properties: e
                };
            }, Gt = function(e, t) {
                return t;
            }, Kt = function(e, t) {
                return {
                    type: "Property",
                    key: e.name || e.value,
                    value: t
                };
            }, Qt = "null", Wt = i("null", !1), Xt = function() {
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
            }, Ar = /^[^"]/, Pr = o([ '"' ], !0, !1), Cr = function(e) {
                return {
                    type: "Literal",
                    value: e.join("")
                };
            }, kr = "'", wr = i("'", !1), Er = "\\'", $r = i("\\'", !1), Nr = function() {
                return "'";
            }, jr = /^[^'']/, Lr = o([ "'", "'" ], !0, !1), zr = /^[\t ]/, Vr = o([ "\t", " " ], !1, !1), Sr = 0, Or = 0, Tr = [ {
                line: 1,
                column: 1
            } ], Br = 0, Fr = [], Mr = 0, Rr = {};
            if ("startRule" in r) {
                if (!(r.startRule in I)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
                _ = I[r.startRule];
            }
            var Hr = function(e, t, r) {
                return 0 === r.length ? t : r.reduce(function(t, r) {
                    return {
                        type: e,
                        operator: r.operator,
                        left: t,
                        right: r.arg
                    };
                }, t);
            };
            if ((q = _()) !== D && Sr === t.length) return q;
            throw q !== D && Sr < t.length && c({
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
            var m = r.callee.object ? t(r.callee.object, n).value : n, b = t(r.callee, n).value, g = r.arguments.map(function(e) {
                return t(e, n).value;
            });
            i = b ? "Call" === a ? b.apply(m, g) : new (b.bind.apply(b, g))() : void 0;
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
                        args: e.args
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
    }, g = function e(t, r) {
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
    }, y = function e(r, i, s) {
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
        }), u.createBinds(v), v.$(!0), g(v, v);
    };
    Object.assign(y, {
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
    }), Object.defineProperty(y, "prefix", {
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
            this.view = y(this.vnode, void 0, e)) : this.view && (this.marker.parentNode.removeChild(this.vnode.node), 
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
                console.log("YESHHHH");
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
                var r, n = o.vnode.clone(), s = {
                    vnode: n,
                    datum: a[t]
                };
                o.marker.parentNode.insertBefore(n.node, o.marker), s.view = y(s.vnode, (r = {}, 
                r[i] = s.datum, r.$index = t, r), e), s.view.$(), o.items.push(s);
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
    } ].forEach(u), y;
});
