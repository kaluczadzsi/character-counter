'use strict';

const totalEl = document.querySelector('.counter__data-total');
const remainEl = document.querySelector('.counter__data-remaining');
const textarea = document.querySelector('textarea');

let remaining = textarea.getAttribute('maxlength');

textarea.addEventListener('keyup', (e) => {
  updateCounter(e);
});

function updateCounter(e) {
  let total = e.target.value.length;

  totalEl.innerText = total;
  remainEl.innerText = remaining - total;
}
