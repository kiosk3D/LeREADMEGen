// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  // Question 1
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  // Question 2
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  // Question 3
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions for your project:',
  },
  // Question 4
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information for your project:',
  },
  // Question 5
  {
    type: 'input',
    name: 'contribution',
    message: 'Provide contribution guidelines for your project:',
  },
  // Question 6
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions for your project:',
  },
  // Question 7
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
  },
  // Question 8
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  // Question 9
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('README file generated successfully!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
init();

