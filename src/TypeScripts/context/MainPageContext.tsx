import React from 'react'
import {UserContextProvider} from './UserContext'
import {UserPage} from './User'
import Box from './Box'
import { ThemeContextProvider } from './ThemeContext'

const MainPageContext = () => {
  return (
   <>
      <ThemeContextProvider>
            <UserContextProvider>
                <Box />
                <UserPage />
            </UserContextProvider>
        </ThemeContextProvider>
   </>
  )
}

export default MainPageContext