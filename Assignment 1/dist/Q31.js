"use strict";
/* Q31. No Users:
Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed. */
Object.defineProperty(exports, "__esModule", { value: true });
let users = ["Ali", "Ahmad", "Amjad"];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);
    }
}
// Remove all of the usernames from your array, and make sure the correct message is printed.
users.splice(0, users.length);
console.log("We need to find some users!");
// If the list is empty, print the message We need to find some users!
// let user:string[] = [];
// if (user.length === 0) {
//     console.log("We need to find some users!");
// } else {
//     for (let i=0; i<user.length; i++) {
//         console.log(user[i]);
//     }
// }
// Remove all of the usernames from your array
