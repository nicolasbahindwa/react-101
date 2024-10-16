
"use client"
import React, { FormEvent, useRef, useState } from 'react'

type FormData = {
    name: string;
    email: string;
    password: string;
  
}



const Form = () => {

    const [submittedData, setSbubmittedData] = useState<FormData>({
        name:'',
        email:'',
        password:''
    })
    
    const name = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const nameValue = name.current!.value
        const emailValue = email.current!.value
        const passwordValue = password.current!.value
        
        setSbubmittedData({
            name: nameValue,
            email: emailValue,
            password: passwordValue,
        })
    }
  return (
    <div>
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            {/* <input type="text" id="name" ref={name} onChange={(e) => setSbubmittedData({...submitedData, name: e.target.value})} /> */}
            <input type="text" placeholder='enter your name' id="name" ref={name}  />

            <label htmlFor="email">Email:</label>
            {/* <input type="email" id="email" ref={email} onChange={(e) => setSbubmittedData({...submitedData, email: e.target.value})} /> */}
            <input type="email" placeholder='enter your email' id="email" ref={email} />

            <label htmlFor="password">Password:</label>
            {/* <input type="password" id="password" ref={password} onChange={(e) => setSbubmittedData({...submitedData, password: e.target.value})} /> */}
            <input type="password" placeholder='enter your password' id="password" ref={password} />

            <button type="submit" 
              
            >Submit</button>

            <section>
                {submittedData.name && submittedData.email && submittedData.password && 
                <p>Submitted Data: {JSON.stringify(submittedData)}</p>}
            </section>
        </form>

    </div>
  )
}

export default Form