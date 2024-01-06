class Person {
    // 1. 인스턴스 생성 및 초기화 - constructor
    constructor(name) {
        this.name = name; // name의 프로퍼티는 public하다
    }
    // 2. 프로토타입 메서드
    sayHi() {
        console.log(`hi ${this.name}`);
    }
    // 3. 정적 메서드
    static sayHello() {
        console.log('hello')
    }
} // 클래스 선언문
const Person2 = class { }; // 익명 클래스 표현식
const Person3 = class MyClass { }; // 기명 클래스 표현식