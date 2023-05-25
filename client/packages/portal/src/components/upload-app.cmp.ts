import { UploadElement } from '@roenlie/mimic-elements/upload';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

(() => [ UploadElement ])();


@customElement('gate-upload-app-page')
export class GateUploadAppPage extends LitElement {

	protected override render() {
		return html`
		UPLOAD THE APP HERE!
		<mm-upload target=${ __SERVER_URL + '/api/upload?appid=portal' }></mm-upload>
		`;
	}

	public static override styles = [
		css`

		`,
	];

}
