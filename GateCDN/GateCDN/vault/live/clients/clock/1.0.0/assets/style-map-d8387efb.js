import{f as c,g as d,h as b,T as m,e as h,i as g,a as l,s as x,x as f,b as y}from"./index-bdd84ae0.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=c(class extends d{constructor(o){var t;if(super(o),o.type!==b.ATTRIBUTE||o.name!=="class"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){var i,e;if(this.it===void 0){this.it=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!(!((i=this.nt)===null||i===void 0)&&i.has(r))&&this.it.add(r);return this.render(t)}const n=o.element.classList;this.it.forEach(r=>{r in t||(n.remove(r),this.it.delete(r))});for(const r in t){const s=!!t[r];s===this.it.has(r)||!((e=this.nt)===null||e===void 0)&&e.has(r)||(s?(n.add(r),this.it.add(r)):(n.remove(r),this.it.delete(r)))}return m}});var w=Object.defineProperty,T=Object.getOwnPropertyDescriptor,p=(o,t,i,e)=>{for(var n=e>1?void 0:e?T(t,i):t,r=o.length-1,s;r>=0;r--)(s=o[r])&&(n=(e?s(t,i,n):s(n))||n);return e&&n&&w(t,i,n),n};let a=class extends x{constructor(){super(...arguments),this.type="",this.size="medium",this.shape="pill",this.variant="primary"}render(){return f`
		<mm-ripple
			?disabled=${this.disabled}
			class=${u({[this.type]:!0,[this.size]:!0,[this.shape]:!0,[this.variant]:!0})}
		>
			<button
				?disabled=${!!this.disabled}
				part="base"
				class=${u({base:!0,[this.type]:!0,[this.size]:!0,[this.shape]:!0,[this.variant]:!0})}
			>
				<slot name="prefix"></slot>
				<slot></slot>
				<slot name="suffix"></slot>
			</button>
		</mm-ripple>
		`}};a.styles=[h,g`
		:host {
			--color-button-bg: 0 0 0;
			--color-button-txt: 0 0 0;

			position: relative;
			display: block;
			width: fit-content;
			height: fit-content;
			text-align: initial;
		}
		:host([disabled=""]) {
			opacity: 0.5;
			pointer-events: none;
		}
		button {
			all: unset;
			position: relative;
			display: grid;
			grid-template-areas: "prefix text suffix";
			grid-template-columns: auto 1fr auto;
			place-items: center;
			padding-inline: var(--spacing-xxl);
			background-color: var(--color-button-bg);
			color: var(--color-button-txt);
			cursor: pointer;
		}
		button:focus-visible::after {
			content: '';
			inset: 0;
			position: absolute;
			outline: var(--focus-ring);
			outline-offset: var(--focus-offset);
			transition: var(--focus-transition);
			z-index: var(--focus-index);
			border-radius: inherit;
		}
		button:active::after {
			outline-offset: 1px;
		}
		button.icon {
			padding: 0;
			aspect-ratio: 1;
		}
		button.x-small  {
			height: 20px;
			padding-inline: 12px;
			font-size: 12px;
		}
		button.small {
			height: 30px;
			padding-inline: 18px;
			font-size: 14px;
		}
		button.medium {
			height: 40px;
			padding-inline: 24px;
			font-size: 16px;
		}
		button.large {
			height: 50px;
			padding-inline: 24px;
			font-size: 18px;
		}
		button.x-large {
			height: 60px;
			padding-inline: 24px;
			font-size: 20px;
		}
		button.sharp,
		mm-ripple.sharp {
			border-radius: var(--border-radius-xs);
		}
		button.rounded,
		mm-ripple.rounded {
			border-radius: var(--border-radius-m);
		}
		button.pill,
		mm-ripple.pill {
			border-radius: var(--border-pill);
		}
		mm-ripple.primary {
			--ripple-bg: var(--on-primary-press);
			--color-button-bg: var(--primary);
			--color-button-txt: var(--on-primary);
		}
		mm-ripple.primary-variant {
			--ripple-bg: var(--on-primary-container-press);
			--color-button-bg: var(--primary-container);
			--color-button-txt: var(--on-primary-container);
		}
		mm-ripple.secondary {
			--ripple-bg: var(--on-secondary-container-press);
			--color-button-bg: var(--secondary-container);
			--color-button-txt: var(--on-secondary-container);
		}
		mm-ripple.tertiary {
			--ripple-bg: var(--on-tertiary-container-press);
			--color-button-bg: var(--tertiary-container);
			--color-button-txt: var(--on-tertiary-container);
		}
		mm-ripple.neutral {
			--ripple-bg: var(--on-surface-variant-press);
			--color-button-bg: var(--surface-variant);
			--color-button-txt: var(--on-surface-variant);
		}
		mm-ripple.error {
			--ripple-bg: var(--on-error-container-press);
			--color-button-bg: var(--error-container);
			--color-button-txt: var(--on-error-container);
		}
		mm-ripple.warning {
			--ripple-bg: var(--on-warning-press);
			--color-button-bg: var(--warning);
			--color-button-txt: var(--on-warning);
		}
		mm-ripple.success {
			--ripple-bg: var(--on-success-container-press);
			--color-button-bg: var(--success-container);
			--color-button-txt: var(--on-success-container);
		}
		mm-ripple.text {
			--ripple-bg: var(--primary-press);
			--color-button-bg: none;
			--color-button-txt: var(--primary);
		}
		mm-ripple.outline {
			--ripple-bg: var(--primary-press);
			--color-button-txt: var(--primary);
		}
		button.outline {
			outline: 1px solid var(--outline);
		}
		mm-ripple.elevated {
			--ripple-bg: var(--primary-press);
			--color-button-txt: var(--primary);
			backdrop-filter: blur(2px);
		}
		button.text,
		button.outline,
		button.elevated {
			transition: box-shadow var(--transition-fast) ease-in-out;
		}
		button.elevated {
			box-shadow: var(--box-shadow-s);
		}
		button.text:hover,
		button.outline:hover,
		button.elevated:hover {
			box-shadow: var(--box-shadow-m);
		}
		::slotted(*) {
			grid-area: text;
		}
		slot[name=prefix]::slotted(*) {
			grid-area: prefix;
			padding-right: 8px;
			margin-left: -8px;
		}
		slot[name=suffix]::slotted(*) {
			grid-area: suffix;
			padding-left: 8px;
			margin-right: -8px;
		}
		`];p([l({type:String})],a.prototype,"type",2);p([l()],a.prototype,"size",2);p([l()],a.prototype,"shape",2);p([l()],a.prototype,"variant",2);p([l({type:Boolean,reflect:!0})],a.prototype,"disabled",2);a=p([y("mm-button")],a);const $=(o,t=1e3)=>{let i,e=new Date().getTime()+t;const n=()=>{e+=t,i=setTimeout(n,e-new Date().getTime()),o()},r=()=>clearTimeout(i);return i=setTimeout(n,e-new Date().getTime()),{cancel:r}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v="important",z=" !"+v,j=c(class extends d{constructor(o){var t;if(super(o),o.type!==b.ATTRIBUTE||o.name!=="style"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,i)=>{const e=o[i];return e==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`},"")}update(o,[t]){const{style:i}=o.element;if(this.ut===void 0){this.ut=new Set;for(const e in t)this.ut.add(e);return this.render(t)}this.ut.forEach(e=>{t[e]==null&&(this.ut.delete(e),e.includes("-")?i.removeProperty(e):i[e]="")});for(const e in t){const n=t[e];if(n!=null){this.ut.add(e);const r=typeof n=="string"&&n.endsWith(z);e.includes("-")||r?i.setProperty(e,r?n.slice(0,-11):n,r?v:""):i[e]=n}}return m}});export{j as a,u as o,$ as r};
