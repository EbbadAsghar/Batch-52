#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";


let calc = [
    {
        name: "num1",
        type: "number", 
        message: ("Please Enter Your First Number: "), 
    },
    {
        name: "num2",
        type: "number", 
        message: ("Please Enter Your Second Number: "), 
    },
    {
        name: "operation",
        type: "list", 
        choices: ["addition", "subtraction", "multiplication", "division"],
        message: ("Please Select Your Operation: "), 
    }
];

let answer = [
    {
        name: "again",
        type: "confirm",
        message: ("Do you want to calculate again"),
    }
];

function sum(a: number, b: number) {
    return a + b;
};
function sub(a: number, b: number) {
    return a - b;
};
function mul(a: number, b: number) {
    return a * b;
};
function div(a: number, b: number) {
    return a / b;
};

(async () => {
    await showBanner('Calulator', 'This Calculator can perform Addition, Subtraction, Multiplication & Division.', "red", "blue");
})();

async function calculator () {
let condition = true;
while(condition){

let {num1, num2, operation} = await inquirer.prompt(calc);

if (operation === "addition") {
    console.log(chalk.bgGreenBright(`The sum of two numbers:`, sum (num1,num2)));
} else if (operation === "subtraction") {
    console.log (chalk.bgYellowBright(`The Difference of two numbers:`, sub (num1,num2)));
} else if (operation === "multiplication") {
    console.log(chalk.bgRedBright(`The Product of two numbers:`, mul (num1,num2)));
} else if (operation === "division") {
    console.log(chalk.bgMagentaBright(`The Remainder is:`, div (num1,num2)));
} else {
    console.log(`You have not selected any operation.`);
};
let {again} = await inquirer.prompt(answer);
condition = again;
}
}
setTimeout(() => {
    calculator()
}, 2000);



