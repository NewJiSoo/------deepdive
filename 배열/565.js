const arr = [1, 5, 100, 30, 2, 25]
arr.sort((a, b) => a - b);
console.log(arr); // [ 1, 2, 5, 25, 30, 100 ]

console.log(arr[0], arr[arr.length - 1]); // 1, 100