const Person = class MyClass { };
const me = new Person();

console.log(MyClass); // ReferenceError
const other = new MyClass(); // ReferenceError