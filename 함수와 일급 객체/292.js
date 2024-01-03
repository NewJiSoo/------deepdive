const foo = { a: 1 };
console.log(foo.__proto__ === Object.prototype); // true

(function () { }).hasOwnProperty('prototype');