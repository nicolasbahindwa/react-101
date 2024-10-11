// import React from 'react'

// const PropComponent = (props) => {
//   return (
//     <div>
//         <section>
//             <img src={props.img} alt={props.name} width={200} />
//             <h2>{props.name}</h2>
//             <p>{props.age}</p>
//             <p>{props.isMaried}</p>
//             <p>{props.hobbies}</p>
//         </section>
//     </div>
//   )
// }

// export default PropComponent


// destructuring 

import React from 'react'

const PropComponent = ({img, name, age, isMaried, hobbies}) => {
  return (
    <div>
        <section>
            <img src={img} alt={name} width={200} />
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{isMaried}</p>
            <p>{hobbies}</p>
        </section>
    </div>
  )
}

export default PropComponent