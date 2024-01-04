const x = 1;

function outer() {
    const x = 10;
    const inner = function () { console.log(x); };
    return inner;
}

// outer 함수를 호출하면 중첩함수 inner를 반환한다.
// 그리고 outer 함수의 실행 컨텍스트는 실행 컨텍스트에서 팝되어 제거된다.
const foo = outer();
foo(); // 10