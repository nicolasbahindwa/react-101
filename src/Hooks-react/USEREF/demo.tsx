 
import React, {FC, useEffect, useRef, useState} from 'react'

interface demoProps{
    counter:string
   
   }
const UseRefDemo: FC<demoProps> = () => {
    
    const [counter, setCounter] = useState<number>(0)
    const counterRef = useRef(0)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleIncrement = () => {
        setCounter(counter + 1)
        counterRef.current++

        console.log('Counter:', counter)
        console.log('Counter ref:', counterRef.current)
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [])
  return (
    <div className='flex flex-col pt-8 mb-8'>
        <h1 className='underline underline-offset-1'>useRef hook</h1>
        <div className='flex flex-col justify-center items-center'>
            <b>{counter}</b>
            <b>{counterRef.current}</b>
            <div className='space-x-2'>
                <button onClick={handleIncrement}
                    className='bg-gray-100 text-red-400 p-2'>
                        Increment
                </button>

                <div>
                    <input type="text" ref={inputRef} placeholder='type something here.....' className='border mt-2 p-1 rounded-lg' />
                </div>

                 
            </div>
            
        </div>
    </div>
  )
}

export default UseRefDemo