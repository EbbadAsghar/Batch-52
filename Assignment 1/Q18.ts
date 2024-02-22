// Q18)18. Seeing the World:  
// Think of at least five places in the world you’d like to visit. 
// a) Store the locations in an array. Make sure the array is not in alphabetical order. 
// b) Print your array in its original order. 
// c) Print your array in alphabetical order without modifying the actual list. 
// d) Show that your array is still in its original order by printing it. 
// e) Print your array in reverse alphabetical order without changing the order of the original list. 
// f) Show that your array is still in its original order by printing it again. 
// g) Reverse the order of your list. Print the array to show that its order has changed. 
// h) Reverse the order of your list again. Print the list to show it’s back to its original order. 
// i) Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed. 
// j) Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// Think of at least five places in the world you’d like to visit.
// a) Store the locations in an array. Make sure the array is not in alphabetical order. 

let locations = ["USA","UK","Canada","Italy","Spain"];

// b) Print your array in its original order.

console.log(locations);

// c) Print your array in alphabetical order without modifying the actual list.

let arrange = locations.toSorted();
console.log(arrange);

// d) Show that your array is still in its original order by printing it.

console.log(locations);

// e Print your array in reverse alphabetical order without changing the order of the original list.

let reverse = arrange.toReversed();
console.log(reverse);

// f) Show that your array is still in its original order by printing it again.

console.log(locations);

// g) Reverse the order of your list. Print the array to show that its order has changed.

let sort_orig = reverse.toSorted();
let reverse_orig = sort_orig.toReversed();
console.log(reverse_orig);

// h) Reverse the order of your list again. Print the list to show it’s back to its original order.

let sort_again = reverse_orig.toSorted();
console.log(sort_again);

// i) Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
let sort_aplha = sort_again.toSorted();
console.log(sort_aplha);

// j) Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let sort_reverse = sort_aplha.toReversed();
console.log(sort_reverse);

// print to check that array is in original order.
console.log(locations);