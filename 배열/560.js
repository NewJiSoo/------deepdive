const arr = [1, 2, 3, 4, 5];
arr.fill(0, 1, 3); // 인덱스 1부터 3이전까지 0으로 채운다
console.log(arr); // [ 1, 0, 0, 4, 5 ]

arr.includes(2); //true