import React from 'react'

type InputProps = {
    value: string,
    handleChange: (event:React.ChangeEvent<HTMLInputElement>)=> void
}

const Input = (props:InputProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(event)
    }
  return (
    <div>
        {/* <input type="text" 
            className='border p-2 rounded-lg ml-2'
            onChange={props.handleChange}
            value={props.value} 
            placeholder="Enter your text" /> */}

        <input type="text" 
            className='border p-2 rounded-lg ml-2'
            onChange={handleChange}
            value={props.value} 
            placeholder="Enter your text" />
       
    </div>
  )
}

export default Input