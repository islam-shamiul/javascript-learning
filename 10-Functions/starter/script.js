'use strict';
/*const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 1);

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schedtmann',
  passport: 247369505449,
};

const cheekIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  console.log(passenger.name);
  if (passenger.passport == 247369505449) {
    alert('Check in');
  } else {
    alert('wrong passport number');
  }
};

//pass as a value
cheekIn(flight, { ...jonas });

// console.log(flight);
console.log(jonas);
*/

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...other] = str.split(' ');
  //console.log(...other);
  return [firstWord.toUpperCase(), ...other].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string : ${str}`);
  console.log(`Transformed string : ${fn(str)}`);
  console.log(`Transformed by : ${fn.name}`);
};

transformer('this is a string', upperFirstWord);
transformer('this is a string', oneWord);

//returning a function from a function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Naqi');

//Same function implemented as arrow function

const greetArr = greeting => name => console.log(`${greeting} ${name} `);

greetArr('Hey')('Jonas');

//call method

const luftansa = {
  airline: 'Luftansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum} , name` });
  },
};

luftansa.book(234, 'Jonas');
console.log(luftansa);

const euroWings = {
  airline: 'Euro WIngs',
  iataCode: 'EW',
  bookings: [],
};
const book = luftansa.book;

book.call(euroWings, 256, 'Naqi');
console.log(euroWings.bookings);

//bind method

const bookEW = book.bind(euroWings);
bookEW(23, 'Jonas');
const bookLH = book.bind(luftansa);

const bookEW23 = book.bind(euroWings, 23);
bookEW23('mia');
bookEW23('Naqi');

//with eventlisteners
luftansa.planes = 300;
luftansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', luftansa.buyPlane.bind(luftansa));
