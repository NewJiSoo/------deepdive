class Person {
    // private 필드 정의
    #name = '';
    constructor(name) {
        // private 필드 참조
        this.#name = name;
    }
}
const me = new Person('Lee');

console.log(me.#name); // SyntaxError
// private필드는 클래스 외부에서 참조할 수 없다