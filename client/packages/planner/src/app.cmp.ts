import { Route, Router } from '@vaadin/router';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('gate-planner-app')
export class GateApp extends LitElement {

	protected router = new Router(undefined, { baseUrl: '/planner' });
	protected routes: Route[] = [
		{
			path:      '/planner',
			component: 'gate-planner-layout',
			children:  [
				{
					path:      '',
					component: 'gate-planner-button',
					action:    () => {
						import('./button.cmp.js');
					},
				},
			],
		},

	];

	public override connectedCallback() {
		super.connectedCallback();

		this.router.setRoutes(this.routes);
		this.router.setOutlet(this);
	}

	protected override render() {
		return html`
		<slot></slot>
		`;
	}

}


@customElement('gate-planner-layout')
export class GateLayout extends LitElement {

	protected override render() {
		return html`
		<slot></slot>
		`;
	}

}
