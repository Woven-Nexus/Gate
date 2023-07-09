import './app-element.js';

import { SERVER_URL } from './constants.js';
import { loadStyles } from './load-styles.js';


loadStyles(
	SERVER_URL + '/serve/root-design/1.0.0/',
	[
		{ id: 'gate-style-index', href: 'tokens/index.css' },
		{ id: 'gate-style-tokens-all', href: 'tokens/tokens-all.css' },
		{ id: 'gate-style-tokens-extra', href: 'tokens/tokens-extra.css' },
		{ id: 'gate-style-tokens-font', href: 'tokens/tokens-font.css' },
		{ id: 'gate-style-tokens-dark', href: 'tokens/tokens-dark.css' },
		{ id: 'gate-style-tokens-light', href: 'tokens/tokens-light.css' },
	],
);
