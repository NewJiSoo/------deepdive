function Person(name) {
    this.name = name;
}
// 프로토타입 메서드
Person.prototype.sayHi = function () {
    console.log(`hi ${this.name}`);
};

const me = new Person('Lee');
me.sayHi(); // hi Lee