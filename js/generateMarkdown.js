// Renders the License Badge in markdown using a switch.
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
      return "N/A"
  }
}

// Renders the Link in markdown using a switch.
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
      return "N/A"
  }
}

// Renders the license section for generate markdown, calls upon renderlincense.
function renderLicenseSection(license) {

  if (license === 'N/A') {
    return 'N/A'
  }

  return `This project is licensed under the \"${license}\" License. 
  The full details of which can be found [here](${renderLicenseLink(license)})`
}



// Creates the README.md content. Takes the answers from the inquiry prompt.
function generateMarkdown(data) {
  const {title, description, motivation, solve, learn, install, use, credit, contribute, test, license, username, email} = data
  return `
  # ${title}

  ## Description
  
  ${description}

  ${motivation}

  ${solve}

  ${learn}
  
  ## Table of Contents
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Badges
  
  ${renderLicenseBadge(license)}

  ## Installation

  ${install}
  
  ## Usage

  ${use}
      
  ## Credits
  
  ${credit}
  
  ## License

  ${renderLicenseSection(license)}
  
  ## Questions
  
  If you want to see my other projects, visit my GitHub [here](https://github.com/${username}/). 

  If you have any questions, be sure to send me an email via [here](mailto:${email})
  
  ## How to Contribute
  
  ${contribute}
  
  ## Tests
  
  ${test}
  `;
}

module.exports = generateMarkdown;
