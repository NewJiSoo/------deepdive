var x = 10; // 전역변수

function foo() {
    // 선언하지 않은 식별자에 값 할당
    y = 20; // window.y = 20;
}
foo();

// 선언하지 않은 식별자 y 참조
console.log(x + y); // 30