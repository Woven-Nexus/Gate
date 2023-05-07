import '@roenlie/mimic-elements/nav-rail';

import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('gate-layout')
export class GateLayout extends LitElement {

	protected override render() {
		return html`
		<nav>
			<mm-nav-rail>
				<mm-nav-rail-item slot="start">
					<span>HEI</span>
					<span slot="icon">KE</span>
				</mm-nav-rail-item>
			</mm-nav-rail>
		</nav>

		<slot></slot>
		`;
	}


	public static override styles = [
		css`
		:host {
			display:grid;
			grid-template-columns: auto 1fr;
			overflow: hidden;
		}
		nav {
			overflow: auto;
			border-right: 1px solid var(--outline-variant);
			--scrollbar-width: 4px;
			--scrollbar-height: 4px;
		}

		.start {
			display: flex;
			justify-content: center;
			align-items: start;
		}
		.end {
			display: flex;
			justify-content: end;
		}
		`,
	];

}
