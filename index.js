// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMkdwn = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
    //User information
    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your contact email:"
    },
    // Title of Project
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    // Project Description
    {
        type: "input",
        name: "description",
        message: "Please provice a short description of what your project does."
    },
    {
        type: "input",
        name: "techUsed",
        message: "What technologies did you utilize?"
    },
    {
        type: "input",
        name: "challenges",
        meessage: "What are some challenges you faced and/or future features you'd like to impement?"
    },
    // Project Installation Information
    {
        type: "input",
        name: "installation",
        message: "Please provide specific installation instructions for your project."
    },
    {
        type: "input",
        name: "clone",
        message: "What link should be used to clone this repo?"
    },
    // Project Usage
    {
        type: "input",
        name: "usage",
        message: "Please provide any instructions and examples for use."
    },
    // Project Credits
    {
        type: "input",
        name: "contributors",
        message: "If you have any, please list any contributor's github usernames separated by commas"
    },
    {
        type: "input",
        name: "externalAssets",
        message: "List any additional third-party assets or tutorials you utilized"
    },
    //Project License
    {
        type: "list",
        name: "license",
        message: "Please select the license you used for this project.",
        choices: [
          "GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla", "MIT", "Apache", "Boost"
        ]
    },
    // Testing
    {
        type: "input",
        name: "tests",
        message: "Are there tests? Provide examples on how to run them here."
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.error(err) : console.log('Successfully created your README'))
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) =>
        writeToFile('README.md', generateMkdwn(answers)))
}

// Function call to initialize app
init();