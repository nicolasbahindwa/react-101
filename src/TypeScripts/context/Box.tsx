import React, {useContext} from 'react'
import {ThemeContext} from './ThemeContext'


const Box = () => {
    const theme = useContext(ThemeContext)
  return (
    <div style={{
        backgroundColor:theme.primary.main,
        color: theme.primary.text,
        padding:'20px',
        borderRadius: '10px'
        }}>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur?</p>

    </div>
  )
}

export default Box