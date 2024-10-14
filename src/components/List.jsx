import React from "react";
import ComplexComponent01 from "./ComplexComponent01";

const List = () => {
  // Defining the header object with multiple fields
  const headerObject = {
    title: "Dynamic Title",
    subtitle: "This is a subtitle",
  };

  let objArr = [
    { name: "john", age: 12, gender: "male" },
    { name: "jane", age: 15, gender: "female" },
    { name: "julie", age: 20, gender: "female" },
  ];

  return (
    <div>
      <h2 className="font-bold text-lg mt-4">Class map, looping</h2>
      <ul>
        {objArr.map(({ name, age, gender }, index) => (
          <li key={index}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
          </li>
        ))}
      </ul>
      <br></br>

      <h2 className="font-bold text-lg">
        Children and header prop passing from parents to child
      </h2>
      {/* Passing an array of objects */}
      {/* Passing the header object */}
      <ComplexComponent01 header={headerObject}>
        <div className="child-1">
          <p>First child component with some content</p>
        </div>
        <div className="child-2">
          <p>Second child component with more content</p>
          <button>Click me</button>
        </div>
      </ComplexComponent01>
    </div>
  );
};

export default List;
