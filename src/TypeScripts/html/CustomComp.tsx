import React from 'react'
import {CustomButton} from './Button'

const CustomComp = (props:React.ComponentProps<typeof CustomButton>) => {
  return (
    <div>{props.size} {props.size}</div>
  )
}

export default CustomComp