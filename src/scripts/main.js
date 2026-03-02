'use strict';

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

// write code here
inputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (input.value.trim() === '') {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }

    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = input.name;

    const placeholderText =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    input.setAttribute('placeholder', placeholderText);
    input.parentElement.insertBefore(label, input);
  });
});
