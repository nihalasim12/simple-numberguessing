#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with computer generated number and show result

const randomnumber = Math.floor(Math.random() * 5+1);
const answer = await inquirer.prompt([
    {
    name:"UserGuessedNumber",
    type: "number",
    message: "Please guess a number between 1 to 6",              
},
]);

if(answer.UserGuessedNumber === randomnumber){
    console.log("congrats you guess right number. ")
}
else {
    console.log("you guess wrong number")
}

console.log(answer);