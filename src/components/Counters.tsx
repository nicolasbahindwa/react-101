import {useState} from 'react'

const Counters = () => {
    const [counter, setCounter] = useState<number>(0)
  return (
    <div>
        <h1>Counter app</h1>
        <h2>{counter}</h2>
        <button className='bg-black text-white p-2 m-1' onClick={() => setCounter(counter + 1)}>Increment</button>
        <button className='bg-black text-white p-2 m-1' onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  )
}

export default Counters