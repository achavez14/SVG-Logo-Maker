// Runs the application using imports from lib/
// Use dynamic import to load inquirer module
import('inquirer').then(inquirer => {
    const { prompt } = inquirer.default || inquirer;
    const fs = require('fs');
    const { Triangle, Circle, Square } = require('./lib/shapes');

    // Prompt the user for input using Inquirer
    prompt([
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
        let shape;
        switch (answers.shape) {
            case 'circle':
                shape = new Circle(answers.shapeColor);
                break;
            case 'triangle':
                shape = new Triangle(answers.shapeColor);
                break;
            case 'square':
                shape = new Square(answers.shapeColor);
                break;
            default:
                console.log('Invalid shape choice');
                return;
        }

        // Process user input and render the shape
        console.log(`Rendering ${answers.shape} with color ${answers.shapeColor}:`);
        const svgContent = shape.render(); // Assuming render() method returns SVG content

        // Write the SVG content to a file named logo.svg
        fs.writeFile('logo.svg', svgContent, (err) => {
            if (err) {
                console.error('Error writing logo.svg file:', err);
            } else {
                console.log('logo.svg file has been created successfully!');
            }
        });
    });
}).catch(err => {
    console.error('Failed to load inquirer:', err);
});