class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hi, ${this.name}.`;
    }
}

class student {
    constructor(name) {
        super(name);
    }

    study() {
        return `${this.name} is studying.`;
    }
}
