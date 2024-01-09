const arr = ['hello', 'world'];

console.log(arr.flatMap(x => x.split('')))

// [
//     'h', 'e', 'l', 'l',
//     'o', 'w', 'o', 'r',
//     'l', 'd'
//   ]