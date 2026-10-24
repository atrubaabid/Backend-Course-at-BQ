// PARALLELISM & CONCURRENCY

// Concurrency = Multiple tasks ko manage karna; unke darmiyan switching ho sakti hai.

// Parallelism = Multiple tasks ko same time par execute karna.


// -------------------------------------------------------------------------------------------------------------------------------


// MAIN THREAD & CHILD THREAD


// Main Thread  >>  The main thread is responsible for executing the main program code.

// console.log("Hello");
// console.log("Welcome");

// Child Thread  >>  A child thread that performs additional tasks separately from the main thread.


// For example, teaching all the students is the main thread. If you also have an additional task, such as checking all the students' papers, that task can be handled by a child thread.


// -------------------------------------------------------------------------------------------------------------------------------

// PROCESS & THREAD

// Process  >>  A process is a program that is currently running.
// Example: Tumne Calculator app open kia, ye ek process hai.



// Thread  >>  A thread is the smallest unit of execution within a process.
// Example: Calculator app ke andar calculations perform karne ke liye threads kaam kar sakte hain, jesy Addition and subtraction etc.


// -------------------------------------------------------------------------------------------------------------------------------


// CALLBACK HELL

// Callback Hell  >>  When multiple callbacks are nested inside each other, making code difficult to read and understand, it is called Callback Hell.

// Callback Hell tab hota hai jab multiple callbacks aik doosray ke andar likhay jatay hain




// setTimeout(() => {
//     console.log("Task 1");

//     setTimeout(() => {
//         console.log("Task 2");

//         setTimeout(() => {
//             console.log("Task 3");
//         }, 1000);

//     }, 1000);

// }, 1000);




// -------------------------------------------------------------------------------------------------------------------------------



// How to perform asynchronous before promises?


// JavaScript mein Promises se pehle asynchronous operations perform karne ke liye Callbacks use hotay thay.


// function getData(callback) {
//     setTimeout(() => {
//         console.log("Data received");
//         callback();
//     }, 2000);
// }

// function showData() {
//     console.log("Show data");
// }

// getData(showData);




// -------------------------------------------------------------------------------------------------------------------------------



// How to use fetch function?

// JavaScript mein fetch() function API se data lene ya server ko data send karne ke liye use hota hai. Ye asynchronous hota hai aur Promise return karta hai.



// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => {

//         if (!res.ok) {
//             throw new Error("API URL is incorrect!");
//         }

//         return res.json();

//     }).then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.log(err);              // Error: API URL is incorrect!
//         console.log(err.message);      // API URL is incorrect!
//         console.log(err.name);         // Error
//     })



// ager Api wrong ho tw catch usy get nh kerta isliye res.ok sy response check kro phr throw new error sy apna msg catch k throught print kerva sakty ho




// -------------------------------------------------------------------------------------------------------------------------------


// COMPLETED















