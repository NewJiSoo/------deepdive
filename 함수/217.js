function repeat(n, foo) {
    for (var i = 0; i < n; i++) {
        foo(i); // i 를 전달하면서 foo를 호출
    }
}

var foo = function (i) {
    if (i % 2) console.log(i);
}

repeat(5, foo); // 1 3