console.log(new Date()); // 2024-01-10T12:28:49.549Z
console.log(Date()); // Wed Jan 10 2024 21:30:25 GMT+0900 (대한민국 표준시)

console.log(new Date(0)); // 1970-01-01T00:00:00.000Z

console.log(new Date('2020/03/26/10:00:00')); // 2020-03-26T01:00:00.000Z

console.log(new Date(2020, 2)); // 2020-02-29T15:00:00.000Z
console.log(new Date(2020, 2, 26, 10, 00, 00, 0)); // 2020-03-26T01:00:00.000Z

const now = Date.now(); // 1704890256290
console.log(now)

console.log(Date.parse('1970/01/02/09:00:00')); // 86400000

Date.UTC(1970, 0, 2); // 86400000

new Date('2020/07/24').getFullYear(); // 2020

// const today = new Date();
// today.setFullYear(2000);

const today = new Date('2020/7/24/12:30');

console.log(today.toString()); // Fri Jul 24 2020 12:30:00 GMT+0900 (대한민국 표준시)

console.log(today.toDateString()); // Fri Jul 24 2020