(function () {
    var foo = 10;
    console.log(foo); // 10
}());
console.log(foo); // ReferenceError

var MYAPP = {}; // 객체 생성

MYAPP.name = 'Lee'
console.log(MYAPP.name); // LEE