// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache License 2.0':
      return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
      break;
    case 'GNU General Public License v3.0':
      return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
      break;
    case 'MIT':
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;
    case 'Mozilla Public License 2.0':
      return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
      break;
    case 'Open Software License 3.0':
      return `![License: OSL-3.0](https://img.shields.io/static/v1.svg?label=License&message=OSL-3.0&color=red)`;
      break;
    case 'The Unlicense':
      return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache License 2.0':
      return `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'GNU General Public License v3.0':
      return `[GNU General Public License v3.0](https://opensource.org/licenses/GPL-3.0)`;
      break;
    case 'MIT':
      return `[MIT License](https://opensource.org/licenses/MIT)`;
      break;
    case 'Mozilla Public License 2.0':
      return `[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case 'Open Software License 3.0':
      return `[Open SoftwareLicense 2.0](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case 'The Unlicense':
      return `[The Unlicense](https://opensource.org/licenses/unlicense)`;
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
## Description
  ${data.description}
  
## Table of contents

\n[Description](#description)
\n[Installation](#installation)
\n[Usage](#usage)
\n[Test](#test)
\n[Contribution](#contribution)
\n[License](#license)
\n[Questions](#questions)
  
## Installation
  This project requires the following dependencies to fucntion: ${data.installation}
  
## Usage
  To use this project, ${data.usage}
  
## Test
  ${data.tests}
  
## Contribution
  To contribute to this project, ${data.contribution}
  
## License
  This project is licensed under the ${renderLicenseLink(data.license)}.

## Questions?
  For any questions, please contact me at one of the following links.

  GitHub: https://github.com/${data.username}
  \nEmail: ${data.email}


`;
}

module.exports = generateMarkdown;
