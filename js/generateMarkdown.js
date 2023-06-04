// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//https://img.shields.io/github/license/JackStockwell/readme-generator
function renderLicenseBadge(license) {
  switch (license) {
    case 'GNU GPLv3 (General Public License)':
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    case 'Apache 2.0':
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    case 'The Unlicense':
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    case 'N/A':
      return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'GNU GPLv3 (General Public License)':
      return "https://www.gnu.org/licenses/gpl-3.0"
    case 'MIT':
      return "https://opensource.org/licenses/MIT"
    case 'Apache 2.0':
      return "https://opensource.org/licenses/Apache-2.0"
    case 'The Unlicense':
      return "http://unlicense.org/"
    case 'N/A':
      return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  `This project is licensed under the \"${license}\" License. 
  The full details of which can be found [Here](${renderLicenseLink(data.license)})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  
  ${data.description}

  ${data.motivation}

  ${data.solve}

  ${data.learn}
  
  ## Table of Contents (Optional)
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Badges
  
  ${renderLicenseBadge(data.license)}

  ## Installation

  ${data.install}
  
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  
  ## Usage

  ${data.use}
  
  Provide instructions and examples for use. Include screenshots as needed.
  
  To add a screenshot, create an folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    
  ## Credits
  
  List your collaborators, if any, with links to their GitHub profiles.
  
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  If you followed tutorials, include links to those here as well.
  
  ## License

  ${renderLicenseSection(data.license)}
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## Questions
  
  ${data.questions}
  
  ## How to Contribute
  
  ${data.contribute}
  
  ## Tests
  
  ${data.test}
  `;
}

module.exports = generateMarkdown;
