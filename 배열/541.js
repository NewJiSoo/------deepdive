const arr = [1];

arr.push(2); // 원본 배열 직접 변경
console.log(arr); // [ 1, 2 ]

const result = arr.concat(3); // 직접 변경하지 않고 새로운 배열 생성
console.log(result); // [ 1, 2, 3 ]