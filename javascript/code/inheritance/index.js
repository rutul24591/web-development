/**
 *
 * -> Everything in Javascript is an object
 * -> In JS, objects have a special hidden property called [[Prototype]], that is either null or references to another object.
 *    That object is called prototype.
 *
 * -> Objects can inherit properties and methods from other objects via a special hidden property call [[Prototype]]
 *    (accessible via __proto__ or Object.getPrototypeOf()). This is called Prototypal inheritance in JS.
 *
 * -> Every object in JS has a prototype. If you try to access a property or method that does not exist on the object,
 *    JS walks up the protootype chain to find it.
 *
 *
 *                    null
 *                     ⬇
 *                Object.prototype
 *                     ⬇
 *                  Parent Object
 *                     ⬇
 *                  Child Object
 */

const parent = {
    greet() {
        return "Hello from parent";
    },
};

const child = Object.create(parent);
child.name = "Child";

console.log(child.name); //"Chain" -> own property
console.log(child.greet()); // "Hello from parent" -> inherited from parent

/**
 *
 * Resolution order
 * 1. Check if child has its own greet() -> ❌
 * 2. Look at child.__proto__ -> points to parent.
 * 3. parent.greet(); -> ✅
 */

/**
 * Function and Property resolution in JS
 * Whenever you access a property or method of an object
 * 1. JS first looks in the object itself.
 * 2. If not found, it looks in the objects prototype.
 * 3. If still not found, it walks up the prototype chain.
 * 4. This continues until it hits null.
 *
 */

/**
 * There are three main ways to achieve inheritance in JS:
 *
 * 1. Object literal using __proto__.
 * 2. Constructor functions and prototype.
 * 3. Object.create() methods.
 *
 */

/** EXAMPLE 1:  Object literal using __proto__.*/

const animal = {
    eats: true,
    walk() {
        console.log("Animal walks");
    },
};

const dog = {
    bark: true,
    __proto__: animal, // dog inherits from animal
};

console.log(dog.eats); // true (inherited)
dog.walk(); // Animal walks (inherited)
console.log(dog.bark); // true(own property)

/** EXAMPLE 2:  Constructor functions and prototype.*/

function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log("Hello, I am" + this.name);
};

const john = new Person("John");
john.sayHello(); // Hello, I am John

console.log("Person:", Person.prototype);
console.log("john:", john, john.__proto__);

console.log(john.__proto__ === Person.prototype); // true

/** EXAMPLE 3: Using Object.create() */

const vehicle = {
    wheels: 4,
    drive() {
        console.log("Driving...");
    },
};

const car = Object.create(vehicle); // car inherits from vehicle
car.brand = "Tesla";

console.log(car.wheels); // 4 inherited
car.drive(); // Driving
console.log(car.brand); // Tesla(own property)
