var score = 80; // 80의 메모리 주소를 참조하고 있음
var copy = score; // score의 메모리 주소를 참조하고 있음

console.log(score);
console.log(copy);
console.log(score === copy); // true

score = 100;


console.log(score); // 100 주소 참조
console.log(copy); // 여전히 score의 주소 참조
console .log(score === copy); // false