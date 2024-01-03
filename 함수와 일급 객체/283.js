// 1. 함수는 무명의 리터럴로 생성할 수 있다.
// 2. 함수는 변수에 저장할 수 있다.
const increase = function (num) {
    return ++num;
};

// 함수가 객체에 저장되고 있음
const foo = { increase };

// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(foo) {
    let num = 0;
    return function () {
        num = foo(num);
        return num;
    };
}

const up = makeCounter(foo.increase);
console.log(up()); // 1