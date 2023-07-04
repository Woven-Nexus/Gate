import '@roenlie/mimic-elements/button';
import '@roenlie/mimic-elements/icon';
import '@roenlie/mimic-elements/dialog';
import '@roenlie/mimic-elements/input';

import { emitEvent, EventOf } from '@roenlie/mimic-core';
import { curryDebounce } from '@roenlie/mimic-core/timing';
import { StringLiteral } from '@roenlie/mimic-core/types';
import { KeyboardController } from '@roenlie/mimic-lit/controllers';
import { sharedStyles } from '@roenlie/mimic-lit/styles';
import { css, html, LitElement, PropertyValueMap } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import { when } from 'lit/directives/when.js';


declare global {
	interface HTMLElementTagNameMap {
		'clk-timer': TimerElement;
		'clk-time-field': TimeFieldElement;
		'clk-progress-ring': ProgressRingElement;
	}
}


@customElement('clk-timer')
export class TimerElement extends LitElement {

	@property() public label = '';
	@property() public time: `${ string }:${ string }:${ string }` | StringLiteral = '0:0:0';

	public override connectedCallback() {
		super.connectedCallback();

		this.handleEditClick();
	}

	public override disconnectedCallback() {
		super.disconnectedCallback();
	}

	protected handleEditClick() {
		const dialog = editDialog.call(this);
		dialog.inprogress.then(()=> {
			console.log('dialog closed');
		});
	}

	protected handleToggleClick(ev: Event) {
		ev.preventDefault();
		ev.stopPropagation();
	}

	public override render() {
		return html`
		<div class="container" @click=${ this.handleEditClick }>
			<div class="header"></div>
			<div class="body">
				<clk-progress-ring value=50></clk-progress-ring>
				<mm-text type="headline-small">00:00:00</mm-text>
			</div>
			<div class="footer">
				<mm-button type="icon" size="x-small" @click=${ this.handleToggleClick }>
					<mm-icon url="https://icons.getbootstrap.com/assets/icons/play-fill.svg"
					></mm-icon>
				</mm-button>
				<mm-button type="icon" size="x-small" @click=${ this.handleToggleClick }>
					<mm-icon url="https://icons.getbootstrap.com/assets/icons/arrow-counterclockwise.svg"
					></mm-icon>
				</mm-button>
			</div>
		</div>
		`;
	}

	public static override styles = [
		sharedStyles,
		css`
		:host {
			display: grid;
		}
		.container {
			display: grid;
			height: 200px;
			aspect-ratio: 1;
			background-color: rgba(50,50,50,0.5);
			border-radius: 6px;
			padding: 8px;
			box-shadow: var(--box-shadow-s);
			transition:
				scale 0.2s ease,
				translate 0.1s ease,
				box-shadow 0.2s ease;
		}
		.container:hover {
			box-shadow: var(--box-shadow-m);
			translate: 0px -2px;
			scale: 101%;
		}
		.body {
			display: grid;
			place-items: center;
		}
		.body > * {
			grid-row: 1/2;
			grid-column: 1/2;
		}
		.footer {
			display: grid;
			grid-auto-flow: column;
			grid-auto-columns: max-content;
			align-items: center;
			justify-content: center;
			gap: 12px;
		}
	`,
	];

}


