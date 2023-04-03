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
        type: 'list',
        message: 'What type of license are you using for your application?',
        name: 'license',
        choices: ['MIT', 'ISC', 'None']
    },
    {
        type: 'input',
        message: 'Add any contributors to your project.',
        name: 'contributors'
    },
    {
        type: 'input',
        message: 'Include any testing information for your application.',
        name: 'testing'
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Readme created!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            const md = generateMarkdown(data);
            writeToFile('README.md', md);
        })
        .catch((err) => console.error(err)); 
}

// Function call to initialize app
init();
