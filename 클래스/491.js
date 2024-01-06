class Base {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `hi ${this.name}`;
    }
}

class Dervied extends Base {
    sayHi() {
        return `${super.sayHi()} 점심 같이 먹자`;
    }
}

const derived = new Derived('Lee');
console.log(derived.sayHi()); //Derived {a:1, b:2}