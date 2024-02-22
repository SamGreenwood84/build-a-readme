const fs = require('fs');
const inquirer = require('inquirer');
const { cliInput, webAppInput } = require('./input');

console.log('Hello Coders! Let\'s build a readme! Skip the boring part and just input your answers to our developer-approved questionnaire. Let\'s gooooo!');

const InputQuestions = [
    {
      type: 'list',
      name: 'projectType',
      message: 'Is your project a Command-line Input Tool or a Web Application?',
      choices: ['Command-line Input tool', 'Web application']
    },
    {
      type: 'input',
      name: 'title',
      message: 'Add project title'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Add project description'
    },
    {
      type: 'input',
      name: 'installationInstructions',
      message: 'Add detailed instructions for user install'
    },
    {
      type: 'input',
      name: 'usageInformation',
      message: 'Add user experience and expectations',
      when: answers => answers.projectType === 'Web application'
    },
    {
      type: 'input',
      name: 'commandUsage',
      message: 'Add command-line usage examples for your application',
      when: answers => answers.projectType === 'Command-line Input tool'
    },
    {
      type: 'input',
      name: 'collaboration',
      message: 'Add collaboration parameters, instructions and contributors'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Add a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None']
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Add GitHub username, add a comma for more than one contributor'
    },
    {
        const isValidEmail = (email) => {
          const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return emailRegex.test(email);
        };
        
        {
          type: 'input',
          name: 'email',
          message: 'Add Email Address:',
          validate: input => {
            return isValidEmail(input) || 'Enter valid email address.';
          }
        },
          {
            type: 'input',
            name: 'projectUrl',
            message: 'Add project URL',
            when: answers => answers.projectType === 'Web App'
          },
          {
            type: 'input',
            name: 'additionalInformation',
            message: 'Add any additional information'
          }
        ];