import { useState } from "react"

type AuthUser = {
    name: string;
    email: string;
}


export const User = () => {
    // const [user, setUser] = useState<AuthUser | null>(null)
    // no need to add question makes if we use the bellow format
    const [user, setUser] = useState<AuthUser>({} as AuthUser)


    const handleLogin = () => {

        setUser({
            name: "John Doe",
            email: "johndoe@example.com"
        })
       
    }
    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>Email is {user?.email} </div>
        </div>
    )
}