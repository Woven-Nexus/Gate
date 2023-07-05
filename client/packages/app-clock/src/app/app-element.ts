import './sidebar-element.js';

import { provide } from '@roenlie/mimic-lit/context';
import { sharedStyles } from '@roenlie/mimic-lit/styles';
import { Route, Router } from '@vaadin/router';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('clock-app')
export class ClockAppElement extends LitElement {

	@provide('router') public router = new Router();

	protected routes: Route[] = [
		{
			path:     '/',
			redirect: '/timer',
		},
		{
			name:      'timer',
			path:      '/timer',
			component: 'clk-timer-page',
			action:    () => void import('../timer/timer-page-element.js'),
		},
		{
			name:      'alarm',
			path:      '/alarm',
			component: 'clk-alarm-page',
			action:    () => void import('../alarm/alarm-page-element.js'),
		},
		{
			name:      'stopwatch',
			path:      '/stopwatch',
			component: 'clk-stopwatch-page',
			action:    () => void import('../stopwatch/stopwatch-page-element.js'),
		},
		{
			path:     '(.*)',
			redirect: '/',
		},
	];

	protected sidebarItems = [
		{
			icon:  'https://icons.getbootstrap.com/assets/icons/hourglass.svg',
			label: 'Timer',
			path:  () => this.router.urlForName('timer'),
		},
		{
			icon:  'https://icons.getbootstrap.com/assets/icons/bell.svg',
			label: 'Alarm',
			path:  () => this.router.urlForName('alarm'),
		},
		{
			icon:  'https://icons.getbootstrap.com/assets/icons/stopwatch.svg',
			label: 'Stopwatch',
			path:  () => this.router.urlForName('stopwatch'),
		},
	];

	public override connectedCallback(): void {
		super.connectedCallback();

		this.router.baseUrl = __APP_BASE;
		this.router.setRoutes(this.routes);
		this.router.setOutlet(this);
	}

	protected override render(): unknown {
		return html`
		<aside>
			<clk-sidebar-element
				.items=${ this.sidebarItems }
			></clk-sidebar-element>
		</aside>

		<section>
			<slot></slot>
		</section>
		`;
	}

	public static override styles = [
		sharedStyles,
		css`
		:host {
			overflow: hidden;
			display: grid;
			grid-template-columns: 150px 1fr;
		}
		aside {
			display: grid;
			background-color: rgba(20,20,20,0.5);
		}
		section {
			overflow: auto;
			display: grid;
		}
		`,
	];

}
