const base = {
    name: 'Lee',
    sayHi() {
        return `hi ${this.name}`;
    }
};

const derived = {
    __proto__: base,

    sayHi() {
        return `${super.sayHi()}. hihi`;
    }
};

console.log(derived.sayHi()); // hi Lee. hihi