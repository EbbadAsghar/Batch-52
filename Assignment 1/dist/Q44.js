"use strict";
/* 44. Sandwiches:
Write a function that accepts an array of items a person wants on a sandwich. The function
should have one parameter that collects as many items as the function call provides, and it should
print a summary of the sandwich that is being ordered. Call the function three times, using a different
number of arguments each time. */
Object.defineProperty(exports, "__esModule", { value: true });
let items_names = ["egg", "mayonnaise", "mushroom", "olives", "chicken"];
function sandwich_items(...items_names) {
    console.log(`Sandwich items are ${items_names}.`);
}
;
sandwich_items("bread", "cheese", "Mayonnaise");
sandwich_items("bread", "chicken", "Mushroom");
sandwich_items("bread", "beef", "sauce");
