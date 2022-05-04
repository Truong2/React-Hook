import React from "react";
import { useState, useLayoutEffect, useEffect } from "react";
const Countdown = () => {
  const [count, setCount] = useState(2);
  const [isDone, setIsDone] = useState(false);
  useEffect(() => {
    if (count === 0) {
      setIsDone(true);
      return;
    }
    let check = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(check);
    };
  }, [count]);
  return <div>{isDone === false ? <>{count}</> : <></>}</div>;
};

export default Countdown;
