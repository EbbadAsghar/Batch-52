"use strict";
/* 42. Great Magicians:
Start with a copy of your program from Exercise 41. Write a function called make_great() that
modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
show_magicians() to see that the list has actually been modified.*/
Object.defineProperty(exports, "__esModule", { value: true });
// An array of magician’s names
const magician_names = ["Karishan", "Ramo", "Kaka"];
// // Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// function show_magicians(magician_names:string[]):void {
//     for (let i=0; i < magician_names.length; i++) {
//         console.log(magician_names[i]);
//     }
// };
// // Call the showMagicians function
// show_magicians(magician_names);
//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
function make_great(magician_names) {
    for (let i = 0; i < magician_names.length; i++) {
        console.log(`The Great ${magician_names[i]}.`);
    }
}
;
make_great(magician_names);
