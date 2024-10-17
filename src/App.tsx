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



// src/App.js  using javascript 
// import React from 'react';
// import { ThemeProvider } from './components/ThemeContext';
// import Header from './components/Header';
// import Main from './components/Main';
// import ThemeToggle from './components/ThemeToggle';

// const App = () => {
//   return (
//     <ThemeProvider>
//       <Header />
//       <ThemeToggle />
//       <Main />
//     </ThemeProvider>
//   );
// };

// export default App;


//using typescript
import React from 'react'
import Users from './components/Users'
import Childrens from './components/Childrens';
import UserInfo from './components/UserInfo';
import {Info, AdminfoList} from './types'
import AdminInfo from './components/AdminInfo';
import Counters from './components/Counters';
import UserProfile from './components/UserProfile';
import Form from './components/Form';
import CounterContext from './components/CounterContext';
import CounterReducer from './components/CounterReducer';
import USEFFECTcomp from './components/USEFFECTcomp';

// hooks 

import UseStatedemo from './Hooks-react/USESTATE/demo';
import UseEffectdemo from './Hooks-react/USEEFFECT/demo';
import UseMemodemo from './Hooks-react/USEMEMO/demo';
import UseCallbackDemo from './Hooks-react/USECALLBACK/demo';

 interface User{
  name:string;
  age:number;
  isStudent:boolean;
 }

const App = () => {

  const user:Info = {
    id:1,
    username: "johndoe",
    email: "johndoe@example.com",
}

const admin: AdminfoList = {
    id:1,
    username: "johndoe",
    email: "johndoe@example.com",
    role:'admin',
    lastLogin: new Date()
}
  return (
    <div>
      {/* <Childrens>
        <h1>Hello world children of God</h1>
      </Childrens>
      <Users name="nicolas" age={34} isStudent={false} />  
      <h1>user info</h1>
      <UserInfo user={user}/>
      <h1>admin info</h1>
      <AdminInfo admin={admin}/>  

      <Counters /> 

      <h3>User profile</h3>
      <UserProfile/>  

      <h3>Form</h3>
      <Form /> 

      <h1>another counter with context</h1>
      <CounterContext/>

      <h1>Counter with reducer</h1>
      <CounterReducer/>

      <h1>Use effect with types</h1>
      <USEFFECTcomp/> */}


      <h1 className='text-lg'> Hooks</h1>
      <UseStatedemo/>
      <UseEffectdemo/>
      <UseMemodemo/>
      <UseCallbackDemo/>

    </div>
  )
}

export default App