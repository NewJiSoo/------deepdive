var string = 'Hello World';
var search = 'l';
var count = 0;

// search 가 string 내에 없을 때 건너뛰기, 있을 때 count +1
for (var i = 0; i < string.length; i++) {
    if (string[i] !== search) continue;
    count++
}

console.log(count); // 3