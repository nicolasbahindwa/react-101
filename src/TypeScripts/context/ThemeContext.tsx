"use client"

import {createContext} from 'react'
import {ThemeType, theme} from './theme'


type ThemeContextProviderProps={
    children: React.ReactNode
}

export const ThemeContext = createContext<ThemeType>(theme)

export const ThemeContextProvider = ({children}:ThemeContextProviderProps) => {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}