function editDialog(this: TimerElement) {
	const dialogEl = document.createElement('mm-dialog');
	dialogEl.modal = true;
	dialogEl.createConfig(() => ({
		label: this.label,
		time:  this.time,
	})).actions((dialog, state) => ({
		save: () => {
			console.log(state);
			dialog.close();
		},
		delete: () => {
			console.log('trying to delete');
		},
	})).template({
		render: (dialog, state, actions) => html`
			<div class="header">
				<mm-text>
					Edit Timer
				</mm-text>

				<mm-button
					type="icon"
					size="small"
					variant="text"
					@click=${ actions.delete }
				>
					<mm-icon
						style="color: var(--error);"
						url="https://icons.getbootstrap.com/assets/icons/trash.svg"
						@click=${ () => dialog.close() }
					></mm-icon>
				</mm-button>
			</div>

			<div class="body">
				<clk-time-field
					style="grid-area: time;"
					.value=${ state.time }
					@change=${ (ev: EventOf<TimeFieldElement>) => state.time = ev.target.value }
				></clk-time-field>
				<mm-icon
					style="grid-area: icon;"
					url="https://icons.getbootstrap.com/assets/icons/pencil-square.svg"
				></mm-icon>
				<mm-input
					style="grid-area: field;"
					size="small"
					.value=${ state.label }
					@input=${ (ev: EventOf<HTMLInputElement>) => state.label = ev.target.value }
				></mm-input>
			</div>

			<div class="footer">
				<mm-button
					size="x-small"
					shape="rounded"
					@click=${ actions.save }
				>
					<mm-icon slot="prefix" url="https://icons.getbootstrap.com/assets/icons/save.svg"></mm-icon>
					<mm-text type="body-small">Save</mm-text>
				</mm-button>

				<mm-button
					size="x-small"
					shape="rounded"
					variant="text"
					@click=${ () => dialog.close() }
				>
					<mm-icon slot="prefix" url="https://icons.getbootstrap.com/assets/icons/x-lg.svg"></mm-icon>
					<mm-text type="body-small">Cancel</mm-text>
				</mm-button>
			</div>
			`,
		style: css`
			dialog::backdrop {
				backdrop-filter: blur(1px);
			}
			.base {
				outline: none;
			}
			.host {
				display: grid;
				grid-template-rows: auto 1fr;
				aspect-ratio: 1;
				border-radius: 8px;
				background-color: rgba(40,40,40,1);
				padding-bottom: 12px;
				gap: 16px;
				border: 1px solid rgb(200 200 200 / 50%);
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
				column-gap: 8px;
			}
			.footer {
				display: grid;
				place-items: center;
				grid-template-columns: 1fr 1fr;
				gap: 6px;
				padding-inline: 12px;
			}
			`,
	});

	this.renderRoot.append(dialogEl);

	return dialogEl;
}


@customElement('clk-progress-ring')
export class ProgressRingElement extends LitElement {

	//#region properties
	/** The current progress, 0 to 100. */
	@property({ type: Number, reflect: true }) public value = 0;

	/** A custom label for the progress ring's aria label. */
	@property() public label = '';

	@state() protected indicatorOffset: string;

	@query('.progress-ring__indicator') protected indicator: SVGCircleElement;
	//#endregion


	//#region lifecycle
	protected override willUpdate(changedProps: Map<string, unknown>) {
		super.willUpdate(changedProps);

		/**
		 * This block is only required for Safari because it doesn't transition the circle when the custom properties
		 * change, possibly because of a mix of pixel + unit-less values in the calc() function. It seems like a Safari bug,
		 * but I couldn't pinpoint it so this works around the problem.
		 */
		if (this.hasUpdated && changedProps.has('value')) {
			const radius = parseFloat(getComputedStyle(this.indicator).getPropertyValue('r'));
			const circumference = 2 * Math.PI * radius;
			const offset = circumference - (this.value / 100) * circumference;

			this.indicatorOffset = `${ offset }px`;
		}
	}
	//#endregion


	//#region logic
	//#endregion


	//#region template
	public override render() {
		return html`
		<div
			part="base"
			class="progress-ring"
			role="progressbar"
			aria-label=${ this.label.length > 0 ? this.label : 'progress' }
			aria-valuemin="0"
			aria-valuemax="100"
			aria-valuenow="${ this.value }"
			style="--percentage: ${ this.value / 100 }"
		>
			<svg class="progress-ring__image">
				<circle class="progress-ring__track"></circle>
				<circle
					class="progress-ring__indicator"
					style="stroke-dashoffset: ${ this.indicatorOffset }"
				></circle>
			</svg>
			<span part="label" class="progress-ring__label">
				<slot></slot>
			</span>
		</div>
		`;
	}
	//#endregion


	//#region style
	public static override styles = [
		sharedStyles,
		css`
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
		`,
	];
	//#endregion

}


@customElement('clk-time-field')
export class TimeFieldElement extends LitElement {

	@property() public value: `${ string }:${ string }:${ string }` | StringLiteral = '0:0:0';
	@state() protected time: [
		hours: number,
		minutes: number,
		seconds: number,
	] = [ 0, 0, 0 ];

	@state() protected activeIndex = 0;

	protected keyboardUpdating = false;
	protected updateLocation = -1;
	protected startUpdate = curryDebounce(500, () => this.updateLocation = -1);

