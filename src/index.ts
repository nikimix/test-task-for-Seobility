import './main.scss';
import { makeElement } from './utils/element';

import { page } from './components/page';

const root = makeElement('div', { className: 'root' });

root.append(page);

document.body.appendChild(root);
