import React from 'react'
import Siderbar from './Siderbar'
import Profile from './Profile'

 

const Dashboard: FC = () => {
  return (
    <div>
        <h1 className='underline'>Dashboard</h1>
        <div className='w-2xl border flex justify-between'>
            <Siderbar/>
            <Profile/>
        </div>
    </div>
  )
}

export default Dashboard