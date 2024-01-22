const set = new Set();
console.log(set); // Set(0) {}

set.add(1);
console.log(set); // Set(1) {1}

const set = new Set();

set.add(1).add(2);
console.log(set); // Set(2) {1, 2}

const set = new Set();

set.add(1).add(2).add(2);
console.log(set); // Set(2) {1, 2}

const set = new Set([1, 2, 3]);

console.log(set.has(2)); // true
console.log(set.has(4)); // false