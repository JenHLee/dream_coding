import React from "react";
import { useState } from "react";
export default function UseState() {
  const [time, setTime] = useState(1);
  const [names, setNames] = useState(["Jennie", "Austin", "Lisa"]);
  const [input, setInput] = useState('');

  const handleClickTime = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleClickName = () => {
    setNames((prev) => {
      return ([input, ...prev]) 
    });
  };

  return (
    <>
     {/* basic useState */}
      <div>
        <span>Current Time: {time}h</span>
        <button onClick={handleClickTime}>Update</button>
      </div>
      {/* useState with map */}
      <div>
        <input type="text" value={input} onChange={handleInputChange}></input>
        <button onClick={handleClickName}>Upload</button>
        {names.map((name, id) => {return <li key={id}>{name}</li>})}
      </div>
    </>
  );
}
