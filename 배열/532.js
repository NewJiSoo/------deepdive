const arr = [1, 2, 3, 4, 5];

arr.length = 3;

console.log(arr); // [1, 2, 3]

const aspa = [, 2, , 4];
console.log(aspa); //[ <1 empty item>, 2, <1 empty item>, 4 ]
console.log(aspa.length); // 4