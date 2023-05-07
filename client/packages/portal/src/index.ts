import './components/app.cmp.js';

import { loadStyles } from '@roenlie/gate-utilities/styles';

loadStyles();

while (document.body.firstElementChild)
	document.body.firstElementChild.remove();

document.body.appendChild(document.createElement('gate-app'));


document.documentElement.setAttribute('color-scheme', 'dark');
