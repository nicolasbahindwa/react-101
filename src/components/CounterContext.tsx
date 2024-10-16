import React, {FC,useContext} from 'react'
import {MyContext} from  '../context/MyContext'



const CounterContext: FC = () => {
    const {count, increment, decrement} = useContext(MyContext);
  return (
    <div className='space-x-4'>
       <p> {count}</p>

        <button className='p-2 border bg-gray-200' onClick={increment}>+</button>
        <button className='p-2 border bg-gray-200' onClick={decrement}>-</button>

    </div>
  )
}

export default CounterContext