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
