// synchronous js
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");



// asynchronous javascript
console.log("Task 1")
setTimeout(() => { console.log("Task 2") }, 2000);
console.log("Task 3")



// callback
function task2(callback) {
    setTimeout(() => {
        console.log("Task 2");
        callback();
    }, 2000);
}

console.log("Task 1");

task2(() => {
    console.log("Task 3");
});



// callback hell
function task1(callback) {
    console.log("Task 1");
    callback();
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2");
        callback();
    }, 2000);
}

function task3(callback) {
    console.log("Task 3");
    callback();
}

function task4() {
    console.log("Task 4");
}

// Callback Hell (Pyramid of Doom)
task1(() => {
    task2(() => {
        task3(() => {
            task4();
        });
    });
});



// Promise
function task1() {
    return new Promise((resolve) => {
        console.log("Task 1");
        resolve();
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2");
            resolve();
        }, 2000);
    });
}

function task3() {
    return new Promise((resolve) => {
        console.log("Task 3");
        resolve();
    });
}

function task4() {
    return new Promise((resolve) => {
        console.log("Task 4");
        resolve();
    });
}

// Chaining Promises
task1()
    .then(task2)
    .then(task3)
    .then(task4)
    .catch((err) => {
        console.error("Error:", err);
    });



// async await
function task1() {
    return new Promise((resolve) => {
        console.log("Task 1");
        resolve();
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2");
            resolve();
        }, 2000);
    });
}

function task3() {
    return new Promise((resolve) => {
        console.log("Task 3");
        resolve();
    });
}

function task4() {
    return new Promise((resolve) => {
        console.log("Task 4");
        resolve();
    });
}

async function runTasks() {
    try {
        await task1();
        await task2();
        await task3();
        await task4();
    } catch (err) {
        console.error("Error:", err);
    }
}

runTasks();




