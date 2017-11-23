!function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.zam = t()
}(this, function() {
	"use strict";
	const e = e => null === e || void 0 === e ? "" : String(e),
		t = (e, t) => {
			const n = e ? e.indexOf(t) : -1;
			n > -1 && e.splice(n, 1)
		},
		n = e => e.split("").reduce((e, t) => (e << 5) - e + t.charCodeAt(0) | 0, 0).toString(16),
		r = e => {
			let t;
			const n = () => {
				t || e()
			};
			if ("undefined" != typeof process) process.nextTick(n);
			else {
				const e = String(Math.random()),
					t = r => {
						r.data === e && (r.stopPropagation(), n(), window.removeEventListener("message", t, !0))
					};
				window.addEventListener("message", t, !0), window.postMessage(e, "*")
			}
			return () => {
				t = !0
			}
		};
	var i = function() {
		function e(t, n, r, i) {
			this.message = t, this.expected = n, this.found = r, this.location = i, this.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, e)
		}
		function t(t, n) {
			function r() {
				return t.substring(Tn, On)
			}
			function i(e, t) {
				return {
					type: "literal",
					text: e,
					ignoreCase: t
				}
			}
			function s(e, t, n) {
				return {
					type: "class",
					parts: e,
					inverted: t,
					ignoreCase: n
				}
			}
			function o(e) {
				return {
					type: "other",
					description: e
				}
			}
			function u(e) {
				var n,
					r = Sn[e];
				if (r) return r;
				for (n = e - 1; !Sn[n];) n--;
				for (r = {
						line: (r = Sn[n]).line,
						column: r.column
					}; n < e;) 10 === t.charCodeAt(n) ? (r.line++, r.column = 1) : r.column++, n++;
				return Sn[e] = r, r
			}
			function a(e, t) {
				var n = u(e),
					r = u(t);
				return {
					start: {
						offset: e,
						line: n.line,
						column: n.column
					},
					end: {
						offset: t,
						line: r.line,
						column: r.column
					}
				}
			}
			function c(e) {
				On < Fn || (On > Fn && (Fn = On, Bn = []), Bn.push(e))
			}
			function l() {
				var e,
					t,
					n,
					r = 33 * On + 0,
					i = Mn[r];
				if (i) return On = i.nextPos, i.result;
				for (e = On, t = [], n = f(); n !== J;) t.push(n), n = f();
				return t !== J && (Tn = e, t = H(t)), e = t, Mn[r] = {
						nextPos: On,
						result: e
					}, e
			}
			function f() {
				var e,
					n,
					r = 33 * On + 1,
					i = Mn[r];
				return i ? (On = i.nextPos, i.result) : (e = On, (n = h()) !== J && (Tn = e, n = W(n)), (e = n) === J && (e = On, t.length > On ? (n = t.charAt(On), On++) : (n = J, 0 === Dn && c(G)), n !== J && (Tn = e, n = K(n)), e = n), Mn[r] = {
					nextPos: On,
					result: e
				}, e)
			}
			function h() {
				var e,
					n,
					r,
					i,
					s = 33 * On + 2,
					o = Mn[s];
				return o ? (On = o.nextPos, o.result) : (e = On, t.substr(On, 3) === X ? (n = X, On += 3) : (n = J, 0 === Dn && c(Y)), n !== J && V() !== J && (r = d()) !== J && V() !== J ? (t.substr(On, 3) === Z ? (i = Z, On += 3) : (i = J, 0 === Dn && c(ee)), i !== J ? (Tn = e, e = n = te(r)) : (On = e, e = J)) : (On = e, e = J), e === J && (e = On, t.substr(On, 2) === ne ? (n = ne, On += 2) : (n = J, 0 === Dn && c(re)), n !== J && V() !== J && (r = d()) !== J && V() !== J ? (t.substr(On, 2) === ie ? (i = ie, On += 2) : (i = J, 0 === Dn && c(se)), i !== J ? (Tn = e, e = n = oe(r)) : (On = e, e = J)) : (On = e, e = J)), Mn[s] = {
					nextPos: On,
					result: e
				}, e)
			}
			function d() {
				var e,
					n,
					r,
					i,
					s = 33 * On + 3,
					o = Mn[s];
				return o ? (On = o.nextPos, o.result) : (e = On, n = p(), n !== J && V() !== J ? (61 === t.charCodeAt(On) ? (r = ue, On++) : (r = J, 0 === Dn && c(ae)), r === J && (t.substr(On, 2) === ce ? (r = ce, On += 2) : (r = J, 0 === Dn && c(le)), r === J && (t.substr(On, 2) === fe ? (r = fe, On += 2) : (r = J, 0 === Dn && c(he)), r === J && (t.substr(On, 2) === de ? (r = de, On += 2) : (r = J, 0 === Dn && c(pe)), r === J && (t.substr(On, 2) === me ? (r = me, On += 2) : (r = J, 0 === Dn && c(ve)), r === J && (t.substr(On, 2) === xe ? (r = xe, On += 2) : (r = J, 0 === Dn && c(ye))))))), r !== J && V() !== J && (i = d()) !== J ? (Tn = e, e = n = ge(n, r, i)) : (On = e, e = J)) : (On = e, e = J), e === J && (e = m()), Mn[s] = {
					nextPos: On,
					result: e
				}, e)
			}
			function p() {
				var e,
					t = 33 * On + 4,
					n = Mn[t];
				return n ? (On = n.nextPos, n.result) : ((e = C()) === J && (e = E()), Mn[t] = {
					nextPos: On,
					result: e
				}, e)
			}
			function m() {
				var e,
					n,
					r,
					i,
					s,
					o,
					u = 33 * On + 5,
					a = Mn[u];
				return a ? (On = a.nextPos, a.result) : (e = On, n = v(), n !== J && V() !== J ? (63 === t.charCodeAt(On) ? (r = be, On++) : (r = J, 0 === Dn && c(Ae)), r !== J && V() !== J && (i = m()) !== J && V() !== J ? (58 === t.charCodeAt(On) ? (s = Pe, On++) : (s = J, 0 === Dn && c(ke)), s !== J && V() !== J && (o = m()) !== J ? (Tn = e, e = n = Ce(n, i, o)) : (On = e, e = J)) : (On = e, e = J)) : (On = e, e = J), e === J && (e = v()), Mn[u] = {
					nextPos: On,
					result: e
				}, e)
			}
			function v() {
				var e,
					n,
					r,
					i,
					s,
					o,
					u = 33 * On + 6,
					a = Mn[u];
				if (a) return On = a.nextPos, a.result;
				if (e = On, (n = x()) !== J) {
					for (r = [], i = On, V() !== J ? (t.substr(On, 2) === Ee ? (s = Ee, On += 2) : (s = J, 0 === Dn && c(we)), s !== J && V() !== J && (o = x()) !== J ? (Tn = i, i = Ne(n, o)) : (On = i, i = J)) : (On = i, i = J); i !== J;) r.push(i), i = On, V() !== J ? (t.substr(On, 2) === Ee ? (s = Ee, On += 2) : (s = J, 0 === Dn && c(we)), s !== J && V() !== J && (o = x()) !== J ? (Tn = i, i = Ne(n, o)) : (On = i, i = J)) : (On = i, i = J);
					r !== J ? (Tn = e, e = n = je(n, r)) : (On = e, e = J)
				} else On = e, e = J;
				return Mn[u] = {
						nextPos: On,
						result: e
					}, e
			}
			function x() {
				var e,
					n,
					r,
					i,
					s,
					o,
					u = 33 * On + 7,
					a = Mn[u];
				if (a) return On = a.nextPos, a.result;
				if (e = On, (n = y()) !== J) {
					for (r = [], i = On, V() !== J ? (t.substr(On, 2) === Le ? (s = Le, On += 2) : (s = J, 0 === Dn && c($e)), s !== J && V() !== J && (o = y()) !== J ? (Tn = i, i = qe(n, o)) : (On = i, i = J)) : (On = i, i = J); i !== J;) r.push(i), i = On, V() !== J ? (t.substr(On, 2) === Le ? (s = Le, On += 2) : (s = J, 0 === Dn && c($e)), s !== J && V() !== J && (o = y()) !== J ? (Tn = i, i = qe(n, o)) : (On = i, i = J)) : (On = i, i = J);
					r !== J ? (Tn = e, e = n = je(n, r)) : (On = e, e = J)
				} else On = e, e = J;
				return Mn[u] = {
						nextPos: On,
						result: e
					}, e
			}
			function y() {
				var e,
					n,
					r,
					i,
					s,
					o,
					u = 33 * On + 8,
					a = Mn[u];
				if (a) return On = a.nextPos, a.result;
				if (e = On, (n = g()) !== J) {
					for (r = [], i = On, V() !== J ? (t.substr(On, 3) === ze ? (s = ze, On += 3) : (s = J, 0 === Dn && c(Oe)), s === J && (t.substr(On, 3) === Te ? (s = Te, On += 3) : (s = J, 0 === Dn && c(Se)), s === J && (t.substr(On, 2) === Fe ? (s = Fe, On += 2) : (s = J, 0 === Dn && c(Be)), s === J && (t.substr(On, 2) === De ? (s = De, On += 2) : (s = J, 0 === Dn && c(Me))))), s !== J && V() !== J && (o = g()) !== J ? (Tn = i, i = Re(n, s, o)) : (On = i, i = J)) : (On = i, i = J); i !== J;) r.push(i), i = On, V() !== J ? (t.substr(On, 3) === ze ? (s = ze, On += 3) : (s = J, 0 === Dn && c(Oe)), s === J && (t.substr(On, 3) === Te ? (s = Te, On += 3) : (s = J, 0 === Dn && c(Se)), s === J && (t.substr(On, 2) === Fe ? (s = Fe, On += 2) : (s = J, 0 === Dn && c(Be)), s === J && (t.substr(On, 2) === De ? (s = De, On += 2) : (s = J, 0 === Dn && c(Me))))), s !== J && V() !== J && (o = g()) !== J ? (Tn = i, i = Re(n, s, o)) : (On = i, i = J)) : (On = i, i = J);
					r !== J ? (Tn = e, e = n = Ve(n, r)) : (On = e, e = J)
				} else On = e, e = J;
				return Mn[u] = {
						nextPos: On,
						result: e
					}, e
			}
			function g() {
				var e,
					n,
					r,
					i,
					s,
					o,
					u = 33 * On + 9,
					a = Mn[u];
				if (a) return On = a.nextPos, a.result;
				if (e = On, (n = b()) !== J) {
					for (r = [], i = On, V() !== J ? (t.substr(On, 2) === _e ? (s = _e, On += 2) : (s = J, 0 === Dn && c(Ie)), s === J && (t.substr(On, 2) === Je ? (s = Je, On += 2) : (s = J, 0 === Dn && c(Ue)), s === J && (60 === t.charCodeAt(On) ? (s = Qe, On++) : (s = J, 0 === Dn && c(He)), s === J && (62 === t.charCodeAt(On) ? (s = We, On++) : (s = J, 0 === Dn && c(Ge))))), s !== J && V() !== J && (o = b()) !== J ? (Tn = i, i = Re(n, s, o)) : (On = i, i = J)) : (On = i, i = J); i !== J;) r.push(i), i = On, V() !== J ? (t.substr(On, 2) === _e ? (s = _e, On += 2) : (s = J, 0 === Dn && c(Ie)), s === J && (t.substr(On, 2) === Je ? (s = Je, On += 2) : (s = J, 0 === Dn && c(Ue)), s === J && (60 === t.charCodeAt(On) ? (s = Qe, On++) : (s = J, 0 === Dn && c(He)), s === J && (62 === t.charCodeAt(On) ? (s = We, On++) : (s = J, 0 === Dn && c(Ge))))), s !== J && V() !== J && (o = b()) !== J ? (Tn = i, i = Re(n, s, o)) : (On = i, i = J)) : (On = i, i = J);
					r !== J ? (Tn = e, e = n = Ve(n, r)) : (On = e, e = J)
				} else On = e, e = J;
				return Mn[u] = {
						nextPos: On,
						result: e
					}, e
			}
			function b() {
				var e,
					n,
					r,
					i,
					s,
					o,
					u = 33 * On + 10,
					a = Mn[u];
				if (a) return On = a.nextPos, a.result;
				if (e = On, (n = A()) !== J) {
					for (r = [], i = On, V() !== J ? (Ke.test(t.charAt(On)) ? (s = t.charAt(On), On++) : (s = J, 0 === Dn && c(Xe)), s !== J && V() !== J && (o = A()) !== J ? (Tn = i, i = Re(n, s, o)) : (On = i, i = J)) : (On = i, i = J); i !== J;) r.push(i), i = On, V() !== J ? (Ke.test(t.charAt(On)) ? (s = t.charAt(On), On++) : (s = J, 0 === Dn && c(Xe)), s !== J && V() !== J && (o = A()) !== J ? (Tn = i, i = Re(n, s, o)) : (On = i, i = J)) : (On = i, i = J);
					r !== J ? (Tn = e, e = n = Ve(n, r)) : (On = e, e = J)
				} else On = e, e = J;
				return Mn[u] = {
						nextPos: On,
						result: e
					}, e
			}
			function A() {
				var e,
					n,
					r,
					i,
					s,
					o,
					u = 33 * On + 11,
					a = Mn[u];
				if (a) return On = a.nextPos, a.result;
				if (e = On, (n = P()) !== J) {
					for (r = [], i = On, V() !== J ? (Ye.test(t.charAt(On)) ? (s = t.charAt(On), On++) : (s = J, 0 === Dn && c(Ze)), s !== J && V() !== J && (o = P()) !== J ? (Tn = i, i = Re(n, s, o)) : (On = i, i = J)) : (On = i, i = J); i !== J;) r.push(i), i = On, V() !== J ? (Ye.test(t.charAt(On)) ? (s = t.charAt(On), On++) : (s = J, 0 === Dn && c(Ze)), s !== J && V() !== J && (o = P()) !== J ? (Tn = i, i = Re(n, s, o)) : (On = i, i = J)) : (On = i, i = J);
					r !== J ? (Tn = e, e = n = Ve(n, r)) : (On = e, e = J)
				} else On = e, e = J;
				return Mn[u] = {
						nextPos: On,
						result: e
					}, e
			}
			function P() {
				var e,
					n,
					r,
					i = 33 * On + 12,
					s = Mn[i];
				return s ? (On = s.nextPos, s.result) : ((e = k()) === J && (e = On, t.substr(On, 2) === et ? (n = et, On += 2) : (n = J, 0 === Dn && c(tt)), n === J && (t.substr(On, 2) === nt ? (n = nt, On += 2) : (n = J, 0 === Dn && c(rt)), n === J && (it.test(t.charAt(On)) ? (n = t.charAt(On), On++) : (n = J, 0 === Dn && c(st)))), n !== J && V() !== J && (r = P()) !== J ? (Tn = e, e = n = ot(n, r)) : (On = e, e = J)), Mn[i] = {
					nextPos: On,
					result: e
				}, e)
			}
			function k() {
				var e,
					n,
					r,
					i = 33 * On + 13,
					s = Mn[i];
				return s ? (On = s.nextPos, s.result) : (e = On, n = p(), n !== J && V() !== J ? (t.substr(On, 2) === et ? (r = et, On += 2) : (r = J, 0 === Dn && c(tt)), r === J && (t.substr(On, 2) === nt ? (r = nt, On += 2) : (r = J, 0 === Dn && c(rt))), r !== J ? (Tn = e, e = n = ut(n, r)) : (On = e, e = J)) : (On = e, e = J), e === J && (e = p()), Mn[i] = {
					nextPos: On,
					result: e
				}, e)
			}
			function C() {
				var e,
					t,
					n,
					r,
					i = 33 * On + 14,
					s = Mn[i];
				return s ? (On = s.nextPos, s.result) : (e = On, t = On, n = E(), n !== J && V() !== J && (r = j()) !== J ? (Tn = t, t = n = at(n, r)) : (On = t, t = J), t !== J && (n = w()) !== J ? (Tn = e, e = t = ct(t, n)) : (On = e, e = J), Mn[i] = {
					nextPos: On,
					result: e
				}, e)
			}
			function E() {
				var e,
					n,
					r,
					i,
					s,
					o = 33 * On + 15,
					u = Mn[o];
				return u ? (On = u.nextPos, u.result) : (e = On, (n = N()) === J && (n = L()) === J && (n = S()) === J && (n = $()) === J && (n = z()) === J && (n = On, 40 === t.charCodeAt(On) ? (r = lt, On++) : (r = J, 0 === Dn && c(ft)), r !== J && V() !== J && (i = d()) !== J && V() !== J ? (41 === t.charCodeAt(On) ? (s = ht, On++) : (s = J, 0 === Dn && c(dt)), s !== J ? (Tn = n, n = r = W(i)) : (On = n, n = J)) : (On = n, n = J)), n !== J && (r = w()) !== J ? (Tn = e, e = n = pt(n, r)) : (On = e, e = J), Mn[o] = {
					nextPos: On,
					result: e
				}, e)
			}
			function w() {
				var e,
					n,
					r,
					i,
					s,
					o = 33 * On + 16,
					u = Mn[o];
				if (u) return On = u.nextPos, u.result;
				for (e = [], n = On, V() !== J ? (91 === t.charCodeAt(On) ? (r = mt, On++) : (r = J, 0 === Dn && c(vt)), r !== J && V() !== J && (i = d()) !== J && V() !== J ? (93 === t.charCodeAt(On) ? (s = xt, On++) : (s = J, 0 === Dn && c(yt)), s !== J ? (Tn = n, n = gt(i)) : (On = n, n = J)) : (On = n, n = J)) : (On = n, n = J), n === J && (n = On, V() !== J ? (46 === t.charCodeAt(On) ? (r = bt, On++) : (r = J, 0 === Dn && c(At)), r !== J && V() !== J && (i = L()) !== J ? (Tn = n, n = Pt(i)) : (On = n, n = J)) : (On = n, n = J)); n !== J;) e.push(n), n = On, V() !== J ? (91 === t.charCodeAt(On) ? (r = mt, On++) : (r = J, 0 === Dn && c(vt)), r !== J && V() !== J && (i = d()) !== J && V() !== J ? (93 === t.charCodeAt(On) ? (s = xt, On++) : (s = J, 0 === Dn && c(yt)), s !== J ? (Tn = n, n = gt(i)) : (On = n, n = J)) : (On = n, n = J)) : (On = n, n = J), n === J && (n = On, V() !== J ? (46 === t.charCodeAt(On) ? (r = bt, On++) : (r = J, 0 === Dn && c(At)), r !== J && V() !== J && (i = L()) !== J ? (Tn = n, n = Pt(i)) : (On = n, n = J)) : (On = n, n = J));
				return Mn[o] = {
						nextPos: On,
						result: e
					}, e
			}
			function N() {
				var e,
					n,
					r,
					i,
					s,
					o = 33 * On + 17,
					u = Mn[o];
				return u ? (On = u.nextPos, u.result) : (e = On, t.substr(On, 3) === kt ? (n = kt, On += 3) : (n = J, 0 === Dn && c(Ct)), n !== J && _() !== J && (r = E()) !== J ? (i = On, V() !== J && (s = j()) !== J ? (Tn = i, i = Et(r, s)) : (On = i, i = J), i === J && (i = null), i !== J ? (Tn = e, e = n = wt(r, i)) : (On = e, e = J)) : (On = e, e = J), Mn[o] = {
					nextPos: On,
					result: e
				}, e)
			}
			function j() {
				var e,
					n,
					r,
					i,
					s,
					o,
					u,
					a,
					l = 33 * On + 18,
					f = Mn[l];
				if (f) return On = f.nextPos, f.result;
				if (e = On, 40 === t.charCodeAt(On) ? (n = lt, On++) : (n = J, 0 === Dn && c(ft)), n !== J && V() !== J ? (41 === t.charCodeAt(On) ? (r = ht, On++) : (r = J, 0 === Dn && c(dt)), r !== J ? (Tn = e, e = n = Nt()) : (On = e, e = J)) : (On = e, e = J), e === J)
					if (e = On, 40 === t.charCodeAt(On) ? (n = lt, On++) : (n = J, 0 === Dn && c(ft)), n !== J)
						if (V() !== J)
							if ((r = d()) !== J) {
								for (i = [], s = On, (o = V()) !== J ? (44 === t.charCodeAt(On) ? (u = jt, On++) : (u = J, 0 === Dn && c(Lt)), u !== J && V() !== J && (a = d()) !== J ? (Tn = s, s = o = $t(r, a)) : (On = s, s = J)) : (On = s, s = J); s !== J;) i.push(s), s = On, (o = V()) !== J ? (44 === t.charCodeAt(On) ? (u = jt, On++) : (u = J, 0 === Dn && c(Lt)), u !== J && V() !== J && (a = d()) !== J ? (Tn = s, s = o = $t(r, a)) : (On = s, s = J)) : (On = s, s = J);
								i !== J && (s = V()) !== J ? (41 === t.charCodeAt(On) ? (o = ht, On++) : (o = J, 0 === Dn && c(dt)), o !== J ? (Tn = e, e = n = qt(r, i)) : (On = e, e = J)) : (On = e, e = J)
							} else On = e, e = J;
						else On = e, e = J;
					else On = e, e = J;
				return Mn[l] = {
						nextPos: On,
						result: e
					}, e
			}
			function L() {
				var e,
					n,
					r,
					i,
					s,
					o = 33 * On + 19,
					u = Mn[o];
				if (u) return On = u.nextPos, u.result;
				if (Dn++, e = On, n = On, Dn++, r = F(), Dn--, r === J ? n = void 0 : (On = n, n = J), n !== J)
					if (Ot.test(t.charAt(On)) ? (r = t.charAt(On), On++) : (r = J, 0 === Dn && c(Tt)), r !== J) {
						for (i = [], St.test(t.charAt(On)) ? (s = t.charAt(On), On++) : (s = J, 0 === Dn && c(Ft)); s !== J;) i.push(s), St.test(t.charAt(On)) ? (s = t.charAt(On), On++) : (s = J, 0 === Dn && c(Ft));
						i !== J ? (Tn = e, e = n = Bt(r, i)) : (On = e, e = J)
					} else On = e, e = J;
				else On = e, e = J;
				return Dn--, e === J && (n = J, 0 === Dn && c(zt)), Mn[o] = {
						nextPos: On,
						result: e
					}, e
			}
			function $() {
				var e,
					n,
					r,
					i,
					s = 33 * On + 20,
					o = Mn[s];
				return o ? (On = o.nextPos, o.result) : (e = On, 91 === t.charCodeAt(On) ? (n = mt, On++) : (n = J, 0 === Dn && c(vt)), n !== J && V() !== J ? (93 === t.charCodeAt(On) ? (r = xt, On++) : (r = J, 0 === Dn && c(yt)), r !== J ? (Tn = e, e = n = Dt()) : (On = e, e = J)) : (On = e, e = J), e === J && (e = On, 91 === t.charCodeAt(On) ? (n = mt, On++) : (n = J, 0 === Dn && c(vt)), n !== J && V() !== J && (r = q()) !== J && V() !== J ? (93 === t.charCodeAt(On) ? (i = xt, On++) : (i = J, 0 === Dn && c(yt)), i !== J ? (Tn = e, e = n = Mt(r)) : (On = e, e = J)) : (On = e, e = J)), Mn[s] = {
					nextPos: On,
					result: e
				}, e)
			}
			function q() {
				var e,
					n,
					r,
					i,
					s,
					o,
					u = 33 * On + 21,
					a = Mn[u];
				if (a) return On = a.nextPos, a.result;
				if (e = On, (n = d()) !== J) {
					for (r = [], i = On, V() !== J ? (44 === t.charCodeAt(On) ? (s = jt, On++) : (s = J, 0 === Dn && c(Lt)), s !== J && V() !== J && (o = d()) !== J ? (Tn = i, i = Rt(n, o)) : (On = i, i = J)) : (On = i, i = J); i !== J;) r.push(i), i = On, V() !== J ? (44 === t.charCodeAt(On) ? (s = jt, On++) : (s = J, 0 === Dn && c(Lt)), s !== J && V() !== J && (o = d()) !== J ? (Tn = i, i = Rt(n, o)) : (On = i, i = J)) : (On = i, i = J);
					r !== J ? (Tn = e, e = n = qt(n, r)) : (On = e, e = J)
				} else On = e, e = J;
				return Mn[u] = {
						nextPos: On,
						result: e
					}, e
			}
			function z() {
				var e,
					n,
					r,
					i,
					s,
					o,
					u = 33 * On + 22,
					a = Mn[u];
				return a ? (On = a.nextPos, a.result) : (e = On, 123 === t.charCodeAt(On) ? (n = Vt, On++) : (n = J, 0 === Dn && c(_t)), n !== J && V() !== J ? (125 === t.charCodeAt(On) ? (r = It, On++) : (r = J, 0 === Dn && c(Jt)), r !== J ? (Tn = e, e = n = Ut()) : (On = e, e = J)) : (On = e, e = J), e === J && (e = On, 123 === t.charCodeAt(On) ? (n = Vt, On++) : (n = J, 0 === Dn && c(_t)), n !== J && V() !== J && (r = O()) !== J && V() !== J ? (i = On, 44 === t.charCodeAt(On) ? (s = jt, On++) : (s = J, 0 === Dn && c(Lt)), s !== J && (o = V()) !== J ? i = s = [s, o] : (On = i, i = J), i === J && (i = null), i !== J ? (125 === t.charCodeAt(On) ? (s = It, On++) : (s = J, 0 === Dn && c(Jt)), s !== J ? (Tn = e, e = n = Qt(r)) : (On = e, e = J)) : (On = e, e = J)) : (On = e, e = J)), Mn[u] = {
					nextPos: On,
					result: e
				}, e)
			}
			function O() {
				var e,
					n,
					r,
					i,
					s,
					o,
					u = 33 * On + 23,
					a = Mn[u];
				if (a) return On = a.nextPos, a.result;
				if (e = On, (n = T()) !== J) {
					for (r = [], i = On, V() !== J ? (44 === t.charCodeAt(On) ? (s = jt, On++) : (s = J, 0 === Dn && c(Lt)), s !== J && V() !== J && (o = T()) !== J ? (Tn = i, i = Ht(n, o)) : (On = i, i = J)) : (On = i, i = J); i !== J;) r.push(i), i = On, V() !== J ? (44 === t.charCodeAt(On) ? (s = jt, On++) : (s = J, 0 === Dn && c(Lt)), s !== J && V() !== J && (o = T()) !== J ? (Tn = i, i = Ht(n, o)) : (On = i, i = J)) : (On = i, i = J);
					r !== J ? (Tn = e, e = n = qt(n, r)) : (On = e, e = J)
				} else On = e, e = J;
				return Mn[u] = {
						nextPos: On,
						result: e
					}, e
			}
			function T() {
				var e,
					n,
					r,
					i,
					s = 33 * On + 24,
					o = Mn[s];
				return o ? (On = o.nextPos, o.result) : (e = On, (n = L()) === J && (n = R()) === J && (n = B()), n !== J && V() !== J ? (58 === t.charCodeAt(On) ? (r = Pe, On++) : (r = J, 0 === Dn && c(ke)), r !== J && V() !== J && (i = d()) !== J ? (Tn = e, e = n = Wt(n, i)) : (On = e, e = J)) : (On = e, e = J), Mn[s] = {
					nextPos: On,
					result: e
				}, e)
			}
			function S() {
				var e,
					t = 33 * On + 25,
					n = Mn[t];
				return n ? (On = n.nextPos, n.result) : ((e = F()) === J && (e = B()) === J && (e = R()), Mn[t] = {
					nextPos: On,
					result: e
				}, e)
			}
			function F() {
				var e,
					n,
					r = 33 * On + 26,
					i = Mn[r];
				return i ? (On = i.nextPos, i.result) : (e = On, t.substr(On, 4) === Gt ? (n = Gt, On += 4) : (n = J, 0 === Dn && c(Kt)), n !== J && (Tn = e, n = Xt()), (e = n) === J && (e = On, t.substr(On, 4) === Yt ? (n = Yt, On += 4) : (n = J, 0 === Dn && c(Zt)), n !== J && (Tn = e, n = en()), (e = n) === J && (e = On, t.substr(On, 5) === tn ? (n = tn, On += 5) : (n = J, 0 === Dn && c(nn)), n !== J && (Tn = e, n = rn()), e = n)), Mn[r] = {
					nextPos: On,
					result: e
				}, e)
			}
			function B() {
				var e,
					n,
					r,
					i,
					s,
					o = 33 * On + 27,
					u = Mn[o];
				if (u) return On = u.nextPos, u.result;
				if (Dn++, e = On, (n = D()) !== J)
					if (46 === t.charCodeAt(On) ? (r = bt, On++) : (r = J, 0 === Dn && c(At)), r !== J) {
						for (i = [], on.test(t.charAt(On)) ? (s = t.charAt(On), On++) : (s = J, 0 === Dn && c(un)); s !== J;) i.push(s), on.test(t.charAt(On)) ? (s = t.charAt(On), On++) : (s = J, 0 === Dn && c(un));
						i !== J ? ((s = M()) === J && (s = null), s !== J ? (Tn = e, e = n = an()) : (On = e, e = J)) : (On = e, e = J)
					} else On = e, e = J;
				else On = e, e = J;
				if (e === J) {
					if (e = On, 46 === t.charCodeAt(On) ? (n = bt, On++) : (n = J, 0 === Dn && c(At)), n !== J) {
						if (r = [], on.test(t.charAt(On)) ? (i = t.charAt(On), On++) : (i = J, 0 === Dn && c(un)), i !== J)
							for (; i !== J;) r.push(i), on.test(t.charAt(On)) ? (i = t.charAt(On), On++) : (i = J, 0 === Dn && c(un));
						else
							r = J;
						r !== J ? ((i = M()) === J && (i = null), i !== J ? (Tn = e, e = n = an()) : (On = e, e = J)) : (On = e, e = J)
					} else On = e, e = J;
					e === J && (e = On, (n = D()) !== J ? ((r = M()) === J && (r = null), r !== J ? (Tn = e, e = n = an()) : (On = e, e = J)) : (On = e, e = J))
				}
				return Dn--, e === J && (n = J, 0 === Dn && c(sn)), Mn[o] = {
						nextPos: On,
						result: e
					}, e
			}
			function D() {
				var e,
					n,
					r,
					i,
					s = 33 * On + 28,
					o = Mn[s];
				if (o) return On = o.nextPos, o.result;
				if (48 === t.charCodeAt(On) ? (e = cn, On++) : (e = J, 0 === Dn && c(ln)), e === J)
					if (e = On, fn.test(t.charAt(On)) ? (n = t.charAt(On), On++) : (n = J, 0 === Dn && c(hn)), n !== J) {
						for (r = [], on.test(t.charAt(On)) ? (i = t.charAt(On), On++) : (i = J, 0 === Dn && c(un)); i !== J;) r.push(i), on.test(t.charAt(On)) ? (i = t.charAt(On), On++) : (i = J, 0 === Dn && c(un));
						r !== J ? e = n = [n, r] : (On = e, e = J)
					} else On = e, e = J;
				return Mn[s] = {
						nextPos: On,
						result: e
					}, e
			}
			function M() {
				var e,
					n,
					r,
					i,
					s,
					o = 33 * On + 29,
					u = Mn[o];
				if (u) return On = u.nextPos, u.result;
				if (e = On, t.substr(On, 1).toLowerCase() === dn ? (n = t.charAt(On), On++) : (n = J, 0 === Dn && c(pn)), n !== J)
					if (Ke.test(t.charAt(On)) ? (r = t.charAt(On), On++) : (r = J, 0 === Dn && c(Xe)), r === J && (r = null), r !== J) {
						if (i = [], on.test(t.charAt(On)) ? (s = t.charAt(On), On++) : (s = J, 0 === Dn && c(un)), s !== J)
							for (; s !== J;) i.push(s), on.test(t.charAt(On)) ? (s = t.charAt(On), On++) : (s = J, 0 === Dn && c(un));
						else
							i = J;
						i !== J ? e = n = [n, r, i] : (On = e, e = J)
					} else On = e, e = J;
				else On = e, e = J;
				return Mn[o] = {
						nextPos: On,
						result: e
					}, e
			}
			function R() {
				var e,
					n,
					r,
					i,
					s,
					o = 33 * On + 30,
					u = Mn[o];
				if (u) return On = u.nextPos, u.result;
				if (Dn++, e = On, 34 === t.charCodeAt(On) ? (n = vn, On++) : (n = J, 0 === Dn && c(xn)), n !== J) {
					for (r = [], i = On, t.substr(On, 2) === yn ? (s = yn, On += 2) : (s = J, 0 === Dn && c(gn)), s !== J && (Tn = i, s = bn()), (i = s) === J && (An.test(t.charAt(On)) ? (i = t.charAt(On), On++) : (i = J, 0 === Dn && c(Pn))); i !== J;) r.push(i), i = On, t.substr(On, 2) === yn ? (s = yn, On += 2) : (s = J, 0 === Dn && c(gn)), s !== J && (Tn = i, s = bn()), (i = s) === J && (An.test(t.charAt(On)) ? (i = t.charAt(On), On++) : (i = J, 0 === Dn && c(Pn)));
					r !== J ? (34 === t.charCodeAt(On) ? (i = vn, On++) : (i = J, 0 === Dn && c(xn)), i !== J ? (Tn = e, e = n = kn(r)) : (On = e, e = J)) : (On = e, e = J)
				} else On = e, e = J;
				if (e === J)
					if (e = On, 39 === t.charCodeAt(On) ? (n = Cn, On++) : (n = J, 0 === Dn && c(En)), n !== J) {
						for (r = [], i = On, t.substr(On, 2) === wn ? (s = wn, On += 2) : (s = J, 0 === Dn && c(Nn)), s !== J && (Tn = i, s = jn()), (i = s) === J && (Ln.test(t.charAt(On)) ? (i = t.charAt(On), On++) : (i = J, 0 === Dn && c($n))); i !== J;) r.push(i), i = On, t.substr(On, 2) === wn ? (s = wn, On += 2) : (s = J, 0 === Dn && c(Nn)), s !== J && (Tn = i, s = jn()), (i = s) === J && (Ln.test(t.charAt(On)) ? (i = t.charAt(On), On++) : (i = J, 0 === Dn && c($n)));
						r !== J ? (39 === t.charCodeAt(On) ? (i = Cn, On++) : (i = J, 0 === Dn && c(En)), i !== J ? (Tn = e, e = n = kn(r)) : (On = e, e = J)) : (On = e, e = J)
					} else On = e, e = J;
				return Dn--, e === J && (n = J, 0 === Dn && c(mn)), Mn[o] = {
						nextPos: On,
						result: e
					}, e
			}
			function V() {
				var e,
					t = 33 * On + 31,
					n = Mn[t];
				return n ? (On = n.nextPos, n.result) : ((e = _()) === J && (e = null), Mn[t] = {
					nextPos: On,
					result: e
				}, e)
			}
			function _() {
				var e,
					n,
					r = 33 * On + 32,
					i = Mn[r];
				if (i) return On = i.nextPos, i.result;
				if (e = [], qn.test(t.charAt(On)) ? (n = t.charAt(On), On++) : (n = J, 0 === Dn && c(zn)), n !== J)
					for (; n !== J;) e.push(n), qn.test(t.charAt(On)) ? (n = t.charAt(On), On++) : (n = J, 0 === Dn && c(zn));
				else
					e = J;
				return Mn[r] = {
						nextPos: On,
						result: e
					}, e
			}
			n = void 0 !== n ? n : {};var I,
				J = {},
				U = {
					Text: l,
					Expression: d
				},
				Q = l,
				H = function(e) {
					return e.reduce((e, t) => {
						"string" == typeof t && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t : e.push(t);return e
					}, [])
				},
				W = function(e) {
					return e
				},
				G = {
					type: "any"
				},
				K = function(e) {
					return e
				},
				X = "{{{",
				Y = i("{{{", !1),
				Z = "}}}",
				ee = i("}}}", !1),
				te = function(e) {
					return {
						html: !0,
						expression: e
					}
				},
				ne = "{{",
				re = i("{{", !1),
				ie = "}}",
				se = i("}}", !1),
				oe = function(e) {
					return {
						html: !1,
						expression: e
					}
				},
				ue = "=",
				ae = i("=", !1),
				ce = "*=",
				le = i("*=", !1),
				fe = "/=",
				he = i("/=", !1),
				de = "%=",
				pe = i("%=", !1),
				me = "+=",
				ve = i("+=", !1),
				xe = "-=",
				ye = i("-=", !1),
				ge = function(e, t, n) {
					return {
						type: "AssignmentExpression",
						operator: t,
						left: e,
						right: n
					}
				},
				be = "?",
				Ae = i("?", !1),
				Pe = ":",
				ke = i(":", !1),
				Ce = function(e, t, n) {
					return {
						type: "ConditionalExpression",
						test: e,
						consequent: t,
						alternate: n
					}
				},
				Ee = "||",
				we = i("||", !1),
				Ne = function(e, t) {
					return {
						operator: "||",
						arg: t
					}
				},
				je = function(e, t) {
					return Rn("LogicalExpression", e, t)
				},
				Le = "&&",
				$e = i("&&", !1),
				qe = function(e, t) {
					return {
						operator: "&&",
						arg: t
					}
				},
				ze = "===",
				Oe = i("===", !1),
				Te = "!==",
				Se = i("!==", !1),
				Fe = "==",
				Be = i("==", !1),
				De = "!=",
				Me = i("!=", !1),
				Re = function(e, t, n) {
					return {
						operator: t,
						arg: n
					}
				},
				Ve = function(e, t) {
					return Rn("BinaryExpression", e, t)
				},
				_e = "<=",
				Ie = i("<=", !1),
				Je = ">=",
				Ue = i(">=", !1),
				Qe = "<",
				He = i("<", !1),
				We = ">",
				Ge = i(">", !1),
				Ke = /^[+\-]/,
				Xe = s(["+", "-"], !1, !1),
				Ye = /^[*\/%]/,
				Ze = s(["*", "/", "%"], !1, !1),
				et = "++",
				tt = i("++", !1),
				nt = "--",
				rt = i("--", !1),
				it = /^[+!\-]/,
				st = s(["+", "!", "-"], !1, !1),
				ot = function(e, t) {
					return {
						type: "++" === e || "--" === e ? "UpdateExpression" : "UnaryExpression",
						operator: e,
						argument: t,
						prefix: !0
					}
				},
				ut = function(e, t) {
					return {
						type: "UpdateExpression",
						operator: t,
						argument: e,
						prefix: !1
					}
				},
				at = function(e, t) {
					return {
						type: "CallExpression",
						callee: e,
						arguments: t
					}
				},
				ct = function(e, t) {
					return t.reduce(function(e, t) {
						return {
							type: "MemberExpression",
							property: t,
							object: e
						}
					}, e)
				},
				lt = "(",
				ft = i("(", !1),
				ht = ")",
				dt = i(")", !1),
				pt = function(e, t) {
					return t.reduce(function(e, t) {
						return {
							type: "MemberExpression",
							object: e,
							property: t
						}
					}, e)
				},
				mt = "[",
				vt = i("[", !1),
				xt = "]",
				yt = i("]", !1),
				gt = function(e) {
					return e
				},
				bt = ".",
				At = i(".", !1),
				Pt = function(e) {
					return {
						type: "Identifier",
						name: e.name
					}
				},
				kt = "new",
				Ct = i("new", !1),
				Et = function(e, t) {
					return t
				},
				wt = function(e, t) {
					return {
						type: "NewExpression",
						callee: e,
						arguments: t || []
					}
				},
				Nt = function() {
					return []
				},
				jt = ",",
				Lt = i(",", !1),
				$t = function(e, t) {
					return t
				},
				qt = function(e, t) {
					return [e].concat(t)
				},
				zt = o("identifier"),
				Ot = /^[a-z$_]/i,
				Tt = s([["a", "z"], "$", "_"], !1, !0),
				St = /^[a-z$_0-9]/i,
				Ft = s([["a", "z"], "$", "_", ["0", "9"]], !1, !0),
				Bt = function(e, t) {
					return {
						type: "Identifier",
						name: e + t.join("")
					}
				},
				Dt = function() {
					return {
						type: "ArrayExpression",
						elements: []
					}
				},
				Mt = function(e) {
					return {
						type: "ArrayExpression",
						elements: e
					}
				},
				Rt = function(e, t) {
					return t
				},
				Vt = "{",
				_t = i("{", !1),
				It = "}",
				Jt = i("}", !1),
				Ut = function() {
					return {
						type: "ObjectExpression",
						properties: []
					}
				},
				Qt = function(e) {
					return {
						type: "ObjectExpression",
						properties: e
					}
				},
				Ht = function(e, t) {
					return t
				},
				Wt = function(e, t) {
					return {
						type: "Property",
						key: e,
						value: t
					}
				},
				Gt = "null",
				Kt = i("null", !1),
				Xt = function() {
					return {
						type: "Literal",
						value: null
					}
				},
				Yt = "true",
				Zt = i("true", !1),
				en = function() {
					return {
						type: "Literal",
						value: !0
					}
				},
				tn = "false",
				nn = i("false", !1),
				rn = function() {
					return {
						type: "Literal",
						value: !1
					}
				},
				sn = o("number"),
				on = /^[0-9]/,
				un = s([["0", "9"]], !1, !1),
				an = function() {
					return {
						type: "Literal",
						value: parseFloat(r())
					}
				},
				cn = "0",
				ln = i("0", !1),
				fn = /^[1-9]/,
				hn = s([["1", "9"]], !1, !1),
				dn = "e",
				pn = i("e", !0),
				mn = o("string"),
				vn = '"',
				xn = i('"', !1),
				yn = '\\"',
				gn = i('\\"', !1),
				bn = function() {
					return '"'
				},
				An = /^[^"]/,
				Pn = s(['"'], !0, !1),
				kn = function(e) {
					return {
						type: "Literal",
						value: e.join("")
					}
				},
				Cn = "'",
				En = i("'", !1),
				wn = "\\'",
				Nn = i("\\'", !1),
				jn = function() {
					return "'"
				},
				Ln = /^[^'']/,
				$n = s(["'", "'"], !0, !1),
				qn = /^[\t ]/,
				zn = s(["\t", " "], !1, !1),
				On = 0,
				Tn = 0,
				Sn = [{
					line: 1,
					column: 1
				}],
				Fn = 0,
				Bn = [],
				Dn = 0,
				Mn = {};
			if ("startRule" in n) {
				if (!(n.startRule in U))
					throw new Error("Can't start parsing from rule \"" + n.startRule + '".');
				Q = U[n.startRule]
			}
			var Rn = function(e, t, n) {
				return 0 === n.length ? t : n.reduce(function(t, n) {
					return {
						type: e,
						operator: n.operator,
						left: t,
						right: n.arg
					}
				}, t)
			};
			if ((I = Q()) !== J && On === t.length) return I;
			throw I !== J && On < t.length && c({
				type: "end"
			}), function(t, n, r) {
				return new e(e.buildMessage(t, n), t, n, r)
			}(Bn, Fn < t.length ? t.charAt(Fn) : null, Fn < t.length ? a(Fn, Fn + 1) : a(Fn, Fn))
		}
		return function(e, t) {
				function n() {
					this.constructor = e
				}
				n.prototype = t.prototype, e.prototype = new n
			}(e, Error), e.buildMessage = function(e, t) {
				function n(e) {
					return e.charCodeAt(0).toString(16).toUpperCase()
				}
				function r(e) {
					return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
						return "\\x0" + n(e)
					}).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
						return "\\x" + n(e)
					})
				}
				function i(e) {
					return e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
						return "\\x0" + n(e)
					}).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
						return "\\x" + n(e)
					})
				}
				function s(e) {
					return o[e.type](e)
				}
				var o = {
					literal: function(e) {
						return '"' + r(e.text) + '"'
					},
					class: function(e) {
						var t,
							n = "";
						for (t = 0; t < e.parts.length; t++) n += e.parts[t] instanceof Array ? i(e.parts[t][0]) + "-" + i(e.parts[t][1]) : i(e.parts[t]);
						return "[" + (e.inverted ? "^" : "") + n + "]"
					},
					any: function(e) {
						return "any character"
					},
					end: function(e) {
						return "end of input"
					},
					other: function(e) {
						return e.description
					}
				};
				return "Expected " + function(e) {
						var t,
							n,
							r = new Array(e.length);
						for (t = 0; t < e.length; t++) r[t] = s(e[t]);
						if (r.sort(), r.length > 0) {
							for (t = 1, n = 1; t < r.length; t++) r[t - 1] !== r[t] && (r[n] = r[t], n++);
							r.length = n
						}
						switch (r.length) {
							case 1:
								return r[0];case 2:
								return r[0] + " or " + r[1];default:
								return r.slice(0, -1).join(", ") + ", or " + r[r.length - 1]
						}
					}(e) + " but " + function(e) {
						return e ? '"' + r(e) + '"' : "end of input"
					}(t) + " found."
			}, {
				SyntaxError: e,
				parse: t
		}
	}();
	const s = function(e) {
			let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Expression";
			return i.parse(e, {
				startRule: t
			})
		},
		o = function t(n, r) {
			let i,
				s,
				o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
				u = n.type,
				a = n.operator;
			if ("Literal" === u)
				i = n.value;
			else if ("ArrayExpression" === u)
				i = n.elements.map(e => t(e, r).value);
			else if ("ObjectExpression" === u)
				i = Object.assign({}, ...n.properties.map(e => ({
					[e.key.name || e.key.value]: t(e.value, r).value
				})));
			else if ("Identifier" === u) {
				let e = r;
				for (; e && o && void 0 === e[n.name];) e = e.$parent;
				e || (e = r), i = e[n.name], s = (t => e[n.name] = t)
			} else if ("MemberExpression" === u) {
				let e = t(n.object, r).value,
					o = "Identifier" === n.property.type ? n.property.name : t(n.property, r).value;
				i = void 0 !== e ? e[o] : void 0, s = (t => e[o] = t)
			} else if ("ConditionalExpression" === u)
				i = t(n.test, r).value ? t(n.consequent, r).value : t(n.alternate, r).value;
			else if ("UnaryExpression" === u || "UpdateExpression" === u) {
				let e = t(n.argument, r),
					o = e.value;
				i = "!" === a ? !o : "+" === a ? +o : "-" === a ? -o : "++" === a ? o + 1 : "--" === a ? o - 1 : null, "UpdateExpression" === u && ((s = e.set) && (i = s(i)), n.prefix || (i += "++" === a ? -1 : 1))
			} else if ("BinaryExpression" === u || "LogicalExpression" === u || "AssignmentExpression" === u) {
				let o = t(n.left, r, "AssignmentExpression" !== u),
					c = o.value,
					l = t(n.right, r).value;
				i = "===" === a ? c === l : "!==" === a ? c !== l : "==" === a ? c == l : "!=" === a ? c != l : "<" === a ? c < l : ">" === a ? c > l : "<=" === a ? c <= l : ">=" === a ? c >= l : "&&" === a ? c && l : "||" === a ? c || l : "+" === a ? "string" == typeof (c + l) ? e(c) + e(l) : c + l : "-" === a ? c - l : "*" === a ? c * l : "/" === a ? c / l : "%" === a ? c % l : "*=" === a ? c * l : "/=" === a ? c / l : "%=" === a ? c % l : "+=" === a ? c + l : "-=" === a ? c - l : "=" === a ? l : null, "AssignmentExpression" === u && (i = (s = o.set)(i))
			} else if ("CallExpression" === u || "NewExpression" === u) {
				let e = n.callee.object ? t(n.callee.object, r).value : r,
					s = t(n.callee, r).value,
					o = n.arguments.map(e => t(e, r).value);
				i = s ? "CallExpression" === u ? s.apply(e, o) : new (s.bind.apply(s, o)) : void 0
			}
			return {
				value: i,
				set: s
			}
		};
	var u = {
		prefix: "z-",
		directives: [],
		inlineParser: void 0
	};
	const a = e => ({
			name: e.name,
			value: e.value
		}),
		c = (e, t, n) => {
			e.binds.forEach(n => l(e, t, n));e.children.forEach(e => e[t + "Binds"](n))
		},
		l = (e, t, n) => {
			if (!n.directive[t]) return;
			"initialize" === t ? n.directive[t].call(n, e.node, ...n.args) : n.directive[t].call(n, e.scope, e.node, ...n.args)
		},
		f = (e, t, n) => {
			if (e instanceof d) return e;
			"string" == typeof e ? e = document.querySelector(e) : e.jquery && (e = e[0]);return new d(e, t, n)
		};
	let h = 0;
	class d {
		constructor(e, t) {
			let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
			if (this.__id = ++h, this.node = e, this.children = [], this.binds = [], this.type = e.nodeType, e.vnode && !t)
				n ? (this.parent = e.vnode, e.vnode = this, this.type = this.parent.type, this.children = this.parent.children, this.binds = this.parent.binds, this.parent.children = [], this.parent.binds = []) : (e.vnode.parent = this, this.pointer = e.vnode);
			else if (t) {
				e.vnode = this, this.blocked = t.blocked, this.type = t.type, t.binds.forEach(e => {
					let t = e.directive,
						n = e.args;
					this.bindDirective(t, ...n)
				}), t.attributes && (this.attributes = t.attributes.map(a), this.removedAttrs = t.removedAttrs.map(a));
				let n = Array.from(e.childNodes).filter(e => 1 === e.nodeType || 3 === e.nodeType);
				t.children.forEach(t => {
					if (!t.fragment && 0 === n.length) return;
					this.children.push(f(t.fragment ? e : n.shift(), t))
				})
			} else e.vnode = this, this.initialize()
		}
		initialize() {
			let e = this.node;
			if (this.type = e.nodeType, 1 === this.type) this.tag = e.tagName, this.attributes = Array.from(e.attributes).map(a), this.removedAttrs = [], u.directives.forEach(t => {
					let n = this.tag.match(new RegExp(`^${t.tagQuery.replace("{prefix}", u.prefix)}$`, "i")),
						r = n;
					for (; r && !this.blocked;) {
						let i = t.attributeQueries.map(e => {
							if (!r) return;
							let t,
								n = e.name.replace("{prefix}", u.prefix);
							this.attributes.find(e => {
								t = e.name.match(new RegExp(`^${n}$`, "i"));return t
							});
							if (t) return {
									name: t[0],
									match: t.slice(1)
								};
							if (e.defaultValue) return {
									name: n,
									ast: e.defaultValue,
									default: !0
								};
							r = !1
						});
						if (!r) break;
						let o = {
								name: n[0],
								match: n.slice(1)
							},
							c = i.map(t => {
								if (!t.default) {
									let n = this.attributes.find(e => e.name === t.name);
									t.ast = s(n.value || "undefined"), this.attributes.splice(this.attributes.indexOf(n), 1), this.removedAttrs.push(a(n)), e.removeAttribute(t.name)
								}
								return t
							});
						if (this.bindDirective(t, o, ...c), 0 === i.length) break
					}
				}), !this.blocked && e.childNodes && Array.from(e.childNodes).filter(e => 1 === e.nodeType || 3 === e.nodeType).map(e => this.children.push(f(e)));
			else if (3 === this.type && e.nodeValue.includes("{{")) {
				let t = s(e.nodeValue, "Text");
				if (1 === t.length) {
					if ("string" != typeof t[0]) {
						if (t[0].html) {
							let t = e;
							e = this.node = document.createElement("span"), t.parentNode.replaceChild(e, t)
						} else
							e.textContent = "";
						this.bindDirective(u.inlineParser, null, {
							match: [t[0].html ? "html" : "text"],
							ast: t[0].expression
						})
					}
				} else {
					let n = document.createDocumentFragment();
					this.fragment = !0, t.forEach(e => {
						let t = "string" == typeof e ? document.createTextNode(e) : e.html ? document.createElement("span") : document.createTextNode(""),
							r = f(t);
						"string" != typeof e && r.bindDirective(u.inlineParser, null, {
							match: [e.html ? "html" : "text"],
							ast: e.expression
						});n.appendChild(t);this.children.push(r)
					}), e.parentNode.replaceChild(n, e)
				}
			}
		}
		bindDirective(e) {
			for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
			let i = {
				directive: e,
				args: n = n.map(e => {
					e = Object.assign({}, e);
					e.value = (() => o(e.ast, this.scope).value);return e
				})
			};
			if (e.block && (this.blocked = !0), e.template) {
				let t = e.template.clone();
				Array.from(this.node.attributes).map(e => {
					t.node.setAttribute(e.name, e.value)
				}), this.originalNode = this.node, this.node.parentNode && this.node.parentNode.replaceChild(t.node, this.node), this.node = t.node, this.node.vnode = this, this.binds = this.binds.concat(t.binds), this.type = t.type, this.children = t.children
			}
			this.binds.push(i), l(this, "initialize", i)
		}
		clone() {
			return f(this.node.cloneNode(!0), this)
		}
		createBinds(e) {
			this.scope = e, c(this, "create", e)
		}
		updateBinds() {
			c(this, "update"), this.pointer && this.pointer.updateBinds()
		}
		destroyBinds() {
			c(this, "destroy"), this.removedAttrs && this.removedAttrs.forEach(e => this.node.setAttribute(e.name, e.value))
		}
	}
	let p,
		m = 0;
	const v = (e, t) => {
			e[t] && e[t].forEach(e => e())
		},
		x = function e(t, n) {
			let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
			if (!r.includes(n)) return r = r.concat([n]), new Proxy(n, {
						get(e, n, r) {
							const i = Reflect.get(e, n, r);
							return e instanceof Date && "string" == typeof n ? (n.startsWith("set") && t.$(!0), i.bind(e)) : e instanceof Array || "function" != typeof i ? i : i.bind(e)
						},
						set(n, i, s, o) {
							p || ("object" == typeof s && null !== s && (s = e(t, s, r)), t.$(!0)), p = !0;
							const u = Reflect.set(n, i, s, o);
							return p = !1, u
						},
						deleteProperty(e, n) {
							p || t.$(!0), p = !0;
							const r = Reflect.deleteProperty(e, n);
							return p = !1, r
						}
					})
		},
		y = (e, n, i) => {
			let u,
				a = f(e, null, !0),
				c = {},
				l = [],
				h = Object.assign({
					$id: m++,
					$(e) {
						if (a) return e ? u || (u = r(() => h.$())) : (u && (u = u()), a.updateBinds(h), v(c, "update"), l.forEach(e => {
									const t = o(e.ast, h).value;
									t !== e.val && (e.val = t, e.cb(t))
								})), h
					},
					$destroy() {
						return a.destroyBinds(h), v(c, "destroy"), a = void 0, h
					},
					$on(e, t) {
						return c[e] = [t].concat(c[e] || []), h
					},
					$off(e, n) {
						return t(c[e], n), h
					},
					$watch(e, t) {
						return l.push({
								expr: e,
								ast: s(e),
								cb: t
							}), h
					},
					$unwatch(e, n) {
						const r = l.find(t => t.expr === e && t.cb === n);
						return t(l, r), h
					},
					get $parent() {
						return i || a.parent && a.parent.scope || y.root
					}
				}, n);
			a.createBinds(h);h.$(!0);return x(h, h)
		},
		g = e => {
			let t = e.query.match(/<([^\s>="]+)((?:\s+[^\s>="]+(?:\s*=\s*"[^"]*")?)*)>/);
			e.tagQuery = t[1];
			e.attributeQueries = [];t[2].replace(/\s+([^\s>="]+)(?:\s*=\s*"([^"]*)")?/g, (t, n, r) => {
				void 0 !== r && (r = s(r || "undefined"));e.attributeQueries.push({
					name: n,
					defaultValue: r
				})
			});e.inline && (u.inlineParser = e);
			if (e.template) {
				e.block = !0;
				let t = document.createElement("span");
				t.innerHTML = e.template, 1 === t.childNodes.length && (t = t.childNodes[0]), e.template = f(t)
			}
			e.order || (e.order = 100);let n = u.directives.findIndex(t => e.order < t.order);
			u.directives.splice(-1 === n ? u.directives.length : n, 0, e);return e
		};
	Object.assign(y, {
		version: "0.6.3",
		directive: g,
		__evaluate: o,
		__parse: s,
		root: {
			$parent: "undefined" != typeof global ? global : window,
			number: function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
				return Number(e).toFixed(t)
			},
			percent: function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
				return `${Number(100 * e).toFixed(t)}%`
			}
		}
	}), Object.defineProperty(y, "prefix", {
		get() {
			return u.prefix
		},
		set(e) {
			u.prefix = e
		}
	});
	const b = ["selected", "checked", "disabled", "readonly", "multiple", "ismap", "defer", "noresize"];
	return [{
			query: "<.+ {prefix}(text|html)>",
			block: !0,
			inline: !0,
			initialize(e) {
				e.innerHTML = ""
			},
			update(t, n, r, i) {
				let s = e(i.value());
				s !== this.value && ("html" === i.match[0] ? n.innerHTML = s : n.textContent = s, this.value = s)
			}
		}, {
			query: "<.+ {prefix}show>",
			update(e, t, n, r) {
				let i = r.value() ? "" : "none";
				i !== this.value && (t.style.display = this.value = i)
			}
		}, {
			query: `<.+ {prefix}(attr-.+|${["accept", "accept-charset", "accesskey", "action", "align", "alt", "async", "autocomplete", "autofocus", "autoplay", "autosave", "buffered", "challenge", "charset", "checked", "cite", "class", "code", "codebase", "cols", "colspan", "content", "contenteditable", "contextmenu", "controls", "coords", "crossorigin", "data", "data-*", "datetime", "default", "defer", "dir", "dirname", "disabled", "download", "draggable", "dropzone", "enctype", "for", "form", "formaction", "headers", "hidden", "high", "href", "hreflang", "http-equiv", "icon", "id", "integrity", "ismap", "itemprop", "keytype", "kind", "label", "lang", "language", "list", "loop", "low", "manifest", "max", "maxlength", "minlength", "media", "method", "min", "multiple", "muted", "name", "novalidate", "open", "optimum", "pattern", "ping", "placeholder", "poster", "preload", "radiogroup", "readonly", "rel", "required", "reversed", "rows", "rowspan", "sandbox", "scope", "scoped", "seamless", "selected", "shape", "size", "sizes", "slot", "span", "spellcheck", "src", "srcdoc", "srclang", "srcset", "start", "step", "style", "summary", "tabindex", "target", "title", "type", "usemap", "wrap"].join("|")})>`,
			initialize(e, t, n) {
				this.attrName = n.match[0].replace(/^attr-/, "")
			},
			update(t, n, r, i) {
				let s = i.value();
				s !== this.value && (this.value = s, b.includes(this.attrName) && (s = s ? this.attrName : void 0), void 0 === s ? n.removeAttribute(this.attrName) : n.setAttribute(this.attrName, e(s)))
			}
		}, {
			query: "<.+ {prefix}class-(.+)>",
			update(e, t, n, r) {
				let i = r.value();
				i !== this.value && (this.value = i, t.classList.toggle(r.match[0], i))
			}
		}, {
			query: "<.+ {prefix}exist>",
			order: 3,
			block: !0,
			initialize(e) {
				this.template = f(e.cloneNode(!0))
			},
			create(e, t, n, r) {
				this.marker = document.createComment(r.name), t.parentNode.replaceChild(this.marker, t)
			},
			update(e, t, n, r) {
				let i = !!r.value();
				i !== this.value && (i ? (this.vnode = this.template.clone(), this.marker.parentNode.insertBefore(this.vnode.node, this.marker), this.view = y(this.vnode, void 0, e).$()) : this.view && (this.view.$destroy(), this.marker.parentNode.removeChild(this.vnode.node),
				delete this.vnode
				,
				delete this.view
				), this.value = i)
			}
		}, {
			query: `<.+ {prefix}(style-.+|${["align-.*", "all", "animation", "animation-.*", "backface-visibility", "background", "background-.*", "border", "border-.*", "bottom", "box-.*", "break-.*", "caption-side", "caret-color", "clear", "clip", "clip-path", "color", "column-.*", "columns", "content", "counter-.*", "cursor", "direction", "display", "empty-cells", "filter", "flex-.*", "float", "font", "font-.*", "grid", "grid-.*", "height", "hyphens", "image-.*", "ime-mode", "inline-size", "isolation", "justify-content", "left", "letter-spacing", "line-.*", "list-.*", "margin", "margin-.*", "mask", "mask-.*", "max-height", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "object-fit", "object-position", "offset-.*", "opacity", "order", "orphans", "outline", "outline-.*", "overflow", "overflow-.*", "padding", "padding-.*", "page-break-.*", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "scroll-.*", "shape-.*", "tab-size", "table-layout", "text-.*", "top", "touch-action", "transform", "transform-.*", "transition", "transition-.*", "unicode-bidi", "unset", "vertical-align", "visibility", "white-space", "widows", "width", "will-change", "word-.*", "writing-mode", "z-index"].join("|")})>`,
			initialize(e, t, n) {
				this.property = n.match[0].replace(/^style-/, "")
			},
			update(e, t, n, r) {
				let i = r.value();
				i !== this.value && (t.style[this.property] = this.value = i)
			}
		}, {
			query: "<input|select|textarea {prefix}model>",
			order: 3,
			create(e, t, r, i) {
				let s = (t.getAttribute("type") || "").toLowerCase();
				this.type = "checkbox" === s ? "checkbox" : "select" === r.name.toLowerCase() ? "select" : "radio" === s ? "radio" : ["range", "number"].includes(s) ? "number" : ["date", "datetime-local", "time", "month", "week"].includes(s) ? "date" : "text", "radio" !== this.type || t.getAttribute("name") || t.setAttribute("name", n(e.$id + JSON.stringify(i.ast))), this.getValue = (e => e.hasOwnProperty("val") ? e.val : e.getAttribute("value")), this.handler = (() => {
					if ("radio" === this.type && !t.checked) return;
					let n = "checkbox" === this.type ? !!t.checked : "select" === this.type ? this.getValue(t.options[t.selectedIndex]) : "radio" === this.type ? this.getValue(t) : "number" === this.type ? Number(t.value) : "date" === this.type ? t.valueAsDate : t.value;
					n !== this.value && (this.value = n, o({
						type: "AssignmentExpression",
						operator: "=",
						left: i.ast,
						right: {
							type: "Literal",
							value: n
						}
					}, e), e.$())
				}), t.addEventListener("input", this.handler), t.addEventListener("change", this.handler), "select" === this.type && (t.selectedIndex = -1)
			},
			update(t, n, r, i) {
				let s = i.value();
				s !== this.value && ("checkbox" === this.type ? n.checked = !!s : "select" === this.type ? n.selectedIndex = Array.from(n.options).findIndex(e => JSON.stringify(this.getValue(e)) === JSON.stringify(s)) : "radio" === this.type ? n.checked = JSON.stringify(s) === JSON.stringify(this.getValue(n)) : "number" === this.type ? n.value = Number(s) : "date" === this.type ? n.valueAsDate = new Date(s.getTime()) : n.value = e(s), this.value = s)
			},
			destroy(e, t) {
				t.removeEventListener("input", this.handler), t.removeEventListener("change", this.handler)
			}
		}, {
			query: '<.+ {prefix}(.+)-in {prefix}key="">',
			order: 2,
			block: !0,
			initialize(e) {
				this.items = [], this.template = f(e.cloneNode(!0))
			},
			create(e, t, n, r, i) {
				const u = i.value();
				this.key = u ? e => o(s(u), {
					[r.match[0]]: e
				}).value : e => JSON.stringify(e), this.marker = document.createComment(r.name), t.parentNode.replaceChild(this.marker, t)
			},
			update(e, n, r, i) {
				let s = i.value() || [],
					o = Object.keys(s).map(e => ({
						index: e,
						computed: this.key(s[e]),
						datum: s[e]
					}));
				[].concat(this.items).forEach(e => {
					e.key = this.key(e.datum);let n = o.find(t => t.computed === e.key);
					n || (this.marker.parentNode.removeChild(e.node), e.view.$destroy(), t(this.items, e))
				}), o.forEach(r => {
					let s = this.items.find(e => r.computed === e.key);
					if (s) t(this.items, s), this.marker.parentNode.insertBefore(s.node, this.marker);
					else {
						let t = this.template.clone();
						t.originalNode = n.cloneNode(!0), s = {
							key: r.computed,
							datum: r.datum,
							node: t.node
						}, this.marker.parentNode.insertBefore(s.node, this.marker), s.view = y(t, {
							[i.match[0]]: s.datum
						}, e)
					}
					s.view.$index = r.index;s.view.$();this.items.push(s)
				})
			}
		}, {
			query: `<.+ {prefix}(on-.+|${["load", "error", "focus", "blur", "click", "dblclick", "mouse.*", "keyup", "keydown", "keypress", "input", "change", "submit", "reset", "scroll", "resize", "drag.*", "drop"].join("|")})>`,
			initialize(e, t, n) {
				this.event = n.match[0].replace(/^on-/, "")
			},
			create(e, t, n, r) {
				this.handler = (t => {
					e.$event = t;r.value();e.$();
					delete e.$event;
					"submit" === this.event && t.preventDefault()
				}), t.addEventListener(this.event, this.handler)
			},
			destroy(e, t) {
				t.removeEventListener(this.event, this.handler)
			}
		}, {
			query: "<.+ {prefix}skip>",
			order: 1,
			block: !0
		}, {
			query: "<.+ {prefix}cloak>",
			initialize(e) {
				e.display = ""
			}
		}, {
			query: "<.+ {prefix}isolate>",
			order: 3,
			block: !0,
			initialize(e) {
				this.vnode = f(e.cloneNode(!0))
			},
			create(e, t) {
				t.parentNode.replaceChild(this.vnode.node, t), this.view = y(this.vnode, void 0, e)
			},
			update() {
				this.view.$()
			}
		}, {
			query: "<.+ {prefix}inherit>",
			block: !0,
			create(e, t) {
				let n,
					r = t;
				for (; !n && r;) n = r.vnode && r.vnode.originalNode, r = r.parentNode;
				n && Array.from(n.childNodes).forEach(e => {
					let n = f(e);
					n.fragment && (n.node.textContent = "");t.appendChild(n.node);t.vnode.children.push(n)
				})
			}
		}, {
			query: "<option|input {prefix}value>",
			order: 3,
			update(e, t, n, r) {
				t.val = r.value(), t.setAttribute("value", JSON.stringify(t.val))
			}
		}].forEach(y.directive), y
});
