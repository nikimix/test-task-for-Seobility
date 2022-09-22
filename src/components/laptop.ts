import { makeElement } from '../framework/element';

export const laptopContainer = makeElement('div', { name: 'LaptopContainer', className: 'laptop-container' });

const slider = makeElement('div', { name: 'Slider', className: 'slider' });

const slides = makeElement('div', { name: 'Slides', className: 'slides' });

const slide1 = makeElement<HTMLImageElement>('img', { name: 'Slide1', className: 'slides__slide-1' });
const slide2 = makeElement<HTMLImageElement>('img', { name: 'Slide2', className: 'slides__slide-2' });
slide1.src = './assets/img/slide1.png';
slide2.src = './assets/img/slide2.png';

slides.append(slide1, slide2);

slider.appendChild(slides);

laptopContainer.appendChild(slider);

function onUpScroll() {
  slides.style.transform = 'translateX(-750px)';
}

function onDownScroll() {
  slides.style.transform = 'translateX(0)';
}

function scrollSlides(evt: WheelEvent) {
  if (evt.deltaY > 0) {
    onUpScroll();
  } else {
    onDownScroll();
  }
}

function blockScroll() {
  window.removeEventListener('wheel', scrollSlides);
}

function activeScroll() {
  window.addEventListener('wheel', scrollSlides);
}

window.addEventListener('transitionstart', blockScroll);
window.addEventListener('transitionend', activeScroll);
window.addEventListener('wheel', scrollSlides);
