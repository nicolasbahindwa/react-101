import React from 'react'
import Peoples from './Peoples'

const DemoTypes = () => {

    const nameList = [
        {
            first:'bruce',
            last:'wayne',
        },
        {
            first:'peter',
            last:'parker',
        },
        {
            first:'clark',
            last:'kent',
        },
        {
            first:'thor',
            last:'odinson',
        },
        {
            first:'hawkeye',
            last:'jarvis',
        }
    ]
  return (
    <div>
        <h1 className='font-bold text-lg'>Types scripts components</h1>
        <Peoples names={nameList}/>
      
    </div>
  )
}

export default DemoTypes
