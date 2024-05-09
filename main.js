#!/usr/bin/env node
import inquirer from "inquirer";
//Computer will generate a number
// user will guessed a number
// compare both numbers
// const randomNumber = 13; // hardcore number
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 - 6",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("You Guessed a Right number");
}
else {
    console.log("You Guessed it wrong");
}
