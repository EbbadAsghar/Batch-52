"use strict";
/* 36. T-Shirt:
Write a function called make_shirt() that accepts a size and the text of a message that should
be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the
message printed on it. Call the function. */
Object.defineProperty(exports, "__esModule", { value: true });
let make_shirt = (size, message) => {
    return (`The Size of T-Shirt is ${size} & ${message}.`);
};
let output = make_shirt(32, "Colour is White");
console.log(output);