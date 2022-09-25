import { scrollSlides } from '../services/service';
import { makeElement } from '../utils/element';
import obseravble from '../utils/obseravble';

export const laptopContainer = makeElement('div', { className: 'laptop-container' });

const slider = makeElement('div', { className: 'slider' });

const slides = makeElement('div', { className: 'slides' });

const slide1 = makeElement<HTMLImageElement>('img', { className: 'slides__slide-1' });
const slide2 = makeElement<HTMLImageElement>('img', { className: 'slides__slide-2' });

slide1.src = './assets/img/slide1.png';
slide2.src = './assets/img/slide2.png';

slides.append(slide1, slide2);

slider.appendChild(slides);

laptopContainer.appendChild(slider);

function goToNextImg(): void {
  slides.style.transform = 'translateX(-750px)';
}

function goToPrevImg(): void {
  slides.style.transform = 'translateX(0)';
}

function blockScroll(): void {
  window.removeEventListener('wheel', scrollSlides);
}

function activeScroll(): void {
  window.addEventListener('wheel', scrollSlides);
}


slides.addEventListener('transitionstart', blockScroll);
slides.addEventListener('transitionend', activeScroll);

obseravble.add('next-slide', goToNextImg);
obseravble.add('prev-slide', goToPrevImg);