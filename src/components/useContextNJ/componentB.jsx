import React, { createContext, useState } from "react";
import ComponentA from "./componentA.jsx";

export const MyContext = createContext();

const ComponentB = () => {
  const [user, setUser] = useState({
    isAuthenticated: true,
    name: "Your first and last name",
  });

  const handleSignIn = () => {
    setUser({
      isAuthenticated: true,
      name: "Nika Jujushvili",
    });
  };

  const handleSignOut = () => {
    setUser({
      isAuthenticated: false,
      name: "",
    });
  };

  return (
    <div>
      <MyContext.Provider value={{ user, handleSignIn, handleSignOut }}>
        <ComponentA />
      </MyContext.Provider>
    </div>
  );
};

export default ComponentB;
