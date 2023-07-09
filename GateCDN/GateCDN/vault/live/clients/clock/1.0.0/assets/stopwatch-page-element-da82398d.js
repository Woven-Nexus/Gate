import{r as h,a as d}from"./style-map-d8387efb.js";import{s as g,d as f,x as m,o as u,A as y,e as v,i as p,t as c,b}from"./index-bdd84ae0.js";var x=Object.defineProperty,w=Object.getOwnPropertyDescriptor,n=(e,s,i,o)=>{for(var a=o>1?void 0:o?w(s,i):s,t=e.length-1,l;t>=0;t--)(l=e[t])&&(a=(o?l(s,i,a):l(a))||a);return o&&a&&x(s,i,a),a};let r=class extends g{constructor(){super(...arguments),this.time=new Date(0,0,0,0,0,0,0),this.currentTime=new Date(this.time),this.laps=[],this.tableHeight=0,this.resizeObs=new ResizeObserver(()=>{const e=this.renderRoot.querySelector(".laps");this.tableHeight=(e==null?void 0:e.offsetHeight)??0})}connectedCallback(){super.connectedCallback(),this.resizeObs.observe(document.documentElement)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObs.disconnect()}isTimeFinished(e){return e.getHours()===0&&e.getMinutes()===0&&e.getSeconds()===0}handleToggleTime(){this.cancelTimer?(this.cancelTimer(),this.cancelTimer=void 0):this.cancelTimer=h(()=>{this.currentTime.setTime(this.currentTime.getTime()+100),this.requestUpdate()},100).cancel,this.requestUpdate()}handleLap(){var a;const e=((a=this.laps.at(-1))==null?void 0:a.total)??new Date(0,0,0),s=Math.abs(e.getTime())-Math.abs(this.currentTime.getTime()),i=new Date(0,0,0);i.setTime(i.getTime()+s),this.laps=[...this.laps,{id:f(),time:i,total:new Date(this.currentTime),fastest:!1,slowest:!1}],this.laps.forEach(t=>{t.fastest=!1,t.slowest=!1});const o=this.laps.reduce((t,l)=>(t.fastest||(t.fastest=l),t.slowest||(t.slowest=l),t.fastest.time.getTime()>l.time.getTime()&&(t.fastest=l),t.slowest.time.getTime()<l.time.getTime()&&(t.slowest=l),t),{});o.fastest.fastest=!0,o.slowest.slowest=!0}handleReset(){this.currentTime=new Date(this.time),this.laps=[]}parseTime(e){return this.parseSegment(e.getHours())+":"+this.parseSegment(e.getMinutes())+":"+this.parseSegment(e.getSeconds())+"."+this.parseSegment(e.getMilliseconds())}parseSegment(e){const s=e.toString().length,i=""+e;return s<2?"0"+i:s>2?i.slice(0,2):i}timeTemplate(){return m`
		<div class="block">
			<mm-text type="display-large">
				${this.parseSegment(this.currentTime.getHours())}
			</mm-text>
			<mm-text type="display-small">hr</mm-text>
		</div>

		<mm-text type="display-large">:</mm-text>

		<div class="block">
			<mm-text type="display-large">
				${this.parseSegment(this.currentTime.getMinutes())}
			</mm-text>
			<mm-text type="display-small">min</mm-text>
		</div>

		<mm-text type="display-large">:</mm-text>

		<div class="block">
			<mm-text type="display-large">
				${this.parseSegment(this.currentTime.getSeconds())}
			</mm-text>
			<mm-text type="display-small">sec</mm-text>
		</div>

		<mm-text type="display-large">.</mm-text>

		<div class="block">
			<mm-text type="display-medium">
				${this.parseSegment(this.currentTime.getMilliseconds())}
			</mm-text>
			<mm-text type="display-small">ms</mm-text>
		</div>
		`}actionTemplate(){return m`
		<mm-button
			type="icon"
			size="large"
			@click=${this.handleToggleTime}
		>
			<mm-icon
				style=${d({fontSize:"40px",color:"black",translate:this.cancelTimer?"":"2px"})}
				url=${this.cancelTimer?"https://icons.getbootstrap.com/assets/icons/pause-fill.svg":"https://icons.getbootstrap.com/assets/icons/play-fill.svg"}
			></mm-icon>
		</mm-button>

		<mm-button
			type="icon"
			size="large"
			?disabled=${!this.cancelTimer}
			@click=${this.handleLap}
		>
			<mm-icon
				style="font-size:24px;color:black;"
				url="https://icons.getbootstrap.com/assets/icons/flag-fill.svg"
			></mm-icon>
		</mm-button>

		<mm-button
			type="icon"
			size="large"
			@click=${this.handleReset}
		>
			<mm-icon
				style="font-size:30px;color:black;"
				url="https://icons.getbootstrap.com/assets/icons/arrow-counterclockwise.svg"
			></mm-icon>
		</mm-button>
		`}lapsTemplate(){return m`
		<div
			style=${d({height:this.tableHeight?this.tableHeight+"px":""})}
			class="table"
		>
			<div class="thead">
				<div class="th">Laps</div>
				<div class="th">Time</div>
				<div class="th">Total</div>
			</div>

			<div class="tbody">
				${u(this.laps,(e,s)=>m`
				<div id=${e.id} class="tr">
					<div class="td">
						${s}
						${e.fastest?"Fastest":e.slowest?"Slowest":""}
					</div>
					<div class="td">${this.parseTime(e.time)}</div>
					<div class="td">${this.parseTime(e.total)}</div>
				</div>
				`)}
			</div>
		</div>
		`}render(){return m`
		<div class="display">
			<div class="header">
				<mm-button type="icon" size="small" variant="text">
					<mm-icon
						style="font-size: 18px;"
						url="https://icons.getbootstrap.com/assets/icons/arrows-fullscreen.svg"
					></mm-icon>
				</mm-button>
			</div>
			<div class="time">
				${this.timeTemplate()}
			</div>

			<div class="actions">
				${this.actionTemplate()}
			</div>
		</div>

		<div class="laps">
			${this.laps.length?this.lapsTemplate():y}
		</div>
		`}};r.styles=[v,p`
		:host {
			display: grid;
			grid-template-rows: 1fr 1fr;
			gap: 24px;
			overflow: hidden;
		}
		.display {
			display: flex;
			flex-flow: column nowrap;
			place-items: center;
			place-content: center;
			place-self: end center;
		}
		.header {
			place-self: end;
		}
		.time {
			display: flex;
		}
		.block {
			display: grid;
			grid-template-rows: 1fr auto;
			width: 180px;
		}
		.block:last-child {
			width: 120px;
		}
		mm-text {
			place-self: start center;
		}
		mm-text[type="display-large"] {
			font-size:      10rem;
			line-height:    1em;
		}
		mm-text[type="display-medium"] {
			font-size:      7rem;
			line-height:    1.1em;
			place-self: end center;
		}
		.actions {
			display: grid;
			grid-auto-flow: column;
			grid-auto-columns: max-content;
			place-items: center;
			gap: 24px;
			margin-top: 24px;
		}
		.laps {
			display: grid;
			place-items: start center;
			overflow: hidden;
		}
		.laps .table {
			width: 50vw;
		}
		`,p`/* Table */
		.table {
			display: grid;
			grid-template: "thead" auto
								"tbody" 1fr
								/ 1fr;
		}
		.thead {
			grid-area: thead;
			position: relative;
			display: grid;
			grid-auto-flow: column;
			grid-auto-columns: 1fr;

			font-family:    var(--title-large-font-family-name);
			font-weight:    var(--title-large-font-weight);
			font-size:      var(--title-large-font-size);
			line-height:    var(--title-large-line-height);
			letter-spacing: var(--title-large-letter-spacing);
		}
		.thead::after {
			position: absolute;
			content: '';
			bottom: 0px;
			left: -1px;
			right: -1px;
			height: 2px;
			border-radius: 2px;
			background-color: rgb(200 200 200 / 25%);
		}
		.th {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.tbody {
			grid-area: tbody;
			display: block;
			overflow: auto;

			font-family:    var(--body-large-font-family-name);
			font-weight:    var(--body-large-font-weight);
			font-size:      var(--body-large-font-size);
			line-height:    var(--body-large-line-height);
			letter-spacing: var(--body-large-letter-spacing);
		}
		.tr {
			display: grid;
			grid-auto-flow: column;
			grid-auto-columns: 1fr;
		}
		.td {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		`];n([c()],r.prototype,"time",2);n([c()],r.prototype,"currentTime",2);n([c()],r.prototype,"laps",2);n([c()],r.prototype,"tableHeight",2);r=n([b("clk-stopwatch-page")],r);export{r as StopwatchPageElement};
