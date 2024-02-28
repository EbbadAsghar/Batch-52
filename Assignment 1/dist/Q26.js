"use strict";
/* Alien Colors #2:
Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block. */
Object.defineProperty(exports, "__esModule", { value: true });
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let alien_color = 'green';
if (alien_color === "green") {
    console.log(`You have earned 5 points.`);
}
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
alien_color = 'red';
if (alien_color !== "green") {
    console.log(`You have earned 10 points.`);
}
// Write one version of this program that runs the if block and another that runs the else block.
// if-block 
let alien_color1 = 'green';
if (alien_color1 === "green") {
    console.log(`You have earned 5 points.`);
}
else {
    console.log(`You have earned 10 points.`);
}
;
// if-block
alien_color1 = 'red';
if (alien_color1 === "green") {
    console.log(`You have earned 5 points.`);
}
else {
    console.log(`You have earned 10 points.`);
}
;
