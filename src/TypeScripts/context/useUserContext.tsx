
import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const useUserContext = () => {
    const context = useContext(UserContext)
    if (context === null) {
        throw new Error('useUserContext must be used within a UserContextProvider')
    }
    return context
}