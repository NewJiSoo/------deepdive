var Counter = (function () {
    var num = 0;
    return {
        increase() { return ++num; },
        decrease() { return --num; }
    };
}());

console.log(Counter.num); // undefined
console.log(Counter.increase()); // 1
console.log(Counter.decrease()); // 0