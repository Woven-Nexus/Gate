import { includeCE } from '@roenlie/mimic-lit/injectable';
import { sharedStyles } from '@roenlie/mimic-lit/styles';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { SERVER_URL } from './constants.js';
import { GateNavElement } from './nav-element.js';

includeCE(GateNavElement);


@customElement('gate-app')
export class GateAppElement extends LitElement {

	public override connectedCallback(): void {
		super.connectedCallback();
	}

	protected override render(): unknown {
		return html`
		<div class="navbar">
			<gate-nav></gate-nav>
		</div>

		<div class="content">
			<iframe src=${ SERVER_URL + '/apps/clock/1.0.0/timer' }></iframe>
		</div>
		<div class="details"></div>
		`;
	}

	public static override styles = [
		sharedStyles,
		css`
		:host {
			display: grid;
			grid-template-columns: 80px 1fr auto;
		}
		.navbar {
			display: grid;
			padding-block: 12px;
			border-right: 1px solid rgb(150 150 150 / 30%);
		}
		.content {
			display: grid;
		}
		iframe {
			all: unset;
			display: grid;
			width: 100%;
			height: 100%;
		}
		`,
	];

}
