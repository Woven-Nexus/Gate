export const loadStyles = (url: URL, links: {id: string; href: string;}[]) => {
	links.forEach(style => {
		if (document.head.querySelector('#' + style.id))
			return;

		const linkEl = document.createElement('link');
		linkEl.id = style.id;
		linkEl.rel = 'stylesheet';
		linkEl.href = (url.toString()
			+ '/'
			+ style.href).replaceAll(/\/+/g, '/');

		document.head.appendChild(linkEl);
	});
};
