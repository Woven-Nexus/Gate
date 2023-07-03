import '@roenlie/mimic-elements/button';
import '@roenlie/mimic-elements/icon';
import '@roenlie/mimic-elements/dialog';

import { sharedStyles } from '@roenlie/mimic-lit/styles';
import { css, html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';


@customElement('clk-timer')
export class TimerElement extends LitElement {


	public override connectedCallback() {
		super.connectedCallback();

		this.addEventListener('click', this.handleEditClick);
	}

	public override disconnectedCallback() {
		super.disconnectedCallback();

		this.removeEventListener('click', this.handleEditClick);
	}

	protected handleEditClick() {
		console.log('clicking');


		const dialogEl = document.createElement('mm-dialog');
	}

	protected handleToggleClick(ev: Event) {
		ev.preventDefault();
		ev.stopPropagation();
	}

	public override render() {
		return html`
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
		`;
	}

	public static override styles = [
		sharedStyles,
		css`
		:host {
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
		:host(:hover) {
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
				<circle class="progress-ring__indicator" style="stroke-dashoffset: ${ this.indicatorOffset }"></circle>
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


declare global {
	interface HTMLElementTagNameMap {
		'es-progress-ring': ProgressRingElement;
	}
}


declare global {
	interface HTMLElementTagNameMap {
		'clk-timer': TimerElement;
	}
}
