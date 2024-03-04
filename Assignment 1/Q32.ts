/* Q32. Checking Usernames:  
Do the following to create a program that simulates how websites ensure that everyone has a unique username. 
• Make a list of five or more usernames called current_users. 
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list. 
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person
will need to enter a new username. If a username has not been used, print a message saying that the username is available. 
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */

// Make a list of five or more usernames called current_users.

let current_users:string[] = ["Azeem", "Ilyas", "Aqeel", "Ali", "Israr"];

// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

let new_users:string[] = ["Asghar", "ILYAS", "Amjad", "Rabbani", "Haneef"];

/* Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person 
will need to enter a new username. If a username has not been used, print a message saying that the username is available. */

for (let i = 0; i < new_users.length; i++) {
    let isAvailable = true;
    for (let j = 0; j < current_users.length; j++) {
        if(new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            console.log(`Username ${new_users[i]} has already been used. Please provide a new username.`);
            isAvailable = false;
            break;
        }
    }
    if (isAvailable) {
        console.log(`Username ${new_users[i]} is available`);
    } 
}; 


 