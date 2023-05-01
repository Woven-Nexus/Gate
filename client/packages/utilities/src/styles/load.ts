import index from './index.css?inline';
import allTokens from './tokens-all.css?inline';
import darkTokens from './tokens-dark.css?inline';
import extraTokens from './tokens-extra.css?inline';
import lightTokens from './tokens-light.css?inline';
import typeTokens from './tokens-typography.css?inline';


export const loadStyles = () => {
	const stylesheets = [
		{ id: 'gate-style-index', html: index },
		{ id: 'gate-style-tokens-all', html: allTokens },
		{ id: 'gate-style-tokens-extra', html: extraTokens },
		{ id: 'gate-style-tokens-type', html: typeTokens },
		{ id: 'gate-style-tokens-dark', html: darkTokens },
		{ id: 'gate-style-tokens-light', html: lightTokens },
	];

	stylesheets.forEach(style => {
		if (document.head.querySelector('#' + style.id))
			return;

		const styleEl = document.createElement('style');
		styleEl.id = style.id;
		styleEl.innerHTML = style.html;

		document.head.appendChild(styleEl);
	});
};
