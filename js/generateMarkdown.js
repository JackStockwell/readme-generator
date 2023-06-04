// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//https://img.shields.io/github/license/JackStockwell/readme-generator
function renderLicenseBadge(license) {
  console.log("Badge")
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
      return "N/A"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log("Link")
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
      return "N/A"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license === 'N/A') {
    return 'N/A'
  }

  return `This project is licensed under the \"${license}\" License. 
  The full details of which can be found [Here](${renderLicenseLink(license)})`
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
  
  ## Usage

  ${data.use}
      
  ## Credits
  
  ${data.credit}
  
  ## License

  ${renderLicenseSection(data.license)}
  
  ## Questions
  
  ${data.questions}
  
  ## How to Contribute
  
  ${data.contribute}
  
  ## Tests
  
  ${data.test}
  `;
}

module.exports = generateMarkdown;
