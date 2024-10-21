import { useState } from "react"


export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)


    const handleLogin = () => {
        setIsLoggedIn(true)
        // You can save the user information in local storage or any other persistent storage
        // localStorage.setItem("isLoggedIn", true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
        // Remove the user information from local storage
        // localStorage.removeItem("isLoggedIn")
    }

    return (
        <div>
            <h1>User is {isLoggedIn ? 'Logged in': 'Logged out'}</h1>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}