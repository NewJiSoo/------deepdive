function foo() {
    console.log('foo는: ', this); // window
    function bar() {
        console.log('bar는: ', this); // window
    }
    bar();
}
foo();