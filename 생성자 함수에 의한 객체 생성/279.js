function add(x, y) {
    return x + y;
}
// 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출
let num = new add();

console.log(num);

// 객체를 반환하는 일반 함수
function foo(name, age) {
    return { name, age };
}

let person = new foo('Lee', '20');
console.log(person);