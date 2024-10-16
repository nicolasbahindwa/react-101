import React, {useReducer} from 'react'

type Action = {
    type: 'INCREMENT' | 'DECREMENT'| 'RESET',
    payload?: any, // Optional payload for actions that need it
}

type State ={
    count: number;

}

const reducer= (state:State, action:Action) :State =>{
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        case 'DECREMENT':
            return {...state, count: state.count - 1}
        case 'RESET':
            return {...state, count: 0}
        default:
            return state
    }
}

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count:0})
  return (
    <div className='space-x-4'>
        <h1>Counter</h1>
        <button className='p-2 border bg-gray-200' onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button className='p-2 border bg-gray-200' onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        <button className='p-2 border bg-gray-200' onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        <p>Count: {state.count}</p>
  
    </div>
  )
}

export default CounterReducer