Math.PI;

Math.round(1.4); // 1
Math.round(1.6); // 2
Math.round(-1.6); // -2

Math.max.apply(null, [1, 2, 3]);
Math.max(...[1, 2, 3]); // ES6 스프레드 문법