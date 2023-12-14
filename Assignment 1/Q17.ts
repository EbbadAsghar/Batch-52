/* Q17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests. */


//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//console.log(`I can invite only two people for dinner`)

/* • Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner. */

/* let guest_name2 = ['Ali', 'Ahmad', 'Rehman'];
let more_guest = guest_name2.push('Adnan', 'Bilal', 'Razzaq')
let new_guest = guest_name2.unshift('Haider')
let new_guest1 = guest_name2.splice(3,0,'Israr')
let new_guest2 = guest_name2.push('Babar')
let removed_guest = guest_name2.splice(0,7)
for (let i = 0; i < removed_guest.length; i++) {
    console.log(`Hi ${removed_guest[i]}, I'm sorry i can’t invite you to dinner.`)
    } */

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

/* let guest_name2 = ['Ali', 'Ahmad', 'Rehman'];
let more_guest = guest_name2.push('Adnan', 'Bilal', 'Razzaq')
let new_guest = guest_name2.unshift('Haider')
let new_guest1 = guest_name2.splice(3,0,'Israr')
let new_guest2 = guest_name2.push('Babar')
let removed_guest = guest_name2.splice(0,7)
for (let i = 0; i < removed_guest.length; i++) {
    console.log(`Hi ${removed_guest[i]}, I'm sorry i can’t invite you to dinner.`)
    }
    for (let j = 0; j < guest_name2.length; j++) {
        console.log(`Hi ${guest_name2[j]}, You are Invited.`)
    } */

/* • Remove the last two names from your list, so you have an empty list.
Print your list to make sure you actually have an empty list at the end of your program. */

/* let guest_name2 = ['Ali', 'Ahmad', 'Rehman'];
let more_guest = guest_name2.push('Adnan', 'Bilal', 'Razzaq')
let new_guest = guest_name2.unshift('Haider')
let new_guest1 = guest_name2.splice(3,0,'Israr')
let new_guest2 = guest_name2.push('Babar')
let removed_guest = guest_name2.splice(0,7)
for (let i = 0; i < removed_guest.length; i++) {
    console.log(`Hi ${removed_guest[i]}, I'm sorry i can’t invite you to dinner.`)
    }
    for (let j = 0; j < guest_name2.length; j++) {
        console.log(`Hi ${guest_name2[j]}, You are Invited.`)
    }
let updated_list = guest_name2.splice(0,2)
console.log(guest_name2) */