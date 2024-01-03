// if문, for문, 함수 등 종료 시 세미콜론을 붙이지 않아도 되지만(세미콜론 자동 삽입 기능)
// 의도와 다르게 될 수 있다
function foo() {
    return
    { }
}
// 자동 : return; {};
// 원했던 기능 : return {};