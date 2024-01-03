console.log(eval('1 + 2;')) // 3, 표현식인 문
console.log(eval('var x = 5;')) // undefined, 표현식이 아닌 문

// eval 함수에 의해 런타임에 선언문이 실행되어 x 변수가 선언됨
console.log(x); // 5

isFinite(null); // true: null->0

isFinite(Infinity); // false
isFinite(NaN); // false
isFinite('gellgell') // false

isNaN(NaN); // true
isNaN(10); // false
isNaN('apple'); // true
isNaN({}); // true
isNaN(undefined); // true
isNaN(true); // false -> 1

parseFloat('3.14'); // 3.14
parseFloat('10.00') // 10
parseFloat('34 45 66') // 34
parseFloat('40 days') // 40
parseFloat('he was 40') // NaN

parseInt('10'); //10
parseInt(3.5); // 3

parseInt('10', 8); // 8, 결과를 8진수로 해석하고 10진수 정수로 반환
console.log(parseInt('21', 16)); // 16, 결과를 16진수로 해석하고 10진수 정수로 반환

const uri = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=감자'
const enc = encodeURI(uri);
console.log(enc);

let uriComp = encodeURIComponent(uri);
console.log(uriComp);