const target = 'Is this all there is?';
const regexp = /is/i; // 패턴 : is, 플래그: i, 대소문자를 구별하지 않고 검색한다.
regexp.test(target); // true

const regexp2 = new RegExp(/is/i); // ES6
regexp.test(target); // true

console.log(regexp.exec(target));
//[ 'Is', index: 0, input: 'Is this all there is?', groups: undefined ]

console.log(target.match(regexp));
//[ 'Is', index: 0, input: 'Is this all there is?', groups: undefined ]

target.match(/is/i);