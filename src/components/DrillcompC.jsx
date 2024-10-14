import React from 'react'
import { useTheme } from "./ThemeContext";

const DrillcompC = () => {
  const { identity } = useTheme();
  return (
    <div>
      <div>
        <p>Name: {identity.name}</p>
        <p>Age: {identity.age}</p>
        <p>Gender: {identity.gender}</p>
      </div>
    </div>
  );
}

export default DrillcompC
