const arr1 = [1, 2, 3];
const arr2 = [4, 5];
let result = arr1.concat(arr2);
console.log(result); // [ 1, 2, 3, 4, 5 ]

result = arr1.concat(3);
console.log(result); // [ 1, 2, 3, 3 ]

result = arr1.concat(arr2, 5, 6);
console.log(result); // [ 1, 2, 3, 4, 5, 5, 6 ]

console.log(arr1); // [ 1, 2, 3 ]