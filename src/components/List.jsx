import React from 'react';

const List = () => {
    let objArr = [
        {
            name: 'john',
            age: 12,
            gender: 'male'
        },
        {
            name: 'jane',
            age: 15,
            gender: 'female'
        },
        {
            name: 'julie',
            age: 20,
            gender: 'female'
        }
    ];
    return (
        <div>
            <ul>
                {
                    // destructuring the object
                    objArr.map(({name, age, gender}, index) => (
                        <li key={index}>
                            <p>Name: {name}</p>
                            <p>Age: {age}</p>
                            <p>Gender: {gender}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default List;
