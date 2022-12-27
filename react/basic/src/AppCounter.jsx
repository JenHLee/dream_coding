import React, { useState } from "react";
import Counter from "./components/Counter";

function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev+1);
  return (
    <div>
      <div className="banner">
        Total Count: {count}
        {count > 10 ? "🔥" : "❄"}
      </div>
      <Counter total={count} onClick={handleClick} />
      <Counter total={count} onClick={handleClick} />
    </div>
  );
}

export default AppCounter;
