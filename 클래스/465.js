class Person {
    constructor(name) {
        this.name = name;
    }
    // 정적 메서드
    static sayHi() {
        console.log(`hi ${this.name}`);
    }
}
Person.sayHi();

const me = new Person('Lee');
me.sayHi(); // TypeError