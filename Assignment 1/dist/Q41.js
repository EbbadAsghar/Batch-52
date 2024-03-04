"use strict";
/* Q41. Magicians:
Make an array of magician’s names. Pass the array to a function called show_magicians(), which
prints the name of each magician in the array. */
Object.defineProperty(exports, "__esModule", { value: true });
// An array of magician’s names
const magician_names = ["Karishan", "Ramo", "Kaka"];
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magician_names) {
    for (let i = 0; i < magician_names.length; i++) {
        console.log(magician_names[i]);
    }
}
;
// Call the showMagicians function
show_magicians(magician_names);
