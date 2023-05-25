import { IconElement } from '@roenlie/mimic-elements/icon';
import { NavRailElement } from '@roenlie/mimic-elements/nav-rail';
import { consume } from '@roenlie/mimic-lit/context';
import { Route } from '@vaadin/router';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';

(() => [ NavRailElement, IconElement ])();


@customElement('gate-layout')
export class GateLayout extends LitElement {

	@consume('mainRoutes') protected mainRoutes: Route[];

	public override connectedCallback() {
		super.connectedCallback();
	}

	protected override render() {
		return html`
		<nav>
			<mm-nav-rail>
				<mm-nav-rail-item slot="start" href="/">
					<span>Home</span>
					<mm-icon
						slot="icon"
						url="https://icons.getbootstrap.com/assets/icons/award.svg"
					></mm-icon>
				</mm-nav-rail-item>

				${ map(this.mainRoutes, route => html`
				<mm-nav-rail-item slot="start" href=${ route.path }>
					<span>${ route.path }</span>
					<mm-icon
						slot="icon"
						url="https://icons.getbootstrap.com/assets/icons/award.svg"
					></mm-icon>
				</mm-nav-rail-item>
				`) }
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
