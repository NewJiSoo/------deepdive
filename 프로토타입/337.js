function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function(){
    console.log(`hi ${this.name}`);
};
// 정적 프로퍼티
Person.staticProp = `static prop`;

// 정적 메서드
Person.staticMethod = function(){
    console.log(`staticMethod`);
};

const me = new Person('Lee')

Person.staticMethod();