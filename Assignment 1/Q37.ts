/* Q37. Large Shirts:  
Modify the make_shirt() function so that shirts are large by default, with a message that reads 
I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any 
size with a different message.*/

let make_shirt = (size = "L", message = "I love Typescript"): void => {
    console.log(`The Size of T-Shirt is ${size} & ${message}.`);
};

//Make a large shirt with the default message.
make_shirt();

// Medium shirt with the default message.
make_shirt("M");

// A shirt of any size with a different message.
make_shirt("S", "I love Javascript");
