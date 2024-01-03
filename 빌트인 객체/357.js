const str = 'hi';

// 원시 타입인 문자열이 래퍼 객체인 String 인스턴스로 변환된다.
console.log(str.length); // 2
console.log(str.toUpperCase()); // HI

// 다시 원시값으로 되돌린다
console.log(typeof str); // string

const num = 1.5;
console.log(num.toFixed());