import { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../app/features/counter/counterSlice";


const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Redux counter -----------------|||||||----------------</h1>
            <h1>Counter: {count}</h1>
            <button className="border p-2 m-2 " onClick={() => dispatch(increment())}>Increment</button>
            <button className="border p-2 m-2 " onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}

export default Counter;