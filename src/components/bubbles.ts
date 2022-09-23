import { makeElement } from '../utils/element';

export const bubblesContainer = makeElement('div', { className: 'bubbles' });

bubblesContainer.innerHTML = `<div class=bubble-1>
      <div class="bubble-1__img"></div>
    </div>
    <div class=bubble-2>
      <div class="bubble-2__img"></div>
    </div>
    <div class=bubble-3>
      <div class="bubble-3__img"></div>
    </div>
    <div class=bubble-4>
      <div class="bubble-4__img"></div>
    </div>
    <div class=bubble-5>
      <div class="bubble-5__img"></div>
    </div>
    <div class=bubble-6>
      <div class="bubble-6__img"></div>
    </div>
    `;