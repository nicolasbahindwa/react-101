import {useReducer} from 'react'

type CounterState = {
    count: number;
}

// type CounterAction = {
//     // type: string;
//     type: 'Increment' | 'Decrement' | 'Rest';  // or 'Increment' | 'Decrement'
//     payload?: number;
// }

type UpdateAction ={
    type: 'Increment' | 'Decrement';
    payload: number;
}

type ResetAction = {
    type: 'Reset';
    
}
// discriminated unition
type CounterAction = UpdateAction | ResetAction


const initialState = {count:0}

function reducer(state: CounterState, action: CounterAction){
    switch(action.type){
        case 'Increment':
            return{count: state.count + action.payload}
        case 'Decrement':
            return{count: state.count - action.payload}
        case 'Reset':
            return initialState  // or initial state as needed, e.g., {count: 0}
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='mt-2 text-sm font-bold border-t'>
        <h2>Count: {state.count}</h2>
        <button className='bg-gray-100 p-2 m-1'
             onClick={() => dispatch({type: 'Increment', payload: 2})}>Increment</button>
        <button className='bg-gray-100 p-2 m-1' 
            onClick={() => dispatch({type: 'Decrement', payload: 1})}>Decrement</button>
        
        <button className='bg-gray-100 p-2 m-1' 
            onClick={() => dispatch({type: 'Reset'})}>Reset</button>
  
    </div>
  )
}

export default Counter