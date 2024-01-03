(function () {
    var let = 10; // 에러 발생X

    function foo() {
        'use strict';
        let = 20; // SuntaxError
    }
    foo();
}());