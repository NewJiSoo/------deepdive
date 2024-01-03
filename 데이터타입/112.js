// '+'하나 이상이 문자열인 경우 문자열 연결 연산자로 동작

var x = '1' + 2; // '12' 문자열
console.log(x)

x = 1 + true // 2 숫자
console.log(x)

x = 1 + false // 1 숫자
console.log(x)

x = 1 + undefined; // NaN, undefined는 숫자 타입 변환되지 않음!
console.log(x)

x = '123sdf'
console.log(+x)

console.log(Number.isNaN(+'123sdf'))
console.log(+'123sdf')

