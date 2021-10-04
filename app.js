// selector funciton

const getElement = (element) => {
  const selected = document.querySelector(element);
  if (selected) return selected;
  else throw new Error(`Please check ${element} selector`);
};

// all elements selected
const checkbox = getElement('.switch input');
const timeduration = getElement('.month');
const totalPrice = getElement('.total-price');
const Inputrange = getElement('.inputRange');
const switcher = getElement('.switch');
const pageViews = getElement('#total-pages');

// create totalPrice on

switcher.addEventListener('click', () => {
  if (checkbox.checked) {
    let totalPriceInt = parseInt(totalPrice.textContent);
    totalPrice.textContent = `${(totalPriceInt - totalPriceInt * 0.25) * 12}`;
    timeduration.textContent = '/year';
    checkAmount();
  } else {
    checkAmount();
    timeduration.textContent = '/month';
  }
});

// checkAmount every time input range changes or button is toggled
function checkAmount() {
  if (Inputrange.value == 1) {
    if (checkbox.checked) totalPrice.textContent = 72;
    else totalPrice.textContent = 8;

    pageViews.textContent = '10k';
  }

  if (Inputrange.value == 2) {
    if (checkbox.checked) totalPrice.textContent = 108;
    else totalPrice.textContent = 12;

    pageViews.textContent = '50k';
  }

  if (Inputrange.value == 3) {
    if (checkbox.checked) totalPrice.textContent = 144;
    else totalPrice.textContent = 16;

    pageViews.textContent = '100k';
  }

  if (Inputrange.value == 4) {
    if (checkbox.checked) totalPrice.textContent = 216;
    else totalPrice.textContent = 24;

    pageViews.textContent = '500k';
  }

  if (Inputrange.value == 5) {
    if (checkbox.checked) totalPrice.textContent = 324;
    else totalPrice.textContent = 36;

    pageViews.textContent = '1M';
  }
}

// Inputrange
Inputrange.addEventListener('input', checkAmount);
