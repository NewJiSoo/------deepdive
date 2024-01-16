const strObj = new String('Lee');

console.log(Object.getOwnPropertyDescriptors(strObj));
/* String 래퍼 객체는 읽기 전용 객체다. 즉, writable 프로퍼티 어트리뷰트 값이 false다.
{
  '0': { value: 'L', writable: false, enumerable: true, configurable: false },
  '1': { value: 'e', writable: false, enumerable: true, configurable: false },
  '2': { value: 'e', writable: false, enumerable: true, configurable: false },
  length: { value: 3, writable: false, enumerable: false, configurable: false }
}
*/

const str = 'Hello World';

// 문자열 str에서 'l'을 검색하여 첫 번째 인덱스를 반환한다.
str.indexOf('l'); // -> 2


// 문자열 str에서 'or'을 검색하여 첫 번째 인덱스를 반환한다.
str.indexOf('or'); // -> 7

// 문자열 str에서 'x'를 검색하여 첫 번째 인덱스를 반환한다. 검색에 실패하면 -1을 반환한다.
str.indexOf('x'); // -> -1

if (str.includes('Hello')) {
    // 문자열 str에 'Hello'가 포함되어 있는 경우에 처리할 내용
}

// const str = 'Hello world';
// 문자열 str에서 정규 표현식과 매치하는 문자열을 검색하여 일치하는 문자열의 인덱스를 반환한다.
str.search(/o/); // -> 4
str.search(/x/); // -> -1

// const str = 'Hello world';

// 문자열 str의 인덱스 3부터 'l'이 포함되어 있는지 확인
str.includes('l', 3); // -> true
str.includes('H', 3); // -> false