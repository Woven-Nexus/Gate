import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('gate-planner-button')
export class GatePlannerButton extends LitElement {

	protected override render(): unknown {
		return html`
		Hello I am button
		`;
	}

}
