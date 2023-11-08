// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",

    },
    {
        type: "input",
        name: "user",
        message: "What is your Github username?",
    }
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    }
    {
        type: "input",
        name: "description",
        message: "Enter a description for your project:",
    }
    {
        type: 
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
