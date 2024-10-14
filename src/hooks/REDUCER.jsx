import React, {useReducer} from 'react'

const initialState = {count:0}

function CounterReducer(state, action){
    const actions = {
      increment: (state) => ({ count: state.count + 1 }),
      decrement: (state) => ({ count: state.count - 1 }),
      reset: () => ({ count: 0 }),
      incrementByValue: (state) => ({ count: state.count + action.payload }),
    };

    const handler = actions[action.type];
    if(!handler){
        throw new Error(`unsupported action type: ${action.type}`)
    }
    return handler(state)
}


export { initialState, CounterReducer };