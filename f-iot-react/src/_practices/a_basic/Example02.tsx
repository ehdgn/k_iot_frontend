import React from 'react'

/*
# 복습 문제 (1)

문제) 할 일 대시보드

- 여러 컴포넌트로 나누기 (부모 -> 자식으로 Props 전달)
- 조건부 렌더링 (삼항 연산자, &&)
- 배열 렌더링 + key 
*/

// === 요구 사항 === 
//@ 1. Todo 타입 정의 (interface Todo)
interface Todo {
  id: number;
  text: string;
  done: boolean;
}

//@ 2. TodoItem 컴포넌트 Props 타입 정의 (interface TodoItemProps)
interface TodoItemProps {
  todo: Todo;
}

//@ 3. TodoItem 컴포넌트 생성
// 반환
// - div 내에서 done이 true면 텍스트 앞에 👉 첨부, 아니면 그냥 출력     >> p 태그
function TodoItem({todo}: TodoItemProps) {
  return (
    <div>
      <p key={todo.id}>{todo.done ? '👉' + todo.text : todo.text }</p>
    </div>
  )
}

//@ 4. TodoBoard 컴포넌트 Props 타입 정의 (interface TodoBoardProps - todos: Todo[])
interface TodoBoardProps {
  todos: Todo[];
}

//@ 4. TodoBoard 컴포넌트 생성
// 
// 반환
// - todos.length(배열의 길이)
//   > 0 일 경우 '할 일이 없습니다.' 출력       >> p 태그
//   > 0 이 아닐 경우 
//     (1) 완료: 완료된 할 일 개수(done: true) / 전체: 전체 할 일 수 
//         EX) 완료: 3 / 전체: 5  
//     (2) 배열 렌더링
//         div 내에서 done이 true면 텍스트 앞에 👉 첨부, 아니면 그냥 출력 //^ <TodoItem /> 컴포넌트 사용 (+ key / props)
function TodoBoard({todos}: TodoBoardProps) {
  return (
    <div>
      <p>{
      (todos.length === 0) ? '할 일이 없습니다.' 
      : '완료:' + todos.filter(todo => todo.done === true)
      .length + '/ 전체:' + todos.length
      }
      </p>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  )
}

//@ Z_Example02 컴포넌트 (데이터 정의 및 전달)
function Z_Example02() {
  const todos: Todo[] = [
    { id: 1, text: "React 문법 복습", done: true },
    { id: 2, text: "Props 이해하기", done: false },
    { id: 3, text: "조건부 렌더링 연습하기", done: false }
  ]

  return (
    <div style={{ marginTop: '10px', padding: "20px", border: '1px dashed black' }}>
      {<TodoBoard todos={todos} />}
    </div>
  )
}

export default Z_Example02