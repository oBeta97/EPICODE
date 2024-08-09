interface terricolo{
    run() : string;
}

class Duck implements acquatico, terricolo{
    name:string;

    constructor(_name:string){
        this.name = _name;
    }

    swim(): string {
        return `${this.name} can swim! :D`
    }

    run(): string {
        return `${this.name} can run! :D`
    }
}



const roberto = new Duck('Robert');

console.log(roberto.swim());
console.log(roberto.run());