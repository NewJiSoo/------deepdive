console.log(Number.isFinite(0)); // true
console.log(Number.isFinite(Number.MAX_VALUE)); // true
console.log(Number.isFinite(Infinity)); // false

// true
Number.isInteger(0);
Number.isInteger(-12);

// false
Number.isInteger('12');
Number.isInteger(0.5);
Number.isInteger(false);
Number.isInteger(Infinity);

console.log(Number.isNaN(Infinity)); // false
Number.isNaN(Infinity);
Number.isNaN(NaN); // true

Number.isSafeInteger(0); //true
Number.isSafeInteger(0.5); //false
Number.isSafeInteger('5'); //false

console.log((77.1234).toExponential()); // 7.71234e+1
console.log((77.1234).toFixed()); // 77

console.log((77.1234).toPrecision()); // 77.1234
console.log((77.1234).toPrecision(1)); // 8e+1

(10).toString(); // '10', 10진수 문자열 반환(생략 시)
(16).toString(2); // '10000' 2진수 문자열 반환
(16).toString(8); // 16, 8진수 문자열 반환