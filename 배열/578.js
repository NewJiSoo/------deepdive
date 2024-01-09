const arr = [1, 2, 3, 4, 5];

// 평균 구하기
const average = arr.reduce((acc, cur, i, { length }) => { return i === length - 1 ? (acc + cur) / length : acc + cur; }, 0);
console.log(average); // 3

// 최대값 구하기
const max = arr.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
console.log(max); // 5

// 중복횟수 구하기
const arr2 = ['banana', 'apple', 'orange', 'orange', 'apple'];
const count = arr2.reduce((acc, cur) => { acc[cur] = (acc[cur] || 0) + 1; return acc; }, {});
console.log(count); // { banana: 1, apple: 2, orange: 2 }