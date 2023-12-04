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

// IIFES

(function (date) {
  console.log(`Advanced JavaScript Concepts here we go at ${date}.....`);
})(new Date());
