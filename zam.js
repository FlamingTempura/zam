!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.zam=t()}(this,function(){"use strict";var e=function(){function e(e,t){function r(){this.constructor=e}r.prototype=t.prototype,e.prototype=new r}function t(e,r,n,i){this.message=e,this.expected=r,this.found=n,this.location=i,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,t)}function r(e,r){function n(){return e.substring(Rr,Tr)}function i(e,t){return{type:"literal",text:e,ignoreCase:t}}function o(e,t,r){return{type:"class",parts:e,inverted:t,ignoreCase:r}}function a(){return{type:"any"}}function u(){return{type:"end"}}function s(e){return{type:"other",description:e}}function c(t){var r,n=Mr[t];if(n)return n;for(r=t-1;!Mr[r];)r--;for(n=Mr[r],n={line:n.line,column:n.column};r<t;)10===e.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return Mr[t]=n,n}function l(e,t){var r=c(e),n=c(t);return{start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:n.line,column:n.column}}}function f(e){Tr<Sr||(Tr>Sr&&(Sr=Tr,Ur=[]),Ur.push(e))}function d(e,r,n){return new t(t.buildMessage(e,r),e,r,n)}function p(){var t,r,n,i,o=32*Tr+0,a=Br[o];if(a)return Tr=a.nextPos,a.result;for(t=Tr,r=[],Q.test(e.charAt(Tr))?(n=e.charAt(Tr),Tr++):(n=J,0===qr&&f(W));n!==J;)r.push(n),Q.test(e.charAt(Tr))?(n=e.charAt(Tr),Tr++):(n=J,0===qr&&f(W));if(r!==J?(n=h(),n!==J?(i=p(),i!==J?(Rr=t,r=X(r,n,i),t=r):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J),t===J){for(t=Tr,r=[],e.length>Tr?(n=e.charAt(Tr),Tr++):(n=J,0===qr&&f(Y));n!==J;)r.push(n),e.length>Tr?(n=e.charAt(Tr),Tr++):(n=J,0===qr&&f(Y));r!==J&&(Rr=t,r=Z(r)),t=r}return Br[o]={nextPos:Tr,result:t},t}function h(){var t,r,n,i,o,a,u=32*Tr+1,s=Br[u];return s?(Tr=s.nextPos,s.result):(t=Tr,"{{{"===e.substr(Tr,3)?(r=ee,Tr+=3):(r=J,0===qr&&f(te)),r!==J?(n=D(),n!==J?(i=v(),i!==J?(o=D(),o!==J?("}}}"===e.substr(Tr,3)?(a=re,Tr+=3):(a=J,0===qr&&f(ne)),a!==J?(Rr=t,r=ie(i),t=r):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J),t===J&&(t=Tr,"{{"===e.substr(Tr,2)?(r=oe,Tr+=2):(r=J,0===qr&&f(ae)),r!==J?(n=D(),n!==J?(i=v(),i!==J?(o=D(),o!==J?("}}"===e.substr(Tr,2)?(a=ue,Tr+=2):(a=J,0===qr&&f(se)),a!==J?(Rr=t,r=ce(i),t=r):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)),Br[u]={nextPos:Tr,result:t},t)}function v(){var t,r,n,i,o,a,u=32*Tr+2,s=Br[u];return s?(Tr=s.nextPos,s.result):(t=Tr,r=m(),r!==J?(n=D(),n!==J?(61===e.charCodeAt(Tr)?(i=le,Tr++):(i=J,0===qr&&f(fe)),i===J&&("*="===e.substr(Tr,2)?(i=de,Tr+=2):(i=J,0===qr&&f(pe)),i===J&&("/="===e.substr(Tr,2)?(i=he,Tr+=2):(i=J,0===qr&&f(ve)),i===J&&("%="===e.substr(Tr,2)?(i=me,Tr+=2):(i=J,0===qr&&f(xe)),i===J&&("+="===e.substr(Tr,2)?(i=be,Tr+=2):(i=J,0===qr&&f(ge)),i===J&&("-="===e.substr(Tr,2)?(i=ye,Tr+=2):(i=J,0===qr&&f(Ae))))))),i!==J?(o=D(),o!==J?(a=v(),a!==J?(Rr=t,r=Pe(r,i,a),t=r):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J),t===J&&(t=x()),Br[u]={nextPos:Tr,result:t},t)}function m(){var e,t=32*Tr+3,r=Br[t];return r?(Tr=r.nextPos,r.result):(e=k(),e===J&&(e=$()),Br[t]={nextPos:Tr,result:e},e)}function x(){var t,r,n,i,o,a,u,s,c,l,d=32*Tr+4,p=Br[d];return p?(Tr=p.nextPos,p.result):(t=Tr,r=b(),r!==J?(n=D(),n!==J?(63===e.charCodeAt(Tr)?(i=Ce,Tr++):(i=J,0===qr&&f(we)),i!==J?(o=D(),o!==J?(a=x(),a!==J?(u=D(),u!==J?(58===e.charCodeAt(Tr)?(s=Ee,Tr++):(s=J,0===qr&&f(ke)),s!==J?(c=D(),c!==J?(l=x(),l!==J?(Rr=t,r=$e(r,a,l),t=r):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J),t===J&&(t=b()),Br[d]={nextPos:Tr,result:t},t)}function b(){var t,r,n,i,o,a,u,s,c=32*Tr+5,l=Br[c];if(l)return Tr=l.nextPos,l.result;if(t=Tr,r=g(),r!==J){for(n=[],i=Tr,o=D(),o!==J?("||"===e.substr(Tr,2)?(a=Ne,Tr+=2):(a=J,0===qr&&f(Le)),a!==J?(u=D(),u!==J?(s=g(),s!==J?(Rr=i,o=je(r,s),i=o):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J);i!==J;)n.push(i),i=Tr,o=D(),o!==J?("||"===e.substr(Tr,2)?(a=Ne,Tr+=2):(a=J,0===qr&&f(Le)),a!==J?(u=D(),u!==J?(s=g(),s!==J?(Rr=i,o=je(r,s),i=o):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J);n!==J?(Rr=t,r=Ve(r,n),t=r):(Tr=t,t=J)}else Tr=t,t=J;return Br[c]={nextPos:Tr,result:t},t}function g(){var t,r,n,i,o,a,u,s,c=32*Tr+6,l=Br[c];if(l)return Tr=l.nextPos,l.result;if(t=Tr,r=y(),r!==J){for(n=[],i=Tr,o=D(),o!==J?("&&"===e.substr(Tr,2)?(a=ze,Tr+=2):(a=J,0===qr&&f(Oe)),a!==J?(u=D(),u!==J?(s=y(),s!==J?(Rr=i,o=Fe(r,s),i=o):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J);i!==J;)n.push(i),i=Tr,o=D(),o!==J?("&&"===e.substr(Tr,2)?(a=ze,Tr+=2):(a=J,0===qr&&f(Oe)),a!==J?(u=D(),u!==J?(s=y(),s!==J?(Rr=i,o=Fe(r,s),i=o):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J);n!==J?(Rr=t,r=Ve(r,n),t=r):(Tr=t,t=J)}else Tr=t,t=J;return Br[c]={nextPos:Tr,result:t},t}function y(){var t,r,n,i,o,a,u,s,c=32*Tr+7,l=Br[c];if(l)return Tr=l.nextPos,l.result;if(t=Tr,r=A(),r!==J){for(n=[],i=Tr,o=D(),o!==J?("==="===e.substr(Tr,3)?(a=Te,Tr+=3):(a=J,0===qr&&f(Re)),a===J&&("!=="===e.substr(Tr,3)?(a=Me,Tr+=3):(a=J,0===qr&&f(Se)),a===J&&("=="===e.substr(Tr,2)?(a=Ue,Tr+=2):(a=J,0===qr&&f(qe)),a===J&&("!="===e.substr(Tr,2)?(a=Be,Tr+=2):(a=J,0===qr&&f(Ie))))),a!==J?(u=D(),u!==J?(s=A(),s!==J?(Rr=i,o=De(r,a,s),i=o):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J);i!==J;)n.push(i),i=Tr,o=D(),o!==J?("==="===e.substr(Tr,3)?(a=Te,Tr+=3):(a=J,0===qr&&f(Re)),a===J&&("!=="===e.substr(Tr,3)?(a=Me,Tr+=3):(a=J,0===qr&&f(Se)),a===J&&("=="===e.substr(Tr,2)?(a=Ue,Tr+=2):(a=J,0===qr&&f(qe)),a===J&&("!="===e.substr(Tr,2)?(a=Be,Tr+=2):(a=J,0===qr&&f(Ie))))),a!==J?(u=D(),u!==J?(s=A(),s!==J?(Rr=i,o=De(r,a,s),i=o):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J);n!==J?(Rr=t,r=_e(r,n),t=r):(Tr=t,t=J)}else Tr=t,t=J;return Br[c]={nextPos:Tr,result:t},t}function A(){var t,r,n,i,o,a,u,s,c=32*Tr+8,l=Br[c];if(l)return Tr=l.nextPos,l.result;if(t=Tr,r=P(),r!==J){for(n=[],i=Tr,o=D(),o!==J?("<="===e.substr(Tr,2)?(a=He,Tr+=2):(a=J,0===qr&&f(Je)),a===J&&(">="===e.substr(Tr,2)?(a=Ge,Tr+=2):(a=J,0===qr&&f(Ke)),a===J&&(60===e.charCodeAt(Tr)?(a=Qe,Tr++):(a=J,0===qr&&f(We)),a===J&&(62===e.charCodeAt(Tr)?(a=Xe,Tr++):(a=J,0===qr&&f(Ye))))),a!==J?(u=D(),u!==J?(s=P(),s!==J?(Rr=i,o=De(r,a,s),i=o):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J);i!==J;)n.push(i),i=Tr,o=D(),o!==J?("<="===e.substr(Tr,2)?(a=He,Tr+=2):(a=J,0===qr&&f(Je)),a===J&&(">="===e.substr(Tr,2)?(a=Ge,Tr+=2):(a=J,0===qr&&f(Ke)),a===J&&(60===e.charCodeAt(Tr)?(a=Qe,Tr++):(a=J,0===qr&&f(We)),a===J&&(62===e.charCodeAt(Tr)?(a=Xe,Tr++):(a=J,0===qr&&f(Ye))))),a!==J?(u=D(),u!==J?(s=P(),s!==J?(Rr=i,o=De(r,a,s),i=o):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J);n!==J?(Rr=t,r=_e(r,n),t=r):(Tr=t,t=J)}else Tr=t,t=J;return Br[c]={nextPos:Tr,result:t},t}function P(){var t,r,n,i,o,a,u,s,c=32*Tr+9,l=Br[c];if(l)return Tr=l.nextPos,l.result;if(t=Tr,r=C(),r!==J){for(n=[],i=Tr,o=D(),o!==J?(Ze.test(e.charAt(Tr))?(a=e.charAt(Tr),Tr++):(a=J,0===qr&&f(et)),a!==J?(u=D(),u!==J?(s=C(),s!==J?(Rr=i,o=De(r,a,s),i=o):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J);i!==J;)n.push(i),i=Tr,o=D(),o!==J?(Ze.test(e.charAt(Tr))?(a=e.charAt(Tr),Tr++):(a=J,0===qr&&f(et)),a!==J?(u=D(),u!==J?(s=C(),s!==J?(Rr=i,o=De(r,a,s),i=o):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J);n!==J?(Rr=t,r=_e(r,n),t=r):(Tr=t,t=J)}else Tr=t,t=J;return Br[c]={nextPos:Tr,result:t},t}function C(){var t,r,n,i,o,a,u,s,c=32*Tr+10,l=Br[c];if(l)return Tr=l.nextPos,l.result;if(t=Tr,r=w(),r!==J){for(n=[],i=Tr,o=D(),o!==J?(tt.test(e.charAt(Tr))?(a=e.charAt(Tr),Tr++):(a=J,0===qr&&f(rt)),a!==J?(u=D(),u!==J?(s=w(),s!==J?(Rr=i,o=De(r,a,s),i=o):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J);i!==J;)n.push(i),i=Tr,o=D(),o!==J?(tt.test(e.charAt(Tr))?(a=e.charAt(Tr),Tr++):(a=J,0===qr&&f(rt)),a!==J?(u=D(),u!==J?(s=w(),s!==J?(Rr=i,o=De(r,a,s),i=o):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J);n!==J?(Rr=t,r=_e(r,n),t=r):(Tr=t,t=J)}else Tr=t,t=J;return Br[c]={nextPos:Tr,result:t},t}function w(){var t,r,n,i,o=32*Tr+11,a=Br[o];return a?(Tr=a.nextPos,a.result):(t=E(),t===J&&(t=Tr,"++"===e.substr(Tr,2)?(r=nt,Tr+=2):(r=J,0===qr&&f(it)),r===J&&("--"===e.substr(Tr,2)?(r=ot,Tr+=2):(r=J,0===qr&&f(at)),r===J&&(ut.test(e.charAt(Tr))?(r=e.charAt(Tr),Tr++):(r=J,0===qr&&f(st)))),r!==J?(n=D(),n!==J?(i=w(),i!==J?(Rr=t,r=ct(r,i),t=r):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)),Br[o]={nextPos:Tr,result:t},t)}function E(){var t,r,n,i,o=32*Tr+12,a=Br[o];return a?(Tr=a.nextPos,a.result):(t=Tr,r=m(),r!==J?(n=D(),n!==J?("++"===e.substr(Tr,2)?(i=nt,Tr+=2):(i=J,0===qr&&f(it)),i===J&&("--"===e.substr(Tr,2)?(i=ot,Tr+=2):(i=J,0===qr&&f(at))),i!==J?(Rr=t,r=lt(r,i),t=r):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J),t===J&&(t=m()),Br[o]={nextPos:Tr,result:t},t)}function k(){var e,t,r,n,i,o=32*Tr+13,a=Br[o];return a?(Tr=a.nextPos,a.result):(e=Tr,t=Tr,r=$(),r!==J?(n=D(),n!==J?(i=j(),i!==J?(Rr=t,r=ft(r,i),t=r):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J),t!==J?(r=N(),r!==J?(Rr=e,t=dt(t,r),e=t):(Tr=e,e=J)):(Tr=e,e=J),Br[o]={nextPos:Tr,result:e},e)}function $(){var t,r,n,i,o,a,u,s=32*Tr+14,c=Br[s];return c?(Tr=c.nextPos,c.result):(t=Tr,r=L(),r===J&&(r=V(),r===J&&(r=M(),r===J&&(r=z(),r===J&&(r=F(),r===J&&(r=Tr,40===e.charCodeAt(Tr)?(n=pt,Tr++):(n=J,0===qr&&f(ht)),n!==J?(i=D(),i!==J?(o=v(),o!==J?(a=D(),a!==J?(41===e.charCodeAt(Tr)?(u=vt,Tr++):(u=J,0===qr&&f(mt)),u!==J?(Rr=r,n=xt(o),r=n):(Tr=r,r=J)):(Tr=r,r=J)):(Tr=r,r=J)):(Tr=r,r=J)):(Tr=r,r=J)))))),r!==J?(n=N(),n!==J?(Rr=t,r=bt(r,n),t=r):(Tr=t,t=J)):(Tr=t,t=J),Br[s]={nextPos:Tr,result:t},t)}function N(){var t,r,n,i,o,a,u,s,c=32*Tr+15,l=Br[c];if(l)return Tr=l.nextPos,l.result;for(t=[],r=Tr,n=D(),n!==J?(91===e.charCodeAt(Tr)?(i=gt,Tr++):(i=J,0===qr&&f(yt)),i!==J?(o=D(),o!==J?(a=v(),a!==J?(u=D(),u!==J?(93===e.charCodeAt(Tr)?(s=At,Tr++):(s=J,0===qr&&f(Pt)),s!==J?(Rr=r,n=Ct(a),r=n):(Tr=r,r=J)):(Tr=r,r=J)):(Tr=r,r=J)):(Tr=r,r=J)):(Tr=r,r=J)):(Tr=r,r=J),r===J&&(r=Tr,n=D(),n!==J?(46===e.charCodeAt(Tr)?(i=wt,Tr++):(i=J,0===qr&&f(Et)),i!==J?(o=D(),o!==J?(a=V(),a!==J?(Rr=r,n=kt(a),r=n):(Tr=r,r=J)):(Tr=r,r=J)):(Tr=r,r=J)):(Tr=r,r=J));r!==J;)t.push(r),r=Tr,n=D(),n!==J?(91===e.charCodeAt(Tr)?(i=gt,Tr++):(i=J,0===qr&&f(yt)),i!==J?(o=D(),o!==J?(a=v(),a!==J?(u=D(),u!==J?(93===e.charCodeAt(Tr)?(s=At,Tr++):(s=J,0===qr&&f(Pt)),s!==J?(Rr=r,n=Ct(a),r=n):(Tr=r,r=J)):(Tr=r,r=J)):(Tr=r,r=J)):(Tr=r,r=J)):(Tr=r,r=J)):(Tr=r,r=J),r===J&&(r=Tr,n=D(),n!==J?(46===e.charCodeAt(Tr)?(i=wt,Tr++):(i=J,0===qr&&f(Et)),i!==J?(o=D(),o!==J?(a=V(),a!==J?(Rr=r,n=kt(a),r=n):(Tr=r,r=J)):(Tr=r,r=J)):(Tr=r,r=J)):(Tr=r,r=J));return Br[c]={nextPos:Tr,result:t},t}function L(){var t,r,n,i,o,a,u,s=32*Tr+16,c=Br[s];return c?(Tr=c.nextPos,c.result):(t=Tr,"new"===e.substr(Tr,3)?(r=$t,Tr+=3):(r=J,0===qr&&f(Nt)),r!==J?(n=_(),n!==J?(i=$(),i!==J?(o=Tr,a=D(),a!==J?(u=j(),u!==J?(Rr=o,a=Lt(i,u),o=a):(Tr=o,o=J)):(Tr=o,o=J),o===J&&(o=null),o!==J?(Rr=t,r=jt(i,o),t=r):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J),Br[s]={nextPos:Tr,result:t},t)}function j(){var t,r,n,i,o,a,u,s,c,l,d=32*Tr+17,p=Br[d];if(p)return Tr=p.nextPos,p.result;if(t=Tr,40===e.charCodeAt(Tr)?(r=pt,Tr++):(r=J,0===qr&&f(ht)),r!==J?(n=D(),n!==J?(41===e.charCodeAt(Tr)?(i=vt,Tr++):(i=J,0===qr&&f(mt)),i!==J?(Rr=t,r=Vt(),t=r):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J),t===J)if(t=Tr,40===e.charCodeAt(Tr)?(r=pt,Tr++):(r=J,0===qr&&f(ht)),r!==J)if(n=D(),n!==J)if(i=v(),i!==J){for(o=[],a=Tr,u=D(),u!==J?(44===e.charCodeAt(Tr)?(s=zt,Tr++):(s=J,0===qr&&f(Ot)),s!==J?(c=D(),c!==J?(l=v(),l!==J?(Rr=a,u=Ft(i,l),a=u):(Tr=a,a=J)):(Tr=a,a=J)):(Tr=a,a=J)):(Tr=a,a=J);a!==J;)o.push(a),a=Tr,u=D(),u!==J?(44===e.charCodeAt(Tr)?(s=zt,Tr++):(s=J,0===qr&&f(Ot)),s!==J?(c=D(),c!==J?(l=v(),l!==J?(Rr=a,u=Ft(i,l),a=u):(Tr=a,a=J)):(Tr=a,a=J)):(Tr=a,a=J)):(Tr=a,a=J);o!==J?(a=D(),a!==J?(41===e.charCodeAt(Tr)?(u=vt,Tr++):(u=J,0===qr&&f(mt)),u!==J?(Rr=t,r=Tt(i,o),t=r):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)}else Tr=t,t=J;else Tr=t,t=J;else Tr=t,t=J;return Br[d]={nextPos:Tr,result:t},t}function V(){var t,r,n,i,o,a=32*Tr+18,u=Br[a];if(u)return Tr=u.nextPos,u.result;if(qr++,t=Tr,r=Tr,qr++,n=S(),qr--,n===J?r=void 0:(Tr=r,r=J),r!==J)if(Mt.test(e.charAt(Tr))?(n=e.charAt(Tr),Tr++):(n=J,0===qr&&f(St)),n!==J){for(i=[],Ut.test(e.charAt(Tr))?(o=e.charAt(Tr),Tr++):(o=J,0===qr&&f(qt));o!==J;)i.push(o),Ut.test(e.charAt(Tr))?(o=e.charAt(Tr),Tr++):(o=J,0===qr&&f(qt));i!==J?(Rr=t,r=Bt(n,i),t=r):(Tr=t,t=J)}else Tr=t,t=J;else Tr=t,t=J;return qr--,t===J&&(r=J,0===qr&&f(Rt)),Br[a]={nextPos:Tr,result:t},t}function z(){var t,r,n,i,o,a,u=32*Tr+19,s=Br[u];return s?(Tr=s.nextPos,s.result):(t=Tr,91===e.charCodeAt(Tr)?(r=gt,Tr++):(r=J,0===qr&&f(yt)),r!==J?(n=D(),n!==J?(93===e.charCodeAt(Tr)?(i=At,Tr++):(i=J,0===qr&&f(Pt)),i!==J?(Rr=t,r=It(),t=r):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J),t===J&&(t=Tr,91===e.charCodeAt(Tr)?(r=gt,Tr++):(r=J,0===qr&&f(yt)),r!==J?(n=D(),n!==J?(i=O(),i!==J?(o=D(),o!==J?(93===e.charCodeAt(Tr)?(a=At,Tr++):(a=J,0===qr&&f(Pt)),a!==J?(Rr=t,r=Dt(i),t=r):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)),Br[u]={nextPos:Tr,result:t},t)}function O(){var t,r,n,i,o,a,u,s,c=32*Tr+20,l=Br[c];if(l)return Tr=l.nextPos,l.result;if(t=Tr,r=v(),r!==J){for(n=[],i=Tr,o=D(),o!==J?(44===e.charCodeAt(Tr)?(a=zt,Tr++):(a=J,0===qr&&f(Ot)),a!==J?(u=D(),u!==J?(s=v(),s!==J?(Rr=i,o=_t(r,s),i=o):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J);i!==J;)n.push(i),i=Tr,o=D(),o!==J?(44===e.charCodeAt(Tr)?(a=zt,Tr++):(a=J,0===qr&&f(Ot)),a!==J?(u=D(),u!==J?(s=v(),s!==J?(Rr=i,o=_t(r,s),i=o):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J);n!==J?(Rr=t,r=Tt(r,n),t=r):(Tr=t,t=J)}else Tr=t,t=J;return Br[c]={nextPos:Tr,result:t},t}function F(){var t,r,n,i,o,a,u,s,c=32*Tr+21,l=Br[c];return l?(Tr=l.nextPos,l.result):(t=Tr,123===e.charCodeAt(Tr)?(r=Ht,Tr++):(r=J,0===qr&&f(Jt)),r!==J?(n=D(),n!==J?(125===e.charCodeAt(Tr)?(i=Gt,Tr++):(i=J,0===qr&&f(Kt)),i!==J?(Rr=t,r=Qt(),t=r):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J),t===J&&(t=Tr,123===e.charCodeAt(Tr)?(r=Ht,Tr++):(r=J,0===qr&&f(Jt)),r!==J?(n=D(),n!==J?(i=T(),i!==J?(o=D(),o!==J?(a=Tr,44===e.charCodeAt(Tr)?(u=zt,Tr++):(u=J,0===qr&&f(Ot)),u!==J?(s=D(),s!==J?(u=[u,s],a=u):(Tr=a,a=J)):(Tr=a,a=J),a===J&&(a=null),a!==J?(125===e.charCodeAt(Tr)?(u=Gt,Tr++):(u=J,0===qr&&f(Kt)),u!==J?(Rr=t,r=Wt(i),t=r):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)),Br[c]={nextPos:Tr,result:t},t)}function T(){var t,r,n,i,o,a,u,s,c=32*Tr+22,l=Br[c];if(l)return Tr=l.nextPos,l.result;if(t=Tr,r=R(),r!==J){for(n=[],i=Tr,o=D(),o!==J?(44===e.charCodeAt(Tr)?(a=zt,Tr++):(a=J,0===qr&&f(Ot)),a!==J?(u=D(),u!==J?(s=R(),s!==J?(Rr=i,o=Xt(r,s),i=o):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J);i!==J;)n.push(i),i=Tr,o=D(),o!==J?(44===e.charCodeAt(Tr)?(a=zt,Tr++):(a=J,0===qr&&f(Ot)),a!==J?(u=D(),u!==J?(s=R(),s!==J?(Rr=i,o=Xt(r,s),i=o):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J)):(Tr=i,i=J);n!==J?(Rr=t,r=Tt(r,n),t=r):(Tr=t,t=J)}else Tr=t,t=J;return Br[c]={nextPos:Tr,result:t},t}function R(){var t,r,n,i,o,a,u=32*Tr+23,s=Br[u];return s?(Tr=s.nextPos,s.result):(t=Tr,r=V(),r===J&&(r=I(),r===J&&(r=U())),r!==J?(n=D(),n!==J?(58===e.charCodeAt(Tr)?(i=Ee,Tr++):(i=J,0===qr&&f(ke)),i!==J?(o=D(),o!==J?(a=v(),a!==J?(Rr=t,r=Yt(r,a),t=r):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J)):(Tr=t,t=J),Br[u]={nextPos:Tr,result:t},t)}function M(){var e,t=32*Tr+24,r=Br[t];return r?(Tr=r.nextPos,r.result):(e=S(),e===J&&(e=U(),e===J&&(e=I())),Br[t]={nextPos:Tr,result:e},e)}function S(){var t,r,n=32*Tr+25,i=Br[n];return i?(Tr=i.nextPos,i.result):(t=Tr,"null"===e.substr(Tr,4)?(r=Zt,Tr+=4):(r=J,0===qr&&f(er)),r!==J&&(Rr=t,r=tr()),t=r,t===J&&(t=Tr,"true"===e.substr(Tr,4)?(r=rr,Tr+=4):(r=J,0===qr&&f(nr)),r!==J&&(Rr=t,r=ir()),t=r,t===J&&(t=Tr,"false"===e.substr(Tr,5)?(r=or,Tr+=5):(r=J,0===qr&&f(ar)),r!==J&&(Rr=t,r=ur()),t=r)),Br[n]={nextPos:Tr,result:t},t)}function U(){var t,r,n,i,o,a=32*Tr+26,u=Br[a];if(u)return Tr=u.nextPos,u.result;if(qr++,t=Tr,r=q(),r!==J)if(46===e.charCodeAt(Tr)?(n=wt,Tr++):(n=J,0===qr&&f(Et)),n!==J){for(i=[],cr.test(e.charAt(Tr))?(o=e.charAt(Tr),Tr++):(o=J,0===qr&&f(lr));o!==J;)i.push(o),cr.test(e.charAt(Tr))?(o=e.charAt(Tr),Tr++):(o=J,0===qr&&f(lr));i!==J?(o=B(),o===J&&(o=null),o!==J?(Rr=t,r=fr(),t=r):(Tr=t,t=J)):(Tr=t,t=J)}else Tr=t,t=J;else Tr=t,t=J;if(t===J){if(t=Tr,46===e.charCodeAt(Tr)?(r=wt,Tr++):(r=J,0===qr&&f(Et)),r!==J){if(n=[],cr.test(e.charAt(Tr))?(i=e.charAt(Tr),Tr++):(i=J,0===qr&&f(lr)),i!==J)for(;i!==J;)n.push(i),cr.test(e.charAt(Tr))?(i=e.charAt(Tr),Tr++):(i=J,0===qr&&f(lr));else n=J;n!==J?(i=B(),i===J&&(i=null),i!==J?(Rr=t,r=fr(),t=r):(Tr=t,t=J)):(Tr=t,t=J)}else Tr=t,t=J;t===J&&(t=Tr,r=q(),r!==J?(n=B(),n===J&&(n=null),n!==J?(Rr=t,r=fr(),t=r):(Tr=t,t=J)):(Tr=t,t=J))}return qr--,t===J&&(r=J,0===qr&&f(sr)),Br[a]={nextPos:Tr,result:t},t}function q(){var t,r,n,i,o=32*Tr+27,a=Br[o];if(a)return Tr=a.nextPos,a.result;if(48===e.charCodeAt(Tr)?(t=dr,Tr++):(t=J,0===qr&&f(pr)),t===J)if(t=Tr,hr.test(e.charAt(Tr))?(r=e.charAt(Tr),Tr++):(r=J,0===qr&&f(vr)),r!==J){for(n=[],cr.test(e.charAt(Tr))?(i=e.charAt(Tr),Tr++):(i=J,0===qr&&f(lr));i!==J;)n.push(i),cr.test(e.charAt(Tr))?(i=e.charAt(Tr),Tr++):(i=J,0===qr&&f(lr));n!==J?(r=[r,n],t=r):(Tr=t,t=J)}else Tr=t,t=J;return Br[o]={nextPos:Tr,result:t},t}function B(){var t,r,n,i,o,a=32*Tr+28,u=Br[a];if(u)return Tr=u.nextPos,u.result;if(t=Tr,"e"===e.substr(Tr,1).toLowerCase()?(r=e.charAt(Tr),Tr++):(r=J,0===qr&&f(mr)),r!==J)if(Ze.test(e.charAt(Tr))?(n=e.charAt(Tr),Tr++):(n=J,0===qr&&f(et)),n===J&&(n=null),n!==J){if(i=[],cr.test(e.charAt(Tr))?(o=e.charAt(Tr),Tr++):(o=J,0===qr&&f(lr)),o!==J)for(;o!==J;)i.push(o),cr.test(e.charAt(Tr))?(o=e.charAt(Tr),Tr++):(o=J,0===qr&&f(lr));else i=J;i!==J?(r=[r,n,i],t=r):(Tr=t,t=J)}else Tr=t,t=J;else Tr=t,t=J;return Br[a]={nextPos:Tr,result:t},t}function I(){var t,r,n,i,o,a=32*Tr+29,u=Br[a];if(u)return Tr=u.nextPos,u.result;if(qr++,t=Tr,34===e.charCodeAt(Tr)?(r=br,Tr++):(r=J,0===qr&&f(gr)),r!==J){for(n=[],i=Tr,'\\"'===e.substr(Tr,2)?(o=yr,Tr+=2):(o=J,0===qr&&f(Ar)),o!==J&&(Rr=i,o=Pr()),i=o,i===J&&(Cr.test(e.charAt(Tr))?(i=e.charAt(Tr),Tr++):(i=J,0===qr&&f(wr)));i!==J;)n.push(i),i=Tr,'\\"'===e.substr(Tr,2)?(o=yr,Tr+=2):(o=J,0===qr&&f(Ar)),o!==J&&(Rr=i,o=Pr()),i=o,i===J&&(Cr.test(e.charAt(Tr))?(i=e.charAt(Tr),Tr++):(i=J,0===qr&&f(wr)));n!==J?(34===e.charCodeAt(Tr)?(i=br,Tr++):(i=J,0===qr&&f(gr)),i!==J?(Rr=t,r=Er(n),t=r):(Tr=t,t=J)):(Tr=t,t=J)}else Tr=t,t=J;if(t===J)if(t=Tr,39===e.charCodeAt(Tr)?(r=kr,Tr++):(r=J,0===qr&&f($r)),r!==J){for(n=[],i=Tr,"\\'"===e.substr(Tr,2)?(o=Nr,Tr+=2):(o=J,0===qr&&f(Lr)),o!==J&&(Rr=i,o=jr()),i=o,i===J&&(Vr.test(e.charAt(Tr))?(i=e.charAt(Tr),Tr++):(i=J,0===qr&&f(zr)));i!==J;)n.push(i),i=Tr,"\\'"===e.substr(Tr,2)?(o=Nr,Tr+=2):(o=J,0===qr&&f(Lr)),o!==J&&(Rr=i,o=jr()),i=o,i===J&&(Vr.test(e.charAt(Tr))?(i=e.charAt(Tr),Tr++):(i=J,0===qr&&f(zr)));n!==J?(39===e.charCodeAt(Tr)?(i=kr,Tr++):(i=J,0===qr&&f($r)),i!==J?(Rr=t,r=Er(n),t=r):(Tr=t,t=J)):(Tr=t,t=J)}else Tr=t,t=J;return qr--,t===J&&(r=J,0===qr&&f(xr)),Br[a]={nextPos:Tr,result:t},t}function D(){var e,t=32*Tr+30,r=Br[t];return r?(Tr=r.nextPos,r.result):(e=_(),e===J&&(e=null),Br[t]={nextPos:Tr,result:e},e)}function _(){var t,r,n=32*Tr+31,i=Br[n];if(i)return Tr=i.nextPos,i.result;if(t=[],Or.test(e.charAt(Tr))?(r=e.charAt(Tr),Tr++):(r=J,0===qr&&f(Fr)),r!==J)for(;r!==J;)t.push(r),Or.test(e.charAt(Tr))?(r=e.charAt(Tr),Tr++):(r=J,0===qr&&f(Fr));else t=J;return Br[n]={nextPos:Tr,result:t},t}r=void 0!==r?r:{};var H,J={},G={Text:p,Expression:v},K=p,Q=/^[^{]/,W=o(["{"],!0,!1),X=function(e,t,r){return(e.length>0?[e.join("")]:[]).concat([t],r)},Y=a(),Z=function(e){return e.length>0?[e.join("")]:[]},ee="{{{",te=i("{{{",!1),re="}}}",ne=i("}}}",!1),ie=function(e){return{html:!0,expression:e}},oe="{{",ae=i("{{",!1),ue="}}",se=i("}}",!1),ce=function(e){return{html:!1,expression:e}},le="=",fe=i("=",!1),de="*=",pe=i("*=",!1),he="/=",ve=i("/=",!1),me="%=",xe=i("%=",!1),be="+=",ge=i("+=",!1),ye="-=",Ae=i("-=",!1),Pe=function(e,t,r){return{type:"Assignment",operator:t,left:e,right:r}},Ce="?",we=i("?",!1),Ee=":",ke=i(":",!1),$e=function(e,t,r){return{type:"Conditional",test:e,consequent:t,alternate:r}},Ne="||",Le=i("||",!1),je=function(e,t){return{operator:"||",arg:t}},Ve=function(e,t){return Ir("Logical",e,t)},ze="&&",Oe=i("&&",!1),Fe=function(e,t){return{operator:"&&",arg:t}},Te="===",Re=i("===",!1),Me="!==",Se=i("!==",!1),Ue="==",qe=i("==",!1),Be="!=",Ie=i("!=",!1),De=function(e,t,r){return{operator:t,arg:r}},_e=function(e,t){return Ir("Binary",e,t)},He="<=",Je=i("<=",!1),Ge=">=",Ke=i(">=",!1),Qe="<",We=i("<",!1),Xe=">",Ye=i(">",!1),Ze=/^[+\-]/,et=o(["+","-"],!1,!1),tt=/^[*\/%]/,rt=o(["*","/","%"],!1,!1),nt="++",it=i("++",!1),ot="--",at=i("--",!1),ut=/^[+!\-]/,st=o(["+","!","-"],!1,!1),ct=function(e,t){return{type:"++"===e||"--"===e?"Update":"Unary",operator:e,argument:t,prefix:!0}},lt=function(e,t){return{type:"Update",operator:t,argument:e,prefix:!1}},ft=function(e,t){return{type:"Call",callee:e,arguments:t}},dt=function(e,t){return t.reduce(function(e,t){return{type:"Member",property:t,object:e}},e)},pt="(",ht=i("(",!1),vt=")",mt=i(")",!1),xt=function(e){return e},bt=function(e,t){return t.reduce(function(e,t){return{type:"Member",object:e,property:t}},e)},gt="[",yt=i("[",!1),At="]",Pt=i("]",!1),Ct=function(e){return e},wt=".",Et=i(".",!1),kt=function(e){return{type:"Literal",value:e.name}},$t="new",Nt=i("new",!1),Lt=function(e,t){return t},jt=function(e,t){return{type:"NewExpression",callee:e,arguments:t||[]}},Vt=function(){return[]},zt=",",Ot=i(",",!1),Ft=function(e,t){return t},Tt=function(e,t){return[e].concat(t)},Rt=s("identifier"),Mt=/^[a-z$_]/i,St=o([["a","z"],"$","_"],!1,!0),Ut=/^[a-z$_0-9]/i,qt=o([["a","z"],"$","_",["0","9"]],!1,!0),Bt=function(e,t){return{type:"Identifier",name:e+t.join("")}},It=function(){return{type:"Array",elements:[]}},Dt=function(e){return{type:"Array",elements:e}},_t=function(e,t){return t},Ht="{",Jt=i("{",!1),Gt="}",Kt=i("}",!1),Qt=function(){return{type:"Object",properties:[]}},Wt=function(e){return{type:"Object",properties:e}},Xt=function(e,t){return t},Yt=function(e,t){return{type:"Property",key:e.name||e.value,value:t}},Zt="null",er=i("null",!1),tr=function(){return{type:"Literal",value:null}},rr="true",nr=i("true",!1),ir=function(){return{type:"Literal",value:!0}},or="false",ar=i("false",!1),ur=function(){return{type:"Literal",value:!1}},sr=s("number"),cr=/^[0-9]/,lr=o([["0","9"]],!1,!1),fr=function(){return{type:"Literal",value:parseFloat(n())}},dr="0",pr=i("0",!1),hr=/^[1-9]/,vr=o([["1","9"]],!1,!1),mr=i("e",!0),xr=s("string"),br='"',gr=i('"',!1),yr='\\"',Ar=i('\\"',!1),Pr=function(){return'"'},Cr=/^[^"]/,wr=o(['"'],!0,!1),Er=function(e){return{type:"Literal",value:e.join("")}},kr="'",$r=i("'",!1),Nr="\\'",Lr=i("\\'",!1),jr=function(){return"'"},Vr=/^[^'']/,zr=o(["'","'"],!0,!1),Or=/^[\t ]/,Fr=o(["\t"," "],!1,!1),Tr=0,Rr=0,Mr=[{line:1,column:1}],Sr=0,Ur=[],qr=0,Br={};if("startRule"in r){if(!(r.startRule in G))throw new Error("Can't start parsing from rule \""+r.startRule+'".');K=G[r.startRule]}var Ir=function(e,t,r){return 0===r.length?t:r.reduce(function(t,r){return{type:e,operator:r.operator,left:t,right:r.arg}},t)};if(H=K(),H!==J&&Tr===e.length)return H;throw H!==J&&Tr<e.length&&f(u()),d(Ur,Sr<e.length?e.charAt(Sr):null,Sr<e.length?l(Sr,Sr+1):l(Sr,Sr))}return e(t,Error),t.buildMessage=function(e,t){function r(e){return e.charCodeAt(0).toString(16).toUpperCase()}function n(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(e){return"\\x0"+r(e)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(e){return"\\x"+r(e)})}function i(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(e){return"\\x0"+r(e)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(e){return"\\x"+r(e)})}function o(e){return s[e.type](e)}function a(e){var t,r,n=new Array(e.length);for(t=0;t<e.length;t++)n[t]=o(e[t]);if(n.sort(),n.length>0){for(t=1,r=1;t<n.length;t++)n[t-1]!==n[t]&&(n[r]=n[t],r++);n.length=r}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}function u(e){return e?'"'+n(e)+'"':"end of input"}var s={literal:function(e){return'"'+n(e.text)+'"'},class:function(e){var t,r="";for(t=0;t<e.parts.length;t++)r+=e.parts[t]instanceof Array?i(e.parts[t][0])+"-"+i(e.parts[t][1]):i(e.parts[t]);return"["+(e.inverted?"^":"")+r+"]"},any:function(e){return"any character"},end:function(e){return"end of input"},other:function(e){return e.description}};return"Expected "+a(e)+" but "+u(t)+" found."},{SyntaxError:t,parse:r}}(),t=function(e){return Array.prototype.slice.call(e)},r=function(e){return String(null!==e&&"undefined"!=typeof e?e:"")},n=function(e,t){if(e){var r=e.indexOf(t);r>-1&&e.splice(r,1)}},i=function(e){var t,r,n=0;if(0===e.length)return n;for(t=0;t<e.length;t++)r=e.charCodeAt(t),n=(n<<5)-n+r,n|=0;return n.toString(16)},o=e.parse,a=function(e,t){e.forEach(function(e){t(e),a(e.children,t)})},u=function(e,t){var r,n,i=e.type,o=e.operator;if("Literal"===i)r=e.value;else if("Array"===i)r=e.elements.map(function(e){return u(e,t).value});else if("Object"===i)r={},e.properties.forEach(function(e){r[e.key]=u(e.value,t).value});else if("Identifier"===i){for(var a=t;a&&"undefined"==typeof a[e.name];)a=a.$parent;a||(a=t),r=a[e.name],n=function(t){return a[e.name]=t,t}}else if("Member"===i){var s=u(e.object,t).value,c=u(e.property,t).value;r="undefined"!=typeof s?s[c]:void 0,n=function(e){return s[c]=e,e}}else if("Conditional"===i)r=u(e.test,t).value?u(e.consequent,t).value:u(e.alternate,t).value;else if("Unary"===i||"Update"===i){var l=u(e.argument,t),f=l.value;r="!"===o?!f:"+"===o?+f:"-"===o?-f:"++"===o?f+1:"--"===o?f-1:null,"Update"===i&&(n=l.set,n&&(r=n(r)),e.prefix||(r+="++"===o?-1:1))}else if("Binary"===i||"Logical"===i||"Assignment"===i){var d=u(e.left,t),p=d.value,h=u(e.right,t).value;r="==="===o?p===h:"!=="===o?p!==h:"=="===o?p==h:"!="===o?p!=h:"<"===o?p<h:">"===o?p>h:"<="===o?p<=h:">="===o?p>=h:"&&"===o?p&&h:"||"===o?p||h:"+"===o?p+h:"-"===o?p-h:"*"===o?p*h:"/"===o?p/h:"%"===o?p%h:"*="===o?p*h:"/="===o?p/h:"%="===o?p%h:"+="===o?p+h:"-="===o?p-h:"="===o?h:null,"Assignment"===i&&(n=d.set,r=n(r))}else if("Call"===i||"NewExpression"===i){var v=e.callee.object?u(e.callee.object,t).value:t,m=u(e.callee,t).value,x=e.arguments.map(function(e){return u(e,t).value});r=m?"Call"===i?m.apply(v,x):new(m.bind.apply(m,x)):void 0}return{value:r,set:n}},s=[],c=function(e,r,n,i,o){var a=function(){return[s.view,s.node].concat(i)},s={view:r,node:n,syntax:o,eval:function(e){return u(e||o,s.view).value},create:function(){e.create&&e.create.apply(s,a())},update:function(){e.update&&e.update.apply(s,a())},destroy:function(){e.destroy&&e.destroy.apply(s,a())}};if(e.template){var c=document.createElement("span");c.innerHTML=e.template,c=c.childNodes[0],t(n.attributes).forEach(function(e){c.setAttribute(e.name,e.value)}),n.parentNode.replaceChild(c,n),s.node=c}return s},l=function(e,r,i,u){if([1,3].indexOf(r.nodeType)!==-1){if(r.vElement)return void(u&&r.vElement.view!==e.$parent?r.vElement.view.$setParent(e):(i.push(r.vElement),a(r.vElement.children,function(t){t.bindings.forEach(function(t){t.view=e})}),r.vElement.parent&&n(r.vElement.parent.children,r.vElement)));var f={view:e,parent:u,node:r,children:[],bindings:[],removedAttrs:[]};if(r.vElement=f,i.push(f),1===r.nodeType){let n,i=t(r.attributes);f.bindings=[],s.forEach(function(t){if(t.tag){let i=r.tagName.match(new RegExp("^"+t.tag.replace("{prefix}",v.prefix)+"$","i"));if(i){var a=c(t,e,r,i);f.bindings.push(a),n=t.block||t.template,t.template&&l(e,a.node,f.children)}}else t.attribute&&(i=i.filter(function(i){if(!n){let s=i.name.match(new RegExp("^"+t.attribute.replace("{prefix}",v.prefix)+"$","i"));if(s){var a=o(i.value||"undefined",{startRule:"Expression"});f.removedAttrs.push({name:i.name,value:i.value}),r.removeAttribute(i.name);var u=c(t,e,r,s,a);f.bindings.push(u),n=t.block||t.template,t.template&&l(e,u.node,f.children)}return!s}}))}),n||t(r.childNodes).forEach(function(t){l(e,t,f.children,f)})}else if(3===r.nodeType&&r.nodeValue.indexOf("{{")>-1){var d=r.nodeValue;o(d,{startRule:"Text"}).forEach(function(t){var n;if("string"==typeof t)n=document.createTextNode(t);else{n=t.html?document.createElement("span"):document.createTextNode("");var o=c(m,e,n,["",t.html?"html":"text"],t.expression),a=Object.assign({},f,{bindings:[o]});i.push(a),n.vElement=a}r.parentNode.insertBefore(n,r)}),r.parentNode.removeChild(r)}}},f=function(e){a(e,function(e){e.bindings.forEach(function(e){e.create()})})},d=function(e){a(e,function(e){e.bindings.forEach(function(e){e.update()})})},p=function(e){a(e,function(e){e.bindings.forEach(function(e){e.destroy()}),delete e.node.vElement,e.removedAttrs.forEach(function(t){e.node.setAttribute(t.name,t.value)})})},h=0,v=function(e,t,r){e="string"==typeof e?document.querySelector(e):e[0]||e;var i=Object.assign({},t),a=[],s={},c=[];return i.$id=h++,i.$vDOM=a,i.$=function(){d(a),i.$emit("update")},i.$destroy=function(){p(a),i.$emit("destroy")},i.$on=function(e,t){s[e]||(s[e]=[]),s[e].push(t)},i.$off=function(e,t){n(s[e],t)},i.$emit=function(e){(s[e]||[]).forEach(function(e){e()})},i.$watch=function(e,t){c.push({expr:e,syntax:o(e,{startRule:"Expression"}),cb:t})},i.$unwatch=function(e,t){var r=c.find(function(r){return r.expr===e&&r.cb===t});r&&n(c,r)},i.$on("update",function(){c.forEach(function(e){var t=u(e.syntax,i).value;t!==e.val&&(e.val=t,e.cb(t))})}),i.$setParent=function(e){var t=i.$parent;i.$parent=e,t&&t.$off&&t.$off("update",i.$),e.$on&&e.$on("update",i.$)},i.$setParent(r||e.vElement&&e.vElement.view||v.root),l(i,e,a),f(a),i};v.version="0.1.7",v.prefix="z-",v.parse=o,v.evaluate=u,v.directive=function(e){return e.block=e.block,e.order=e.template?.5:e.order||100,s=s.concat([e]).sort(function(e,t){return e.order-t.order}),e},v.root={},v.root.$parent="undefined"!=typeof global?global:window,v.root.number=function(e,t){return Number(e).toFixed(t||2)},v.root.percent=function(e,t){return Number(100*e).toFixed(t||2)+"%"};var m=v.directive({attribute:"{prefix}(text|html)",block:!0,create:function(e,t){t.innerHTML=""},update:function(e,t,n,i){var o=r(this.eval());o!==this.prevValue&&("html"===i?t.innerHTML=o:t.textContent=o,this.prevValue=o)}});v.directive({attribute:"{prefix}show",update:function(e,t){var r=!!this.eval();r!==this.prevValue&&(t.style.display=r?"":"none",this.prevValue=r)}}),v.directive({attribute:"{prefix}exist",order:3,block:!0,create:function(e,t,r){this.marker=document.createComment(r),t.parentNode.replaceChild(this.marker,t)},update:function(e,t){var r=!!this.eval();r!==this.prevValue&&(r?(this.clone=t.cloneNode(!0),this.childView=v(this.clone,void 0,e),this.marker.parentNode.insertBefore(this.clone,this.marker)):this.clone&&this.marker.parentNode.removeChild(this.clone),this.prevValue=r),this.clone&&this.childView.$()}}),v.directive({attribute:"{prefix}(.+)-in",order:2,block:!0,create:function(e,t,r){this.items=[],this.marker=document.createComment(r),t.parentNode.replaceChild(this.marker,t)},update:function(e,t,r,i){var o=this,a=this.eval()||[],u=document.createDocumentFragment();o.items.forEach(function(e){a.indexOf(e.data)===-1&&(o.marker.parentNode.removeChild(e.el),n(o.items,e))}),a.forEach(function(e){if(!o.items.find(function(t){return t.data===e})){var r=t.cloneNode(!0);o.items.push({el:r,data:e}),u.appendChild(r)}}),o.marker.parentNode.insertBefore(u,this.marker),o.items.forEach(function(t){t.view||(t.view=v(t.el,void 0,e),t.view[i]=t.data),t.view.$()})}});var x=["accept","accept-charset","accesskey","action","align","alt","async","autocomplete","autofocus","autoplay","autosave","buffered","challenge","charset","checked","cite","class","code","codebase","cols","colspan","content","contenteditable","contextmenu","controls","coords","crossorigin","data","data-*","datetime","default","defer","dir","dirname","disabled","download","draggable","dropzone","enctype","for","form","formaction","headers","hidden","high","href","hreflang","http-equiv","icon","id","integrity","ismap","itemprop","keytype","kind","label","lang","language","list","loop","low","manifest","max","maxlength","minlength","media","method","min","multiple","muted","name","novalidate","open","optimum","pattern","ping","placeholder","poster","preload","radiogroup","readonly","rel","required","reversed","rows","rowspan","sandbox","scope","scoped","seamless","selected","shape","size","sizes","slot","span","spellcheck","src","srcdoc","srclang","srcset","start","step","style","summary","tabindex","target","title","type","usemap","value","wrap"],b=["selected","checked","disabled","readonly","multiple","ismap","defer","noresize"];
v.directive({attribute:"{prefix}(?:attr-(.+)|("+x.join("|")+"))",update:function(e,t,r,n,i){n=n||i;var o=this.eval();o!==this.prevValue&&(this.prevValue=o,b.indexOf(n)>-1&&(o=o?n:void 0),"undefined"==typeof o?t.removeAttribute(n):t.setAttribute(n,o))}}),v.directive({attribute:"{prefix}class-(.+)",update:function(e,t,r,n){t.classList.toggle(n,!!this.eval())}});var g=["align-.*","all","animation","animation-.*","backface-visibility","background","background-.*","border","border-.*","bottom","box-.*","break-.*","caption-side","caret-color","clear","clip","clip-path","color","column-.*","columns","content","counter-.*","cursor","direction","display","empty-cells","filter","flex-.*","float","font","font-.*","grid","grid-.*","height","hyphens","image-.*","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-.*","list-.*","margin","margin-.*","mask","mask-.*","max-height","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","object-fit","object-position","offset-.*","opacity","order","orphans","outline","outline-.*","overflow","overflow-.*","padding","padding-.*","page-break-.*","perspective","perspective-origin","pointer-events","position","quotes","resize","right","scroll-.*","shape-.*","tab-size","table-layout","text-.*","top","touch-action","transform","transform-.*","transition","transition-.*","unicode-bidi","unset","vertical-align","visibility","white-space","widows","width","will-change","word-.*","writing-mode","z-index"];v.directive({attribute:"{prefix}(?:style-(.+)|("+g.join("|")+"))",update:function(e,t,r,n,i){t.style[n||i]=this.eval()}}),v.directive({attribute:"{prefix}model",block:!0,create:function(e,t){var r=this,n=t.tagName.toLowerCase(),a=(t.getAttribute("type")||"").toLowerCase();this.type="select"===n?"select":"textarea"===n?"text":"range"===a?"number":["date","datetime-local","time","month","week"].indexOf(a)>-1?"date":a,"radio"!==r.type||t.getAttribute("name")||t.setAttribute("name",i(e.$id+JSON.stringify(this.syntax))),this.optionValue=function(e){if(e.getAttribute("z-value")){var t=o(e.getAttribute("z-value"),{startRule:"Expression"});return r.eval(t)}return e.getAttribute("value")},this.handler=function(){if("radio"!==r.type||t.checked){var n="checkbox"===r.type?!!t.checked:"select"===r.type?r.optionValue(t.options[t.selectedIndex]):"radio"===r.type?r.optionValue(t):"number"===r.type?Number(t.value):"date"===r.type?t.valueAsDate:t.value;n!==r.prevValue&&(r.prevValue=n,r.eval({type:"Assignment",operator:"=",left:r.syntax,right:{type:"Literal",value:n}}),e.$())}},t.addEventListener("input",this.handler),t.addEventListener("change",this.handler),"select"===this.type&&(t.selectedIndex=-1)},update:function(e,t){var n=this,i=this.eval();if(i!==this.prevValue){if("checkbox"===this.type)t.checked=!!i;else if("select"===this.type)t.selectedIndex=Array.from(t.options).reduce(function(e,t,o){var a=n.optionValue(t);return t.setAttribute("value",r(a)),a===i?o:e},-1);else if("radio"===this.type){var o=n.optionValue(t);t.checked=i===o,t.setAttribute("value",r(o))}else"number"===this.type?t.value=Number(i):"date"===this.type?t.valueAsDate=i:t.value=r(i);this.prevValue=i}},destroy:function(e,t){t.removeEventListener("input",this.handler),t.removeEventListener("change",this.handler)}});var y=["load","error","focus","blur","click","dblclick","mousedown","mousemove","mouseup","mouseenter","mouseleave","mouseover","mouseout","keyup","keydown","keypress","input","change","submit","reset","scroll","resize","dragstart","dragend","dragenter","dragover","dragleave","drag","drop"];return v.directive({attribute:"{prefix}(?:on-(.+)|("+y.join("|")+"))",create:function(e,t,r,n,i){var o=this;this.handler=function(t){e.$event=t,o.eval(),delete e.$event,e.$()},t.addEventListener(n||i,this.handler)},destroy:function(e,t,r,n,i){t.removeEventListener(n||i,this.handler)}}),v.directive({attribute:"{prefix}skip",order:1,block:!0}),v});
