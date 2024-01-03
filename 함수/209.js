function foo(first, second){
    first += 100;
    second.name = 'Lee';
}

var num = 100;
var person = { name : 'Kim' };

console.log(num); //100
console.log(person); //{ name : 'Kim' }

foo(num, person);
console.log(num); //100
console.log(person); //{ name : 'Lee' }