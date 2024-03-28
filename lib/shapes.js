// Exports `Triangle`, `Circle`, and `Square` classes

class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    render() {
        // Implement rendering logic for a triangle with the specified color
        return `<polygon points="150, 50 250, 200 50, 200" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        // Implement rendering logic for a circle with the specified color
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        // Implement rendering logic for a square with the specified color
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Circle, Square };