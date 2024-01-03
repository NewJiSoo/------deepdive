function foo(x, y, z) {
    return x + y + z;
}
console.log(foo.length); // 3

var nameFunction = function foo() { };
console.log(nameFunction.name); // foo
