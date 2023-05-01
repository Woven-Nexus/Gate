import { Route, Router } from '@vaadin/router';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('gate-app')
export class GateApp extends LitElement {

	protected router = new Router();
	protected childrenRoutes: Route[] = [];
	protected routes: Route[] = [
		{
			path:      '/',
			component: 'gate-layout',
			children:  this.childrenRoutes,
		},
	];

	public override async connectedCallback() {
		super.connectedCallback();

		const url = new URL('api/routes', __SERVER_URL || location.origin);
		url.searchParams.append('appid', 'portal');
		const routeResponse = await fetch(url, {
			method: 'GET',
		}).then(r => r.json()).then(r => r as string[]);

		this.childrenRoutes.push(...routeResponse.map(route => {
			return {
				path:      route,
				component: `gate-app-${ route }`,
				action:    async () => {
					const entrypoint = `/${ route }/index.js`;
					await import(/* @vite-ignore */ entrypoint);
				},
			};
		}));

		this.router.setRoutes(this.routes);
		this.router.setOutlet(this.shadowRoot);
	}

	public static override styles = [
		css`
		:host {
			display:grid;
		}
		`,
	];

}


@customElement('gate-layout')
export class GateLayout extends LitElement {

	protected override render() {
		return html`
		<nav>

		</nav>
		<slot></slot>
		`;
	}


	public static override styles = [
		css`
		:host {
			display:grid;
			grid-template-rows: 50px 1fr;
		}
		`,
	];

}
