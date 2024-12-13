// 1. The for Loop

// SYNTAX

// for (initialization; condition; update) {
//     // Code to be executed for each iteration
// }

// Initialization: Sets up a variable to keep track of the loop.
// Condition: Checks if the loop should continue running.
// Update: Updates the loop variable after each iteration.

// EXAMPLE

// for (let i = "z"; i > "a"; i--) {
//     console.log(i);
// }

// Starts with i = 0.
// Checks if i < 5 before each loop; if true, it runs the loop body.
// Increments i by 1 with each loop.





// 2. The while Loop

// SYNTAX

// while (condition) {
//     // Code to be executed as long as the condition is true
// }

// EXAMPLE

// let i = 0;

// while (i < 7) {
//     console.log("Iteration number:", i);
//     i++;  // Make sure to update `i` or risk an infinite loop
// }





// 3. The do...while Loop

// SYNTAX

// do {
//     // Code to be executed
// } while (condition);

// EXAMPLE

// let i = 6;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);





// 4. The for...of Loop

// SYNTAX

// for (variable of iterable) {
//     // Code to execute for each item
// }

// EXAMPLE WITH ARRAY

// let fruits = "This is just a test string";
// for (let fruit of fruits) {
//     console.log(fruit);
// }
// let theFruit = (fruits[1]);
// console.log(`Mmesoma loves ${theFruit}`);


// barktick


// 5. The for...in Loop

// SYNTAX

// for (variable in object) {
//     // Code to execute for each property
// }

// EXAMPLE WITH OBJECT

// let person = { name: "Alice", age: 25, job: "developer" };
// for (let key in person) {
//     // console.log(key, ":", person[key]);
//     if (person[key] === 25) {
//     console.log(`Chisom is ${person[key]} years old`);
//     }
// }





// 6. Using break in Loops

// EXAMPLE

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;  // Exits the loop when i equals 5
//     }
//     console.log(i);
// }





// 7. Using continue in Loops

// EXAMPLE

// for (let i = 0; i < 5; i++) {
//     if (i === 2) {
//         continue;  // Skips the current iteration when i equals 2
//     }
//     console.log("Iteration:", i);
// }





// 8. Nested Loops

// EXAMPLE

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(`i: ${i}, j: ${j}`);
//     }
// }





// 9. Looping over Arrays and Objects

// EXAMPLE

// let colors = ["red", "green", "blue"];
// colors.forEach(function(color) {
//     console.log(color);
// });







// Each loop type in JavaScript has its ideal use case:
// for: Used when the number of iterations is known.
// while: Used when the number of iterations is unknown and depends on a condition.
// do...while: Similar to while, but guarantees at least one iteration.
// for...of: Best for iterating over iterable objects like arrays and strings.
// for...in: Useful for iterating over object properties.



// The BREAK and CONINUE statements add flexibility by allowing you to control the flow of loops
// dynamically. Knowing how and when to use each of these will help you handle repetitive tasks
// efficiently in JavaScript.



// for(i = 1; i < 6; i++){
//     console.log(`3 / ${i} = ${3 / i}`);
// }