function Perseon(name) {
    this.name = name;
}

const me = new Perseon('Lee');

// 프로토타입으로 교체할 객체
const parent = {
    // constructor 프로퍼티와 생성자 함수 간의 연결 설정
    constructor:Person,
    sayHello(){
        console.log(`hi ${this.name}`);
    }
};

// 생성자 함수의 prototype프로퍼티와 프로토타입 간의 연결을 설정
Person.prototype = parent;

// me 객체의 프로토타입을 parent객체로 교체
Object.setPrototypeOf(me, parent); // me.__proto__ = parent; 같은 코드