
import React, {FC, useState, useCallback} from 'react'
import Search from './Search';
import Shuffle  from './utils';

const allUsers = [
    'jane',
    'john',
    'bill',
    'emily',
    'james',
    'sarah',
    'tim',
    'tom',
    'mike',
    'laura'
]

interface DemoProps{

}

const UseCallbackDemo: FC<DemoProps> = () => {
    const [users, setUsers] = useState(allUsers);

    const handleSearch = useCallback(
    
    (text:string) => {
        console.log(users[0])
        const filteredUsers = allUsers.filter((user) => user.includes(text),);
        setUsers(filteredUsers)
      }, [users])


  return (
    <div>
        <h1>UseCallbackDemo</h1>
        <div>
            <button className='bg-gray-200 p-2 m-2' onClick={() => setUsers(Shuffle([... allUsers]))}>sheffle</button>
        </div>
        <Search onChange={handleSearch}/>
        <div>
            {users.map((user, index) => (
                <div key={index}>{user}</div>
            ))}
        </div>

    </div>
  )
}

export default UseCallbackDemo