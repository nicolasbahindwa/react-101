import React, { FC, useState } from 'react'
import Dashboard from './Dashboard';
import {DashboardContext} from './context';

export interface User {
    isSubscribed: boolean;
    name: string;
    email: string;
}

interface DempProps {

}
const UseContextDemo: FC<DempProps> = () => {
    const [user] = useState<User>({
        isSubscribed: true,
        name: 'John Doe',
        email: 'john.doe@example.com',
    })
  return (
    <div>
        UseContextDemo

        <DashboardContext.Provider value={user}>
            <Dashboard  />
        </DashboardContext.Provider>

    </div>
  )
}

export default UseContextDemo