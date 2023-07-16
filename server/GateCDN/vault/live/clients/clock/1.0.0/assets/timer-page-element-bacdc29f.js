import{o as D,r as N,a as q}from"./style-map-58f0ad24.js";import{n as U,e as _,i as g,a as m,t as w,s as T,x as d,b as C,c as E,o as z,d as M}from"./index-adb65f2a.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=({finisher:e,descriptor:t})=>(i,s)=>{var o;if(s===void 0){const r=(o=i.originalKey)!==null&&o!==void 0?o:i.key,a=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(i.key)}:{...i,key:r};return e!=null&&(a.finisher=function(n){e(n,r)}),a}{const r=i.constructor;t!==void 0&&Object.defineProperty(i,s,t(s)),e==null||e(r,s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function I(e,t){return F({descriptor:i=>{const s={get(){var o,r;return(r=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(t){const o=typeof i=="symbol"?Symbol():"__"+i;s.get=function(){var r,a;return this[o]===void 0&&(this[o]=(a=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(e))!==null&&a!==void 0?a:null),this[o]}}return s}})}const K=()=>{if("Notification"in window&&Notification.permission!=="granted"&&Notification.permission!=="denied")return Notification.requestPermission()},A=(e,t)=>{"Notification"in window&&(Notification.permission==="granted"?new Notification(e,{body:t}):Notification.permission!=="denied"&&Notification.requestPermission().then(i=>{i==="granted"&&A(e,t)}))},O=e=>(Array.isArray(e)||(e=[e]),e!=null&&e.length?e.some(t=>{let i=t.matches(":focus-visible");return i||(i=O(Array.from(t.children)),i)?!0:(t.shadowRoot&&(i=O(Array.from(t.shadowRoot.children))),i)}):!1),P=function(e){let t=U(5),i=()=>{},s=()=>{};const o=new Promise((r,a)=>{i=n=>{this.done=!0,r(n)},s=n=>{this.done=!0,a(n)}});return Object.assign(o,{id:t,done:!1,resolve:i,reject:s}),e(i,s),o};P.resolve=e=>{let t=new P(()=>{});return t.resolve(e),t};const B=()=>new Promise(e=>requestAnimationFrame(e));var Q=Object.defineProperty,J=Object.getOwnPropertyDescriptor,k=(e,t,i,s)=>{for(var o=s>1?void 0:s?J(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&Q(t,i,o),o};let u=class extends T{constructor(){super(...arguments),this.complete=P.resolve()}updated(e){var t,i,s;super.updated(e),e.has("config")&&((t=this.dialog)!=null&&t.open||(this.modal?(i=this.dialog)==null||i.showModal():(s=this.dialog)==null||s.show()))}createConfig(e){return this.complete=new P(()=>{}),{actions:t=>({template:async i=>{var s,o;const r=await e(this)??{},a=new Proxy(r,{set:(f,b,S)=>(f[b]!==S&&(f[b]=S,this.requestUpdate()),!0)}),n=t(this,a)??{};await((s=i.initialize)==null?void 0:s.call(i,this,a,n));const l=()=>i.render(this,a,n),c=i.style;this.config={render:l,style:c??g``},this.requestUpdate(),await this.updateComplete,(o=i.afterConnected)==null||o.call(i,this,a,n)}})}}close(e){var t;(t=this.dialog)==null||t.close(e),this.complete.resolve(e)}handleClose(e){const t=new CloseEvent("close",{...e});this.dispatchEvent(t),this.remove()}handleMousedown(e){if(this.closeOnBlur&&!e.composedPath().some(t=>t===this.innerDialog))return this.dialog.close()}render(){var e,t;return d`
		<style>${(e=this.config)==null?void 0:e.style}</style>

		<dialog part="dialog"
			class="base"
			@close=${i=>this.handleClose(i)}
			@mousedown=${this.handleMousedown}
		>
			<div id="dialog" class="dialog host">
				${(t=this.config)==null?void 0:t.render()}
			</div>
		</dialog>
		`}};u.styles=[_,g`
		:host {
			display: contents;
			--mm-dialog-color: var(--on-surface);
			--mm-dialog-background-color: var(--surface);
			--mm-dialog-border-color: var(--outline-decoration-secondary-gradient);
		}
		.base {
			padding: 0px;
			overflow: hidden;
			background: transparent;
			border: none;
			outline: none;
		}
		:where(.dialog) {
			display: grid;
			grid-auto-rows: max-content;
			height: 100%;
			gap: 8px;
			padding: 6px;
			border: 2px solid var(--mm-dialog-border-color);
			border-radius: 16px;
			color: var(--mm-dialog-color);
			background-color: var(--mm-dialog-background-color);
		}
		`];k([m({type:Boolean})],u.prototype,"modal",2);k([m({type:Boolean})],u.prototype,"closeOnBlur",2);k([I("#dialog")],u.prototype,"innerDialog",2);k([I("dialog")],u.prototype,"dialog",2);k([I("input")],u.prototype,"input",2);k([w()],u.prototype,"config",2);u=k([C("mm-dialog")],u);var X=Object.defineProperty,G=Object.getOwnPropertyDescriptor,v=(e,t,i,s)=>{for(var o=s>1?void 0:s?G(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&X(t,i,o),o};let h=class extends T{constructor(){super(...arguments),this.label="",this.value="",this.placeholder="",this.size="medium",this.shape="sharp",this.hasKeyboardFocus=!1,this.handleFocus=()=>{this.hasKeyboardFocus=O(this.inputQry)},this.handleBlur=()=>{this.hasKeyboardFocus=!1},this.handleInput=e=>{this.value=e.target.value}}get classes(){return{[this.size]:!0,[this.shape]:!0,label:!!this.label,filled:this.value||this.placeholder,placeholder:!this.value&&this.placeholder}}connectedCallback(){super.connectedCallback(),this.autoFocus&&B().then(()=>this.inputQry.focus())}handleChange(){this.value=this.inputQry.value,E(this,"change")}render(){return d`
		<div class=${D({base:!0,...this.classes})}>
			<label class=${D({input__base:!0,...this.classes})}>
				<input
					.value=${this.value}
					.placeholder=${this.placeholder}
					@focus=${this.handleFocus}
					@blur=${this.handleBlur}
					@input=${this.handleInput}
					@change=${this.handleChange}
				/>
				<span>${this.label}</span>
			</label>
		</div>
		`}};h.styles=[_,g`
		:host {
			display: flex;
		}
		.base {
			position: relative;
			display: grid;
			width: 100%;
		}
		.sharp {
			border-radius: var(--border-radius-xs);
		}
		.rounded  {
			border-radius: var(--border-radius-m);
		}
		.pill  {
			border-radius: var(--border-pill);
		}

		.small {
			height: 30px;
			font-size: 12px;
		}
		.small span {
			top: 8px;
		}
		label.small:focus-within span,
		label.small.filled span {
			top: 4px;
			font-size: 8px;
		}
		.small.label input {
			padding-top: 12px;
		}

		.medium {
			height: 40px;
			font-size: 14px;
		}
		.medium span {
			top: 12px;
		}
		label.medium:focus-within span,
		label.medium.filled span {
			top: 5px;
			font-size: 10px;
		}
		.medium.label input {
			padding-top: 14px;
		}

		.large {
			height: 50px;
			font-size: 16px;
		}
		.large span {
			top: 16px;
		}
		label.large:focus-within span,
		label.large.filled span {
			top: 6px;
			font-size: 12px;
		}
		.large.label input {
			padding-top: 18px;
		}

		label {
			position: relative;
			display: grid;
			overflow: hidden;
			background-color: rgb(var(--color-on-surface) / .04);
		}
		label:focus-within span,
		label.filled span {
			color: var(--primary);
		}
		span {
			line-height: 1em;
			pointer-events: none;
			position: absolute;
			left: 0px;
			padding-inline: 12px;
			color: rgb(var(--color-on-surface) / 0.6);
			transition: color 0.2s ease 0s, font-size 0.2s ease 0s, top 0.2s ease 0s;
		}
		label::before {
			content: '';
			position: absolute;
			bottom: 0px;
			height: 1px;
			width: 100%;
			background-color: rgb(var(--color-on-surface) / 0.6)
		}
		label::after {
			content: '';
			position: absolute;
			left: 0px;
			bottom: 0px;
			height: 1px;
			background-color: var(--primary);
			width: 100%;
			transform-origin: center bottom;
			transform: scaleX(0);
			transition: transform 0.3s ease 0s;
		}
		label:focus-within::after {
			transform: scaleX(1);
		}
		input {
			all: unset;
			padding-inline: 12px;
			line-height: 1em;
			color: rgb(var(--color-on-surface) / 0.87);
			caret-color: var(--primary);
		}
		.placeholder input {
			color: rgb(var(--color-on-surface) / 0.3);
		}

		input::-moz-selection {
			color: var(--on-primary);
			background: var(--primary);
		}
		input::selection {
			color: var(--on-primary);
			background: var(--primary);
		}
	`];v([m()],h.prototype,"label",2);v([m()],h.prototype,"value",2);v([m()],h.prototype,"placeholder",2);v([m({reflect:!0})],h.prototype,"size",2);v([m({reflect:!0})],h.prototype,"shape",2);v([m({type:Boolean,reflect:!0,attribute:"auto-focus"})],h.prototype,"autoFocus",2);v([w()],h.prototype,"hasKeyboardFocus",2);v([I("input")],h.prototype,"inputQry",2);h=v([C("mm-input")],h);const H=e=>(...t)=>e,V=(e=300,t=H)=>{const i=new Map;let s;return(...o)=>(clearTimeout(s),s=setTimeout(async()=>{const r=await t(...o);i.forEach(a=>a(r)),i.clear()},e,...o),r=>i.set(r.toString(),r))};class W{constructor({host:t,listeners:i}){this.listeners=new Map,this.listenerRefs=new Map,this.hasEventListener=s=>this.listeners.has(s),this.getEventListener=s=>this.listeners.get(s),this.addEventListener=(s,o,r,a)=>{var n,l;const c=typeof a!="boolean"&&(a==null?void 0:a.id)||U(10);return(l=(n=this.host)==null?void 0:n.updateComplete)==null||l.then(f=>{const b=[s,o,r];this.listeners.set(c,b),this.listenerRefs.set(r,c),s==null||s.addEventListener(o,r,a)}),c},this.removeEventListener=(...s)=>{let o=s.map(a=>typeof a=="function"?this.listenerRefs.get(a):a);const r=a=>{if(!this.listeners.has(a))return;const[n,l,c]=this.listeners.get(a);n==null||n.removeEventListener(l,c),this.listeners.delete(a),this.listenerRefs.delete(c)};o.forEach(a=>a&&r(a))},this.removeAllListeners=()=>{const s=Array.from(this.listeners).map(([o])=>o);this.removeEventListener(...s),this.listeners.clear(),this.listenerRefs.clear()},this.host=t,t.addController(this),this.initialListeners=i}async hostConnected(){var t;await this.host.updateComplete,(t=this.initialListeners)==null||t.forEach(async({target:i,type:s,listener:o,options:r})=>{const a=await(typeof i=="function"?i():i),n=typeof a=="function"?a():a;n&&this.addEventListener(n,s,o,r)})}hostDisconnected(){this.removeAllListeners()}}class Y{constructor({host:t,keylist:i,state:s,listener:o,target:r,eventType:a}){this.baseListenerId="baseListener",this.eventType="keydown",this.enhanceListener=(n,l,c)=>f=>{const b=this.validateKey(f,l);b&&(n==null||n(f,b,c))},this.validateModifiers=(n,l)=>l===void 0?!0:l.length===0?!(n.ctrlKey||n.altKey||n.shiftKey):l.some(c=>c.every(f=>n[f+"Key"])),(this.host=t).addController(this),this.eventCtrl=new W({host:t}),this.target=r||t,this.state=(s==null?void 0:s())??{},this.keylist=i??[],this.baseListener=o,a&&(this.eventType=a)}async hostConnected(){await this.host.updateComplete,this.baseListener&&this.addBaseListener(this.baseListener),this.addKeyListeners(...this.keylist)}hostDisconnected(){this.eventCtrl.removeAllListeners()}addBaseListener(t){this.eventCtrl.hasEventListener(this.baseListenerId)&&this.eventCtrl.removeEventListener(this.baseListenerId);const i=typeof this.target=="function"?this.target():this.target,s=this.eventType,o=this.enhanceListener(t,this.keylist,this.state);this.eventCtrl.addEventListener(i,s,o)}addKeyListeners(...t){t.forEach(i=>{if(!i.listener)return;let s=i.target||this.target,o=typeof s=="function"?s():s,r,a=this.enhanceListener(i.listener,[i],this.state);Array.isArray(i.eventType)?r=i.eventType:r=[i.eventType||this.eventType],r.forEach(n=>this.eventCtrl.addEventListener(o,n,a))})}validateKey(t,i){const s=[t.code,t.key].map(r=>r.toUpperCase());if(!i.length)return{key:t.key};const o=i.find(r=>{let a;Array.isArray(r.key)?a=r.key.map(c=>c.toUpperCase()):a=[r.key.toUpperCase()];const n=s.some(c=>a.includes(c)),l=this.validateModifiers(t,r.modifiers);return n&&l});if(o)return o}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Z(e,t,i){return e?t():i==null?void 0:i()}var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,p=(e,t,i,s)=>{for(var o=s>1?void 0:s?te(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&ee(t,i,o),o};K();let y=class extends T{constructor(){super(...arguments),this.label="",this.time="0:0:0",this.currentTime=this.time,this.fullscreen=!1,this.timerFn=()=>{var a;const[e,t,i]=this.currentTime.split(":").map(n=>parseInt(n)),s=new Date(0,0,0,e,t,i),o=s.getTime()-1e3;if(s.setTime(o),parseInt(s.toTimeString().split(" ").at(0).replaceAll(":",""))===0){this.currentTime=s.toTimeString().split(" ").at(0),(a=this.cancelCountdown)==null||a.call(this),this.cancelCountdown=void 0,this.requestUpdate(),A("Timer Complete!",this.label);return}this.currentTime=s.toTimeString().split(" ").at(0)}}get timePercentage(){const e=new Date(0,0,0,...this.time.split(":").map(n=>parseInt(n))),t=new Date(0,0,0,...this.currentTime.split(":").map(n=>parseInt(n))),i=new Date(0,0,0,0,0,0),s=0,o=(t.getTime()-i.getTime())/1e3,r=(e.getTime()-i.getTime())/1e3,a=(o-s)/(r-s)*100;return isNaN(a)?100:a}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.cancelCountdown)==null||e.call(this)}willUpdate(e){super.willUpdate(e),e.has("time")&&(this.currentTime=this.time)}handleEditClick(){this.editDialog()}getTime(e){const[t,i,s]=e.split(":").map(o=>parseInt(o));return parseInt(new Date(0,0,0,t,i,s).toTimeString().split(" ").at(0).replaceAll(":",""))}handleToggleClick(e){if(e.preventDefault(),e.stopPropagation(),this.cancelCountdown)this.cancelCountdown(),this.cancelCountdown=void 0;else{if(this.getTime(this.time)===0)return;this.getTime(this.currentTime)===0&&(this.currentTime=this.time),this.cancelCountdown=N(this.timerFn).cancel}this.requestUpdate()}handleResetClick(e){e.preventDefault(),e.stopPropagation(),this.currentTime=this.time}handleExpandClick(e){e.preventDefault(),e.stopPropagation(),this.fullscreen=!this.fullscreen,this.updateComplete.then(()=>{var t;this.fullscreen&&((t=this.renderRoot.querySelector("dialog"))==null||t.showModal())})}editDialog(){const e=document.createElement("mm-dialog");return e.modal=!0,e.closeOnBlur=!0,e.createConfig(()=>({label:this.label,time:this.time})).actions((t,i)=>({save:()=>{this.label=i.label,this.time=i.time,E(this,"update"),t.close()},delete:()=>{E(this,"remove"),t.close()}})).template({render:(t,i,s)=>d`
				<div class="header">
					<mm-text type="body-large">
						Edit timer
					</mm-text>

					<mm-button
						type="icon"
						size="small"
						variant="text"
						@click=${s.delete}
					>
						<mm-icon
							style="font-size: 18px;color: var(--error);"
							url="https://icons.getbootstrap.com/assets/icons/trash.svg"
						></mm-icon>
					</mm-button>
				</div>

				<div class="body">
					<clk-time-field
						style="grid-area: time;"
						.value=${i.time}
						@change=${o=>i.time=o.target.value}
					></clk-time-field>
					<mm-icon
						style="grid-area: icon;font-size:18px;"
						url="https://icons.getbootstrap.com/assets/icons/pencil-square.svg"
					></mm-icon>
					<mm-input
						style="grid-area: field;"
						label="Name"
						size="large"
						.value=${i.label}
						@input=${o=>i.label=o.target.value}
					></mm-input>
				</div>

				<div class="footer">
					<mm-button
						size="small"
						shape="rounded"
						@click=${s.save}
					>
						<mm-icon slot="prefix" url="https://icons.getbootstrap.com/assets/icons/save.svg"></mm-icon>
						<mm-text type="body-large">Save</mm-text>
					</mm-button>

					<mm-button
						size="small"
						shape="rounded"
						variant="text"
						@click=${()=>t.close()}
					>
						<mm-icon slot="prefix" url="https://icons.getbootstrap.com/assets/icons/x-lg.svg"></mm-icon>
						<mm-text type="body-large">Cancel</mm-text>
					</mm-button>
				</div>
				`,style:g`
				dialog::backdrop {
					backdrop-filter: blur(1px);
				}
				.base {
					outline: none;
				}
				.host {
					display: grid;
					grid-template-rows: auto 1fr;
					border-radius: 8px;
					background-color: rgba(40,40,40,1);
					padding-bottom: 12px;
					border: 1px solid rgb(200 200 200 / 25%);
					gap: 12px;
					font-size: 16px;
				}
				.header {
					display: grid;
					grid-template-columns: 1fr auto;
					align-items: center;
					padding-left: 12px;
				}
				mm-icon {
					pointer-events: none;
				}
				.body {
					display: grid;
					justify-content: center;
					grid-template: "time time" 1fr
										"icon field" auto
										/ auto 1fr;
					padding-inline: 12px;
					align-items: center;
					gap: 8px;
				}
				.footer {
					display: grid;
					place-items: center;
					grid-template-columns: 1fr 1fr;
					gap: 6px;
					padding-inline: 12px;
					padding-top: 12px;
				}
				`}),this.renderRoot.append(e),e}fullscreenTemplate(){return d`
		<dialog>
			<div class="container fullscreen">
				<div class="header">
					<mm-text></mm-text>
					<mm-button
						type="icon"
						variant="text"
						size="small"
						@click=${this.handleExpandClick}
					>
						<mm-icon
							style="font-size: 18px;"
							url="https://icons.getbootstrap.com/assets/icons/fullscreen-exit.svg"
						></mm-icon>
					</mm-button>
				</div>

				${this.bodyTemplate()}
				${this.footerTemplate()}
			</div>
		</dialog>
		`}bodyTemplate(){return d`
		<div class="body">
			<div class="time-display">
				<clk-progress-ring value=${this.timePercentage}></clk-progress-ring>
				<mm-text type="display-medium">
					${this.currentTime.split(":").map(e=>e.length<2?"0"+e:e).join(":")}
				</mm-text>
			</div>
		</div>
		`}footerTemplate(){return d`
		<div class="footer">
			<mm-button type="icon" size="small" @click=${this.handleToggleClick}>
				<mm-icon
					style=${q({translate:this.cancelCountdown?"":"2px"})}
					url=${this.cancelCountdown?"https://icons.getbootstrap.com/assets/icons/pause-fill.svg":"https://icons.getbootstrap.com/assets/icons/play-fill.svg"}
				></mm-icon>
			</mm-button>
			<mm-button type="icon" size="small" @click=${this.handleResetClick}>
				<mm-icon
					url="https://icons.getbootstrap.com/assets/icons/arrow-counterclockwise.svg"
				></mm-icon>
			</mm-button>
		</div>
		`}render(){return this.fullscreen?this.fullscreenTemplate():d`
		<div class="container" @click=${this.handleEditClick}>
			<div class="header">
				<mm-text>
					${this.label}
				</mm-text>
				<mm-button
					type="icon"
					variant="text"
					size="small"
					@click=${this.handleExpandClick}
				>
					<mm-icon
						style="font-size: 18px;"
						url="https://icons.getbootstrap.com/assets/icons/arrows-fullscreen.svg"
					></mm-icon>
				</mm-button>
			</div>

			${this.bodyTemplate()}
			${this.footerTemplate()}
		</div>
		`}};y.styles=[_,g`
		:host {
			display: grid;
			height: max-content;
    		width: max-content;
		}
		dialog {
			inset: 0;
			background-color: transparent;
			border: none;
			outline: none;
			color: var(--on-background);
			scale: 1.5;
		}
		dialog::backdrop {
			background-color: rgb(40 40 40);
		}
		.container {
			display: grid;
			height: 360px;
			aspect-ratio: 1;
			background-color: rgb(40 40 40);
			border-radius: 6px;
			padding: 8px;
			padding-bottom: 12px;
			transition:
				translate 0.2s ease,
				box-shadow 0.2s ease;
		}
		.container:not(.fullscreen) {
			box-shadow: var(--box-shadow-s);
		}
		.container:not(.fullscreen):hover {
			box-shadow: var(--box-shadow-m);
			translate: 0px -2px;
		}
		.header {
			display: grid;
			grid-template-columns: 1fr auto;
			align-items: center;
			padding-left: 12px;
		}
		.body {
			display: grid;
			place-items: start center;
		}
		.time-display {
			display: grid;
			place-items: center;
		}
		.time-display > * {
			grid-row: 1/2;
			grid-column: 1/2;
		}

		clk-progress-ring {
			--size: 250px;
			--track-width: 18px;
		}
		mm-icon {
			font-size: 22px;
		}
		.footer {
			display: grid;
			grid-auto-flow: column;
			grid-auto-columns: max-content;
			align-items: center;
			justify-content: center;
			gap: 12px;
		}
		`];p([m()],y.prototype,"label",2);p([m()],y.prototype,"time",2);p([w()],y.prototype,"currentTime",2);p([w()],y.prototype,"fullscreen",2);y=p([C("clk-timer")],y);let x=class extends T{constructor(){super(...arguments),this.value=0,this.label=""}willUpdate(e){if(super.willUpdate(e),this.hasUpdated&&e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),i=2*Math.PI*t,s=i-this.value/100*i;this.indicatorOffset=`${s}px`}}render(){return d`
		<div
			part="base"
			class="progress-ring"
			role="progressbar"
			aria-label=${this.label.length>0?this.label:"progress"}
			aria-valuemin="0"
			aria-valuemax="100"
			aria-valuenow="${this.value}"
			style="--percentage: ${this.value/100}"
		>
			<svg class="progress-ring__image">
				<circle class="progress-ring__track"></circle>
				<circle
					class="progress-ring__indicator"
					style="stroke-dashoffset: ${this.indicatorOffset}"
				></circle>
			</svg>
			<span part="label" class="progress-ring__label">
				<slot></slot>
			</span>
		</div>
		`}};x.styles=[_,g`
		:host {
			--size: 128px;
			--track-width: 8px;
			--track-color: var(--surface-variant);
			--indicator-width: var(--track-width);
			--indicator-color: var(--primary);
			display: inline-flex;
		}
		.progress-ring {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			position: relative;
		}
		.progress-ring__image {
			width: var(--size);
			height: var(--size);
			transform: rotate(-90deg);
			transform-origin: 50% 50%;
		}
		.progress-ring__track,
		.progress-ring__indicator {
			--radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
			--circumference: calc(var(--radius) * 2 * 3.141592654);
			fill: none;
			r: var(--radius);
			cx: calc(var(--size) / 2);
			cy: calc(var(--size) / 2);
		}
		.progress-ring__track {
			stroke: var(--track-color);
			stroke-width: var(--track-width);
		}
		.progress-ring__indicator {
			stroke: var(--indicator-color);
			stroke-width: var(--indicator-width);
			stroke-linecap: round;
			transition: 0.35s stroke-dashoffset;
			stroke-dasharray: var(--circumference) var(--circumference);
			stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
		}
		.progress-ring__label {
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			text-align: center;
			user-select: none;
		}
		`];p([m({type:Number,reflect:!0})],x.prototype,"value",2);p([m()],x.prototype,"label",2);p([w()],x.prototype,"indicatorOffset",2);p([I(".progress-ring__indicator")],x.prototype,"indicator",2);x=p([C("clk-progress-ring")],x);let $=class extends T{constructor(){super(...arguments),this.value="0:0:0",this.time=[0,0,0],this.activeIndex=0,this.keyboardUpdating=!1,this.updateLocation=-1,this.startUpdate=V(500,()=>this.updateLocation=-1),this.keyboardCtrl=new Y({host:this,target:this,keylist:[{key:"1"},{key:"2"},{key:"3"},{key:"4"},{key:"5"},{key:"6"},{key:"7"},{key:"8"},{key:"9"},{key:"0"}],listener:e=>{this.startUpdate();const t=(i=1/0)=>{this.updateLocation===-1&&(this.time[this.activeIndex]=0);const o=this.time[this.activeIndex].toString().split(""),r=Math.max(0,Math.abs(this.updateLocation)-1);o[r]=e.key,this.time[this.activeIndex]=Math.min(i,parseInt(o.join(""))),this.updateLocation=Math.max(-2,this.updateLocation-1)};this.activeIndex===0?t(23):(this.activeIndex===1||this.activeIndex===2)&&t(59),this.setTime()}})}willUpdate(e){e.has("time")&&(this.time=(()=>{const t=this.value.split(":");for(;t.length!==3;)t.length>3&&t.pop(),t.length<3&&t.push("0");return[parseInt(t[0]),parseInt(t[1]),parseInt(t[2])]})())}incrementTime(e){e===0?(this.time[e]=this.time[e]+1,this.time[e]>=24&&(this.time[e]=0)):e===1?(this.time[e]=this.time[e]+1,this.time[e]>=60&&(this.time[e]=0)):e===2&&(this.time[e]=this.time[e]+1,this.time[e]>=60&&(this.time[e]=0)),this.selectIndex(e),this.setTime()}decrementTime(e){e===0?(this.time[e]=this.time[e]-1,this.time[e]<0&&(this.time[e]=23)):e===1?(this.time[e]=this.time[e]-1,this.time[e]<0&&(this.time[e]=59)):e===2&&(this.time[e]=this.time[e]-1,this.time[e]<0&&(this.time[e]=59)),this.selectIndex(e),this.setTime()}setTime(){const e=this.value;this.value=this.time.join(":"),this.value!==e&&E(this,"change")}selectIndex(e){this.activeIndex=e}render(){return d`
		<div class="top">
			${z(this.time,(e,t)=>d`
			<mm-button
				type="icon"
				variant="text"
				size="x-small"
				@click=${()=>this.incrementTime(t)}
			>
				<mm-icon
					url="https://icons.getbootstrap.com/assets/icons/chevron-up.svg"
				></mm-icon>
			</mm-button>
			`)}
		</div>

		<div class="middle">
			${z(this.time,(e,t)=>d`
			<mm-text
				tabindex=0
				class=${D({time:!0,active:t===this.activeIndex})}
				type="headline-large"
				@click=${()=>this.selectIndex(t)}
				@focus=${()=>this.selectIndex(t)}
			>
				${e.toString().length<2?"0"+e:e}
			</mm-text>
			${Z(t!==this.time.length-1,()=>d`
			<mm-text type="headline-large">:</mm-text>
			`)}
			`)}
		</div>

		<div class="bottom">
			${z(this.time,(e,t)=>d`
			<mm-button
				type="icon"
				variant="text"
				size="x-small"
				@click=${()=>this.decrementTime(t)}
			>
				<mm-icon
					url="https://icons.getbootstrap.com/assets/icons/chevron-down.svg"
				></mm-icon>
			</mm-button>
			`)}
		</div>
		`}};$.styles=[_,g`
		:host {
			display: grid;
			place-items: center;
			grid-template-rows: auto 1fr auto;
			gap: 4px;
			outline: none;
			--time-gap: 50px;
		}
		.top, .bottom {
			display: grid;
			grid-template-columns: var(--time-gap) var(--time-gap) var(--time-gap);
			gap: 10px;
			justify-items: center;
		}
		.middle {
			display: grid;
			grid-template-columns: var(--time-gap) 10px var(--time-gap) 10px var(--time-gap);
			background-color: rgb(30 30 30 / 75%);
			border-radius: 4px;
			padding: 4px;
			border: 1px solid rgb(200 200 200 / 50%);
		}
		:host(:focus-within) .middle .time.active,
		:host(:focus-within) .middle .time:hover {
			background-color: rgb(50 50 50 / 50%);
		}
		mm-icon {
			pointer-events: none;
		}
		mm-text {
			text-align: center;
			outline: none;
		}
		`];p([m()],$.prototype,"value",2);p([w()],$.prototype,"time",2);p([w()],$.prototype,"activeIndex",2);$=p([C("clk-time-field")],$);const ie=(e,t,i)=>{if(t<0||t>=e.length||i<0||i>=e.length)throw new Error("Invalid index");[e[t],e[i]]=[e[i],e[t]]};class se{constructor(t){this._type=Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/,"$1").toLowerCase()}string(){return this._type==="string"}number(){return this._type==="number"}array(){return this._type==="array"}object(){return this._type==="object"}symbol(){return this._type==="symbol"}}const oe=function(e){return new se(e)},R=(e,t)=>(i,s,o)=>{const r=i.connectedCallback,a=i.disconnectedCallback,n=oe(e).string();i.connectedCallback=function(){if(r==null||r.call(this),n){this.addEventListener(e,o.value,t);return}for(let l=0;l<e.length;l++){const c=e[l]||"";this.addEventListener(c,o.value,t)}},i.disconnectedCallback=function(){if(a==null||a.call(this),n){this.removeEventListener(e,o.value);return}for(let l=0;l<e.length;l++){const c=e[l]||"";this.removeEventListener(c,o.value)}}};var re=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,j=(e,t,i,s)=>{for(var o=s>1?void 0:s?ae(t,i):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&re(t,i,o),o};let L=class extends T{constructor(){super(...arguments),this.timers=JSON.parse(localStorage.getItem("clk-timers")??"[]")}handleUpdate(e){const t=e.composedPath().at(0),i=this.timers.find(s=>s.id===t.id);i&&(i.label=t.label,i.time=t.time,this.updateLocalStorage())}handleRemove(e){const t=e.composedPath().at(0),i=this.timers.find(s=>s.id===t.id);if(i){const s=this.timers.indexOf(i);this.timers.splice(s,1),this.updateLocalStorage(),this.requestUpdate()}}updateLocalStorage(){localStorage.setItem("clk-timers",JSON.stringify(this.timers))}newDialog(){const e=document.createElement("mm-dialog");e.modal=!0,e.closeOnBlur=!0,e.createConfig(()=>({label:"",time:"0:0:0"})).actions((t,i)=>({save:()=>{const s={id:M(),label:i.label,time:i.time};this.timers.push(s),this.updateLocalStorage(),this.requestUpdate(),t.close()}})).template({render:(t,i,s)=>d`
				<div class="header">
					<mm-text>
						Add new timer
					</mm-text>
				</div>

				<div class="body">
					<clk-time-field
						style="grid-area: time;"
						.value=${i.time}
						@change=${o=>i.time=o.target.value}
					></clk-time-field>
					<mm-icon
						style="grid-area: icon;font-size:18px;"
						url="https://icons.getbootstrap.com/assets/icons/pencil-square.svg"
					></mm-icon>
					<mm-input
						style="grid-area: field;"
						label="Name"
						size="large"
						.value=${i.label}
						@input=${o=>i.label=o.target.value}
					></mm-input>
				</div>

				<div class="footer">
					<mm-button
						size="small"
						shape="rounded"
						@click=${s.save}
					>
						<mm-icon slot="prefix" url="https://icons.getbootstrap.com/assets/icons/save.svg"></mm-icon>
						<mm-text type="body-large">Save</mm-text>
					</mm-button>

					<mm-button
						size="small"
						shape="rounded"
						variant="text"
						@click=${()=>t.close()}
					>
						<mm-icon slot="prefix" url="https://icons.getbootstrap.com/assets/icons/x-lg.svg"></mm-icon>
						<mm-text type="body-large">Cancel</mm-text>
					</mm-button>
				</div>
				`,style:g`
				dialog::backdrop {
					backdrop-filter: blur(1px);
				}
				.base {
					outline: none;
				}
				.host {
					display: grid;
					grid-template-rows: auto 1fr;
					border-radius: 8px;
					background-color: rgba(40,40,40,1);
					padding-bottom: 12px;
					border: 1px solid rgb(200 200 200 / 50%);
					gap: 12px;
				}
				.header {
					display: grid;
					grid-template-columns: 1fr auto;
					align-items: center;
					padding-left: 12px;
				}
				mm-icon {
					pointer-events: none;
				}
				.body {
					display: grid;
					justify-content: center;
					grid-template: "time time" 1fr
										"icon field" auto
										/ auto 1fr;
					padding-inline: 12px;
					align-items: center;
					gap: 8px;
				}
				.footer {
					display: grid;
					place-items: center;
					grid-template-columns: 1fr 1fr;
					gap: 6px;
					padding-inline: 12px;
					padding-top: 12px;
				}
				`}),this.renderRoot.append(e)}render(){return d`
		${z(this.timers,e=>d`
			<clk-timer
				id   =${e.id}
				label=${e.label}
				time =${e.time}
				draggable="true"
				@dragstart=${t=>{var i;t.dataTransfer.effectAllowed="move",(i=t.dataTransfer)==null||i.setData("clock-id",e.id)}}
				@dragenter=${t=>t.preventDefault()}
				@dragover=${t=>t.preventDefault()}
				@drop=${t=>{const i=t.dataTransfer.getData("clock-id");if(i!==e.id){const s=this.timers.findIndex(r=>r.id===i),o=this.timers.findIndex(r=>r.id===e.id);ie(this.timers,s,o),this.updateLocalStorage(),this.requestUpdate()}}}
			></clk-timer>
		`)}

		<div class="controls">
			<mm-button
				type="icon"
				variant="text"
				@click=${this.newDialog}
			>
				<mm-icon
					style="font-size:20px;"
					url="https://icons.getbootstrap.com/assets/icons/plus-lg.svg"
				></mm-icon>
			</mm-button>
		</div>
		`}};L.styles=[_,g`
		:host {
			overflow: auto;
			display: flex;
			gap: 12px;
			padding-block: 16px;
			padding-inline: 22px;
			flex-flow: row wrap;
    		justify-content: center;
			align-content: start;
		}
		.controls {
			position: absolute;
			right: 25px;
			bottom: 25px;
			display: flex;
			background-color: rgb(50 50 50 / 50%);
			box-shadow: var(--box-shadow-s);
			padding: 8px;
			border: 1px solid rgb(200 200 200 / 25%);
			border-radius: 6px;
			gap: 8px;
		}
		`];j([R("update")],L.prototype,"handleUpdate",1);j([R("remove")],L.prototype,"handleRemove",1);L=j([C("clk-timer-page")],L);export{L as TimerPageElement};
