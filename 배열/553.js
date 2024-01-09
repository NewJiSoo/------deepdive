const arr = [1, 2, 3, 4, 5];
const result = arr.splice(1, 2, 20, 30);
// 인덱스 1부터 2개의 요소를 제거하고, 20, 30을 삽입한다.

console.log(result); // [ 2, 3 ]
console.log(arr); // [ 1, 20, 30, 4, 5 ]