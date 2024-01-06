class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    // 함수로 구성된 접근자 프로퍼티
    // getter함수
    get fullName() {
        return `${this.first} ${this.last}`;
    }

    //setter함수
    set fullName(name) {
        [this.first, this.last] = name.split(' ');
    }
};

const me = new Person('gogo', 'Lee');

console.log(`${me.first} ${me.last}`); // 데이터 프로퍼티 값 참조. gogo Lee
me.fullName = 'dudu Kim';
console.log(me);