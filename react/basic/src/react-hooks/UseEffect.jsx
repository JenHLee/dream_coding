import React, { useState, useEffect } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 마운팅 + 렌더링마다 매번 실행됨 - 렌더링 이후
  useEffect(() => {
    console.log("mount, and rendering");
  });

  // 마운팅 + count가 변경될때마다 실행됨
  useEffect(() => {
    console.log("mount, and count");
  }, [count]);

  // 마운팅 + name이 변경될때마다 실행됨
  useEffect(() => {
    console.log("mount, and name");
  }, [name]);

  // 마운팅때만 실행됨
  useEffect(() => {
    console.log("only mount");
  }, []);

  return (
    <div>
      <span>count: {count}</span>
      <button onClick={handleCountUpdate}>Update</button>
      <br></br>
      <span>name: {name}</span>
      <input type="text" value={name} onChange={handleInputChange} />
    </div>
  );
}
