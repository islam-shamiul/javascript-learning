'use strict';
/*function clacAge(birthYear){
    const age = 2037-birthYear;

    function printAge(){
        let output = `${firstName} you are ${age},born in ${birthYear}`
        console.log(output);

        if (birthYear >=1991 && birthYear <= 1996)
        {   //creating new variable with same name as outer scope
            const firstName = 'steven';
            //reassigning outer scope variable value
            output = 'NEW OUTPUT';
            var millenial = true
            const str = `oh you are a millenial, ${firstName}`;
            console.log(str);
            function add (a,b){
                return a+b;
            }
            add(2,3);
        }
        
        console.log(millenial);
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Jonas';
clacAge(1991)

//hoisting with variables
 console.log(me);
 //console.log(job);
 //console.log(year);

 var me = 'Jonas';
 const job = "teache";
 let year = "1991";

 //hoisting with functions
 console.log(addDec(2,3));
 //console.log(addExp(2,3));
 //console.log(addArrow(2,3));

 function addDec(a,b){
     return a+b;
 }

 const addExp = function(a,b){
     return a+b;
 }

 const addArrow =(a,b)=>a+b;

 //example of var variable error 
if(!numProducts)deletShoppingCart()

 var numProducts = 10;

 function deletShoppingCart(){
     console.log('All products deleted!');
 }

 var x =1;
 let y= 2;
 const z= 3;

 console.log(x===window.x);
 console.log(y===window.y);
 console.log(z===window.z);

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcArrow = birthYear => {
  console.log(2097 - birthYear);
  console.log(this);
};

calcArrow(1991);

const Jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
Jonas.calcAge();

const matilda = {
  year: 2017,
};

//function borrowing
matilda.calcAge = Jonas.calcAge;
matilda.calcAge();

const f = Jonas.calcAge;
f();

var firstName = 'mathilda';
const Jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    //solution 1

    //   const self = this; //self or that
    //   const isMillenial = function () {
    //     console.log(self.year >= 1981 && self.year <= 1996);
    //   };
    //   isMillenial(); //just a regular function call so this is undefined
    // },

    //solution 2
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial(); //just a regular function call so this is undefined
  },

  greet: () => {
    console.log(this);
    console.log(`hey,${firstName}`);
  },
};

Jonas.calcAge();
Jonas.greet();

//argument keyword
const addExp = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExp(2, 3);
addExp(2, 3, 6, 7);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);
*/
//prinitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

//refference type
const jessica = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('before marriage:', jessica);
console.log('after marriage:', marriedJessica);

//coping object
const jessica2 = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
  family: ['alice', 'bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('john');
jessicaCopy.family.push('mary');
console.log('Before marriage:', jessica2);
console.log('after marriage', jessicaCopy);
