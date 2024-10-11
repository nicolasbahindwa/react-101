import React from 'react'
import List from './List'
import PropComponent from './PropComponent'
import Card from './Card'
const Main = () => {
  return (
    <div>
        Main content goes
        <List/>
        <hr />
        <br />
        <br />
        <br />

        <PropComponent
            name="John"
            age={30}
            isMaried={true}
            hobbies={['reading', 'painting']}
            handleClick={() => console.log('Button clicked')}
            img="https://images.unsplash.com/photo-1728379416068-ec55bd17ec6f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <Card>
            <h1>My card</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, commodi?</p>
        </Card>


    </div>
  )
}

export default Main