// import React, { createContext, useState } from "react";

// // Create a context with a default value
// export const ThemeContext = createContext();

// // Provider component to wrap the app and provide the context
// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");
//   const [identity, setIdentity] = useState({
//     name: "nicolas",
//     age: 33,
//     gender: "male",
//   });

//   // Function to toggle between light and dark themes
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme, identity }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };



// src/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
    const [identity, setIdentity] = useState({
      name: "nicolas",
      age: 33,
      gender: "male",
    });

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, identity }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Export the context for use in other components
export default ThemeContext;
