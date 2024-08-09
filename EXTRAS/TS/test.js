"use strict";
class Duck {
    name;
    constructor(_name) {
        this.name = _name;
    }
    swim() {
        return `${this.name} can swim! :D`;
    }
    run() {
        return `${this.name} can run! :D`;
    }
}
const roberto = new Duck('Robert');
console.log(roberto.swim());
console.log(roberto.run());
