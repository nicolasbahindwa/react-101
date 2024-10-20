import React, { useState, useLayoutEffect, useRef } from "react";
 

const ResizableBox = () => {
  const [dimensions, setDimensions] = useState({ width: 100, height: 100 });
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      const { width, height } = boxRef.current.getBoundingClientRect();
      console.log(`Box dimensions: ${width}px x ${height}px`);

      // Simulate a layout adjustment
      if (width > 150) {
        boxRef.current.style.border = "5px solid red";
      } else {
        boxRef.current.style.border = "1px solid black";
      }
    }
  }, [dimensions]);

  const increaseSize = () => {
    setDimensions((prev) => ({
      width: prev.width + 20,
      height: prev.height + 20,
    }));
  };

  return (
    <div className="p-4">
      <div
        ref={boxRef}
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          backgroundColor: "lightblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        Resizable Box
      </div>
      <button onClick={increaseSize}>Increase Size</button>
    </div>
  );
};

export default ResizableBox;
