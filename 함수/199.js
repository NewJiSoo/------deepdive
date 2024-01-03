console.dir(add); //[Function: add]
console.dir(sub); //undefined

console.log(add(2, 5)); //7
console.log(sub(2, 5)); //TypeError

function add(x, y) {
    return x + y;
}

var sub = function (x, y) {
    return x - y;
};

// 호이스팅 순서
// 1. function add(x, y) {
//     return x + y;
// }

//2. var sub (이때 뒤의 값으로 평가되는 함수는 선언 X)