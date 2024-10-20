import React, { FC,forwardRef, useImperativeHandle,useState } from "react";

interface CounterProps {
  // Add any props here if needed
}

export type CounterRef = {
    checkSubscribed: (value:boolean) => void;
    reset: () => void
}
const Counter = forwardRef<CounterRef, CounterProps>((props, ref) => {
  const [counter, setCounter] = useState<number>(0);

  const reset = () => {
    setCounter(0);
  };

  useImperativeHandle(ref, () => ({
    reset,
    checkSubscribed: (value) => console.log(value),
  }));
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center">
        <b>{counter}</b>
        <div className="space-x-2">
          <button
            onClick={() => setCounter(counter + 1)}
            className="bg-gray-100 text-red-400 p-2"
          >
            Increment
          </button>

          <button
            onClick={() => setCounter(counter - 1)}
            className="bg-gray-100 text-red-400 p-2"
          >
            decrement
          </button>
        </div>
      </div>
    </div>
  );
});

export default Counter;
