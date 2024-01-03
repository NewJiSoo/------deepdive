let foo = 1; // 전역 변수

{ // 지역 변수
    let foo = 2;
    let bar = 3;
    console.log(foo); // 2
    console.log(bar); // 3
}

console.log(foo); // 1
console.log(bar); // ReferenceError