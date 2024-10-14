import React from 'react'

const Comp1 = ({movies}) => {
  return (
    <div>
      <h1>--------------SERIES-----------</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <p>{movie.title}</p>
          <p>{movie.ratings}</p>
        </div>
      ))}
    </div>
  );
}

export default Comp1
