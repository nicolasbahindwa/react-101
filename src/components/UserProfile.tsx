import {useState} from 'react'

type userProfile = {
    name: string,
    email: string,
    age: number,
    address: {
      street: string,
      city: string,
    }
  
}

const UserProfile = () => {
    const [user, setUser] = useState<userProfile>({
      name: 'John Doe',
      email: 'johndoe@example.com',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'New York',
      },
    })
  return (
    <div>
        <h1>User Profile</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
        <p>Address: {user.address.street}, {user.address.city}</p>
      <button className='p-2 bg-gray-200 text-black' onClick={() => setUser({...user, age: user.age + 1 })}>Increment Age</button>
    </div>
  )
}

export default UserProfile