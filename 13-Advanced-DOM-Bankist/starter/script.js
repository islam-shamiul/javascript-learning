'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
////////////////////////////////////////////////////
///////////////////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
const allSelector = document.querySelectorAll('.section');
console.log(allSelector); //returns NodeList

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); //returns HTML Collection

console.log(document.getElementsByClassName('btn'));

//creating and iserting HTML elements
//we can insert by .insertAdjecntHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = "We use cookies for improved functionality"
message.innerHTML =
  "We use cookies for improved functionality.<button class = 'btn btn--close-cookie'>Got it!</button>";
// header.prepend(message);
header.append(message);

//delete element

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//Styles
message.style.backgroundColor = '#348595';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 10 + 'px';

//changing css property
document.documentElement.style.setProperty('--color-primary', 'lightblue');

//attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
logo.alt = 'Beautiful minimalist logo';

//non-standard
console.log(logo.desinger);
console.log(logo.getAttribute('desinger'));
console.log(logo.getAttribute('src'));

// data attributes
console.log(logo.dataset.versionNumber);
