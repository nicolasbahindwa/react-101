import React, { useRef } from "react";
import Counter, { CounterRef } from "./counter";

const UseImperativeHandle: React.FC = () => {
  const counterRef = useRef<CounterRef>(null);

  return (
    <div className="flex flex-col">
      <h1 className="underline underline-offset-1">useImperativeHandle hook</h1>

      <Counter ref={counterRef} />

      <button onClick={() => counterRef.current?.reset()}>Reset counter</button>
      <button onClick={() => counterRef.current?.checkSubscribed(true)}>checkSubscribed</button>
    </div>
  );
};

export default UseImperativeHandle;
