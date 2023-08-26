var B=Object.defineProperty;var R=(t,e,n)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(R(t,typeof e!="symbol"?e+"":e,n),n);function O(){}const rt=t=>t;function G(t,e){for(const n in e)t[n]=e[n];return t}function z(t){return t()}function st(){return Object.create(null)}function F(t){t.forEach(z)}function ot(t){return typeof t=="function"}function ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function at(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function ft(t){return Object.keys(t).length===0}function W(t,...e){if(t==null){for(const i of e)i(void 0);return O}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function _t(t,e,n){t.$$.on_destroy.push(W(e,n))}function ht(t,e,n,i){if(t){const c=C(t,e,n,i);return t[0](c)}}function C(t,e,n,i){return t[1]&&i?G(n.ctx.slice(),t[1](i(e))):n.ctx}function dt(t,e,n,i){if(t[2]&&i){const c=t[2](i(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const s=[],l=Math.max(e.dirty.length,c.length);for(let o=0;o<l;o+=1)s[o]=e.dirty[o]|c[o];return s}return e.dirty|c}return e.dirty}function mt(t,e,n,i,c,s){if(c){const l=C(e,n,i,s);t.p(l,c)}}function pt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let y=!1;function yt(){y=!0}function bt(){y=!1}function I(t,e,n,i){for(;t<e;){const c=t+(e-t>>1);n(c)<=i?t=c+1:e=c}return t}function J(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&r.push(a)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let c=0;for(let r=0;r<e.length;r++){const u=e[r].claim_order,a=(c>0&&e[n[c]].claim_order<=u?c+1:I(1,c,q=>e[n[q]].claim_order,u))-1;i[r]=n[a]+1;const A=a+1;n[A]=r,c=Math.max(A,c)}const s=[],l=[];let o=e.length-1;for(let r=n[c]+1;r!=0;r=i[r-1]){for(s.push(e[r-1]);o>=r;o--)l.push(e[o]);o--}for(;o>=0;o--)l.push(e[o]);s.reverse(),l.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<l.length;r++){for(;u<s.length&&l[r].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(l[r],a)}}function K(t,e){t.appendChild(e)}function Q(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=T("style");return e.textContent="/* empty */",U(Q(t),e),e.sheet}function U(t,e){return K(t.head||t,e),e.sheet}function V(t,e){if(y){for(J(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function X(t,e,n){t.insertBefore(e,n||null)}function Y(t,e,n){y&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function T(t){return document.createElement(t)}function L(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function xt(){return v(" ")}function Et(){return v("")}function Nt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Tt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function vt(t){return t.dataset.svelteH}function wt(t){return Array.from(t.childNodes)}function S(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function D(t,e,n,i,c=!1){S(t);const s=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(e(o)){const r=n(o);return r===void 0?t.splice(l,1):t[l]=r,c||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(e(o)){const r=n(o);return r===void 0?t.splice(l,1):t[l]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function j(t,e,n,i){return D(t,c=>c.nodeName===e,c=>{const s=[];for(let l=0;l<c.attributes.length;l++){const o=c.attributes[l];n[o.name]||s.push(o.name)}s.forEach(l=>c.removeAttribute(l))},()=>i(e))}function At(t,e,n){return j(t,e,n,T)}function kt(t,e,n){return j(t,e,n,L)}function Z(t,e){return D(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>v(e),!0)}function Ht(t){return Z(t," ")}function k(t,e,n){for(let i=n;i<t.length;i+=1){const c=t[i];if(c.nodeType===8&&c.textContent.trim()===e)return i}return-1}function Mt(t,e){const n=k(t,"HTML_TAG_START",0),i=k(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new H(e);S(t);const c=t.splice(n,i-n+1);x(c[0]),x(c[c.length-1]);const s=c.slice(1,c.length-1);for(const l of s)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new H(e,s)}function Ct(t,e){e=""+e,t.data!==e&&(t.data=e)}function Lt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function $(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function St(t,e){const n=[];let i=0;for(const c of e.childNodes)if(c.nodeType===8){const s=c.textContent.trim();s===`HEAD_${t}_END`?(i-=1,n.push(c)):s===`HEAD_${t}_START`&&(i+=1,n.push(c))}else i>0&&n.push(c);return n}class tt{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=L(n.nodeName):this.e=T(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)X(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(x)}}class H extends tt{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)Y(this.t,this.n[i],n)}}function Dt(t,e){return new t(e)}let p;function b(t){p=t}function w(){if(!p)throw new Error("Function called outside component initialization");return p}function jt(t){w().$$.on_mount.push(t)}function Pt(t){w().$$.after_update.push(t)}function qt(){const t=w();return(e,n,{cancelable:i=!1}={})=>{const c=t.$$.callbacks[e];if(c){const s=$(e,n,{cancelable:i});return c.slice().forEach(l=>{l.call(t,s)}),!s.defaultPrevented}return!0}}function Bt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const d=[],M=[];let h=[];const E=[],P=Promise.resolve();let N=!1;function et(){N||(N=!0,P.then(it))}function Rt(){return et(),P}function nt(t){h.push(t)}function Ot(t){E.push(t)}const g=new Set;let _=0;function it(){if(_!==0)return;const t=p;do{try{for(;_<d.length;){const e=d[_];_++,b(e),ct(e.$$)}}catch(e){throw d.length=0,_=0,e}for(b(null),d.length=0,_=0;M.length;)M.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];g.has(n)||(g.add(n),n())}h.length=0}while(d.length);for(;E.length;)E.pop()();N=!1,g.clear(),b(t)}function ct(t){if(t.fragment!==null){t.update(),F(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(nt)}}function Gt(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{yt as $,rt as A,F as B,ot as C,L as D,kt as E,Mt as F,Nt as G,H,Bt as I,Ot as J,nt as K,vt as L,at as M,qt as N,St as O,Q as P,gt as Q,$ as R,st as S,it as T,ft as U,Gt as V,p as W,b as X,z as Y,d as Z,et as _,xt as a,bt as a0,Pt as b,Ht as c,x as d,Et as e,T as f,At as g,wt as h,Y as i,Tt as j,Lt as k,v as l,Z as m,Ct as n,jt as o,M as p,Dt as q,ht as r,ut as s,Rt as t,mt as u,pt as v,dt as w,V as x,O as y,_t as z};
