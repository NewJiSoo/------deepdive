var foo = [];
for (let i = 0; i < 3; i++) {
    foo[i] = function () { return i; };
}

for (let i = 0; i < foo.length; i++) {
    console.log(foo[i]());
}