'use strict';
const weekdays = ['thu', 'fri', 'sat', 'sun', 'mon', 'tue', 'wed'];

const openingHours = {
  [weekdays[0]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for a later exercise

// Data needed for first part of the section

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainMenuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]];
  },

  openingHours,
  orderDelivery({
    starterIndex = 1,
    mainMenuIndex = 2,
    time = '22:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainMenuIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(inc1, inc2, inc3) {
    console.log(`here is your pasta with ${inc1}, ${inc2} and ${inc3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

//with out optional chaining

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['thu', 'fri', 'sat', 'sun', 'mon', 'tue', 'wed'];

for (const day of days) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  const close = restaurant.openingHours[day]?.close ?? 'closed';
  console.log(`On ${day} we open at ${open} and close at ${close} `);
}
//optional chaining for methods

console.log(restaurant.order?.(0, 1) ?? "method doesn't exist");
console.log(
  restaurant.orderRisotto?.('chese', ['dough', 'das']) ?? "method doesn't exist"
);

/*
//shor circuiting
console.log('---OR----');
console.log(3 || 'jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'hello' || 23 || null);

restaurant.numGuest = 23;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);
const guest2 = restaurant.numGuest || 10;
console.log(guest2);

console.log('---AND---');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach', 'onions');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
//nullish values
restaurant.numGuest = 0;
const guest = restaurant.numGuest ?? 10;
console.log(guest);
*/

/*
///////////////////////////////////////////////////////////////////
//1.destucturing

//rest, because on the left side of assignment oparator(array)

const [a, b, ...other] = [1, 2, 3, 4, 5, 6];
console.log(a, b, other);

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFoods);

//rest in objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2.Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(2, 6, 8, 7, 7);
add(8, 9, 7, 4, 6, 8, 7, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'olives', 'spinach', 'onions');
///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//destucturing objects
/*restaurant.orderDelivery({
  starterIndex:1,
  mainMenuIndex:0,
  address:'home',
  time:"22:30"
})

restaurant.orderDelivery({
  address:'home',
  starterIndex:2,
})

const{name,openingHours,categories}= restaurant;
console.log(name,openingHours,categories);
const{name:resturantName ,openingHours:hours, categories:tags } = restaurant;
console.log(resturantName,hours,categories);

const {menu=[], starterMenu: starter=[]} = restaurant;
console.log(menu,starter);

//mutating variables
let a = 11;
let b = 12;
const obj = {a:1,b:2,c:3};
({a,b}=obj);
console.log(a,b);

//nested object
const{fri:{open,close}}=openingHours;
console.log(open,close);
//////////////////////////////////////////////////

//spread array

const arr = [7,8,9];
const badNewArr = [1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);

const newArr = [1,2,...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu,'Gnocci'];
console.log(newMenu);

//copy arrary
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays

const Menu = [...restaurant.starterMenu,...restaurant.mainMenu];
console.log(Menu);

//iterables:arrays, strings,maps,sets. Not objects
const str = 'Jonas';
const letters = [...str,' ','S.']
console.log(letters);
console.log(...str);

// const ingredients = [prompt("Ingredient1:"),prompt("Ingredient2:"),prompt("Ingredient3:")]
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//object speparator
const newResturent = {fundingYear:1988, ...restaurant,funderName: "Himu"};
console.log(newResturent);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'nana miya';
console.log(restaurantCopy.name);
console.log(restaurant.name);


//destructing array
const arr = [2,3,4];
const a =  arr[0];
const b =  arr[1];
const c =  arr[2];

const[x,y,z] = arr;
console.log(x,y,z); 

let [main,secondary] = restaurant.categories;
console.log(main,secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main,secondary);

[main,secondary] = [secondary,main];
console.log(main,secondary);

const[statrter , mainCourse]=restaurant.order(2,0);
console.log(statrter,mainCourse);

const nested = [2,3,[4,5]];
//const [i,,j]=nested;
const [i,,[j,k]]=nested;
console.log(i,j,k);

//default values

const [p=1,q=1,r=1] = [8,9];
console.log(p,q,r);*/

//coding challenge 1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
const [player1, player2] = game.players;
const [gk, ...fieldPlayers] = player1;
const allPlayers = [...player1, ...player2];
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(gk);
console.log(fieldPlayers);
console.log(allPlayers);
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...names) {
  console.log(...names);
  console.log(`${names.length} goals were scored`);
};
printGoals(...game.scored);

team1 < team2 && console.log('team 1 is likely to win');
team2 < team1 && console.log('team 2 is likely to win');
*/
//1.
const entries = Object.entries(game.scored);
for (let [num, player] of entries) {
  console.log(`Goal ${parseInt(num) + 1}:${player}`);
}
const odds = Object.values(game.odds);
//2
let avg = 0;
for (let odd of odds) {
  avg += odd;
}
avg /= odds.length;
console.log(avg);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? `draw` : `victory ${game[team]}`;
  console.log(`odd of ${teamStr} ${odd}`);
}
