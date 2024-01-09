const arr = [1, 2, 3, 2];

console.log(arr.indexOf(2)); // 1
console.log(arr.indexOf(4)); // -1 , 요소가 없으면 -1 반환

if (arr.indexOf('1') === -1) { // 1이 존재하지 않으면 추가
    arr.push('1');
}

if (!arr.includes('1')) {
    arr.push('1');
}

let result = arr.push(3, 4);
console.log(arr);