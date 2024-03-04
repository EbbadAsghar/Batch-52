/* Q41. Magicians:  
Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
prints the name of each magician in the array. */

// An array of magician’s names

const magician_names:string[] = ["Karishan","Ramo","Kaka"];

// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magician_names:string[]):void {
    for (let i=0; i < magician_names.length; i++) {
        console.log(magician_names[i]);
    }
};

// Call the showMagicians function
show_magicians(magician_names);


