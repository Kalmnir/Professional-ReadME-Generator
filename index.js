// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
