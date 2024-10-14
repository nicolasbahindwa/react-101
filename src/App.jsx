// import React, { useContext, useState } from "react";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import { ThemeProvider, ThemeContext } from "./components/ThemeContext";
// import ThemeToggle from "./components/ThemeToggle";

// const App = () => {
  
//   return (
//     <ThemeProvider  >
//       <AppContent />
//     </ThemeProvider>
//   );
// };

// const AppContent = () => {
//   const { theme } = useContext(ThemeContext);
  

//   return (
//     <div
//       style={{
//         background: theme === "light" ? "#fff" : "#333",
//         color: theme === "light" ? "#000" : "#fff",
//         minHeight: "100vh",
//       }}
//     >
//       <Header />
//       <ThemeToggle />
//       <Main />
//       <Footer />
//     </div>
//   );
// };

// export default App;



// src/App.js
import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Main from './components/Main';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <ThemeToggle />
      <Main />
    </ThemeProvider>
  );
};

export default App;