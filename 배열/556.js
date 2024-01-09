const arr = [1, 2, 3, 4, 5];
arr.slice(0, 1); // 1, [0]부터 [1]이전까지 복사(이때 [1]은 미포함)
arr.slice(1, 2); // 2
console.log(arr); // [ 1, 2, 3, 4, 5 ]

arr.join();
console.log(arr.join()); // 1,2,3,4,5
console.log(arr.join('')); // 12345
console.log(arr.join(':')); // 1:2:3:4:5

console.log(arr.reverse()); // [ 5, 4, 3, 2, 1 ]