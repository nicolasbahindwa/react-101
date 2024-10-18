import React, { useContext } from 'react'
import { DashboardContext } from './context'
import { useUserContext } from './context'


const Siderbar = ( ) => {
    const user = useUserContext()
  return (
    <div><h1 className='underline'>Siderbar</h1>
        <h2>User: {user.name}</h2>
        <p>Email: {user?.isSubscribed ? 'true' : 'false'}</p>
       
      <hr />
    </div>
  )
}

export default Siderbar