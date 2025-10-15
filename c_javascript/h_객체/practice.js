// practice.js

// ! 배열
// 변수종류(const/let) 변수명 = [값1, 값2, ...];

// ! 함수
// 1) 함수 선언식: function 함수명(매개변수 나열) { ... }
// 2) 함수 표현식: 변수종류 변수명 = function () { ... }
// 3) 화살표 함수: 변수종류 변수명 = () => { ... }

// ! 객체
// ? 키와 값의 쌍으로 나열 (속성과 기능 사이는 ,콤마로 분리)

/*
변수종류 변수명 = {}
  키: 값,             // 속성
  키: {
    키: 값,
    키: 값
  }
  키: function() {    // 기능, 행위
    ...
  },
  키: fucntion() {

  }

  변수명(객체명).속성
  변수명(객체명).기능명();
*/ 


// ! 객체, 배열, 함수 복습 문제

// == 문제 1 == //
// # 1) 객체 생성
// : person 객체 생성 - name(문자열), age(숫자), isStudent(boolean) 속성 추가

// cf) 불리언 타입 변수 명명 규칙
//    : true(참), false(거짓) - 2가지의 값만을 가짐
//    >> is, has와 같이 동사와 명사를 결합하여 의문문 변수명을 주로 사용
//    EX) is + 명사: isStudent(학생이니?)  / isAnimal(동물이니?)
//        has + 동사: hasEatLunch(점심먹었니?) / hasCold(감기걸렸니?)

let person = { // 객체 리터럴 방식: {} 중괄호 사용
  
// 속성(변수): '키: 값'의 쌍으로 정의
  name: '이승아',
  age: '50',
  isStudent: false
}

// 객체의 속성값에 접근
// 1) 객체명.속성명;
// 2) 객체명[속성명];
console.log(person.age);
console.log(person['name']);

// # 2) 배열 생성
// : fruits 배열을 생성하고, 여러 가지 과일 이름을 문자열로 추가 (3가지 이상)
// - 두 번째 과일을 콘솔에 출력
let fruits = ['banana', 'apple', 'mango'];
console.log(fruits[1]); // 배열 요소 접근: 배열명[인덱스번호]

// # 3) 함수 생성
// : 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 add 함수 작성
// >> 매개변수 O, 반환값 O

// function add(a, b) {
//   return a + b;
// }

// let add = function(a, b) {
//   return a + b;
// }

let add = (a, b) => a + b;

console.log(add(3, 5)); // 8

// ! 문제 2
/*
? 배열의 요소를 각각 순회하여 인덱스/키를 변수에 할당
  : 중괄호 내에서 인덱스를 활용
  >> 배열명[인덱스명]
  >> 객체명["키명"]

for (let 변수명 in 배열명/객체명) {

}

*/
console.log("=== 문제 2 ===");
//& 1. 객체 탐색
// : 초급에서 작성한 person 객체의 모든 속성과 값을 순회하며 콘솔에 출력하는 코드를 작성
// >> for in 반복문 사용

for (let personList in person) {
  console.log(person[personList]);
}

//& 2. 배열 메서드(배열 내장 함수) 사용
// : 초급에서 작성한 fruits의 모든 과일을 대문자로 변환하여 새 배열에 저장하고, 이 배열을 콘솔에 출력
let upperFruits = fruits.map(fruit => fruit.toUpperCase)


//& 3. 함수 활용
// : 두 개의 배열을 매개변수로 받아, 첫 번째 배열의 모든 요소에 두 번째 배열의 요소를 순서대로 더한 새 배열을 반환하는 함수를 작성

let first = [1, 2, 3];
let second = [4, 5, 6];

let plus = (a, b) => { a + b };


// [1, 2, 3]
// [4, 5, 6]
// >> [5, 7, 9]

//! == 문제 3 ==

//& 1. 객체 깊은 복사
// : person 객체를 '깊은 복사'하는 함수를 작성

// +) 객체의 깊은 복사 JSON 자료형을 사용
// >> JSON.stringfy(객체데이터)
// >> JSON.parse(JSON데이터)


//& 2. 배열과 객체를 활용한 데이터 처리
// : 아래의 users 배열에서 성인 사용자(18세 이상)만 필터링(filter)하고, 필터링된 사용자의 이름을 새 배열로 만들어 반환(map)하는 함수를 작성
// : 메서드 체이닝 사용

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Doe", age: 18 }
];