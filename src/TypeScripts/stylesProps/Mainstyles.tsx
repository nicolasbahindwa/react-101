import React from 'react'
import ContainerStyles from './Container'

const Mainstyles = () => {
  return (
    <div>
        <h1 className='text-lg font-bold mt-8'>Mainstyles</h1>
        <ContainerStyles styles={{border:'1px solid black', padding:'1rem'}} />

    </div>
  )
}

export default Mainstyles