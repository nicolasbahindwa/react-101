import React from 'react'

type ButtonProps = {
    // handleClick: () => void
    // handleClick: (event:React.MouseEvent<HTMLButtonElement>) => void
    handleClick: (event:React.MouseEvent<HTMLButtonElement>, id:number) => void
}

const Button = (props:ButtonProps) => {
  return (
    <div>
        {/* <button onClick={props.handleClick} className='bg-gray-200 p-2 m-2'>Click Me!</button> */}
       <button className='bg-gray-200 p-2 m-2'
        onClick={(event) => props.handleClick(event,1)}
       >
        click me
       </button>
    </div>
  )
}

export default Button