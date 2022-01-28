'use strict';

/*COADINF CHALLENGE 1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.acceleration = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.acceleration();
bmw.acceleration();
bmw.brake();

mercedes.acceleration();
mercedes.acceleration();
mercedes.brake();
*/

/*ES6 class style

 class expresstion
const PersonCl = class{}


class PersonCl {
  constructor(fullName, birthyear) {
    this.fullName = fullName;
    this.birthyear = birthyear;
  }
  //this will be added to the .prototype property of the class
  clacAge() {
    console.log(2037 - this.birthyear);
  }
  //set a  property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Dave', 1996);
console.log(jessica);
jessica.clacAge();
console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hi ${this.firstname}`);
};

PersonCl.hey();

jessica.greet();
console.log(jessica.fullName);

const walter = new PersonCl('walter white', 1965);
console.log(walter);

//classes are not hoisted
//classes are first-class citizes
//classes are exucuted in the scrict mode

const account = {
  owner: 'jonas',
  movement: [200, 530, 120, 100],

  get latest() {
    return this.movement.slice(-1).pop();
  },

  set latest(mov) {
    this.movement.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.latest);

//Object.create to create objects

const PersonProto = {
  calcAge() {
    console.log(`${this.firstname} in 2037 will be ${2037 - this.birthyear}`);
  },
  init(firstname, birthyear) {
    this.firstname = firstname;
    this.birthyear = birthyear;
  },
};

const steven = Object.create(PersonProto);
steven.init('steven', 1994);
steven.calcAge();*/

//COADING CHALLENGE 2

/*class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  acceleration() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);

ford.acceleration();
console.log(ford.speedUs);
ford.speedUs = 70;
console.log(ford.speed);
*/

//inheritance using constructor

/*const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.intro = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const mike = new Student('mike', 2020, 'CSE');

mike.intro();
mike.calcAge();
console.dir(Student.prototype.constructor);
console.log(mike.__proto__ === Student.prototype);
console.log(Student.__proto__ === Person.prototype); //because student's protototype is person.prototype's object

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);
*/

//coading challenge 3

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.acceleration = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.acceleration = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
console.dir(EV.prototype.constructor);
console.log(tesla instanceof EV);
console.log(tesla instanceof Car);

tesla.acceleration();
tesla.brake();
tesla.chargeBattery(90);
console.log(tesla);
*/
class PersonCl {
  constructor(fullName, birthyear) {
    this.fullName = fullName;
    this.birthyear = birthyear;
  }
  //this will be added to the .prototype property of the class
  clacAge() {
    console.log(2037 - this.birthyear);
  }
  //set a  property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}
