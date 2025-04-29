
import React from "react";

import MainContent from "./Components/Component Reuse/Reuse";
import { UserCard } from "./Components/Task 1/UserCard";
import { Props } from "./Components/Props/Props";
// import User from "./Components/Props/PropTypes";
import Sard from "./Components/Props/ChildrenProp";
import ConditionalRender from "./Components/Conditional Rendering/ConditionalRender";
import Handle from "./Components/Event Handling/Handle";
function App() {
  return (
    <>
      {/* <h1>Hello React</h1>
      <p>Bhai Sikha de</p> */}


      {/* <MainContent /> */}
      {/* <UserCard name="Nagarjun" age={25} city="Nanded" />
      <UserCard name="Sumati" age={22} city="Kolhapur" />
      <UserCard name="Prashnat" age={25} city="Solapur" /> */}
      {/* <Props name="Nagarjun" age={25} city="Nanded" /> */}

      {/* Abhi hum isme Default props dekh rahe hai to kuch pass nai kiya */}
      {/* <Props /> */}

      {/* <User name= "Nagarjun" age = {25}/> */}

      {/* This is for Children Props */}
      {/* <Sard>
        <h2>Hello from Inside Card !</h2>
        <p>This is Nested Content</p>
      </Sard> */}

      {/* Conditional Rendering */}
      {/* <ConditionalRender isLoggedIn={true}/> */}
      <Handle />
    </>
  )
}

export default App;