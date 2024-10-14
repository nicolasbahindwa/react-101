import React from 'react'

const Weather = () => {

    const temp = 24

    if (temp < 15){
        return(
            <h1>It is cold outside</h1>
        )     
    }
    if (temp >= 1 && temp <= 25) {
      return <h1>It is nice outside</h1>;
    }

    return <div>It is hot outside </div>;
  

}

export default Weather
