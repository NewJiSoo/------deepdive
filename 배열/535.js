const arr = new Array(10);
console.log(arr);//[ <10 empty items> ]
console.log(arr.length);

Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of('string'); // ['string']

Array.from({ length: 2, 0: 'a', 1: 'b' }) // [ 'a', 'b' ]
Array.from('hello'); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log(Array.from('hello'));

console.log(Array.from({ length: 3 }, (_, i) => i)); // [ 0, 1, 2 ]