import obseravble from '../utils/obseravble';

export const state = {
  quantitySlides: 1,
  currentSlide: 0,
};

function checkFirstLastSlide(): void {
  if (state.currentSlide === 0) {
    obseravble.dispatch('disable-handlers-on-prev-slide');
  } else if (state.currentSlide !== 0) {
    obseravble.dispatch('active-handlers-on-prev-slide');
  }

  if (state.currentSlide === state.quantitySlides) {
    obseravble.dispatch('disable-handlers-on-next-slide');
  } else if (state.currentSlide !== state.quantitySlides) {
    obseravble.dispatch('active-handlers-on-next-slide');
  }
}

function isFirstSlide(): boolean {
  if (state.currentSlide === 0) {
    return true;
  }
  return false;
}

function isLastSlide(): boolean {
  if (state.currentSlide === state.quantitySlides) {
    return true;
  }
  return false;
}

export function slideToPrev(): void {
  if (isFirstSlide()) return;
  state.currentSlide -= 1;
  obseravble.dispatch('prev-slide');
  checkFirstLastSlide();
}

export function slideToNext(): void {
  if (isLastSlide()) return;
  state.currentSlide += 1;
  obseravble.dispatch('next-slide');
  checkFirstLastSlide();
}

