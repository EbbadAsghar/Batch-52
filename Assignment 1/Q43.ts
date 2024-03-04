/* Q43. Unchanged Magicians:  
Start with your work from Exercise 40. Call the function make_great() with a copy of the array 
of magicians’ names. Because the original array will be unchanged, return the new array and store it 
in a separate array. Call show_magicians() with each array to show that you have one array of the 
original names and one array with the Great added to each magician’s name.*/

// An array of magician’s names

const magician_names:string[] = ["Karishan","Ramo","Kaka"];

// // Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magician_names:string[]):void {
    for (let i=0; i < magician_names.length; i++) {
        console.log(magician_names[i]);
    }
};

// // Call the showMagicians function
show_magicians(magician_names);

//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
function make_great(magician_names:string[]):void {
    for (let i=0; i < magician_names.length; i++) {
        console.log(`The Great ${magician_names[i]}.`)
    }
};

// Call show_magicians() to see that the list has actually been modified.
make_great(magician_names);

// Copy the Array
let magician = make_great(magician_names);

// Show the original lists
console.log("Original Magicians Are:");
show_magicians(magician_names);

// Show the original lists
console.log("Modified Migicians Are:");
make_great(magician_names);