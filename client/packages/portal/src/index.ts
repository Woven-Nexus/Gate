import './app.cmp.js';

while (document.body.firstElementChild)
	document.body.firstElementChild.remove();

document.body.appendChild(document.createElement('gate-app'));
