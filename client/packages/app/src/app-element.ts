import { sharedStyles } from '@roenlie/mimic-lit';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('gate-app')
export class GateAppElement extends LitElement {

	protected override render(): unknown {
		return html`
		<div class="navbar">nav</div>
		<div class="content">
			<iframe src="https://localhost:7159/theta/1.0.0/index.html"></iframe>
		</div>
		<div class="details">details</div>
		`;
	}

	public static override styles = [
		sharedStyles,
		css`
		:host {
			display: grid;
			grid-template-columns: 80px 1fr auto;
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
