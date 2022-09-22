import './main.scss';
import { makeElement } from './framework/element';
import { mainTitle } from './components/title';
import { laptopContainer } from './components/laptop';

const root = makeElement('div', { name: 'Root', className: 'root' });
document.body.appendChild(root);


root.append(mainTitle, laptopContainer);