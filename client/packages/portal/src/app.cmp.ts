import './input.cmp.js';
import './components/nav-rail.cmp.js';

import { consume, provide } from '@roenlie/mimic-lit/context';
import { Route, Router } from '@vaadin/router';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';


@customElement('gate-app')
export class GateApp extends LitElement {

	protected router = new Router();
	@provide('mainRoutes') protected mainRoutes: Route[] = [];
	protected rootRoutes: Route[] = [
		{
			path:      '/',
			component: 'gate-layout',
			children:  this.mainRoutes,
		},
	];

	public override async connectedCallback() {
		super.connectedCallback();

		const url = new URL('api/routes', __SERVER_URL || location.origin);
		url.searchParams.append('appid', 'portal');
		const routeResponse = (await fetch(url, { method: 'GET' })
			.then(r => r.json())
			.then(r => r as string[]))
			.filter(r => r !== 'portal');

		this.mainRoutes.push(...routeResponse.map(route => ({
			path:      route,
			component: `gate-app-${ route }`,
			action:    async () => {
				const entrypoint = `/${ route }/index.js`;
				await import(/* @vite-ignore */ entrypoint);
			},
		})));

		this.router.setRoutes(this.rootRoutes);
		this.router.setOutlet(this.shadowRoot);
	}

	public static override styles = [
		css`
		:host {
			display:grid;
			overflow: hidden;
		}
		`,
	];

}


@customElement('gate-layout')
export class GateLayout extends LitElement {

	protected override render() {
		return html`
		<nav>
			<pl-nav-rail></pl-nav-rail>
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
			padding-left: 8px;
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
