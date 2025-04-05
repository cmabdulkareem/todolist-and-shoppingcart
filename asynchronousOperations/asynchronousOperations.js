/* 
JavaScript is synchronous by default. This means that code is executed line by line, 
blocking the next line of code until the current one is completed.

In synchronous JavaScript, tasks are executed one after the other, in the order they appear in the code. 
This means that each operation must complete before the next one starts.
*/

/* console.log("Task 1");
console.log("Task 2");
console.log("Task 3"); */



/* 
Asynchronous JavaScript allows certain operations to run in the background, without blocking the execution - 
of the next lines of code. This is especially useful when dealing with tasks that take time, 
like fetching data from a server, reading files, or waiting for a user interaction. With asynchronous JavaScript, 
the program doesn't wait for one task to finish before moving on to the next task.
*/

/* console.log("Task 1");

setTimeout(() => {
  console.log("Task 2 (after 2 seconds)");
}, 2000);

console.log("Task 3"); */



/* 
Callbacks are used in JavaScript to handle asynchronous operations efficiently. 
Since JavaScript is single-threaded, it executes code line by line. 
However, some tasks (like reading a file, making an API request, or setting a timeout) take time to complete.
Callbacks help manage these non-blocking tasks by running a function after the asynchronous operation completes.
*/

// A callback is just a function passed as an argument to another function, to be “called back” later.

Eg: 1
/* function add(a,b){
    return a+b
}

function multiply(a,b){
    return a*b
}

function calculate(x,y, operation){
    return operation(x,y)
    operation()
}

console.log(calculate(2,3, add))
console.log(calculate(2,3, multiply)); */

Eg: 2
/* function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Alice", sayBye); */
  
Eg: 3
/* function iterateArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

iterateArray([1, 2, 3], console.log); */

// Callback Hell : Callback Hell happens when you have a bunch of nested callbacks—callbacks inside callbacks 
// inside callbacks—usually in asynchronous code (e.g. when working with setTimeout, APIs, file reading, etc). 
// It makes code hard to read and maintain.

// Nesting

/* for(let i = 0; i<5; i++){
    for(let j = 0; j<5; j++){
        console.log(j)
    }
} */

Eg: 1

/* function add(a, b, callback) {
    setTimeout(() => {
        const result = a + b;
        console.log("Added:", result);
        callback(result);
    }, 1000);
}

function multiply(a, b, callback) {
    setTimeout(() => {
        const result = a * b;
        console.log("Multiplied:", result);
        callback(result);
    }, 1000);
}

function subtract(a, b, callback) {
    setTimeout(() => {
        const result = a - b;
        console.log("Subtracted:", result);
        callback(result);
    }, 1000);
}

// Callback hell starts here 😨
add(2, 3, (sum) => {
    multiply(sum, 4, (product) => {
        subtract(product, 5, (finalResult) => {
            console.log("Final Result:", finalResult);
        });
    });
}); */




