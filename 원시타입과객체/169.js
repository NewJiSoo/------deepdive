var foo = 'number'
var i = 0;
var obj = {};

obj[foo + '-' + ++i] = i;
obj[foo + '-' + ++i] = i;
obj[foo + '-' + ++i] = i;

console.log(obj); //{ 'number-1': 1, 'number-2': 2, 'number-3': 3 }