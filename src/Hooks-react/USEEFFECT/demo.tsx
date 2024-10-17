import React, {FC, useState, useEffect} from 'react'

interface demoProps{
 counter:string


}

const UseEffectdemo: FC<demoProps> = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [actiontaken, setActionTaken] = useState<'Increment' | 'Decrement'|'no action'>()
    const [counter, setCounter] = useState<number>(0)

    // if counter change the effect show the loading before displaying the use effect again
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            console.log('Fetch Data')
        }, 1000)

    }, [counter])
    
    // if btnClicked is increment then increment the counter else decrement it]
    const increment = () => {
        setActionTaken('Increment')
        setCounter(counter+1)
    }
    
    const decrement = () => {
        setActionTaken('Decrement')
        setCounter(counter-1)
    }
  return (
    <div className='flex flex-col'>
        <h1 className='underline underline-offset-1'>useEffect hook</h1>
        <div className='flex flex-col justify-center items-center'>
           {actiontaken ? <span>{actiontaken}</span> : <span>No action</span>}
           {loading? 'Loading...': (<b style={{color:actiontaken ==='Decrement' ? 'red': 'black'}}>{counter}</b>)  }
            <div className='space-x-2'>
                <button onClick={increment}
                    className='bg-gray-100 text-red-400 p-2'>
                        Increment
                </button>

                <button onClick={decrement}
                    className='bg-gray-100 text-red-400 p-2'>
                        decrement
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default UseEffectdemo