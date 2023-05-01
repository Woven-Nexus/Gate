import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';


@customElement('gt-input')
export class InputCmp extends LitElement {

	@property() public placeholder?: string;

	public override render() {
		return html`
		<link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />

		<div class="webflow-style-input">
			<input type="text" placeholder=${ ifDefined(this.placeholder) }></input>
			<button><i class="icon ion-android-search"></i></button>
		</div>
		`;
	}

	public static override styles = [
		css`
		:host {
			display: grid;
			height: min-content;
			width: min-content;

			--input-text-inactive: #7881A1;
			--input-text-active: #BFD2FF;
			--input-background: rgba(57, 63, 84, 0.8);
		}

		*, *:before, *:after { box-sizing: border-box; }
		input { border-style: none; background: transparent; outline: none; }
		button { padding: 0; background: none; border: none; outline: none; }

		.webflow-style-input {
			position: relative;
			display: flex;
			flex-direction: row;
			max-width: 400px;
			margin: 0 auto;
			border-radius: 2px;
			padding-block: 2px;
			padding-inline: 12px;
			background: var(--input-background);
		}
		.webflow-style-input::after {
			content: "";
			position: absolute;
			left: 0px;
			right: 0px;
			bottom: 0px;
			z-index: 999;
			height: 2px;
			border-bottom-left-radius: 2px;
			border-bottom-right-radius: 2px;
			background-position: 0% 0%;
			background: linear-gradient(to right,
				#B294FF, #57E6E6, #FEFFB8, #57E6E6, #B294FF, #57E6E6);
			background-size: 500% auto;
			animation: gradient 3s linear infinite;
			opacity: 0.5;
		}
		.webflow-style-input:focus-within::after {
			opacity: 1;
		}
		.webflow-style-input input {
			flex-grow: 1;
			color: var(--input-text-active);
			font-size: 16px;
			line-height: 150%;
			vertical-align: middle;
		}
		.webflow-style-input input::-webkit-input-placeholder {
			color: var(--input-text-inactive);
		}
		.webflow-style-input button {
			color:  var(--input-text-inactive);
			font-size: 20px;
			line-height: 20px;
			vertical-align: middle;
			transition: color .25s;
		}
		.webflow-style-input button:hover {
			color: var(--input-text-active);
		}

		@keyframes gradient {
			0% {
				background-position:0 0
			}
			100%{
				background-position:100% 0
			}
		}
	`,
	];

}


declare global {
	interface HTMLElementTagNameMap {
		'pl-input': InputCmp;
	}
}
