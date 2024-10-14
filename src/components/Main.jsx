import React, {useState, useEffect}from "react";
import List from "./List";
import PropComponent from "./PropComponent";
import Card from "./Card";
import ConditionRendering from "./ConditionRendering";
import Weather from "./Weather";
import UserStatus from "./UserStatus";
import Styling from "./Styling";
import Icons from "./Icons";
import { Button, IconButton, LoadingButton } from "./TailWButtons";
import {Mail} from 'lucide-react'
import CssButton from "./CssButtons";
import USESTATE from "./../hooks/USESTATE"
import USEffectComp from "../hooks/USEffectComp";
// import ComplexPORTAL from "./ComplexPORTAL";
import CallModelPortal from "./CallModelPortal";
import DataFetchingComponent from './USEEffectComponent'
import DrillcompC from "./DrillcompC";
import { useTheme } from "./ThemeContext";
import Counter from './../hooks/USEREDUCER'
import UseRefExample from './../hooks/USEREF'
import {useFetch} from './../hooks/useFetch'
import UserRegistrationForm from "./FromValidation";

const Main = () => {
   const { theme } = useTheme();
   const {data, loading, error} = useFetch(
     "https://jsonplaceholder.typicode.com/posts"
   );
  //  if (loading) return <div className="text-center py-4">Loading posts...</div>;
  //  if (error)
  //    return <div className="text-center py-4 text-red-500">Error: {error}</div>;
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: theme === "light" ? "#fff" : "#444",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      Main content goes
      <List />
      <hr />
      <br />
      <br />
      <br />
      <PropComponent
        name="John"
        age={30}
        isMaried={true}
        hobbies={["reading", "painting"]}
        handleClick={() => console.log("Button clicked")}
        img="https://images.unsplash.com/photo-1728379416068-ec55bd17ec6f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card>
        <h1>My card</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          commodi?
        </p>
      </Card>
      <ConditionRendering />
      <h1 className="text-lg font-bold mt-4 mb-4">--Temperature---</h1>
      <Weather />
      <UserStatus isAdmin={true} isloggIn={true} />
      <h1 className="text-xl font-bold mt-4 mb-4">Stying</h1>
      <Styling></Styling>
      <h1 className="text-xl font-bold mt-4 mb-4">Icons</h1>
      <Icons />
      <h1>Buttons with variants and sizes</h1>
      <div>
        <h1 className="text-xl font-bold mt-4 mb-4">Welcome to my app!</h1>
        <Button variant="default" size="lg">
          Click me
        </Button>
        <Button variant="outline" size="sm">
          Small button
        </Button>
        <Button variant="default" size="default">
          Click me
        </Button>
        <IconButton variant="outline" size="sm" icon={Mail} />
        <LoadingButton loading={true}>Loading...</LoadingButton>
        <Button
          variant="destructive"
          size="lg"
          className={"bg-gray-300 border border-blue-500"}
        >
          Delete
        </Button>
      </div>
      <h1 className="text-xl font-bold mt-4 mb-4">With css only</h1>
      <CssButton />
      <h1 className="text-xl font-bold mt-4 mb-4">HOOKS</h1>
      <h2>Use state</h2>
      <USESTATE />
      <h1 className="text-lg font-bold mt-4 ">useEFFECT</h1>
      <USEffectComp />
      <h1 className="text-lg font-bold mt-4 ">Portal</h1>
      {/* <ComplexPORTAL /> */}
      <h1 className="text-lg font-bold mt-4 ">Another Model Portal</h1>
      <CallModelPortal />
      <h1 className="text-lg font-bold mt-4 ">Another USE EFFECT EXAMPLE</h1>
      <DataFetchingComponent />
      <DrillcompC />
      <h1 className="text-lg font-bold mt-4 ">Another USEREDUCER EXAMPLE</h1>
      <Counter />
      <h1 className="text-lg font-bold mt-4 ">Another USEEFFET EXAMPLE</h1>
      <UseRefExample />
      <h1 className="text-lg font-bold mt-4 ">
        Another Custom hook to fech data
      </h1>
      <h1 className="text-2xl font-bold mb-4">Posts from JSONPlaceholder</h1>
      <ul className="space-y-4">
        {data &&
          data.slice(0, 10).map((post) => (
            <li key={post.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
      </ul>
      <UserRegistrationForm />
    </div>
  );
};

export default Main;
