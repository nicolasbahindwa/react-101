import React, {createContext, useState} from 'react'

interface contextPros {
    count: number,
    increment: () => void,
    decrement: () => void,
 
}

export const MyContext = createContext<contextPros>({
    count:0,
    increment:() => {},
    decrement: () => {},
 })


 interface MyProviderProps{
    children: React.ReactNode,
 }


  const MyProvider : FC<MyProviderProps> = ({children}) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
     }
    
     const decrement = () => {
        setCount(count - 1)
     }
    
    return (
        <MyContext.Provider value={{count, increment, decrement}}>
            {children}
        </MyContext.Provider>
    )
 }

 export default MyProvider