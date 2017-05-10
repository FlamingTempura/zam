!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.zam=t()}(this,function(){"use strict";var e=function(){function e(e,t){function r(){this.constructor=e}r.prototype=t.prototype,e.prototype=new r}function t(e,r,n,i){this.message=e,this.expected=r,this.found=n,this.location=i,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,t)}function r(e,r){function n(){return e.substring(Rr,Or)}function i(e,t){return{type:"literal",text:e,ignoreCase:t}}function a(e,t,r){return{type:"class",parts:e,inverted:t,ignoreCase:r}}function o(){return{type:"any"}}function u(){return{type:"end"}}function c(e){return{type:"other",description:e}}function s(t){var r,n=Sr[t];if(n)return n;for(r=t-1;!Sr[r];)r--;for(n=Sr[r],n={line:n.line,column:n.column};r<t;)10===e.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return Sr[t]=n,n}function l(e,t){var r=s(e),n=s(t);return{start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:n.line,column:n.column}}}function f(e){Or<Ur||(Or>Ur&&(Ur=Or,qr=[]),qr.push(e))}function p(e,r,n){return new t(t.buildMessage(e,r),e,r,n)}function d(){var t,r,n,i;for(t=Or,r=[],Q.test(e.charAt(Or))?(n=e.charAt(Or),Or++):(n=G,0===Br&&f(W));n!==G;)r.push(n),Q.test(e.charAt(Or))?(n=e.charAt(Or),Or++):(n=G,0===Br&&f(W));if(r!==G?(n=h(),n!==G?(i=d(),i!==G?(Rr=t,r=X(r,n,i),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G),t===G){for(t=Or,r=[],e.length>Or?(n=e.charAt(Or),Or++):(n=G,0===Br&&f(Y));n!==G;)r.push(n),e.length>Or?(n=e.charAt(Or),Or++):(n=G,0===Br&&f(Y));r!==G&&(Rr=t,r=Z(r)),t=r}return t}function h(){var t,r,n,i,a,o;return t=Or,"{{{"===e.substr(Or,3)?(r=ee,Or+=3):(r=G,0===Br&&f(te)),r!==G?(n=H(),n!==G?(i=m(),i!==G?(a=H(),a!==G?("}}}"===e.substr(Or,3)?(o=re,Or+=3):(o=G,0===Br&&f(ne)),o!==G?(Rr=t,r=ie(i),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G),t===G&&(t=Or,"{{"===e.substr(Or,2)?(r=ae,Or+=2):(r=G,0===Br&&f(oe)),r!==G?(n=H(),n!==G?(i=m(),i!==G?(a=H(),a!==G?("}}"===e.substr(Or,2)?(o=ue,Or+=2):(o=G,0===Br&&f(ce)),o!==G?(Rr=t,r=se(i),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)),t}function m(){var t,r,n,i,a,o;return t=Or,r=v(),r!==G?(n=H(),n!==G?(61===e.charCodeAt(Or)?(i=le,Or++):(i=G,0===Br&&f(fe)),i===G&&("*="===e.substr(Or,2)?(i=pe,Or+=2):(i=G,0===Br&&f(de)),i===G&&("/="===e.substr(Or,2)?(i=he,Or+=2):(i=G,0===Br&&f(me)),i===G&&("%="===e.substr(Or,2)?(i=ve,Or+=2):(i=G,0===Br&&f(ge)),i===G&&("+="===e.substr(Or,2)?(i=be,Or+=2):(i=G,0===Br&&f(Ae)),i===G&&("-="===e.substr(Or,2)?(i=ye,Or+=2):(i=G,0===Br&&f(xe))))))),i!==G?(a=H(),a!==G?(o=m(),o!==G?(Rr=t,r=Ce(r,i,o),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G),t===G&&(t=g()),t}function v(){var e;return e=E(),e===G&&(e=z()),e}function g(){var t,r,n,i,a,o,u,c,s,l;return t=Or,r=b(),r!==G?(n=H(),n!==G?(63===e.charCodeAt(Or)?(i=ke,Or++):(i=G,0===Br&&f($e)),i!==G?(a=H(),a!==G?(o=g(),o!==G?(u=H(),u!==G?(58===e.charCodeAt(Or)?(c=we,Or++):(c=G,0===Br&&f(Ee)),c!==G?(s=H(),s!==G?(l=g(),l!==G?(Rr=t,r=ze(r,o,l),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G),t===G&&(t=b()),t}function b(){var t,r,n,i,a,o,u,c;if(t=Or,r=A(),r!==G){for(n=[],i=Or,a=H(),a!==G?("||"===e.substr(Or,2)?(o=je,Or+=2):(o=G,0===Br&&f(Ne)),o!==G?(u=H(),u!==G?(c=A(),c!==G?(Rr=i,a=Le(r,c),i=a):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G);i!==G;)n.push(i),i=Or,a=H(),a!==G?("||"===e.substr(Or,2)?(o=je,Or+=2):(o=G,0===Br&&f(Ne)),o!==G?(u=H(),u!==G?(c=A(),c!==G?(Rr=i,a=Le(r,c),i=a):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G);n!==G?(Rr=t,r=Te(r,n),t=r):(Or=t,t=G)}else Or=t,t=G;return t}function A(){var t,r,n,i,a,o,u,c;if(t=Or,r=y(),r!==G){for(n=[],i=Or,a=H(),a!==G?("&&"===e.substr(Or,2)?(o=Ve,Or+=2):(o=G,0===Br&&f(Fe)),o!==G?(u=H(),u!==G?(c=y(),c!==G?(Rr=i,a=Me(r,c),i=a):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G);i!==G;)n.push(i),i=Or,a=H(),a!==G?("&&"===e.substr(Or,2)?(o=Ve,Or+=2):(o=G,0===Br&&f(Fe)),o!==G?(u=H(),u!==G?(c=y(),c!==G?(Rr=i,a=Me(r,c),i=a):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G);n!==G?(Rr=t,r=Te(r,n),t=r):(Or=t,t=G)}else Or=t,t=G;return t}function y(){var t,r,n,i,a,o,u,c;if(t=Or,r=x(),r!==G){for(n=[],i=Or,a=H(),a!==G?("==="===e.substr(Or,3)?(o=Oe,Or+=3):(o=G,0===Br&&f(Re)),o===G&&("!=="===e.substr(Or,3)?(o=Se,Or+=3):(o=G,0===Br&&f(Ue)),o===G&&("=="===e.substr(Or,2)?(o=qe,Or+=2):(o=G,0===Br&&f(Be)),o===G&&("!="===e.substr(Or,2)?(o=Pe,Or+=2):(o=G,0===Br&&f(_e))))),o!==G?(u=H(),u!==G?(c=x(),c!==G?(Rr=i,a=He(r,o,c),i=a):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G);i!==G;)n.push(i),i=Or,a=H(),a!==G?("==="===e.substr(Or,3)?(o=Oe,Or+=3):(o=G,0===Br&&f(Re)),o===G&&("!=="===e.substr(Or,3)?(o=Se,Or+=3):(o=G,0===Br&&f(Ue)),o===G&&("=="===e.substr(Or,2)?(o=qe,Or+=2):(o=G,0===Br&&f(Be)),o===G&&("!="===e.substr(Or,2)?(o=Pe,Or+=2):(o=G,0===Br&&f(_e))))),o!==G?(u=H(),u!==G?(c=x(),c!==G?(Rr=i,a=He(r,o,c),i=a):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G);n!==G?(Rr=t,r=Ie(r,n),t=r):(Or=t,t=G)}else Or=t,t=G;return t}function x(){var t,r,n,i,a,o,u,c;if(t=Or,r=C(),r!==G){for(n=[],i=Or,a=H(),a!==G?("<="===e.substr(Or,2)?(o=De,Or+=2):(o=G,0===Br&&f(Ge)),o===G&&(">="===e.substr(Or,2)?(o=Je,Or+=2):(o=G,0===Br&&f(Ke)),o===G&&(60===e.charCodeAt(Or)?(o=Qe,Or++):(o=G,0===Br&&f(We)),o===G&&(62===e.charCodeAt(Or)?(o=Xe,Or++):(o=G,0===Br&&f(Ye))))),o!==G?(u=H(),u!==G?(c=C(),c!==G?(Rr=i,a=He(r,o,c),i=a):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G);i!==G;)n.push(i),i=Or,a=H(),a!==G?("<="===e.substr(Or,2)?(o=De,Or+=2):(o=G,0===Br&&f(Ge)),o===G&&(">="===e.substr(Or,2)?(o=Je,Or+=2):(o=G,0===Br&&f(Ke)),o===G&&(60===e.charCodeAt(Or)?(o=Qe,Or++):(o=G,0===Br&&f(We)),o===G&&(62===e.charCodeAt(Or)?(o=Xe,Or++):(o=G,0===Br&&f(Ye))))),o!==G?(u=H(),u!==G?(c=C(),c!==G?(Rr=i,a=He(r,o,c),i=a):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G);n!==G?(Rr=t,r=Ie(r,n),t=r):(Or=t,t=G)}else Or=t,t=G;return t}function C(){var t,r,n,i,a,o,u,c;if(t=Or,r=k(),r!==G){for(n=[],i=Or,a=H(),a!==G?(Ze.test(e.charAt(Or))?(o=e.charAt(Or),Or++):(o=G,0===Br&&f(et)),o!==G?(u=H(),u!==G?(c=k(),c!==G?(Rr=i,a=He(r,o,c),i=a):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G);i!==G;)n.push(i),i=Or,a=H(),a!==G?(Ze.test(e.charAt(Or))?(o=e.charAt(Or),Or++):(o=G,0===Br&&f(et)),o!==G?(u=H(),u!==G?(c=k(),c!==G?(Rr=i,a=He(r,o,c),i=a):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G);n!==G?(Rr=t,r=Ie(r,n),t=r):(Or=t,t=G)}else Or=t,t=G;return t}function k(){var t,r,n,i,a,o,u,c;if(t=Or,r=$(),r!==G){for(n=[],i=Or,a=H(),a!==G?(tt.test(e.charAt(Or))?(o=e.charAt(Or),Or++):(o=G,0===Br&&f(rt)),o!==G?(u=H(),u!==G?(c=$(),c!==G?(Rr=i,a=He(r,o,c),i=a):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G);i!==G;)n.push(i),i=Or,a=H(),a!==G?(tt.test(e.charAt(Or))?(o=e.charAt(Or),Or++):(o=G,0===Br&&f(rt)),o!==G?(u=H(),u!==G?(c=$(),c!==G?(Rr=i,a=He(r,o,c),i=a):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G);n!==G?(Rr=t,r=Ie(r,n),t=r):(Or=t,t=G)}else Or=t,t=G;return t}function $(){var t,r,n,i;return t=w(),t===G&&(t=Or,"++"===e.substr(Or,2)?(r=nt,Or+=2):(r=G,0===Br&&f(it)),r===G&&("--"===e.substr(Or,2)?(r=at,Or+=2):(r=G,0===Br&&f(ot)),r===G&&(ut.test(e.charAt(Or))?(r=e.charAt(Or),Or++):(r=G,0===Br&&f(ct)))),r!==G?(n=H(),n!==G?(i=$(),i!==G?(Rr=t,r=st(r,i),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)),t}function w(){var t,r,n,i;return t=Or,r=v(),r!==G?(n=H(),n!==G?("++"===e.substr(Or,2)?(i=nt,Or+=2):(i=G,0===Br&&f(it)),i===G&&("--"===e.substr(Or,2)?(i=at,Or+=2):(i=G,0===Br&&f(ot))),i!==G?(Rr=t,r=lt(r,i),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G),t===G&&(t=v()),t}function E(){var e,t,r,n,i;return e=Or,t=Or,r=z(),r!==G?(n=H(),n!==G?(i=L(),i!==G?(Rr=t,r=ft(r,i),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G),t!==G?(r=j(),r!==G?(Rr=e,t=pt(t,r),e=t):(Or=e,e=G)):(Or=e,e=G),e}function z(){var t,r,n,i,a,o,u;return t=Or,r=N(),r===G&&(r=T(),r===G&&(r=S(),r===G&&(r=V(),r===G&&(r=M(),r===G&&(r=Or,40===e.charCodeAt(Or)?(n=dt,Or++):(n=G,0===Br&&f(ht)),n!==G?(i=H(),i!==G?(a=m(),a!==G?(o=H(),o!==G?(41===e.charCodeAt(Or)?(u=mt,Or++):(u=G,0===Br&&f(vt)),u!==G?(Rr=r,n=gt(a),r=n):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G)))))),r!==G?(n=j(),n!==G?(Rr=t,r=bt(r,n),t=r):(Or=t,t=G)):(Or=t,t=G),t}function j(){var t,r,n,i,a,o,u,c;for(t=[],r=Or,n=H(),n!==G?(91===e.charCodeAt(Or)?(i=At,Or++):(i=G,0===Br&&f(yt)),i!==G?(a=H(),a!==G?(o=m(),o!==G?(u=H(),u!==G?(93===e.charCodeAt(Or)?(c=xt,Or++):(c=G,0===Br&&f(Ct)),c!==G?(Rr=r,n=kt(o),r=n):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G),r===G&&(r=Or,n=H(),n!==G?(46===e.charCodeAt(Or)?(i=$t,Or++):(i=G,0===Br&&f(wt)),i!==G?(a=H(),a!==G?(o=T(),o!==G?(Rr=r,n=Et(o),r=n):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G));r!==G;)t.push(r),r=Or,n=H(),n!==G?(91===e.charCodeAt(Or)?(i=At,Or++):(i=G,0===Br&&f(yt)),i!==G?(a=H(),a!==G?(o=m(),o!==G?(u=H(),u!==G?(93===e.charCodeAt(Or)?(c=xt,Or++):(c=G,0===Br&&f(Ct)),c!==G?(Rr=r,n=kt(o),r=n):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G),r===G&&(r=Or,n=H(),n!==G?(46===e.charCodeAt(Or)?(i=$t,Or++):(i=G,0===Br&&f(wt)),i!==G?(a=H(),a!==G?(o=T(),o!==G?(Rr=r,n=Et(o),r=n):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G));return t}function N(){var t,r,n,i,a,o,u;return t=Or,"new"===e.substr(Or,3)?(r=zt,Or+=3):(r=G,0===Br&&f(jt)),r!==G?(n=I(),n!==G?(i=z(),i!==G?(a=Or,o=H(),o!==G?(u=L(),u!==G?(Rr=a,o=Nt(i,u),a=o):(Or=a,a=G)):(Or=a,a=G),a===G&&(a=null),a!==G?(Rr=t,r=Lt(i,a),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G),t}function L(){var t,r,n,i,a,o,u,c,s,l;if(t=Or,40===e.charCodeAt(Or)?(r=dt,Or++):(r=G,0===Br&&f(ht)),r!==G?(n=H(),n!==G?(41===e.charCodeAt(Or)?(i=mt,Or++):(i=G,0===Br&&f(vt)),i!==G?(Rr=t,r=Tt(),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G),t===G)if(t=Or,40===e.charCodeAt(Or)?(r=dt,Or++):(r=G,0===Br&&f(ht)),r!==G)if(n=H(),n!==G)if(i=m(),i!==G){for(a=[],o=Or,u=H(),u!==G?(44===e.charCodeAt(Or)?(c=Vt,Or++):(c=G,0===Br&&f(Ft)),c!==G?(s=H(),s!==G?(l=m(),l!==G?(Rr=o,u=Mt(i,l),o=u):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G);o!==G;)a.push(o),o=Or,u=H(),u!==G?(44===e.charCodeAt(Or)?(c=Vt,Or++):(c=G,0===Br&&f(Ft)),c!==G?(s=H(),s!==G?(l=m(),l!==G?(Rr=o,u=Mt(i,l),o=u):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G);a!==G?(o=H(),o!==G?(41===e.charCodeAt(Or)?(u=mt,Or++):(u=G,0===Br&&f(vt)),u!==G?(Rr=t,r=Ot(i,a),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)}else Or=t,t=G;else Or=t,t=G;else Or=t,t=G;return t}function T(){var t,r,n,i,a;if(Br++,t=Or,r=Or,Br++,n=U(),Br--,n===G?r=void 0:(Or=r,r=G),r!==G)if(St.test(e.charAt(Or))?(n=e.charAt(Or),Or++):(n=G,0===Br&&f(Ut)),n!==G){for(i=[],qt.test(e.charAt(Or))?(a=e.charAt(Or),Or++):(a=G,0===Br&&f(Bt));a!==G;)i.push(a),qt.test(e.charAt(Or))?(a=e.charAt(Or),Or++):(a=G,0===Br&&f(Bt));i!==G?(Rr=t,r=Pt(n,i),t=r):(Or=t,t=G)}else Or=t,t=G;else Or=t,t=G;return Br--,t===G&&(r=G,0===Br&&f(Rt)),t}function V(){var t,r,n,i,a,o;return t=Or,91===e.charCodeAt(Or)?(r=At,Or++):(r=G,0===Br&&f(yt)),r!==G?(n=H(),n!==G?(93===e.charCodeAt(Or)?(i=xt,Or++):(i=G,0===Br&&f(Ct)),i!==G?(Rr=t,r=_t(),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G),t===G&&(t=Or,91===e.charCodeAt(Or)?(r=At,Or++):(r=G,0===Br&&f(yt)),r!==G?(n=H(),n!==G?(i=F(),i!==G?(a=H(),a!==G?(93===e.charCodeAt(Or)?(o=xt,Or++):(o=G,0===Br&&f(Ct)),o!==G?(Rr=t,r=Ht(i),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)),t}function F(){var t,r,n,i,a,o,u,c;if(t=Or,r=m(),r!==G){for(n=[],i=Or,a=H(),a!==G?(44===e.charCodeAt(Or)?(o=Vt,Or++):(o=G,0===Br&&f(Ft)),o!==G?(u=H(),u!==G?(c=m(),c!==G?(Rr=i,a=It(r,c),i=a):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G);i!==G;)n.push(i),i=Or,a=H(),a!==G?(44===e.charCodeAt(Or)?(o=Vt,Or++):(o=G,0===Br&&f(Ft)),o!==G?(u=H(),u!==G?(c=m(),c!==G?(Rr=i,a=It(r,c),i=a):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G);n!==G?(Rr=t,r=Ot(r,n),t=r):(Or=t,t=G)}else Or=t,t=G;return t}function M(){var t,r,n,i,a,o,u,c;return t=Or,123===e.charCodeAt(Or)?(r=Dt,Or++):(r=G,0===Br&&f(Gt)),r!==G?(n=H(),n!==G?(125===e.charCodeAt(Or)?(i=Jt,Or++):(i=G,0===Br&&f(Kt)),i!==G?(Rr=t,r=Qt(),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G),t===G&&(t=Or,123===e.charCodeAt(Or)?(r=Dt,Or++):(r=G,0===Br&&f(Gt)),r!==G?(n=H(),n!==G?(i=O(),i!==G?(a=H(),a!==G?(o=Or,44===e.charCodeAt(Or)?(u=Vt,Or++):(u=G,0===Br&&f(Ft)),u!==G?(c=H(),c!==G?(u=[u,c],o=u):(Or=o,o=G)):(Or=o,o=G),o===G&&(o=null),o!==G?(125===e.charCodeAt(Or)?(u=Jt,Or++):(u=G,0===Br&&f(Kt)),u!==G?(Rr=t,r=Wt(i),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)),t}function O(){var t,r,n,i,a,o,u,c;if(t=Or,r=R(),r!==G){for(n=[],i=Or,a=H(),a!==G?(44===e.charCodeAt(Or)?(o=Vt,Or++):(o=G,0===Br&&f(Ft)),o!==G?(u=H(),u!==G?(c=R(),c!==G?(Rr=i,a=Xt(r,c),i=a):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G);i!==G;)n.push(i),i=Or,a=H(),a!==G?(44===e.charCodeAt(Or)?(o=Vt,Or++):(o=G,0===Br&&f(Ft)),o!==G?(u=H(),u!==G?(c=R(),c!==G?(Rr=i,a=Xt(r,c),i=a):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G)):(Or=i,i=G);n!==G?(Rr=t,r=Ot(r,n),t=r):(Or=t,t=G)}else Or=t,t=G;return t}function R(){var t,r,n,i,a,o;return t=Or,r=T(),r===G&&(r=_(),r===G&&(r=q())),r!==G?(n=H(),n!==G?(58===e.charCodeAt(Or)?(i=we,Or++):(i=G,0===Br&&f(Ee)),i!==G?(a=H(),a!==G?(o=m(),o!==G?(Rr=t,r=Yt(r,o),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G),t}function S(){var e;return e=U(),e===G&&(e=q(),e===G&&(e=_())),e}function U(){var t,r;return t=Or,"null"===e.substr(Or,4)?(r=Zt,Or+=4):(r=G,0===Br&&f(er)),r!==G&&(Rr=t,r=tr()),t=r,t===G&&(t=Or,"true"===e.substr(Or,4)?(r=rr,Or+=4):(r=G,0===Br&&f(nr)),r!==G&&(Rr=t,r=ir()),t=r,t===G&&(t=Or,"false"===e.substr(Or,5)?(r=ar,Or+=5):(r=G,0===Br&&f(or)),r!==G&&(Rr=t,r=ur()),t=r)),t}function q(){var t,r,n,i,a;if(Br++,t=Or,r=B(),r!==G)if(46===e.charCodeAt(Or)?(n=$t,Or++):(n=G,0===Br&&f(wt)),n!==G){for(i=[],sr.test(e.charAt(Or))?(a=e.charAt(Or),Or++):(a=G,0===Br&&f(lr));a!==G;)i.push(a),sr.test(e.charAt(Or))?(a=e.charAt(Or),Or++):(a=G,0===Br&&f(lr));i!==G?(a=P(),a===G&&(a=null),a!==G?(Rr=t,r=fr(),t=r):(Or=t,t=G)):(Or=t,t=G)}else Or=t,t=G;else Or=t,t=G;if(t===G){if(t=Or,46===e.charCodeAt(Or)?(r=$t,Or++):(r=G,0===Br&&f(wt)),r!==G){if(n=[],sr.test(e.charAt(Or))?(i=e.charAt(Or),Or++):(i=G,0===Br&&f(lr)),i!==G)for(;i!==G;)n.push(i),sr.test(e.charAt(Or))?(i=e.charAt(Or),Or++):(i=G,0===Br&&f(lr));else n=G;n!==G?(i=P(),i===G&&(i=null),i!==G?(Rr=t,r=fr(),t=r):(Or=t,t=G)):(Or=t,t=G)}else Or=t,t=G;t===G&&(t=Or,r=B(),r!==G?(n=P(),n===G&&(n=null),n!==G?(Rr=t,r=fr(),t=r):(Or=t,t=G)):(Or=t,t=G))}return Br--,t===G&&(r=G,0===Br&&f(cr)),t}function B(){var t,r,n,i;if(48===e.charCodeAt(Or)?(t=pr,Or++):(t=G,0===Br&&f(dr)),t===G)if(t=Or,hr.test(e.charAt(Or))?(r=e.charAt(Or),Or++):(r=G,0===Br&&f(mr)),r!==G){for(n=[],sr.test(e.charAt(Or))?(i=e.charAt(Or),Or++):(i=G,0===Br&&f(lr));i!==G;)n.push(i),sr.test(e.charAt(Or))?(i=e.charAt(Or),Or++):(i=G,0===Br&&f(lr));n!==G?(r=[r,n],t=r):(Or=t,t=G)}else Or=t,t=G;return t}function P(){var t,r,n,i,a;if(t=Or,"e"===e.substr(Or,1).toLowerCase()?(r=e.charAt(Or),Or++):(r=G,0===Br&&f(vr)),r!==G)if(Ze.test(e.charAt(Or))?(n=e.charAt(Or),Or++):(n=G,0===Br&&f(et)),n===G&&(n=null),n!==G){if(i=[],sr.test(e.charAt(Or))?(a=e.charAt(Or),Or++):(a=G,0===Br&&f(lr)),a!==G)for(;a!==G;)i.push(a),sr.test(e.charAt(Or))?(a=e.charAt(Or),Or++):(a=G,0===Br&&f(lr));else i=G;i!==G?(r=[r,n,i],t=r):(Or=t,t=G)}else Or=t,t=G;else Or=t,t=G;return t}function _(){var t,r,n,i,a;if(Br++,t=Or,34===e.charCodeAt(Or)?(r=br,Or++):(r=G,0===Br&&f(Ar)),r!==G){for(n=[],i=Or,'\\"'===e.substr(Or,2)?(a=yr,Or+=2):(a=G,0===Br&&f(xr)),a!==G&&(Rr=i,a=Cr()),i=a,i===G&&(kr.test(e.charAt(Or))?(i=e.charAt(Or),Or++):(i=G,0===Br&&f($r)));i!==G;)n.push(i),i=Or,'\\"'===e.substr(Or,2)?(a=yr,Or+=2):(a=G,0===Br&&f(xr)),a!==G&&(Rr=i,a=Cr()),i=a,i===G&&(kr.test(e.charAt(Or))?(i=e.charAt(Or),Or++):(i=G,0===Br&&f($r)));n!==G?(34===e.charCodeAt(Or)?(i=br,Or++):(i=G,0===Br&&f(Ar)),i!==G?(Rr=t,r=wr(n),t=r):(Or=t,t=G)):(Or=t,t=G)}else Or=t,t=G;if(t===G)if(t=Or,39===e.charCodeAt(Or)?(r=Er,Or++):(r=G,0===Br&&f(zr)),r!==G){for(n=[],i=Or,"\\'"===e.substr(Or,2)?(a=jr,Or+=2):(a=G,0===Br&&f(Nr)),a!==G&&(Rr=i,a=Lr()),i=a,i===G&&(Tr.test(e.charAt(Or))?(i=e.charAt(Or),Or++):(i=G,0===Br&&f(Vr)));i!==G;)n.push(i),i=Or,"\\'"===e.substr(Or,2)?(a=jr,Or+=2):(a=G,0===Br&&f(Nr)),a!==G&&(Rr=i,a=Lr()),i=a,i===G&&(Tr.test(e.charAt(Or))?(i=e.charAt(Or),Or++):(i=G,0===Br&&f(Vr)));n!==G?(39===e.charCodeAt(Or)?(i=Er,Or++):(i=G,0===Br&&f(zr)),i!==G?(Rr=t,r=wr(n),t=r):(Or=t,t=G)):(Or=t,t=G)}else Or=t,t=G;return Br--,t===G&&(r=G,0===Br&&f(gr)),t}function H(){var e;return e=I(),e===G&&(e=null),e}function I(){var t,r;if(t=[],Fr.test(e.charAt(Or))?(r=e.charAt(Or),Or++):(r=G,0===Br&&f(Mr)),r!==G)for(;r!==G;)t.push(r),Fr.test(e.charAt(Or))?(r=e.charAt(Or),Or++):(r=G,0===Br&&f(Mr));else t=G;return t}r=void 0!==r?r:{};var D,G={},J={Text:d,Expression:m},K=d,Q=/^[^{]/,W=a(["{"],!0,!1),X=function(e,t,r){return(e.length>0?[e.join("")]:[]).concat([t],r)},Y=o(),Z=function(e){return e.length>0?[e.join("")]:[]},ee="{{{",te=i("{{{",!1),re="}}}",ne=i("}}}",!1),ie=function(e){return{html:!0,expression:e}},ae="{{",oe=i("{{",!1),ue="}}",ce=i("}}",!1),se=function(e){return{html:!1,expression:e}},le="=",fe=i("=",!1),pe="*=",de=i("*=",!1),he="/=",me=i("/=",!1),ve="%=",ge=i("%=",!1),be="+=",Ae=i("+=",!1),ye="-=",xe=i("-=",!1),Ce=function(e,t,r){return{type:"Assignment",operator:t,left:e,right:r}},ke="?",$e=i("?",!1),we=":",Ee=i(":",!1),ze=function(e,t,r){return{type:"Conditional",test:e,consequent:t,alternate:r}},je="||",Ne=i("||",!1),Le=function(e,t){return{operator:"||",arg:t}},Te=function(e,t){return Pr("Logical",e,t)},Ve="&&",Fe=i("&&",!1),Me=function(e,t){return{operator:"&&",arg:t}},Oe="===",Re=i("===",!1),Se="!==",Ue=i("!==",!1),qe="==",Be=i("==",!1),Pe="!=",_e=i("!=",!1),He=function(e,t,r){return{operator:t,arg:r}},Ie=function(e,t){return Pr("Binary",e,t)},De="<=",Ge=i("<=",!1),Je=">=",Ke=i(">=",!1),Qe="<",We=i("<",!1),Xe=">",Ye=i(">",!1),Ze=/^[+\-]/,et=a(["+","-"],!1,!1),tt=/^[*\/%]/,rt=a(["*","/","%"],!1,!1),nt="++",it=i("++",!1),at="--",ot=i("--",!1),ut=/^[+!\-]/,ct=a(["+","!","-"],!1,!1),st=function(e,t){return{type:"++"===e||"--"===e?"Update":"Unary",operator:e,argument:t,prefix:!0}},lt=function(e,t){return{type:"Update",operator:t,argument:e,prefix:!1}},ft=function(e,t){return{type:"Call",callee:e,arguments:t}},pt=function(e,t){return t.reduce(function(e,t){return{type:"Member",property:t,object:e}},e)},dt="(",ht=i("(",!1),mt=")",vt=i(")",!1),gt=function(e){return e},bt=function(e,t){return t.reduce(function(e,t){return{type:"Member",object:e,property:t}},e)},At="[",yt=i("[",!1),xt="]",Ct=i("]",!1),kt=function(e){return e},$t=".",wt=i(".",!1),Et=function(e){return{type:"Literal",value:e.name}},zt="new",jt=i("new",!1),Nt=function(e,t){return t},Lt=function(e,t){return{type:"NewExpression",callee:e,arguments:t||[]}},Tt=function(){return[]},Vt=",",Ft=i(",",!1),Mt=function(e,t){return t},Ot=function(e,t){return[e].concat(t)},Rt=c("identifier"),St=/^[a-z$_]/i,Ut=a([["a","z"],"$","_"],!1,!0),qt=/^[a-z$_0-9]/i,Bt=a([["a","z"],"$","_",["0","9"]],!1,!0),Pt=function(e,t){return{type:"Identifier",name:e+t.join("")}},_t=function(){return{type:"Array",elements:[]}},Ht=function(e){return{type:"Array",elements:e}},It=function(e,t){return t},Dt="{",Gt=i("{",!1),Jt="}",Kt=i("}",!1),Qt=function(){return{type:"Object",properties:[]}},Wt=function(e){return{type:"Object",properties:e}},Xt=function(e,t){return t},Yt=function(e,t){return{type:"Property",key:e.name||e.value,value:t}},Zt="null",er=i("null",!1),tr=function(){return{type:"Literal",value:null}},rr="true",nr=i("true",!1),ir=function(){return{type:"Literal",value:!0}},ar="false",or=i("false",!1),ur=function(){return{type:"Literal",value:!1}},cr=c("number"),sr=/^[0-9]/,lr=a([["0","9"]],!1,!1),fr=function(){return{type:"Literal",value:parseFloat(n())}},pr="0",dr=i("0",!1),hr=/^[1-9]/,mr=a([["1","9"]],!1,!1),vr=i("e",!0),gr=c("string"),br='"',Ar=i('"',!1),yr='\\"',xr=i('\\"',!1),Cr=function(){return'"'},kr=/^[^"]/,$r=a(['"'],!0,!1),wr=function(e){return{type:"Literal",value:e.join("")}},Er="'",zr=i("'",!1),jr="\\'",Nr=i("\\'",!1),Lr=function(){return"'"},Tr=/^[^'']/,Vr=a(["'","'"],!0,!1),Fr=/^[\t ]/,Mr=a(["\t"," "],!1,!1),Or=0,Rr=0,Sr=[{line:1,column:1}],Ur=0,qr=[],Br=0;if("startRule"in r){if(!(r.startRule in J))throw new Error("Can't start parsing from rule \""+r.startRule+'".');K=J[r.startRule]}var Pr=function(e,t,r){return 0===r.length?t:r.reduce(function(t,r){return{type:e,operator:r.operator,left:t,right:r.arg}},t)};if(D=K(),D!==G&&Or===e.length)return D;throw D!==G&&Or<e.length&&f(u()),p(qr,Ur<e.length?e.charAt(Ur):null,Ur<e.length?l(Ur,Ur+1):l(Ur,Ur))}return e(t,Error),t.buildMessage=function(e,t){function r(e){return e.charCodeAt(0).toString(16).toUpperCase()}function n(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(e){return"\\x0"+r(e)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(e){return"\\x"+r(e)})}function i(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(e){return"\\x0"+r(e)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(e){return"\\x"+r(e)})}function a(e){return c[e.type](e)}function o(e){var t,r,n=new Array(e.length);for(t=0;t<e.length;t++)n[t]=a(e[t]);if(n.sort(),n.length>0){for(t=1,r=1;t<n.length;t++)n[t-1]!==n[t]&&(n[r]=n[t],r++);n.length=r}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}function u(e){return e?'"'+n(e)+'"':"end of input"}var c={literal:function(e){return'"'+n(e.text)+'"'},class:function(e){var t,r="";for(t=0;t<e.parts.length;t++)r+=e.parts[t]instanceof Array?i(e.parts[t][0])+"-"+i(e.parts[t][1]):i(e.parts[t]);return"["+(e.inverted?"^":"")+r+"]"},any:function(e){return"any character"},end:function(e){return"end of input"},other:function(e){return e.description}};return"Expected "+o(e)+" but "+u(t)+" found."},{SyntaxError:t,parse:r}}(),t=e.parse,r=function(e){return Array.prototype.slice.call(e)},n=function(e){return String(null!==e&&"undefined"!=typeof e?e:"")},i=function(e,t){if(e){var r=e.indexOf(t);r>-1&&e.splice(r,1)}},a=function(e,t){var r;return e.find(function(e){return r=e.children.find(function(e){return e.node===t})?e:a(e.children,t)}),r},o=function(e,t){e.forEach(function(e){t(e),o(e.children,t)})},u=function(e,t){var r,n,i=e.type,a=e.operator;if("Literal"===i)r=e.value;else if("Array"===i)r=e.elements.map(function(e){return u(e,t).value});else if("Object"===i)r={},e.properties.forEach(function(e){r[e.key]=u(e.value,t).value});else if("Identifier"===i){for(var o=t;o&&"undefined"==typeof o[e.name];)o=o.$parent;o||(o=t),r=o[e.name],n=function(t){return o[e.name]=t,t}}else if("Member"===i){var c=u(e.object,t).value,s=u(e.property,t).value;r="undefined"!=typeof c?c[s]:void 0,n=function(e){return c[s]=e,e}}else if("Conditional"===i)r=u(e.test,t).value?u(e.consequent,t).value:u(e.alternate,t).value;else if("Unary"===i||"Update"===i){var l=u(e.argument,t),f=l.value;r="!"===a?!f:"+"===a?+f:"-"===a?-f:"++"===a?f+1:"--"===a?f-1:null,"Update"===i&&(n=l.set,n&&(r=n(r)),e.prefix||(r+="++"===a?-1:1))}else if("Binary"===i||"Logical"===i||"Assignment"===i){var p=u(e.left,t),d=p.value,h=u(e.right,t).value;r="==="===a?d===h:"!=="===a?d!==h:"=="===a?d==h:"!="===a?d!=h:"<"===a?d<h:">"===a?d>h:"<="===a?d<=h:">="===a?d>=h:"&&"===a?d&&h:"||"===a?d||h:"+"===a?d+h:"-"===a?d-h:"*"===a?d*h:"/"===a?d/h:"%"===a?d%h:"*="===a?d*h:"/="===a?d/h:"%="===a?d%h:"+="===a?d+h:"-="===a?d-h:"="===a?h:null,"Assignment"===i&&(n=p.set,r=n(r))}else if("Call"===i||"NewExpression"===i){var m=e.callee.object?u(e.callee.object,t).value:t,v=u(e.callee,t).value,g=e.arguments.map(function(e){return u(e,t).value});r=v?"Call"===i?v.apply(m,g):new(v.bind.apply(v,g)):void 0}return{value:r,set:n}},c=[],s=function(e,n){e="string"==typeof e?document.querySelector(e):e[0]||e;var f={},p=[],d={},h=function(e,t,n,i){var a=function(){return[o.component,o.node].concat(n)},o={component:f,node:t,syntax:i,eval:function(e){return u(e||i,o.component).value},create:function(){e.create&&e.create.apply(o,a())},update:function(){e.update&&e.update.apply(o,a())},destroy:function(){e.destroy&&e.destroy.apply(o,a())}};if(e.template){var c=document.createElement("span");c.innerHTML=e.template,c=c.childNodes[0],r(t.attributes).forEach(function(e){c.setAttribute(e.name,e.value)}),t.parentNode.replaceChild(c,t),o.node=c}return o},m=function(e,n){if([1,3].indexOf(e.nodeType)!==-1)if(e.zam)if(e.zam===f.$parent){let t=a(f.$parent.$elements,e),r=t.children.find(function(t){return t.node===e});i(t.children,r),n.push(r),o(r.children,function(e){e.bindings.forEach(function(e){e.component=f})})}else e.zam.$setParent(f);else{e.zam=f;var u={node:e,children:[],bindings:[]};if(n.push(u),n=u.children,1===e.nodeType){let i,a=r(e.attributes);u.bindings=[],c.forEach(function(r){if(r.tag){let t=e.tagName.match(new RegExp("^"+r.tag.replace("{prefix}",s.prefix)+"$","i"));if(t){var o=h(r,e,t);u.bindings.push(o),i=r.block||r.template,r.template&&m(o.node,n)}}else r.attribute&&(a=a.filter(function(a){if(!i){let l=a.name.match(new RegExp("^"+r.attribute.replace("{prefix}",s.prefix)+"$","i"));if(l){var o=t(a.value||"undefined",{startRule:"Expression"});e.removeAttribute(a.name);var c=h(r,e,l,o);u.bindings.push(c),i=r.block||r.template,r.template&&m(c.node,n)}return!l}}))}),i||r(e.childNodes).forEach(function(e){m(e,n)})}else if(3===e.nodeType&&e.nodeValue.indexOf("{{")>-1){var p=e.nodeValue;t(p,{startRule:"Text"}).forEach(function(t){var r;if("string"==typeof t)r=document.createTextNode(t);else{r=t.html?document.createElement("span"):document.createTextNode(""),r.zam=f;var i=h(l,r,["",t.html?"html":"text"],t.expression);n.push({node:e,children:[],bindings:[i]})}e.parentNode.insertBefore(r,e)}),e.parentNode.removeChild(e)}}},v=function(e){e.forEach(function(e){e.bindings.forEach(function(e){e.create()}),v(e.children)})},g=function(e){e.forEach(function(e){e.bindings.forEach(function(e){e.update()}),g(e.children)})};return f.$elements=p,f.$=function(){g(p),f.$trigger("update")},f.$on=function(e,t){d[e]||(d[e]=[]),d[e].push(t)},f.$off=function(e,t){i(d[e],t)},f.$trigger=function(e){(d[e]||[]).forEach(function(e){e()})},f.$setParent=function(e){f.$parent&&f.$parent.$off&&f.$parent.$off("update",f.$),f.$parent=e,f.$parent.$on&&f.$parent.$on("update",f.$)},f.$setParent(n||e.zam||s.root),m(e,p),v(p),f};s.version="0.1.3",s.prefix="z-",s.parse=t,s.evaluate=u,s.directive=function(e){return e.block=e.block,e.order=e.template?.5:e.order||100,c=c.concat([e]).sort(function(e,t){return e.order-t.order}),e},s.root={},s.root.$parent="undefined"!=typeof global?global:window,s.root.number=function(e,t){return Number(e).toFixed(t||2)},s.root.percent=function(e,t){return Number(100*e).toFixed(t||2)+"%"};var l=s.directive({attribute:"{prefix}(text|html)",block:!0,create:function(e,t){t.innerHTML=""},update:function(e,t,r,i){var a=n(this.eval());a!==this.prevValue&&("html"===i?t.innerHTML=a:t.textContent=a,this.prevValue=a)}});s.directive({attribute:"{prefix}show",update:function(e,t){var r=!!this.eval();r!==this.prevValue&&(t.style.display=r?"":"none",this.prevValue=r)}}),s.directive({attribute:"{prefix}exist",order:3,block:!0,create:function(e,t,r){this.marker=document.createComment(r),t.parentNode.replaceChild(this.marker,t)},update:function(e,t){var r=!!this.eval();r!==this.prevValue&&(r?(this.clone=t.cloneNode(!0),this.childComponent=s(this.clone,e),this.marker.parentNode.insertBefore(this.clone,this.marker)):this.clone&&this.marker.parentNode.removeChild(this.clone),this.prevValue=r),this.clone&&this.childComponent.$()}}),s.directive({attribute:"{prefix}(.+)-in",order:2,block:!0,create:function(e,t,r){this.items=[],this.marker=document.createComment(r),t.parentNode.replaceChild(this.marker,t)},update:function(e,t,r,n){var a=this,o=this.eval()||[];a.items.forEach(function(e){o.indexOf(e.data)===-1&&(a.marker.parentNode.removeChild(e.el),i(a.items,e))}),o.forEach(function(r){var i=a.items.find(function(e){return e.data===r});if(!i){var o=t.cloneNode(!0);a.marker.parentNode.insertBefore(o,a.marker),i={el:o,zam:s(o,e),data:r},i.zam[n]=r,a.items.push(i)}i.zam.$()})}});var f=["accept","accept-charset","accesskey","action","align","alt","async","autocomplete","autofocus","autoplay","autosave","buffered","challenge","charset","checked","cite","class","code","codebase","cols","colspan","content","contenteditable","contextmenu","controls","coords","crossorigin","data","data-*","datetime","default","defer","dir","dirname","disabled","download","draggable","dropzone","enctype","for","form","formaction","headers","hidden","high","href","hreflang","http-equiv","icon","id","integrity","ismap","itemprop","keytype","kind","label","lang","language","list","loop","low","manifest","max","maxlength","minlength","media","method","min","multiple","muted","name","novalidate","open","optimum","pattern","ping","placeholder","poster","preload","radiogroup","readonly","rel","required","reversed","rows","rowspan","sandbox","scope","scoped","seamless","selected","shape","size","sizes","slot","span","spellcheck","src","srcdoc","srclang","srcset","start","step","style","summary","tabindex","target","title","type","usemap","value","wrap"],p=["selected","checked","disabled","readonly","multiple","ismap","defer","noresize"];s.directive({attribute:"{prefix}(?:attr-(.+)|("+f.join("|")+"))",update:function(e,t,r,n,i){n=n||i;var a=this.eval();p.indexOf(n)>-1&&(a=a?n:void 0),"undefined"==typeof a?t.removeAttribute(n):t.setAttribute(n,a)}}),s.directive({attribute:"{prefix}class-(.+)",update:function(e,t,r,n){t.classList.toggle(n,!!this.eval())}});var d=["align-.*","all","animation","animation-.*","backface-visibility","background","background-.*","border","border-.*","bottom","box-.*","break-.*","caption-side","caret-color","clear","clip","clip-path","color","column-.*","columns","content","counter-.*","cursor","direction","display","empty-cells","filter","flex-.*","float","font","font-.*","grid","grid-.*","height","hyphens","image-.*","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-.*","list-.*","margin","margin-.*","mask","mask-.*","max-height","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","object-fit","object-position","offset-.*","opacity","order","orphans","outline","outline-.*","overflow","overflow-.*","padding","padding-.*","page-break-.*","perspective","perspective-origin","pointer-events","position","quotes","resize","right","scroll-.*","shape-.*","tab-size","table-layout","text-.*","top","touch-action","transform","transform-.*","transition","transition-.*","unicode-bidi","unset","vertical-align","visibility","white-space","widows","width","will-change","word-.*","writing-mode","z-index"];s.directive({attribute:"{prefix}(?:style-(.+)|("+d.join("|")+"))",update:function(e,t,r,n,i){t.style[n||i]=this.eval()}}),s.directive({attribute:"{prefix}model",block:!0,create:function(e,t){var r=this;this.handler=function(){t.value!==r.prevValue&&(r.prevValue=t.value,r.eval({type:"Assignment",operator:"=",left:r.syntax,right:{type:"Literal",value:t.value}}),e.$())},t.addEventListener("input",this.handler)},update:function(e,t){var r=n(this.eval());r!==this.prevValue&&(t.value=r,this.prevValue=r)},destroy:function(e,t){t.removeEventListener("input",this.handler)}});var h=["load","error","focus","blur","click","dblclick","mousedown","mousemove","mouseup","mouseenter","mouseleave","mouseover","mouseout","keyup","keydown","keypress","input","change","submit","reset","scroll","resize","dragstart","dragend","dragenter","dragover","dragleave","drag","drop"];return s.directive({attribute:"{prefix}(?:on-(.+)|("+h.join("|")+"))",create:function(e,t,r,n,i){var a=this;this.handler=function(t){e.$event=t,a.eval(),delete e.$event,e.$()},t.addEventListener(n||i,this.handler)},destroy:function(e,t,r,n,i){t.removeEventListener(n||i,this.handler)}}),s.directive({attribute:"{prefix}skip",order:1,block:!0
}),s});
