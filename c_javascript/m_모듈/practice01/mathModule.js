// mathModule.js

// 사칙 연산 함수 정의
// : 각 함수는 인자값 2개를 받아 연산 후 반환

export function add(a, b) {
  return a + b;
}

export default function substract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export let divide = (a, b) => {
  if (b !== 0) {
    return a / b;
  } else {
    console.log('0으로 나눌 수 없습니다.');
  }
}