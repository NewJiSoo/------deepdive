function isEqual(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
}
isEqual(0.1 + 0.2, 0.3); //true

0.1 + 0.2; // 0.3000000000..4
0.1 + 0.2 === 0.3; // false

Infinity > Number.MAX_VALUE; // true

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);