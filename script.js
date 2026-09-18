
// 1. What is a Variable  =>  A variable is a container used to store data/value.

let Age = 20;

// age → variable
// 20 → value


// -------------------------------------------------------------------------------------------------------



// 2. Mutable vs Immutable

// MUTABLE = Can be changed after creation.

let person = { name: "Ali" };
person.name = "Ahmed";  // ✅ Changed


// IMMUTABLE = Cannot be changed after creation.

let name = "Ali";
name[0] = "B"; // ❌ String cannot be changed this way


// Note: let itself doesn't mean mutable, and const doesn't automatically mean immutable. Mutable/immutable describes the value/data, not the variable keyword.



// -------------------------------------------------------------------------------------------------------



// 3. Primitive vs Non-Primitive

// Primitive  =>  IMMUTABLE

let name = "Ali";       // String
let age = 20;           // Number
let isStudent = true;   // Boolean
let x;                  // Undefined
let y = null;           // Null


// Non-Primitive  =>  MUTABLE

let fruits = ["Apple", "Mango"];  // Array

let person = {
    name: "Ali",
    age: 20
};                                // Object




// -------------------------------------------------------------------------------------------------------




// One small correction: const object/array can still be changed internally:

const person = { name: "Ali" };
person.name = "Ahmed";  // ✅ Allowed

// const doesn't make the object itself immutable.




// -------------------------------------------------------------------------------------------------------