	protected keyboardCtrl = new KeyboardController({
		host:    this,
		target:  this,
		keylist: [
			{ key: '1' },
			{ key: '2' },
			{ key: '3' },
			{ key: '4' },
			{ key: '5' },
			{ key: '6' },
			{ key: '7' },
			{ key: '8' },
			{ key: '9' },
			{ key: '0' },
		],
		listener: (ev) => {
			this.startUpdate();

			const mutateTime = (limit = Infinity) => {
				if (this.updateLocation === -1)
					this.time[this.activeIndex] = 0;

				const currentTime = this.time[this.activeIndex]!.toString();
				const newTimeArr = currentTime.split('');

				const updateIndex = Math.max(0, Math.abs(this.updateLocation) - 1);

				newTimeArr[updateIndex] = ev.key;
				this.time[this.activeIndex] = Math.min(limit, parseInt(newTimeArr.join('')));
				this.updateLocation = Math.max(-2, this.updateLocation - 1);
			};

			if (this.activeIndex === 0)
				mutateTime();
			else if (this.activeIndex === 1)
				mutateTime(59);
			else if (this.activeIndex === 2)
				mutateTime(59);

			this.setTime();
		},
	});

	protected override willUpdate(props: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
		if (props.has('time')) {
			this.time = (() => {
				const split = this.value.split(':');
				while (split.length !== 3) {
					if (split.length > 3)
						split.pop();
					if (split.length < 3)
						split.push('0');
				}

				return [ parseInt(split[0]!), parseInt(split[1]!), parseInt(split[2]!) ];
			})();
		}
	}

	protected incrementTime(index: number) {
		if (index === 0) {
			this.time[index] = this.time[index] + 1;
			if (this.time[index] > 99)
				this.time[index] = 0;
		}
		else if (index === 1) {
			this.time[index] = this.time[index] + 1;
			if (this.time[index] >= 60)
				this.time[index] = 0;
		}
		else if (index === 2) {
			this.time[index] = this.time[index] + 1;
			if (this.time[index] >= 60)
				this.time[index] = 0;
		}

		this.selectIndex(index);
		this.setTime();
	}

	protected decrementTime(index: number) {
		if (index === 0) {
			this.time[index] = this.time[index] - 1;
			if (this.time[index] < 0)
				this.time[index] = 99;
		}
		else if (index === 1) {
			this.time[index] = this.time[index] - 1;
			if (this.time[index] < 0)
				this.time[index] = 59;
		}
		else if (index === 2) {
			this.time[index] = this.time[index] - 1;
			if (this.time[index] < 0)
				this.time[index] = 59;
		}

		this.selectIndex(index);
		this.setTime();
	}

	protected setTime() {
		const oldValue = this.value;
		this.value = this.time.join(':');

		if (this.value !== oldValue)
			emitEvent(this, 'change');
	}

	protected selectIndex(index: number) {
		this.activeIndex = index;
	}

	protected override render() {
		return html`
		<div class="top">
			${ map(this.time, (_, idx) => html`
			<mm-button
				type="icon"
				variant="text"
				size="x-small"
				@click=${ () => this.incrementTime(idx) }
			>
				<mm-icon
					url="https://icons.getbootstrap.com/assets/icons/chevron-up.svg"
				></mm-icon>
			</mm-button>
			`) }
		</div>

		<div class="middle">
			${ map(this.time, (time, idx) => html`
			<mm-text
				tabindex=0
				class=${ classMap({
					time:   true,
					active: idx === this.activeIndex,
				}) }
				type="headline-large"
				@click=${ () => this.selectIndex(idx) }
				@focus=${ () => this.selectIndex(idx) }
			>
				${ time.toString().length < 2 ? '0' + time : time }
			</mm-text>
			${ when(idx !== this.time.length - 1, () => html`
			<mm-text type="headline-large">:</mm-text>
			`) }
			`) }
		</div>

		<div class="bottom">
			${ map(this.time, (_, idx) => html`
			<mm-button
				type="icon"
				variant="text"
				size="x-small"
				@click=${ () => this.decrementTime(idx) }
			>
				<mm-icon
					url="https://icons.getbootstrap.com/assets/icons/chevron-down.svg"
				></mm-icon>
			</mm-button>
			`) }
		</div>
		`;
	}

	public static override styles = [
		sharedStyles,
		css`
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
		`,
	];

}
