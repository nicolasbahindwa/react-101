import React, { useContext } from 'react'
import { DashboardContext, useUserContext } from './context'

const Profile = ( ) => {
    const user = useUserContext()
  return (
    <div>
        <h1 className='underline'>Profile</h1>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
         
  
    </div>
  )
}

export default Profile