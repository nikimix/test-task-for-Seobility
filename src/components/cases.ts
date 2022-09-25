import obseravble from '../utils/obseravble';
import data from '../settings/data';

import { slideToNext, slideToPrev, state } from '../services/service';
import { makeElement } from '../utils/element';
import { changeCursor } from './cursor';

//create elements
export const casesContainer = makeElement('div', { className: 'cases', attribute: { name: 'data', value: 'visible' } });

const background = makeElement('div', { className: 'cases__bg-img' });

const wrapper = makeElement('div', { className: 'cases__wrapper' });

const title = makeElement('h2', {
  className: 'cases__title  visible',
  content: `${data[state.currentSlide]['cases-title']}`,
});

const description = makeElement('p', {
  className: 'cases__description  visible',
  content: `${data[state.currentSlide]['cases-description']}`,
});

const btnContainer = makeElement('div', { className: 'cases__btn-container' });

const btnPrev = makeElement<HTMLButtonElement>('button', {
  className: 'cases__btn-prev btn btn--disabled',
  attribute: [
    { name: 'data', value: 'prev' },
  ],
});

const btnNext = makeElement<HTMLButtonElement>('button', {
  className: 'cases__btn-next btn',
  attribute: { name: 'data', value: 'next' },
});

const table = makeElement('table', { className: 'cases__features features' });

table.innerHTML = `<tr class="feature__row">
      <td class="feature__column">
        <h3 class="feature__title">Направление</h3>
        <p class="feature__text visible">${data[state.currentSlide].features[0]}</p>
      </td>
      <td class="feature__column">
        <h3 class="feature__title">Тип проекта</h3>
        <p class="feature__text  visible">${data[state.currentSlide].features[1]}</p>
      </td>
      <td class="feature__column">
        <h3 class="feature__title">Отрасль</h3>
        <p class="feature__text  visible">${data[state.currentSlide].features[2]}</p>
      </td>
    </tr>`;


//assemble to whole
btnContainer.append(btnPrev, btnNext);
wrapper.append(title, description, btnContainer, table);
casesContainer.append(background, wrapper);


// functions event handlers
function onBtnClick(evt: Event): void {
  const el = evt.target;

  if (el instanceof HTMLButtonElement) {
    if (el.className.includes('disabled')) return;
    if (el.getAttribute('data') == 'next') {
      slideToNext();
    } else {
      slideToPrev();
    }
  }
}

function disablePrevBtn(): void {
  btnPrev.classList.add('btn--disabled');
}

function disableNextBtn(): void {
  btnNext.classList.add('btn--disabled');
}

function activePrevBtn(): void {
  btnPrev.classList.remove('btn--disabled');
}

function activeNextBtn(): void {
  btnNext.classList.remove('btn--disabled');
}

function toggleVisibility(): void {
  title.classList.toggle('visible');
  title.classList.toggle('hidden');

  description.classList.toggle('visible');
  description.classList.toggle('hidden');

  table.querySelectorAll('.feature__text').forEach((e) => {
    if (e instanceof HTMLElement) {
      e.classList.toggle('visible');
      e.classList.toggle('hidden');
    }
  });
}

function updateData(evt: AnimationEvent): void {
  if (evt.animationName !== 'hide') return;

  title.innerHTML = `${data[state.currentSlide]['cases-title']}`;
  description.innerHTML = `${data[state.currentSlide]['cases-description']}`;
  table.querySelectorAll('.feature__text').forEach((e, i) => {
    e.innerHTML = `${data[state.currentSlide].features[i]}`;
  });
  toggleVisibility();
}

function update(): void {
  toggleVisibility();
}

// add event handlers
btnContainer.addEventListener('click', onBtnClick);

casesContainer.addEventListener('animationend', updateData);

btnNext.addEventListener('mouseover', changeCursor);
btnNext.addEventListener('mouseout', changeCursor);
btnPrev.addEventListener('mouseover', changeCursor);
btnPrev.addEventListener('mouseout', changeCursor);

obseravble.add('disable-handlers-on-prev-slide', disablePrevBtn);
obseravble.add('disable-handlers-on-next-slide', disableNextBtn);
obseravble.add('active-handlers-on-prev-slide', activePrevBtn);
obseravble.add('active-handlers-on-next-slide', activeNextBtn);

obseravble.add('next-slide', update);
obseravble.add('prev-slide', update);