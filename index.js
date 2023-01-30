const fs = require('fs');
const inquirer = require('inquirer');
const generateMD = require('./generateMD')

inquirer.prompt ([
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a short description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How will the user install this project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will the user use this project?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'how can the user test this project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can other users make contributions to this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to classify this project?',
        choices: [
            'Unlicense',
            'Apache License 2.0',
            'MIT license',
            'GNU General Pubilc License v3'
        ]
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub username to be used in the contact page?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email to be used in the contact page?'
    }
]).then((data) => {

    const MDReadme = generateMD.genMD(data)

    const fileName = `${data.projectName}_README.md`

    
})