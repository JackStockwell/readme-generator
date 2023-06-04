
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
// THEN I am taken to the corresponding section of the README.

const validateAns = (answer) => {
    if (answer.length < 1) {
        return "Please enter an answer, if it is not applicable please enter N/A as your answer."
    }
    return true;
};

const questions = 
[
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
        validate: validateAns
    },
    {
        type: 'input',
        message: 'Can you give a brief description of your project? Be sure to be descriptive for the following questions.',
        name: 'description',
        validate: validateAns
    },
    {
        type: 'input',
        message: 'What was your motivation and reason behind the project?',
        name: 'motivation',
        validate: validateAns
    },
    {
        type: 'input',
        message: 'What problems did it solve?',
        name: 'solve',
        validate: validateAns
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'learn',
        validate: validateAns
    },
    {
        type: 'input',
        message: 'What are they steps required to install your project?',
        name: 'install',
        validate: validateAns
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'use',
        validate: validateAns
    },
    {
        type: 'input',
        message: 'Any credits that you need to give? (Collaborators, followed tutorials, blogs, documentation etc.)',
        name: 'credit',
        validate: validateAns
    },
    {
        type: 'input',
        message: 'How does a developer contribute towards the project?',
        name: 'contribute',
        validate: validateAns
    },
    {
        type: 'input',
        message: 'How to run tests on the project?',
        name: 'test',
        validate: validateAns
    },
    {
        type: 'list',
        message: 'Please select the license you want to file under',
        name: 'license',
        choices: ['GNU GPLv3 (General Public License)', 'MIT', 'Apache 2.0', 'The Unlicense', 'N/A'],
    }
];


module.exports = questions;