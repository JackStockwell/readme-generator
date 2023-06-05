
// Used to validate whether an answer was inputted.
const validateAns = (answer) => {
    if (answer.length < 1) {
        return "Please enter an answer, if it is not applicable please enter N/A as your answer."
    }
    return true;
};

// The array of questions.
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
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username. (Please ensure accuracy)',
        name: 'username',
        validate: validateAns
    },
    {
        type: 'input',
        message: 'Please enter your Email. (Please ensure accuracy)',
        name: 'email',
        validate: validateAns
    },
];


module.exports = questions;