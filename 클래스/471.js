const person = {
    // 데이터 프로퍼티
    first: 'gogo',
    last: 'Lee',

    // 함수로 구성된 접근자 프로퍼티
    // getter함수
    get fullName() {
        return `${this.first} ${this.last}`;
    },
    //setter함수
    set fullName(name) {
        // 배열 디스트럭처럼 할당
        [this.first, this.last] = name.split(' ');
    }
};

// 데이터 프로퍼티를 통한 프로퍼티 값 참조
console.log(`${person.first} ${person.last}`); // gogo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값 저장
// 값을 저장하면 setter함수가 호출됨
person.fullName = 'dudu Kim';
console.log(person); // { first: 'dudu', last: 'Kim'}

// 접근자 프로퍼티를 통한 프로퍼티 값 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수 호출됨
console.log(person.fullName); // dudu Kim

// fullName은 접근자 프로퍼티
// 접근자 프로퍼티는 
// get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
console.log(Object.getOwnPropertyDescriptor(person, 'fullName'));
// {
//     get: [Function: get fullName],
//     set: [Function: set fullName],
//     enumerable: true,
//     configurable: true
//   }