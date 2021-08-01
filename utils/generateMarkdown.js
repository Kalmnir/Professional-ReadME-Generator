// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (data.license) {
    case 'Apache License 3.0':
      break;
    case 'GNU General Public License v3.0':
      break;
    case 'MIT':
      break;
    case 'Mozilla Public License 2.0':
      break;
    case 'Open Software License 3.0':
      break;
    case 'The Unlicense':
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
  ## Description
  ${data.description}
  
  ## Table of contents
  *[License](#license)
  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usage)
  *[Test](#test)
  *[Contribution](#contribution)
  *[Questions](#questions)
  
  ## Installation
  This project requires the following dependencies to fucntion: ${data.installation}
  
  ## Usage
  To use this project, ${data.usage}
  
  ## Test
  ${data.test}
  
  ## Contribution
  To contribute to this project, ${data.contribution}
  
  ##License
  This project is licensed under the ${data.license} license.

  ## Questions?
  For any questions, please contact me at one of the following links.

  GitHub: https://github.com/${data.username}
  Email: ${data.email}


`;
}

module.exports = generateMarkdown;
