/** Shallow Copy
 * A shallow copy occurs when you copy the reference of an object to a new variable.
 * In this process, only the top-level properties are copied, 
 * while nested objects or arrays still reference the original memory location. 
 * This means that if you change the nested properties in one object, 
 * those changes will reflect in the other because they share the same memory reference. 
 * 
 * 
 * 
 * Key takeaways:

 * Top-level properties (a, b, x, y, num, id) are truly copied—mutating them in the copy doesn’t affect the original.
 * Nested objects (nested, settings) are only copied by reference—mutating them in the copy also mutates the original.
 *
*/

/** BASIC EXAMPLE */

const person = {
    name: "John",
    age: 20,
    city: "New York",
};

/** This line does not create a copy of person. It assigns the reference of the original object to person2.
 * Both person and person2 now point to the same object in memory.
 * */
const person2 = person;

console.log("reference of person i.e person2:", person2); // { name: 'John', age: 20, city: 'New York' }

person2.name = "Jane";

console.log("Updated person2:", person2); // Updated person2: { name: 'Jane', age: 20, city: 'New York' }
console.log("Updated person:", person); // Updated person: { name: 'Jane', age: 20, city: 'New York' }

/** SHALLOW COPY TOP LEVEL EXAMPLE */
const student = {
    name: "Rutul",
    age: 20,
    city: "Mumbai",
    college: "VIT",
};

/** NOTE:Use spread operator to create a shallow copy of the student object
 * You can also use Object.assign({}, student) to create a shallow copy of the student object
 * Important Note: The spread operator (...) performs a shallow copy only.
 * To deeply clone an object (so nested structures are not shared),
 * you must use structuredClone(), recursion, or a utility like lodash.cloneDeep().
 */
const studentCpy = { ...student };

console.log("Shallow copy studentCpy:", studentCpy); // Shallow copy studentCpy: { name: 'Rutul', age: 20, city: 'Mumbai', college: 'VIT' }

studentCpy.name = "Rutul Patel";

console.log("Updated studentCpy:", studentCpy); // Updated studentCpy: { name: 'Rutul Patel', age: 20, city: 'Mumbai', college: 'VIT' }
console.log("Original student:", student); // Original student: { name: 'Rutul', age: 20, city: 'Mumbai', college: 'VIT' }

/** NESTED EXAMPLE */

const person3 = {
    name: "John",
    age: 20,
    city: "New York",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
    },
};

const person4 = person3;

console.log("Initial reference of person3 i.e person4:", person4); // Initial reference of person3 i.e person4: { name: 'John', age: 20, city: 'New York', address: { street: '123 Main St', city: 'New York', state: 'NY' } }

person4.address.street = "456 Main St"; // This will change the street in both person3 and person4 because they share the same reference to the address object.

console.log("Updated person3:", person3); // Updated person3: { name: 'John', age: 20, city: 'New York', address: { street: '456 Main St', city: 'New York', state: 'NY' } }
console.log("Updated person4:", person4); // Updated person4: { name: 'John', age: 20, city: 'New York', address: { street: '456 Main St', city: 'New York', state: 'NY' } }

const person5 = { ...person3 }; // This creates a shallow copy of person3, but the address object is still shared.

person5.name = "Jane"; // This will change the name in person5 but not in person3 because name is a top-level property.
person5.address.street = "789 Main St"; // This will change the street in both person3 and person5 because they share the same reference to the address object.
