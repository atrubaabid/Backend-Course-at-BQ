// What is Inheritance?

// Inheritance means that one class can use the properties and methods of another class.


// // Class 1
// class Animal {
//     eat() {
//         console.log("Animal is eating");
//     }
// }


// // Class 2
// class Dog extends Animal {
//     bark() {
//         console.log("Dog is barking");
//     }
// }

// let dog1 = new Dog();

// dog1.eat();
// dog1.bark();


// -------------------------------------------------------------------------------------------------------------------------------



// TYEPS OF Inheritance


// Type	                    Easy meaning
// Single	                One parent → One child
// Multilevel	            Parent → Child → Grandchild
// Hierarchical	            One parent → Multiple children
// Multiple	                One child → Multiple parents
// Hybrid	                Combination of inheritance types



// 1. Single Inheritance  >>  Jab ek child class, ek parent class se inherit karti hai.

// class Animal {
//     eat() {
//         console.log("Eating");
//     }
// }

// class Dog extends Animal { }


// ---------------------------------------------------------------


// 2. Multilevel Inheritance  >>  Jab ek class doosri class se inherit kare aur teesri class us child class se inherit kare.

// class Animal {
//     eat() {
//         console.log("Eating");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Barking");
//     }
// }

// class Puppy extends Dog { }


// ---------------------------------------------------------------


// 3. Hierarchical Inheritance  >>  Jab multiple child classes ek hi parent class se inherit karti hain.


// class Animal {
//     eat() {
//         console.log("Eating");
//     }
// }

// class Dog extends Animal { }
// class Cat extends Animal { }


// ---------------------------------------------------------------


// 4. Multiple Inheritance  >>  Jab ek child class multiple parent classes se inherit kare.


// class Father {
//     skills() {
//         console.log("Father: Driving");
//     }
// }

// class Mother {
//     talent() {
//         console.log("Mother: Cooking");
//     }
// }

// class Child { }

// Object.assign(
//     Child.prototype,
//     Father.prototype,
//     Mother.prototype
// );

// let c1 = new Child();

// c1.skills();
// c1.talent();


// ---------------------------------------------------------------


// 5. Hybrid Inheritance  >>  Jab hum inheritance ki 2 ya zyada types ko combine karte hain, to usay Hybrid Inheritance kehte hain.


// class Animal {
//     eat() {
//         console.log("Animal is eating");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Dog is barking");
//     }
// }

// class Cat extends Animal {
//     meow() {
//         console.log("Cat is meowing");
//     }
// }

// class Puppy extends Dog {
//     play() {
//         console.log("Puppy is playing");
//     }
// }

// let p1 = new Puppy();

// p1.eat();
// p1.bark();
// p1.play();

// let c1 = new Cat();
// c1.eat();
// c1.meow();



// -------------------------------------------------------------------------------------------------------------------------------



// extend KEYWORD >>  We use the extends keyword to inherit properties and methods from another class.


// -------------------------------------------------------------------------------------------------------------------------------



// What is MRO (Method Resolution Order)?

// Easy words mein: MRO = Method search karne ka order.

// Agar Parent aur Child dono mein same method ho, to MRO batata hai ke pehle kis class ka method check hoga.

// EX >> Agar Parent aur Child class mein same method ho, to Child class ka method priority rakhta hai jab hum Child ke object se call karte hain.


// class Parent {
//     show() {
//         console.log("Parent method");
//     }
// }

// class Child extends Parent {
//     show() {
//         console.log("Child method");
//     }
// }

// let obj = new Child();
// obj.show();



// -------------------------------------------------------------------------------------------------------------------------------



// Is interface used in it?

// interface → TypeScript mein use hota hai, taake define kiya ja sake ke object mein kaunsi properties aur methods honi chahiye.

// JavaScript mein interface built-in keyword nahi hai, lekin TypeScript mein hai.



// -------------------------------------------------------------------------------------------------------------------------------


// What is the super keyword?

// super KEYWORD  >>  It is used in a child class to call the parent class's constructor or methods.


// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Dog extends Animal {
//     constructor(name, age) {
//         super(name);
//         this.age = age
//     }
// }

// let d1 = new Dog("Tommy",44);
// console.log(d1); // obj
// console.log(d1.name); // Tommy
// console.log(d1.age); // 44



// -------------------------------------------------------------------------------------------------------------------------------


// COMPLETED












