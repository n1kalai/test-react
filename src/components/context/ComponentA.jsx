import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";


export const Context = createContext();

const ComponentA = () => {
  const [context, setContext] = useState({
    isAuthenticated: true,
    name: "Mariam Kordzaia",
  });

  
  return (
    <Context.Provider value={{ ...context, setContext }}>
      <div>
        <ComponentB />
      </div>
    </Context.Provider>
  );
};

export default ComponentA;

