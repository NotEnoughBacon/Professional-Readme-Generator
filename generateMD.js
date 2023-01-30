const licensePath = {
    unlicense: 'https://unlicense.org',
    apache: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    mit: 'https://mit-license.org',
    gpv3: 'https://www.gnu.org/licenses/gpl-3.0.en.html'
}

function getLicense (license) {
    switch (license) {
        case 'Unlicense':
            return licensePath.unlicense;
        
        case 'Apache License 2.0':
            return licensePath.apache;

        case 'MIT License':
            return licensePath.mit;

        case 'GNU General Pubilc License v3':
            return licensePath.gpv3;
    }
}

function getBadge (license) {
    switch (license) {
        case 'Unlicense':
            return `![Unlicense](https://img.shields.io/badge/License-Unlicense-brightgreen)`;

        case 'Apache License 2.0':
            return `![Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-brightgreen)`;

        case 'MIT License':
            return `![MIT License](https://img.shields.io/badge/License-MIT-brightgreen)`;

        case 'GNU General Pubilc License v3':
            return `![GNU General Pubilc License v3](https://img.shields.io/badge/License-gpl%20v3-brightgreen)`;
    }
}

function licenseSection (license, yourName) {

    return `## License\n
Licensed under the [${license}](${getLicense(license)})
${license == 'Unlicense' ? '' : ', copyright by ' + yourName}\n____\n
Badges from [Shields.io](https://shields.io)`;
}

function bodySection(data) {
    
    let sections = ''

    let toc = '## Table of Contents\n'

    let descriptions = ''

    if (data.description) {
        descriptions = `## Description\n${data.description}\n`;
    }

    if (data.installation) {
        toc += `* [Installation](#installation)` + '\n';
        sections += `## Installation\n${data.installation}\n`;
    }

    if (data.usage) {
        toc += `* [Usage](#usage)` + '\n';
        sections += `## Usage\n${data.usage}\n`;
    }

    if (data.testing) {
        toc += `* [Testing](#testing)` + '\n';
        sections += `## Testing\n${data.testing}\n`;
    }

    if (data.contribution) {
        toc += `* [Contribution](#contribution)` + '\n';
        sections += `## Contribution\n${data.contribution}\n`;
    }

    if (data.userName) {
        toc += `* [Questions?](#questions)` + '\n';
        sections += `## Questions\n
If you have any questions about this project you can find me on [GitHub](https://github.com/${data.userName}).\n`;

        if (data.email) {
            sections += `Or you can email me at ${data.email}.\n`;
        }
    }

    return descriptions + toc + sections;
}


function generateMarkdown(data) {
    return `# ${data.projectName}
${getBadge(data.license)}
${bodySection(data)}
${licenseSection(data.license, data.yourName)}`;
}

module.exports = {
    generateMarkdown: generateMarkdown
};