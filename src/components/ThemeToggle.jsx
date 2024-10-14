// import React, { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";

// const ThemeToggle = () => {
//   // Destructure the `theme` and `toggleTheme` from the context
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <button onClick={toggleTheme}>
//       Toggle to {theme === "light" ? "dark" : "light"} theme
//     </button>
//   );
// };

// export default ThemeToggle;


 
import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  // Destructure the `theme` and `toggleTheme` from the context
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Toggle to {theme === "light" ? "dark" : "light"} theme
    </button>
  );
};

export default ThemeToggle;
