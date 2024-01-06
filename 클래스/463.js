class Person {
    constructor(name) {
        this.name = name;
    }
    // 프로토타입 메서드
    sayHi() {
        console.log(`hi ${this.name}`);
    }
}

const me = new Person('Lee');
me.sayHi(); // hi Lee