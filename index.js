//importing everything i need
const fs = require('fs');
const inquirer = require('inquirer');
const genMD = require('./generateMD')

//Prompt and get data from user
inquirer.prompt ([
    {
        type: 'input',
        name: 'projectName',
        message: `What is the name of your project?
PROJECT NAME: `,
    },
    {
        type: 'input',
        name: 'description',
        message: `What is a short description of your project?
DESCRIPTION`
    },
    {
        type: 'input',
        name: 'installation',
        message: `How will the user install this project?
INSTALLATION`
    },
    {
        type: 'input',
        name: 'usage',
        message: `How will the user use this project?
USAGE`
    },
    {
        type: 'input',
        name: 'testing',
        message: `how can the user test this project?
TESTING`
    },
    {
        type: 'input',
        name: 'contribution',
        message: `How can other users make contributions to this project?
CONTRIBUTION`
    },
    {
        type: 'list',
        name: 'license',
        message: `
CHOOSE LICENSE`,
        choices: [
            'Unlicense',
            'Apache License 2.0',
            'MIT License',
            'GNU General Pubilc License v3'
        ]
    },
    {
        type: 'input',
        name: 'userName',
        message: `What is your GitHub username to be used in the contact page?
USERNAME`
    },
    {
        type: 'input',
        name: 'email',
        message: `What is your email to be used in the contact page?
EMAIL`
    },
    {
        type: 'input',
        name: 'yourName',
        message: 'What is your first and last name?'
    }
]).then((data) => {

    //Put data into markdown 
    const MDReadme = genMD.generateMarkdown(data)

    //create file name
    const fileName = `${data.projectName}_README.md`

    //create file
    fs.writeFile (fileName, MDReadme, (err) => {
        err ? console.error(err) : console.log('Success!')
    });
})