const Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        console.log(`hi ${this.name}`);
    };
    return Person;
}());

const me = new Person('Lee');

me.sayHello = function () {
    console.log(`hi ${this.name}`);
};

me.sayHello();