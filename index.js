// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your application?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please provide a description of your application',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please enter any installation instructions.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please enter usage instructions.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Add any contributors to your project.',
        name: 'contributions'
    },
    {
        type: 'input',
        messsage: 'Include any testing information for your application.',
        name: 'testing'
    },
    {
        type: 'list',
        message: 'What type of license are you using for your application?',
        name: 'license',
        choices: ['MIT', 'ISC', 'None']
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
