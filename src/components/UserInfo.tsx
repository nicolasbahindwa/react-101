import React, { ReactNode, FC } from 'react'
import {Info} from './../types'


type userInfoProp = {
    user:Info;
}


 

const UserInfo: FC<userInfoProp>  = ({user}) => {
 
  return (
    <div>
        <h3>my profile ----</h3>
        <p>name: {user.id}</p>
        <p>email: {user.username}</p>
        <p>phone: {user.email}</p>

         
    </div>
  )
}

export default UserInfo