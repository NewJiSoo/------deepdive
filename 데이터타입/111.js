// '+'를 사용하면 숫자형으로 변환

var x = true;
console.log(+x); // 1 : true가 1로 변환

x = false;
console.log(+x); // 0 : false는 0으로 변환

x = 'hello';
console.log(+x); // NaN 문자열은 숫자로 변환할 수 없어 NaN으로 반환

