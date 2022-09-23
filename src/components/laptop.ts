import { makeElement } from '../utils/element';

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

function onUpScroll(): void {
  slides.style.transform = 'translateX(-750px)';
}

function onDownScroll(): void {
  slides.style.transform = 'translateX(0)';
}

function scrollSlides(evt: WheelEvent): void {
  if (evt.deltaY > 0) {
    onUpScroll();
  } else {
    onDownScroll();
  }
}

function blockScroll(): void {
  window.removeEventListener('wheel', scrollSlides);
}

function activeScroll(): void {
  window.addEventListener('wheel', scrollSlides);
}

slides.addEventListener('transitionstart', blockScroll);
slides.addEventListener('transitionend', activeScroll);

window.addEventListener('wheel', scrollSlides);