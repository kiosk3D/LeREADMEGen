function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out to me via the following methods:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

function generateMarkdown(data) {
  function renderLicenseBadge(license) {}
  
  function renderLicenseLink(license) {}
  
  function renderLicenseSection(license) {}

  return `# ${data.title}

`;
}


module.exports = generateMarkdown;

