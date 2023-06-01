const inquirer = require('inquirer');
const fs = require('fs')

const markdownModule = require('./js/generateMarkdown')
const questions = require('./js/questions')

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log("README.md created successfully!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response)
            const data = markdownModule(response)
            writeToFile('test.md', data)
        })
}

// Function call to initialize app
init();