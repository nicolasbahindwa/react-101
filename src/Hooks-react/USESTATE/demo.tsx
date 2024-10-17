import React, {FC, useState} from 'react'

interface demoProps{
 counter:string

}

const UseStatedemo: FC<demoProps> = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [counter, setCounter] = useState<number>(0)
  return (
    <div className='flex flex-col'>
        <h1 className='underline underline-offset-1'>useState hook</h1>
        <div className='flex flex-col justify-center items-center'>
            <b>{counter}</b>
            <div className='space-x-2'>
                <button onClick={() => setCounter(counter+1)}
                    className='bg-gray-100 text-red-400 p-2'>
                        Increment
                </button>

                <button onClick={() => setCounter(counter-1)}
                    className='bg-gray-100 text-red-400 p-2'>
                        decrement
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default UseStatedemo