import { createContext, useContext } from "react";
import {User} from './demo'

export const DashboardContext = createContext<User | undefined>(undefined)

 

export function useUserContext(){
    const user = useContext(DashboardContext);
    if (user === undefined) {
        throw new Error("User context not found")
    }
    
    return user;
     
}