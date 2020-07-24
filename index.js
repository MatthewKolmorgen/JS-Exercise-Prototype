//https://codesandbox.io/s/musing-cloud-2g5yg?file=/index.js:0-4078

/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function() {
  this.isFlying = true;
};
Airplane.prototype.land = function() {
  this.isFlying = false;
};

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - X Write a Person Constructor that initializes `name` and `age` from arguments.
    - X All instances of Person should initialize with an empty `stomach` array.
    - X Give instances of Person the ability to `.eat("someFood")`:
        + X When eating an edible, it should be pushed into the `stomach`.
        + X The `eat` method should have no effect if there are 10 items in the `stomach`.
    - X Give instances of Person the ability to `.poop()`:
        + X When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(edible) {
  if (this.stomach.length < 10) {
    this.stomach.push(edible);
  }
};

Person.prototype.poop = function() {
  this.stomach = [];
};

Person.prototype.toString = function() {
  return `${this.name} and ${this.age}`;
};

const personOne = new Person("Matt", 30);

personOne.eat("Pizza");

/*
  TASK 2
    - X Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - X All instances built with Car:
        + X should initialize with an `tank` at 0
        + X should initialize with an `odometer` at 0

    - ****Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`*****.

    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = "BatMobile";
  this.milesPerGallon = 20;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons) {
  this.tank += gallons;
};

/*
  TASK 3
    - X Write a Baby constructor subclassing Person.
    - X Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - X Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + X Should return a string "Playing with x", x being the favorite toy.
*/
Baby.prototype = Object.create(Person.prototype);

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`;
};

const youngestDaughter = new Baby("Evy", 4, "Mowmow the Stuffed kitty");

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1.  Window/Global Object Binding: when the global score of the 'This' value is the window/console.
  2. Implicit Binding: whenever a predecding dot calls a function. It's the item before the dot.
  3. New binding: Whenever we have to use a constructer function. 'This' would refer to the object that's being crearted then put back into the constructer.
  4.Explicit binding: Whenever we use the .call or .apply method.
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
