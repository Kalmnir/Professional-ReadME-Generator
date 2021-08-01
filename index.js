// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username? (No @ needed)',
        name: 'username',
        default: 'Kalmnir',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('A valid GitHub username is required!');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What is the name of your GitHub repo?',
        name: 'repo',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('A valid Git Hub repo is required!');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('A valid project title is required!');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Please write a description of your project.',
        name: 'description',
        default: 'Project description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('A project description is required!');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Please type in your E-mail adress',
        name: 'email',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('A valid E-mail adress is required!');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'If applicable, give steps needed to install your project for the Installation section.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions for usage and examples of your project in the Usage section.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please select a license for your project',
        choices: ['Academic Free License v3.0', 'Apache License 2.0', 'Educational Community License v2.0', 'MIT', 'Mozilla Public License 2.0', 'Microsoft Public License', 'NCSA Open Source License', 'Open Software License 3.0', 'The Unlicense'],
        deafult: 'MIT',
        name: 'license',
    },
    {
        type: 'input',
        message: 'If applicable, provide guidelines on how other developers can contribute to this project.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'If applicable, please provide tests for your project, and explain how to run them.',
        name: 'tests'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.error(err);
        }
        console.log('Your README.md file has been created successfully')
    });
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const data = await inquirer.prompt(questions);
        const generateContent = generateMarkdown(data);
        console.log(generateContent);

    } catch (err) {
        console.error(err);
    }
}

// Function call to initialize app
init();
