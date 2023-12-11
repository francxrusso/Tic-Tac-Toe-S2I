(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Vr(t,e){const n=Object.create(null),r=t.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return e?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const K={},xe=[],Nt=()=>{},rs=()=>!1,Hn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Zr=t=>t.startsWith("onUpdate:"),ot=Object.assign,Jr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},as=Object.prototype.hasOwnProperty,D=(t,e)=>as.call(t,e),F=Array.isArray,De=t=>Wn(t)==="[object Map]",is=t=>Wn(t)==="[object Set]",L=t=>typeof t=="function",nt=t=>typeof t=="string",Yn=t=>typeof t=="symbol",G=t=>t!==null&&typeof t=="object",ji=t=>(G(t)||L(t))&&L(t.then)&&L(t.catch),os=Object.prototype.toString,Wn=t=>os.call(t),ss=t=>Wn(t).slice(8,-1),ls=t=>Wn(t)==="[object Object]",Gr=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Cn=Vr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fs=/-(\w)/g,Mt=Kn(t=>t.replace(fs,(e,n)=>n?n.toUpperCase():"")),cs=/\B([A-Z])/g,Te=Kn(t=>t.replace(cs,"-$1").toLowerCase()),Xn=Kn(t=>t.charAt(0).toUpperCase()+t.slice(1)),ur=Kn(t=>t?`on${Xn(t)}`:""),Oe=(t,e)=>!Object.is(t,e),dr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Fn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},us=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ma;const kr=()=>Ma||(Ma=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qn(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=nt(r)?ps(r):qn(r);if(a)for(const i in a)e[i]=a[i]}return e}else if(nt(t)||G(t))return t}const ds=/;(?![^(]*\))/g,ms=/:([^]+)/,hs=/\/\*[^]*?\*\//g;function ps(t){const e={};return t.replace(hs,"").split(ds).forEach(n=>{if(n){const r=n.split(ms);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function We(t){let e="";if(nt(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=We(t[n]);r&&(e+=r+" ")}else if(G(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const vs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gs=Vr(vs);function $i(t){return!!t||t===""}let xt;class bs{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function ys(t,e=xt){e&&e.active&&e.effects.push(t)}function xs(){return xt}const Qr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},zi=t=>(t.w&Jt)>0,Di=t=>(t.n&Jt)>0,_s=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Jt},ws=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const a=e[r];zi(a)&&!Di(a)?a.delete(t):e[n++]=a,a.w&=~Jt,a.n&=~Jt}e.length=n}},Ar=new WeakMap;let je=0,Jt=1;const Or=30;let wt;const ue=Symbol(""),Er=Symbol("");class ta{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ys(this,r)}run(){if(!this.active)return this.fn();let e=wt,n=Vt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=wt,wt=this,Vt=!0,Jt=1<<++je,je<=Or?_s(this):Ra(this),this.fn()}finally{je<=Or&&ws(this),Jt=1<<--je,wt=this.parent,Vt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wt===this?this.deferStop=!0:this.active&&(Ra(this),this.onStop&&this.onStop(),this.active=!1)}}function Ra(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Vt=!0;const Ui=[];function Se(){Ui.push(Vt),Vt=!1}function Ie(){const t=Ui.pop();Vt=t===void 0?!0:t}function mt(t,e,n){if(Vt&&wt){let r=Ar.get(t);r||Ar.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=Qr()),Bi(a)}}function Bi(t,e){let n=!1;je<=Or?Di(t)||(t.n|=Jt,n=!zi(t)):n=!t.has(wt),n&&(t.add(wt),wt.deps.push(t))}function $t(t,e,n,r,a,i){const o=Ar.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&F(t)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||!Yn(d)&&d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),e){case"add":F(t)?Gr(n)&&s.push(o.get("length")):(s.push(o.get(ue)),De(t)&&s.push(o.get(Er)));break;case"delete":F(t)||(s.push(o.get(ue)),De(t)&&s.push(o.get(Er)));break;case"set":De(t)&&s.push(o.get(ue));break}if(s.length===1)s[0]&&Pr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Pr(Qr(l))}}function Pr(t,e){const n=F(t)?t:[...t];for(const r of n)r.computed&&Fa(r);for(const r of n)r.computed||Fa(r)}function Fa(t,e){(t!==wt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const ks=Vr("__proto__,__v_isRef,__isVue"),Hi=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yn)),La=As();function As(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)mt(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Se();const r=B(this)[e].apply(this,n);return Ie(),r}}),t}function Os(t){const e=B(this);return mt(e,"has",t),e.hasOwnProperty(t)}class Yi{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?$s:qi:i?Xi:Ki).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=F(e);if(!a){if(o&&D(La,n))return Reflect.get(La,n,r);if(n==="hasOwnProperty")return Os}const s=Reflect.get(e,n,r);return(Yn(n)?Hi.has(n):ks(n))||(a||mt(e,"get",n),i)?s:ct(s)?o&&Gr(n)?s:s.value:G(s)?a?Vi(s):ra(s):s}}class Wi extends Yi{constructor(e=!1){super(!1,e)}set(e,n,r,a){let i=e[n];if(Ke(i)&&ct(i)&&!ct(r))return!1;if(!this._shallow&&(!Cr(r)&&!Ke(r)&&(i=B(i),r=B(r)),!F(e)&&ct(i)&&!ct(r)))return i.value=r,!0;const o=F(e)&&Gr(n)?Number(n)<e.length:D(e,n),s=Reflect.set(e,n,r,a);return e===B(a)&&(o?Oe(r,i)&&$t(e,"set",n,r):$t(e,"add",n,r)),s}deleteProperty(e,n){const r=D(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&r&&$t(e,"delete",n,void 0),a}has(e,n){const r=Reflect.has(e,n);return(!Yn(n)||!Hi.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",F(e)?"length":ue),Reflect.ownKeys(e)}}class Es extends Yi{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ps=new Wi,Cs=new Es,Ts=new Wi(!0),ea=t=>t,Vn=t=>Reflect.getPrototypeOf(t);function mn(t,e,n=!1,r=!1){t=t.__v_raw;const a=B(t),i=B(e);n||(Oe(e,i)&&mt(a,"get",e),mt(a,"get",i));const{has:o}=Vn(a),s=r?ea:n?oa:ia;if(o.call(a,e))return s(t.get(e));if(o.call(a,i))return s(t.get(i));t!==a&&t.get(e)}function hn(t,e=!1){const n=this.__v_raw,r=B(n),a=B(t);return e||(Oe(t,a)&&mt(r,"has",t),mt(r,"has",a)),t===a?n.has(t):n.has(t)||n.has(a)}function pn(t,e=!1){return t=t.__v_raw,!e&&mt(B(t),"iterate",ue),Reflect.get(t,"size",t)}function ja(t){t=B(t);const e=B(this);return Vn(e).has.call(e,t)||(e.add(t),$t(e,"add",t,t)),this}function $a(t,e){e=B(e);const n=B(this),{has:r,get:a}=Vn(n);let i=r.call(n,t);i||(t=B(t),i=r.call(n,t));const o=a.call(n,t);return n.set(t,e),i?Oe(e,o)&&$t(n,"set",t,e):$t(n,"add",t,e),this}function za(t){const e=B(this),{has:n,get:r}=Vn(e);let a=n.call(e,t);a||(t=B(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&$t(e,"delete",t,void 0),i}function Da(){const t=B(this),e=t.size!==0,n=t.clear();return e&&$t(t,"clear",void 0,void 0),n}function vn(t,e){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=e?ea:t?oa:ia;return!t&&mt(s,"iterate",ue),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function gn(t,e,n){return function(...r){const a=this.__v_raw,i=B(a),o=De(i),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=a[t](...r),d=n?ea:e?oa:ia;return!e&&mt(i,"iterate",l?Er:ue),{next(){const{value:m,done:g}=c.next();return g?{value:m,done:g}:{value:s?[d(m[0]),d(m[1])]:d(m),done:g}},[Symbol.iterator](){return this}}}}function Yt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ss(){const t={get(i){return mn(this,i)},get size(){return pn(this)},has:hn,add:ja,set:$a,delete:za,clear:Da,forEach:vn(!1,!1)},e={get(i){return mn(this,i,!1,!0)},get size(){return pn(this)},has:hn,add:ja,set:$a,delete:za,clear:Da,forEach:vn(!1,!0)},n={get(i){return mn(this,i,!0)},get size(){return pn(this,!0)},has(i){return hn.call(this,i,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:vn(!0,!1)},r={get(i){return mn(this,i,!0,!0)},get size(){return pn(this,!0)},has(i){return hn.call(this,i,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:vn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=gn(i,!1,!1),n[i]=gn(i,!0,!1),e[i]=gn(i,!1,!0),r[i]=gn(i,!0,!0)}),[t,n,e,r]}const[Is,Ns,Ms,Rs]=Ss();function na(t,e){const n=e?t?Rs:Ms:t?Ns:Is;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const Fs={get:na(!1,!1)},Ls={get:na(!1,!0)},js={get:na(!0,!1)},Ki=new WeakMap,Xi=new WeakMap,qi=new WeakMap,$s=new WeakMap;function zs(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ds(t){return t.__v_skip||!Object.isExtensible(t)?0:zs(ss(t))}function ra(t){return Ke(t)?t:aa(t,!1,Ps,Fs,Ki)}function Us(t){return aa(t,!1,Ts,Ls,Xi)}function Vi(t){return aa(t,!0,Cs,js,qi)}function aa(t,e,n,r,a){if(!G(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const o=Ds(t);if(o===0)return t;const s=new Proxy(t,o===2?r:n);return a.set(t,s),s}function _e(t){return Ke(t)?_e(t.__v_raw):!!(t&&t.__v_isReactive)}function Ke(t){return!!(t&&t.__v_isReadonly)}function Cr(t){return!!(t&&t.__v_isShallow)}function Zi(t){return _e(t)||Ke(t)}function B(t){const e=t&&t.__v_raw;return e?B(e):t}function Ji(t){return Fn(t,"__v_skip",!0),t}const ia=t=>G(t)?ra(t):t,oa=t=>G(t)?Vi(t):t;function Bs(t){Vt&&wt&&(t=B(t),Bi(t.dep||(t.dep=Qr())))}function Hs(t,e){t=B(t);const n=t.dep;n&&Pr(n)}function ct(t){return!!(t&&t.__v_isRef===!0)}function Ys(t){return ct(t)?t.value:t}const Ws={get:(t,e,n)=>Ys(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return ct(a)&&!ct(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function Gi(t){return _e(t)?t:new Proxy(t,Ws)}class Ks{constructor(e,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ta(e,()=>{this._dirty||(this._dirty=!0,Hs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=B(this);return Bs(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Xs(t,e,n=!1){let r,a;const i=L(t);return i?(r=t,a=Nt):(r=t.get,a=t.set),new Ks(r,a,i||!a,n)}function Zt(t,e,n,r){let a;try{a=r?t(...r):t()}catch(i){Zn(i,e,n)}return a}function Ot(t,e,n,r){if(L(t)){const i=Zt(t,e,n,r);return i&&ji(i)&&i.catch(o=>{Zn(o,e,n)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(Ot(t[i],e,n,r));return a}function Zn(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](t,o,s)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Zt(l,null,10,[t,o,s]);return}}qs(t,n,a,r)}function qs(t,e,n,r=!0){console.error(t)}let Xe=!1,Tr=!1;const st=[];let St=0;const we=[];let Lt=null,oe=0;const Qi=Promise.resolve();let sa=null;function Vs(t){const e=sa||Qi;return t?e.then(this?t.bind(this):t):e}function Zs(t){let e=St+1,n=st.length;for(;e<n;){const r=e+n>>>1,a=st[r],i=qe(a);i<t||i===t&&a.pre?e=r+1:n=r}return e}function la(t){(!st.length||!st.includes(t,Xe&&t.allowRecurse?St+1:St))&&(t.id==null?st.push(t):st.splice(Zs(t.id),0,t),to())}function to(){!Xe&&!Tr&&(Tr=!0,sa=Qi.then(no))}function Js(t){const e=st.indexOf(t);e>St&&st.splice(e,1)}function Gs(t){F(t)?we.push(...t):(!Lt||!Lt.includes(t,t.allowRecurse?oe+1:oe))&&we.push(t),to()}function Ua(t,e,n=Xe?St+1:0){for(;n<st.length;n++){const r=st[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;st.splice(n,1),n--,r()}}}function eo(t){if(we.length){const e=[...new Set(we)];if(we.length=0,Lt){Lt.push(...e);return}for(Lt=e,Lt.sort((n,r)=>qe(n)-qe(r)),oe=0;oe<Lt.length;oe++)Lt[oe]();Lt=null,oe=0}}const qe=t=>t.id==null?1/0:t.id,Qs=(t,e)=>{const n=qe(t)-qe(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function no(t){Tr=!1,Xe=!0,st.sort(Qs);try{for(St=0;St<st.length;St++){const e=st[St];e&&e.active!==!1&&Zt(e,null,14)}}finally{St=0,st.length=0,eo(),Xe=!1,sa=null,(st.length||we.length)&&no()}}function tl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||K;let a=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:g}=r[d]||K;g&&(a=n.map(w=>nt(w)?w.trim():w)),m&&(a=n.map(us))}let s,l=r[s=ur(e)]||r[s=ur(Mt(e))];!l&&i&&(l=r[s=ur(Te(e))]),l&&Ot(l,t,6,a);const c=r[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,Ot(c,t,6,a)}}function ro(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let o={},s=!1;if(!L(t)){const l=c=>{const d=ro(c,e,!0);d&&(s=!0,ot(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!s?(G(t)&&r.set(t,null),null):(F(i)?i.forEach(l=>o[l]=null):ot(o,i),G(t)&&r.set(t,o),o)}function Jn(t,e){return!t||!Hn(e)?!1:(e=e.slice(2).replace(/Once$/,""),D(t,e[0].toLowerCase()+e.slice(1))||D(t,Te(e))||D(t,e))}let bt=null,Gn=null;function Ln(t){const e=bt;return bt=t,Gn=t&&t.type.__scopeId||null,e}function ao(t){Gn=t}function io(){Gn=null}function el(t,e=bt,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&Ga(-1);const i=Ln(e);let o;try{o=t(...a)}finally{Ln(i),r._d&&Ga(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function mr(t){const{type:e,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:g,setupState:w,ctx:j,inheritAttrs:N}=t;let z,k;const A=Ln(t);try{if(n.shapeFlag&4){const T=a||r,U=T;z=Tt(d.call(U,T,m,i,w,g,j)),k=l}else{const T=e;z=Tt(T.length>1?T(i,{attrs:l,slots:s,emit:c}):T(i,null)),k=e.props?l:nl(l)}}catch(T){Be.length=0,Zn(T,t,1),z=tt(Ve)}let M=z;if(k&&N!==!1){const T=Object.keys(k),{shapeFlag:U}=M;T.length&&U&7&&(o&&T.some(Zr)&&(k=rl(k,o)),M=Ee(M,k))}return n.dirs&&(M=Ee(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),z=M,Ln(A),z}const nl=t=>{let e;for(const n in t)(n==="class"||n==="style"||Hn(n))&&((e||(e={}))[n]=t[n]);return e},rl=(t,e)=>{const n={};for(const r in t)(!Zr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function al(t,e,n){const{props:r,children:a,component:i}=t,{props:o,children:s,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ba(r,o,c):!!o;if(l&8){const d=e.dynamicProps;for(let m=0;m<d.length;m++){const g=d[m];if(o[g]!==r[g]&&!Jn(c,g))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ba(r,o,c):!0:!!o;return!1}function Ba(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!Jn(n,i))return!0}return!1}function il({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const oo="components";function ke(t,e){return sl(oo,t,!0,e)||t}const ol=Symbol.for("v-ndc");function sl(t,e,n=!0,r=!1){const a=bt||it;if(a){const i=a.type;if(t===oo){const s=rf(i,!1);if(s&&(s===e||s===Mt(e)||s===Xn(Mt(e))))return i}const o=Ha(a[t]||i[t],e)||Ha(a.appContext[t],e);return!o&&r?i:o}}function Ha(t,e){return t&&(t[e]||t[Mt(e)]||t[Xn(Mt(e))])}const ll=t=>t.__isSuspense;function fl(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Gs(t)}const bn={};function Tn(t,e,n){return so(t,e,n)}function so(t,e,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){var s;const l=xs()===((s=it)==null?void 0:s.scope)?it:null;let c,d=!1,m=!1;if(ct(t)?(c=()=>t.value,d=Cr(t)):_e(t)?(c=()=>t,r=!0):F(t)?(m=!0,d=t.some(T=>_e(T)||Cr(T)),c=()=>t.map(T=>{if(ct(T))return T.value;if(_e(T))return le(T);if(L(T))return Zt(T,l,2)})):L(t)?e?c=()=>Zt(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return g&&g(),Ot(t,l,3,[w])}:c=Nt,e&&r){const T=c;c=()=>le(T())}let g,w=T=>{g=A.onStop=()=>{Zt(T,l,4),g=A.onStop=void 0}},j;if(Qe)if(w=Nt,e?n&&Ot(e,l,3,[c(),m?[]:void 0,w]):c(),a==="sync"){const T=lf();j=T.__watcherHandles||(T.__watcherHandles=[])}else return Nt;let N=m?new Array(t.length).fill(bn):bn;const z=()=>{if(A.active)if(e){const T=A.run();(r||d||(m?T.some((U,rt)=>Oe(U,N[rt])):Oe(T,N)))&&(g&&g(),Ot(e,l,3,[T,N===bn?void 0:m&&N[0]===bn?[]:N,w]),N=T)}else A.run()};z.allowRecurse=!!e;let k;a==="sync"?k=z:a==="post"?k=()=>dt(z,l&&l.suspense):(z.pre=!0,l&&(z.id=l.uid),k=()=>la(z));const A=new ta(c,k);e?n?z():N=A.run():a==="post"?dt(A.run.bind(A),l&&l.suspense):A.run();const M=()=>{A.stop(),l&&l.scope&&Jr(l.scope.effects,A)};return j&&j.push(M),M}function cl(t,e,n){const r=this.proxy,a=nt(t)?t.includes(".")?lo(r,t):()=>r[t]:t.bind(r,r);let i;L(e)?i=e:(i=e.handler,n=e);const o=it;Pe(this);const s=so(a,i.bind(r),n);return o?Pe(o):de(),s}function lo(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function le(t,e){if(!G(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ct(t))le(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)le(t[n],e);else if(is(t)||De(t))t.forEach(n=>{le(n,e)});else if(ls(t))for(const n in t)le(t[n],e);return t}function Xt(t,e){const n=bt;if(n===null)return t;const r=nr(n)||n.proxy,a=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,s,l,c=K]=e[i];o&&(L(o)&&(o={mounted:o,updated:o}),o.deep&&le(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return t}function re(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Se(),Ot(l,n,8,[t.el,s,t,e]),Ie())}}/*! #__NO_SIDE_EFFECTS__ */function ul(t,e){return L(t)?ot({name:t.name},e,{setup:t}):t}const Sn=t=>!!t.type.__asyncLoader,fo=t=>t.type.__isKeepAlive;function dl(t,e){co(t,"a",e)}function ml(t,e){co(t,"da",e)}function co(t,e,n=it){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(Qn(e,r,n),n){let a=n.parent;for(;a&&a.parent;)fo(a.parent.vnode)&&hl(r,e,n,a),a=a.parent}}function hl(t,e,n,r){const a=Qn(e,t,r,!0);uo(()=>{Jr(r[e],a)},n)}function Qn(t,e,n=it,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Se(),Pe(n);const s=Ot(e,n,t,o);return de(),Ie(),s});return r?a.unshift(i):a.push(i),i}}const Bt=t=>(e,n=it)=>(!Qe||t==="sp")&&Qn(t,(...r)=>e(...r),n),pl=Bt("bm"),vl=Bt("m"),gl=Bt("bu"),bl=Bt("u"),yl=Bt("bum"),uo=Bt("um"),xl=Bt("sp"),_l=Bt("rtg"),wl=Bt("rtc");function kl(t,e=it){Qn("ec",t,e)}function Al(t,e,n,r){let a;const i=n&&n[r];if(F(t)||nt(t)){a=new Array(t.length);for(let o=0,s=t.length;o<s;o++)a[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){a=new Array(t);for(let o=0;o<t;o++)a[o]=e(o+1,o,void 0,i&&i[o])}else if(G(t))if(t[Symbol.iterator])a=Array.from(t,(o,s)=>e(o,s,void 0,i&&i[s]));else{const o=Object.keys(t);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=e(t[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Sr=t=>t?wo(t)?nr(t)||t.proxy:Sr(t.parent):null,Ue=ot(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sr(t.parent),$root:t=>Sr(t.root),$emit:t=>t.emit,$options:t=>fa(t),$forceUpdate:t=>t.f||(t.f=()=>la(t.update)),$nextTick:t=>t.n||(t.n=Vs.bind(t.proxy)),$watch:t=>cl.bind(t)}),hr=(t,e)=>t!==K&&!t.__isScriptSetup&&D(t,e),Ol={get({_:t},e){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=t;let c;if(e[0]!=="$"){const w=o[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(hr(r,e))return o[e]=1,r[e];if(a!==K&&D(a,e))return o[e]=2,a[e];if((c=t.propsOptions[0])&&D(c,e))return o[e]=3,i[e];if(n!==K&&D(n,e))return o[e]=4,n[e];Ir&&(o[e]=0)}}const d=Ue[e];let m,g;if(d)return e==="$attrs"&&mt(t,"get",e),d(t);if((m=s.__cssModules)&&(m=m[e]))return m;if(n!==K&&D(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,D(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;return hr(a,e)?(a[e]=n,!0):r!==K&&D(r,e)?(r[e]=n,!0):D(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||t!==K&&D(t,o)||hr(e,o)||(s=i[0])&&D(s,o)||D(r,o)||D(Ue,o)||D(a.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:D(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ya(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ir=!0;function El(t){const e=fa(t),n=t.proxy,r=t.ctx;Ir=!1,e.beforeCreate&&Wa(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:g,beforeUpdate:w,updated:j,activated:N,deactivated:z,beforeDestroy:k,beforeUnmount:A,destroyed:M,unmounted:T,render:U,renderTracked:rt,renderTriggered:at,errorCaptured:vt,serverPrefetch:gt,expose:Rt,inheritAttrs:Me,components:fn,directives:cn,filters:lr}=e;if(c&&Pl(c,r,null),o)for(const V in o){const Y=o[V];L(Y)&&(r[V]=Y.bind(n))}if(a){const V=a.call(n,n);G(V)&&(t.data=ra(V))}if(Ir=!0,i)for(const V in i){const Y=i[V],ee=L(Y)?Y.bind(n,n):L(Y.get)?Y.get.bind(n,n):Nt,un=!L(Y)&&L(Y.set)?Y.set.bind(n):Nt,ne=ie({get:ee,set:un});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>ne.value,set:Et=>ne.value=Et})}if(s)for(const V in s)mo(s[V],r,n,V);if(l){const V=L(l)?l.call(n):l;Reflect.ownKeys(V).forEach(Y=>{Ml(Y,V[Y])})}d&&Wa(d,t,"c");function lt(V,Y){F(Y)?Y.forEach(ee=>V(ee.bind(n))):Y&&V(Y.bind(n))}if(lt(pl,m),lt(vl,g),lt(gl,w),lt(bl,j),lt(dl,N),lt(ml,z),lt(kl,vt),lt(wl,rt),lt(_l,at),lt(yl,A),lt(uo,T),lt(xl,gt),F(Rt))if(Rt.length){const V=t.exposed||(t.exposed={});Rt.forEach(Y=>{Object.defineProperty(V,Y,{get:()=>n[Y],set:ee=>n[Y]=ee})})}else t.exposed||(t.exposed={});U&&t.render===Nt&&(t.render=U),Me!=null&&(t.inheritAttrs=Me),fn&&(t.components=fn),cn&&(t.directives=cn)}function Pl(t,e,n=Nt){F(t)&&(t=Nr(t));for(const r in t){const a=t[r];let i;G(a)?"default"in a?i=In(a.from||r,a.default,!0):i=In(a.from||r):i=In(a),ct(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Wa(t,e,n){Ot(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function mo(t,e,n,r){const a=r.includes(".")?lo(n,r):()=>n[r];if(nt(t)){const i=e[t];L(i)&&Tn(a,i)}else if(L(t))Tn(a,t.bind(n));else if(G(t))if(F(t))t.forEach(i=>mo(i,e,n,r));else{const i=L(t.handler)?t.handler.bind(n):e[t.handler];L(i)&&Tn(a,i,t)}}function fa(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,s=i.get(e);let l;return s?l=s:!a.length&&!n&&!r?l=e:(l={},a.length&&a.forEach(c=>jn(l,c,o,!0)),jn(l,e,o)),G(e)&&i.set(e,l),l}function jn(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&jn(t,i,n,!0),a&&a.forEach(o=>jn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const s=Cl[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const Cl={data:Ka,props:Xa,emits:Xa,methods:$e,computed:$e,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:$e,directives:$e,watch:Sl,provide:Ka,inject:Tl};function Ka(t,e){return e?t?function(){return ot(L(t)?t.call(this,this):t,L(e)?e.call(this,this):e)}:e:t}function Tl(t,e){return $e(Nr(t),Nr(e))}function Nr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ft(t,e){return t?[...new Set([].concat(t,e))]:e}function $e(t,e){return t?ot(Object.create(null),t,e):e}function Xa(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:ot(Object.create(null),Ya(t),Ya(e??{})):e}function Sl(t,e){if(!t)return e;if(!e)return t;const n=ot(Object.create(null),t);for(const r in e)n[r]=ft(t[r],e[r]);return n}function ho(){return{app:null,config:{isNativeTag:rs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Il=0;function Nl(t,e){return function(r,a=null){L(r)||(r=ot({},r)),a!=null&&!G(a)&&(a=null);const i=ho(),o=new WeakSet;let s=!1;const l=i.app={_uid:Il++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:ff,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...d)):L(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const g=tt(r,a);return g.appContext=i,d&&e?e(g,c):t(g,c,m),s=!0,l._container=c,c.__vue_app__=l,nr(g.component)||g.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){$n=l;try{return c()}finally{$n=null}}};return l}}let $n=null;function Ml(t,e){if(it){let n=it.provides;const r=it.parent&&it.parent.provides;r===n&&(n=it.provides=Object.create(r)),n[t]=e}}function In(t,e,n=!1){const r=it||bt;if(r||$n){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:$n._context.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&L(e)?e.call(r&&r.proxy):e}}function Rl(t,e,n,r=!1){const a={},i={};Fn(i,er,1),t.propsDefaults=Object.create(null),po(t,e,a,i);for(const o in t.propsOptions[0])o in a||(a[o]=void 0);n?t.props=r?a:Us(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function Fl(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=t,s=B(a),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let m=0;m<d.length;m++){let g=d[m];if(Jn(t.emitsOptions,g))continue;const w=e[g];if(l)if(D(i,g))w!==i[g]&&(i[g]=w,c=!0);else{const j=Mt(g);a[j]=Mr(l,s,j,w,t,!1)}else w!==i[g]&&(i[g]=w,c=!0)}}}else{po(t,e,a,i)&&(c=!0);let d;for(const m in s)(!e||!D(e,m)&&((d=Te(m))===m||!D(e,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Mr(l,s,m,void 0,t,!0)):delete a[m]);if(i!==s)for(const m in i)(!e||!D(e,m))&&(delete i[m],c=!0)}c&&$t(t,"set","$attrs")}function po(t,e,n,r){const[a,i]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(Cn(l))continue;const c=e[l];let d;a&&D(a,d=Mt(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Jn(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=B(n),c=s||K;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Mr(a,l,m,c[m],t,!D(c,m))}}return o}function Mr(t,e,n,r,a,i){const o=t[n];if(o!=null){const s=D(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Pe(a),r=c[n]=l.call(null,e),de())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Te(n))&&(r=!0))}return r}function vo(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,o={},s=[];let l=!1;if(!L(t)){const d=m=>{l=!0;const[g,w]=vo(m,e,!0);ot(o,g),w&&s.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return G(t)&&r.set(t,xe),xe;if(F(i))for(let d=0;d<i.length;d++){const m=Mt(i[d]);qa(m)&&(o[m]=K)}else if(i)for(const d in i){const m=Mt(d);if(qa(m)){const g=i[d],w=o[m]=F(g)||L(g)?{type:g}:ot({},g);if(w){const j=Ja(Boolean,w.type),N=Ja(String,w.type);w[0]=j>-1,w[1]=N<0||j<N,(j>-1||D(w,"default"))&&s.push(m)}}}const c=[o,s];return G(t)&&r.set(t,c),c}function qa(t){return t[0]!=="$"}function Va(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Za(t,e){return Va(t)===Va(e)}function Ja(t,e){return F(e)?e.findIndex(n=>Za(n,t)):L(e)&&Za(e,t)?0:-1}const go=t=>t[0]==="_"||t==="$stable",ca=t=>F(t)?t.map(Tt):[Tt(t)],Ll=(t,e,n)=>{if(e._n)return e;const r=el((...a)=>ca(e(...a)),n);return r._c=!1,r},bo=(t,e,n)=>{const r=t._ctx;for(const a in t){if(go(a))continue;const i=t[a];if(L(i))e[a]=Ll(a,i,r);else if(i!=null){const o=ca(i);e[a]=()=>o}}},yo=(t,e)=>{const n=ca(e);t.slots.default=()=>n},jl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=B(e),Fn(e,"_",n)):bo(e,t.slots={})}else t.slots={},e&&yo(t,e);Fn(t.slots,er,1)},$l=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,o=K;if(r.shapeFlag&32){const s=e._;s?n&&s===1?i=!1:(ot(a,e),!n&&s===1&&delete a._):(i=!e.$stable,bo(e,a)),o=e}else e&&(yo(t,e),o={default:1});if(i)for(const s in a)!go(s)&&o[s]==null&&delete a[s]};function Rr(t,e,n,r,a=!1){if(F(t)){t.forEach((g,w)=>Rr(g,e&&(F(e)?e[w]:e),n,r,a));return}if(Sn(r)&&!a)return;const i=r.shapeFlag&4?nr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=t,c=e&&e.r,d=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(nt(c)?(d[c]=null,D(m,c)&&(m[c]=null)):ct(c)&&(c.value=null)),L(l))Zt(l,s,12,[o,d]);else{const g=nt(l),w=ct(l);if(g||w){const j=()=>{if(t.f){const N=g?D(m,l)?m[l]:d[l]:l.value;a?F(N)&&Jr(N,i):F(N)?N.includes(i)||N.push(i):g?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else g?(d[l]=o,D(m,l)&&(m[l]=o)):w&&(l.value=o,t.k&&(d[t.k]=o))};o?(j.id=-1,dt(j,n)):j()}}}const dt=fl;function zl(t){return Dl(t)}function Dl(t,e){const n=kr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:g,setScopeId:w=Nt,insertStaticContent:j}=t,N=(f,u,h,p=null,v=null,x=null,O=!1,y=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!Fe(f,u)&&(p=dn(f),Et(f,v,x,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:S,shapeFlag:P}=u;switch(b){case tr:z(f,u,h,p);break;case Ve:k(f,u,h,p);break;case pr:f==null&&A(u,h,p,O);break;case _t:fn(f,u,h,p,v,x,O,y,_);break;default:P&1?U(f,u,h,p,v,x,O,y,_):P&6?cn(f,u,h,p,v,x,O,y,_):(P&64||P&128)&&b.process(f,u,h,p,v,x,O,y,_,pe)}S!=null&&v&&Rr(S,f&&f.ref,x,u||f,!u)},z=(f,u,h,p)=>{if(f==null)r(u.el=s(u.children),h,p);else{const v=u.el=f.el;u.children!==f.children&&c(v,u.children)}},k=(f,u,h,p)=>{f==null?r(u.el=l(u.children||""),h,p):u.el=f.el},A=(f,u,h,p)=>{[f.el,f.anchor]=j(f.children,u,h,p,f.el,f.anchor)},M=({el:f,anchor:u},h,p)=>{let v;for(;f&&f!==u;)v=g(f),r(f,h,p),f=v;r(u,h,p)},T=({el:f,anchor:u})=>{let h;for(;f&&f!==u;)h=g(f),a(f),f=h;a(u)},U=(f,u,h,p,v,x,O,y,_)=>{O=O||u.type==="svg",f==null?rt(u,h,p,v,x,O,y,_):gt(f,u,v,x,O,y,_)},rt=(f,u,h,p,v,x,O,y)=>{let _,b;const{type:S,props:P,shapeFlag:I,transition:R,dirs:$}=f;if(_=f.el=o(f.type,x,P&&P.is,P),I&8?d(_,f.children):I&16&&vt(f.children,_,null,p,v,x&&S!=="foreignObject",O,y),$&&re(f,null,p,"created"),at(_,f,f.scopeId,O,p),P){for(const H in P)H!=="value"&&!Cn(H)&&i(_,H,null,P[H],x,f.children,p,v,Ft);"value"in P&&i(_,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Ct(b,p,f)}$&&re(f,null,p,"beforeMount");const W=Ul(v,R);W&&R.beforeEnter(_),r(_,u,h),((b=P&&P.onVnodeMounted)||W||$)&&dt(()=>{b&&Ct(b,p,f),W&&R.enter(_),$&&re(f,null,p,"mounted")},v)},at=(f,u,h,p,v)=>{if(h&&w(f,h),p)for(let x=0;x<p.length;x++)w(f,p[x]);if(v){let x=v.subTree;if(u===x){const O=v.vnode;at(f,O,O.scopeId,O.slotScopeIds,v.parent)}}},vt=(f,u,h,p,v,x,O,y,_=0)=>{for(let b=_;b<f.length;b++){const S=f[b]=y?Kt(f[b]):Tt(f[b]);N(null,S,u,h,p,v,x,O,y)}},gt=(f,u,h,p,v,x,O)=>{const y=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:S}=u;_|=f.patchFlag&16;const P=f.props||K,I=u.props||K;let R;h&&ae(h,!1),(R=I.onVnodeBeforeUpdate)&&Ct(R,h,u,f),S&&re(u,f,h,"beforeUpdate"),h&&ae(h,!0);const $=v&&u.type!=="foreignObject";if(b?Rt(f.dynamicChildren,b,y,h,p,$,x):O||Y(f,u,y,null,h,p,$,x,!1),_>0){if(_&16)Me(y,u,P,I,h,p,v);else if(_&2&&P.class!==I.class&&i(y,"class",null,I.class,v),_&4&&i(y,"style",P.style,I.style,v),_&8){const W=u.dynamicProps;for(let H=0;H<W.length;H++){const Q=W[H],yt=P[Q],ve=I[Q];(ve!==yt||Q==="value")&&i(y,Q,yt,ve,v,f.children,h,p,Ft)}}_&1&&f.children!==u.children&&d(y,u.children)}else!O&&b==null&&Me(y,u,P,I,h,p,v);((R=I.onVnodeUpdated)||S)&&dt(()=>{R&&Ct(R,h,u,f),S&&re(u,f,h,"updated")},p)},Rt=(f,u,h,p,v,x,O)=>{for(let y=0;y<u.length;y++){const _=f[y],b=u[y],S=_.el&&(_.type===_t||!Fe(_,b)||_.shapeFlag&70)?m(_.el):h;N(_,b,S,null,p,v,x,O,!0)}},Me=(f,u,h,p,v,x,O)=>{if(h!==p){if(h!==K)for(const y in h)!Cn(y)&&!(y in p)&&i(f,y,h[y],null,O,u.children,v,x,Ft);for(const y in p){if(Cn(y))continue;const _=p[y],b=h[y];_!==b&&y!=="value"&&i(f,y,b,_,O,u.children,v,x,Ft)}"value"in p&&i(f,"value",h.value,p.value)}},fn=(f,u,h,p,v,x,O,y,_)=>{const b=u.el=f?f.el:s(""),S=u.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:I,slotScopeIds:R}=u;R&&(y=y?y.concat(R):R),f==null?(r(b,h,p),r(S,h,p),vt(u.children,h,S,v,x,O,y,_)):P>0&&P&64&&I&&f.dynamicChildren?(Rt(f.dynamicChildren,I,h,v,x,O,y),(u.key!=null||v&&u===v.subTree)&&xo(f,u,!0)):Y(f,u,h,S,v,x,O,y,_)},cn=(f,u,h,p,v,x,O,y,_)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?v.ctx.activate(u,h,p,O,_):lr(u,h,p,v,x,O,_):Pa(f,u,_)},lr=(f,u,h,p,v,x,O)=>{const y=f.component=Gl(f,p,v);if(fo(f)&&(y.ctx.renderer=pe),Ql(y),y.asyncDep){if(v&&v.registerDep(y,lt),!f.el){const _=y.subTree=tt(Ve);k(null,_,u,h)}return}lt(y,f,u,h,v,x,O)},Pa=(f,u,h)=>{const p=u.component=f.component;if(al(f,u,h))if(p.asyncDep&&!p.asyncResolved){V(p,u,h);return}else p.next=u,Js(p.update),p.update();else u.el=f.el,p.vnode=u},lt=(f,u,h,p,v,x,O)=>{const y=()=>{if(f.isMounted){let{next:S,bu:P,u:I,parent:R,vnode:$}=f,W=S,H;ae(f,!1),S?(S.el=$.el,V(f,S,O)):S=$,P&&dr(P),(H=S.props&&S.props.onVnodeBeforeUpdate)&&Ct(H,R,S,$),ae(f,!0);const Q=mr(f),yt=f.subTree;f.subTree=Q,N(yt,Q,m(yt.el),dn(yt),f,v,x),S.el=Q.el,W===null&&il(f,Q.el),I&&dt(I,v),(H=S.props&&S.props.onVnodeUpdated)&&dt(()=>Ct(H,R,S,$),v)}else{let S;const{el:P,props:I}=u,{bm:R,m:$,parent:W}=f,H=Sn(u);if(ae(f,!1),R&&dr(R),!H&&(S=I&&I.onVnodeBeforeMount)&&Ct(S,W,u),ae(f,!0),P&&cr){const Q=()=>{f.subTree=mr(f),cr(P,f.subTree,f,v,null)};H?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Q()):Q()}else{const Q=f.subTree=mr(f);N(null,Q,h,p,f,v,x),u.el=Q.el}if($&&dt($,v),!H&&(S=I&&I.onVnodeMounted)){const Q=u;dt(()=>Ct(S,W,Q),v)}(u.shapeFlag&256||W&&Sn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&dt(f.a,v),f.isMounted=!0,u=h=p=null}},_=f.effect=new ta(y,()=>la(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,ae(f,!0),b()},V=(f,u,h)=>{u.component=f;const p=f.vnode.props;f.vnode=u,f.next=null,Fl(f,u.props,p,h),$l(f,u.children,h),Se(),Ua(f),Ie()},Y=(f,u,h,p,v,x,O,y,_=!1)=>{const b=f&&f.children,S=f?f.shapeFlag:0,P=u.children,{patchFlag:I,shapeFlag:R}=u;if(I>0){if(I&128){un(b,P,h,p,v,x,O,y,_);return}else if(I&256){ee(b,P,h,p,v,x,O,y,_);return}}R&8?(S&16&&Ft(b,v,x),P!==b&&d(h,P)):S&16?R&16?un(b,P,h,p,v,x,O,y,_):Ft(b,v,x,!0):(S&8&&d(h,""),R&16&&vt(P,h,p,v,x,O,y,_))},ee=(f,u,h,p,v,x,O,y,_)=>{f=f||xe,u=u||xe;const b=f.length,S=u.length,P=Math.min(b,S);let I;for(I=0;I<P;I++){const R=u[I]=_?Kt(u[I]):Tt(u[I]);N(f[I],R,h,null,v,x,O,y,_)}b>S?Ft(f,v,x,!0,!1,P):vt(u,h,p,v,x,O,y,_,P)},un=(f,u,h,p,v,x,O,y,_)=>{let b=0;const S=u.length;let P=f.length-1,I=S-1;for(;b<=P&&b<=I;){const R=f[b],$=u[b]=_?Kt(u[b]):Tt(u[b]);if(Fe(R,$))N(R,$,h,null,v,x,O,y,_);else break;b++}for(;b<=P&&b<=I;){const R=f[P],$=u[I]=_?Kt(u[I]):Tt(u[I]);if(Fe(R,$))N(R,$,h,null,v,x,O,y,_);else break;P--,I--}if(b>P){if(b<=I){const R=I+1,$=R<S?u[R].el:p;for(;b<=I;)N(null,u[b]=_?Kt(u[b]):Tt(u[b]),h,$,v,x,O,y,_),b++}}else if(b>I)for(;b<=P;)Et(f[b],v,x,!0),b++;else{const R=b,$=b,W=new Map;for(b=$;b<=I;b++){const ht=u[b]=_?Kt(u[b]):Tt(u[b]);ht.key!=null&&W.set(ht.key,b)}let H,Q=0;const yt=I-$+1;let ve=!1,Sa=0;const Re=new Array(yt);for(b=0;b<yt;b++)Re[b]=0;for(b=R;b<=P;b++){const ht=f[b];if(Q>=yt){Et(ht,v,x,!0);continue}let Pt;if(ht.key!=null)Pt=W.get(ht.key);else for(H=$;H<=I;H++)if(Re[H-$]===0&&Fe(ht,u[H])){Pt=H;break}Pt===void 0?Et(ht,v,x,!0):(Re[Pt-$]=b+1,Pt>=Sa?Sa=Pt:ve=!0,N(ht,u[Pt],h,null,v,x,O,y,_),Q++)}const Ia=ve?Bl(Re):xe;for(H=Ia.length-1,b=yt-1;b>=0;b--){const ht=$+b,Pt=u[ht],Na=ht+1<S?u[ht+1].el:p;Re[b]===0?N(null,Pt,h,Na,v,x,O,y,_):ve&&(H<0||b!==Ia[H]?ne(Pt,h,Na,2):H--)}}},ne=(f,u,h,p,v=null)=>{const{el:x,type:O,transition:y,children:_,shapeFlag:b}=f;if(b&6){ne(f.component.subTree,u,h,p);return}if(b&128){f.suspense.move(u,h,p);return}if(b&64){O.move(f,u,h,pe);return}if(O===_t){r(x,u,h);for(let P=0;P<_.length;P++)ne(_[P],u,h,p);r(f.anchor,u,h);return}if(O===pr){M(f,u,h);return}if(p!==2&&b&1&&y)if(p===0)y.beforeEnter(x),r(x,u,h),dt(()=>y.enter(x),v);else{const{leave:P,delayLeave:I,afterLeave:R}=y,$=()=>r(x,u,h),W=()=>{P(x,()=>{$(),R&&R()})};I?I(x,$,W):W()}else r(x,u,h)},Et=(f,u,h,p=!1,v=!1)=>{const{type:x,props:O,ref:y,children:_,dynamicChildren:b,shapeFlag:S,patchFlag:P,dirs:I}=f;if(y!=null&&Rr(y,null,h,f,!0),S&256){u.ctx.deactivate(f);return}const R=S&1&&I,$=!Sn(f);let W;if($&&(W=O&&O.onVnodeBeforeUnmount)&&Ct(W,u,f),S&6)ns(f.component,h,p);else{if(S&128){f.suspense.unmount(h,p);return}R&&re(f,null,u,"beforeUnmount"),S&64?f.type.remove(f,u,h,v,pe,p):b&&(x!==_t||P>0&&P&64)?Ft(b,u,h,!1,!0):(x===_t&&P&384||!v&&S&16)&&Ft(_,u,h),p&&Ca(f)}($&&(W=O&&O.onVnodeUnmounted)||R)&&dt(()=>{W&&Ct(W,u,f),R&&re(f,null,u,"unmounted")},h)},Ca=f=>{const{type:u,el:h,anchor:p,transition:v}=f;if(u===_t){es(h,p);return}if(u===pr){T(f);return}const x=()=>{a(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:O,delayLeave:y}=v,_=()=>O(h,x);y?y(f.el,x,_):_()}else x()},es=(f,u)=>{let h;for(;f!==u;)h=g(f),a(f),f=h;a(u)},ns=(f,u,h)=>{const{bum:p,scope:v,update:x,subTree:O,um:y}=f;p&&dr(p),v.stop(),x&&(x.active=!1,Et(O,f,u,h)),y&&dt(y,u),dt(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Ft=(f,u,h,p=!1,v=!1,x=0)=>{for(let O=x;O<f.length;O++)Et(f[O],u,h,p,v)},dn=f=>f.shapeFlag&6?dn(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),Ta=(f,u,h)=>{f==null?u._vnode&&Et(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,h),Ua(),eo(),u._vnode=f},pe={p:N,um:Et,m:ne,r:Ca,mt:lr,mc:vt,pc:Y,pbc:Rt,n:dn,o:t};let fr,cr;return e&&([fr,cr]=e(pe)),{render:Ta,hydrate:fr,createApp:Nl(Ta,fr)}}function ae({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ul(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xo(t,e,n=!1){const r=t.children,a=e.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Kt(a[i]),s.el=o.el),n||xo(o,s)),s.type===tr&&(s.el=o.el)}}function Bl(t){const e=t.slice(),n=[0];let r,a,i,o,s;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(a=n[n.length-1],t[a]<c){e[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,t[n[s]]<c?i=s+1:o=s;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Hl=t=>t.__isTeleport,_t=Symbol.for("v-fgt"),tr=Symbol.for("v-txt"),Ve=Symbol.for("v-cmt"),pr=Symbol.for("v-stc"),Be=[];let kt=null;function Ze(t=!1){Be.push(kt=t?null:[])}function Yl(){Be.pop(),kt=Be[Be.length-1]||null}let Je=1;function Ga(t){Je+=t}function Wl(t){return t.dynamicChildren=Je>0?kt||xe:null,Yl(),Je>0&&kt&&kt.push(t),t}function Ge(t,e,n,r,a,i){return Wl(J(t,e,n,r,a,i,!0))}function Fr(t){return t?t.__v_isVNode===!0:!1}function Fe(t,e){return t.type===e.type&&t.key===e.key}const er="__vInternal",_o=({key:t})=>t??null,Nn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||ct(t)||L(t)?{i:bt,r:t,k:e,f:!!n}:t:null);function J(t,e=null,n=null,r=0,a=null,i=t===_t?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_o(e),ref:e&&Nn(e),scopeId:Gn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:bt};return s?(ua(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=nt(n)?8:16),Je>0&&!o&&kt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&kt.push(l),l}const tt=Kl;function Kl(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===ol)&&(t=Ve),Fr(t)){const s=Ee(t,e,!0);return n&&ua(s,n),Je>0&&!i&&kt&&(s.shapeFlag&6?kt[kt.indexOf(t)]=s:kt.push(s)),s.patchFlag|=-2,s}if(af(t)&&(t=t.__vccOpts),e){e=Xl(e);let{class:s,style:l}=e;s&&!nt(s)&&(e.class=We(s)),G(l)&&(Zi(l)&&!F(l)&&(l=ot({},l)),e.style=qn(l))}const o=nt(t)?1:ll(t)?128:Hl(t)?64:G(t)?4:L(t)?2:0;return J(t,e,n,r,a,o,i,!0)}function Xl(t){return t?Zi(t)||er in t?ot({},t):t:null}function Ee(t,e,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=t,s=e?Vl(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&_o(s),ref:e&&e.ref?n&&a?F(a)?a.concat(Nn(e)):[a,Nn(e)]:Nn(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_t?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ee(t.ssContent),ssFallback:t.ssFallback&&Ee(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ql(t=" ",e=0){return tt(tr,null,t,e)}function Tt(t){return t==null||typeof t=="boolean"?tt(Ve):F(t)?tt(_t,null,t.slice()):typeof t=="object"?Kt(t):tt(tr,null,String(t))}function Kt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ee(t)}function ua(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),ua(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!(er in e)?e._ctx=bt:a===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else L(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),r&64?(n=16,e=[ql(e)]):n=8);t.children=e,t.shapeFlag|=n}function Vl(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=We([e.class,r.class]));else if(a==="style")e.style=qn([e.style,r.style]);else if(Hn(a)){const i=e[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[a]=i?[].concat(i,o):o)}else a!==""&&(e[a]=r[a])}return e}function Ct(t,e,n,r=null){Ot(t,e,7,[n,r])}const Zl=ho();let Jl=0;function Gl(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||Zl,i={uid:Jl++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new bs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vo(r,a),emitsOptions:ro(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=tl.bind(null,i),t.ce&&t.ce(i),i}let it=null,da,ge,Qa="__VUE_INSTANCE_SETTERS__";(ge=kr()[Qa])||(ge=kr()[Qa]=[]),ge.push(t=>it=t),da=t=>{ge.length>1?ge.forEach(e=>e(t)):ge[0](t)};const Pe=t=>{da(t),t.scope.on()},de=()=>{it&&it.scope.off(),da(null)};function wo(t){return t.vnode.shapeFlag&4}let Qe=!1;function Ql(t,e=!1){Qe=e;const{props:n,children:r}=t.vnode,a=wo(t);Rl(t,n,a,e),jl(t,r);const i=a?tf(t,e):void 0;return Qe=!1,i}function tf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ji(new Proxy(t.ctx,Ol));const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?nf(t):null;Pe(t),Se();const i=Zt(r,t,0,[t.props,a]);if(Ie(),de(),ji(i)){if(i.then(de,de),e)return i.then(o=>{ti(t,o,e)}).catch(o=>{Zn(o,t,0)});t.asyncDep=i}else ti(t,i,e)}else ko(t,e)}function ti(t,e,n){L(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:G(e)&&(t.setupState=Gi(e)),ko(t,n)}let ei;function ko(t,e,n){const r=t.type;if(!t.render){if(!e&&ei&&!r.render){const a=r.template||fa(t).template;if(a){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ot(ot({isCustomElement:i,delimiters:s},o),l);r.render=ei(a,c)}}t.render=r.render||Nt}{Pe(t),Se();try{El(t)}finally{Ie(),de()}}}function ef(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return mt(t,"get","$attrs"),e[n]}}))}function nf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return ef(t)},slots:t.slots,emit:t.emit,expose:e}}function nr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Gi(Ji(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ue)return Ue[n](t)},has(e,n){return n in e||n in Ue}}))}function rf(t,e=!0){return L(t)?t.displayName||t.name:t.name||e&&t.__name}function af(t){return L(t)&&"__vccOpts"in t}const ie=(t,e)=>Xs(t,e,Qe);function of(t,e,n){const r=arguments.length;return r===2?G(e)&&!F(e)?Fr(e)?tt(t,null,[e]):tt(t,e):tt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Fr(n)&&(n=[n]),tt(t,e,n))}const sf=Symbol.for("v-scx"),lf=()=>In(sf),ff="3.3.11",cf="http://www.w3.org/2000/svg",se=typeof document<"u"?document:null,ni=se&&se.createElement("template"),uf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e?se.createElementNS(cf,t):se.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>se.createTextNode(t),createComment:t=>se.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>se.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,a,i){const o=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ni.innerHTML=r?`<svg>${t}</svg>`:t;const s=ni.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},df=Symbol("_vtc");function mf(t,e,n){const r=t[df];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ma=Symbol("_vod"),qt={beforeMount(t,{value:e},{transition:n}){t[ma]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Le(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Le(t,!0),r.enter(t)):r.leave(t,()=>{Le(t,!1)}):Le(t,e))},beforeUnmount(t,{value:e}){Le(t,e)}};function Le(t,e){t.style.display=e?t[ma]:"none"}function hf(t,e,n){const r=t.style,a=nt(n);if(n&&!a){if(e&&!nt(e))for(const i in e)n[i]==null&&Lr(r,i,"");for(const i in n)Lr(r,i,n[i])}else{const i=r.display;a?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),ma in t&&(r.display=i)}}const ri=/\s*!important$/;function Lr(t,e,n){if(F(n))n.forEach(r=>Lr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=pf(t,e);ri.test(n)?t.setProperty(Te(r),n.replace(ri,""),"important"):t[r]=n}}const ai=["Webkit","Moz","ms"],vr={};function pf(t,e){const n=vr[e];if(n)return n;let r=Mt(e);if(r!=="filter"&&r in t)return vr[e]=r;r=Xn(r);for(let a=0;a<ai.length;a++){const i=ai[a]+r;if(i in t)return vr[e]=i}return e}const ii="http://www.w3.org/1999/xlink";function vf(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ii,e.slice(6,e.length)):t.setAttributeNS(ii,e,n);else{const i=gs(e);n==null||i&&!$i(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function gf(t,e,n,r,a,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,a,i),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){t._value=n;const c=s==="OPTION"?t.getAttribute("value"):t.value,d=n??"";c!==d&&(t.value=d),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=$i(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function bf(t,e,n,r){t.addEventListener(e,n,r)}function yf(t,e,n,r){t.removeEventListener(e,n,r)}const oi=Symbol("_vei");function xf(t,e,n,r,a=null){const i=t[oi]||(t[oi]={}),o=i[e];if(r&&o)o.value=r;else{const[s,l]=_f(e);if(r){const c=i[e]=Af(r,a);bf(t,s,c,l)}else o&&(yf(t,s,o,l),i[e]=void 0)}}const si=/(?:Once|Passive|Capture)$/;function _f(t){let e;if(si.test(t)){e={};let r;for(;r=t.match(si);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Te(t.slice(2)),e]}let gr=0;const wf=Promise.resolve(),kf=()=>gr||(wf.then(()=>gr=0),gr=Date.now());function Af(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ot(Of(r,n.value),e,5,[r])};return n.value=t,n.attached=kf(),n}function Of(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const li=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ef=(t,e,n,r,a=!1,i,o,s,l)=>{e==="class"?mf(t,r,a):e==="style"?hf(t,n,r):Hn(e)?Zr(e)||xf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pf(t,e,r,a))?gf(t,e,r,i,o,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),vf(t,e,r,a))};function Pf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&li(e)&&L(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const a=t.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return li(e)&&nt(n)?!1:e in t}const Cf=ot({patchProp:Ef},uf);let fi;function Tf(){return fi||(fi=zl(Cf))}const Sf=(...t)=>{const e=Tf().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=If(r);if(!a)return;const i=e._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},e};function If(t){return nt(t)?document.querySelector(t):t}const rr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n};function Nf(){switch(this.mark=this.turnNum%2,this.mark){case 0:this.markColor="var(--blue)";break;case 1:this.markColor="var(--accent-green)";break;default:this.markColor="var(--light-grey)"}}const Mf={name:"MarkSlot",props:{turnNum:Number},watch:{turnNum:Nf},data(){return{mark:-1,markColor:"var(--light-grey)"}}};function Rf(t,e,n,r,a,i){const o=ke("fa-icon");return Ze(),Ge("button",{style:qn({color:a.markColor})},[Xt(tt(o,{icon:"fa-solid fa-x",style:{color:"var(--blue)"}},null,512),[[qt,a.mark===0]]),Xt(tt(o,{icon:"fa-regular fa-circle",style:{color:"var(--accent-green)"}},null,512),[[qt,a.mark===1]])],4)}const Ff=rr(Mf,[["render",Rf],["__scopeId","data-v-5d5c84d1"]]),Lf={name:"TurnIndicator",props:{turnNum:Number}},jf=t=>(ao("data-v-9dc57a03"),t=t(),io(),t),$f={class:"turn-ind"},zf=jf(()=>J("div",{class:"text"},[J("h2",null,"TURN")],-1));function Df(t,e,n,r,a,i){const o=ke("fa-icon");return Ze(),Ge("div",$f,[J("div",{class:We(["mark-x",{active:n.turnNum%2===0}])},[tt(o,{icon:"fa-solid fa-x"})],2),zf,J("div",{class:We(["mark-o",{active:n.turnNum%2===1}])},[tt(o,{icon:"fa-regular fa-circle"})],2)])}const Uf=rr(Lf,[["render",Df],["__scopeId","data-v-9dc57a03"]]),Bf={props:{turnNum:Number,isTie:Boolean}},Ao=t=>(ao("data-v-6812c56a"),t=t(),io(),t),Hf={class:"container-result"},Yf={class:"mark-x"},Wf={class:"mark-o"},Kf=Ao(()=>J("div",null,[J("h2",null,"WINS")],-1)),Xf={class:"container-result"},qf=Ao(()=>J("div",{class:"tie"},[J("h2",null,"is a TIE")],-1)),Vf=[qf];function Zf(t,e,n,r,a,i){const o=ke("fa-icon");return Ze(),Ge("div",null,[Xt(J("div",Hf,[J("div",Yf,[Xt(tt(o,{icon:"fa-solid fa-x"},null,512),[[qt,n.turnNum%2===0]])]),J("div",Wf,[Xt(tt(o,{icon:"fa-regular fa-circle"},null,512),[[qt,n.turnNum%2===1]])]),Kf],512),[[qt,!n.isTie]]),Xt(J("div",Xf,Vf,512),[[qt,n.isTie]])])}const Jf=rr(Bf,[["render",Zf],["__scopeId","data-v-6812c56a"]]),Gf="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Livello_2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20160.69%20160.69'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23015757;}.cls-2{fill:%2305ce91;}%3c/style%3e%3c/defs%3e%3cg%20id='Livello_1-2'%3e%3cg%3e%3ccircle%20class='cls-1'%20cx='80.35'%20cy='80.35'%20r='80.35'/%3e%3cg%3e%3cpath%20class='cls-2'%20d='M101.81,105.46c-1.67,0-3.38-.25-5.05-.76l-16.48-5.03v-10.54c0-4.99,1.96-9.5,5.51-12.71s8.26-4.69,13.21-4.18l4.26,.45c7.8,.82,14.01,7.07,14.77,14.86,.1,1.13,.09,2.23-.02,3.3-.35,3.3-1.65,6.38-3.76,8.92h0c-3.09,3.68-7.66,5.7-12.44,5.7Zm-16.42-9.57l12.86,3.93c4.49,1.37,9.23,.06,12.09-3.33,1.46-1.75,2.36-3.89,2.6-6.17,.08-.74,.08-1.52,.01-2.3-.52-5.36-4.82-9.68-10.21-10.25l-4.26-.44c-3.51-.36-6.79,.67-9.26,2.9-2.47,2.23-3.83,5.39-3.83,8.91v6.76Z'/%3e%3cpath%20class='cls-2'%20d='M111.94,61.78c-.58,0-1.16-.03-1.74-.09l-57.9-5.99v-14.81c0-9.12,7.42-16.54,16.55-16.54l44.76,4.45c9.07,.94,15.69,9.08,14.75,18.15-.46,4.39-2.59,8.35-6.02,11.14-2.98,2.41-6.62,3.7-10.4,3.7Zm-54.53-10.69l53.31,5.51c3.04,.32,6.02-.57,8.39-2.49,2.37-1.93,3.85-4.66,4.16-7.7,.31-3.04-.57-6.01-2.5-8.38s-4.66-3.85-7.69-4.16l-44.49-4.44c-6.05,.01-11.19,5.14-11.19,11.45v10.21Z'/%3e%3cpath%20class='cls-2'%20d='M68.86,140.23c-9.12,0-16.55-7.42-16.55-16.54v-41.47l3.61,1.63c11.78,5.34,27.68,11.49,27.84,11.55l1.63,.63v27.65c0,9.12-7.42,16.54-16.54,16.54Zm-11.44-50.12v33.58c0,6.31,5.13,11.44,11.44,11.44s11.43-5.13,11.43-11.44v-24.16c-3.87-1.52-13.91-5.5-22.87-9.42Z'/%3e%3cpath%20class='cls-2'%20d='M57.42,90.14l-3.61-1.64c-4.34-1.97-7.69-3.63-9.95-4.94-8.42-4.88-13.63-10.49-15.05-16.24-.26-1-.55-3.35-.4-4.71,.81-7.85,7.17-12.73,16.58-12.73,.55,0,1.11,.03,1.67,.09l10.76,1.11v39.04Zm-12.43-35.14c-2.5,0-10.72,.59-11.5,8.15-.06,.55,.1,2.25,.28,2.93,1.07,4.32,5.56,8.96,12.65,13.06,1.46,.84,3.44,1.86,5.9,3.03v-26.47l-6.18-.64c-.39-.04-.77-.07-1.14-.07Z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Qf="/tic-tac-toe-s2i/assets/nuvoletteintere-3a3NGvKo.svg";function tc(){this.board=[-1,-1,-1,-1,-1,-1,-1,-1,-1],this.turn=0,this.isEnded=!1,this.isTie=!1}function ec(t){if(this.isEnded||this.board[t]!="-1")return;let e=this.turn%2;this.board[t]=e;for(let n=0;n<3;n++)(this.board[0+n*3]===e&&this.board[1+n*3]===e&&this.board[2+n*3]===e||this.board[0+n]===e&&this.board[3+n]===e&&this.board[6+n]===e)&&(this.isEnded=!0);this.board[0]===e&&this.board[4]===e&&this.board[8]===e||this.board[2]===e&&this.board[4]===e&&this.board[6]===e?this.isEnded=!0:this.turn>=8?(this.isEnded=!0,this.isTie=!0):this.isEnded||(this.turn+=1)}const nc={name:"App",components:{MarkSign:Ff,TurnIndicator:Uf,WinIndicator:Jf},methods:{resetBoard:tc,onMarkSlotClick:ec},data(){return{turn:0,board:[-1,-1,-1,-1,-1,-1,-1,-1,-1],isEnded:!1,isTie:!1}}},rc=J("img",{src:Gf,alt:"logomio",class:"logo"},null,-1),ac=J("img",{src:Qf,alt:"nuvolebg"},null,-1),ic=J("h1",null,"Tic Tac Toe",-1),oc=J("p",null," Play tic tac toe with a friend, when the game is over press ↺ to reset the board ",-1),sc={class:"container-indicator"},lc={class:"container-grid"},fc=J("p",{class:"footer"}," Project from Start2Impact University | Frontend Development course ",-1);function cc(t,e,n,r,a,i){const o=ke("TurnIndicator"),s=ke("WinIndicator"),l=ke("MarkSign");return Ze(),Ge(_t,null,[rc,ac,ic,oc,J("div",sc,[Xt(tt(o,{turnNum:a.turn},null,8,["turnNum"]),[[qt,!a.isEnded]]),Xt(tt(s,{turnNum:a.turn,isTie:a.isTie},null,8,["turnNum","isTie"]),[[qt,a.isEnded]])]),J("div",lc,[(Ze(),Ge(_t,null,Al(9,c=>tt(l,{key:c-1,onClick:d=>i.onMarkSlotClick(c-1),turnNum:a.board[c-1]},null,8,["onClick","turnNum"])),64))]),J("button",{id:"btn-reset",onClick:e[0]||(e[0]=(...c)=>i.resetBoard&&i.resetBoard(...c))},"↺"),fc],64)}const uc=rr(nc,[["render",cc]]);function ci(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ci(Object(n),!0).forEach(function(r){et(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ci(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function zn(t){"@babel/helpers - typeof";return zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zn(t)}function dc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ui(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function mc(t,e,n){return e&&ui(t.prototype,e),n&&ui(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ha(t,e){return pc(t)||gc(t,e)||Oo(t,e)||yc()}function on(t){return hc(t)||vc(t)||Oo(t)||bc()}function hc(t){if(Array.isArray(t))return jr(t)}function pc(t){if(Array.isArray(t))return t}function vc(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function gc(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Oo(t,e){if(t){if(typeof t=="string")return jr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jr(t,e)}}function jr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function bc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var di=function(){},pa={},Eo={},Po=null,Co={mark:di,measure:di};try{typeof window<"u"&&(pa=window),typeof document<"u"&&(Eo=document),typeof MutationObserver<"u"&&(Po=MutationObserver),typeof performance<"u"&&(Co=performance)}catch{}var xc=pa.navigator||{},mi=xc.userAgent,hi=mi===void 0?"":mi,Gt=pa,q=Eo,pi=Po,yn=Co;Gt.document;var Ht=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",To=~hi.indexOf("MSIE")||~hi.indexOf("Trident/"),xn,_n,wn,kn,An,zt="___FONT_AWESOME___",$r=16,So="fa",Io="svg-inline--fa",me="data-fa-i2svg",zr="data-fa-pseudo-element",_c="data-fa-pseudo-element-pending",va="data-prefix",ga="data-icon",vi="fontawesome-i2svg",wc="async",kc=["HTML","HEAD","STYLE","SCRIPT"],No=function(){try{return!0}catch{return!1}}(),X="classic",Z="sharp",ba=[X,Z];function sn(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[X]}})}var tn=sn((xn={},et(xn,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),et(xn,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),xn)),en=sn((_n={},et(_n,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),et(_n,Z,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),_n)),nn=sn((wn={},et(wn,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),et(wn,Z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),wn)),Ac=sn((kn={},et(kn,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),et(kn,Z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),kn)),Oc=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Mo="fa-layers-text",Ec=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Pc=sn((An={},et(An,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),et(An,Z,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),An)),Ro=[1,2,3,4,5,6,7,8,9,10],Cc=Ro.concat([11,12,13,14,15,16,17,18,19,20]),Tc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},rn=new Set;Object.keys(en[X]).map(rn.add.bind(rn));Object.keys(en[Z]).map(rn.add.bind(rn));var Sc=[].concat(ba,on(rn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fe.GROUP,fe.SWAP_OPACITY,fe.PRIMARY,fe.SECONDARY]).concat(Ro.map(function(t){return"".concat(t,"x")})).concat(Cc.map(function(t){return"w-".concat(t)})),He=Gt.FontAwesomeConfig||{};function Ic(t){var e=q.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Nc(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(q&&typeof q.querySelector=="function"){var Mc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Mc.forEach(function(t){var e=ha(t,2),n=e[0],r=e[1],a=Nc(Ic(n));a!=null&&(He[r]=a)})}var Fo={styleDefault:"solid",familyDefault:"classic",cssPrefix:So,replacementClass:Io,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};He.familyPrefix&&(He.cssPrefix=He.familyPrefix);var Ce=E(E({},Fo),He);Ce.autoReplaceSvg||(Ce.observeMutations=!1);var C={};Object.keys(Fo).forEach(function(t){Object.defineProperty(C,t,{enumerable:!0,set:function(n){Ce[t]=n,Ye.forEach(function(r){return r(C)})},get:function(){return Ce[t]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(e){Ce.cssPrefix=e,Ye.forEach(function(n){return n(C)})},get:function(){return Ce.cssPrefix}});Gt.FontAwesomeConfig=C;var Ye=[];function Rc(t){return Ye.push(t),function(){Ye.splice(Ye.indexOf(t),1)}}var Wt=$r,It={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Fc(t){if(!(!t||!Ht)){var e=q.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return q.head.insertBefore(e,r),t}}var Lc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function an(){for(var t=12,e="";t-- >0;)e+=Lc[Math.random()*62|0];return e}function Ne(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ya(t){return t.classList?Ne(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Lo(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Lo(t[n]),'" ')},"").trim()}function ar(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function xa(t){return t.size!==It.size||t.x!==It.x||t.y!==It.y||t.rotate!==It.rotate||t.flipX||t.flipY}function $c(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function zc(t){var e=t.transform,n=t.width,r=n===void 0?$r:n,a=t.height,i=a===void 0?$r:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&To?l+="translate(".concat(e.x/Wt-r/2,"em, ").concat(e.y/Wt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Wt,"em), calc(-50% + ").concat(e.y/Wt,"em)) "):l+="translate(".concat(e.x/Wt,"em, ").concat(e.y/Wt,"em) "),l+="scale(".concat(e.size/Wt*(e.flipX?-1:1),", ").concat(e.size/Wt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Dc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function jo(){var t=So,e=Io,n=C.cssPrefix,r=C.replacementClass,a=Dc;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var gi=!1;function br(){C.autoAddCss&&!gi&&(Fc(jo()),gi=!0)}var Uc={mixout:function(){return{dom:{css:jo,insertCss:br}}},hooks:function(){return{beforeDOMElementCreation:function(){br()},beforeI2svg:function(){br()}}}},Dt=Gt||{};Dt[zt]||(Dt[zt]={});Dt[zt].styles||(Dt[zt].styles={});Dt[zt].hooks||(Dt[zt].hooks={});Dt[zt].shims||(Dt[zt].shims=[]);var At=Dt[zt],$o=[],Bc=function t(){q.removeEventListener("DOMContentLoaded",t),Dn=1,$o.map(function(e){return e()})},Dn=!1;Ht&&(Dn=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Dn||q.addEventListener("DOMContentLoaded",Bc));function Hc(t){Ht&&(Dn?setTimeout(t,0):$o.push(t))}function ln(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Lo(t):"<".concat(e," ").concat(jc(r),">").concat(i.map(ln).join(""),"</").concat(e,">")}function bi(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Yc=function(e,n){return function(r,a,i,o){return e.call(n,r,a,i,o)}},yr=function(e,n,r,a){var i=Object.keys(e),o=i.length,s=a!==void 0?Yc(n,a):n,l,c,d;for(r===void 0?(l=1,d=e[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,e[c],c,e);return d};function Wc(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Dr(t){var e=Wc(t);return e.length===1?e[0].toString(16):null}function Kc(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function yi(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function Ur(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=yi(e);typeof At.hooks.addPack=="function"&&!a?At.hooks.addPack(t,yi(e)):At.styles[t]=E(E({},At.styles[t]||{}),i),t==="fas"&&Ur("fa",e)}var On,En,Pn,be=At.styles,Xc=At.shims,qc=(On={},et(On,X,Object.values(nn[X])),et(On,Z,Object.values(nn[Z])),On),_a=null,zo={},Do={},Uo={},Bo={},Ho={},Vc=(En={},et(En,X,Object.keys(tn[X])),et(En,Z,Object.keys(tn[Z])),En);function Zc(t){return~Sc.indexOf(t)}function Jc(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!Zc(a)?a:null}var Yo=function(){var e=function(i){return yr(be,function(o,s,l){return o[l]=yr(s,i,{}),o},{})};zo=e(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Do=e(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Ho=e(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in be||C.autoFetchSvg,r=yr(Xc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Uo=r.names,Bo=r.unicodes,_a=ir(C.styleDefault,{family:C.familyDefault})};Rc(function(t){_a=ir(t.styleDefault,{family:C.familyDefault})});Yo();function wa(t,e){return(zo[t]||{})[e]}function Gc(t,e){return(Do[t]||{})[e]}function ce(t,e){return(Ho[t]||{})[e]}function Wo(t){return Uo[t]||{prefix:null,iconName:null}}function Qc(t){var e=Bo[t],n=wa("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qt(){return _a}var ka=function(){return{prefix:null,iconName:null,rest:[]}};function ir(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?X:n,a=tn[r][t],i=en[r][t]||en[r][a],o=t in At.styles?t:null;return i||o||null}var xi=(Pn={},et(Pn,X,Object.keys(nn[X])),et(Pn,Z,Object.keys(nn[Z])),Pn);function or(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},et(e,X,"".concat(C.cssPrefix,"-").concat(X)),et(e,Z,"".concat(C.cssPrefix,"-").concat(Z)),e),o=null,s=X;(t.includes(i[X])||t.some(function(c){return xi[X].includes(c)}))&&(s=X),(t.includes(i[Z])||t.some(function(c){return xi[Z].includes(c)}))&&(s=Z);var l=t.reduce(function(c,d){var m=Jc(C.cssPrefix,d);if(be[d]?(d=qc[s].includes(d)?Ac[s][d]:d,o=d,c.prefix=d):Vc[s].indexOf(d)>-1?(o=d,c.prefix=ir(d,{family:s})):m?c.iconName=m:d!==C.replacementClass&&d!==i[X]&&d!==i[Z]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var g=o==="fa"?Wo(c.iconName):{},w=ce(c.prefix,c.iconName);g.prefix&&(o=null),c.iconName=g.iconName||w||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!be.far&&be.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},ka());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(be.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=ce(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Qt()||"fas"),l}var tu=function(){function t(){dc(this,t),this.definitions={}}return mc(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Ur(s,o[s]);var l=nn[X][s];l&&Ur(l,o[s]),Yo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),t}(),_i=[],ye={},Ae={},eu=Object.keys(Ae);function nu(t,e){var n=e.mixoutsTo;return _i=t,ye={},Object.keys(Ae).forEach(function(r){eu.indexOf(r)===-1&&delete Ae[r]}),_i.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),zn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ye[o]||(ye[o]=[]),ye[o].push(i[o])})}r.provides&&r.provides(Ae)}),n}function Br(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ye[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function he(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=ye[t]||[];a.forEach(function(i){i.apply(null,n)})}function Ut(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ae[t]?Ae[t].apply(null,e):void 0}function Hr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Qt();if(e)return e=ce(n,e)||e,bi(Ko.definitions,n,e)||bi(At.styles,n,e)}var Ko=new tu,ru=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,he("noAuto")},au={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ht?(he("beforeI2svg",e),Ut("pseudoElements2svg",e),Ut("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,Hc(function(){ou({autoReplaceSvgRoot:n}),he("watch",e)})}},iu={icon:function(e){if(e===null)return null;if(zn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ce(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=ir(e[0]);return{prefix:r,iconName:ce(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(C.cssPrefix,"-"))>-1||e.match(Oc))){var a=or(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||Qt(),iconName:ce(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=Qt();return{prefix:i,iconName:ce(i,e)||e}}}},pt={noAuto:ru,config:C,dom:au,parse:iu,library:Ko,findIconDefinition:Hr,toHtml:ln},ou=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(At.styles).length>0||C.autoFetchSvg)&&Ht&&C.autoReplaceSvg&&pt.dom.i2svg({node:r})};function sr(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return ln(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Ht){var r=q.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function su(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(xa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=ar(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function lu(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(C.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function Aa(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,d=t.titleId,m=t.extra,g=t.watchable,w=g===void 0?!1:g,j=r.found?r:n,N=j.width,z=j.height,k=a==="fak",A=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(gt){return m.classes.indexOf(gt)===-1}).filter(function(gt){return gt!==""||!!gt}).concat(m.classes).join(" "),M={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:A,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(z)})},T=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/z*16*.0625,"em")}:{};w&&(M.attributes[me]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(d||an())},children:[l]}),delete M.attributes.title);var U=E(E({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},T),m.styles)}),rt=r.found&&n.found?Ut("generateAbstractMask",U)||{children:[],attributes:{}}:Ut("generateAbstractIcon",U)||{children:[],attributes:{}},at=rt.children,vt=rt.attributes;return U.children=at,U.attributes=vt,s?lu(U):su(U)}function wi(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[me]="");var d=E({},o.styles);xa(a)&&(d.transform=zc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=ar(d);m.length>0&&(c.style=m);var g=[];return g.push({tag:"span",attributes:c,children:[e]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function fu(t){var e=t.content,n=t.title,r=t.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=ar(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var xr=At.styles;function Yr(t){var e=t[0],n=t[1],r=t.slice(4),a=ha(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(fe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(fe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(fe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var cu={found:!1,width:512,height:512};function uu(t,e){!No&&!C.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Wr(t,e){var n=e;return e==="fa"&&C.styleDefault!==null&&(e=Qt()),new Promise(function(r,a){if(Ut("missingIconAbstract"),n==="fa"){var i=Wo(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&xr[e]&&xr[e][t]){var o=xr[e][t];return r(Yr(o))}uu(t,e),r(E(E({},cu),{},{icon:C.showMissingIcons&&t?Ut("missingIconAbstract")||{}:{}}))})}var ki=function(){},Kr=C.measurePerformance&&yn&&yn.mark&&yn.measure?yn:{mark:ki,measure:ki},ze='FA "6.5.1"',du=function(e){return Kr.mark("".concat(ze," ").concat(e," begins")),function(){return Xo(e)}},Xo=function(e){Kr.mark("".concat(ze," ").concat(e," ends")),Kr.measure("".concat(ze," ").concat(e),"".concat(ze," ").concat(e," begins"),"".concat(ze," ").concat(e," ends"))},Oa={begin:du,end:Xo},Mn=function(){};function Ai(t){var e=t.getAttribute?t.getAttribute(me):null;return typeof e=="string"}function mu(t){var e=t.getAttribute?t.getAttribute(va):null,n=t.getAttribute?t.getAttribute(ga):null;return e&&n}function hu(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(C.replacementClass)}function pu(){if(C.autoReplaceSvg===!0)return Rn.replace;var t=Rn[C.autoReplaceSvg];return t||Rn.replace}function vu(t){return q.createElementNS("http://www.w3.org/2000/svg",t)}function gu(t){return q.createElement(t)}function qo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?vu:gu:n;if(typeof t=="string")return q.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(qo(o,{ceFn:r}))}),a}function bu(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Rn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(qo(a),n)}),n.getAttribute(me)===null&&C.keepOriginalSource){var r=q.createComment(bu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~ya(n).indexOf(C.replacementClass))return Rn.replace(e);var a=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===C.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return ln(s)}).join(`
`);n.setAttribute(me,""),n.innerHTML=o}};function Oi(t){t()}function Vo(t,e){var n=typeof e=="function"?e:Mn;if(t.length===0)n();else{var r=Oi;C.mutateApproach===wc&&(r=Gt.requestAnimationFrame||Oi),r(function(){var a=pu(),i=Oa.begin("mutate");t.map(a),i(),n()})}}var Ea=!1;function Zo(){Ea=!0}function Xr(){Ea=!1}var Un=null;function Ei(t){if(pi&&C.observeMutations){var e=t.treeCallback,n=e===void 0?Mn:e,r=t.nodeCallback,a=r===void 0?Mn:r,i=t.pseudoElementsCallback,o=i===void 0?Mn:i,s=t.observeMutationsRoot,l=s===void 0?q:s;Un=new pi(function(c){if(!Ea){var d=Qt();Ne(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ai(m.addedNodes[0])&&(C.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ai(m.target)&&~Tc.indexOf(m.attributeName))if(m.attributeName==="class"&&mu(m.target)){var g=or(ya(m.target)),w=g.prefix,j=g.iconName;m.target.setAttribute(va,w||d),j&&m.target.setAttribute(ga,j)}else hu(m.target)&&a(m.target)})}}),Ht&&Un.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function yu(){Un&&Un.disconnect()}function xu(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function _u(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=or(ya(t));return a.prefix||(a.prefix=Qt()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Gc(a.prefix,t.innerText)||wa(a.prefix,Dr(t.innerText))),!a.iconName&&C.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function wu(t){var e=Ne(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return C.autoA11y&&(n?e["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||an()):(e["aria-hidden"]="true",e.focusable="false")),e}function ku(){return{iconName:null,title:null,titleId:null,prefix:null,transform:It,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Pi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=_u(t),r=n.iconName,a=n.prefix,i=n.rest,o=wu(t),s=Br("parseNodeAttributes",{},t),l=e.styleParser?xu(t):[];return E({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:It,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Au=At.styles;function Jo(t){var e=C.autoReplaceSvg==="nest"?Pi(t,{styleParser:!1}):Pi(t);return~e.extra.classes.indexOf(Mo)?Ut("generateLayersText",t,e):Ut("generateSvgReplacementMutation",t,e)}var te=new Set;ba.map(function(t){te.add("fa-".concat(t))});Object.keys(tn[X]).map(te.add.bind(te));Object.keys(tn[Z]).map(te.add.bind(te));te=on(te);function Ci(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ht)return Promise.resolve();var n=q.documentElement.classList,r=function(m){return n.add("".concat(vi,"-").concat(m))},a=function(m){return n.remove("".concat(vi,"-").concat(m))},i=C.autoFetchSvg?te:ba.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Au));i.includes("fa")||i.push("fa");var o=[".".concat(Mo,":not([").concat(me,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(me,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ne(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Oa.begin("onTree"),c=s.reduce(function(d,m){try{var g=Jo(m);g&&d.push(g)}catch(w){No||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(g){Vo(g,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),d()})}).catch(function(g){l(),m(g)})})}function Ou(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Jo(t).then(function(n){n&&Vo([n],e)})}function Eu(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Hr(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Hr(a||{})),t(r,E(E({},n),{},{mask:a}))}}var Pu=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?It:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,g=m===void 0?null:m,w=n.titleId,j=w===void 0?null:w,N=n.classes,z=N===void 0?[]:N,k=n.attributes,A=k===void 0?{}:k,M=n.styles,T=M===void 0?{}:M;if(e){var U=e.prefix,rt=e.iconName,at=e.icon;return sr(E({type:"icon"},e),function(){return he("beforeDOMElementCreation",{iconDefinition:e,params:n}),C.autoA11y&&(g?A["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(j||an()):(A["aria-hidden"]="true",A.focusable="false")),Aa({icons:{main:Yr(at),mask:l?Yr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:rt,transform:E(E({},It),a),symbol:o,title:g,maskId:d,titleId:j,extra:{attributes:A,styles:T,classes:z}})})}},Cu={mixout:function(){return{icon:Eu(Pu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ci,n.nodeCallback=Ou,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,o=i===void 0?function(){}:i;return Ci(a,o)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,g=r.extra;return new Promise(function(w,j){Promise.all([Wr(a,s),d.iconName?Wr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var z=ha(N,2),k=z[0],A=z[1];w([n,Aa({icons:{main:k,mask:A},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:g,watchable:!0})])}).catch(j)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=ar(s);l.length>0&&(a.style=l);var c;return xa(o)&&(c=Ut("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Tu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return sr({type:"layer"},function(){he("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(on(i)).join(" ")},children:o}]})}}}},Su={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return sr({type:"counter",content:n},function(){return he("beforeDOMElementCreation",{content:n,params:r}),fu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(on(s))}})})}}}},Iu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?It:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,g=r.styles,w=g===void 0?{}:g;return sr({type:"text",content:n},function(){return he("beforeDOMElementCreation",{content:n,params:r}),wi({content:n,transform:E(E({},It),i),title:s,extra:{attributes:m,styles:w,classes:["".concat(C.cssPrefix,"-layers-text")].concat(on(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(To){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return C.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,wi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Nu=new RegExp('"',"ug"),Ti=[1105920,1112319];function Mu(t){var e=t.replace(Nu,""),n=Kc(e,0),r=n>=Ti[0]&&n<=Ti[1],a=e.length===2?e[0]===e[1]:!1;return{value:Dr(a?e[0]:e),isSecondary:r||a}}function Si(t,e){var n="".concat(_c).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=Ne(t.children),o=i.filter(function(at){return at.getAttribute(zr)===e})[0],s=Gt.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Ec),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?Z:X,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?en[g][l[2].toLowerCase()]:Pc[g][c],j=Mu(m),N=j.value,z=j.isSecondary,k=l[0].startsWith("FontAwesome"),A=wa(w,N),M=A;if(k){var T=Qc(N);T.iconName&&T.prefix&&(A=T.iconName,w=T.prefix)}if(A&&!z&&(!o||o.getAttribute(va)!==w||o.getAttribute(ga)!==M)){t.setAttribute(n,M),o&&t.removeChild(o);var U=ku(),rt=U.extra;rt.attributes[zr]=e,Wr(A,w).then(function(at){var vt=Aa(E(E({},U),{},{icons:{main:at,mask:ka()},prefix:w,iconName:M,extra:rt,watchable:!0})),gt=q.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(gt,t.firstChild):t.appendChild(gt),gt.outerHTML=vt.map(function(Rt){return ln(Rt)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ru(t){return Promise.all([Si(t,"::before"),Si(t,"::after")])}function Fu(t){return t.parentNode!==document.head&&!~kc.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(zr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ii(t){if(Ht)return new Promise(function(e,n){var r=Ne(t.querySelectorAll("*")).filter(Fu).map(Ru),a=Oa.begin("searchPseudoElements");Zo(),Promise.all(r).then(function(){a(),Xr(),e()}).catch(function(){a(),Xr(),n()})})}var Lu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ii,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;C.searchPseudoElements&&Ii(a)}}},Ni=!1,ju={mixout:function(){return{dom:{unwatch:function(){Zo(),Ni=!0}}}},hooks:function(){return{bootstrap:function(){Ei(Br("mutationObserverCallbacks",{}))},noAuto:function(){yu()},watch:function(n){var r=n.observeMutationsRoot;Ni?Xr():Ei(Br("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Mi=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},$u={mixout:function(){return{parse:{transform:function(n){return Mi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Mi(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},g={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:g};return{tag:"g",attributes:E({},w.outer),children:[{tag:"g",attributes:E({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),w.path)}]}]}}}},_r={x:0,y:0,width:"100%",height:"100%"};function Ri(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function zu(t){return t.tag==="g"?t.children:[t]}var Du={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?or(a.split(" ").map(function(o){return o.trim()})):ka();return i.prefix||(i.prefix=Qt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,g=o.icon,w=$c({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:E(E({},_r),{},{fill:"white"})},N=d.children?{children:d.children.map(Ri)}:{},z={tag:"g",attributes:E({},w.inner),children:[Ri(E({tag:d.tag,attributes:E(E({},d.attributes),w.path)},N))]},k={tag:"g",attributes:E({},w.outer),children:[z]},A="mask-".concat(s||an()),M="clip-".concat(s||an()),T={tag:"mask",attributes:E(E({},_r),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,k]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:zu(g)},T]};return r.push(U,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(A,")")},_r)}),{children:r,attributes:a}}}},Uu={provides:function(e){var n=!1;Gt.matchMedia&&(n=Gt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Bu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Hu=[Uc,Cu,Tu,Su,Iu,Lu,ju,$u,Du,Uu,Bu];nu(Hu,{mixoutsTo:pt});pt.noAuto;pt.config;var Yu=pt.library;pt.dom;var qr=pt.parse;pt.findIconDefinition;pt.toHtml;var Wu=pt.icon;pt.layer;pt.text;pt.counter;function Fi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function jt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Fi(Object(n),!0).forEach(function(r){ut(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Fi(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Bn(t){"@babel/helpers - typeof";return Bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bn(t)}function ut(t,e,n){return e=Vu(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ku(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function Xu(t,e){if(t==null)return{};var n=Ku(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function qu(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Vu(t){var e=qu(t,"string");return typeof e=="symbol"?e:String(e)}var Zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Go={exports:{}};(function(t){(function(e){var n=function(k,A,M){if(!c(A)||m(A)||g(A)||w(A)||l(A))return A;var T,U=0,rt=0;if(d(A))for(T=[],rt=A.length;U<rt;U++)T.push(n(k,A[U],M));else{T={};for(var at in A)Object.prototype.hasOwnProperty.call(A,at)&&(T[k(at,M)]=n(k,A[at],M))}return T},r=function(k,A){A=A||{};var M=A.separator||"_",T=A.split||/(?=[A-Z])/;return k.split(T).join(M)},a=function(k){return j(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(A,M){return M?M.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var A=a(k);return A.substr(0,1).toUpperCase()+A.substr(1)},o=function(k,A){return r(k,A).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},d=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},g=function(k){return s.call(k)=="[object RegExp]"},w=function(k){return s.call(k)=="[object Boolean]"},j=function(k){return k=k-0,k===k},N=function(k,A){var M=A&&"process"in A?A.process:A;return typeof M!="function"?k:function(T,U){return M(T,k,U)}},z={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,A){return n(N(a,A),k)},decamelizeKeys:function(k,A){return n(N(o,A),k,A)},pascalizeKeys:function(k,A){return n(N(i,A),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=z:e.humps=z})(Zu)})(Go);var Ju=Go.exports,Gu=["class","style"];function Qu(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=Ju.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function td(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Qo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Qo(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,c){var d=t.attributes[c];switch(c){case"class":l.class=td(d);break;case"style":l.style=Qu(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Xu(n,Gu);return of(t.tag,jt(jt(jt({},e),{},{class:a.class,style:jt(jt({},a.style),o)},a.attrs),s),r)}var ts=!1;try{ts=!0}catch{}function ed(){if(!ts&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function wr(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ut({},t,e):{}}function nd(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ut(e,"fa-".concat(t.size),t.size!==null),ut(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),ut(e,"fa-pull-".concat(t.pull),t.pull!==null),ut(e,"fa-swap-opacity",t.swapOpacity),ut(e,"fa-bounce",t.bounce),ut(e,"fa-shake",t.shake),ut(e,"fa-beat",t.beat),ut(e,"fa-fade",t.fade),ut(e,"fa-beat-fade",t.beatFade),ut(e,"fa-flash",t.flash),ut(e,"fa-spin-pulse",t.spinPulse),ut(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Li(t){if(t&&Bn(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(qr.icon)return qr.icon(t);if(t===null)return null;if(Bn(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var rd=ul({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,a=ie(function(){return Li(e.icon)}),i=ie(function(){return wr("classes",nd(e))}),o=ie(function(){return wr("transform",typeof e.transform=="string"?qr.transform(e.transform):e.transform)}),s=ie(function(){return wr("mask",Li(e.mask))}),l=ie(function(){return Wu(a.value,jt(jt(jt(jt({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Tn(l,function(d){if(!d)return ed("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ie(function(){return l.value?Qo(l.value.abstract[0],{},r):null});return function(){return c.value}}}),ad={prefix:"far",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},id={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};Yu.add(ad,id);Sf(uc).component("fa-icon",rd).mount("#app");
