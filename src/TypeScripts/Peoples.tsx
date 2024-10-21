import React from 'react'
// import {PeopleProps} from './Person.types'
import {names} from './Person.types'
import Counter from './state/Counter'

// type PeopleProps = {
//      names:{
//         first:string,
//         last:string
//      }

// }

type PersonListProps = {
  names: names[]
}

const Peoples = (props:PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h1 key={name.first}>
            {name.first} {name.last}
          </h1>
        );
      })}

      <Counter/>
    </div>
  );
}

export default Peoples
