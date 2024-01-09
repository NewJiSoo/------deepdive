const arr = [1, 2, 3, 2];
// let result = arr.push(3, 4);
console.log(arr); // [ 1, 2, 3, 2, 3, 4 ]

arr[arr.length] = 5;
console.log(arr); // [ 1, 2, 3, 2, 5 ]