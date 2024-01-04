function getThisBinding() {
    return this;
}
const thisArg = { a: 1 } // this 로 상용할 객체
console.log(getThisBinding()); // window

console.log(getThisBinding.apply(thisArg)); // {a:1}
console.log(getThisBinding.apply(thisArg)); // {a:1}
// bind 메서드는 함수를 호출하지 않으므로 명시적으로 호출해야 함
console.log(getThisBinding.bind(thisArg)); // getThisBinding
console.log(getThisBinding.bind(thisArg)()); //{a:1}
