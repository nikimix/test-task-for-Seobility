import { makeElement } from '../utils/element';
import obseravble from '../utils/obseravble';
import { page } from './page';

export const bubblesContainer = makeElement('div', { className: 'bubbles-container' });

bubblesContainer.innerHTML = `<div class="bubble-1 bubble">
      <div class="bubble-1__img bubble-img" ></div>
    </div>
    <div class="bubble-2 bubble">
      <div class="bubble-2__img bubble-img"></div>
    </div>
    <div class="bubble-3 bubble">
      <div class="bubble-3__img bubble-img"></div>
    </div>
    <div class="bubble-4 bubble">
      <div class="bubble-4__img bubble-img"></div>
    </div>
    <div class="bubble-5 bubble">
      <div class="bubble-5__img bubble-img"></div>
    </div>
    <div class="bubble-6 bubble">
      <div class="bubble-6__img bubble-img"></div>
    </div>
    `;

const bubbles = bubblesContainer.querySelectorAll('.bubble');
function goToNextSlideBubbles(): void {
  bubblesContainer.style.transform = 'translateX(-54.5%)';
}

function goToPrevSlideBubbles(): void {
  bubblesContainer.style.transform = 'translateX(0)';
}

function parallaxEffect(evt: MouseEvent): void {
  const distanceToPageX = page.getBoundingClientRect().left;
  const distanceToPageY = page.getBoundingClientRect().top;

  const coordX = evt.clientX - distanceToPageX - 0.5 * page.offsetWidth;
  const coordY = evt.clientY - distanceToPageY - 0.5 * page.offsetHeight;

  bubbles.forEach((e) => {
    const x = (coordX * .15).toFixed(2);
    const y = (coordY * .15).toFixed(2);
    e.setAttribute('style', `transform: translate(${-x}px, ${-y}px); transition: none;`);
  });
}

function reset() {
  bubbles.forEach((e) => {
    e.removeAttribute('style');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  page.addEventListener('mousemove', parallaxEffect);
  page.addEventListener('mouseout', reset);
});

obseravble.add('next-slide', goToNextSlideBubbles);
obseravble.add('prev-slide', goToPrevSlideBubbles);