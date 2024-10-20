import React from 'react'

type PeopleProps = {
     names:{
        first:string,
        last:string
     }

}

const Peoples = (props:PeopleProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h1 key={name.first}>
            {name.first} {name.last}
          </h1>
        );
      })}

      
    </div>
  );
}

export default Peoples
