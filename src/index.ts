import './main.scss';
import { makeElement } from './utils/element';

import { mainTitle } from './components/title';
import { laptopContainer } from './components/laptop';
import { casesContainer } from './components/cases';
import { bubblesContainer } from './components/bubbles';

const root = makeElement('div', { className: 'root' });
document.body.appendChild(root);

root.append(bubblesContainer, mainTitle, laptopContainer, casesContainer);