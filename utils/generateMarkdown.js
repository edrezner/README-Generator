// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license === 'None' ? '' : `[![License](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license === 'None' ? '' : `- [License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license === 'None' ? '' : `## License\n\n${license}\n\n`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Contributors](#contributors)
  - [Test Information](#testing)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage
  
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributors

  ${data.contributors}

  ## Testing

  ${data.testing}

  ## Questions

  If you have any questions you can reach me at ${data.email}. Visit my GitHub [${data.username}](https://www.github.com/${data.username}) to see more of my work.
`;
}

module.exports = generateMarkdown;
