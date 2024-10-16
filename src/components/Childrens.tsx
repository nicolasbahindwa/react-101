import React, { ReactNode } from 'react'


interface Childrens{
    children: ReactNode
}

const Childrens = ({children}) => {
     
  return (
    <div>
        <div>{children}</div>
    </div>
  )
}

export default Childrens