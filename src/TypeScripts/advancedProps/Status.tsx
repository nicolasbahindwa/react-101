import React from 'react'
import StatusComponent from './StatusAdvancedProp'
import Heading from './Heading'
import Oscar from './Oscar'

const MainStatusComp = () => {

  return (
    <div>
        <StatusComponent status='success'/>
        <Heading>
            Welcome to My App!
        </Heading>

        <Oscar>
            <Heading>THE BIG OSCAR GOES TO DICA LAMERVEIL</Heading>
        </Oscar>

    </div>
  )
}

export default MainStatusComp