import React from 'react'

// interface User{
//     name:string;
//     age:number;
//     isStudent:boolean;
//    }

type UserShape = {
    name: string;
    age: number;
    isStudent: boolean;
}


const Users = ({name, age, isStudent}:UserShape) => {
  return (
    <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{isStudent}</p>

    </div>
  )
}

export default Users