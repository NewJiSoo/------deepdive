const target = 'A AA B BB Aa Bb AAA';
const regExp = /A|B/g;
console.log(target.match(regExp));  // ['A', 'A', 'A', 'B','B', 'B', 'A', 'B','A', 'A', 'A']

const target2 = 'Aa Bb 12,34 _$%^&';
const regExp2 = /[\w,]+/g;
console.log(target2.match(regExp2)); // [ 'Aa', 'Bb', '12,34', '_' ]