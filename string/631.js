const str = 'Hello world';

// 문자열 str이 'He'로 시작하는지 확인
str.startsWith('He'); // -> true
// 문자열 str이 'x'로 시작하는지 확인
str.startsWith('x'); // -> false
// 문자열 str의 인덱스 5부터 시작하는 문자열이 ' '로 시작하는지 확인
str.startsWith(' ', 5); // -> true

// 문자열 str이 'ld'로 끝나는지 확인
str.endsWith('ld'); // -> true
// 문자열 str이 'x'로 끝나는지 확인
str.endsWith('x'); // -> false

// const str = 'Hello';

for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i)); // H e l l o
}

const str = 'Hello World';
// 인덱스 1부터 인덱스 4 이전까지의 부분 문자열을 반환한다.
str.substring(1, 4); // -> ell

// 인덱스 1부터 마지막 문자까지 부분 문자열을 반환한다.
str.substring(1); // -> 'ello World'

// 첫 번째 인수 > 두 번째 인수인 경우 두 인수는 교환된다.
str.substring(4, 1); // -> 'ell'

// 인수 < 0 또는 NaN인 경우 0으로 취급된다.
str.substring(-2); // -> 'Hello World'

// 인수 > 문자열의 길이(str.length)인 경우 인수는 문자열의 길이(str.length)으로 취급된다.
str.substring(1, 100); // -> 'ello World'
str.substring(20); // -> ''

const str = 'hello world';

// substring과 slice 메서드는 동일하게 동작한다.
// 0번째부터 5번째 이전 문자까지 잘라내어 반환
str.substring(0, 5); // -> 'hello'
str.slice(0, 5); // -> 'hello'

// 인덱스가 2인 문자부터 마지막 문자까지 잘라내어 반환
str.substring(2); // -> 'llo world'
str.slice(2); // -> 'llo world'

// 인수 < 0 또는 NaN인 경우 0으로 취급된다.
str.substring(-5); // -> 'hello world'
// slice 메서드는 음수인 인수를 전달할 수 있다. 뒤에서 5자리를 잘라내어 반환한다.
str.slice(-5); // ⟶ 'world'


str.toUpperCase(); // -> 'HELLO WORLD!'

str.toLowerCase(); // -> 'hello world!'

const str = '   foo  ';

str.trim(); // -> 'foo'

const str = 'abc';

str.repeat();    // -> ''
str.repeat(0);   // -> ''
str.repeat(1);   // -> 'abc'
str.repeat(2);   // -> 'abcabc'
str.repeat(2.5); // -> 'abcabc' (2.5 → 2)
str.repeat(-1);  // -> RangeError: Invalid count value

const str = 'Hello world';

// str에서 첫 번째 인수 'world'를 검색하여 두 번째 인수 'Lee'로 치환한다.
str.replace('world', 'Lee'); // -> 'Hello Lee'