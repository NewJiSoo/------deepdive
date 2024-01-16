const strObj = new String();
console.log(strObj); // String {length: 0, [[PrimitiveValue]]: ""}

// const strObj = new String('Lee');
// console.log(strObj);
// String {0: "L", 1: "e", 2: "e", length: 3, [[PrimitiveValue]]: "Lee"}

console.log(strObj[0]); // L
// 문자열은 원시값이므로 변경할 수 없다. 이때 에러가 발생하지 않는다.
strObj[0] = 'S';
console.log(strObj); // 'Lee'