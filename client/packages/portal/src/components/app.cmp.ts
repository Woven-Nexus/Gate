import '../input.cmp.js';

import { consume, provide } from '@roenlie/mimic-lit/context';
import { Route, Router } from '@vaadin/router';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { getRoutesAction } from '../api/get-routes-action.js';
import { GateLayout } from './layout.cmp.js';

(() => [ GateLayout ])();


@customElement('gate-app')
export class GateApp extends LitElement {

	protected router = new Router();
	@provide('mainRoutes') protected mainRoutes: Route[] = [
		{
			path:      'upload-app',
			component: 'gate-upload-app-page',
			internal:  true,
			action:    async () => {
				await import('./upload-app.cmp.js');
			},
		} as Route,
	];

	protected rootRoutes: Route[] = [
		{
			path:      '/',
			component: 'gate-layout',
			children:  this.mainRoutes,
		},
	];

	public override async connectedCallback() {
		super.connectedCallback();

		const routes = await getRoutesAction() ?? [];

		this.mainRoutes.unshift(...routes.map(route => ({
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
