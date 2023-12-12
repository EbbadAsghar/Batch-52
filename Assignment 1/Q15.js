"use strict";
/* Q15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
You’ll have to think of someone else to invite. */
Object.defineProperty(exports, "__esModule", { value: true });
/* • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of
the guest who can’t make it. */
let guest_name = ['Ali', 'Ahmad', 'Abdul'];
let not_com = guest_name.pop();
for (let i = 0; i < guest_name.length; i++) {
    console.log(`Hi ${guest_name[i]}, You are invited on Dinner.`);
}
console.log(not_com);
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting. 
let guest_name1 = ['Ali', 'Ahmad', 'Abdul'];
let new_com = guest_name1.splice(2, 2, 'Rehman');
for (let i = 0; i < guest_name1.length; i++) {
    console.log(`Hi ${guest_name1[i]}, You are invited on Dinner.`);
}
console.log(new_com);
// • Print a second set of invitation messages, one for each person who is still in your list.
let guest_name2 = ['Ali', 'Ahmad', 'Rehman'];
for (let i = 0; i < guest_name2.length; i++) {
    console.log(`Hi ${guest_name2[i]}, You are invited on Dinner.`);
}
