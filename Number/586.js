const num = new Number();
console.log(num); // [Number: 0]

let numObj = new Number('10');
console.log(numObj); // [Number: 10]

numObj = new Number('hello');
console.log(numObj); // [Number: NaN]