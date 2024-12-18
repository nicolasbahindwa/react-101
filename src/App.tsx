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
import UseContextDemo from './Hooks-react/USECONTEXT/demo';
import UseRefDemo from './Hooks-react/USEREF/demo';
import UsReducerDemo from './Hooks-react/USEREDUCER/demo'
import UseImperativeHandle from './Hooks-react/USEIMPERATIVEHANDLE/demo';
import UseTransition from "./Hooks-react/USETRANSITION/Demo";
import FilterComponent from './Hooks-react/USEDEFFEREDVALUE/demo'
import ResizableBox from "./Hooks-react/USELAYOUTEFFECT/demo";
import Tooltip from './Hooks-react/USELAYOUTEFFECT/demo'
import DemoTypes from './TypeScripts/DemoTypes';
import MainStatusComp from './TypeScripts/advancedProps/Status.tsx';
import MainEventProps from './TypeScripts/EventProps/MainEventProps.tsx';
import Mainstyles from './TypeScripts/stylesProps/Mainstyles.tsx';
import MainPageContext from './TypeScripts/context/MainPageContext.tsx';
import { MutableRef } from './TypeScripts/ref/MutableRef.tsx';
import { Private } from './TypeScripts/auth/Private.tsx';
import { Profile } from './TypeScripts/auth/Profile.tsx';
import { List } from './TypeScripts/generics/List.tsx';
import RandomNumber from './TypeScripts/restriction/RandomNumber.tsx';
import { Toast } from './TypeScripts/templateliterals/toast.tsx';
import { CustomButton } from './TypeScripts/html/button.tsx';
import { Text } from './TypeScripts/polimorphic/Text.tsx';
import {store} from './app/store'
import { Provider } from 'react-redux';
import Counter from './redComponents/Counter.tsx'
import Allproducts from './redComponents/Allproducts.tsx';
import SingleProduct from './redComponents/SingleProduct.tsx';
import AddNewProduct from './redComponents/AddNewProduct.tsx';

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

const handleClick = () => {
  console.log("Button clicked!");
};
  return (
    <Provider store={store}>
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

          <h1 className="text-lg"> Hooks</h1>
          {/* <UseStatedemo />
        <UseEffectdemo />
        <UseMemodemo />
        <UseCallbackDemo />
        <UseContextDemo />
        <UseRefDemo />
        <UsReducerDemo /> */}
          {/* <UseImperativeHandle /> */}
          {/* <UseTransition /> */}
          {/* <FilterComponent/> */}
          {/* <Box/> */}
          {/* <ResizableBox/> */}
          {/* <Tooltip/> */}
          <DemoTypes />
          <MainStatusComp />
          <MainEventProps />
          <Mainstyles />
          <MainPageContext />
          <MutableRef />
          {/* passing a component as a prop */}
          <Private isLoggedIn={true} Component={Profile} />

          <List
            items={["batman", "superman", "wonder woman"]}
            onclick={(item) => console.log(item)}
          ></List>

          <List items={[1, 2, 3]} onclick={(item) => console.log(item)}></List>

          <List
            items={[
              {
                first: "nicolas",
                last: "bahindwa",
              },
              {
                first: "john",
                last: "doe",
              },
              {
                first: "sarah",
                last: "connor",
              },
            ]}
            onclick={(item) => console.log(item)}
          ></List>

          <RandomNumber value={10} isPositive />

          <h1 className="mt-8 ml-4 font-bold">
            Toast with position , props literals
          </h1>
          <Toast position="center-bottom" />

          <h1 className="mt-8 ml-4 font-bold">
            Custom buttons with variants and size
          </h1>

          <CustomButton
            className="ml-4 bg-black  text-white p-2"
            variant="primary"
            onClick={() => console.log("we are clicking")}
          >
            CLlickable
          </CustomButton>
          <h1 className="mt-8 ml-4 font-bold"> Polymorphic props</h1>
          <Text as="p" size="lg">
            Heading
          </Text>
          <Text as="h1" size="md">
            Paragraph
          </Text>
          <Text as="label" htmlFor="someId" size="sm">
            Small Text
          </Text>
          <Text as="span" size="sm" color="secondary">
            label
          </Text>

          <Counter/>
          <Allproducts/>
          <SingleProduct/>
          <AddNewProduct/>
        </div>

        
    </Provider>
  );
}

export default App