"use strict";
// Constructor functions

const Car = function (name, model, color) {
  this.name = name;
  this.model = model;
  this.color = color;
};

let instance1 = new Car("Tesla", 2020, "White"); // this will return an object
let instance2 = new Car("Hyundai Sonata", 2022, "Black");

// Prototype

// We can set methods to a constructor through prototypal inheritance
Car.prototype.sprint = function () {
  console.log("Car's gonna operate at full speed");
};

// We can also set properties through prototypes
Car.prototype.company = "Tesla";
instance1.sprint();

// this will add an extra property to the instance of the constructor "Car"
instance1.version = "Pakistan";
// this will overwrite the existing property "name" of the instance of the constructor "Car"
instance2.name = "Elantra";
console.log(instance1, instance2);
console.log(instance2 instanceof Car); // instanceOf checks whether it is the instance of specified constructor or not. It returns the boolean value
console.log(instance1.__proto__);

const arr = [2, 4, 5, 6, 6];

console.log(arr.__proto__);
console.log(Date.prototype);
console.log(Object.prototype);
console.log(Car.prototype);

// Symbols
// It is used as property name in objects.
// Objects can have only two types of properties String and Symbols.
// Symbols are always unique
const id = Symbol("id");

const person = {
  name: "Mubeen",
  [id]: 1,
};

console.log(person[id]);

const symb1 = Symbol.for("name");
const symb2 = Symbol.for("id");

console.log(symb1, symb2);

// Keyed collections are collection of data which are ordered by a key not an index.
// Different types of keyed collections are Map, Set, WeakMap and WeakSet

// Map
// A Map holds key-value pairs where the keys can be any datatype (numbers, strings, booleans or even objects)
// A Map remembers original insertion order of the keys unlike Objects.
// There are two ways to create a Map.
// 1. Passing an array to new Map()
const laptops = new Map([
  ["apple", 10],
  ["lenovo", 5],
  ["dell", 12],
]);

console.log(laptops.get("dell"));
console.log(laptops.get("lenovo"));

// 2. Creating a Map and using Map.set().
const cars = new Map();

cars.set("1", "Mustang");
cars.set(1, "Range Rover");
cars.set(2, "Hyundai");
cars.set("2", "Toyota");

console.log(cars.get("1"));
console.log(cars.get(1));
console.log(cars.get("2"));

// overwrite an existing Map value
cars.set(2, "Honda");
console.log(cars.get(2));

// check size of a Map
console.log(cars.size);
console.log(laptops.size);

// Delete a Map element
cars.delete(2);
console.log(cars.has(2));

// Remove all elements from a Map
laptops.clear();
console.log(laptops.size);

// iterate over all Map elements
cars.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});

// Objects as keys
const samsung = { name: "Samsung" };
const oppo = { name: "Oppo" };
const vivo = { name: "Vivo" };

const mobiles = new Map();
mobiles.set(samsung, 100);
mobiles.set(vivo, 200);

mobiles.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// Convert object into Map
const objectToMap = new Map(Object.entries(obj));

objectToMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Convert Map to Object
const mapToObject = Object.fromEntries(objectToMap.entries());

console.log(mapToObject);

// Sets
// 1st way to create set by passing an array to new Set()
const set1 = new Set(["a", "b", "c"]);
console.log(set1.size);

// 2nd way to create set by adding values and variables using add() method
const set2 = new Set();
// add values to the set
set2.add("Mubeen");
set2.add("Hanan");
set2.add("Affan");
set2.add("Soban");
console.log(set2.size);

const var1 = 9;
const var2 = 3;
const var3 = 1;
const var4 = 4;

// add variables to the set
set2.add(var1);
set2.add(var2);
set2.add(var3);
set2.add(var4);

console.log(set2);

// Iterate over sets
set2.forEach((value) => {
  console.log(`${value}`);
});

// Weak Map
const weakMap = new WeakMap();
const weakObj = { id: 1 };
const weakObj2 = { id: 2 };
weakMap.set(weakObj, "Weak value 1");
weakMap.set(weakObj2, "Weak value 2");
console.log(weakMap);

// Weak Set
var x = new WeakSet();
var y = new WeakSet(null);
x.add({});
x.add({});
console.log(x);
console.log(y);

// BitWise Operators
// AND Operator
console.log(10 & 7);
// OR Operator
console.log(10 | 7);
// XOR operator
console.log(10 ^ 7);
// NOT Operator
console.log(~5);
// Convert decimal to binary
const decimalToBinary = (dec) => {
  return (dec >>> 0).toString(2);
};
console.log(decimalToBinary(3));
// Convert Binary to Decimal
const binaryToDecimal = (bin) => {
  return parseInt(bin, 2).toString(10);
};
console.log(binaryToDecimal(1111));

// BigInt
let bigValue = BigInt(3192381648316482136821638217368217361287361823682136);
let bigValue2 = BigInt(3192381648316482136821638217368217361287361823682136);
console.log(bigValue * bigValue2);
// IIFES
(function (date) {
  console.log(`Advanced JavaScript Concepts here we go at ${date}.....`);
})(new Date());

// Arguments Object
// arguments object is not accessible withing arrow functions
function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumAll(1, 123, 500, 115, 44, 88));

// Lexical Scoping
// Lexical environment is the local memory along with lexical environment of its parent
function parent() {
  var b = 10;
  child();
  function child() {
    console.log(b);
  }
}
parent();

// Closures
// Function along with its lexical scope
// In other words, a closure gives access to its outer function's scope
// from an inner function.

// Closures are created everytime a function is created, at function creation time
function clo() {
  let a = 90;
  return function cloInner() {
    console.log(a);
  };
}

let checkClo = clo();
checkClo();

// Strict Mode
// "use strict" expression is used to indicate that code will be executed in the strict mode
// in this file stric mode in enabled

// this keyword
const human = {
  firstName: "Hanan",
  lastName: "Baig",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(human.fullName());

// Common JS Modules vs ECMA Scripts Modules
// CommonJS uses the require() function to load modules, while ES modules use the import statement.
// CommonJS modules use the module.exports object to export values,
// while ES modules use the export keyword to export values.

// Recursion

// Recursion is a process of calling itself. A function that calls itself is called a recursive function.

let checkNumber = (number) => {
  if (number === 0) return number + " is even";
  if (number === 1) return number + " is odd";
  return checkNumber(number - 2);
};
console.log(checkNumber(10));
console.log(checkNumber(13333));

// Function Borrowing
// With the bind() method, an object can borrow a method from another object.

const person2 = {
  firstName: "Mubeen",
  lastName: "Baig",
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + " " + city + " " + country;
  },
};

const member = {
  firstName: "Hanan",
  lastName: "Baig",
};

let fullName = person2.fullName.bind(member, "Lahore", "Pakistan");
console.log(fullName());

// Call() method
// with call method we can write a method that can be used on different objects
console.log(person2.fullName.call(member, "Lahore", "Pakistan"));

// apply() is similar to call()
// call() takes arguments separately whereas apply() takes arguments as an array
console.log(person2.fullName.apply(member, ["Faisalabad", "Punjab"]));
