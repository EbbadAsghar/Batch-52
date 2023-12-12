"use strict";
// Q16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner. //
Object.defineProperty(exports, "__esModule", { value: true });
/* • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger
dinner table. */
/*let guest_name2 = ['Ali', 'Ahmad', 'Rehman'];
let more_guest = guest_name2.push('Adnan', 'Bilal', 'Razzaq')
for (let i = 0; i < guest_name2.length; i++) {
    console.log(`Hi ${guest_name2[i]}, You are invited on Dinner.`)
    } */
//• Add one new guest to the beginning of your array.
/*let guest_name2 = ['Ali', 'Ahmad', 'Rehman'];
let more_guest = guest_name2.push('Adnan', 'Bilal', 'Razzaq')
let new_guest = guest_name2.unshift('Haider')
for (let i = 0; i < guest_name2.length; i++) {
    console.log(`Hi ${guest_name2[i]}, You are invited on Dinner.`)
    } */
//• Add one new guest to the middle of your array.
//• Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.
let guest_name2 = ['Ali', 'Ahmad', 'Rehman'];
let more_guest = guest_name2.push('Adnan', 'Bilal', 'Razzaq');
let new_guest = guest_name2.unshift('Haider');
let new_guest1 = guest_name2.splice(3, 0, 'Israr');
let new_guest2 = guest_name2.push('Babar');
for (let i = 0; i < guest_name2.length; i++) {
    console.log(`Hi ${guest_name2[i]}, You are invited on Dinner.`);
}
