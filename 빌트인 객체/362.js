console.log(window.Infinity === Infinity); //true
console.log(3 / 0); // 양의 무한대 Infinity
console.log(-3 / 0); // 음의 무한대 -Infinity

console.log(window.NaN); // NaN
console.log(Number('abc')); // NaN
console.log(1 * 'foo'); // NaN

console.log(window.undefined); // undefined
var foo;
console.log(foo); // undefined
