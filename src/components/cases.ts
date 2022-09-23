import { makeElement } from '../utils/element';

export const casesContainer = makeElement('div', { name: 'CasesContainer', className: 'cases' });

const background = makeElement('div', { name: 'CasesBackgroundImg', className: 'cases__bg-img' });

const wrapper = makeElement('div', { name: 'CasesWrapper', className: 'cases__wrapper' });

const title = makeElement('h2', { name: 'CasesTitle', className: 'cases__title', content: 'Создание корпоративного сайта для холдинга «АМКОДОР»' });

const description = makeElement('p', { name: 'CasesDescription', className: 'cases__description', content: 'Разработать и запустить корпоративный сайт для холдинга “АМКОДОР” для развития дилерской сети на рынках Беларуси и стран СНГ.' });

const btnContainer = makeElement('div', { name: 'BtnContainer', className: 'cases__btn-container' });

const btnPrev = makeElement<HTMLButtonElement>('button', { name: 'CasesBtnPrev', className: 'cases__btn-prev btn' });
const btnNext = makeElement<HTMLButtonElement>('button', { name: 'CasesBtnNext', className: 'cases__btn-next btn' });

const table = makeElement('table', { name: 'CasesFeature', className: 'cases__feature feature' });

table.innerHTML = `<tr class="feature__row">
      <td class="feature__column">
        <h3 class="feature__title">Направление</h3>
        <p class="feature__text">WEB-разработка</p>
      </td>
      <td class="feature__column">
        <h3 class="feature__title">Тип проекта</h3>
        <p class="feature__text">Корпоративные сайты</p>
      </td>
      <td class="feature__column">
        <h3 class="feature__title">Отрасль</h3>
        <p class="feature__text">Производство, Торговля</p>
      </td>
    </tr>`;

btnContainer.append(btnPrev, btnNext);
wrapper.append(title, description, btnContainer, table);
casesContainer.append(background, wrapper);
