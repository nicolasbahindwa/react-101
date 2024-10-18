import React, {useState, useMemo} from 'react'
import { initialItems } from './utils'

const UseMemodemo = () => {
    const [items] = useState(initialItems)
    const [counter, setCounter] = useState(0)

    //---- the code bellow generate a performance issue
    // const selectedItem = items.find((item) => item.isSelected)
    // fix with useMemo
    // const selectedItem = useMemo(() => items.find((item) => item.isSelected),[items])

    const selectedItem = useMemo(
      () => items.find((item) => item.id === counter),[counter, items])
  return (
    <div className='space-x-5 mt-4'>
        UseMemo hook
        <p></p>
        <p>{counter}</p>
        <p>{selectedItem?.id}</p>
        <button className='bg-gray-100 text-red-400 p-2' onClick={() => setCounter(counter + 1)}>Increment counter</button>
        <button className='bg-gray-100 text-red-400 p-2' onClick={() => setCounter(counter - 1 )}>Decrement counter</button>
    </div>
  )
}

export default UseMemodemo