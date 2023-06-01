
// TODO: Create an array of questions for user input

// TABLE OF CONTENTS

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, 
// and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README 
// entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with 
// additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

const questions = 
[
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Can you give a brief description of your project? Be sure to be descriptive for the following questions.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What was your motivation and reason behind the project?',
        name: 'motivation',
    },
    {
        type: 'input',
        message: 'What problems did it solve?',
        name: 'solve',
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'learn',
    },
    {
        type: 'input',
        message: 'What are they steps required to install your project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'use',
    },
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },

];