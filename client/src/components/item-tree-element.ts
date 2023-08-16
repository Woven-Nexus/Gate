import { sharedStyles } from '@roenlie/mimic-lit/styles';
import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { when } from 'lit/directives/when.js';


declare global {
	interface HTMLElementTagNameMap {
		'mm-item-tree': ItemTreeElement;
	}
}

export type ComputedFlat<A> = {
	[K in keyof A]: A[K];
} & unknown

export type RecTreeItem<
	IdKey extends string | number,
	ChildKey extends string | number
> = {[x: keyof any]: any;}
& {[idKey in IdKey]: keyof any;}
& {[childkey in ChildKey]?: RecTreeItem<IdKey, ChildKey>[];}


export type TreeItem<
	IdKey extends string | number = 'id',
	ChildKey extends string | number = 'children'
> = ComputedFlat<RecTreeItem<IdKey, ChildKey>>;


@customElement('mm-item-tree')
export class ItemTreeElement extends LitElement {

	@property({ type: Array }) public items: Record<keyof any, any>[];
	@property({ type: Object, attribute: false }) public label: (item: any) => string;
	@property({ type: String }) public idKey: string;
	@property({ attribute: false }) public childrenKey: string;

	protected Node(item: Record<keyof any, any>) {
		return html`
		<li>
			${ when(item[this.childrenKey]?.length, () => html``) }
			<div>${ this.label(item) }</div>
		</li>
		`;
	}

	public override render() {
		return html`
		<ol>
			${ map(this.items, item => this.Node(item)) }
		</ol>
		`;
	}

	public static override styles = [
		sharedStyles,
		css`
		:host {
			display: flex;
			background-color: grey;
			border: 1px solid black;
		}
	`,
	];

}
