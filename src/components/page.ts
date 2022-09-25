import { makeElement } from '../utils/element';
import obseravble from '../utils/obseravble';
import data from '../settings/data';

import { scrollSlides, state } from '../services/service';

import { mainTitle } from './title';
import { laptopContainer } from './laptop';
import { casesContainer } from './cases';
import { bubblesContainer } from './bubbles';
import { cursor } from './cursor';

export const page = makeElement('div', { className: 'page-cases' });

page.append(bubblesContainer, mainTitle, laptopContainer, casesContainer, cursor);

function changeBackgroundColor() {
  page.style.backgroundColor = `${data[state.currentSlide].background}`;
}


window.addEventListener('wheel', scrollSlides);

obseravble.add('next-slide', changeBackgroundColor);
obseravble.add('prev-slide', changeBackgroundColor);