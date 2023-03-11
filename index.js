const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
inquirer
  .prompt([

        {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "projecttitle"
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "projectdescription"
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "projectinstall"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "projecttest"
    },
    {
        type: "input",
        message: "What does the user need to know about using your repo?",
        name: "projectuse"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "projectcollaborator"
    },
        {
        type: "list",
        message: "What license should your project have?",
        name: "projectlicense",
        choices: ['None','MIT','Eclipse', 'IBM', 'ISC', 'SIL']
    },


]).then((data) => {
    console.log(data);
    fs.writeFile('README.md'.generateMarkdown(data),
        error => {
            if (error) {
                console.log('We cant generate a README file until all the data has been inputted')
            }
            console.log('We have generated your README file')
        }
    )
})