const map = new Map();

const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

map
    .set(lee, 'developer')
    .set(kim, 'designer');

console.log(map.get(lee)); // developer
console.log(map.get('key')); // undefined




const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

const map = new Map([[lee, 'developer'], [kim, 'designer']]);

console.log(map.has(lee)); // true
console.log(map.has('key')); // false