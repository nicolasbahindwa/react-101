import React, {useReducer}from 'react'
interface State{
    count:number;
    error:string | null

}

interface Action{
    type: "increment" | "decrement"
}

function reducer(state: State, action: Action){
    const {type} = action;
    console.log("triggered")
   
    switch (type) {
      // case "increment":{
      //     return{...state, count:state.count + 1}
      // }
      case "increment": {
         const newCount = state.count + 1;
         const hasError = newCount > 5;
        return { ...state, count: hasError ? state.count : newCount,
            error: hasError ? 'Maximun reached' : null,
        };
      }
      case "decrement": {
        const newCount = state.count - 1;
        const hasError = newCount < 5;
        return{
            ...state, count: hasError ? state.count : newCount,
            error: hasError ? 'Minimun reached': null
        }
      }
    //   case "decrement": {
    //     return { ...state, count: state.count - 1 };
    //   }
      default:
        return state;
    }
}

const UsReducerDemo = () => {
    const [state, dispatch] = useReducer( reducer, {count:0, error: null});
  return (
    <div className=" border p-4">
      <div>count: {state.count}</div>
      {state.error && <div className="mb-2 text-red-500">{state.error}</div>}
      <button
        className="mb-2 border p-2 m-2"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>

      <button
        className="mb-2 border p-2 m-2"
        onClick={() => dispatch({ type: "decrement" })}
      >
        decrement
      </button>
    </div>
  );
}

export default UsReducerDemo
