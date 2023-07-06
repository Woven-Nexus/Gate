import './time-element.js';
import '@roenlie/mimic-elements/button';
import '@roenlie/mimic-elements/icon';

import { domId, EventOf } from '@roenlie/mimic-core/dom';
import { listen } from '@roenlie/mimic-lit/decorators';
import { sharedStyles } from '@roenlie/mimic-lit/styles';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';

import { swapItems } from '../utilities/swap-items.js';
import type { TimeFieldElement, TimerElement } from './time-element.js';


type Timer = {
	id: string;
	label: string;
	time: string;
}


@customElement('clk-timer-page')
export class TimerPageElement extends LitElement {

	protected timers: Timer[] = JSON.parse(localStorage.getItem('clk-timers') ?? '[]');

	@listen('update') protected handleUpdate(ev: CustomEvent) {
		const target = ev.composedPath().at(0) as TimerElement;

		const timer = this.timers.find(t => t.id === target.id);
		if (timer) {
			timer.label = target.label;
			timer.time = target.time;

			this.updateLocalStorage();
		}
	}

	@listen('remove') protected handleRemove(ev: CustomEvent) {
		const target = ev.composedPath().at(0) as TimerElement;

		const timer = this.timers.find(t => t.id === target.id);
		if (timer) {
			const indexToRemove = this.timers.indexOf(timer);
			this.timers.splice(indexToRemove, 1);
			this.updateLocalStorage();

			this.requestUpdate();
		}
	}

	protected updateLocalStorage() {
		localStorage.setItem('clk-timers', JSON.stringify(this.timers));
	}

	protected newDialog() {
		const dialogEl = document.createElement('mm-dialog');
		dialogEl.modal = true;
		dialogEl.closeOnBlur = true;
		dialogEl.createConfig(() => ({
			label: '',
			time:  '0:0:0',
		})).actions((dialog, state) => ({
			save: () => {
				const timer = { id: domId(), label: state.label, time: state.time };
				this.timers.push(timer);
				this.updateLocalStorage();

				this.requestUpdate();

				dialog.close();
			},
		})).template({
			render: (dialog, state, actions) => html`
				<div class="header">
					<mm-text>
						Add new timer
					</mm-text>
				</div>

				<div class="body">
					<clk-time-field
						style="grid-area: time;"
						.value=${ state.time }
						@change=${ (ev: EventOf<TimeFieldElement>) => state.time = ev.target.value }
					></clk-time-field>
					<mm-icon
						style="grid-area: icon;font-size:18px;"
						url="https://icons.getbootstrap.com/assets/icons/pencil-square.svg"
					></mm-icon>
					<mm-input
						style="grid-area: field;"
						label="Name"
						size="large"
						.value=${ state.label }
						@input=${ (ev: EventOf<HTMLInputElement>) => state.label = ev.target.value }
					></mm-input>
				</div>

				<div class="footer">
					<mm-button
						size="small"
						shape="rounded"
						@click=${ actions.save }
					>
						<mm-icon slot="prefix" url="https://icons.getbootstrap.com/assets/icons/save.svg"></mm-icon>
						<mm-text type="body-large">Save</mm-text>
					</mm-button>

					<mm-button
						size="small"
						shape="rounded"
						variant="text"
						@click=${ () => dialog.close() }
					>
						<mm-icon slot="prefix" url="https://icons.getbootstrap.com/assets/icons/x-lg.svg"></mm-icon>
						<mm-text type="body-large">Cancel</mm-text>
					</mm-button>
				</div>
				`,
			style: css`
				dialog::backdrop {
					backdrop-filter: blur(1px);
				}
				.base {
					outline: none;
				}
				.host {
					display: grid;
					grid-template-rows: auto 1fr;
					border-radius: 8px;
					background-color: rgba(40,40,40,1);
					padding-bottom: 12px;
					border: 1px solid rgb(200 200 200 / 50%);
					gap: 12px;
				}
				.header {
					display: grid;
					grid-template-columns: 1fr auto;
					align-items: center;
					padding-left: 12px;
				}
				mm-icon {
					pointer-events: none;
				}
				.body {
					display: grid;
					justify-content: center;
					grid-template: "time time" 1fr
										"icon field" auto
										/ auto 1fr;
					padding-inline: 12px;
					align-items: center;
					gap: 8px;
				}
				.footer {
					display: grid;
					place-items: center;
					grid-template-columns: 1fr 1fr;
					gap: 6px;
					padding-inline: 12px;
					padding-top: 12px;
				}
				`,
		});

		this.renderRoot.append(dialogEl);
	}

	protected override render() {
		return html`
		${ map(this.timers, timer => html`
			<clk-timer
				id   =${ timer.id }
				label=${ timer.label }
				time =${ timer.time }
				draggable="true"
				@dragstart=${ (ev: DragEvent) => {
					ev.dataTransfer!.effectAllowed = 'move';
					ev.dataTransfer?.setData('clock-id', timer.id);
				} }
				@dragenter=${ (ev: DragEvent) => ev.preventDefault() }
				@dragover=${ (ev: DragEvent) => ev.preventDefault() }
				@drop=${ (ev: DragEvent) => {
					const dropId = ev.dataTransfer!.getData('clock-id');
					if (dropId !== timer.id) {
						const fromIndex = this.timers.findIndex(t => t.id === dropId);
						const toIndex = this.timers.findIndex(t => t.id === timer.id);

						swapItems(this.timers, fromIndex, toIndex);
						this.updateLocalStorage();

						this.requestUpdate();
					}
				} }
			></clk-timer>
		`) }

		<div class="controls">
			<mm-button
				type="icon"
				variant="text"
				@click=${ this.newDialog }
			>
				<mm-icon
					style="font-size:20px;"
					url="https://icons.getbootstrap.com/assets/icons/plus-lg.svg"
				></mm-icon>
			</mm-button>
		</div>
		`;
	}

	public static override styles = [
		sharedStyles,
		css`
		:host {
			overflow: auto;
			display: flex;
			gap: 12px;
			padding-block: 16px;
			padding-inline: 22px;
			flex-flow: row wrap;
    		justify-content: center;
			align-content: start;
		}
		.controls {
			position: absolute;
			right: 25px;
			bottom: 25px;
			display: flex;
			background-color: rgb(50 50 50 / 50%);
			box-shadow: var(--box-shadow-s);
			padding: 8px;
			border: 1px solid rgb(200 200 200 / 25%);
			border-radius: 6px;
			gap: 8px;
		}
		`,
	];

}
