import '@roenlie/mimic-elements/icon';
import '@roenlie/mimic-elements/text';
import '@roenlie/mimic-elements/ripple';

import { sharedStyles } from '@roenlie/mimic-lit';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';


@customElement('clk-sidebar-element')
export class SidebarElement extends LitElement {

	@property({ type: Array }) public items: {
		icon: string;
		label: string;
		path: () => string;
	}[] = [];

	protected itemTemplate(item: typeof this.items[0]) {
		return html`
		<mm-ripple>
			<a href=${ item.path() }>
				<mm-icon url=${ item.icon }></mm-icon>
				<mm-text>${ item.label }</mm-text>
			</a>
		</mm-ripple>
		`;
	}

	protected override render(): unknown {
		return html`
		<menu>
			${ map(this.items, item => this.itemTemplate(item)) }
		</menu>
		`;
	}

	public static override styles = [
		sharedStyles,
		css`
		:host {
			display: grid;
		}
		menu {
			all: unset;
			display: grid;
			grid-auto-flow: row;
			grid-auto-rows: max-content;
			padding-block: 12px;
			padding-inline: 8px;
		}
		mm-ripple {
			--ripple-bg: var(--surface-variant-press);
		}
		a {
			display: grid;
			align-items: center;
			gap: 8px;
			grid-template-columns: auto 1fr;
			padding-inline: 12px;
			padding-block: 6px;
			border-radius: 8px;
			cursor: pointer;
		}
		a:hover {
			background-color: var(--surface-variant-hover);
			box-shadow: var(--box-shadow-s);
		}
		`,
	];

}
