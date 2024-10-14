import React from "react";

const ComplexComponent01 = ({ children, header }) => {
  // Assuming header is an object with title and subtitle
  return (
    <div className="complex-component">
      {/* Accessing the object's properties */}
      <h1>{header.title}</h1>
      <h2>{header.subtitle}</h2>
      <div className="children-content">{children}</div>
    </div>
  );
};

export default ComplexComponent01;
