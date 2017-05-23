!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.zam=t()}(this,function(){"use strict";var e=function(){function e(e,t){function r(){this.constructor=e}r.prototype=t.prototype,e.prototype=new r}function t(e,r,n,o){this.message=e,this.expected=r,this.found=n,this.location=o,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,t)}function r(e,r){function n(){return e.substring(Rr,Or)}function o(e,t){return{type:"literal",text:e,ignoreCase:t}}function i(e,t,r){return{type:"class",parts:e,inverted:t,ignoreCase:r}}function u(){return{type:"any"}}function a(){return{type:"end"}}function s(e){return{type:"other",description:e}}function c(t){var r,n=Mr[t];if(n)return n;for(r=t-1;!Mr[r];)r--;for(n=Mr[r],n={line:n.line,column:n.column};r<t;)10===e.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return Mr[t]=n,n}function l(e,t){var r=c(e),n=c(t);return{start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:n.line,column:n.column}}}function f(e){Or<Sr||(Or>Sr&&(Sr=Or,Ur=[]),Ur.push(e))}function d(e,r,n){return new t(t.buildMessage(e,r),e,r,n)}function p(){var t,r,n,o,i=32*Or+0,u=Br[i];if(u)return Or=u.nextPos,u.result;for(t=Or,r=[],Q.test(e.charAt(Or))?(n=e.charAt(Or),Or++):(n=G,0===qr&&f(W));n!==G;)r.push(n),Q.test(e.charAt(Or))?(n=e.charAt(Or),Or++):(n=G,0===qr&&f(W));if(r!==G?(n=h(),n!==G?(o=p(),o!==G?(Rr=t,r=X(r,n,o),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G),t===G){for(t=Or,r=[],e.length>Or?(n=e.charAt(Or),Or++):(n=G,0===qr&&f(Y));n!==G;)r.push(n),e.length>Or?(n=e.charAt(Or),Or++):(n=G,0===qr&&f(Y));r!==G&&(Rr=t,r=Z(r)),t=r}return Br[i]={nextPos:Or,result:t},t}function h(){var t,r,n,o,i,u,a=32*Or+1,s=Br[a];return s?(Or=s.nextPos,s.result):(t=Or,"{{{"===e.substr(Or,3)?(r=ee,Or+=3):(r=G,0===qr&&f(te)),r!==G?(n=_(),n!==G?(o=v(),o!==G?(i=_(),i!==G?("}}}"===e.substr(Or,3)?(u=re,Or+=3):(u=G,0===qr&&f(ne)),u!==G?(Rr=t,r=oe(o),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G),t===G&&(t=Or,"{{"===e.substr(Or,2)?(r=ie,Or+=2):(r=G,0===qr&&f(ue)),r!==G?(n=_(),n!==G?(o=v(),o!==G?(i=_(),i!==G?("}}"===e.substr(Or,2)?(u=ae,Or+=2):(u=G,0===qr&&f(se)),u!==G?(Rr=t,r=ce(o),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)),Br[a]={nextPos:Or,result:t},t)}function v(){var t,r,n,o,i,u,a=32*Or+2,s=Br[a];return s?(Or=s.nextPos,s.result):(t=Or,r=m(),r!==G?(n=_(),n!==G?(61===e.charCodeAt(Or)?(o=le,Or++):(o=G,0===qr&&f(fe)),o===G&&("*="===e.substr(Or,2)?(o=de,Or+=2):(o=G,0===qr&&f(pe)),o===G&&("/="===e.substr(Or,2)?(o=he,Or+=2):(o=G,0===qr&&f(ve)),o===G&&("%="===e.substr(Or,2)?(o=me,Or+=2):(o=G,0===qr&&f(xe)),o===G&&("+="===e.substr(Or,2)?(o=be,Or+=2):(o=G,0===qr&&f(ge)),o===G&&("-="===e.substr(Or,2)?(o=Ae,Or+=2):(o=G,0===qr&&f(ye))))))),o!==G?(i=_(),i!==G?(u=v(),u!==G?(Rr=t,r=Pe(r,o,u),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G),t===G&&(t=x()),Br[a]={nextPos:Or,result:t},t)}function m(){var e,t=32*Or+3,r=Br[t];return r?(Or=r.nextPos,r.result):(e=k(),e===G&&(e=$()),Br[t]={nextPos:Or,result:e},e)}function x(){var t,r,n,o,i,u,a,s,c,l,d=32*Or+4,p=Br[d];return p?(Or=p.nextPos,p.result):(t=Or,r=b(),r!==G?(n=_(),n!==G?(63===e.charCodeAt(Or)?(o=Ce,Or++):(o=G,0===qr&&f(we)),o!==G?(i=_(),i!==G?(u=x(),u!==G?(a=_(),a!==G?(58===e.charCodeAt(Or)?(s=Ee,Or++):(s=G,0===qr&&f(ke)),s!==G?(c=_(),c!==G?(l=x(),l!==G?(Rr=t,r=$e(r,u,l),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G),t===G&&(t=b()),Br[d]={nextPos:Or,result:t},t)}function b(){var t,r,n,o,i,u,a,s,c=32*Or+5,l=Br[c];if(l)return Or=l.nextPos,l.result;if(t=Or,r=g(),r!==G){for(n=[],o=Or,i=_(),i!==G?("||"===e.substr(Or,2)?(u=Le,Or+=2):(u=G,0===qr&&f(je)),u!==G?(a=_(),a!==G?(s=g(),s!==G?(Rr=o,i=Ne(r,s),o=i):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G);o!==G;)n.push(o),o=Or,i=_(),i!==G?("||"===e.substr(Or,2)?(u=Le,Or+=2):(u=G,0===qr&&f(je)),u!==G?(a=_(),a!==G?(s=g(),s!==G?(Rr=o,i=Ne(r,s),o=i):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G);n!==G?(Rr=t,r=ze(r,n),t=r):(Or=t,t=G)}else Or=t,t=G;return Br[c]={nextPos:Or,result:t},t}function g(){var t,r,n,o,i,u,a,s,c=32*Or+6,l=Br[c];if(l)return Or=l.nextPos,l.result;if(t=Or,r=A(),r!==G){for(n=[],o=Or,i=_(),i!==G?("&&"===e.substr(Or,2)?(u=Ve,Or+=2):(u=G,0===qr&&f(Fe)),u!==G?(a=_(),a!==G?(s=A(),s!==G?(Rr=o,i=Te(r,s),o=i):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G);o!==G;)n.push(o),o=Or,i=_(),i!==G?("&&"===e.substr(Or,2)?(u=Ve,Or+=2):(u=G,0===qr&&f(Fe)),u!==G?(a=_(),a!==G?(s=A(),s!==G?(Rr=o,i=Te(r,s),o=i):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G);n!==G?(Rr=t,r=ze(r,n),t=r):(Or=t,t=G)}else Or=t,t=G;return Br[c]={nextPos:Or,result:t},t}function A(){var t,r,n,o,i,u,a,s,c=32*Or+7,l=Br[c];if(l)return Or=l.nextPos,l.result;if(t=Or,r=y(),r!==G){for(n=[],o=Or,i=_(),i!==G?("==="===e.substr(Or,3)?(u=Oe,Or+=3):(u=G,0===qr&&f(Re)),u===G&&("!=="===e.substr(Or,3)?(u=Me,Or+=3):(u=G,0===qr&&f(Se)),u===G&&("=="===e.substr(Or,2)?(u=Ue,Or+=2):(u=G,0===qr&&f(qe)),u===G&&("!="===e.substr(Or,2)?(u=Be,Or+=2):(u=G,0===qr&&f(Ie))))),u!==G?(a=_(),a!==G?(s=y(),s!==G?(Rr=o,i=_e(r,u,s),o=i):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G);o!==G;)n.push(o),o=Or,i=_(),i!==G?("==="===e.substr(Or,3)?(u=Oe,Or+=3):(u=G,0===qr&&f(Re)),u===G&&("!=="===e.substr(Or,3)?(u=Me,Or+=3):(u=G,0===qr&&f(Se)),u===G&&("=="===e.substr(Or,2)?(u=Ue,Or+=2):(u=G,0===qr&&f(qe)),u===G&&("!="===e.substr(Or,2)?(u=Be,Or+=2):(u=G,0===qr&&f(Ie))))),u!==G?(a=_(),a!==G?(s=y(),s!==G?(Rr=o,i=_e(r,u,s),o=i):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G);n!==G?(Rr=t,r=He(r,n),t=r):(Or=t,t=G)}else Or=t,t=G;return Br[c]={nextPos:Or,result:t},t}function y(){var t,r,n,o,i,u,a,s,c=32*Or+8,l=Br[c];if(l)return Or=l.nextPos,l.result;if(t=Or,r=P(),r!==G){for(n=[],o=Or,i=_(),i!==G?("<="===e.substr(Or,2)?(u=De,Or+=2):(u=G,0===qr&&f(Ge)),u===G&&(">="===e.substr(Or,2)?(u=Je,Or+=2):(u=G,0===qr&&f(Ke)),u===G&&(60===e.charCodeAt(Or)?(u=Qe,Or++):(u=G,0===qr&&f(We)),u===G&&(62===e.charCodeAt(Or)?(u=Xe,Or++):(u=G,0===qr&&f(Ye))))),u!==G?(a=_(),a!==G?(s=P(),s!==G?(Rr=o,i=_e(r,u,s),o=i):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G);o!==G;)n.push(o),o=Or,i=_(),i!==G?("<="===e.substr(Or,2)?(u=De,Or+=2):(u=G,0===qr&&f(Ge)),u===G&&(">="===e.substr(Or,2)?(u=Je,Or+=2):(u=G,0===qr&&f(Ke)),u===G&&(60===e.charCodeAt(Or)?(u=Qe,Or++):(u=G,0===qr&&f(We)),u===G&&(62===e.charCodeAt(Or)?(u=Xe,Or++):(u=G,0===qr&&f(Ye))))),u!==G?(a=_(),a!==G?(s=P(),s!==G?(Rr=o,i=_e(r,u,s),o=i):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G);n!==G?(Rr=t,r=He(r,n),t=r):(Or=t,t=G)}else Or=t,t=G;return Br[c]={nextPos:Or,result:t},t}function P(){var t,r,n,o,i,u,a,s,c=32*Or+9,l=Br[c];if(l)return Or=l.nextPos,l.result;if(t=Or,r=C(),r!==G){for(n=[],o=Or,i=_(),i!==G?(Ze.test(e.charAt(Or))?(u=e.charAt(Or),Or++):(u=G,0===qr&&f(et)),u!==G?(a=_(),a!==G?(s=C(),s!==G?(Rr=o,i=_e(r,u,s),o=i):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G);o!==G;)n.push(o),o=Or,i=_(),i!==G?(Ze.test(e.charAt(Or))?(u=e.charAt(Or),Or++):(u=G,0===qr&&f(et)),u!==G?(a=_(),a!==G?(s=C(),s!==G?(Rr=o,i=_e(r,u,s),o=i):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G);n!==G?(Rr=t,r=He(r,n),t=r):(Or=t,t=G)}else Or=t,t=G;return Br[c]={nextPos:Or,result:t},t}function C(){var t,r,n,o,i,u,a,s,c=32*Or+10,l=Br[c];if(l)return Or=l.nextPos,l.result;if(t=Or,r=w(),r!==G){for(n=[],o=Or,i=_(),i!==G?(tt.test(e.charAt(Or))?(u=e.charAt(Or),Or++):(u=G,0===qr&&f(rt)),u!==G?(a=_(),a!==G?(s=w(),s!==G?(Rr=o,i=_e(r,u,s),o=i):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G);o!==G;)n.push(o),o=Or,i=_(),i!==G?(tt.test(e.charAt(Or))?(u=e.charAt(Or),Or++):(u=G,0===qr&&f(rt)),u!==G?(a=_(),a!==G?(s=w(),s!==G?(Rr=o,i=_e(r,u,s),o=i):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G);n!==G?(Rr=t,r=He(r,n),t=r):(Or=t,t=G)}else Or=t,t=G;return Br[c]={nextPos:Or,result:t},t}function w(){var t,r,n,o,i=32*Or+11,u=Br[i];return u?(Or=u.nextPos,u.result):(t=E(),t===G&&(t=Or,"++"===e.substr(Or,2)?(r=nt,Or+=2):(r=G,0===qr&&f(ot)),r===G&&("--"===e.substr(Or,2)?(r=it,Or+=2):(r=G,0===qr&&f(ut)),r===G&&(at.test(e.charAt(Or))?(r=e.charAt(Or),Or++):(r=G,0===qr&&f(st)))),r!==G?(n=_(),n!==G?(o=w(),o!==G?(Rr=t,r=ct(r,o),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)),Br[i]={nextPos:Or,result:t},t)}function E(){var t,r,n,o,i=32*Or+12,u=Br[i];return u?(Or=u.nextPos,u.result):(t=Or,r=m(),r!==G?(n=_(),n!==G?("++"===e.substr(Or,2)?(o=nt,Or+=2):(o=G,0===qr&&f(ot)),o===G&&("--"===e.substr(Or,2)?(o=it,Or+=2):(o=G,0===qr&&f(ut))),o!==G?(Rr=t,r=lt(r,o),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G),t===G&&(t=m()),Br[i]={nextPos:Or,result:t},t)}function k(){var e,t,r,n,o,i=32*Or+13,u=Br[i];return u?(Or=u.nextPos,u.result):(e=Or,t=Or,r=$(),r!==G?(n=_(),n!==G?(o=N(),o!==G?(Rr=t,r=ft(r,o),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G),t!==G?(r=L(),r!==G?(Rr=e,t=dt(t,r),e=t):(Or=e,e=G)):(Or=e,e=G),Br[i]={nextPos:Or,result:e},e)}function $(){var t,r,n,o,i,u,a,s=32*Or+14,c=Br[s];return c?(Or=c.nextPos,c.result):(t=Or,r=j(),r===G&&(r=z(),r===G&&(r=M(),r===G&&(r=V(),r===G&&(r=T(),r===G&&(r=Or,40===e.charCodeAt(Or)?(n=pt,Or++):(n=G,0===qr&&f(ht)),n!==G?(o=_(),o!==G?(i=v(),i!==G?(u=_(),u!==G?(41===e.charCodeAt(Or)?(a=vt,Or++):(a=G,0===qr&&f(mt)),a!==G?(Rr=r,n=xt(i),r=n):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G)))))),r!==G?(n=L(),n!==G?(Rr=t,r=bt(r,n),t=r):(Or=t,t=G)):(Or=t,t=G),Br[s]={nextPos:Or,result:t},t)}function L(){var t,r,n,o,i,u,a,s,c=32*Or+15,l=Br[c];if(l)return Or=l.nextPos,l.result;for(t=[],r=Or,n=_(),n!==G?(91===e.charCodeAt(Or)?(o=gt,Or++):(o=G,0===qr&&f(At)),o!==G?(i=_(),i!==G?(u=v(),u!==G?(a=_(),a!==G?(93===e.charCodeAt(Or)?(s=yt,Or++):(s=G,0===qr&&f(Pt)),s!==G?(Rr=r,n=Ct(u),r=n):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G),r===G&&(r=Or,n=_(),n!==G?(46===e.charCodeAt(Or)?(o=wt,Or++):(o=G,0===qr&&f(Et)),o!==G?(i=_(),i!==G?(u=z(),u!==G?(Rr=r,n=kt(u),r=n):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G));r!==G;)t.push(r),r=Or,n=_(),n!==G?(91===e.charCodeAt(Or)?(o=gt,Or++):(o=G,0===qr&&f(At)),o!==G?(i=_(),i!==G?(u=v(),u!==G?(a=_(),a!==G?(93===e.charCodeAt(Or)?(s=yt,Or++):(s=G,0===qr&&f(Pt)),s!==G?(Rr=r,n=Ct(u),r=n):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G),r===G&&(r=Or,n=_(),n!==G?(46===e.charCodeAt(Or)?(o=wt,Or++):(o=G,0===qr&&f(Et)),o!==G?(i=_(),i!==G?(u=z(),u!==G?(Rr=r,n=kt(u),r=n):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G)):(Or=r,r=G));return Br[c]={nextPos:Or,result:t},t}function j(){var t,r,n,o,i,u,a,s=32*Or+16,c=Br[s];return c?(Or=c.nextPos,c.result):(t=Or,"new"===e.substr(Or,3)?(r=$t,Or+=3):(r=G,0===qr&&f(Lt)),r!==G?(n=H(),n!==G?(o=$(),o!==G?(i=Or,u=_(),u!==G?(a=N(),a!==G?(Rr=i,u=jt(o,a),i=u):(Or=i,i=G)):(Or=i,i=G),i===G&&(i=null),i!==G?(Rr=t,r=Nt(o,i),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G),Br[s]={nextPos:Or,result:t},t)}function N(){var t,r,n,o,i,u,a,s,c,l,d=32*Or+17,p=Br[d];if(p)return Or=p.nextPos,p.result;if(t=Or,40===e.charCodeAt(Or)?(r=pt,Or++):(r=G,0===qr&&f(ht)),r!==G?(n=_(),n!==G?(41===e.charCodeAt(Or)?(o=vt,Or++):(o=G,0===qr&&f(mt)),o!==G?(Rr=t,r=zt(),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G),t===G)if(t=Or,40===e.charCodeAt(Or)?(r=pt,Or++):(r=G,0===qr&&f(ht)),r!==G)if(n=_(),n!==G)if(o=v(),o!==G){for(i=[],u=Or,a=_(),a!==G?(44===e.charCodeAt(Or)?(s=Vt,Or++):(s=G,0===qr&&f(Ft)),s!==G?(c=_(),c!==G?(l=v(),l!==G?(Rr=u,a=Tt(o,l),u=a):(Or=u,u=G)):(Or=u,u=G)):(Or=u,u=G)):(Or=u,u=G);u!==G;)i.push(u),u=Or,a=_(),a!==G?(44===e.charCodeAt(Or)?(s=Vt,Or++):(s=G,0===qr&&f(Ft)),s!==G?(c=_(),c!==G?(l=v(),l!==G?(Rr=u,a=Tt(o,l),u=a):(Or=u,u=G)):(Or=u,u=G)):(Or=u,u=G)):(Or=u,u=G);i!==G?(u=_(),u!==G?(41===e.charCodeAt(Or)?(a=vt,Or++):(a=G,0===qr&&f(mt)),a!==G?(Rr=t,r=Ot(o,i),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)}else Or=t,t=G;else Or=t,t=G;else Or=t,t=G;return Br[d]={nextPos:Or,result:t},t}function z(){var t,r,n,o,i,u=32*Or+18,a=Br[u];if(a)return Or=a.nextPos,a.result;if(qr++,t=Or,r=Or,qr++,n=S(),qr--,n===G?r=void 0:(Or=r,r=G),r!==G)if(Mt.test(e.charAt(Or))?(n=e.charAt(Or),Or++):(n=G,0===qr&&f(St)),n!==G){for(o=[],Ut.test(e.charAt(Or))?(i=e.charAt(Or),Or++):(i=G,0===qr&&f(qt));i!==G;)o.push(i),Ut.test(e.charAt(Or))?(i=e.charAt(Or),Or++):(i=G,0===qr&&f(qt));o!==G?(Rr=t,r=Bt(n,o),t=r):(Or=t,t=G)}else Or=t,t=G;else Or=t,t=G;return qr--,t===G&&(r=G,0===qr&&f(Rt)),Br[u]={nextPos:Or,result:t},t}function V(){var t,r,n,o,i,u,a=32*Or+19,s=Br[a];return s?(Or=s.nextPos,s.result):(t=Or,91===e.charCodeAt(Or)?(r=gt,Or++):(r=G,0===qr&&f(At)),r!==G?(n=_(),n!==G?(93===e.charCodeAt(Or)?(o=yt,Or++):(o=G,0===qr&&f(Pt)),o!==G?(Rr=t,r=It(),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G),t===G&&(t=Or,91===e.charCodeAt(Or)?(r=gt,Or++):(r=G,0===qr&&f(At)),r!==G?(n=_(),n!==G?(o=F(),o!==G?(i=_(),i!==G?(93===e.charCodeAt(Or)?(u=yt,Or++):(u=G,0===qr&&f(Pt)),u!==G?(Rr=t,r=_t(o),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)),Br[a]={nextPos:Or,result:t},t)}function F(){var t,r,n,o,i,u,a,s,c=32*Or+20,l=Br[c];if(l)return Or=l.nextPos,l.result;if(t=Or,r=v(),r!==G){for(n=[],o=Or,i=_(),i!==G?(44===e.charCodeAt(Or)?(u=Vt,Or++):(u=G,0===qr&&f(Ft)),u!==G?(a=_(),a!==G?(s=v(),s!==G?(Rr=o,i=Ht(r,s),o=i):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G);o!==G;)n.push(o),o=Or,i=_(),i!==G?(44===e.charCodeAt(Or)?(u=Vt,Or++):(u=G,0===qr&&f(Ft)),u!==G?(a=_(),a!==G?(s=v(),s!==G?(Rr=o,i=Ht(r,s),o=i):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G);n!==G?(Rr=t,r=Ot(r,n),t=r):(Or=t,t=G)}else Or=t,t=G;return Br[c]={nextPos:Or,result:t},t}function T(){var t,r,n,o,i,u,a,s,c=32*Or+21,l=Br[c];return l?(Or=l.nextPos,l.result):(t=Or,123===e.charCodeAt(Or)?(r=Dt,Or++):(r=G,0===qr&&f(Gt)),r!==G?(n=_(),n!==G?(125===e.charCodeAt(Or)?(o=Jt,Or++):(o=G,0===qr&&f(Kt)),o!==G?(Rr=t,r=Qt(),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G),t===G&&(t=Or,123===e.charCodeAt(Or)?(r=Dt,Or++):(r=G,0===qr&&f(Gt)),r!==G?(n=_(),n!==G?(o=O(),o!==G?(i=_(),i!==G?(u=Or,44===e.charCodeAt(Or)?(a=Vt,Or++):(a=G,0===qr&&f(Ft)),a!==G?(s=_(),s!==G?(a=[a,s],u=a):(Or=u,u=G)):(Or=u,u=G),u===G&&(u=null),u!==G?(125===e.charCodeAt(Or)?(a=Jt,Or++):(a=G,0===qr&&f(Kt)),a!==G?(Rr=t,r=Wt(o),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)),Br[c]={nextPos:Or,result:t},t)}function O(){var t,r,n,o,i,u,a,s,c=32*Or+22,l=Br[c];if(l)return Or=l.nextPos,l.result;if(t=Or,r=R(),r!==G){for(n=[],o=Or,i=_(),i!==G?(44===e.charCodeAt(Or)?(u=Vt,Or++):(u=G,0===qr&&f(Ft)),u!==G?(a=_(),a!==G?(s=R(),s!==G?(Rr=o,i=Xt(r,s),o=i):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G);o!==G;)n.push(o),o=Or,i=_(),i!==G?(44===e.charCodeAt(Or)?(u=Vt,Or++):(u=G,0===qr&&f(Ft)),u!==G?(a=_(),a!==G?(s=R(),s!==G?(Rr=o,i=Xt(r,s),o=i):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G)):(Or=o,o=G);n!==G?(Rr=t,r=Ot(r,n),t=r):(Or=t,t=G)}else Or=t,t=G;return Br[c]={nextPos:Or,result:t},t}function R(){var t,r,n,o,i,u,a=32*Or+23,s=Br[a];return s?(Or=s.nextPos,s.result):(t=Or,r=z(),r===G&&(r=I(),r===G&&(r=U())),r!==G?(n=_(),n!==G?(58===e.charCodeAt(Or)?(o=Ee,Or++):(o=G,0===qr&&f(ke)),o!==G?(i=_(),i!==G?(u=v(),u!==G?(Rr=t,r=Yt(r,u),t=r):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G)):(Or=t,t=G),Br[a]={nextPos:Or,result:t},t)}function M(){var e,t=32*Or+24,r=Br[t];return r?(Or=r.nextPos,r.result):(e=S(),e===G&&(e=U(),e===G&&(e=I())),Br[t]={nextPos:Or,result:e},e)}function S(){var t,r,n=32*Or+25,o=Br[n];return o?(Or=o.nextPos,o.result):(t=Or,"null"===e.substr(Or,4)?(r=Zt,Or+=4):(r=G,0===qr&&f(er)),r!==G&&(Rr=t,r=tr()),t=r,t===G&&(t=Or,"true"===e.substr(Or,4)?(r=rr,Or+=4):(r=G,0===qr&&f(nr)),r!==G&&(Rr=t,r=or()),t=r,t===G&&(t=Or,"false"===e.substr(Or,5)?(r=ir,Or+=5):(r=G,0===qr&&f(ur)),r!==G&&(Rr=t,r=ar()),t=r)),Br[n]={nextPos:Or,result:t},t)}function U(){var t,r,n,o,i,u=32*Or+26,a=Br[u];if(a)return Or=a.nextPos,a.result;if(qr++,t=Or,r=q(),r!==G)if(46===e.charCodeAt(Or)?(n=wt,Or++):(n=G,0===qr&&f(Et)),n!==G){for(o=[],cr.test(e.charAt(Or))?(i=e.charAt(Or),Or++):(i=G,0===qr&&f(lr));i!==G;)o.push(i),cr.test(e.charAt(Or))?(i=e.charAt(Or),Or++):(i=G,0===qr&&f(lr));o!==G?(i=B(),i===G&&(i=null),i!==G?(Rr=t,r=fr(),t=r):(Or=t,t=G)):(Or=t,t=G)}else Or=t,t=G;else Or=t,t=G;if(t===G){if(t=Or,46===e.charCodeAt(Or)?(r=wt,Or++):(r=G,0===qr&&f(Et)),r!==G){if(n=[],cr.test(e.charAt(Or))?(o=e.charAt(Or),Or++):(o=G,0===qr&&f(lr)),o!==G)for(;o!==G;)n.push(o),cr.test(e.charAt(Or))?(o=e.charAt(Or),Or++):(o=G,0===qr&&f(lr));else n=G;n!==G?(o=B(),o===G&&(o=null),o!==G?(Rr=t,r=fr(),t=r):(Or=t,t=G)):(Or=t,t=G)}else Or=t,t=G;t===G&&(t=Or,r=q(),r!==G?(n=B(),n===G&&(n=null),n!==G?(Rr=t,r=fr(),t=r):(Or=t,t=G)):(Or=t,t=G))}return qr--,t===G&&(r=G,0===qr&&f(sr)),Br[u]={nextPos:Or,result:t},t}function q(){var t,r,n,o,i=32*Or+27,u=Br[i];if(u)return Or=u.nextPos,u.result;if(48===e.charCodeAt(Or)?(t=dr,Or++):(t=G,0===qr&&f(pr)),t===G)if(t=Or,hr.test(e.charAt(Or))?(r=e.charAt(Or),Or++):(r=G,0===qr&&f(vr)),r!==G){for(n=[],cr.test(e.charAt(Or))?(o=e.charAt(Or),Or++):(o=G,0===qr&&f(lr));o!==G;)n.push(o),cr.test(e.charAt(Or))?(o=e.charAt(Or),Or++):(o=G,0===qr&&f(lr));n!==G?(r=[r,n],t=r):(Or=t,t=G)}else Or=t,t=G;return Br[i]={nextPos:Or,result:t},t}function B(){var t,r,n,o,i,u=32*Or+28,a=Br[u];if(a)return Or=a.nextPos,a.result;if(t=Or,"e"===e.substr(Or,1).toLowerCase()?(r=e.charAt(Or),Or++):(r=G,0===qr&&f(mr)),r!==G)if(Ze.test(e.charAt(Or))?(n=e.charAt(Or),Or++):(n=G,0===qr&&f(et)),n===G&&(n=null),n!==G){if(o=[],cr.test(e.charAt(Or))?(i=e.charAt(Or),Or++):(i=G,0===qr&&f(lr)),i!==G)for(;i!==G;)o.push(i),cr.test(e.charAt(Or))?(i=e.charAt(Or),Or++):(i=G,0===qr&&f(lr));else o=G;o!==G?(r=[r,n,o],t=r):(Or=t,t=G)}else Or=t,t=G;else Or=t,t=G;return Br[u]={nextPos:Or,result:t},t}function I(){var t,r,n,o,i,u=32*Or+29,a=Br[u];if(a)return Or=a.nextPos,a.result;if(qr++,t=Or,34===e.charCodeAt(Or)?(r=br,Or++):(r=G,0===qr&&f(gr)),r!==G){for(n=[],o=Or,'\\"'===e.substr(Or,2)?(i=Ar,Or+=2):(i=G,0===qr&&f(yr)),i!==G&&(Rr=o,i=Pr()),o=i,o===G&&(Cr.test(e.charAt(Or))?(o=e.charAt(Or),Or++):(o=G,0===qr&&f(wr)));o!==G;)n.push(o),o=Or,'\\"'===e.substr(Or,2)?(i=Ar,Or+=2):(i=G,0===qr&&f(yr)),i!==G&&(Rr=o,i=Pr()),o=i,o===G&&(Cr.test(e.charAt(Or))?(o=e.charAt(Or),Or++):(o=G,0===qr&&f(wr)));n!==G?(34===e.charCodeAt(Or)?(o=br,Or++):(o=G,0===qr&&f(gr)),o!==G?(Rr=t,r=Er(n),t=r):(Or=t,t=G)):(Or=t,t=G)}else Or=t,t=G;if(t===G)if(t=Or,39===e.charCodeAt(Or)?(r=kr,Or++):(r=G,0===qr&&f($r)),r!==G){for(n=[],o=Or,"\\'"===e.substr(Or,2)?(i=Lr,Or+=2):(i=G,0===qr&&f(jr)),i!==G&&(Rr=o,i=Nr()),o=i,o===G&&(zr.test(e.charAt(Or))?(o=e.charAt(Or),Or++):(o=G,0===qr&&f(Vr)));o!==G;)n.push(o),o=Or,"\\'"===e.substr(Or,2)?(i=Lr,Or+=2):(i=G,0===qr&&f(jr)),i!==G&&(Rr=o,i=Nr()),o=i,o===G&&(zr.test(e.charAt(Or))?(o=e.charAt(Or),Or++):(o=G,0===qr&&f(Vr)));n!==G?(39===e.charCodeAt(Or)?(o=kr,Or++):(o=G,0===qr&&f($r)),o!==G?(Rr=t,r=Er(n),t=r):(Or=t,t=G)):(Or=t,t=G)}else Or=t,t=G;return qr--,t===G&&(r=G,0===qr&&f(xr)),Br[u]={nextPos:Or,result:t},t}function _(){var e,t=32*Or+30,r=Br[t];return r?(Or=r.nextPos,r.result):(e=H(),e===G&&(e=null),Br[t]={nextPos:Or,result:e},e)}function H(){var t,r,n=32*Or+31,o=Br[n];if(o)return Or=o.nextPos,o.result;if(t=[],Fr.test(e.charAt(Or))?(r=e.charAt(Or),Or++):(r=G,0===qr&&f(Tr)),r!==G)for(;r!==G;)t.push(r),Fr.test(e.charAt(Or))?(r=e.charAt(Or),Or++):(r=G,0===qr&&f(Tr));else t=G;return Br[n]={nextPos:Or,result:t},t}r=void 0!==r?r:{};var D,G={},J={Text:p,Expression:v},K=p,Q=/^[^{]/,W=i(["{"],!0,!1),X=function(e,t,r){return(e.length>0?[e.join("")]:[]).concat([t],r)},Y=u(),Z=function(e){return e.length>0?[e.join("")]:[]},ee="{{{",te=o("{{{",!1),re="}}}",ne=o("}}}",!1),oe=function(e){return{html:!0,expression:e}},ie="{{",ue=o("{{",!1),ae="}}",se=o("}}",!1),ce=function(e){return{html:!1,expression:e}},le="=",fe=o("=",!1),de="*=",pe=o("*=",!1),he="/=",ve=o("/=",!1),me="%=",xe=o("%=",!1),be="+=",ge=o("+=",!1),Ae="-=",ye=o("-=",!1),Pe=function(e,t,r){return{type:"Assignment",operator:t,left:e,right:r}},Ce="?",we=o("?",!1),Ee=":",ke=o(":",!1),$e=function(e,t,r){return{type:"Conditional",test:e,consequent:t,alternate:r}},Le="||",je=o("||",!1),Ne=function(e,t){return{operator:"||",arg:t}},ze=function(e,t){return Ir("Logical",e,t)},Ve="&&",Fe=o("&&",!1),Te=function(e,t){return{operator:"&&",arg:t}},Oe="===",Re=o("===",!1),Me="!==",Se=o("!==",!1),Ue="==",qe=o("==",!1),Be="!=",Ie=o("!=",!1),_e=function(e,t,r){return{operator:t,arg:r}},He=function(e,t){return Ir("Binary",e,t)},De="<=",Ge=o("<=",!1),Je=">=",Ke=o(">=",!1),Qe="<",We=o("<",!1),Xe=">",Ye=o(">",!1),Ze=/^[+\-]/,et=i(["+","-"],!1,!1),tt=/^[*\/%]/,rt=i(["*","/","%"],!1,!1),nt="++",ot=o("++",!1),it="--",ut=o("--",!1),at=/^[+!\-]/,st=i(["+","!","-"],!1,!1),ct=function(e,t){return{type:"++"===e||"--"===e?"Update":"Unary",operator:e,argument:t,prefix:!0}},lt=function(e,t){return{type:"Update",operator:t,argument:e,prefix:!1}},ft=function(e,t){return{type:"Call",callee:e,arguments:t}},dt=function(e,t){return t.reduce(function(e,t){return{type:"Member",property:t,object:e}},e)},pt="(",ht=o("(",!1),vt=")",mt=o(")",!1),xt=function(e){return e},bt=function(e,t){return t.reduce(function(e,t){return{type:"Member",object:e,property:t}},e)},gt="[",At=o("[",!1),yt="]",Pt=o("]",!1),Ct=function(e){return e},wt=".",Et=o(".",!1),kt=function(e){return{type:"Literal",value:e.name}},$t="new",Lt=o("new",!1),jt=function(e,t){return t},Nt=function(e,t){return{type:"NewExpression",callee:e,arguments:t||[]}},zt=function(){return[]},Vt=",",Ft=o(",",!1),Tt=function(e,t){return t},Ot=function(e,t){return[e].concat(t)},Rt=s("identifier"),Mt=/^[a-z$_]/i,St=i([["a","z"],"$","_"],!1,!0),Ut=/^[a-z$_0-9]/i,qt=i([["a","z"],"$","_",["0","9"]],!1,!0),Bt=function(e,t){return{type:"Identifier",name:e+t.join("")}},It=function(){return{type:"Array",elements:[]}},_t=function(e){return{type:"Array",elements:e}},Ht=function(e,t){return t},Dt="{",Gt=o("{",!1),Jt="}",Kt=o("}",!1),Qt=function(){return{type:"Object",properties:[]}},Wt=function(e){return{type:"Object",properties:e}},Xt=function(e,t){return t},Yt=function(e,t){return{type:"Property",key:e.name||e.value,value:t}},Zt="null",er=o("null",!1),tr=function(){return{type:"Literal",value:null}},rr="true",nr=o("true",!1),or=function(){return{type:"Literal",value:!0}},ir="false",ur=o("false",!1),ar=function(){return{type:"Literal",value:!1}},sr=s("number"),cr=/^[0-9]/,lr=i([["0","9"]],!1,!1),fr=function(){return{type:"Literal",value:parseFloat(n())}},dr="0",pr=o("0",!1),hr=/^[1-9]/,vr=i([["1","9"]],!1,!1),mr=o("e",!0),xr=s("string"),br='"',gr=o('"',!1),Ar='\\"',yr=o('\\"',!1),Pr=function(){return'"'},Cr=/^[^"]/,wr=i(['"'],!0,!1),Er=function(e){return{type:"Literal",value:e.join("")}},kr="'",$r=o("'",!1),Lr="\\'",jr=o("\\'",!1),Nr=function(){return"'"},zr=/^[^'']/,Vr=i(["'","'"],!0,!1),Fr=/^[\t ]/,Tr=i(["\t"," "],!1,!1),Or=0,Rr=0,Mr=[{line:1,column:1}],Sr=0,Ur=[],qr=0,Br={};if("startRule"in r){if(!(r.startRule in J))throw new Error("Can't start parsing from rule \""+r.startRule+'".');K=J[r.startRule]}var Ir=function(e,t,r){return 0===r.length?t:r.reduce(function(t,r){return{type:e,operator:r.operator,left:t,right:r.arg}},t)};if(D=K(),D!==G&&Or===e.length)return D;throw D!==G&&Or<e.length&&f(a()),d(Ur,Sr<e.length?e.charAt(Sr):null,Sr<e.length?l(Sr,Sr+1):l(Sr,Sr))}return e(t,Error),t.buildMessage=function(e,t){function r(e){return e.charCodeAt(0).toString(16).toUpperCase()}function n(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(e){return"\\x0"+r(e)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(e){return"\\x"+r(e)})}function o(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(e){return"\\x0"+r(e)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(e){return"\\x"+r(e)})}function i(e){return s[e.type](e)}function u(e){var t,r,n=new Array(e.length);for(t=0;t<e.length;t++)n[t]=i(e[t]);if(n.sort(),n.length>0){for(t=1,r=1;t<n.length;t++)n[t-1]!==n[t]&&(n[r]=n[t],r++);n.length=r}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}function a(e){return e?'"'+n(e)+'"':"end of input"}var s={literal:function(e){return'"'+n(e.text)+'"'},class:function(e){var t,r="";for(t=0;t<e.parts.length;t++)r+=e.parts[t]instanceof Array?o(e.parts[t][0])+"-"+o(e.parts[t][1]):o(e.parts[t]);return"["+(e.inverted?"^":"")+r+"]"},any:function(e){return"any character"},end:function(e){return"end of input"},other:function(e){return e.description}};return"Expected "+u(e)+" but "+a(t)+" found."},{SyntaxError:t,parse:r}}(),t=function(e){return Array.prototype.slice.call(e)},r=function(e){return String(null!==e&&"undefined"!=typeof e?e:"")},n=function(e,t){if(e){var r=e.indexOf(t);r>-1&&e.splice(r,1)}},o=e.parse,i=function(e,t){e.forEach(function(e){t(e),i(e.children,t)})},u=function(e,t){var r,n,o=e.type,i=e.operator;if("Literal"===o)r=e.value;else if("Array"===o)r=e.elements.map(function(e){return u(e,t).value});else if("Object"===o)r={},e.properties.forEach(function(e){r[e.key]=u(e.value,t).value});else if("Identifier"===o){for(var a=t;a&&"undefined"==typeof a[e.name];)a=a.$parent;a||(a=t),r=a[e.name],n=function(t){return a[e.name]=t,t}}else if("Member"===o){var s=u(e.object,t).value,c=u(e.property,t).value;r="undefined"!=typeof s?s[c]:void 0,n=function(e){return s[c]=e,e}}else if("Conditional"===o)r=u(e.test,t).value?u(e.consequent,t).value:u(e.alternate,t).value;else if("Unary"===o||"Update"===o){var l=u(e.argument,t),f=l.value;r="!"===i?!f:"+"===i?+f:"-"===i?-f:"++"===i?f+1:"--"===i?f-1:null,"Update"===o&&(n=l.set,n&&(r=n(r)),e.prefix||(r+="++"===i?-1:1))}else if("Binary"===o||"Logical"===o||"Assignment"===o){var d=u(e.left,t),p=d.value,h=u(e.right,t).value;r="==="===i?p===h:"!=="===i?p!==h:"=="===i?p==h:"!="===i?p!=h:"<"===i?p<h:">"===i?p>h:"<="===i?p<=h:">="===i?p>=h:"&&"===i?p&&h:"||"===i?p||h:"+"===i?p+h:"-"===i?p-h:"*"===i?p*h:"/"===i?p/h:"%"===i?p%h:"*="===i?p*h:"/="===i?p/h:"%="===i?p%h:"+="===i?p+h:"-="===i?p-h:"="===i?h:null,"Assignment"===o&&(n=d.set,r=n(r))}else if("Call"===o||"NewExpression"===o){var v=e.callee.object?u(e.callee.object,t).value:t,m=u(e.callee,t).value,x=e.arguments.map(function(e){return u(e,t).value});r=m?"Call"===o?m.apply(v,x):new(m.bind.apply(m,x)):void 0}return{value:r,set:n}},a=[],s=function(e,r,n,o,i){var a=function(){return[s.view,s.node].concat(o)},s={view:r,node:n,syntax:i,eval:function(e){return u(e||i,s.view).value},create:function(){e.create&&e.create.apply(s,a())},update:function(){e.update&&e.update.apply(s,a())},destroy:function(){e.destroy&&e.destroy.apply(s,a())}};if(e.template){var c=document.createElement("span");c.innerHTML=e.template,c=c.childNodes[0],t(n.attributes).forEach(function(e){c.setAttribute(e.name,e.value)}),n.parentNode.replaceChild(c,n),s.node=c}return s},c=function(e,r,u,l){if([1,3].indexOf(r.nodeType)!==-1){if(r.vElement)return void(l&&r.vElement.view!==e.$parent?r.vElement.view.$setParent(e):(u.push(r.vElement),i(r.vElement.children,function(t){t.bindings.forEach(function(t){t.view=e})}),r.vElement.parent&&n(r.vElement.parent.children,r.vElement)));var f={view:e,parent:l,node:r,children:[],bindings:[],removedAttrs:[]};if(r.vElement=f,u.push(f),1===r.nodeType){let n,i=t(r.attributes);f.bindings=[],a.forEach(function(t){if(t.tag){let o=r.tagName.match(new RegExp("^"+t.tag.replace("{prefix}",p.prefix)+"$","i"));if(o){var u=s(t,e,r,o);f.bindings.push(u),n=t.block||t.template,t.template&&c(e,u.node,f.children)}}else t.attribute&&(i=i.filter(function(i){if(!n){let l=i.name.match(new RegExp("^"+t.attribute.replace("{prefix}",p.prefix)+"$","i"));if(l){var u=o(i.value||"undefined",{startRule:"Expression"});f.removedAttrs.push({name:i.name,value:i.value}),r.removeAttribute(i.name);var a=s(t,e,r,l,u);f.bindings.push(a),n=t.block||t.template,t.template&&c(e,a.node,f.children)}return!l}}))}),n||t(r.childNodes).forEach(function(t){c(e,t,f.children,f)})}else if(3===r.nodeType&&r.nodeValue.indexOf("{{")>-1){var d=r.nodeValue;o(d,{startRule:"Text"}).forEach(function(t){var n;if("string"==typeof t)n=document.createTextNode(t);else{n=t.html?document.createElement("span"):document.createTextNode("");var o=s(h,e,n,["",t.html?"html":"text"],t.expression),i=Object.assign({},f,{bindings:[o]});u.push(i),n.vElement=i}r.parentNode.insertBefore(n,r)}),r.parentNode.removeChild(r)}}},l=function(e){i(e,function(e){e.bindings.forEach(function(e){e.create()})})},f=function(e){i(e,function(e){e.bindings.forEach(function(e){e.update()})})},d=function(e){i(e,function(e){e.bindings.forEach(function(e){e.destroy()}),delete e.node.vElement,e.removedAttrs.forEach(function(t){e.node.setAttribute(t.name,t.value)})})},p=function(e,t,r){e="string"==typeof e?document.querySelector(e):e[0]||e;var i=Object.assign({},t),a=[],s={},h=[];return i.$vDOM=a,i.$=function(){f(a),i.$emit("update")},i.$destroy=function(){d(a),i.$emit("destroy")},i.$on=function(e,t){s[e]||(s[e]=[]),s[e].push(t)},i.$off=function(e,t){n(s[e],t)},i.$emit=function(e){(s[e]||[]).forEach(function(e){e()})},i.$watch=function(e,t){h.push({expr:e,syntax:o(e,{startRule:"Expression"}),cb:t})},i.$unwatch=function(e,t){var r=h.find(function(r){return r.expr===e&&r.cb===t});r&&n(h,r)},i.$on("update",function(){h.forEach(function(e){var t=u(e.syntax,i).value;t!==e.val&&(e.val=t,e.cb(t))})}),i.$setParent=function(e){var t=i.$parent;i.$parent=e,t&&t.$off&&t.$off("update",i.$),e.$on&&e.$on("update",i.$)},i.$setParent(r||e.vElement&&e.vElement.view||p.root),c(i,e,a),l(a),i};p.version="0.1.7",p.prefix="z-",p.parse=o,p.evaluate=u,p.directive=function(e){return e.block=e.block,e.order=e.template?.5:e.order||100,a=a.concat([e]).sort(function(e,t){return e.order-t.order}),e},p.root={},p.root.$parent="undefined"!=typeof global?global:window,p.root.number=function(e,t){return Number(e).toFixed(t||2)},p.root.percent=function(e,t){return Number(100*e).toFixed(t||2)+"%"};var h=p.directive({attribute:"{prefix}(text|html)",block:!0,create:function(e,t){t.innerHTML=""},update:function(e,t,n,o){var i=r(this.eval());i!==this.prevValue&&("html"===o?t.innerHTML=i:t.textContent=i,this.prevValue=i)}});p.directive({attribute:"{prefix}show",update:function(e,t){var r=!!this.eval();r!==this.prevValue&&(t.style.display=r?"":"none",this.prevValue=r)}}),p.directive({attribute:"{prefix}exist",order:3,block:!0,create:function(e,t,r){this.marker=document.createComment(r),t.parentNode.replaceChild(this.marker,t)},update:function(e,t){var r=!!this.eval();r!==this.prevValue&&(r?(this.clone=t.cloneNode(!0),this.childView=p(this.clone,void 0,e),this.marker.parentNode.insertBefore(this.clone,this.marker)):this.clone&&this.marker.parentNode.removeChild(this.clone),this.prevValue=r),this.clone&&this.childView.$()}}),p.directive({attribute:"{prefix}(.+)-in",order:2,block:!0,create:function(e,t,r){this.items=[],this.marker=document.createComment(r),t.parentNode.replaceChild(this.marker,t)},update:function(e,t,r,o){var i=this,u=this.eval()||[],a=document.createDocumentFragment();i.items.forEach(function(e){u.indexOf(e.data)===-1&&(i.marker.parentNode.removeChild(e.el),n(i.items,e))}),u.forEach(function(e){if(!i.items.find(function(t){return t.data===e})){var r=t.cloneNode(!0);i.items.push({el:r,data:e}),a.appendChild(r)}}),i.marker.parentNode.insertBefore(a,this.marker),i.items.forEach(function(t){t.view||(t.view=p(t.el,void 0,e),t.view[o]=t.data),t.view.$()})}});var v=["accept","accept-charset","accesskey","action","align","alt","async","autocomplete","autofocus","autoplay","autosave","buffered","challenge","charset","checked","cite","class","code","codebase","cols","colspan","content","contenteditable","contextmenu","controls","coords","crossorigin","data","data-*","datetime","default","defer","dir","dirname","disabled","download","draggable","dropzone","enctype","for","form","formaction","headers","hidden","high","href","hreflang","http-equiv","icon","id","integrity","ismap","itemprop","keytype","kind","label","lang","language","list","loop","low","manifest","max","maxlength","minlength","media","method","min","multiple","muted","name","novalidate","open","optimum","pattern","ping","placeholder","poster","preload","radiogroup","readonly","rel","required","reversed","rows","rowspan","sandbox","scope","scoped","seamless","selected","shape","size","sizes","slot","span","spellcheck","src","srcdoc","srclang","srcset","start","step","style","summary","tabindex","target","title","type","usemap","value","wrap"],m=["selected","checked","disabled","readonly","multiple","ismap","defer","noresize"];
p.directive({attribute:"{prefix}(?:attr-(.+)|("+v.join("|")+"))",update:function(e,t,r,n,o){n=n||o;var i=this.eval();i!==this.prevValue&&(this.prevValue=i,m.indexOf(n)>-1&&(i=i?n:void 0),"undefined"==typeof i?t.removeAttribute(n):t.setAttribute(n,i))}}),p.directive({attribute:"{prefix}class-(.+)",update:function(e,t,r,n){t.classList.toggle(n,!!this.eval())}});var x=["align-.*","all","animation","animation-.*","backface-visibility","background","background-.*","border","border-.*","bottom","box-.*","break-.*","caption-side","caret-color","clear","clip","clip-path","color","column-.*","columns","content","counter-.*","cursor","direction","display","empty-cells","filter","flex-.*","float","font","font-.*","grid","grid-.*","height","hyphens","image-.*","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-.*","list-.*","margin","margin-.*","mask","mask-.*","max-height","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","object-fit","object-position","offset-.*","opacity","order","orphans","outline","outline-.*","overflow","overflow-.*","padding","padding-.*","page-break-.*","perspective","perspective-origin","pointer-events","position","quotes","resize","right","scroll-.*","shape-.*","tab-size","table-layout","text-.*","top","touch-action","transform","transform-.*","transition","transition-.*","unicode-bidi","unset","vertical-align","visibility","white-space","widows","width","will-change","word-.*","writing-mode","z-index"];p.directive({attribute:"{prefix}(?:style-(.+)|("+x.join("|")+"))",update:function(e,t,r,n,o){t.style[n||o]=this.eval()}}),p.directive({attribute:"{prefix}model",block:!0,create:function(e,t){var r=this;this.type="select"===t.tagName.toLowerCase()?"select":t.getAttribute("type").toLowerCase(),this.optionValue=function(e){if(e.getAttribute("z-value")){var t=o(e.getAttribute("z-value"),{startRule:"Expression"});return r.eval(t)}return e.getAttribute("value")},this.handler=function(){var n="checkbox"===r.type?!!t.checked:"select"===r.type?r.optionValue(t.options[t.selectedIndex]):t.value;n!==r.prevValue&&(r.prevValue=n,r.eval({type:"Assignment",operator:"=",left:r.syntax,right:{type:"Literal",value:n}}),e.$())},t.addEventListener("input",this.handler),t.addEventListener("change",this.handler),"select"===this.type&&(t.selectedIndex=-1)},update:function(e,t){var n=this,o=this.eval();o!==this.prevValue&&("checkbox"===this.type?t.checked=!!o:"select"===this.type?t.selectedIndex=Array.from(t.options).reduce(function(e,t,i){var u=n.optionValue(t);return t.setAttribute("value",r(u)),u===o?i:e},-1):t.value=r(o),this.prevValue=o)},destroy:function(e,t){t.removeEventListener("input",this.handler),t.removeEventListener("change",this.handler)}});var b=["load","error","focus","blur","click","dblclick","mousedown","mousemove","mouseup","mouseenter","mouseleave","mouseover","mouseout","keyup","keydown","keypress","input","change","submit","reset","scroll","resize","dragstart","dragend","dragenter","dragover","dragleave","drag","drop"];return p.directive({attribute:"{prefix}(?:on-(.+)|("+b.join("|")+"))",create:function(e,t,r,n,o){var i=this;this.handler=function(t){e.$event=t,i.eval(),delete e.$event,e.$()},t.addEventListener(n||o,this.handler)},destroy:function(e,t,r,n,o){t.removeEventListener(n||o,this.handler)}}),p.directive({attribute:"{prefix}skip",order:1,block:!0}),p});
