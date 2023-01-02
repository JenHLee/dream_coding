// 1. 저장공간
// State의 변화 -> 렌더링 -> 컴포넌트 내부 변수들 초기화
// Ref의 변화 -> No 렌더링 -> 변수들의 값이 유지됨
// State의 변화 -> 렌더링 -> 그래도 Ref의 값은 유지됨
// useEffect안에서 변화하는 값을 출력하고 싶을때 useRef를 사용, 만약 useEffect안에서 useState를 쓰면 무한루프

// 2. DOM 요소에 접근
// focus()

import React, { useRef, useState } from "react";

function UseRef() {
  const [renderer, setRenderer] = useState(false);
  // 변경될때마다 렌더링 O
  const [count, setCount] = useState(0);
  // 변경되어도 렌더링 X, 렌더링되면 저장된 변경된 값을 보여줌.
  const countRef = useRef(0);
  // 변경되어도 렌더링 X, 렌더링될떄마다 값이 0으로 초기화됨
  let countVar = 0;

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref:", countRef.current);
  };

  const increaseCountVar = () => {
    countVar = countVar + 1;
    console.log("Var:", countVar);
  };

  const doRendering = () => {
    setRenderer(!renderer);
  };

  const printResults = () => {
    console.log("----------");
    console.log(`ref: ${countRef.current}, var: ${countVar}`);
  };
  return (
    <div>
      <button onClick={doRendering}>Rendering!</button>
      <p>State: {count}</p>
      <button onClick={increaseCountState}>State Increase</button>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountRef}>Ref Increase</button>
      <p>Var: {countVar}</p>
      <button onClick={increaseCountVar}>Var Increase</button>
      <br />
      <button onClick={printResults}>Ref Var Print</button>
    </div>
  );
}

export default UseRef;
