import './main.scss';
import { makeElement } from './utils/element';
import { mainTitle } from './components/title';
import { laptopContainer } from './components/laptop';
import { casesContainer } from './components/cases';

const root = makeElement('div', { name: 'Root', className: 'root' });
document.body.appendChild(root);


root.append(mainTitle, laptopContainer, casesContainer);