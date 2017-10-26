!function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.zam = t()
}(this, function() {
	"use strict";
	const e = e => null === e || void 0 === e ? "" : String(e),
		t = (e, t) => {
			const r = e ? e.indexOf(t) : -1;
			r > -1 && e.splice(r, 1)
		},
		r = e => e.split("").reduce((e, t) => (e << 5) - e + t.charCodeAt(0) | 0, 0).toString(16),
		n = e => {
			var t,
				r = () => {
					t || e()
				};
			if ("undefined" != typeof process) process.nextTick(r);
			else {
				let e = String(Math.random()),
					t = n => {
						n.data === e && (n.stopPropagation(), r(), window.removeEventListener("message", t, !0))
					};
				window.addEventListener("message", t, !0), window.postMessage(e, "*")
			}
			return () => {
				t = !0
			}
		};
	var i = function() {
		function e(t, r, n, i) {
			this.message = t, this.expected = r, this.found = n, this.location = i, this.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, e)
		}
		function t(t, r) {
			function n() {
				return t.substring(Fr, Tr)
			}
			function i(e, t) {
				return {
					type: "literal",
					text: e,
					ignoreCase: t
				}
			}
			function s(e, t, r) {
				return {
					type: "class",
					parts: e,
					inverted: t,
					ignoreCase: r
				}
			}
			function o(e) {
				return {
					type: "other",
					description: e
				}
			}
			function u(e) {
				var r,
					n = Or[e];
				if (n) return n;
				for (r = e - 1; !Or[r];) r--;
				for (n = {
						line: (n = Or[r]).line,
						column: n.column
					}; r < e;) 10 === t.charCodeAt(r) ? (n.line++, n.column = 1) : n.column++, r++;
				return Or[e] = n, n
			}
			function a(e, t) {
				var r = u(e),
					n = u(t);
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
				}
			}
			function c(e) {
				Tr < Sr || (Tr > Sr && (Sr = Tr, Br = []), Br.push(e))
			}
			function l() {
				var e,
					t,
					r,
					n = 33 * Tr + 0,
					i = Rr[n];
				if (i) return Tr = i.nextPos, i.result;
				for (e = Tr, t = [], r = f(); r !== _;) t.push(r), r = f();
				return t !== _ && (Fr = e, t = W(t)), e = t, Rr[n] = {
						nextPos: Tr,
						result: e
					}, e
			}
			function f() {
				var e,
					r,
					n = 33 * Tr + 1,
					i = Rr[n];
				return i ? (Tr = i.nextPos, i.result) : (e = Tr, (r = d()) !== _ && (Fr = e, r = G(r)), (e = r) === _ && (e = Tr, t.length > Tr ? (r = t.charAt(Tr), Tr++) : (r = _, 0 === Mr && c(K)), r !== _ && (Fr = e, r = Q(r)), e = r), Rr[n] = {
					nextPos: Tr,
					result: e
				}, e)
			}
			function d() {
				var e,
					r,
					n,
					i,
					s = 33 * Tr + 2,
					o = Rr[s];
				return o ? (Tr = o.nextPos, o.result) : (e = Tr, t.substr(Tr, 3) === X ? (r = X, Tr += 3) : (r = _, 0 === Mr && c(Y)), r !== _ && U() !== _ && (n = h()) !== _ && U() !== _ ? (t.substr(Tr, 3) === Z ? (i = Z, Tr += 3) : (i = _, 0 === Mr && c(ee)), i !== _ ? (Fr = e, e = r = te(n)) : (Tr = e, e = _)) : (Tr = e, e = _), e === _ && (e = Tr, t.substr(Tr, 2) === re ? (r = re, Tr += 2) : (r = _, 0 === Mr && c(ne)), r !== _ && U() !== _ && (n = h()) !== _ && U() !== _ ? (t.substr(Tr, 2) === ie ? (i = ie, Tr += 2) : (i = _, 0 === Mr && c(se)), i !== _ ? (Fr = e, e = r = oe(n)) : (Tr = e, e = _)) : (Tr = e, e = _)), Rr[s] = {
					nextPos: Tr,
					result: e
				}, e)
			}
			function h() {
				var e,
					r,
					n,
					i,
					s = 33 * Tr + 3,
					o = Rr[s];
				return o ? (Tr = o.nextPos, o.result) : (e = Tr, r = p(), r !== _ && U() !== _ ? (61 === t.charCodeAt(Tr) ? (n = ue, Tr++) : (n = _, 0 === Mr && c(ae)), n === _ && (t.substr(Tr, 2) === ce ? (n = ce, Tr += 2) : (n = _, 0 === Mr && c(le)), n === _ && (t.substr(Tr, 2) === fe ? (n = fe, Tr += 2) : (n = _, 0 === Mr && c(de)), n === _ && (t.substr(Tr, 2) === he ? (n = he, Tr += 2) : (n = _, 0 === Mr && c(pe)), n === _ && (t.substr(Tr, 2) === me ? (n = me, Tr += 2) : (n = _, 0 === Mr && c(ve)), n === _ && (t.substr(Tr, 2) === xe ? (n = xe, Tr += 2) : (n = _, 0 === Mr && c(be))))))), n !== _ && U() !== _ && (i = h()) !== _ ? (Fr = e, e = r = ge(r, n, i)) : (Tr = e, e = _)) : (Tr = e, e = _), e === _ && (e = m()), Rr[s] = {
					nextPos: Tr,
					result: e
				}, e)
			}
			function p() {
				var e,
					t = 33 * Tr + 4,
					r = Rr[t];
				return r ? (Tr = r.nextPos, r.result) : ((e = C()) === _ && (e = E()), Rr[t] = {
					nextPos: Tr,
					result: e
				}, e)
			}
			function m() {
				var e,
					r,
					n,
					i,
					s,
					o,
					u = 33 * Tr + 5,
					a = Rr[u];
				return a ? (Tr = a.nextPos, a.result) : (e = Tr, r = v(), r !== _ && U() !== _ ? (63 === t.charCodeAt(Tr) ? (n = ye, Tr++) : (n = _, 0 === Mr && c(Ae)), n !== _ && U() !== _ && (i = m()) !== _ && U() !== _ ? (58 === t.charCodeAt(Tr) ? (s = Pe, Tr++) : (s = _, 0 === Mr && c(ke)), s !== _ && U() !== _ && (o = m()) !== _ ? (Fr = e, e = r = Ce(r, i, o)) : (Tr = e, e = _)) : (Tr = e, e = _)) : (Tr = e, e = _), e === _ && (e = v()), Rr[u] = {
					nextPos: Tr,
					result: e
				}, e)
			}
			function v() {
				var e,
					r,
					n,
					i,
					s,
					o,
					u = 33 * Tr + 6,
					a = Rr[u];
				if (a) return Tr = a.nextPos, a.result;
				if (e = Tr, (r = x()) !== _) {
					for (n = [], i = Tr, U() !== _ ? (t.substr(Tr, 2) === Ee ? (s = Ee, Tr += 2) : (s = _, 0 === Mr && c(we)), s !== _ && U() !== _ && (o = x()) !== _ ? (Fr = i, i = Ne(r, o)) : (Tr = i, i = _)) : (Tr = i, i = _); i !== _;) n.push(i), i = Tr, U() !== _ ? (t.substr(Tr, 2) === Ee ? (s = Ee, Tr += 2) : (s = _, 0 === Mr && c(we)), s !== _ && U() !== _ && (o = x()) !== _ ? (Fr = i, i = Ne(r, o)) : (Tr = i, i = _)) : (Tr = i, i = _);
					n !== _ ? (Fr = e, e = r = je(r, n)) : (Tr = e, e = _)
				} else Tr = e, e = _;
				return Rr[u] = {
						nextPos: Tr,
						result: e
					}, e
			}
			function x() {
				var e,
					r,
					n,
					i,
					s,
					o,
					u = 33 * Tr + 7,
					a = Rr[u];
				if (a) return Tr = a.nextPos, a.result;
				if (e = Tr, (r = b()) !== _) {
					for (n = [], i = Tr, U() !== _ ? (t.substr(Tr, 2) === Le ? (s = Le, Tr += 2) : (s = _, 0 === Mr && c($e)), s !== _ && U() !== _ && (o = b()) !== _ ? (Fr = i, i = ze(r, o)) : (Tr = i, i = _)) : (Tr = i, i = _); i !== _;) n.push(i), i = Tr, U() !== _ ? (t.substr(Tr, 2) === Le ? (s = Le, Tr += 2) : (s = _, 0 === Mr && c($e)), s !== _ && U() !== _ && (o = b()) !== _ ? (Fr = i, i = ze(r, o)) : (Tr = i, i = _)) : (Tr = i, i = _);
					n !== _ ? (Fr = e, e = r = je(r, n)) : (Tr = e, e = _)
				} else Tr = e, e = _;
				return Rr[u] = {
						nextPos: Tr,
						result: e
					}, e
			}
			function b() {
				var e,
					r,
					n,
					i,
					s,
					o,
					u = 33 * Tr + 8,
					a = Rr[u];
				if (a) return Tr = a.nextPos, a.result;
				if (e = Tr, (r = g()) !== _) {
					for (n = [], i = Tr, U() !== _ ? (t.substr(Tr, 3) === Te ? (s = Te, Tr += 3) : (s = _, 0 === Mr && c(Fe)), s === _ && (t.substr(Tr, 3) === Oe ? (s = Oe, Tr += 3) : (s = _, 0 === Mr && c(Se)), s === _ && (t.substr(Tr, 2) === Be ? (s = Be, Tr += 2) : (s = _, 0 === Mr && c(Me)), s === _ && (t.substr(Tr, 2) === Re ? (s = Re, Tr += 2) : (s = _, 0 === Mr && c(Ie))))), s !== _ && U() !== _ && (o = g()) !== _ ? (Fr = i, i = qe(r, s, o)) : (Tr = i, i = _)) : (Tr = i, i = _); i !== _;) n.push(i), i = Tr, U() !== _ ? (t.substr(Tr, 3) === Te ? (s = Te, Tr += 3) : (s = _, 0 === Mr && c(Fe)), s === _ && (t.substr(Tr, 3) === Oe ? (s = Oe, Tr += 3) : (s = _, 0 === Mr && c(Se)), s === _ && (t.substr(Tr, 2) === Be ? (s = Be, Tr += 2) : (s = _, 0 === Mr && c(Me)), s === _ && (t.substr(Tr, 2) === Re ? (s = Re, Tr += 2) : (s = _, 0 === Mr && c(Ie))))), s !== _ && U() !== _ && (o = g()) !== _ ? (Fr = i, i = qe(r, s, o)) : (Tr = i, i = _)) : (Tr = i, i = _);
					n !== _ ? (Fr = e, e = r = Ue(r, n)) : (Tr = e, e = _)
				} else Tr = e, e = _;
				return Rr[u] = {
						nextPos: Tr,
						result: e
					}, e
			}
			function g() {
				var e,
					r,
					n,
					i,
					s,
					o,
					u = 33 * Tr + 9,
					a = Rr[u];
				if (a) return Tr = a.nextPos, a.result;
				if (e = Tr, (r = y()) !== _) {
					for (n = [], i = Tr, U() !== _ ? (t.substr(Tr, 2) === Ve ? (s = Ve, Tr += 2) : (s = _, 0 === Mr && c(De)), s === _ && (t.substr(Tr, 2) === _e ? (s = _e, Tr += 2) : (s = _, 0 === Mr && c(He)), s === _ && (60 === t.charCodeAt(Tr) ? (s = Je, Tr++) : (s = _, 0 === Mr && c(We)), s === _ && (62 === t.charCodeAt(Tr) ? (s = Ge, Tr++) : (s = _, 0 === Mr && c(Ke))))), s !== _ && U() !== _ && (o = y()) !== _ ? (Fr = i, i = qe(r, s, o)) : (Tr = i, i = _)) : (Tr = i, i = _); i !== _;) n.push(i), i = Tr, U() !== _ ? (t.substr(Tr, 2) === Ve ? (s = Ve, Tr += 2) : (s = _, 0 === Mr && c(De)), s === _ && (t.substr(Tr, 2) === _e ? (s = _e, Tr += 2) : (s = _, 0 === Mr && c(He)), s === _ && (60 === t.charCodeAt(Tr) ? (s = Je, Tr++) : (s = _, 0 === Mr && c(We)), s === _ && (62 === t.charCodeAt(Tr) ? (s = Ge, Tr++) : (s = _, 0 === Mr && c(Ke))))), s !== _ && U() !== _ && (o = y()) !== _ ? (Fr = i, i = qe(r, s, o)) : (Tr = i, i = _)) : (Tr = i, i = _);
					n !== _ ? (Fr = e, e = r = Ue(r, n)) : (Tr = e, e = _)
				} else Tr = e, e = _;
				return Rr[u] = {
						nextPos: Tr,
						result: e
					}, e
			}
			function y() {
				var e,
					r,
					n,
					i,
					s,
					o,
					u = 33 * Tr + 10,
					a = Rr[u];
				if (a) return Tr = a.nextPos, a.result;
				if (e = Tr, (r = A()) !== _) {
					for (n = [], i = Tr, U() !== _ ? (Qe.test(t.charAt(Tr)) ? (s = t.charAt(Tr), Tr++) : (s = _, 0 === Mr && c(Xe)), s !== _ && U() !== _ && (o = A()) !== _ ? (Fr = i, i = qe(r, s, o)) : (Tr = i, i = _)) : (Tr = i, i = _); i !== _;) n.push(i), i = Tr, U() !== _ ? (Qe.test(t.charAt(Tr)) ? (s = t.charAt(Tr), Tr++) : (s = _, 0 === Mr && c(Xe)), s !== _ && U() !== _ && (o = A()) !== _ ? (Fr = i, i = qe(r, s, o)) : (Tr = i, i = _)) : (Tr = i, i = _);
					n !== _ ? (Fr = e, e = r = Ue(r, n)) : (Tr = e, e = _)
				} else Tr = e, e = _;
				return Rr[u] = {
						nextPos: Tr,
						result: e
					}, e
			}
			function A() {
				var e,
					r,
					n,
					i,
					s,
					o,
					u = 33 * Tr + 11,
					a = Rr[u];
				if (a) return Tr = a.nextPos, a.result;
				if (e = Tr, (r = P()) !== _) {
					for (n = [], i = Tr, U() !== _ ? (Ye.test(t.charAt(Tr)) ? (s = t.charAt(Tr), Tr++) : (s = _, 0 === Mr && c(Ze)), s !== _ && U() !== _ && (o = P()) !== _ ? (Fr = i, i = qe(r, s, o)) : (Tr = i, i = _)) : (Tr = i, i = _); i !== _;) n.push(i), i = Tr, U() !== _ ? (Ye.test(t.charAt(Tr)) ? (s = t.charAt(Tr), Tr++) : (s = _, 0 === Mr && c(Ze)), s !== _ && U() !== _ && (o = P()) !== _ ? (Fr = i, i = qe(r, s, o)) : (Tr = i, i = _)) : (Tr = i, i = _);
					n !== _ ? (Fr = e, e = r = Ue(r, n)) : (Tr = e, e = _)
				} else Tr = e, e = _;
				return Rr[u] = {
						nextPos: Tr,
						result: e
					}, e
			}
			function P() {
				var e,
					r,
					n,
					i = 33 * Tr + 12,
					s = Rr[i];
				return s ? (Tr = s.nextPos, s.result) : ((e = k()) === _ && (e = Tr, t.substr(Tr, 2) === et ? (r = et, Tr += 2) : (r = _, 0 === Mr && c(tt)), r === _ && (t.substr(Tr, 2) === rt ? (r = rt, Tr += 2) : (r = _, 0 === Mr && c(nt)), r === _ && (it.test(t.charAt(Tr)) ? (r = t.charAt(Tr), Tr++) : (r = _, 0 === Mr && c(st)))), r !== _ && U() !== _ && (n = P()) !== _ ? (Fr = e, e = r = ot(r, n)) : (Tr = e, e = _)), Rr[i] = {
					nextPos: Tr,
					result: e
				}, e)
			}
			function k() {
				var e,
					r,
					n,
					i = 33 * Tr + 13,
					s = Rr[i];
				return s ? (Tr = s.nextPos, s.result) : (e = Tr, r = p(), r !== _ && U() !== _ ? (t.substr(Tr, 2) === et ? (n = et, Tr += 2) : (n = _, 0 === Mr && c(tt)), n === _ && (t.substr(Tr, 2) === rt ? (n = rt, Tr += 2) : (n = _, 0 === Mr && c(nt))), n !== _ ? (Fr = e, e = r = ut(r, n)) : (Tr = e, e = _)) : (Tr = e, e = _), e === _ && (e = p()), Rr[i] = {
					nextPos: Tr,
					result: e
				}, e)
			}
			function C() {
				var e,
					t,
					r,
					n,
					i = 33 * Tr + 14,
					s = Rr[i];
				return s ? (Tr = s.nextPos, s.result) : (e = Tr, t = Tr, r = E(), r !== _ && U() !== _ && (n = j()) !== _ ? (Fr = t, t = r = at(r, n)) : (Tr = t, t = _), t !== _ && (r = w()) !== _ ? (Fr = e, e = t = ct(t, r)) : (Tr = e, e = _), Rr[i] = {
					nextPos: Tr,
					result: e
				}, e)
			}
			function E() {
				var e,
					r,
					n,
					i,
					s,
					o = 33 * Tr + 15,
					u = Rr[o];
				return u ? (Tr = u.nextPos, u.result) : (e = Tr, (r = N()) === _ && (r = L()) === _ && (r = S()) === _ && (r = $()) === _ && (r = T()) === _ && (r = Tr, 40 === t.charCodeAt(Tr) ? (n = lt, Tr++) : (n = _, 0 === Mr && c(ft)), n !== _ && U() !== _ && (i = h()) !== _ && U() !== _ ? (41 === t.charCodeAt(Tr) ? (s = dt, Tr++) : (s = _, 0 === Mr && c(ht)), s !== _ ? (Fr = r, r = n = G(i)) : (Tr = r, r = _)) : (Tr = r, r = _)), r !== _ && (n = w()) !== _ ? (Fr = e, e = r = pt(r, n)) : (Tr = e, e = _), Rr[o] = {
					nextPos: Tr,
					result: e
				}, e)
			}
			function w() {
				var e,
					r,
					n,
					i,
					s,
					o = 33 * Tr + 16,
					u = Rr[o];
				if (u) return Tr = u.nextPos, u.result;
				for (e = [], r = Tr, U() !== _ ? (91 === t.charCodeAt(Tr) ? (n = mt, Tr++) : (n = _, 0 === Mr && c(vt)), n !== _ && U() !== _ && (i = h()) !== _ && U() !== _ ? (93 === t.charCodeAt(Tr) ? (s = xt, Tr++) : (s = _, 0 === Mr && c(bt)), s !== _ ? (Fr = r, r = gt(i)) : (Tr = r, r = _)) : (Tr = r, r = _)) : (Tr = r, r = _), r === _ && (r = Tr, U() !== _ ? (46 === t.charCodeAt(Tr) ? (n = yt, Tr++) : (n = _, 0 === Mr && c(At)), n !== _ && U() !== _ && (i = L()) !== _ ? (Fr = r, r = Pt(i)) : (Tr = r, r = _)) : (Tr = r, r = _)); r !== _;) e.push(r), r = Tr, U() !== _ ? (91 === t.charCodeAt(Tr) ? (n = mt, Tr++) : (n = _, 0 === Mr && c(vt)), n !== _ && U() !== _ && (i = h()) !== _ && U() !== _ ? (93 === t.charCodeAt(Tr) ? (s = xt, Tr++) : (s = _, 0 === Mr && c(bt)), s !== _ ? (Fr = r, r = gt(i)) : (Tr = r, r = _)) : (Tr = r, r = _)) : (Tr = r, r = _), r === _ && (r = Tr, U() !== _ ? (46 === t.charCodeAt(Tr) ? (n = yt, Tr++) : (n = _, 0 === Mr && c(At)), n !== _ && U() !== _ && (i = L()) !== _ ? (Fr = r, r = Pt(i)) : (Tr = r, r = _)) : (Tr = r, r = _));
				return Rr[o] = {
						nextPos: Tr,
						result: e
					}, e
			}
			function N() {
				var e,
					r,
					n,
					i,
					s,
					o = 33 * Tr + 17,
					u = Rr[o];
				return u ? (Tr = u.nextPos, u.result) : (e = Tr, t.substr(Tr, 3) === kt ? (r = kt, Tr += 3) : (r = _, 0 === Mr && c(Ct)), r !== _ && V() !== _ && (n = E()) !== _ ? (i = Tr, U() !== _ && (s = j()) !== _ ? (Fr = i, i = Et(n, s)) : (Tr = i, i = _), i === _ && (i = null), i !== _ ? (Fr = e, e = r = wt(n, i)) : (Tr = e, e = _)) : (Tr = e, e = _), Rr[o] = {
					nextPos: Tr,
					result: e
				}, e)
			}
			function j() {
				var e,
					r,
					n,
					i,
					s,
					o,
					u,
					a,
					l = 33 * Tr + 18,
					f = Rr[l];
				if (f) return Tr = f.nextPos, f.result;
				if (e = Tr, 40 === t.charCodeAt(Tr) ? (r = lt, Tr++) : (r = _, 0 === Mr && c(ft)), r !== _ && U() !== _ ? (41 === t.charCodeAt(Tr) ? (n = dt, Tr++) : (n = _, 0 === Mr && c(ht)), n !== _ ? (Fr = e, e = r = Nt()) : (Tr = e, e = _)) : (Tr = e, e = _), e === _)
					if (e = Tr, 40 === t.charCodeAt(Tr) ? (r = lt, Tr++) : (r = _, 0 === Mr && c(ft)), r !== _)
						if (U() !== _)
							if ((n = h()) !== _) {
								for (i = [], s = Tr, (o = U()) !== _ ? (44 === t.charCodeAt(Tr) ? (u = jt, Tr++) : (u = _, 0 === Mr && c(Lt)), u !== _ && U() !== _ && (a = h()) !== _ ? (Fr = s, s = o = $t(n, a)) : (Tr = s, s = _)) : (Tr = s, s = _); s !== _;) i.push(s), s = Tr, (o = U()) !== _ ? (44 === t.charCodeAt(Tr) ? (u = jt, Tr++) : (u = _, 0 === Mr && c(Lt)), u !== _ && U() !== _ && (a = h()) !== _ ? (Fr = s, s = o = $t(n, a)) : (Tr = s, s = _)) : (Tr = s, s = _);
								i !== _ && (s = U()) !== _ ? (41 === t.charCodeAt(Tr) ? (o = dt, Tr++) : (o = _, 0 === Mr && c(ht)), o !== _ ? (Fr = e, e = r = zt(n, i)) : (Tr = e, e = _)) : (Tr = e, e = _)
							} else Tr = e, e = _;
						else Tr = e, e = _;
					else Tr = e, e = _;
				return Rr[l] = {
						nextPos: Tr,
						result: e
					}, e
			}
			function L() {
				var e,
					r,
					n,
					i,
					s,
					o = 33 * Tr + 19,
					u = Rr[o];
				if (u) return Tr = u.nextPos, u.result;
				if (Mr++, e = Tr, r = Tr, Mr++, n = B(), Mr--, n === _ ? r = void 0 : (Tr = r, r = _), r !== _)
					if (Ft.test(t.charAt(Tr)) ? (n = t.charAt(Tr), Tr++) : (n = _, 0 === Mr && c(Ot)), n !== _) {
						for (i = [], St.test(t.charAt(Tr)) ? (s = t.charAt(Tr), Tr++) : (s = _, 0 === Mr && c(Bt)); s !== _;) i.push(s), St.test(t.charAt(Tr)) ? (s = t.charAt(Tr), Tr++) : (s = _, 0 === Mr && c(Bt));
						i !== _ ? (Fr = e, e = r = Mt(n, i)) : (Tr = e, e = _)
					} else Tr = e, e = _;
				else Tr = e, e = _;
				return Mr--, e === _ && (r = _, 0 === Mr && c(Tt)), Rr[o] = {
						nextPos: Tr,
						result: e
					}, e
			}
			function $() {
				var e,
					r,
					n,
					i,
					s = 33 * Tr + 20,
					o = Rr[s];
				return o ? (Tr = o.nextPos, o.result) : (e = Tr, 91 === t.charCodeAt(Tr) ? (r = mt, Tr++) : (r = _, 0 === Mr && c(vt)), r !== _ && U() !== _ ? (93 === t.charCodeAt(Tr) ? (n = xt, Tr++) : (n = _, 0 === Mr && c(bt)), n !== _ ? (Fr = e, e = r = Rt()) : (Tr = e, e = _)) : (Tr = e, e = _), e === _ && (e = Tr, 91 === t.charCodeAt(Tr) ? (r = mt, Tr++) : (r = _, 0 === Mr && c(vt)), r !== _ && U() !== _ && (n = z()) !== _ && U() !== _ ? (93 === t.charCodeAt(Tr) ? (i = xt, Tr++) : (i = _, 0 === Mr && c(bt)), i !== _ ? (Fr = e, e = r = It(n)) : (Tr = e, e = _)) : (Tr = e, e = _)), Rr[s] = {
					nextPos: Tr,
					result: e
				}, e)
			}
			function z() {
				var e,
					r,
					n,
					i,
					s,
					o,
					u = 33 * Tr + 21,
					a = Rr[u];
				if (a) return Tr = a.nextPos, a.result;
				if (e = Tr, (r = h()) !== _) {
					for (n = [], i = Tr, U() !== _ ? (44 === t.charCodeAt(Tr) ? (s = jt, Tr++) : (s = _, 0 === Mr && c(Lt)), s !== _ && U() !== _ && (o = h()) !== _ ? (Fr = i, i = qt(r, o)) : (Tr = i, i = _)) : (Tr = i, i = _); i !== _;) n.push(i), i = Tr, U() !== _ ? (44 === t.charCodeAt(Tr) ? (s = jt, Tr++) : (s = _, 0 === Mr && c(Lt)), s !== _ && U() !== _ && (o = h()) !== _ ? (Fr = i, i = qt(r, o)) : (Tr = i, i = _)) : (Tr = i, i = _);
					n !== _ ? (Fr = e, e = r = zt(r, n)) : (Tr = e, e = _)
				} else Tr = e, e = _;
				return Rr[u] = {
						nextPos: Tr,
						result: e
					}, e
			}
			function T() {
				var e,
					r,
					n,
					i,
					s,
					o,
					u = 33 * Tr + 22,
					a = Rr[u];
				return a ? (Tr = a.nextPos, a.result) : (e = Tr, 123 === t.charCodeAt(Tr) ? (r = Ut, Tr++) : (r = _, 0 === Mr && c(Vt)), r !== _ && U() !== _ ? (125 === t.charCodeAt(Tr) ? (n = Dt, Tr++) : (n = _, 0 === Mr && c(_t)), n !== _ ? (Fr = e, e = r = Ht()) : (Tr = e, e = _)) : (Tr = e, e = _), e === _ && (e = Tr, 123 === t.charCodeAt(Tr) ? (r = Ut, Tr++) : (r = _, 0 === Mr && c(Vt)), r !== _ && U() !== _ && (n = F()) !== _ && U() !== _ ? (i = Tr, 44 === t.charCodeAt(Tr) ? (s = jt, Tr++) : (s = _, 0 === Mr && c(Lt)), s !== _ && (o = U()) !== _ ? i = s = [s, o] : (Tr = i, i = _), i === _ && (i = null), i !== _ ? (125 === t.charCodeAt(Tr) ? (s = Dt, Tr++) : (s = _, 0 === Mr && c(_t)), s !== _ ? (Fr = e, e = r = Jt(n)) : (Tr = e, e = _)) : (Tr = e, e = _)) : (Tr = e, e = _)), Rr[u] = {
					nextPos: Tr,
					result: e
				}, e)
			}
			function F() {
				var e,
					r,
					n,
					i,
					s,
					o,
					u = 33 * Tr + 23,
					a = Rr[u];
				if (a) return Tr = a.nextPos, a.result;
				if (e = Tr, (r = O()) !== _) {
					for (n = [], i = Tr, U() !== _ ? (44 === t.charCodeAt(Tr) ? (s = jt, Tr++) : (s = _, 0 === Mr && c(Lt)), s !== _ && U() !== _ && (o = O()) !== _ ? (Fr = i, i = Wt(r, o)) : (Tr = i, i = _)) : (Tr = i, i = _); i !== _;) n.push(i), i = Tr, U() !== _ ? (44 === t.charCodeAt(Tr) ? (s = jt, Tr++) : (s = _, 0 === Mr && c(Lt)), s !== _ && U() !== _ && (o = O()) !== _ ? (Fr = i, i = Wt(r, o)) : (Tr = i, i = _)) : (Tr = i, i = _);
					n !== _ ? (Fr = e, e = r = zt(r, n)) : (Tr = e, e = _)
				} else Tr = e, e = _;
				return Rr[u] = {
						nextPos: Tr,
						result: e
					}, e
			}
			function O() {
				var e,
					r,
					n,
					i,
					s = 33 * Tr + 24,
					o = Rr[s];
				return o ? (Tr = o.nextPos, o.result) : (e = Tr, (r = L()) === _ && (r = q()) === _ && (r = M()), r !== _ && U() !== _ ? (58 === t.charCodeAt(Tr) ? (n = Pe, Tr++) : (n = _, 0 === Mr && c(ke)), n !== _ && U() !== _ && (i = h()) !== _ ? (Fr = e, e = r = Gt(r, i)) : (Tr = e, e = _)) : (Tr = e, e = _), Rr[s] = {
					nextPos: Tr,
					result: e
				}, e)
			}
			function S() {
				var e,
					t = 33 * Tr + 25,
					r = Rr[t];
				return r ? (Tr = r.nextPos, r.result) : ((e = B()) === _ && (e = M()) === _ && (e = q()), Rr[t] = {
					nextPos: Tr,
					result: e
				}, e)
			}
			function B() {
				var e,
					r,
					n = 33 * Tr + 26,
					i = Rr[n];
				return i ? (Tr = i.nextPos, i.result) : (e = Tr, t.substr(Tr, 4) === Kt ? (r = Kt, Tr += 4) : (r = _, 0 === Mr && c(Qt)), r !== _ && (Fr = e, r = Xt()), (e = r) === _ && (e = Tr, t.substr(Tr, 4) === Yt ? (r = Yt, Tr += 4) : (r = _, 0 === Mr && c(Zt)), r !== _ && (Fr = e, r = er()), (e = r) === _ && (e = Tr, t.substr(Tr, 5) === tr ? (r = tr, Tr += 5) : (r = _, 0 === Mr && c(rr)), r !== _ && (Fr = e, r = nr()), e = r)), Rr[n] = {
					nextPos: Tr,
					result: e
				}, e)
			}
			function M() {
				var e,
					r,
					n,
					i,
					s,
					o = 33 * Tr + 27,
					u = Rr[o];
				if (u) return Tr = u.nextPos, u.result;
				if (Mr++, e = Tr, (r = R()) !== _)
					if (46 === t.charCodeAt(Tr) ? (n = yt, Tr++) : (n = _, 0 === Mr && c(At)), n !== _) {
						for (i = [], sr.test(t.charAt(Tr)) ? (s = t.charAt(Tr), Tr++) : (s = _, 0 === Mr && c(or)); s !== _;) i.push(s), sr.test(t.charAt(Tr)) ? (s = t.charAt(Tr), Tr++) : (s = _, 0 === Mr && c(or));
						i !== _ ? ((s = I()) === _ && (s = null), s !== _ ? (Fr = e, e = r = ur()) : (Tr = e, e = _)) : (Tr = e, e = _)
					} else Tr = e, e = _;
				else Tr = e, e = _;
				if (e === _) {
					if (e = Tr, 46 === t.charCodeAt(Tr) ? (r = yt, Tr++) : (r = _, 0 === Mr && c(At)), r !== _) {
						if (n = [], sr.test(t.charAt(Tr)) ? (i = t.charAt(Tr), Tr++) : (i = _, 0 === Mr && c(or)), i !== _)
							for (; i !== _;) n.push(i), sr.test(t.charAt(Tr)) ? (i = t.charAt(Tr), Tr++) : (i = _, 0 === Mr && c(or));
						else
							n = _;
						n !== _ ? ((i = I()) === _ && (i = null), i !== _ ? (Fr = e, e = r = ur()) : (Tr = e, e = _)) : (Tr = e, e = _)
					} else Tr = e, e = _;
					e === _ && (e = Tr, (r = R()) !== _ ? ((n = I()) === _ && (n = null), n !== _ ? (Fr = e, e = r = ur()) : (Tr = e, e = _)) : (Tr = e, e = _))
				}
				return Mr--, e === _ && (r = _, 0 === Mr && c(ir)), Rr[o] = {
						nextPos: Tr,
						result: e
					}, e
			}
			function R() {
				var e,
					r,
					n,
					i,
					s = 33 * Tr + 28,
					o = Rr[s];
				if (o) return Tr = o.nextPos, o.result;
				if (48 === t.charCodeAt(Tr) ? (e = ar, Tr++) : (e = _, 0 === Mr && c(cr)), e === _)
					if (e = Tr, lr.test(t.charAt(Tr)) ? (r = t.charAt(Tr), Tr++) : (r = _, 0 === Mr && c(fr)), r !== _) {
						for (n = [], sr.test(t.charAt(Tr)) ? (i = t.charAt(Tr), Tr++) : (i = _, 0 === Mr && c(or)); i !== _;) n.push(i), sr.test(t.charAt(Tr)) ? (i = t.charAt(Tr), Tr++) : (i = _, 0 === Mr && c(or));
						n !== _ ? e = r = [r, n] : (Tr = e, e = _)
					} else Tr = e, e = _;
				return Rr[s] = {
						nextPos: Tr,
						result: e
					}, e
			}
			function I() {
				var e,
					r,
					n,
					i,
					s,
					o = 33 * Tr + 29,
					u = Rr[o];
				if (u) return Tr = u.nextPos, u.result;
				if (e = Tr, t.substr(Tr, 1).toLowerCase() === dr ? (r = t.charAt(Tr), Tr++) : (r = _, 0 === Mr && c(hr)), r !== _)
					if (Qe.test(t.charAt(Tr)) ? (n = t.charAt(Tr), Tr++) : (n = _, 0 === Mr && c(Xe)), n === _ && (n = null), n !== _) {
						if (i = [], sr.test(t.charAt(Tr)) ? (s = t.charAt(Tr), Tr++) : (s = _, 0 === Mr && c(or)), s !== _)
							for (; s !== _;) i.push(s), sr.test(t.charAt(Tr)) ? (s = t.charAt(Tr), Tr++) : (s = _, 0 === Mr && c(or));
						else
							i = _;
						i !== _ ? e = r = [r, n, i] : (Tr = e, e = _)
					} else Tr = e, e = _;
				else Tr = e, e = _;
				return Rr[o] = {
						nextPos: Tr,
						result: e
					}, e
			}
			function q() {
				var e,
					r,
					n,
					i,
					s,
					o = 33 * Tr + 30,
					u = Rr[o];
				if (u) return Tr = u.nextPos, u.result;
				if (Mr++, e = Tr, 34 === t.charCodeAt(Tr) ? (r = mr, Tr++) : (r = _, 0 === Mr && c(vr)), r !== _) {
					for (n = [], i = Tr, t.substr(Tr, 2) === xr ? (s = xr, Tr += 2) : (s = _, 0 === Mr && c(br)), s !== _ && (Fr = i, s = gr()), (i = s) === _ && (yr.test(t.charAt(Tr)) ? (i = t.charAt(Tr), Tr++) : (i = _, 0 === Mr && c(Ar))); i !== _;) n.push(i), i = Tr, t.substr(Tr, 2) === xr ? (s = xr, Tr += 2) : (s = _, 0 === Mr && c(br)), s !== _ && (Fr = i, s = gr()), (i = s) === _ && (yr.test(t.charAt(Tr)) ? (i = t.charAt(Tr), Tr++) : (i = _, 0 === Mr && c(Ar)));
					n !== _ ? (34 === t.charCodeAt(Tr) ? (i = mr, Tr++) : (i = _, 0 === Mr && c(vr)), i !== _ ? (Fr = e, e = r = Pr(n)) : (Tr = e, e = _)) : (Tr = e, e = _)
				} else Tr = e, e = _;
				if (e === _)
					if (e = Tr, 39 === t.charCodeAt(Tr) ? (r = kr, Tr++) : (r = _, 0 === Mr && c(Cr)), r !== _) {
						for (n = [], i = Tr, t.substr(Tr, 2) === Er ? (s = Er, Tr += 2) : (s = _, 0 === Mr && c(wr)), s !== _ && (Fr = i, s = Nr()), (i = s) === _ && (jr.test(t.charAt(Tr)) ? (i = t.charAt(Tr), Tr++) : (i = _, 0 === Mr && c(Lr))); i !== _;) n.push(i), i = Tr, t.substr(Tr, 2) === Er ? (s = Er, Tr += 2) : (s = _, 0 === Mr && c(wr)), s !== _ && (Fr = i, s = Nr()), (i = s) === _ && (jr.test(t.charAt(Tr)) ? (i = t.charAt(Tr), Tr++) : (i = _, 0 === Mr && c(Lr)));
						n !== _ ? (39 === t.charCodeAt(Tr) ? (i = kr, Tr++) : (i = _, 0 === Mr && c(Cr)), i !== _ ? (Fr = e, e = r = Pr(n)) : (Tr = e, e = _)) : (Tr = e, e = _)
					} else Tr = e, e = _;
				return Mr--, e === _ && (r = _, 0 === Mr && c(pr)), Rr[o] = {
						nextPos: Tr,
						result: e
					}, e
			}
			function U() {
				var e,
					t = 33 * Tr + 31,
					r = Rr[t];
				return r ? (Tr = r.nextPos, r.result) : ((e = V()) === _ && (e = null), Rr[t] = {
					nextPos: Tr,
					result: e
				}, e)
			}
			function V() {
				var e,
					r,
					n = 33 * Tr + 32,
					i = Rr[n];
				if (i) return Tr = i.nextPos, i.result;
				if (e = [], $r.test(t.charAt(Tr)) ? (r = t.charAt(Tr), Tr++) : (r = _, 0 === Mr && c(zr)), r !== _)
					for (; r !== _;) e.push(r), $r.test(t.charAt(Tr)) ? (r = t.charAt(Tr), Tr++) : (r = _, 0 === Mr && c(zr));
				else
					e = _;
				return Rr[n] = {
						nextPos: Tr,
						result: e
					}, e
			}
			r = void 0 !== r ? r : {};var D,
				_ = {},
				H = {
					Text: l,
					Expression: h
				},
				J = l,
				W = function(e) {
					return e.reduce((e, t) => {
						"string" == typeof t && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t : e.push(t);return e
					}, [])
				},
				G = function(e) {
					return e
				},
				K = {
					type: "any"
				},
				Q = function(e) {
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
				re = "{{",
				ne = i("{{", !1),
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
				de = i("/=", !1),
				he = "%=",
				pe = i("%=", !1),
				me = "+=",
				ve = i("+=", !1),
				xe = "-=",
				be = i("-=", !1),
				ge = function(e, t, r) {
					return {
						type: "AssignmentExpression",
						operator: t,
						left: e,
						right: r
					}
				},
				ye = "?",
				Ae = i("?", !1),
				Pe = ":",
				ke = i(":", !1),
				Ce = function(e, t, r) {
					return {
						type: "ConditionalExpression",
						test: e,
						consequent: t,
						alternate: r
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
					return Ir("LogicalExpression", e, t)
				},
				Le = "&&",
				$e = i("&&", !1),
				ze = function(e, t) {
					return {
						operator: "&&",
						arg: t
					}
				},
				Te = "===",
				Fe = i("===", !1),
				Oe = "!==",
				Se = i("!==", !1),
				Be = "==",
				Me = i("==", !1),
				Re = "!=",
				Ie = i("!=", !1),
				qe = function(e, t, r) {
					return {
						operator: t,
						arg: r
					}
				},
				Ue = function(e, t) {
					return Ir("BinaryExpression", e, t)
				},
				Ve = "<=",
				De = i("<=", !1),
				_e = ">=",
				He = i(">=", !1),
				Je = "<",
				We = i("<", !1),
				Ge = ">",
				Ke = i(">", !1),
				Qe = /^[+\-]/,
				Xe = s(["+", "-"], !1, !1),
				Ye = /^[*\/%]/,
				Ze = s(["*", "/", "%"], !1, !1),
				et = "++",
				tt = i("++", !1),
				rt = "--",
				nt = i("--", !1),
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
				dt = ")",
				ht = i(")", !1),
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
				bt = i("]", !1),
				gt = function(e) {
					return e
				},
				yt = ".",
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
				zt = function(e, t) {
					return [e].concat(t)
				},
				Tt = o("identifier"),
				Ft = /^[a-z$_]/i,
				Ot = s([["a", "z"], "$", "_"], !1, !0),
				St = /^[a-z$_0-9]/i,
				Bt = s([["a", "z"], "$", "_", ["0", "9"]], !1, !0),
				Mt = function(e, t) {
					return {
						type: "Identifier",
						name: e + t.join("")
					}
				},
				Rt = function() {
					return {
						type: "ArrayExpression",
						elements: []
					}
				},
				It = function(e) {
					return {
						type: "ArrayExpression",
						elements: e
					}
				},
				qt = function(e, t) {
					return t
				},
				Ut = "{",
				Vt = i("{", !1),
				Dt = "}",
				_t = i("}", !1),
				Ht = function() {
					return {
						type: "ObjectExpression",
						properties: []
					}
				},
				Jt = function(e) {
					return {
						type: "ObjectExpression",
						properties: e
					}
				},
				Wt = function(e, t) {
					return t
				},
				Gt = function(e, t) {
					return {
						type: "Property",
						key: e,
						value: t
					}
				},
				Kt = "null",
				Qt = i("null", !1),
				Xt = function() {
					return {
						type: "Literal",
						value: null
					}
				},
				Yt = "true",
				Zt = i("true", !1),
				er = function() {
					return {
						type: "Literal",
						value: !0
					}
				},
				tr = "false",
				rr = i("false", !1),
				nr = function() {
					return {
						type: "Literal",
						value: !1
					}
				},
				ir = o("number"),
				sr = /^[0-9]/,
				or = s([["0", "9"]], !1, !1),
				ur = function() {
					return {
						type: "Literal",
						value: parseFloat(n())
					}
				},
				ar = "0",
				cr = i("0", !1),
				lr = /^[1-9]/,
				fr = s([["1", "9"]], !1, !1),
				dr = "e",
				hr = i("e", !0),
				pr = o("string"),
				mr = '"',
				vr = i('"', !1),
				xr = '\\"',
				br = i('\\"', !1),
				gr = function() {
					return '"'
				},
				yr = /^[^"]/,
				Ar = s(['"'], !0, !1),
				Pr = function(e) {
					return {
						type: "Literal",
						value: e.join("")
					}
				},
				kr = "'",
				Cr = i("'", !1),
				Er = "\\'",
				wr = i("\\'", !1),
				Nr = function() {
					return "'"
				},
				jr = /^[^'']/,
				Lr = s(["'", "'"], !0, !1),
				$r = /^[\t ]/,
				zr = s(["\t", " "], !1, !1),
				Tr = 0,
				Fr = 0,
				Or = [{
					line: 1,
					column: 1
				}],
				Sr = 0,
				Br = [],
				Mr = 0,
				Rr = {};
			if ("startRule" in r) {
				if (!(r.startRule in H))
					throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
				J = H[r.startRule]
			}
			var Ir = function(e, t, r) {
				return 0 === r.length ? t : r.reduce(function(t, r) {
					return {
						type: e,
						operator: r.operator,
						left: t,
						right: r.arg
					}
				}, t)
			};
			if ((D = J()) !== _ && Tr === t.length) return D;
			throw D !== _ && Tr < t.length && c({
				type: "end"
			}), function(t, r, n) {
				return new e(e.buildMessage(t, r), t, r, n)
			}(Br, Sr < t.length ? t.charAt(Sr) : null, Sr < t.length ? a(Sr, Sr + 1) : a(Sr, Sr))
		}
		return function(e, t) {
				function r() {
					this.constructor = e
				}
				r.prototype = t.prototype, e.prototype = new r
			}(e, Error), e.buildMessage = function(e, t) {
				function r(e) {
					return e.charCodeAt(0).toString(16).toUpperCase()
				}
				function n(e) {
					return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
						return "\\x0" + r(e)
					}).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
						return "\\x" + r(e)
					})
				}
				function i(e) {
					return e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
						return "\\x0" + r(e)
					}).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
						return "\\x" + r(e)
					})
				}
				function s(e) {
					return o[e.type](e)
				}
				var o = {
					literal: function(e) {
						return '"' + n(e.text) + '"'
					},
					class: function(e) {
						var t,
							r = "";
						for (t = 0; t < e.parts.length; t++) r += e.parts[t] instanceof Array ? i(e.parts[t][0]) + "-" + i(e.parts[t][1]) : i(e.parts[t]);
						return "[" + (e.inverted ? "^" : "") + r + "]"
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
							r,
							n = new Array(e.length);
						for (t = 0; t < e.length; t++) n[t] = s(e[t]);
						if (n.sort(), n.length > 0) {
							for (t = 1, r = 1; t < n.length; t++) n[t - 1] !== n[t] && (n[r] = n[t], r++);
							n.length = r
						}
						switch (n.length) {
							case 1:
								return n[0];case 2:
								return n[0] + " or " + n[1];default:
								return n.slice(0, -1).join(", ") + ", or " + n[n.length - 1]
						}
					}(e) + " but " + function(e) {
						return e ? '"' + n(e) + '"' : "end of input"
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
		o = (t, r) => {
			let n,
				i,
				s = t.type,
				u = t.operator;
			if ("Literal" === s)
				n = t.value;
			else if ("ArrayExpression" === s)
				n = t.elements.map(e => o(e, r).value);
			else if ("ObjectExpression" === s)
				n = Object.assign({}, ...t.properties.map(e => ({
					[e.key.name || e.key.value]: o(e.value, r).value
				})));
			else if ("Identifier" === s) {
				let e = r;
				for (; e && void 0 === e[t.name];) e = e.$parent;
				e || (e = r), n = e[t.name], i = (r => e[t.name] = r)
			} else if ("MemberExpression" === s) {
				let e = o(t.object, r).value,
					s = "Identifier" === t.property.type ? t.property.name : o(t.property, r).value;
				n = void 0 !== e ? e[s] : void 0, i = (t => e[s] = t)
			} else if ("ConditionalExpression" === s)
				n = o(t.test, r).value ? o(t.consequent, r).value : o(t.alternate, r).value;
			else if ("UnaryExpression" === s || "UpdateExpression" === s) {
				let e = o(t.argument, r),
					a = e.value;
				n = "!" === u ? !a : "+" === u ? +a : "-" === u ? -a : "++" === u ? a + 1 : "--" === u ? a - 1 : null, "UpdateExpression" === s && ((i = e.set) && (n = i(n)), t.prefix || (n += "++" === u ? -1 : 1))
			} else if ("BinaryExpression" === s || "LogicalExpression" === s || "AssignmentExpression" === s) {
				let a = o(t.left, r),
					c = a.value,
					l = o(t.right, r).value;
				n = "===" === u ? c === l : "!==" === u ? c !== l : "==" === u ? c == l : "!=" === u ? c != l : "<" === u ? c < l : ">" === u ? c > l : "<=" === u ? c <= l : ">=" === u ? c >= l : "&&" === u ? c && l : "||" === u ? c || l : "+" === u ? "string" == typeof (c + l) ? e(c) + e(l) : c + l : "-" === u ? c - l : "*" === u ? c * l : "/" === u ? c / l : "%" === u ? c % l : "*=" === u ? c * l : "/=" === u ? c / l : "%=" === u ? c % l : "+=" === u ? c + l : "-=" === u ? c - l : "=" === u ? l : null, "AssignmentExpression" === s && (n = (i = a.set)(n))
			} else if ("CallExpression" === s || "NewExpression" === s) {
				let e = t.callee.object ? o(t.callee.object, r).value : r,
					i = o(t.callee, r).value,
					u = t.arguments.map(e => o(e, r).value);
				n = i ? "CallExpression" === s ? i.apply(e, u) : new (i.bind.apply(i, u)) : void 0
			}
			return {
				value: n,
				set: i
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
		c = (e, t, r) => {
			e.binds.forEach(r => l(e, t, r));e.children.forEach(e => e[t + "Binds"](r))
		},
		l = (e, t, r) => {
			if (!r.directive[t]) return;
			const n = function() {
				let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.ast;
				return o(t, e.scope).value
			};
			const i = "initialize" === t ? [e.node, ...r.args] : [e.scope, e.node, n, ...r.args];
			r.directive[t].apply(r, i)
		},
		f = (e, t, r) => {
			if (e instanceof d) return e;
			"string" == typeof e ? e = document.querySelector(e) : e.jquery && (e = e[0]);return new d(e, t, r)
		};
	class d {
		constructor(e, t) {
			let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
			if (this.node = e, this.children = [], this.binds = [], this.type = e.nodeType, e.vnode && !t)
				r ? (this.parent = e.vnode, e.vnode = this, this.type = this.parent.type, this.children = this.parent.children, this.binds = this.parent.binds, this.parent.children = [], this.parent.binds = []) : (e.vnode.parent = this, this.pointer = e.vnode);
			else if (t) {
				e.vnode = this, this.blocked = t.blocked, this.type = t.type, t.binds.forEach(e => {
					this.bind({
						ast: e.ast,
						directive: e.directive,
						args: e.args,
						key: e.key,
						template: e.template
					})
				}), t.attributes && (this.attributes = t.attributes.map(a), this.removedAttrs = t.removedAttrs.map(a));
				let r = Array.from(e.childNodes).filter(e => 1 === e.nodeType || 3 === e.nodeType);
				t.children.forEach(t => {
					this.children.push(f(t.fragment ? e : r.shift(), t))
				})
			} else e.vnode = this, this.initialize()
		}
		initialize() {
			let e = this.node;
			if (this.type = e.nodeType, 1 === this.type) this.tag = e.tagName, this.attributes = Array.from(e.attributes).map(a), this.removedAttrs = [], u.directives.forEach(t => {
					if (this.blocked) return;
					if (t.tag) {
						let e = this.tag.match(new RegExp("^" + t.tag.replace("{prefix}", u.prefix) + "$", "i"));
						e && this.bind({
							directive: t,
							args: e
						})
					} else t.attribute && (this.attributes = this.attributes.filter(r => {
							if (this.blocked) return;
							let n = r.name.match(new RegExp("^" + t.attribute.replace("{prefix}", u.prefix) + "$", "i"));
							if (!n) return !0;
							let i = s(r.value || "undefined");
							this.removedAttrs.push(a(r));e.removeAttribute(r.name);this.bind({
								directive: t,
								ast: i,
								args: n
							})
						}))
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
						this.bind({
							directive: u.inlineParser,
							ast: t[0].expression,
							args: ["", t[0].html ? "html" : "text"]
						})
					}
				} else {
					let r = document.createDocumentFragment();
					this.fragment = !0, t.forEach(e => {
						let t = "string" == typeof e ? document.createTextNode(e) : e.html ? document.createElement("span") : document.createTextNode(""),
							n = f(t);
						"string" != typeof e && n.bind({
							directive: u.inlineParser,
							ast: e.expression,
							args: ["", e.html ? "html" : "text"]
						});r.appendChild(t);this.children.push(n)
					}), e.parentNode.replaceChild(r, e)
				}
			}
		}
		bind(e) {
			if (e.directive.block && (this.blocked = !0), e.directive.template) {
				let t = e.directive.template.clone();
				Array.from(this.node.attributes).map(e => {
					t.node.setAttribute(e.name, e.value)
				}), this.node.parentNode.replaceChild(t.node, this.node), this.node = t.node, this.node.vnode = this, this.binds = this.binds.concat(t.binds), this.type = t.type, this.children = t.children
			} else this.binds.push(e);
			l(this, "initialize", e)
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
	let h,
		p = e => {
			e.inline && (u.inlineParser = e);
			if (e.template) {
				e.block = !0;
				var t = document.createElement("span");
				t.innerHTML = e.template, 1 === t.childNodes.length && (t = t.childNodes[0]), e.template = f(t)
			}
			e.order || (e.order = 100);let r = u.directives.findIndex(t => e.order < t.order);
			u.directives.splice(-1 === r ? u.directives.length : r, 0, e);return e
		},
		m = 0;
	const v = (e, t) => {
			e[t] && e[t].forEach(e => e())
		},
		x = function e(t, r) {
			let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
			if (!n.includes(r)) return n = n.concat([r]), new Proxy(r, {
						get(e, r, n) {
							var i = Reflect.get(e, r, n);
							return e instanceof Date && "string" == typeof r ? (r.startsWith("set") && t.$(!0), i.bind(e)) : e instanceof Array || "function" != typeof i ? i : i.bind(e)
						},
						set(r, i, s, o) {
							h || ("object" == typeof s && null !== s && (s = e(t, s, n)), t.$(!0)), h = !0;
							let u = Reflect.set(r, i, s, o);
							return h = !1, u
						},
						deleteProperty(e, r) {
							h || t.$(!0), h = !0;
							let n = Reflect.deleteProperty(e, r);
							return h = !1, n
						}
					})
		},
		b = (e, r, i) => {
			let u,
				a = f(e, null, !0),
				c = {},
				l = [],
				d = Object.assign({
					$id: m++,
					$(e) {
						if (a) return e ? u || (u = n(() => d.$())) : (u && (u = u()), a.updateBinds(d), v(c, "update"), l.forEach(e => {
									const t = o(e.ast, d).value;
									t !== e.val && (e.val = t, e.cb(t))
								})), d
					},
					$destroy() {
						return a.destroyBinds(d), v(c, "destroy"), a = void 0, d
					},
					$on(e, t) {
						return c[e] = [t].concat(c[e] || []), d
					},
					$off(e, r) {
						return t(c[e], r), d
					},
					$watch(e, t) {
						return l.push({
								expr: e,
								ast: s(e),
								cb: t
							}), d
					},
					$unwatch(e, r) {
						const n = l.find(t => t.expr === e && t.cb === r);
						return t(l, n), d
					},
					get $parent() {
						return i || a.parent && a.parent.scope || b.root
					}
				}, r);
			a.createBinds(d);d.$(!0);return x(d, d)
		};
	Object.assign(b, {
		version: "0.5.0",
		parse: s,
		evaluate: o,
		directive: p,
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
	}), Object.defineProperty(b, "prefix", {
		get() {
			return u.prefix
		},
		set(e) {
			u.prefix = e
		}
	});
	const g = ["selected", "checked", "disabled", "readonly", "multiple", "ismap", "defer", "noresize"];
	return [{
			attribute: "{prefix}(text|html)",
			block: !0,
			inline: !0,
			initialize(e) {
				e.innerHTML = ""
			},
			update(t, r, n, i, s) {
				let o = e(n());
				o !== this.value && ("html" === s ? r.innerHTML = o : r.textContent = o, this.value = o)
			}
		}, {
			attribute: "{prefix}show",
			update(e, t, r) {
				let n = r() ? "" : "none";
				n !== this.value && (t.style.display = this.value = n)
			}
		}, {
			attribute: `{prefix}(?:attr-(.+)|(${["accept", "accept-charset", "accesskey", "action", "align", "alt", "async", "autocomplete", "autofocus", "autoplay", "autosave", "buffered", "challenge", "charset", "checked", "cite", "class", "code", "codebase", "cols", "colspan", "content", "contenteditable", "contextmenu", "controls", "coords", "crossorigin", "data", "data-*", "datetime", "default", "defer", "dir", "dirname", "disabled", "download", "draggable", "dropzone", "enctype", "for", "form", "formaction", "headers", "hidden", "high", "href", "hreflang", "http-equiv", "icon", "id", "integrity", "ismap", "itemprop", "keytype", "kind", "label", "lang", "language", "list", "loop", "low", "manifest", "max", "maxlength", "minlength", "media", "method", "min", "multiple", "muted", "name", "novalidate", "open", "optimum", "pattern", "ping", "placeholder", "poster", "preload", "radiogroup", "readonly", "rel", "required", "reversed", "rows", "rowspan", "sandbox", "scope", "scoped", "seamless", "selected", "shape", "size", "sizes", "slot", "span", "spellcheck", "src", "srcdoc", "srclang", "srcset", "start", "step", "style", "summary", "tabindex", "target", "title", "type", "usemap", "value", "wrap"].join("|")}))`,
			update(e, t, r, n, i, s) {
				i = i || s;
				let o = r();
				o !== this.value && (this.value = o, g.includes(i) && (o = o ? i : void 0), void 0 === o ? t.removeAttribute(i) : t.setAttribute(i, o))
			}
		}, {
			attribute: "{prefix}class-(.+)",
			update(e, t, r, n, i) {
				let s = r();
				s !== this.value && (this.value = s, t.classList.toggle(i, s))
			}
		}, {
			attribute: "{prefix}exist",
			order: 3,
			block: !0,
			initialize(e) {
				this.template = f(e.cloneNode(!0))
			},
			create(e, t, r, n) {
				this.marker = document.createComment(n), t.parentNode.replaceChild(this.marker, t)
			},
			update(e, t, r) {
				let n = !!r();
				n !== this.value && (n ? (this.vnode = this.template.clone(), this.marker.parentNode.insertBefore(this.vnode.node, this.marker), this.view = b(this.vnode, void 0, e).$()) : this.view && (this.view.$destroy(), this.marker.parentNode.removeChild(this.vnode.node),
				delete this.vnode
				,
				delete this.view
				), this.value = n)
			}
		}, {
			attribute: `{prefix}(?:style-(.+)|(${["align-.*", "all", "animation", "animation-.*", "backface-visibility", "background", "background-.*", "border", "border-.*", "bottom", "box-.*", "break-.*", "caption-side", "caret-color", "clear", "clip", "clip-path", "color", "column-.*", "columns", "content", "counter-.*", "cursor", "direction", "display", "empty-cells", "filter", "flex-.*", "float", "font", "font-.*", "grid", "grid-.*", "height", "hyphens", "image-.*", "ime-mode", "inline-size", "isolation", "justify-content", "left", "letter-spacing", "line-.*", "list-.*", "margin", "margin-.*", "mask", "mask-.*", "max-height", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "object-fit", "object-position", "offset-.*", "opacity", "order", "orphans", "outline", "outline-.*", "overflow", "overflow-.*", "padding", "padding-.*", "page-break-.*", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "scroll-.*", "shape-.*", "tab-size", "table-layout", "text-.*", "top", "touch-action", "transform", "transform-.*", "transition", "transition-.*", "unicode-bidi", "unset", "vertical-align", "visibility", "white-space", "widows", "width", "will-change", "word-.*", "writing-mode", "z-index"].join("|")}))`,
			update(e, t, r, n, i, s) {
				let o = r();
				o !== this.value && (t.style[i || s] = this.value = o)
			}
		}, {
			attribute: "{prefix}model",
			block: !0,
			order: 3,
			create(e, t, n) {
				let i = t.tagName.toLowerCase(),
					o = (t.getAttribute("type") || "").toLowerCase();
				this.type = "checkbox" === o ? "checkbox" : "select" === i ? "select" : "radio" === o ? "radio" : ["range", "number"].includes(o) ? "number" : ["date", "datetime-local", "time", "month", "week"].includes(o) ? "date" : "text", "radio" !== this.type || t.getAttribute("name") || t.setAttribute("name", r(e.$id + JSON.stringify(this.ast))), this.getValue = (e => {
					var t = e.getAttribute(u.prefix + "value");
					return t ? n(s(t)) : e.getAttribute("value")
				}), this.handler = (() => {
					if ("radio" === this.type && !t.checked) return;
					let r = "checkbox" === this.type ? !!t.checked : "select" === this.type ? this.getValue(t.options[t.selectedIndex]) : "radio" === this.type ? this.getValue(t) : "number" === this.type ? Number(t.value) : "date" === this.type ? t.valueAsDate : t.value;
					r !== this.value && (this.value = r, n({
						type: "AssignmentExpression",
						operator: "=",
						left: this.ast,
						right: {
							type: "Literal",
							value: r
						}
					}), e.$())
				}), t.addEventListener("input", this.handler), t.addEventListener("change", this.handler), "select" === this.type && (t.selectedIndex = -1)
			},
			update(t, r, n) {
				let i = n();
				if (i !== this.value) {
					if ("checkbox" === this.type)
						r.checked = !!i;
					else if ("select" === this.type)
						r.selectedIndex = Array.from(r.options).reduce((t, r, n) => {
							let s = this.getValue(r);
							r.setAttribute("value", e(s));return s === i ? n : t
						}, -1);
					else if ("radio" === this.type) {
						let t = this.getValue(r);
						r.setAttribute("value", e(t)), r.checked = i === t
					} else
						"number" === this.type ? r.value = Number(i) : "date" === this.type ? r.valueAsDate = new Date(i.getTime()) : r.value = e(i);
					this.value = i
				}
			},
			destroy(e, t) {
				t.removeEventListener("input", this.handler), t.removeEventListener("change", this.handler)
			}
		}, {
			attribute: "{prefix}(.+)-in",
			order: 2,
			block: !0,
			initialize(e, t, r) {
				this.items = [];
				const n = e.getAttribute(u.prefix + "key");
				if (n) {
					const t = s(n);
					e.removeAttribute(u.prefix + "key"), this.key = (e => o(t, {
						[r]: e
					}).value)
				} else
					this.key = (e => JSON.stringify(e));
				this.template = f(e.cloneNode(!0))
			},
			create(e, t, r, n) {
				this.marker = document.createComment(n), t.parentNode.replaceChild(this.marker, t)
			},
			update(e, r, n, i, s) {
				let o = n() || [],
					u = Object.keys(o).map(e => ({
						index: e,
						computed: this.key(o[e]),
						datum: o[e]
					}));
				[].concat(this.items).forEach(e => {
					e.key = this.key(e.datum);let r = u.find(t => t.computed === e.key);
					r || (this.marker.parentNode.removeChild(e.node), e.view.$destroy(), t(this.items, e))
				}), u.forEach(r => {
					let n = this.items.find(e => r.computed === e.key);
					if (n) t(this.items, n), this.marker.parentNode.insertBefore(n.node, this.marker);
					else {
						let t = this.template.clone();
						n = {
							key: r.computed,
							datum: r.datum,
							node: t.node
						}, this.marker.parentNode.insertBefore(n.node, this.marker), n.view = b(t, {
							[s]: n.datum
						}, e)
					}
					n.view.$index = r.index;n.view.$();this.items.push(n)
				})
			}
		}, {
			attribute: `{prefix}(?:on-(.+)|(${["load", "error", "focus", "blur", "click", "dblclick", "mouse.*", "keyup", "keydown", "keypress", "input", "change", "submit", "reset", "scroll", "resize", "drag.*", "drop"].join("|")}))`,
			create(e, t, r, n, i, s) {
				this.handler = (t => {
					e.$event = t;r();e.$();
					delete e.$event;
					"submit" === (i || s) && t.preventDefault()
				}), t.addEventListener(i || s, this.handler)
			},
			destroy(e, t, r, n, i, s) {
				t.removeEventListener(i || s, this.handler)
			}
		}, {
			attribute: "{prefix}skip",
			order: 1,
			block: !0
		}, {
			attribute: "{prefix}cloak",
			initialize(e) {
				e.display = ""
			}
		}].forEach(p), b
});
