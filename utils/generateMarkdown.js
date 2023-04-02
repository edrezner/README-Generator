// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.desctiption}

  ## Table of Contents

  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributors](#contributors)
  4. [Test Information](#testing)
  5. [License](#license)
  6. [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage
  
  ${data.usage}

  ## Contributors

  ${data.contributors}

  ## Testing

  ${data.testing}

  ## License

  ${data.license}

  ## Questions

  If you have any questions you can reach me at ${data.email}. Visit www.github.com/${data.username} to see more of my work.
`;
}

module.exports = generateMarkdown;
