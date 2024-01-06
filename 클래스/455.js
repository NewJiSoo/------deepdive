// console.log(Person); // ReferenceError

class Person { }

const me = new Person();
console.log(me); //Person {}
const other = Person();
console.log(other); //TypeError
