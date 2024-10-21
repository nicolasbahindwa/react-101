import React from 'react'
import Button from './Button'
import Input from './Input'

const MainEventProps = () => {
  return (
    <div className='mt-8'>
        <h1 className='text-lg font-bold'>passing event to a prop</h1>

        <Button handleClick={(event, id) => {
            console.log('Button clicked!', event, id)
        }} />
        
        <Input value='' handleChange={(event) => {
            console.log('Input changed!', event.target.value)
        }} />
    </div>
  )
}

export default MainEventProps