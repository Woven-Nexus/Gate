(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const _i="modulepreload",gi=function(i){return"/apps/clock/1.0.0/"+i},st={},Se=function(e,t,n){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=gi(s),s in st)return;st[s]=!0;const o=s.endsWith(".css"),h=o?'[rel="stylesheet"]':"";if(!!n)for(let d=r.length-1;d>=0;d--){const c=r[d];if(c.href===s&&(!o||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${h}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":_i,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((d,c)=>{l.addEventListener("load",d),l.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},Pe=new Map,ae=new Map,je="mimic_iconcache",yi=JSON.parse(sessionStorage.getItem(je)??"{}");Object.entries(yi).forEach(([i,e])=>{ae.set(i,e)});const $i=async i=>{if(ae.has(i))return ae.get(i);const e=await bi(i),t={ok:e.ok,status:e.status,svg:null};if(e.ok){const r=document.createElement("div");r.innerHTML=e.html;const s=r.firstElementChild;t.svg=(s==null?void 0:s.tagName.toLowerCase())==="svg"?s.outerHTML:""}const n=JSON.parse(sessionStorage.getItem(je)??"{}");return n[i]=t,sessionStorage.setItem(je,JSON.stringify(n)),ae.set(i,t),t},bi=async(i,e="cors")=>{if(Pe.has(i))return Pe.get(i);const t=fetch(i,{mode:e}).then(async n=>({ok:n.ok,status:n.status,html:await n.text()}));return Pe.set(i,t),t};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const le=window,Je=le.ShadowRoot&&(le.ShadyCSS===void 0||le.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ze=Symbol(),ot=new WeakMap;let jt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Ze)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Je&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=ot.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ot.set(t,e))}return e}toString(){return this.cssText}};const zt=i=>new jt(typeof i=="string"?i:i+"",void 0,Ze),S=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[s+1],i[0]);return new jt(t,i,Ze)},wi=(i,e)=>{Je?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),r=le.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)})},at=Je?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return zt(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Te;const ue=window,lt=ue.trustedTypes,Ai=lt?lt.emptyScript:"",ht=ue.reactiveElementPolyfillSupport,ze={toAttribute(i,e){switch(e){case Boolean:i=i?Ai:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Bt=(i,e)=>e!==i&&(e==e||i==i),Oe={attribute:!0,type:String,converter:ze,reflect:!1,hasChanged:Bt},Be="finalized";let D=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const r=this._$Ep(n,t);r!==void 0&&(this._$Ev.set(r,n),e.push(r))}),e}static createProperty(e,t=Oe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Oe}static finalize(){if(this.hasOwnProperty(Be))return!1;this[Be]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of n)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(at(r))}else e!==void 0&&t.push(at(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return wi(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=Oe){var r;const s=this.constructor._$Ep(e,n);if(s!==void 0&&n.reflect===!0){const o=(((r=n.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?n.converter:ze).toAttribute(t,n.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,t){var n;const r=this.constructor,s=r._$Ev.get(e);if(s!==void 0&&this._$El!==s){const o=r.getPropertyOptions(s),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?o.converter:ze;this._$El=s,this[s]=h.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Bt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(n)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdated)===null||r===void 0?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};D[Be]=!0,D.elementProperties=new Map,D.elementStyles=[],D.shadowRootOptions={mode:"open"},ht==null||ht({ReactiveElement:D}),((Te=ue.reactiveElementVersions)!==null&&Te!==void 0?Te:ue.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xe;const pe=window,z=pe.trustedTypes,ct=z?z.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ve="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,Vt="?"+E,Ei=`<${Vt}>`,N=document,Z=()=>N.createComment(""),X=i=>i===null||typeof i!="object"&&typeof i!="function",Ft=Array.isArray,Ci=i=>Ft(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Le=`[ 	
\f\r]`,K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dt=/-->/g,ut=/>/g,T=RegExp(`>|${Le}(?:([^\\s"'>=/]+)(${Le}*=${Le}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pt=/'/g,ft=/"/g,Wt=/^(?:script|style|textarea|title)$/i,Ri=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),k=Ri(1),H=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),mt=new WeakMap,x=N.createTreeWalker(N,129,null,!1);function qt(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ct!==void 0?ct.createHTML(e):e}const Si=(i,e)=>{const t=i.length-1,n=[];let r,s=e===2?"<svg>":"",o=K;for(let h=0;h<t;h++){const a=i[h];let l,d,c=-1,u=0;for(;u<a.length&&(o.lastIndex=u,d=o.exec(a),d!==null);)u=o.lastIndex,o===K?d[1]==="!--"?o=dt:d[1]!==void 0?o=ut:d[2]!==void 0?(Wt.test(d[2])&&(r=RegExp("</"+d[2],"g")),o=T):d[3]!==void 0&&(o=T):o===T?d[0]===">"?(o=r??K,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,l=d[1],o=d[3]===void 0?T:d[3]==='"'?ft:pt):o===ft||o===pt?o=T:o===dt||o===ut?o=K:(o=T,r=void 0);const p=o===T&&i[h+1].startsWith("/>")?" ":"";s+=o===K?a+Ei:c>=0?(n.push(l),a.slice(0,c)+Ve+a.slice(c)+E+p):a+E+(c===-2?(n.push(void 0),h):p)}return[qt(i,s+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};let Fe=class Kt{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,o=0;const h=e.length-1,a=this.parts,[l,d]=Si(e,t);if(this.el=Kt.createElement(l,n),x.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(r=x.nextNode())!==null&&a.length<h;){if(r.nodeType===1){if(r.hasAttributes()){const c=[];for(const u of r.getAttributeNames())if(u.endsWith(Ve)||u.startsWith(E)){const p=d[o++];if(c.push(u),p!==void 0){const w=r.getAttribute(p.toLowerCase()+Ve).split(E),v=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:v[2],strings:w,ctor:v[1]==="."?Ti:v[1]==="?"?xi:v[1]==="@"?Li:we})}else a.push({type:6,index:s})}for(const u of c)r.removeAttribute(u)}if(Wt.test(r.tagName)){const c=r.textContent.split(E),u=c.length-1;if(u>0){r.textContent=z?z.emptyScript:"";for(let p=0;p<u;p++)r.append(c[p],Z()),x.nextNode(),a.push({type:2,index:++s});r.append(c[u],Z())}}}else if(r.nodeType===8)if(r.data===Vt)a.push({type:2,index:s});else{let c=-1;for(;(c=r.data.indexOf(E,c+1))!==-1;)a.push({type:7,index:s}),c+=E.length-1}s++}}static createElement(e,t){const n=N.createElement("template");return n.innerHTML=e,n}};function B(i,e,t=i,n){var r,s,o,h;if(e===H)return e;let a=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const l=X(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,t,n)),n!==void 0?((o=(h=t)._$Co)!==null&&o!==void 0?o:h._$Co=[])[n]=a:t._$Cl=a),a!==void 0&&(e=B(i,a._$AS(i,e.values),a,n)),e}let Pi=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:N).importNode(n,!0);x.currentNode=s;let o=x.nextNode(),h=0,a=0,l=r[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new Xe(o,o.nextSibling,this,e):l.type===1?d=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(d=new Ni(o,this,e)),this._$AV.push(d),l=r[++a]}h!==(l==null?void 0:l.index)&&(o=x.nextNode(),h++)}return x.currentNode=N,s}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Xe=class Gt{constructor(e,t,n,r){var s;this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=B(this,e,t),X(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==H&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ci(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==f&&X(this._$AH)?this._$AA.nextSibling.data=e:this.$(N.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Fe.createElement(qt(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(n);else{const o=new Pi(s,this),h=o.u(this.options);o.v(n),this.$(h),this._$AH=o}}_$AC(e){let t=mt.get(e.strings);return t===void 0&&mt.set(e.strings,t=new Fe(e)),t}T(e){Ft(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const s of e)r===t.length?t.push(n=new Gt(this.k(Z()),this.k(Z()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},we=class{constructor(e,t,n,r,s){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=f}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const s=this.strings;let o=!1;if(s===void 0)e=B(this,e,t,0),o=!X(e)||e!==this._$AH&&e!==H,o&&(this._$AH=e);else{const h=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=B(this,h[n+a],t,a),l===H&&(l=this._$AH[a]),o||(o=!X(l)||l!==this._$AH[a]),l===f?e=f:e!==f&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}o&&!r&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ti=class extends we{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}};const Oi=z?z.emptyScript:"";let xi=class extends we{constructor(){super(...arguments),this.type=4}j(e){e&&e!==f?this.element.setAttribute(this.name,Oi):this.element.removeAttribute(this.name)}},Li=class extends we{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){var n;if((e=(n=B(this,e,t,0))!==null&&n!==void 0?n:f)===H)return;const r=this._$AH,s=e===f&&r!==f||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==f&&(r===f||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}};class Ni{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}}const vt=pe.litHtmlPolyfillSupport;vt==null||vt(Fe,Xe),((xe=pe.litHtmlVersions)!==null&&xe!==void 0?xe:pe.litHtmlVersions=[]).push("2.7.5");const ki=(i,e,t)=>{var n,r;const s=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let o=s._$litPart$;if(o===void 0){const h=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=o=new Xe(e.insertBefore(Z(),h),h,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ne,ke;let b=class extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ki(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return H}};b.finalized=!0,b._$litElement$=!0,(Ne=globalThis.litElementHydrateSupport)===null||Ne===void 0||Ne.call(globalThis,{LitElement:b});const _t=globalThis.litElementPolyfillSupport;_t==null||_t({LitElement:b});((ke=globalThis.litElementVersions)!==null&&ke!==void 0?ke:globalThis.litElementVersions=[]).push("3.3.2");const Qe=S`
	@layer reset {
		/* remove margin form all H tags */
		h1, h2, h3, h4, h5, h6, p {
			margin: 0;
		}
		a, button {
			all: unset;
			cursor: revert;
		}
		/* Remove list styles (bullets/numbers) */
		ol, ul, menu {
			list-style: none;
		}
		:host([invisible]),
		:where([invisible]) {
			visibility: hidden !important;
		}
		:host([hidden]),
		:where([hidden]) {
			display: none !important;
		}
		:host, *, *::before, *::after {
			box-sizing: border-box;
			-webkit-tap-highlight-color: transparent;
		}
		:host::-webkit-scrollbar,
		*::-webkit-scrollbar {
			width: var(--scrollbar-width, 0.6rem);
			height: var(--scrollbar-height, 0.6rem);
		}
		:host::-webkit-scrollbar-track,
		*::-webkit-scrollbar-track {
			background: var(--scrollbar-track, inherit);
		}
		:host::-webkit-scrollbar-thumb,
		*::-webkit-scrollbar-thumb {
			background: var(--scrollbar-thumb-bg, hsl(0, 0%, 70%));
			border-radius: var(--scrollbar-thumb-border-radius, 2px);
			background-clip: padding-box;
		}
		:host::-webkit-scrollbar-corner,
		*::-webkit-scrollbar-corner {
			background: var(--scrollbar-corner, var(--scrollbar-track, inherit));
		}
	}
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=i=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:r,elements:s}=n;return{kind:r,elements:s,finisher(o){customElements.define(t,o)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hi=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},Mi=(i,e,t)=>{e.constructor.createProperty(t,i)};function $(i){return(e,t)=>t!==void 0?Mi(i,e,t):Hi(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ye(i){return $({...i,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var He;((He=window.HTMLSlotElement)===null||He===void 0?void 0:He.prototype.assignedElements)!=null;var Ui=Object.defineProperty,Ii=Object.getOwnPropertyDescriptor,et=(i,e,t,n)=>{for(var r=n>1?void 0:n?Ii(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&Ui(e,t,r),r};let Q=class extends b{constructor(){super(...arguments),this.source="",this.icon=""}connectedCallback(){super.connectedCallback(),this.setAttribute("inert","")}render(){return k`
		<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor">
			<use href=${this.source+"#"+this.icon}></use>
		</svg>
		`}};Q.styles=[Qe,S`
		:host {
			contain: strict;
			box-sizing: content-box;
			display: grid;
			place-items: center;
		}
		:host,  svg {
			width: 1em;
			height: 1em;
		}
	`];et([$()],Q.prototype,"source",2);et([$()],Q.prototype,"icon",2);Q=et([W("mm-symbol")],Q);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Di={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ji=i=>(...e)=>({_$litDirective$:i,values:e});let zi=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let We=class extends zi{constructor(e){if(super(e),this.et=f,e.type!==Di.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===f||e==null)return this.ft=void 0,this.et=e;if(e===H)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}};We.directiveName="unsafeHTML",We.resultType=1;const Bi=ji(We);var Vi=Object.defineProperty,Fi=Object.getOwnPropertyDescriptor,Ae=(i,e,t,n)=>{for(var r=n>1?void 0:n?Fi(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&Vi(e,t,r),r};let Me,P=class extends b{update(i){super.update(i),(i.has("url")||i.has("template"))&&this.setSvg()}async getSvg(){Me??(Me=new DOMParser);let i="";if(this.url){const t=await $i(this.url);if(!t.ok)return"";i=t.svg}else if(this.template)i=this.template;else return"";const e=Me.parseFromString(i,"text/html").body.querySelector("svg");return e?(P.mutator(e),e.outerHTML):""}async setSvg(){this.svg=await this.getSvg()}render(){return k`
		<div role="img">
			${Bi(this.svg)}
		</div>
		`}};P.mutator=i=>{i.setAttribute("fill","currentColor"),i.removeAttribute("height"),i.removeAttribute("width")};P.styles=[S`
		:host {
			display: inline-grid;
			place-items: center;
			height: max-content;
			width: max-content;
			pointer-events: none;
		}
		div {
			contain: strict;
			box-sizing: content-box;
			display: flex;
			place-items: center;
			flex-flow: column nowrap;
		}
		div, svg {
			width: 1em;
			height: 1em;
		}
		svg {
			display: block;
		}
		`];Ae([$()],P.prototype,"url",2);Ae([$()],P.prototype,"template",2);Ae([Ye()],P.prototype,"svg",2);P=Ae([W("mm-icon")],P);var Wi=Object.defineProperty,qi=Object.getOwnPropertyDescriptor,re=(i,e,t,n)=>{for(var r=n>1?void 0:n?qi(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&Wi(e,t,r),r};let M=class extends b{constructor(){super(...arguments),this.type="body-medium",this.text="",this.observer=new MutationObserver(()=>this.setText()),this.handleMousedown=i=>{i.detail>=2&&i.preventDefault()}}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this.handleMousedown),this.observer.observe(this,{subtree:!0,characterData:!0}),this.setText()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousedown",this.handleMousedown),this.observer.disconnect()}setText(){let i=this.textContent??"";this.textTransform==="uppercase"?i=i.toLocaleUpperCase():this.textTransform==="lowercase"?i=i.toLocaleLowerCase():this.textTransform==="capitalize"&&(i=i.split(" ").map(e=>e.slice(0,1).toLocaleUpperCase()+e.slice(1).toLocaleLowerCase()).join(" ")),this.text=i}render(){return k`
		<span class="outline" data-content=${this.text}>${this.text}</span>
		`}};M.styles=[S`
		:host {
			position: relative;
			display: inline-block;
		}
		:host([shadow]) .outline {
			color: var(--on-background);
			-webkit-text-stroke: 1px black;
		}
		:host([shadow]) .outline::before {
			content: attr(data-content);
			-webkit-text-fill-color: var(--on-background);
			-webkit-text-stroke: 0;
			position: absolute;
			pointer-events: none;
		}
		:host([type="display-large"]) {
			font-family:    var(--display-large-font-family-name);
			font-weight:    var(--display-large-font-weight);
			font-size:      var(--display-large-font-size);
			line-height:    var(--display-large-line-height);
			letter-spacing: var(--display-large-letter-spacing);
		}
	   :host([type="display-medium"]) {
			font-family:    var(--display-medium-font-family-name);
			font-weight:    var(--display-medium-font-weight);
			font-size:      var(--display-medium-font-size);
			line-height:    var(--display-medium-line-height);
			letter-spacing: var(--display-medium-letter-spacing);
		}
	   :host([type="display-small"]) {
			font-family:    var(--display-small-font-family-name);
			font-weight:    var(--display-small-font-weight);
			font-size:      var(--display-small-font-size);
			line-height:    var(--display-small-line-height);
			letter-spacing: var(--display-small-letter-spacing);
		}
	   :host([type="headline-large"]) {
			font-family:    var(--headline-large-font-family-name);
			font-weight:    var(--headline-large-font-weight);
			font-size:      var(--headline-large-font-size);
			line-height:    var(--headline-large-line-height);
			letter-spacing: var(--headline-large-letter-spacing);
		}
	   :host([type="headline-medium"]) {
			font-family:    var(--headline-medium-font-family-name);
			font-weight:    var(--headline-medium-font-weight);
			font-size:      var(--headline-medium-font-size);
			line-height:    var(--headline-medium-line-height);
			letter-spacing: var(--headline-medium-letter-spacing);
		}
	   :host([type="headline-small"]) {
			font-family:    var(--headline-small-font-family-name);
			font-weight:    var(--headline-small-font-weight);
			font-size:      var(--headline-small-font-size);
			line-height:    var(--headline-small-line-height);
			letter-spacing: var(--headline-small-letter-spacing);
		}
	   :host([type="body-large"]) {
			font-family:    var(--body-large-font-family-name);
			font-weight:    var(--body-large-font-weight);
			font-size:      var(--body-large-font-size);
			line-height:    var(--body-large-line-height);
			letter-spacing: var(--body-large-letter-spacing);
		}
	   :host([type="body-medium"]) {
			font-family:    var(--body-medium-font-family-name);
			font-weight:    var(--body-medium-font-weight);
			font-size:      var(--body-medium-font-size);
			line-height:    var(--body-medium-line-height);
			letter-spacing: var(--body-medium-letter-spacing);
		}
	   :host([type="body-small"]) {
			font-family:    var(--body-small-font-family-name);
			font-weight:    var(--body-small-font-weight);
			font-size:      var(--body-small-font-size);
			line-height:    var(--body-small-line-height);
			letter-spacing: var(--body-small-letter-spacing);
		}
	   :host([type="label-large"]) {
			font-family:    var(--label-large-font-family-name);
			font-weight:    var(--label-large-font-weight);
			font-size:      var(--label-large-font-size);
			line-height:    var(--label-large-line-height);
			letter-spacing: var(--label-large-letter-spacing);
		}
	   :host([type="label-medium"]) {
			font-family:    var(--label-medium-font-family-name);
			font-weight:    var(--label-medium-font-weight);
			font-size:      var(--label-medium-font-size);
			line-height:    var(--label-medium-line-height);
			letter-spacing: var(--label-medium-letter-spacing);
		}
	   :host([type="label-small"]) {
			font-family:    var(--label-small-font-family-name);
			font-weight:    var(--label-small-font-weight);
			font-size:      var(--label-small-font-size);
			line-height:    var(--label-small-line-height);
			letter-spacing: var(--label-small-letter-spacing);
		}
	   :host([type="title-large"]) {
			font-family:    var(--title-large-font-family-name);
			font-weight:    var(--title-large-font-weight);
			font-size:      var(--title-large-font-size);
			line-height:    var(--title-large-line-height);
			letter-spacing: var(--title-large-letter-spacing);
		}
	   :host([type="title-medium"]) {
			font-family:    var(--title-medium-font-family-name);
			font-weight:    var(--title-medium-font-weight);
			font-size:      var(--title-medium-font-size);
			line-height:    var(--title-medium-line-height);
			letter-spacing: var(--title-medium-letter-spacing);
		}
	   :host([type="title-small"]) {
			font-family:    var(--title-small-font-family-name);
			font-weight:    var(--title-small-font-weight);
			font-size:      var(--title-small-font-size);
			line-height:    var(--title-small-line-height);
			letter-spacing: var(--title-small-letter-spacing);
		}
	`];re([$({reflect:!0})],M.prototype,"type",2);re([$({type:Boolean,reflect:!0})],M.prototype,"shadow",2);re([$()],M.prototype,"textTransform",2);re([Ye()],M.prototype,"text",2);M=re([W("mm-text")],M);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ue;const fe=window,V=fe.trustedTypes,gt=V?V.createPolicy("lit-html",{createHTML:i=>i}):void 0,qe="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,Jt="?"+C,Ki=`<${Jt}>`,U=document,me=()=>U.createComment(""),Y=i=>i===null||typeof i!="object"&&typeof i!="function",Zt=Array.isArray,Gi=i=>Zt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Ie=`[ 	
\f\r]`,G=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yt=/-->/g,$t=/>/g,O=RegExp(`>|${Ie}(?:([^\\s"'>=/]+)(${Ie}*=${Ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bt=/'/g,wt=/"/g,Xt=/^(?:script|style|textarea|title)$/i,ee=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),At=new WeakMap,L=U.createTreeWalker(U,129,null,!1),Ji=(i,e)=>{const t=i.length-1,n=[];let r,s=e===2?"<svg>":"",o=G;for(let a=0;a<t;a++){const l=i[a];let d,c,u=-1,p=0;for(;p<l.length&&(o.lastIndex=p,c=o.exec(l),c!==null);)p=o.lastIndex,o===G?c[1]==="!--"?o=yt:c[1]!==void 0?o=$t:c[2]!==void 0?(Xt.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=O):c[3]!==void 0&&(o=O):o===O?c[0]===">"?(o=r??G,u=-1):c[1]===void 0?u=-2:(u=o.lastIndex-c[2].length,d=c[1],o=c[3]===void 0?O:c[3]==='"'?wt:bt):o===wt||o===bt?o=O:o===yt||o===$t?o=G:(o=O,r=void 0);const w=o===O&&i[a+1].startsWith("/>")?" ":"";s+=o===G?l+Ki:u>=0?(n.push(d),l.slice(0,u)+qe+l.slice(u)+C+w):l+C+(u===-2?(n.push(void 0),a):w)}const h=s+(i[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[gt!==void 0?gt.createHTML(h):h,n]};class te{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,o=0;const h=e.length-1,a=this.parts,[l,d]=Ji(e,t);if(this.el=te.createElement(l,n),L.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(r=L.nextNode())!==null&&a.length<h;){if(r.nodeType===1){if(r.hasAttributes()){const c=[];for(const u of r.getAttributeNames())if(u.endsWith(qe)||u.startsWith(C)){const p=d[o++];if(c.push(u),p!==void 0){const w=r.getAttribute(p.toLowerCase()+qe).split(C),v=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:v[2],strings:w,ctor:v[1]==="."?Xi:v[1]==="?"?Yi:v[1]==="@"?en:Ce})}else a.push({type:6,index:s})}for(const u of c)r.removeAttribute(u)}if(Xt.test(r.tagName)){const c=r.textContent.split(C),u=c.length-1;if(u>0){r.textContent=V?V.emptyScript:"";for(let p=0;p<u;p++)r.append(c[p],me()),L.nextNode(),a.push({type:2,index:++s});r.append(c[u],me())}}}else if(r.nodeType===8)if(r.data===Jt)a.push({type:2,index:s});else{let c=-1;for(;(c=r.data.indexOf(C,c+1))!==-1;)a.push({type:7,index:s}),c+=C.length-1}s++}}static createElement(e,t){const n=U.createElement("template");return n.innerHTML=e,n}}function F(i,e,t=i,n){var r,s,o,h;if(e===ee)return e;let a=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const l=Y(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,t,n)),n!==void 0?((o=(h=t)._$Co)!==null&&o!==void 0?o:h._$Co=[])[n]=a:t._$Cl=a),a!==void 0&&(e=F(i,a._$AS(i,e.values),a,n)),e}class Zi{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:U).importNode(n,!0);L.currentNode=s;let o=L.nextNode(),h=0,a=0,l=r[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new Ee(o,o.nextSibling,this,e):l.type===1?d=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(d=new tn(o,this,e)),this._$AV.push(d),l=r[++a]}h!==(l==null?void 0:l.index)&&(o=L.nextNode(),h++)}return L.currentNode=U,s}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Ee{constructor(e,t,n,r){var s;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=F(this,e,t),Y(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==ee&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Gi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==m&&Y(this._$AH)?this._$AA.nextSibling.data=e:this.$(U.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=te.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(n);else{const o=new Zi(s,this),h=o.u(this.options);o.v(n),this.$(h),this._$AH=o}}_$AC(e){let t=At.get(e.strings);return t===void 0&&At.set(e.strings,t=new te(e)),t}T(e){Zt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const s of e)r===t.length?t.push(n=new Ee(this.k(me()),this.k(me()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Ce{constructor(e,t,n,r,s){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const s=this.strings;let o=!1;if(s===void 0)e=F(this,e,t,0),o=!Y(e)||e!==this._$AH&&e!==ee,o&&(this._$AH=e);else{const h=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=F(this,h[n+a],t,a),l===ee&&(l=this._$AH[a]),o||(o=!Y(l)||l!==this._$AH[a]),l===m?e=m:e!==m&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}o&&!r&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Xi extends Ce{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}const Qi=V?V.emptyScript:"";class Yi extends Ce{constructor(){super(...arguments),this.type=4}j(e){e&&e!==m?this.element.setAttribute(this.name,Qi):this.element.removeAttribute(this.name)}}class en extends Ce{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){var n;if((e=(n=F(this,e,t,0))!==null&&n!==void 0?n:m)===ee)return;const r=this._$AH,s=e===m&&r!==m||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==m&&(r===m||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class tn{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){F(this,e)}}const Et=fe.litHtmlPolyfillSupport;Et==null||Et(te,Ee),((Ue=fe.litHtmlVersions)!==null&&Ue!==void 0?Ue:fe.litHtmlVersions=[]).push("2.7.4");const nn=(()=>{const i=document.createElement("style");let e;try{document.head.appendChild(i),i.sheet.insertRule(":focus-visible { color: inherit }"),e=!0}catch{e=!1}finally{i.remove()}return e})();zt(nn?":focus-visible":":focus");const rn=(i,e,t)=>{const n=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...t});return i.dispatchEvent(n),n};let sn=i=>crypto.getRandomValues(new Uint8Array(i)),on=(i,e,t)=>{let n=(2<<Math.log(i.length-1)/Math.LN2)-1,r=-~(1.6*n*e/i.length);return(s=e)=>{let o="";for(;;){let h=t(r),a=r;for(;a--;)if(o+=i[h[a]&n]||"",o.length===s)return o}}},an=(i,e=21)=>on(i,e,sn),ln=(i=21)=>crypto.getRandomValues(new Uint8Array(i)).reduce((e,t)=>(t&=63,t<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"");const vr=(i=21,e="")=>{const t=e+hn(1)+ln(i-1);return e?e+"-"+t:t},hn=an("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();var cn=Object.defineProperty,dn=Object.getOwnPropertyDescriptor,tt=(i,e,t,n)=>{for(var r=n>1?void 0:n?dn(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&cn(e,t,r),r};let ie=class extends b{constructor(){super(...arguments),this.speed=500,this.animations=new Set,this.showRipple=i=>{if(this.disabled)return;const e=document.createElement("span"),t=this.renderRoot.querySelector(".ripple__control");t==null||t.insertAdjacentElement("beforeend",e);const n=this.getBoundingClientRect(),r=Math.trunc(n.width),s={height:r+"px",width:r+"px"};i!=null&&i.x&&(s.left=Math.trunc(i.x-n.left-r/2)+"px"),i!=null&&i.y&&(s.top=Math.trunc(i.y-n.top-r/2)+"px"),Object.assign(e.style,s);const o=e.animate([{opacity:1,transform:"scale(0)"},{opacity:0,transform:"scale(2)"}],{easing:"linear",duration:this.speed});this.animations.add(o);const h=()=>this.handleAnimationEnd(e,o,h);o.addEventListener("finish",h),o.addEventListener("cancel",h)},this.handleAnimationEnd=(i,e,t)=>{e.removeEventListener("finish",t),e.removeEventListener("cancel",t),this.animations.delete(e),rn(this,"ripple-finished"),i.remove()},this.handleMousedown=i=>{i.detail>=2&&i.preventDefault()},this.handleClick=i=>{this.showRipple(i)}}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this.handleMousedown),this.addEventListener("click",this.handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.animations.forEach(e=>e.cancel()),this.animations.clear();const i=this.querySelector(".ripple__control");this.removeRipples(i),this.removeEventListener("mousedown",this.handleMousedown),this.removeEventListener("click",this.handleClick)}removeRipples(i){for(;i!=null&&i.firstChild;)i.removeChild(i.firstChild)}render(){return k`
		<slot></slot>
		<div class="ripple">
			<div class="ripple__control"></div>
		</div>
		`}};ie.styles=[S`
		:host {
			--ripple-bg-default: var(--ripple-bg, var(--surface-press));
			border-radius: inherit;
			position: relative;
		}
		`,S`
		.ripple {
			border-radius: inherit;
			pointer-events: none;
			user-select: none;
			position: absolute;
			inset: 0px;
			display: grid;
			overflow: hidden;
		}
		.ripple__control {
			position: relative;
			display: grid;
			place-items: center;
		}
		span {
			position: absolute;
			opacity: 0.75;
			border-radius: var(--border-pill);
			transform: scale(0);
			background-color: var(--ripple-bg-default);
		}
	`];tt([$({type:Number})],ie.prototype,"speed",2);tt([$({type:Boolean,reflect:!0})],ie.prototype,"disabled",2);ie=tt([W("mm-ripple")],ie);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*un(i,e){if(i!==void 0){let t=0;for(const n of i)yield e(n,t++)}}var pn=Object.defineProperty,fn=Object.getOwnPropertyDescriptor,Qt=(i,e,t,n)=>{for(var r=n>1?void 0:n?fn(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&pn(e,t,r),r};let ve=class extends b{constructor(){super(...arguments),this.items=[]}itemTemplate(i){return k`
		<mm-ripple>
			<a href=${i.path()}>
				<mm-icon url=${i.icon}></mm-icon>
				<mm-text>${i.label}</mm-text>
			</a>
		</mm-ripple>
		`}render(){return k`
		<menu>
			${un(this.items,i=>this.itemTemplate(i))}
		</menu>
		`}};ve.styles=[Qe,S`
		:host {
			display: grid;
		}
		menu {
			all: unset;
			display: grid;
			grid-auto-flow: row;
			grid-auto-rows: max-content;
			padding-block: 12px;
			padding-inline: 8px;
		}
		mm-ripple {
			--ripple-bg: var(--surface-variant-press);
		}
		a {
			display: grid;
			align-items: center;
			gap: 8px;
			grid-template-columns: auto 1fr;
			padding-inline: 12px;
			padding-block: 6px;
			border-radius: 8px;
			cursor: pointer;
		}
		a:hover {
			background-color: var(--surface-variant-hover);
			box-shadow: var(--box-shadow-s);
		}
		`];Qt([$({type:Array})],ve.prototype,"items",2);ve=Qt([W("clk-sidebar-element")],ve);const mn=i=>"consume-context:"+i,vn=i=>"hydrate-context:"+i,_n=i=>(e,t)=>{const n=e.connectedCallback,r=e.disconnectedCallback,s=e.update,o=vn(i),h=mn(i);let a;return e.connectedCallback=function(){a=l=>{l.preventDefault(),l.stopPropagation(),l.stopImmediatePropagation();const d=l;d.detail.value=this[t]},this.removeEventListener(h,a),this.addEventListener(h,a),n.call(this)},e.disconnectedCallback=function(){this.removeEventListener(h,a),r.call(this)},e.update=function(l){if(s.call(this,l),l.has(t)){const d=new CustomEvent(o,{bubbles:!0,composed:!0});this.dispatchEvent(d)}},Ye()(e,t)};function _e(i){return i=i||[],Array.isArray(i)?i:[i]}function y(i){return`[Vaadin.Router] ${i}`}function gn(i){if(typeof i!="object")return String(i);const e=Object.prototype.toString.call(i).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(i)}`:e}const ge="module",ye="nomodule",Ke=[ge,ye];function Ct(i){if(!i.match(/.+\.[m]?js$/))throw new Error(y(`Unsupported type for bundle "${i}": .js or .mjs expected.`))}function Yt(i){if(!i||!g(i.path))throw new Error(y('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=i.bundle,t=["component","redirect","bundle"];if(!I(i.action)&&!Array.isArray(i.children)&&!I(i.children)&&!$e(e)&&!t.some(n=>g(i[n])))throw new Error(y(`Expected route config "${i.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(g(e))Ct(e);else if(Ke.some(n=>n in e))Ke.forEach(n=>n in e&&Ct(e[n]));else throw new Error(y('Expected route bundle to include either "'+ye+'" or "'+ge+'" keys, or both'));i.redirect&&["bundle","component"].forEach(n=>{n in i&&console.warn(y(`Route config "${i.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function Rt(i){_e(i).forEach(e=>Yt(e))}function St(i,e){let t=document.head.querySelector('script[src="'+i+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",i),e===ge?t.setAttribute("type",ge):e===ye&&t.setAttribute(ye,""),t.async=!0),new Promise((n,r)=>{t.onreadystatechange=t.onload=s=>{t.__dynamicImportLoaded=!0,n(s)},t.onerror=s=>{t.parentNode&&t.parentNode.removeChild(t),r(s)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&n()})}function yn(i){return g(i)?St(i):Promise.race(Ke.filter(e=>e in i).map(e=>St(i[e],e)))}function J(i,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${i}`,{cancelable:i==="go",detail:e}))}function $e(i){return typeof i=="object"&&!!i}function I(i){return typeof i=="function"}function g(i){return typeof i=="string"}function ei(i){const e=new Error(y(`Page not found (${i.pathname})`));return e.context=i,e.code=404,e}const j=new class{};function $n(i){const e=i.port,t=i.protocol,s=t==="http:"&&e==="80"||t==="https:"&&e==="443"?i.hostname:i.host;return`${t}//${s}`}function Pt(i){if(i.defaultPrevented||i.button!==0||i.shiftKey||i.ctrlKey||i.altKey||i.metaKey)return;let e=i.target;const t=i.composedPath?i.composedPath():i.path||[];for(let h=0;h<t.length;h++){const a=t[h];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||$n(e))!==window.location.origin)return;const{pathname:r,search:s,hash:o}=e;J("go",{pathname:r,search:s,hash:o})&&(i.preventDefault(),i&&i.type==="click"&&window.scrollTo(0,0))}const bn={activate(){window.document.addEventListener("click",Pt)},inactivate(){window.document.removeEventListener("click",Pt)}},wn=/Trident/.test(navigator.userAgent);wn&&!I(window.PopStateEvent)&&(window.PopStateEvent=function(i,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(i,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function Tt(i){if(i.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:n}=window.location;J("go",{pathname:e,search:t,hash:n})}const An={activate(){window.addEventListener("popstate",Tt)},inactivate(){window.removeEventListener("popstate",Tt)}};var q=oi,En=it,Cn=Tn,Rn=ni,Sn=si,ti="/",ii="./",Pn=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function it(i,e){for(var t=[],n=0,r=0,s="",o=e&&e.delimiter||ti,h=e&&e.delimiters||ii,a=!1,l;(l=Pn.exec(i))!==null;){var d=l[0],c=l[1],u=l.index;if(s+=i.slice(r,u),r=u+d.length,c){s+=c[1],a=!0;continue}var p="",w=i[r],v=l[2],ui=l[3],pi=l[4],se=l[5];if(!a&&s.length){var Re=s.length-1;h.indexOf(s[Re])>-1&&(p=s[Re],s=s.slice(0,Re))}s&&(t.push(s),s="",a=!1);var fi=p!==""&&w!==void 0&&w!==p,mi=se==="+"||se==="*",vi=se==="?"||se==="*",nt=p||o,rt=ui||pi;t.push({name:v||n++,prefix:p,delimiter:nt,optional:vi,repeat:mi,partial:fi,pattern:rt?On(rt):"[^"+A(nt)+"]+?"})}return(s||r<i.length)&&t.push(s+i.substr(r)),t}function Tn(i,e){return ni(it(i,e))}function ni(i){for(var e=new Array(i.length),t=0;t<i.length;t++)typeof i[t]=="object"&&(e[t]=new RegExp("^(?:"+i[t].pattern+")$"));return function(n,r){for(var s="",o=r&&r.encode||encodeURIComponent,h=0;h<i.length;h++){var a=i[h];if(typeof a=="string"){s+=a;continue}var l=n?n[a.name]:void 0,d;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var c=0;c<l.length;c++){if(d=o(l[c],a),!e[h].test(d))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');s+=(c===0?a.prefix:a.delimiter)+d}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(d=o(String(l),a),!e[h].test(d))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+d+'"');s+=a.prefix+d;continue}if(a.optional){a.partial&&(s+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return s}}function A(i){return i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function On(i){return i.replace(/([=!:$/()])/g,"\\$1")}function ri(i){return i&&i.sensitive?"":"i"}function xn(i,e){if(!e)return i;var t=i.source.match(/\((?!\?)/g);if(t)for(var n=0;n<t.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return i}function Ln(i,e,t){for(var n=[],r=0;r<i.length;r++)n.push(oi(i[r],e,t).source);return new RegExp("(?:"+n.join("|")+")",ri(t))}function Nn(i,e,t){return si(it(i,t),e,t)}function si(i,e,t){t=t||{};for(var n=t.strict,r=t.start!==!1,s=t.end!==!1,o=A(t.delimiter||ti),h=t.delimiters||ii,a=[].concat(t.endsWith||[]).map(A).concat("$").join("|"),l=r?"^":"",d=i.length===0,c=0;c<i.length;c++){var u=i[c];if(typeof u=="string")l+=A(u),d=c===i.length-1&&h.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+A(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?l+=A(u.prefix)+"("+p+")?":l+="(?:"+A(u.prefix)+"("+p+"))?":l+=A(u.prefix)+"("+p+")"}}return s?(n||(l+="(?:"+o+")?"),l+=a==="$"?"$":"(?="+a+")"):(n||(l+="(?:"+o+"(?="+a+"))?"),d||(l+="(?="+o+"|"+a+")")),new RegExp(l,ri(t))}function oi(i,e,t){return i instanceof RegExp?xn(i,e):Array.isArray(i)?Ln(i,e,t):Nn(i,e,t)}q.parse=En;q.compile=Cn;q.tokensToFunction=Rn;q.tokensToRegExp=Sn;const{hasOwnProperty:kn}=Object.prototype,Ge=new Map;Ge.set("|false",{keys:[],pattern:/(?:)/});function Ot(i){try{return decodeURIComponent(i)}catch{return i}}function Hn(i,e,t,n,r){t=!!t;const s=`${i}|${t}`;let o=Ge.get(s);if(!o){const l=[];o={keys:l,pattern:q(i,l,{end:t,strict:i===""})},Ge.set(s,o)}const h=o.pattern.exec(e);if(!h)return null;const a=Object.assign({},r);for(let l=1;l<h.length;l++){const d=o.keys[l-1],c=d.name,u=h[l];(u!==void 0||!kn.call(a,c))&&(d.repeat?a[c]=u?u.split(d.delimiter).map(Ot):[]:a[c]=u&&Ot(u))}return{path:h[0],keys:(n||[]).concat(o.keys),params:a}}function ai(i,e,t,n,r){let s,o,h=0,a=i.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(i===l)return{done:!0};const d=i.__children=i.__children||i.children;if(!s&&(s=Hn(a,e,!d,n,r),s))return{done:!1,value:{route:i,keys:s.keys,params:s.params,path:s.path}};if(s&&d)for(;h<d.length;){if(!o){const u=d[h];u.parent=i;let p=s.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=ai(u,e.substr(p),t,s.keys,s.params)}const c=o.next(l);if(!c.done)return{done:!1,value:c.value};o=null,h++}return{done:!0}}}}function Mn(i){if(I(i.route.action))return i.route.action(i)}function Un(i,e){let t=e;for(;t;)if(t=t.parent,t===i)return!0;return!1}function In(i){let e=`Path '${i.pathname}' is not properly resolved due to an error.`;const t=(i.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Dn(i,e){const{route:t,path:n}=e;if(t&&!t.__synthetic){const r={path:n,route:t};if(!i.chain)i.chain=[];else if(t.parent){let s=i.chain.length;for(;s--&&i.chain[s].route&&i.chain[s].route!==t.parent;)i.chain.pop()}i.chain.push(r)}}class ne{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Mn,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){Rt(e);const t=[..._e(e)];this.root.__children=t}addRoutes(e){return Rt(e),this.root.__children.push(..._e(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,g(e)?{pathname:e}:e),n=ai(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let s=null,o=null,h=t;function a(l,d=s.value.route,c){const u=c===null&&s.value.route;return s=o||n.next(u),o=null,!l&&(s.done||!Un(d,s.value.route))?(o=s,Promise.resolve(j)):s.done?Promise.reject(ei(t)):(h=Object.assign(h?{chain:h.chain?h.chain.slice(0):[]}:{},t,s.value),Dn(h,s.value),Promise.resolve(r(h)).then(p=>p!=null&&p!==j?(h.result=p.result||p,h):a(l,d,p)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const d=In(h);if(l?console.warn(d):l=new Error(d),l.context=l.context||h,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return h.result=this.errorHandler(l),h;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;if(n.slice(0,t.length)===t)return n.slice(t.length)}}ne.pathToRegexp=q;const{pathToRegexp:xt}=ne,Lt=new Map;function li(i,e,t){const n=e.name||e.component;if(n&&(i.has(n)?i.get(n).push(e):i.set(n,[e])),Array.isArray(t))for(let r=0;r<t.length;r++){const s=t[r];s.parent=e,li(i,s,s.__children||s.children)}}function Nt(i,e){const t=i.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function kt(i){let e=i.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function jn(i,e={}){if(!(i instanceof ne))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(n,r)=>{let s=Nt(t,n);if(!s&&(t.clear(),li(t,i.root,i.root.__children),s=Nt(t,n),!s))throw new Error(`Route "${n}" not found`);let o=Lt.get(s.fullPath);if(!o){let a=kt(s),l=s.parent;for(;l;){const p=kt(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const d=xt.parse(a),c=xt.tokensToFunction(d),u=Object.create(null);for(let p=0;p<d.length;p++)g(d[p])||(u[d[p].name]=!0);o={toPath:c,keys:u},Lt.set(a,o),s.fullPath=a}let h=o.toPath(r,e)||"/";if(e.stringifyQueryParams&&r){const a={},l=Object.keys(r);for(let c=0;c<l.length;c++){const u=l[c];o.keys[u]||(a[u]=r[u])}const d=e.stringifyQueryParams(a);d&&(h+=d.charAt(0)==="?"?d:`?${d}`)}return h}}let Ht=[];function zn(i){Ht.forEach(e=>e.inactivate()),i.forEach(e=>e.activate()),Ht=i}const Bn=i=>{const e=getComputedStyle(i).getPropertyValue("animation-name");return e&&e!=="none"},Vn=(i,e)=>{const t=()=>{i.removeEventListener("animationend",t),e()};i.addEventListener("animationend",t)};function Mt(i,e){return i.classList.add(e),new Promise(t=>{if(Bn(i)){const n=i.getBoundingClientRect(),r=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;i.setAttribute("style",`position: absolute; ${r}`),Vn(i,()=>{i.classList.remove(e),i.removeAttribute("style"),t()})}else i.classList.remove(e),t()})}const Fn=256;function De(i){return i!=null}function Wn(i){const e=Object.assign({},i);return delete e.next,e}function _({pathname:i="",search:e="",hash:t="",chain:n=[],params:r={},redirectFrom:s,resolver:o},h){const a=n.map(l=>l.route);return{baseUrl:o&&o.baseUrl||"",pathname:i,search:e,hash:t,routes:a,route:h||a.length&&a[a.length-1]||null,params:r,redirectFrom:s,getUrl:(l={})=>ce(R.pathToRegexp.compile(hi(a))(Object.assign({},r,l)),o)}}function Ut(i,e){const t=Object.assign({},i.params);return{redirect:{pathname:e,from:i.pathname,params:t}}}function qn(i,e){e.location=_(i);const t=i.chain.map(n=>n.route).indexOf(i.route);return i.chain[t].element=e,e}function he(i,e,t){if(I(i))return i.apply(t,e)}function It(i,e,t){return n=>{if(n&&(n.cancel||n.redirect))return n;if(t)return he(t[i],e,t)}}function Kn(i,e){if(!Array.isArray(i)&&!$e(i))throw new Error(y(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${i}`));e.__children=[];const t=_e(i);for(let n=0;n<t.length;n++)Yt(t[n]),e.__children.push(t[n])}function oe(i){if(i&&i.length){const e=i[0].parentNode;for(let t=0;t<i.length;t++)e.removeChild(i[t])}}function ce(i,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(i.replace(/^\//,""),t).pathname:i}function hi(i){return i.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class R extends ne{constructor(e,t){const n=document.head.querySelector("base"),r=n&&n.getAttribute("href");super([],Object.assign({baseUrl:r&&ne.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const s=R.NavigationTrigger;R.setTriggers.apply(R,Object.keys(s).map(o=>s[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=_({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();I(t.children)&&(n=n.then(()=>t.children(Wn(e))).then(s=>{!De(s)&&!I(t.children)&&(s=t.children),Kn(s,t)}));const r={redirect:s=>Ut(e,s),component:s=>{const o=document.createElement(s);return this.__createdByRouter.set(o,!0),o}};return n.then(()=>{if(this.__isLatestRender(e))return he(t.action,[e,r],t)}).then(s=>{if(De(s)&&(s instanceof HTMLElement||s.redirect||s===j))return s;if(g(t.redirect))return r.redirect(t.redirect);if(t.bundle)return yn(t.bundle).then(()=>{},()=>{throw new Error(y(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(s=>{if(De(s))return s;if(g(t.component))return r.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},g(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(r).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const o=this.__previousContext;if(s===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=_(s),t&&this.__updateBrowserHistory(s,n===1),J("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,o),this.__previousContext=s,this.location;this.__addAppearingContent(s,o);const h=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,o),h.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),oe(this.__outlet&&this.__outlet.children),this.location=_(Object.assign(r,{resolver:this})),J("error",Object.assign({router:this,error:s},r)),s}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const s=n!==t?n:e,h=ce(hi(n.chain),n.resolver)===n.pathname,a=(l,d=l.route,c)=>l.next(void 0,d,c).then(u=>u===null||u===j?h?l:d.parent!==null?a(l,d.parent,u):u:u);return a(n).then(l=>{if(l===null||l===j)throw ei(s);return l&&l!==j&&l!==n?this.__fullyResolveChain(s,l):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(qn(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(n=>this.__findComponentContextAfterAllRedirects(n)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(y(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${gn(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],r=e.chain;let s=Promise.resolve();const o=()=>({cancel:!0}),h=a=>Ut(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let a=0;a<Math.min(n.length,r.length)&&!(n[a].route!==r[a].route||n[a].path!==r[a].path&&n[a].element!==r[a].element||!this.__isReusableElement(n[a].element,r[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=r.length-1;a>=0;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},n[a]);for(let a=0;a<r.length;a++)s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:h},r[a]),n[a].element.location=_(e,n[a].route)}else for(let a=n.length-1;a>=e.__divergedChainIndex;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},n[a])}if(!e.__skipAttach)for(let a=0;a<r.length;a++)a<e.__divergedChainIndex?a<n.length&&n[a].element&&(n[a].element.location=_(e,n[a].route)):(s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:h},r[a]),r[a].element&&(r[a].element.location=_(e,r[a].route)));return s.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,n,r){const s=_(t);return e.then(o=>{if(this.__isLatestRender(t))return It("onBeforeLeave",[s,n,this],r.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,n,r){const s=_(t,r.route);return e.then(o=>{if(this.__isLatestRender(t))return It("onBeforeEnter",[s,n,this],r.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>Fn)throw new Error(y(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(y(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const s=r?"replaceState":"pushState";window.history[s](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const s=t&&t.chain[r].element;if(s)if(s.parentNode===n)e.chain[r].element=s,n=s;else break}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(s=>this.__addedByRouter.get(s)&&s!==e.result);let r=n;for(let s=e.__divergedChainIndex;s<e.chain.length;s++){const o=e.chain[s].element;o&&(r.appendChild(o),this.__addedByRouter.set(o,!0),r===n&&this.__appearingContent.push(o),r=o)}}__removeDisappearingContent(){this.__disappearingContent&&oe(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(oe(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const r=t.chain[n].element;if(r)try{const s=_(e);he(r.onAfterLeave,[s,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&oe(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},r=_(e,e.chain[t].route);he(n.onAfterEnter,[r,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],s=e.chain;let o;for(let h=s.length;h>0;h--)if(s[h-1].route.animate){o=s[h-1].route.animate;break}if(t&&n&&o){const h=$e(o)&&o.leave||"leaving",a=$e(o)&&o.enter||"entering";r.push(Mt(t,h)),r.push(Mt(n,a))}return Promise.all(r).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:r}=e?e.detail:window.location;g(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){zn(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=jn(this)),ce(this.__urlForName(e,t),this)}urlForPath(e,t){return ce(R.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:r}=g(e)?this.__createUrl(e,"http://a"):e;return J("go",{pathname:t,search:n,hash:r})}}const Gn=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,de=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Jn(){function i(){return!0}return ci(i)}function Zn(){try{return Xn()?!0:Qn()?de?!Yn():!Jn():!1}catch{return!1}}function Xn(){return localStorage.getItem("vaadin.developmentmode.force")}function Qn(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Yn(){return!!(de&&Object.keys(de).map(e=>de[e]).filter(e=>e.productionMode).length>0)}function ci(i,e){if(typeof i!="function")return;const t=Gn.exec(i.toString());if(t)try{i=new Function(t[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return i(e)}window.Vaadin=window.Vaadin||{};const Dt=function(i,e){if(window.Vaadin.developmentMode)return ci(i,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Zn());function er(){}const tr=function(){if(typeof Dt=="function")return Dt(er)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});tr();R.NavigationTrigger={POPSTATE:An,CLICK:bn};var ir=Object.defineProperty,nr=Object.getOwnPropertyDescriptor,di=(i,e,t,n)=>{for(var r=n>1?void 0:n?nr(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&ir(e,t,r),r};let be=class extends b{constructor(){super(...arguments),this.router=new R,this.routes=[{path:"/",redirect:"/timer"},{name:"timer",path:"/timer",component:"clk-timer-page",action:()=>void Se(()=>import("./timer-page-element-bacdc29f.js"),["assets/timer-page-element-bacdc29f.js","assets/style-map-58f0ad24.js"])},{name:"alarm",path:"/alarm",component:"clk-alarm-page",action:()=>void Se(()=>import("./alarm-page-element-ae14d249.js"),[])},{name:"stopwatch",path:"/stopwatch",component:"clk-stopwatch-page",action:()=>void Se(()=>import("./stopwatch-page-element-4b7c46ed.js"),["assets/stopwatch-page-element-4b7c46ed.js","assets/style-map-58f0ad24.js"])},{path:"(.*)",redirect:"/"}],this.sidebarItems=[{icon:"https://icons.getbootstrap.com/assets/icons/hourglass.svg",label:"Timer",path:()=>this.router.urlForName("timer")},{icon:"https://icons.getbootstrap.com/assets/icons/bell.svg",label:"Alarm",path:()=>this.router.urlForName("alarm")},{icon:"https://icons.getbootstrap.com/assets/icons/stopwatch.svg",label:"Stopwatch",path:()=>this.router.urlForName("stopwatch")}]}connectedCallback(){super.connectedCallback(),this.router.baseUrl="/apps/clock/1.0.0/",this.router.setRoutes(this.routes),this.router.setOutlet(this)}render(){return k`
		<aside>
			<clk-sidebar-element
				.items=${this.sidebarItems}
			></clk-sidebar-element>
		</aside>

		<section>
			<slot></slot>
		</section>
		`}};be.styles=[Qe,S`
		:host {
			overflow: hidden;
			display: grid;
			grid-template-columns: 150px 1fr;
		}
		aside {
			display: grid;
			background-color: rgba(20,20,20,0.5);
			border-right: 1px solid rgb(200 200 200 / 25%);
		}
		section {
			overflow: auto;
			display: grid;
		}
		`];di([_n("router")],be.prototype,"router",2);be=di([W("clock-app")],be);const rr="",sr=(i,e)=>{e.forEach(t=>{if(document.head.querySelector("#"+t.id))return;const n=document.createElement("link");n.id=t.id,n.rel="stylesheet",n.href=(i+"/"+t.href).replaceAll(location.origin,"").replaceAll(/\/+/g,"/").replaceAll(/\/$/g,""),document.head.appendChild(n)})};sr(rr+"/serve/root-design/1.0.0/",[{id:"gate-style-index",href:"tokens/index.css"},{id:"gate-style-tokens-all",href:"tokens/tokens-all.css"},{id:"gate-style-tokens-extra",href:"tokens/tokens-extra.css"},{id:"gate-style-tokens-font",href:"tokens/tokens-font.css"},{id:"gate-style-tokens-dark",href:"tokens/tokens-dark.css"},{id:"gate-style-tokens-light",href:"tokens/tokens-light.css"}]);export{f as A,H as T,$ as a,W as b,rn as c,vr as d,Qe as e,ji as f,zi as g,Di as h,S as i,ln as n,un as o,b as s,Ye as t,k as x};
