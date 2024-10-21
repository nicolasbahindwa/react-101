import { useContext } from "react"
import {useUserContext} from './useUserContext'



export const UserPage = () => {
    
    // const userContext = useContext(UserContext)
    const {user, setUser} = useUserContext()

    

    const handleLogin = () => {
    
        setUser({
            name: 'John Doe',
            email: 'johndoe@example.com',
        })
        
    }
    const handleLogout = () => {
        setUser(null) // Set user to null to log out
    }

    return (
        <div>
            <button className="bg-gray-100 m-2" onClick={handleLogin}>Login</button>
            <button className="bg-gray-100 m-2" onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name} </div>
            <div>User name is {user?.email} </div>
        </div>
    )
}