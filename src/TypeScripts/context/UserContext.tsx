import {createContext, useState} from 'react'
import { UserAuth, UserContextType } from './users';

 type UserContextProviderProps = {
    children : React.ReactNode
}

 
export const  UserContext= createContext<UserContextType| null>(null)

export const UserContextProvider = ({children}: UserContextProviderProps) => {
 const [user, setUser] = useState<UserAuth| null>(null)
 const UserValue = { user, setUser };
 return (
    <UserContext.Provider value={UserValue}>
        {children}
    </UserContext.Provider>
 )

}