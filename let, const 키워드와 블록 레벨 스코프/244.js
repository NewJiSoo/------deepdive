console.log(foo); // undefined

foo = 123;

console.log(foo); // 123

var foo;

var foo = 123;
var foo = 456;
console.log(foo); // 456

let bar = 123;
let bar = 456; // SyntaxError