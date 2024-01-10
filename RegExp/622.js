const target = 'A AA B 12 Bb AAA';
const regExp = /[^0-9]+/g;
console.log(target.match(regExp)); //[ 'A AA B ', ' Bb AAA' ]