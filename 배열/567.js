const arr = [1, 5, 2];
const foo = [];
arr.forEach(item => foo.push(item ** 2));
console.log(foo); // [ 1, 25, 4 ]

[1, 2, 3].forEach((item, index, arr) => {
    console.log(`값${item}, 인덱스${index}, this:${JSON.stringify(arr)}`);
});
// 값1, 인덱스0, this:[1,2,3]
// 값2, 인덱스1, this:[1,2,3]
// 값3, 인덱스2, this:[1,2,3]

const result = [1, 2, 3].forEach(console.log);
console.log(result); // undefined