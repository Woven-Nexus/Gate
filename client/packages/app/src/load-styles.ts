export const loadStyles = (url: URL, version: string) => {
	const links = [
		{ id: 'gate-style-index', stylesheet: 'tokens/index' },
		{ id: 'gate-style-tokens-all', stylesheet: 'tokens/tokens-all' },
		{ id: 'gate-style-tokens-extra', stylesheet: 'tokens/tokens-extra' },
		{ id: 'gate-style-tokens-font', stylesheet: 'tokens/tokens-font' },
		{ id: 'gate-style-tokens-dark', stylesheet: 'tokens/tokens-dark' },
		{ id: 'gate-style-tokens-light', stylesheet: 'tokens/tokens-light' },
	];

	links.forEach(style => {
		if (document.head.querySelector('#' + style.id))
			return;

		const linkEl = document.createElement('link');
		linkEl.id = style.id;
		linkEl.rel = 'stylesheet';
		linkEl.href = url.toString()
			+ 'root-design/'
			+ version
			+ '/'
			+ style.stylesheet
			+ '.css';

		document.head.appendChild(linkEl);
	});
};
