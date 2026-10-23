// Access Modifiers in OOPs
// 1. Public = Everyone
// 2. Private = Only my class
// 3. Protected = My class + child classes.


// 1. PUBLIC  >>   Har jagah se access kar sakte hain.


// class Student {
//     name = "Atruba";
// }


// let s1 = new Student();
// console.log(s1); // Object
// console.log(s1.name); // Atruba


// -------------------------------------------------------------------------------------------------------------------------------




// 2. Private   >>   Sirf class ke andar access kar sakte hain.

// class Student {
//     #marks = 90;

//     showMarks() {
//         console.log(this.#marks);
//     }
// }

// let s1 = new Student();
// console.log(s1);
// s1.showMarks(); // 90
// // console.log(s1.#marks); // Error




// -------------------------------------------------------------------------------------------------------------------------------


// 3. PROTECTED   >>  Generally class ke andar aur child class mein access karne ke liye hota hai.

// JavaScript mein protected keyword built-in nahi hai. Ye TypeScript mein available hai.


// class Person {
//     protected name = "Atruba";
// }

// class Student extends Person {
//     showName() {
//         console.log(this.name); // Atruba
//     }
// }

// let obj = new Student();
// console.log(obj);
// obj.showName()
// console.log(obj.name);  // Error



// -------------------------------------------------------------------------------------------------------------------------------

// PRIVATE VARIABLE & CLASS ATTRIBUTE



// class Student {
//     #marks = 90;              // Private instance attribute
//     static school = "ABC";    // Class attribute
// }

// // - #marks → Private hai, aur har object ke liye apni alag value ho sakti hai.
// // - static school → Class attribute hai, jo class se belong karta hai, object se nahi.


// let s1 = new Student();
// console.log(s1);
// console.log(s1.school);  // undefined
// console.log(Student.school); // ABC

// useCase: class attribute ka use tab hota hai jab koi value sabhi objects ke liye common ho aur humein usay har object mein alag se store nahi karna hota.



// -------------------------------------------------------------------------------------------------------------------------------



// GETTER & SETTER


// class Student {
//     #marks = 90;

//     // Normal method
//     getMarks() {
//         return this.#marks;
//     }

//     // Normal method with argument
//     setMarks(newMarks) {
//         this.#marks = newMarks;
//     }


//     // Getter
//     get marks() {
//         return this.#marks;
//     }

//     // Setter
//     set marks(newMarks) {
//         this.#marks = newMarks;
//     }
// }

// let obj = new Student();

// // with normal methods
// console.log(obj.getMarks());
// obj.setMarks(100)
// console.log(obj.getMarks());

// // Getter
// console.log(obj.marks); // 90

// // Setter
// obj.marks = 95;
// console.log(obj.marks); // 95


// -------------------------------------------------------------------------------------------------------------------------------


// EVENT LOOP >> The Event Loop is a mechanism in JavaScript that manages asynchronous operations


// Event Loop JavaScript ko asynchronous tasks handle karne mein help karta hai, taake waiting tasks ki wajah se baqi code block na ho.

// Example

// console.log("1");

// setTimeout(() => {
//     console.log("2");
// }, 2000);

// console.log("3");



// -------------------------------------------------------------------------------------------------------------------------------


























