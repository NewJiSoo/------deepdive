function outer() {
    var x = 1;

    function inner() {
        var y = 2;
        console.log(x + y); // 3 // 외부 함수의 변수를 참조할 수 있다.
    }
    inner();
    console.log(y); // ReferenceError
}
outer();