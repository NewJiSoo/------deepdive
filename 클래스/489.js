class Base {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}

class Dervied extends Base {
    // constructor(...args){super(...args);}
}

const derived = new Derived(1, 2);
console.log(derived); //Derived {a:1, b:2}