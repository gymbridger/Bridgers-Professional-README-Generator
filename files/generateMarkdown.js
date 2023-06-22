function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else {
    let encodedLicense = encodeURIComponent(license);
    return `![GitHub license](https://img.shields.io/badge/license-${encodedLicense}-blue.svg)`;
  }
}

function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else {
    return `* [License](#license)\n\n`;
  }
}

function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `## License\n\nThis project is licensed under the ${license} license.\n\n`;
  }
}

function generateMarkdown(data) {
  let markdown = `# ${data.title}\n\n`;
  markdown += renderLicenseBadge(data.license) + "\n\n";
  markdown += "## Description\n\n";
  markdown += data.description + "\n\n";
  markdown += "## Table of Contents\n\n";
  markdown += "* [Installation](#installation)\n";
  markdown += "* [Usage](#usage)\n";
  markdown += renderLicenseLink(data.license);
  markdown += "* [Contributing](#contributing)\n";
  markdown += "* [Tests](#tests)\n";
  markdown += "* [Questions](#questions)\n\n";
  markdown += "## Installation\n\n";
  markdown += data.installation + "\n\n";
  markdown += "## Usage\n\n";
  markdown += data.usage + "\n\n";
  markdown += renderLicenseSection(data.license);
  markdown += "## Contributing\n\n";
  markdown += data.contributing + "\n\n";
  markdown += "## Tests\n\n";
  markdown += data.tests + "\n\n";
  markdown += "## Questions\n\n";
  markdown += `If you have any questions, contact me directly at ${data.email}.\n`;
  markdown += `You can find more of my work at [GitHub](https://github.com/${data.github}/).\n`;

  return markdown;
}

module.exports = generateMarkdown;
