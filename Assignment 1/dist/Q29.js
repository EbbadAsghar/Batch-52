"use strict";
/* Q29. Favorite Fruit:
Make an array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make an array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
such as You really like bananas! */
Object.defineProperty(exports, "__esModule", { value: true });
let favorite_fruits = ["pineapple", "coconut", "grapes"];
if (favorite_fruits.includes("pineapple")) {
    console.log(`You really like ${favorite_fruits[0]}`);
}
if (favorite_fruits.includes("coconut")) {
    console.log(`You really like ${favorite_fruits[1]}`);
}
if (favorite_fruits.includes("grapes")) {
    console.log(`You really like ${favorite_fruits[2]}`);
}
if (favorite_fruits.includes("strawberry")) {
    console.log(`You really like ${favorite_fruits[3]}`);
}
else {
    console.log(`strawberry is not included in list.`);
}
if (favorite_fruits.includes("orange")) {
    console.log(`You really like ${favorite_fruits[4]}`);
}
else {
    console.log(`orange is not included in list.`);
}
