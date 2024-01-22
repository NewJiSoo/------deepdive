const { size } = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(size); // 2

const map = new Map([['key1', 'value1'], ['key2', 'value2']]);

console.log(Object.getOwnPropertyDescriptor(Map.prototype, 'size'));
// {set: undefined, enumerable: false, configurable: true, get: ƒ}

map.size = 10; // 무시된다.
console.log(map.size); // 2

const map = new Map();
console.log(map); // Map(0) {}

map.set('key1', 'value1');
console.log(map); // Map(1) {"key1" => "value1"}

const map = new Map();

map
    .set('key1', 'value1')
    .set('key2', 'value2');

console.log(map); // Map(2) {"key1" => "value1", "key2" => "value2"}




const map = new Map();

const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

// 객체도 키로 사용할 수 있다.
map
    .set(lee, 'developer')
    .set(kim, 'designer');

console.log(map);
// Map(2) { {name: "Lee"} => "developer", {name: "Kim"} => "designer" }