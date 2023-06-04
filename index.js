const inquirer = require('inquirer');
const fs = require('fs')

const generateMarkdown = require('./js/generateMarkdown')
const questions = require('./js/questions')

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log("README.md created successfully!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            let data = response
            data = generateMarkdown(response)
            console.log(data)
            writeToFile('example.md', data)
        })
        .catch((error) => error.isTtyError ? console.log("Prompt could not be rendered. Please follow all instruction from GitHub.") : console.log("Something went wrong.. (Check GitHub for issues)"));
}

// Function call to initialize app
init();