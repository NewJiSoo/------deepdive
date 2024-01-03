const person = {};
// 프로퍼티 정의
Object.defineProperty(person, 'fist', {
    value: 'Lee',
    writable: true,
    enumerable: true,
    configurable: true
});