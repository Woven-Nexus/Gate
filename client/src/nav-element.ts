import { DrawerCmp } from '@roenlie/mimic-elements/drawer';
import { IconElement } from '@roenlie/mimic-elements/icon';
import { NavRailElement, NavRailItemElement } from '@roenlie/mimic-elements/nav-rail';
import { includeCE } from '@roenlie/mimic-lit/injectable';
import { css, html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

includeCE(
	NavRailElement,
	NavRailItemElement,
	IconElement,
	DrawerCmp,
);


@customElement('gate-nav')
export class GateNavElement extends LitElement {

	@query('mm-drawer') protected drawerEl: DrawerCmp;

	public override render() {
		return html`
		<mm-nav-rail>
			<mm-nav-rail-item slot="start" active @click=${ () => this.drawerEl.show() }>
				<mm-icon
					slot="icon"
					style="font-size:20px;"
					url="https://icons.getbootstrap.com/assets/icons/boxes.svg"
				></mm-icon>
				<span>Apps</span>
			</mm-nav-rail-item>

			<mm-nav-rail-item slot="end" type="outlined">
				<mm-icon
					slot="icon"
					style="font-size:18px;"
					url="https://icons.getbootstrap.com/assets/icons/person-circle.svg"
				></mm-icon>
				<span>Profile</span>
			</mm-nav-rail-item>
		</mm-nav-rail>

		<mm-drawer
			label="Applications"
			open
		>
			<section>
				Here goes the application list
			</section>
		</mm-drawer>
		`;
	}

	public static override styles = [
		css`
		:host {
			position: relative;
			display: grid;
		}
		nav {
			width: 90px;
			border-right: 1px solid black;
		}
		mm-drawer {
			--panel-size: 300px;
		}
	`,
	];

}


declare global {
	interface HTMLElementTagNameMap {
		'gate-nav': GateNavElement;
	}
}
