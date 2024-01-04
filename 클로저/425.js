const x = 1;
function foo() {
    const x = 10;
    bar();
    // 함수 호출 위치와 상관 없다!
}

// 함수 bar는 자신의 상위스코프, 즉 전역 렉시컬 환경을 [[Environment]]에 저장해 기억한다.
function bar() {
    console.log(x);
}

foo(); //1
bar(); //1
