'use strict';

// Data needed for a later exercise


// Data needed for first part of the section

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex,mainMenuIndex){
    return[this.starterMenu[starterIndex],this.mainMenu[mainMenuIndex]];
  },  
  openingHours: {
    thu: {
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
  },
  orderDelivery: function({starterIndex=1,mainMenuIndex=2,time='22:00',address,})
  {
      console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainMenuIndex]} will be delivered to ${address} at ${time}`);
  },
  orderPasta: function(inc1,inc2,inc3)
  {
    console.log(`here is your pasta with ${inc1}, ${inc2} and ${inc3}`)
  }
  
};

restaurant.orderDelivery({
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

/*
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