import { makeElement } from '../utils/element';
import { page } from './page';

export const cursor = makeElement('div', { className: 'cursor' });


function moveCursor(evt: MouseEvent): void {
  const x = evt.clientX - page.offsetLeft;
  const y = evt.clientY - page.offsetTop;
  cursor.style.transform = `translate3d(${x - cursor.offsetWidth / 2}px, ${y - cursor.offsetHeight / 2}px, 0)`;
}

export function changeCursor(evt: MouseEvent) {
  if (evt.type === 'mouseover') {
    cursor.style.width = '100px';
    cursor.style.height = '100px';  
  } else if (evt.type === 'mouseout') {
    cursor.removeAttribute('style');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  page.addEventListener('mousemove', moveCursor);
});