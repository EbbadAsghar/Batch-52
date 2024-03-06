#! /usr/bin/env node

import inquirer from 'inquirer';
async function startFunc() {
    const sysGenNo = Math.floor(Math.random() * 10);
    const answer = await inquirer.prompt({
        name: "UserGuess",
        type: "number",
        message: "Enter your number between 1 to 10: ",
    });
    const { UserGuess } = answer;
    if (UserGuess == sysGenNo) {
        console.log(`Congratulations! Your guess is correct.`);
    }
    else {
        console.log(`Sorry! Your guess is not correct.`);
    }
}
async function startAgain() {
    do {
        await startFunc();
        var again = await inquirer.prompt({
            name: "restart",
            type: "input",
            message: "Do you want to continue? Press Y or N: ",
        });
    } while (again.restart == "Y" || again.restart == "y" || again.restart == "yes" || again.restart == "YES");
}
startAgain();
