function sum() {
    let res = 0;
    // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for문을 순회할 수 있다.
    // 전달된 인자의 수에 따라 반복문 실행
    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    return res;
}

console.log(sum());
console.log(sum(1, 2)); // arguments[0] = 1 , arguments[1] = 2
console.log(sum(1, 2, 3));