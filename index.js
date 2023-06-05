// Packages needed to run the app, loads them when launched.
const inquirer = require('inquirer');
const fs = require('fs')

// Modules needed to run the app.
const generateMarkdown = require('./js/generateMarkdown')
const questions = require('./js/questions')

// Creates a document with the parsed filename and the data to be stored inside.
function writeToFile(fileName, data) {
    // Creates the document, checks for errors.
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log("README.md created successfully!"))
}

// Initialises the App.
function init() {
    // Launches enquirer and prompts the questions. Using promise.
    inquirer
        .prompt(questions)
        // Once the questions are answered, it parses the response into generateMarkdown 
        .then((response) => {
            console.log("Creating...")
            // Returns a completed Markdown file content.
            const data = generateMarkdown(response)
            // File is created using the markdown content.
            writeToFile('example.md', data)
        })
        // If there is an error, this is flagged.
        .catch((error) => error.isTtyError ? console.log("Prompt could not be rendered. Please follow all instruction from GitHub.") : console.log("Something went wrong.. (Check GitHub for issues)"));
}

// Function call to initialize app
init();