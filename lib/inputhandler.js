// Require the file where the user input handling code is located
require('./userInputHandler');

// Require inquirer module
const inquirer = require('inquirer');

// Prompt the user for input using inquirer
inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: function(value) {
      if (value.length <= 3) {
        return true;
      } else {
        return 'Please enter up to three characters.';
      }
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hexadecimal number):'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hexadecimal number):'
  }
]).then(answers => {
  // Process user input here
  console.log(answers);
});