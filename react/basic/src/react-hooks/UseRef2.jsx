import React, {useRef} from "react";

function UseRef2() {
  const inputRef = useRef();
  
  useEffect(()=>{
      console.log(inputRef); // Jennie
      inputRef.current.focus();
  },[]);

  const login = () => {
    alert(`Welcome, ${inputRef.current.value}!`); // Welcome, Jennie
    inputRef.current.focus();
  }

    return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" /> // Jennie
      <button onClick={login}>login</button>
    </div>
  );
}

export default UseRef2;
