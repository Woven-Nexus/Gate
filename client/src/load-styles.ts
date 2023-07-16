export const loadStyles = (url: string, links: {id: string; href: string;}[]): void => {
	links.forEach(style => {
		if (document.head.querySelector('#' + style.id))
			return;

		const linkEl = document.createElement('link');
		linkEl.id = style.id;
		linkEl.rel = 'stylesheet';
		linkEl.href = url + '/' + (style.href)
			.replaceAll(location.origin, '')
			.replaceAll(/\/+/g, '/') // Remove all duplicate consecutive /
			.replaceAll(/^\//g, '')  // Remove initial /
			.replaceAll(/\/$/g, ''); // Remove ending /

		document.head.appendChild(linkEl);
	});
};
