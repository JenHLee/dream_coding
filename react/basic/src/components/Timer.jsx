import React, { useEffect } from "react";

const Timer = (props) => {
  useEffect(() => {
    const timer = setInterval(()=> {
        console.log("timer is running");
    }, 1000);

    return () => {
        clearInterval(timer);
        console.log('timer stop');
    };
  }, []);

  return <div>Timer Start</div>;
}

export default Timer;
