// Jest tests for shapes

const { Triangle, Circle, Square } = require('../lib/shapes');

describe('Triangle class', () => {
  test('renders a triangle with the correct color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
  // Add more test cases for Triangle class if needed
});

describe('Circle class', () => {
  test('renders a circle with the correct color', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toEqual('<circle cx="100" cy="100" r="50" fill="red" />');
  });
  // Add more test cases for Circle class if needed
});

describe('Square class', () => {
  test('renders a square with the correct color', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toEqual('<rect x="50" y="50" width="100" height="100" fill="green" />');
  });
  // Add more test cases for Square class if needed
});