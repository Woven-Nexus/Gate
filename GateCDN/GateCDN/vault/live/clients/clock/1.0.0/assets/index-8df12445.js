(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const jt="modulepreload",zt=function(i){return"/clock/1.0.0/"+i},De={},fe=function(e,t,r){if(!t||t.length===0)return e();const n=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=zt(s),s in De)return;De[s]=!0;const o=s.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!r)for(let u=n.length-1;u>=0;u--){const d=n[u];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${c}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":jt,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((u,d)=>{l.addEventListener("load",u),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},me=new Map,Q=new Map,Ce="mimic_iconcache",Bt=JSON.parse(sessionStorage.getItem(Ce)??"{}");Object.entries(Bt).forEach(([i,e])=>{Q.set(i,e)});const Ft=async i=>{if(Q.has(i))return Q.get(i);const e=await Vt(i),t={ok:e.ok,status:e.status,svg:null};if(e.ok){const n=document.createElement("div");n.innerHTML=e.html;const s=n.firstElementChild;t.svg=(s==null?void 0:s.tagName.toLowerCase())==="svg"?s.outerHTML:""}const r=JSON.parse(sessionStorage.getItem(Ce)??"{}");return r[i]=t,sessionStorage.setItem(Ce,JSON.stringify(r)),Q.set(i,t),t},Vt=async(i,e="cors")=>{if(me.has(i))return me.get(i);const t=fetch(i,{mode:e}).then(async r=>({ok:r.ok,status:r.status,html:await r.text()}));return me.set(i,t),t};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=window,Le=Z.ShadowRoot&&(Z.ShadyCSS===void 0||Z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xe=Symbol(),je=new WeakMap;let pt=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==xe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Le&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=je.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&je.set(t,e))}return e}toString(){return this.cssText}};const ft=i=>new pt(typeof i=="string"?i:i+"",void 0,xe),b=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,n,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[s+1],i[0]);return new pt(t,i,xe)},qt=(i,e)=>{Le?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const r=document.createElement("style"),n=Z.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=t.cssText,i.appendChild(r)})},ze=Le?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return ft(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ge;const ie=window,Be=ie.trustedTypes,Kt=Be?Be.emptyScript:"",Fe=ie.reactiveElementPolyfillSupport,Re={toAttribute(i,e){switch(e){case Boolean:i=i?Kt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},mt=(i,e)=>e!==i&&(e==e||i==i),ve={attribute:!0,type:String,converter:Re,reflect:!1,hasChanged:mt},Se="finalized";let U=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const n=this._$Ep(r,t);n!==void 0&&(this._$Ev.set(n,r),e.push(n))}),e}static createProperty(e,t=ve){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){const s=this[e];this[t]=n,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ve}static finalize(){if(this.hasOwnProperty(Se))return!1;this[Se]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of r)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const n of r)t.unshift(ze(n))}else e!==void 0&&t.push(ze(e));return t}static _$Ep(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return qt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=ve){var n;const s=this.constructor._$Ep(e,r);if(s!==void 0&&r.reflect===!0){const o=(((n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?r.converter:Re).toAttribute(t,r.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,t){var r;const n=this.constructor,s=n._$Ev.get(e);if(s!==void 0&&this._$El!==s){const o=n.getPropertyOptions(s),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:Re;this._$El=s,this[s]=c.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,r){let n=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||mt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(r)):this._$Ek()}catch(n){throw t=!1,this._$Ek(),n}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};U[Se]=!0,U.elementProperties=new Map,U.elementStyles=[],U.shadowRootOptions={mode:"open"},Fe==null||Fe({ReactiveElement:U}),((ge=ie.reactiveElementVersions)!==null&&ge!==void 0?ge:ie.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _e;const re=window,M=re.trustedTypes,Ve=M?M.createPolicy("lit-html",{createHTML:i=>i}):void 0,Pe="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,gt="?"+$,Wt=`<${gt}>`,P=document,B=()=>P.createComment(""),F=i=>i===null||typeof i!="object"&&typeof i!="function",vt=Array.isArray,Gt=i=>vt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",ye=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qe=/-->/g,Ke=/>/g,R=RegExp(`>|${ye}(?:([^\\s"'>=/]+)(${ye}*=${ye}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),We=/'/g,Ge=/"/g,_t=/^(?:script|style|textarea|title)$/i,Jt=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),O=Jt(1),k=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Je=new WeakMap,S=P.createTreeWalker(P,129,null,!1),Xt=(i,e)=>{const t=i.length-1,r=[];let n,s=e===2?"<svg>":"",o=j;for(let a=0;a<t;a++){const l=i[a];let u,d,h=-1,p=0;for(;p<l.length&&(o.lastIndex=p,d=o.exec(l),d!==null);)p=o.lastIndex,o===j?d[1]==="!--"?o=qe:d[1]!==void 0?o=Ke:d[2]!==void 0?(_t.test(d[2])&&(n=RegExp("</"+d[2],"g")),o=R):d[3]!==void 0&&(o=R):o===R?d[0]===">"?(o=n??j,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,u=d[1],o=d[3]===void 0?R:d[3]==='"'?Ge:We):o===Ge||o===We?o=R:o===qe||o===Ke?o=j:(o=R,n=void 0);const C=o===R&&i[a+1].startsWith("/>")?" ":"";s+=o===j?l+Wt:h>=0?(r.push(u),l.slice(0,h)+Pe+l.slice(h)+$+C):l+$+(h===-2?(r.push(void 0),a):C)}const c=s+(i[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ve!==void 0?Ve.createHTML(c):c,r]};class V{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let s=0,o=0;const c=e.length-1,a=this.parts,[l,u]=Xt(e,t);if(this.el=V.createElement(l,r),S.currentNode=this.el.content,t===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(n=S.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const d=[];for(const h of n.getAttributeNames())if(h.endsWith(Pe)||h.startsWith($)){const p=u[o++];if(d.push(h),p!==void 0){const C=n.getAttribute(p.toLowerCase()+Pe).split($),x=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:x[2],strings:C,ctor:x[1]==="."?Zt:x[1]==="?"?ei:x[1]==="@"?ti:de})}else a.push({type:6,index:s})}for(const h of d)n.removeAttribute(h)}if(_t.test(n.tagName)){const d=n.textContent.split($),h=d.length-1;if(h>0){n.textContent=M?M.emptyScript:"";for(let p=0;p<h;p++)n.append(d[p],B()),S.nextNode(),a.push({type:2,index:++s});n.append(d[h],B())}}}else if(n.nodeType===8)if(n.data===gt)a.push({type:2,index:s});else{let d=-1;for(;(d=n.data.indexOf($,d+1))!==-1;)a.push({type:7,index:s}),d+=$.length-1}s++}}static createElement(e,t){const r=P.createElement("template");return r.innerHTML=e,r}}function I(i,e,t=i,r){var n,s,o,c;if(e===k)return e;let a=r!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[r]:t._$Cl;const l=F(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,t,r)),r!==void 0?((o=(c=t)._$Co)!==null&&o!==void 0?o:c._$Co=[])[r]=a:t._$Cl=a),a!==void 0&&(e=I(i,a._$AS(i,e.values),a,r)),e}class Qt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:r},parts:n}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:P).importNode(r,!0);S.currentNode=s;let o=S.nextNode(),c=0,a=0,l=n[0];for(;l!==void 0;){if(c===l.index){let u;l.type===2?u=new W(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new ii(o,this,e)),this._$AV.push(u),l=n[++a]}c!==(l==null?void 0:l.index)&&(o=S.nextNode(),c++)}return S.currentNode=P,s}v(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class W{constructor(e,t,r,n){var s;this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cp=(s=n==null?void 0:n.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=I(this,e,t),F(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==k&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Gt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==f&&F(this._$AH)?this._$AA.nextSibling.data=e:this.$(P.createTextNode(e)),this._$AH=e}g(e){var t;const{values:r,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=V.createElement(n.h,this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(r);else{const o=new Qt(s,this),c=o.u(this.options);o.v(r),this.$(c),this._$AH=o}}_$AC(e){let t=Je.get(e.strings);return t===void 0&&Je.set(e.strings,t=new V(e)),t}T(e){vt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const s of e)n===t.length?t.push(r=new W(this.k(B()),this.k(B()),this,this.options)):r=t[n],r._$AI(s),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class de{constructor(e,t,r,n,s){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=f}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){const s=this.strings;let o=!1;if(s===void 0)e=I(this,e,t,0),o=!F(e)||e!==this._$AH&&e!==k,o&&(this._$AH=e);else{const c=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=I(this,c[r+a],t,a),l===k&&(l=this._$AH[a]),o||(o=!F(l)||l!==this._$AH[a]),l===f?e=f:e!==f&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}o&&!n&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Zt extends de{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}}const Yt=M?M.emptyScript:"";class ei extends de{constructor(){super(...arguments),this.type=4}j(e){e&&e!==f?this.element.setAttribute(this.name,Yt):this.element.removeAttribute(this.name)}}class ti extends de{constructor(e,t,r,n,s){super(e,t,r,n,s),this.type=5}_$AI(e,t=this){var r;if((e=(r=I(this,e,t,0))!==null&&r!==void 0?r:f)===k)return;const n=this._$AH,s=e===f&&n!==f||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==f&&(n===f||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class ii{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}}const Xe=re.litHtmlPolyfillSupport;Xe==null||Xe(V,W),((_e=re.litHtmlVersions)!==null&&_e!==void 0?_e:re.litHtmlVersions=[]).push("2.7.4");const ri=(i,e,t)=>{var r,n;const s=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:e;let o=s._$litPart$;if(o===void 0){const c=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:null;s._$litPart$=o=new W(e.insertBefore(B(),c),c,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var be,we;class _ extends U{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ri(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return k}}_.finalized=!0,_._$litElement$=!0,(be=globalThis.litElementHydrateSupport)===null||be===void 0||be.call(globalThis,{LitElement:_});const Qe=globalThis.litElementPolyfillSupport;Qe==null||Qe({LitElement:_});((we=globalThis.litElementVersions)!==null&&we!==void 0?we:globalThis.litElementVersions=[]).push("3.3.2");const ni=b`
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
 */const H=i=>e=>typeof e=="function"?((t,r)=>(customElements.define(t,r),r))(i,e):((t,r)=>{const{kind:n,elements:s}=r;return{kind:n,elements:s,finisher(o){customElements.define(t,o)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const si=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},oi=(i,e,t)=>{e.constructor.createProperty(t,i)};function y(i){return(e,t)=>t!==void 0?oi(i,e,t):si(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ue(i){return y({...i,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $e;(($e=window.HTMLSlotElement)===null||$e===void 0?void 0:$e.prototype.assignedElements)!=null;var ai=Object.defineProperty,li=Object.getOwnPropertyDescriptor,Ne=(i,e,t,r)=>{for(var n=r>1?void 0:r?li(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&ai(e,t,n),n};let q=class extends _{constructor(){super(...arguments),this.source="",this.icon=""}connectedCallback(){super.connectedCallback(),this.setAttribute("inert","")}render(){return O`
		<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor">
			<use href=${this.source+"#"+this.icon}></use>
		</svg>
		`}};q.styles=[ni,b`
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
	`];Ne([y()],q.prototype,"source",2);Ne([y()],q.prototype,"icon",2);q=Ne([H("mm-symbol")],q);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ci={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},hi=i=>(...e)=>({_$litDirective$:i,values:e});class di{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Oe=class extends di{constructor(e){if(super(e),this.et=f,e.type!==ci.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===f||e==null)return this.ft=void 0,this.et=e;if(e===k)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Oe.directiveName="unsafeHTML",Oe.resultType=1;const ui=hi(Oe);var pi=Object.defineProperty,fi=Object.getOwnPropertyDescriptor,ue=(i,e,t,r)=>{for(var n=r>1?void 0:r?fi(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&pi(e,t,n),n};let Ee,A=class extends _{update(i){super.update(i),(i.has("url")||i.has("template"))&&this.setSvg()}async getSvg(){Ee??(Ee=new DOMParser);let i="";if(this.url){const t=await Ft(this.url);if(!t.ok)return"";i=t.svg}else if(this.template)i=this.template;else return"";const e=Ee.parseFromString(i,"text/html").body.querySelector("svg");return e?(A.mutator(e),e.outerHTML):""}async setSvg(){this.svg=await this.getSvg()}render(){return O`
		<div role="img">
			${ui(this.svg)}
		</div>
		`}};A.mutator=i=>{i.setAttribute("fill","currentColor"),i.removeAttribute("height"),i.removeAttribute("width")};A.styles=[b`
		:host {
			display: inline-grid;
			place-items: center;
			height: max-content;
			width: max-content;
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
		`];ue([y()],A.prototype,"url",2);ue([y()],A.prototype,"template",2);ue([Ue()],A.prototype,"svg",2);A=ue([H("mm-icon")],A);var mi=Object.defineProperty,gi=Object.getOwnPropertyDescriptor,G=(i,e,t,r)=>{for(var n=r>1?void 0:r?gi(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&mi(e,t,n),n};let T=class extends _{constructor(){super(...arguments),this.type="body-medium",this.textTransform="capitalize",this.text="",this.handleMousedown=i=>{i.detail>=2&&i.preventDefault()},this.handleSlotchange=()=>{let i=this.textContent??"";this.textTransform==="uppercase"?i=i.toLocaleUpperCase():this.textTransform==="lowercase"?i=i.toLocaleLowerCase():this.textTransform==="capitalize"&&(i=i.slice(0,1).toLocaleUpperCase()+i.slice(1).toLocaleLowerCase()),this.text=i}}connectedCallback(){super.connectedCallback(),this.setAttribute("inert",""),this.addEventListener("mousedown",this.handleMousedown),this.updateComplete.then(()=>this.handleSlotchange())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousedown",this.handleMousedown)}render(){return O`
		<span class="outline" data-content=${this.text}>${this.text}</span>
		<slot @slotchange=${this.handleSlotchange} style="display:none;"></slot>
		`}};T.styles=[b`
		:host {
			position: relative;
			display: inline-block;
		}
		:host([shadow]) .outlidne {
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
	`];G([y({reflect:!0})],T.prototype,"type",2);G([y({type:Boolean,reflect:!0})],T.prototype,"shadow",2);G([y()],T.prototype,"textTransform",2);G([Ue()],T.prototype,"text",2);T=G([H("mm-text")],T);const vi=(()=>{const i=document.createElement("style");let e;try{document.head.appendChild(i),i.sheet.insertRule(":focus-visible { color: inherit }"),e=!0}catch{e=!1}finally{i.remove()}return e})();ft(vi?":focus-visible":":focus");const _i=(i,e,t)=>{const r=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...t});return i.dispatchEvent(r),r};let yi=i=>crypto.getRandomValues(new Uint8Array(i)),bi=(i,e,t)=>{let r=(2<<Math.log(i.length-1)/Math.LN2)-1,n=-~(1.6*r*e/i.length);return(s=e)=>{let o="";for(;;){let c=t(n),a=n;for(;a--;)if(o+=i[c[a]&r]||"",o.length===s)return o}}},wi=(i,e=21)=>bi(i,e,yi);wi("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();var $i=Object.defineProperty,Ei=Object.getOwnPropertyDescriptor,yt=(i,e,t,r)=>{for(var n=r>1?void 0:r?Ei(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&$i(e,t,n),n};let ne=class extends _{constructor(){super(...arguments),this.speed=500,this.animations=new Set,this.showRipple=i=>{const e=document.createElement("span"),t=this.renderRoot.querySelector(".ripple__control");t==null||t.insertAdjacentElement("beforeend",e);const r=this.getBoundingClientRect(),n=Math.trunc(r.width),s={height:n+"px",width:n+"px"};i!=null&&i.x&&(s.left=Math.trunc(i.x-r.left-n/2)+"px"),i!=null&&i.y&&(s.top=Math.trunc(i.y-r.top-n/2)+"px"),Object.assign(e.style,s);const o=e.animate([{opacity:1,transform:"scale(0)"},{opacity:0,transform:"scale(2)"}],{easing:"linear",duration:this.speed});this.animations.add(o);const c=()=>this.handleAnimationEnd(e,o,c);o.addEventListener("finish",c),o.addEventListener("cancel",c)},this.handleAnimationEnd=(i,e,t)=>{e.removeEventListener("finish",t),e.removeEventListener("cancel",t),this.animations.delete(e),_i(this,"ripple-finished"),i.remove()},this.handleMousedown=i=>{i.detail>=2&&i.preventDefault()},this.handleClick=i=>{this.showRipple(i)}}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this.handleMousedown),this.addEventListener("click",this.handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.animations.forEach(e=>e.cancel()),this.animations.clear();const i=this.querySelector(".ripple__control");this.removeRipples(i),this.removeEventListener("mousedown",this.handleMousedown),this.removeEventListener("click",this.handleClick)}removeRipples(i){for(;i!=null&&i.firstChild;)i.removeChild(i.firstChild)}render(){return O`
		<slot></slot>
		<div class="ripple">
			<div class="ripple__control"></div>
		</div>
		`}};ne.styles=[b`
		:host {
			--ripple-bg-default: var(--ripple-bg, var(--surface-press));
			border-radius: inherit;
			position: relative;
		}
		`,b`
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
	`];yt([y({type:Number})],ne.prototype,"speed",2);ne=yt([H("mm-ripple")],ne);const bt=b`
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
`,Ai=i=>"consume-context:"+i,Ci=i=>"hydrate-context:"+i,Ri=i=>(e,t)=>{const r=e.connectedCallback,n=e.disconnectedCallback,s=e.update,o=Ci(i),c=Ai(i);let a;return e.connectedCallback=function(){a=l=>{l.preventDefault(),l.stopPropagation(),l.stopImmediatePropagation();const u=l;u.detail.value=this[t]},this.removeEventListener(c,a),this.addEventListener(c,a),r.call(this)},e.disconnectedCallback=function(){this.removeEventListener(c,a),n.call(this)},e.update=function(l){if(s.call(this,l),l.has(t)){const u=new CustomEvent(o,{bubbles:!0,composed:!0});this.dispatchEvent(u)}},Ue()(e,t)};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Si(i,e){if(i!==void 0){let t=0;for(const r of i)yield e(r,t++)}}var Pi=Object.defineProperty,Oi=Object.getOwnPropertyDescriptor,wt=(i,e,t,r)=>{for(var n=r>1?void 0:r?Oi(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Pi(e,t,n),n};let se=class extends _{constructor(){super(...arguments),this.items=[]}itemTemplate(i){return O`
		<mm-ripple>
			<a href=${i.path()}>
				<mm-icon url=${i.icon}></mm-icon>
				<mm-text>${i.label}</mm-text>
			</a>
		</mm-ripple>
		`}render(){return O`
		<menu>
			${Si(this.items,i=>this.itemTemplate(i))}
		</menu>
		`}};se.styles=[bt,b`
		:host {
			display: grid;
		}
		menu {
			all: unset;
			display: grid;
			grid-auto-flow: row;
			grid-auto-rows: max-content;
			padding-block: 12px;
			padding-inline: 4px;
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
		`];wt([y({type:Array})],se.prototype,"items",2);se=wt([H("clk-sidebar-element")],se);function oe(i){return i=i||[],Array.isArray(i)?i:[i]}function v(i){return`[Vaadin.Router] ${i}`}function ki(i){if(typeof i!="object")return String(i);const e=Object.prototype.toString.call(i).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(i)}`:e}const ae="module",le="nomodule",ke=[ae,le];function Ze(i){if(!i.match(/.+\.[m]?js$/))throw new Error(v(`Unsupported type for bundle "${i}": .js or .mjs expected.`))}function $t(i){if(!i||!g(i.path))throw new Error(v('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=i.bundle,t=["component","redirect","bundle"];if(!L(i.action)&&!Array.isArray(i.children)&&!L(i.children)&&!ce(e)&&!t.some(r=>g(i[r])))throw new Error(v(`Expected route config "${i.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(g(e))Ze(e);else if(ke.some(r=>r in e))ke.forEach(r=>r in e&&Ze(e[r]));else throw new Error(v('Expected route bundle to include either "'+le+'" or "'+ae+'" keys, or both'));i.redirect&&["bundle","component"].forEach(r=>{r in i&&console.warn(v(`Route config "${i.path}" has both "redirect" and "${r}" properties, and "redirect" will always override the latter. Did you mean to only use "${r}"?`))})}function Ye(i){oe(i).forEach(e=>$t(e))}function et(i,e){let t=document.head.querySelector('script[src="'+i+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",i),e===ae?t.setAttribute("type",ae):e===le&&t.setAttribute(le,""),t.async=!0),new Promise((r,n)=>{t.onreadystatechange=t.onload=s=>{t.__dynamicImportLoaded=!0,r(s)},t.onerror=s=>{t.parentNode&&t.parentNode.removeChild(t),n(s)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&r()})}function Ti(i){return g(i)?et(i):Promise.race(ke.filter(e=>e in i).map(e=>et(i[e],e)))}function z(i,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${i}`,{cancelable:i==="go",detail:e}))}function ce(i){return typeof i=="object"&&!!i}function L(i){return typeof i=="function"}function g(i){return typeof i=="string"}function Et(i){const e=new Error(v(`Page not found (${i.pathname})`));return e.context=i,e.code=404,e}const N=new class{};function Li(i){const e=i.port,t=i.protocol,s=t==="http:"&&e==="80"||t==="https:"&&e==="443"?i.hostname:i.host;return`${t}//${s}`}function tt(i){if(i.defaultPrevented||i.button!==0||i.shiftKey||i.ctrlKey||i.altKey||i.metaKey)return;let e=i.target;const t=i.composedPath?i.composedPath():i.path||[];for(let c=0;c<t.length;c++){const a=t[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Li(e))!==window.location.origin)return;const{pathname:n,search:s,hash:o}=e;z("go",{pathname:n,search:s,hash:o})&&(i.preventDefault(),i&&i.type==="click"&&window.scrollTo(0,0))}const xi={activate(){window.document.addEventListener("click",tt)},inactivate(){window.document.removeEventListener("click",tt)}},Ui=/Trident/.test(navigator.userAgent);Ui&&!L(window.PopStateEvent)&&(window.PopStateEvent=function(i,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(i,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function it(i){if(i.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:r}=window.location;z("go",{pathname:e,search:t,hash:r})}const Ni={activate(){window.addEventListener("popstate",it)},inactivate(){window.removeEventListener("popstate",it)}};var D=Ot,Mi=Me,Ii=zi,Hi=Rt,Di=Pt,At="/",Ct="./",ji=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Me(i,e){for(var t=[],r=0,n=0,s="",o=e&&e.delimiter||At,c=e&&e.delimiters||Ct,a=!1,l;(l=ji.exec(i))!==null;){var u=l[0],d=l[1],h=l.index;if(s+=i.slice(n,h),n=h+u.length,d){s+=d[1],a=!0;continue}var p="",C=i[n],x=l[2],Nt=l[3],Mt=l[4],J=l[5];if(!a&&s.length){var pe=s.length-1;c.indexOf(s[pe])>-1&&(p=s[pe],s=s.slice(0,pe))}s&&(t.push(s),s="",a=!1);var It=p!==""&&C!==void 0&&C!==p,Ht=J==="+"||J==="*",Dt=J==="?"||J==="*",Ie=p||o,He=Nt||Mt;t.push({name:x||r++,prefix:p,delimiter:Ie,optional:Dt,repeat:Ht,partial:It,pattern:He?Bi(He):"[^"+w(Ie)+"]+?"})}return(s||n<i.length)&&t.push(s+i.substr(n)),t}function zi(i,e){return Rt(Me(i,e))}function Rt(i){for(var e=new Array(i.length),t=0;t<i.length;t++)typeof i[t]=="object"&&(e[t]=new RegExp("^(?:"+i[t].pattern+")$"));return function(r,n){for(var s="",o=n&&n.encode||encodeURIComponent,c=0;c<i.length;c++){var a=i[c];if(typeof a=="string"){s+=a;continue}var l=r?r[a.name]:void 0,u;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(u=o(l[d],a),!e[c].test(u))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');s+=(d===0?a.prefix:a.delimiter)+u}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(u=o(String(l),a),!e[c].test(u))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+u+'"');s+=a.prefix+u;continue}if(a.optional){a.partial&&(s+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return s}}function w(i){return i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Bi(i){return i.replace(/([=!:$/()])/g,"\\$1")}function St(i){return i&&i.sensitive?"":"i"}function Fi(i,e){if(!e)return i;var t=i.source.match(/\((?!\?)/g);if(t)for(var r=0;r<t.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return i}function Vi(i,e,t){for(var r=[],n=0;n<i.length;n++)r.push(Ot(i[n],e,t).source);return new RegExp("(?:"+r.join("|")+")",St(t))}function qi(i,e,t){return Pt(Me(i,t),e,t)}function Pt(i,e,t){t=t||{};for(var r=t.strict,n=t.start!==!1,s=t.end!==!1,o=w(t.delimiter||At),c=t.delimiters||Ct,a=[].concat(t.endsWith||[]).map(w).concat("$").join("|"),l=n?"^":"",u=i.length===0,d=0;d<i.length;d++){var h=i[d];if(typeof h=="string")l+=w(h),u=d===i.length-1&&c.indexOf(h[h.length-1])>-1;else{var p=h.repeat?"(?:"+h.pattern+")(?:"+w(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;e&&e.push(h),h.optional?h.partial?l+=w(h.prefix)+"("+p+")?":l+="(?:"+w(h.prefix)+"("+p+"))?":l+=w(h.prefix)+"("+p+")"}}return s?(r||(l+="(?:"+o+")?"),l+=a==="$"?"$":"(?="+a+")"):(r||(l+="(?:"+o+"(?="+a+"))?"),u||(l+="(?="+o+"|"+a+")")),new RegExp(l,St(t))}function Ot(i,e,t){return i instanceof RegExp?Fi(i,e):Array.isArray(i)?Vi(i,e,t):qi(i,e,t)}D.parse=Mi;D.compile=Ii;D.tokensToFunction=Hi;D.tokensToRegExp=Di;const{hasOwnProperty:Ki}=Object.prototype,Te=new Map;Te.set("|false",{keys:[],pattern:/(?:)/});function rt(i){try{return decodeURIComponent(i)}catch{return i}}function Wi(i,e,t,r,n){t=!!t;const s=`${i}|${t}`;let o=Te.get(s);if(!o){const l=[];o={keys:l,pattern:D(i,l,{end:t,strict:i===""})},Te.set(s,o)}const c=o.pattern.exec(e);if(!c)return null;const a=Object.assign({},n);for(let l=1;l<c.length;l++){const u=o.keys[l-1],d=u.name,h=c[l];(h!==void 0||!Ki.call(a,d))&&(u.repeat?a[d]=h?h.split(u.delimiter).map(rt):[]:a[d]=h&&rt(h))}return{path:c[0],keys:(r||[]).concat(o.keys),params:a}}function kt(i,e,t,r,n){let s,o,c=0,a=i.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(i===l)return{done:!0};const u=i.__children=i.__children||i.children;if(!s&&(s=Wi(a,e,!u,r,n),s))return{done:!1,value:{route:i,keys:s.keys,params:s.params,path:s.path}};if(s&&u)for(;c<u.length;){if(!o){const h=u[c];h.parent=i;let p=s.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=kt(h,e.substr(p),t,s.keys,s.params)}const d=o.next(l);if(!d.done)return{done:!1,value:d.value};o=null,c++}return{done:!0}}}}function Gi(i){if(L(i.route.action))return i.route.action(i)}function Ji(i,e){let t=e;for(;t;)if(t=t.parent,t===i)return!0;return!1}function Xi(i){let e=`Path '${i.pathname}' is not properly resolved due to an error.`;const t=(i.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Qi(i,e){const{route:t,path:r}=e;if(t&&!t.__synthetic){const n={path:r,route:t};if(!i.chain)i.chain=[];else if(t.parent){let s=i.chain.length;for(;s--&&i.chain[s].route&&i.chain[s].route!==t.parent;)i.chain.pop()}i.chain.push(n)}}class K{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Gi,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){Ye(e);const t=[...oe(e)];this.root.__children=t}addRoutes(e){return Ye(e),this.root.__children.push(...oe(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,g(e)?{pathname:e}:e),r=kt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),n=this.resolveRoute;let s=null,o=null,c=t;function a(l,u=s.value.route,d){const h=d===null&&s.value.route;return s=o||r.next(h),o=null,!l&&(s.done||!Ji(u,s.value.route))?(o=s,Promise.resolve(N)):s.done?Promise.reject(Et(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,s.value),Qi(c,s.value),Promise.resolve(n(c)).then(p=>p!=null&&p!==N?(c.result=p.result||p,c):a(l,u,p)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const u=Xi(c);if(l?console.warn(u):l=new Error(u),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,r=this.constructor.__createUrl(e,t).href;if(r.slice(0,t.length)===t)return r.slice(t.length)}}K.pathToRegexp=D;const{pathToRegexp:nt}=K,st=new Map;function Tt(i,e,t){const r=e.name||e.component;if(r&&(i.has(r)?i.get(r).push(e):i.set(r,[e])),Array.isArray(t))for(let n=0;n<t.length;n++){const s=t[n];s.parent=e,Tt(i,s,s.__children||s.children)}}function ot(i,e){const t=i.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function at(i){let e=i.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Zi(i,e={}){if(!(i instanceof K))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(r,n)=>{let s=ot(t,r);if(!s&&(t.clear(),Tt(t,i.root,i.root.__children),s=ot(t,r),!s))throw new Error(`Route "${r}" not found`);let o=st.get(s.fullPath);if(!o){let a=at(s),l=s.parent;for(;l;){const p=at(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const u=nt.parse(a),d=nt.tokensToFunction(u),h=Object.create(null);for(let p=0;p<u.length;p++)g(u[p])||(h[u[p].name]=!0);o={toPath:d,keys:h},st.set(a,o),s.fullPath=a}let c=o.toPath(n,e)||"/";if(e.stringifyQueryParams&&n){const a={},l=Object.keys(n);for(let d=0;d<l.length;d++){const h=l[d];o.keys[h]||(a[h]=n[h])}const u=e.stringifyQueryParams(a);u&&(c+=u.charAt(0)==="?"?u:`?${u}`)}return c}}let lt=[];function Yi(i){lt.forEach(e=>e.inactivate()),i.forEach(e=>e.activate()),lt=i}const er=i=>{const e=getComputedStyle(i).getPropertyValue("animation-name");return e&&e!=="none"},tr=(i,e)=>{const t=()=>{i.removeEventListener("animationend",t),e()};i.addEventListener("animationend",t)};function ct(i,e){return i.classList.add(e),new Promise(t=>{if(er(i)){const r=i.getBoundingClientRect(),n=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;i.setAttribute("style",`position: absolute; ${n}`),tr(i,()=>{i.classList.remove(e),i.removeAttribute("style"),t()})}else i.classList.remove(e),t()})}const ir=256;function Ae(i){return i!=null}function rr(i){const e=Object.assign({},i);return delete e.next,e}function m({pathname:i="",search:e="",hash:t="",chain:r=[],params:n={},redirectFrom:s,resolver:o},c){const a=r.map(l=>l.route);return{baseUrl:o&&o.baseUrl||"",pathname:i,search:e,hash:t,routes:a,route:c||a.length&&a[a.length-1]||null,params:n,redirectFrom:s,getUrl:(l={})=>ee(E.pathToRegexp.compile(Lt(a))(Object.assign({},n,l)),o)}}function ht(i,e){const t=Object.assign({},i.params);return{redirect:{pathname:e,from:i.pathname,params:t}}}function nr(i,e){e.location=m(i);const t=i.chain.map(r=>r.route).indexOf(i.route);return i.chain[t].element=e,e}function Y(i,e,t){if(L(i))return i.apply(t,e)}function dt(i,e,t){return r=>{if(r&&(r.cancel||r.redirect))return r;if(t)return Y(t[i],e,t)}}function sr(i,e){if(!Array.isArray(i)&&!ce(i))throw new Error(v(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${i}`));e.__children=[];const t=oe(i);for(let r=0;r<t.length;r++)$t(t[r]),e.__children.push(t[r])}function X(i){if(i&&i.length){const e=i[0].parentNode;for(let t=0;t<i.length;t++)e.removeChild(i[t])}}function ee(i,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(i.replace(/^\//,""),t).pathname:i}function Lt(i){return i.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class E extends K{constructor(e,t){const r=document.head.querySelector("base"),n=r&&r.getAttribute("href");super([],Object.assign({baseUrl:n&&K.__createUrl(n,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const s=E.NavigationTrigger;E.setTriggers.apply(E,Object.keys(s).map(o=>s[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=m({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let r=Promise.resolve();L(t.children)&&(r=r.then(()=>t.children(rr(e))).then(s=>{!Ae(s)&&!L(t.children)&&(s=t.children),sr(s,t)}));const n={redirect:s=>ht(e,s),component:s=>{const o=document.createElement(s);return this.__createdByRouter.set(o,!0),o}};return r.then(()=>{if(this.__isLatestRender(e))return Y(t.action,[e,n],t)}).then(s=>{if(Ae(s)&&(s instanceof HTMLElement||s.redirect||s===N))return s;if(g(t.redirect))return n.redirect(t.redirect);if(t.bundle)return Ti(t.bundle).then(()=>{},()=>{throw new Error(v(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(s=>{if(Ae(s))return s;if(g(t.component))return n.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const r=++this.__lastStartedRenderId,n=Object.assign({search:"",hash:""},g(e)?{pathname:e}:e,{__renderId:r});return this.ready=this.resolve(n).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const o=this.__previousContext;if(s===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=m(s),t&&this.__updateBrowserHistory(s,r===1),z("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,o),this.__previousContext=s,this.location;this.__addAppearingContent(s,o);const c=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,o),c.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(r===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(n),X(this.__outlet&&this.__outlet.children),this.location=m(Object.assign(n,{resolver:this})),z("error",Object.assign({router:this,error:s},n)),s}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(r=>{const s=r!==t?r:e,c=ee(Lt(r.chain),r.resolver)===r.pathname,a=(l,u=l.route,d)=>l.next(void 0,u,d).then(h=>h===null||h===N?c?l:u.parent!==null?a(l,u.parent,h):h:h);return a(r).then(l=>{if(l===null||l===N)throw Et(s);return l&&l!==N&&l!==r?this.__fullyResolveChain(s,l):this.__amendWithOnBeforeCallbacks(r)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(nr(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(r=>this.__findComponentContextAfterAllRedirects(r)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(v(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${ki(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},r=t.chain||[],n=e.chain;let s=Promise.resolve();const o=()=>({cancel:!0}),c=a=>ht(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,r.length){for(let a=0;a<Math.min(r.length,n.length)&&!(r[a].route!==n[a].route||r[a].path!==n[a].path&&r[a].element!==n[a].element||!this.__isReusableElement(r[a].element,n[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=n.length===r.length&&e.__divergedChainIndex==n.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=n.length-1;a>=0;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},r[a]);for(let a=0;a<n.length;a++)s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},n[a]),r[a].element.location=m(e,r[a].route)}else for(let a=r.length-1;a>=e.__divergedChainIndex;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},r[a])}if(!e.__skipAttach)for(let a=0;a<n.length;a++)a<e.__divergedChainIndex?a<r.length&&r[a].element&&(r[a].element.location=m(e,r[a].route)):(s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},n[a]),n[a].element&&(n[a].element.location=m(e,n[a].route)));return s.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,r,n){const s=m(t);return e.then(o=>{if(this.__isLatestRender(t))return dt("onBeforeLeave",[s,r,this],n.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,r,n){const s=m(t,n.route);return e.then(o=>{if(this.__isLatestRender(t))return dt("onBeforeEnter",[s,r,this],n.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,r){if(t>ir)throw new Error(v(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:r})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(v(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:r=""},n){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==r){const s=n?"replaceState":"pushState";window.history[s](null,document.title,e+t+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let r=this.__outlet;for(let n=0;n<e.__divergedChainIndex;n++){const s=t&&t.chain[n].element;if(s)if(s.parentNode===r)e.chain[n].element=s,r=s;else break}return r}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const r=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(r.children).filter(s=>this.__addedByRouter.get(s)&&s!==e.result);let n=r;for(let s=e.__divergedChainIndex;s<e.chain.length;s++){const o=e.chain[s].element;o&&(n.appendChild(o),this.__addedByRouter.set(o,!0),n===r&&this.__appearingContent.push(o),n=o)}}__removeDisappearingContent(){this.__disappearingContent&&X(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(X(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let r=t.chain.length-1;r>=e.__divergedChainIndex&&this.__isLatestRender(e);r--){const n=t.chain[r].element;if(n)try{const s=m(e);Y(n.onAfterLeave,[s,{},t.resolver],n)}finally{this.__disappearingContent.indexOf(n)>-1&&X(n.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const r=e.chain[t].element||{},n=m(e,e.chain[t].route);Y(r.onAfterEnter,[n,{},e.resolver],r)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],r=(this.__appearingContent||[])[0],n=[],s=e.chain;let o;for(let c=s.length;c>0;c--)if(s[c-1].route.animate){o=s[c-1].route.animate;break}if(t&&r&&o){const c=ce(o)&&o.leave||"leaving",a=ce(o)&&o.enter||"entering";n.push(ct(t,c)),n.push(ct(r,a))}return Promise.all(n).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:r,hash:n}=e?e.detail:window.location;g(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:r,hash:n},!0))}static setTriggers(...e){Yi(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Zi(this)),ee(this.__urlForName(e,t),this)}urlForPath(e,t){return ee(E.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:r,hash:n}=g(e)?this.__createUrl(e,"http://a"):e;return z("go",{pathname:t,search:r,hash:n})}}const or=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,te=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ar(){function i(){return!0}return xt(i)}function lr(){try{return cr()?!0:hr()?te?!dr():!ar():!1}catch{return!1}}function cr(){return localStorage.getItem("vaadin.developmentmode.force")}function hr(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function dr(){return!!(te&&Object.keys(te).map(e=>te[e]).filter(e=>e.productionMode).length>0)}function xt(i,e){if(typeof i!="function")return;const t=or.exec(i.toString());if(t)try{i=new Function(t[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return i(e)}window.Vaadin=window.Vaadin||{};const ut=function(i,e){if(window.Vaadin.developmentMode)return xt(i,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=lr());function ur(){}const pr=function(){if(typeof ut=="function")return ut(ur)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});pr();E.NavigationTrigger={POPSTATE:Ni,CLICK:xi};var fr=Object.defineProperty,mr=Object.getOwnPropertyDescriptor,Ut=(i,e,t,r)=>{for(var n=r>1?void 0:r?mr(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&fr(e,t,n),n};let he=class extends _{constructor(){super(...arguments),this.router=new E,this.routes=[{path:"/",redirect:"/timer"},{name:"timer",path:"/timer",component:"clk-timer-page",action:()=>void fe(()=>import("./timer-page-element-a70f11f6.js"),[])},{name:"alarm",path:"/alarm",component:"clk-alarm-page",action:()=>void fe(()=>import("./alarm-page-element-d8ea66cc.js"),[])},{name:"stopwatch",path:"/stopwatch",component:"clk-stopwatch-page",action:()=>void fe(()=>import("./stopwatch-page-element-277462df.js"),[])},{path:"(.*)",redirect:"/"}],this.sidebarItems=[{icon:"https://icons.getbootstrap.com/assets/icons/hourglass.svg",label:"Timer",path:()=>this.router.urlForName("timer")},{icon:"https://icons.getbootstrap.com/assets/icons/bell.svg",label:"Alarm",path:()=>this.router.urlForName("alarm")},{icon:"https://icons.getbootstrap.com/assets/icons/stopwatch.svg",label:"Stopwatch",path:()=>this.router.urlForName("stopwatch")}]}connectedCallback(){super.connectedCallback(),this.router.baseUrl="/clock/1.0.0/",this.router.setRoutes(this.routes),this.router.setOutlet(this)}render(){return O`
		<aside>
			<clk-sidebar-element
				.items=${this.sidebarItems}
			></clk-sidebar-element>
		</aside>

		<section>
			<slot></slot>
		</section>
		`}};he.styles=[bt,b`
		:host {
			display: grid;
			grid-template-columns: 200px 1fr;
		}
		aside {
			display: grid;
			background-color: var(--surface);
		}
		section {
			display: grid;
		}
		`];Ut([Ri("router")],he.prototype,"router",2);he=Ut([H("clock-app")],he);const gr="",vr=(i,e)=>{e.forEach(t=>{if(document.head.querySelector("#"+t.id))return;const r=document.createElement("link");r.id=t.id,r.rel="stylesheet",r.href=(i+"/"+t.href).replaceAll(location.origin,"").replaceAll(/\/+/g,"/").replaceAll(/\/$/g,""),document.head.appendChild(r)})};vr(gr+"/root-design/1.0.0/",[{id:"gate-style-index",href:"tokens/index.css"},{id:"gate-style-tokens-all",href:"tokens/tokens-all.css"},{id:"gate-style-tokens-extra",href:"tokens/tokens-extra.css"},{id:"gate-style-tokens-font",href:"tokens/tokens-font.css"},{id:"gate-style-tokens-dark",href:"tokens/tokens-dark.css"},{id:"gate-style-tokens-light",href:"tokens/tokens-light.css"}]);export{H as a,bt as e,b as i,_ as s,O as x};
