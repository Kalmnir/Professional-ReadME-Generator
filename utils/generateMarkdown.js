// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ##License
  ${data.license}

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
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Test
  ${data.test}

  ## Contribution
  ${data.contribution}

  ## Questions?
  For any questions, please contact me at one of the following links.

  GitHub: ${data.username}
  Email: ${data.email}


`;
}

module.exports = generateMarkdown;
