import { Route, Router } from '@vaadin/router';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('gate-app')
export class GateApp extends LitElement {

	protected router = new Router();
	protected routes: Route[] = [
		{
			path:      '/',
			component: 'gate-layout',
			children:  [
				{
					path:      'planner',
					component: 'gate-planner-app',
					action:    () => {
						const entrypoint = '/planner/index.js';
						import(/* @vite-ignore */ entrypoint);
					},
				},
			],
		},

	];

	public override connectedCallback() {
		super.connectedCallback();

		this.router.setRoutes(this.routes);
		this.router.setOutlet(this.shadowRoot);
	}

}


@customElement('gate-layout')
export class GateLayout extends LitElement {

	protected override render() {
		return html`
		<slot></slot>
		`;
	}

}
