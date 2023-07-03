import './time-element.js';

import { sharedStyles } from '@roenlie/mimic-lit';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('clk-timer-page')
export class TimerPageElement extends LitElement {

	protected override render(): unknown {
		return html`
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		<clk-timer></clk-timer>
		`;
	}

	public static override styles = [
		sharedStyles,
		css`
		:host {
			overflow: auto;
			display: flex;
			gap: 12px;
			padding-block: 16px;
			padding-inline: 22px;
			flex-flow: row wrap;
    		justify-content: center;
		}
		`,
	];

}
