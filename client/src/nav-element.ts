import { MMDrawer } from '@roenlie/mimic-elements/drawer';
import { MMIcon } from '@roenlie/mimic-elements/icon';
import { MMNavRail, MMNavRailItem } from '@roenlie/mimic-elements/nav-rail';
import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';

import { ItemTreeElement } from './components/item-tree-element.js';
import { createTreeItem } from './fake-data/nav-menu.js';

[
	MMNavRail,
	MMNavRailItem,
	MMIcon,
	MMDrawer,
	ItemTreeElement,
];


@customElement('gate-nav')
export class GateNavElement extends LitElement {

	protected fakeData = [ createTreeItem(5) ];

	@query('mm-drawer') protected drawerEl: MMDrawer;

	public override connectedCallback(): void {
		super.connectedCallback();

		console.log(this.fakeData);
	}

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
			placement="start"
			open
		>
			<section>
				Here goes the application list

				<mm-item-tree
					.items=${ this.fakeData }
					.label=${ (item: {id: string;}) => item.id }
					.idKey=${ 'id' }
					.childrenKey=${ 'children' }
				></mm-item-tree>
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
