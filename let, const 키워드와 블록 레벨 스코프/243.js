var x = 1;

if (true) {
    var x = 10; // 이미 선언된 전역 변수 x가 있으므로 중복 선언됨
}
console.log(x);

var i = 10;
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);