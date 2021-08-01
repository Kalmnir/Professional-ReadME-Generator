// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// const util = require('util');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username? (No @ needed)',
        name: 'username',
        default: 'Kalmnir',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        default: 'Project Title',
    },
    {
        type: 'input',
        message: 'Please write a description of your project.',
        name: 'description',
        default: 'Project description',
    },
    {
        type: 'input',
        message: 'Please type in your E-mail adress',
        name: 'email',
        default: 'jmsackett91@gmail.com'
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
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT', 'Mozilla Public License 2.0', 'Open Software License 3.0', 'The Unlicense'],
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
function init() {
    try {
        inquirer.prompt(questions)
            .then(function (data) {
                writeToFile('README.md', generateMarkdown(data));
                console.log(data)
            })
    } catch (err) {
        console.error(err);
    }
}

// Function call to initialize app
init();
