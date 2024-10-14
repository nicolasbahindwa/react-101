// import React, {useReducer} from 'react'

// const initialState = {count:0}

// function reducer(state, action){
//     const actions = {
//       increment: (state) => ({ count: state.count + 1 }),
//       decrement: (state) => ({ count: state.count - 1 }),
//       rest: () => ({ count: 0 }),
//     };

//     const handler = actions[action.type];
//     if(!handler){
//         throw new Error(`unsupported action type: ${action.type}`)
//     }
//     return handler(state)
// }

import React, { useReducer , useState} from "react";
import { CounterReducer, initialState } from "./REDUCER";


export default function Counter() {
  const [state, dispatch] = useReducer(CounterReducer, initialState);
  const [value, setValue] = useState(0);

     const handleInputChange = (e) => {
       setValue(e.target.value); // Update state with the input value
     };
  const handleIncrementByValue = () => {
    dispatch({ type: "incrementByValue" , payload: +value});
    setValue(0)
    console.log("fire")
  }

  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">Counter: {state.count}</h1>
      <div className="flex justify-center space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>

        <input
          type="number"
          value={value} // Controlled input
          onChange={handleInputChange} // Update the state on input change
          className="px-2 py-1 border rounded"
          placeholder="Enter value"
        />

        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={handleIncrementByValue}
        >
          Increment by value
        </button>
      </div>
    </div>
  );
}
