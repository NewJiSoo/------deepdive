const target = 'Is this all there is?';
const regexp = /is/ig; // 대소문자를 구분해서 검색
regexp.test(target); // true
target.match(regexp);

console.log(target.match(regexp)); // [ 'Is', 'is', 'is' ]

const regexp2 = /.../g;
console.log(target.match(regexp2));
//['Is ', 'thi', 's a', 'll ', 'the', 're ', 'is?']

// const target2 = 'A AA B BB Aa Bb AAA';
// const regexp3 = /A{1,2}/g;
// console.log(target2.match(regexp3)); // [ 'A', 'AA', 'A', 'AA', 'A' ]

const target2 = 'A AA B BB Aa Bb AAA';
const regexp3 = /A+/g;
console.log(target2.match(regexp3)); // [ 'A', 'AA', 'A', 'AAA' ]

const target3 = 'color colour';
const regexp4 = /colou?r/g;
console.log(target3.match(regexp4)); // [ 'color', 'colour' ]