import '@roenlie/mimic-elements/button';
import '@roenlie/mimic-elements/icon';
import '@roenlie/mimic-elements/text';

import { domId } from '@roenlie/mimic-core/dom';
import { accurateTimer } from '@roenlie/mimic-core/timing';
import { sharedStyles } from '@roenlie/mimic-lit/styles';
import { css, html, LitElement, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { styleMap } from 'lit/directives/style-map.js';


type Lap = {
	id: string;
	time: Date;
	total: Date;
	fastest: boolean;
	slowest: boolean;
}


@customElement('clk-stopwatch-page')
export class StopwatchPageElement extends LitElement {

	@state() protected time: Date = new Date(0, 0, 0, 0, 0, 0, 0);
	@state() protected currentTime = new Date(this.time);
	@state() protected laps: Lap[] = [];
	@state() protected tableHeight = 0;
	protected cancelTimer?: () => void;
	protected resizeObs = new ResizeObserver(() => {
		const container = this.renderRoot.querySelector('.laps') as HTMLElement | undefined;
		this.tableHeight = container?.offsetHeight ?? 0;
	});

	public override connectedCallback() {
		super.connectedCallback();
		this.resizeObs.observe(document.documentElement);
	}

	public override disconnectedCallback() {
		super.disconnectedCallback();
		this.resizeObs.disconnect();
	}

	protected isTimeFinished(time: Date) {
		return time.getHours() === 0
			&& time.getMinutes() === 0
			&& time.getSeconds() === 0;
	}

	protected handleToggleTime() {
		if (this.cancelTimer) {
			this.cancelTimer();
			this.cancelTimer = undefined;
		}
		else {
			this.cancelTimer = accurateTimer(() => {
				this.currentTime.setTime(this.currentTime.getTime() + 100);
				this.requestUpdate();
			}, 100).cancel;
		}

		this.requestUpdate();
	}

	protected handleLap() {
		const previous = this.laps.at(-1)?.total ?? new Date(0, 0, 0);
		const timeDiff = Math.abs(previous.getTime()) - Math.abs(this.currentTime.getTime());
		const time = new Date(0, 0, 0);
		time.setTime(time.getTime() + timeDiff);

		this.laps = [
			...this.laps,
			{
				id:      domId(),
				time,
				total:   new Date(this.currentTime),
				fastest: false,
				slowest: false,
			},
		];

		this.laps.forEach(lap => { lap.fastest = false; lap.slowest = false; });
		const indicators = this.laps.reduce((prev, cur) => {
			if (!prev.fastest)
				prev.fastest = cur;
			if (!prev.slowest)
				prev.slowest = cur;

			if (prev.fastest.time.getTime() > cur.time.getTime())
				prev.fastest = cur;
			if (prev.slowest.time.getTime() < cur.time.getTime())
				prev.slowest = cur;

			return prev;
		}, {} as { fastest: Lap; slowest: Lap; });

		indicators.fastest.fastest = true;
		indicators.slowest.slowest = true;
	}

	protected handleReset() {
		this.currentTime = new Date(this.time);
		this.laps = [];
	}

	protected parseTime(time: Date) {
		return this.parseSegment(time.getHours()) +
			':' + this.parseSegment(time.getMinutes()) +
			':' + this.parseSegment(time.getSeconds()) +
			'.' + this.parseSegment(time.getMilliseconds());
	}

	protected parseSegment(number: number) {
		const length = number.toString().length;
		const strNum = '' + number;

		if (length < 2)
			return '0' + strNum;
		if (length > 2)
			return strNum.slice(0, 2);

		return strNum;
	}

	protected timeTemplate() {
		return html`
		<div class="block">
			<mm-text type="display-large">
				${ this.parseSegment(this.currentTime.getHours()) }
			</mm-text>
			<mm-text type="display-small">hr</mm-text>
		</div>

		<mm-text type="display-large">:</mm-text>

		<div class="block">
			<mm-text type="display-large">
				${ this.parseSegment(this.currentTime.getMinutes()) }
			</mm-text>
			<mm-text type="display-small">min</mm-text>
		</div>

		<mm-text type="display-large">:</mm-text>

		<div class="block">
			<mm-text type="display-large">
				${ this.parseSegment(this.currentTime.getSeconds()) }
			</mm-text>
			<mm-text type="display-small">sec</mm-text>
		</div>

		<mm-text type="display-large">.</mm-text>

		<div class="block">
			<mm-text type="display-medium">
				${ this.parseSegment(this.currentTime.getMilliseconds()) }
			</mm-text>
			<mm-text type="display-small">ms</mm-text>
		</div>
		`;
	}

	protected actionTemplate() {
		return html`
		<mm-button
			type="icon"
			size="large"
			@click=${ this.handleToggleTime }
		>
			<mm-icon
				style=${ styleMap({
					fontSize:  '40px',
					color:     'black',
					translate: this.cancelTimer ? '' : '2px',
				}) }
				url=${ this.cancelTimer
					? 'https://icons.getbootstrap.com/assets/icons/pause-fill.svg'
					: 'https://icons.getbootstrap.com/assets/icons/play-fill.svg' }
			></mm-icon>
		</mm-button>

		<mm-button
			type="icon"
			size="large"
			?disabled=${ !this.cancelTimer }
			@click=${ this.handleLap }
		>
			<mm-icon
				style="font-size:24px;color:black;"
				url="https://icons.getbootstrap.com/assets/icons/flag-fill.svg"
			></mm-icon>
		</mm-button>

		<mm-button
			type="icon"
			size="large"
			@click=${ this.handleReset }
		>
			<mm-icon
				style="font-size:30px;color:black;"
				url="https://icons.getbootstrap.com/assets/icons/arrow-counterclockwise.svg"
			></mm-icon>
		</mm-button>
		`;
	}

	protected lapsTemplate() {
		return html`
		<div
			style=${ styleMap({
				height: this.tableHeight ? this.tableHeight + 'px' : '',
			}) }
			class="table"
		>
			<div class="thead">
				<div class="th">Laps</div>
				<div class="th">Time</div>
				<div class="th">Total</div>
			</div>

			<div class="tbody">
				${ map(this.laps, (lap, idx) => html`
				<div id=${ lap.id } class="tr">
					<div class="td">
						${ idx }
						${ lap.fastest ? 'Fastest' : lap.slowest ? 'Slowest' : '' }
					</div>
					<div class="td">${ this.parseTime(lap.time) }</div>
					<div class="td">${ this.parseTime(lap.total) }</div>
				</div>
				`) }
			</div>
		</div>
		`;
	}

	protected override render() {
		return html`
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
				${ this.timeTemplate() }
			</div>

			<div class="actions">
				${ this.actionTemplate() }
			</div>
		</div>

		<div class="laps">
			${ this.laps.length ?  this.lapsTemplate() : nothing }
		</div>
		`;
	}

	public static override styles = [
		sharedStyles,
		css`
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
		`,
		css`/* Table */
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
		`,
	];

}
