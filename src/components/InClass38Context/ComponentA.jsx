import { createContext, useState } from "react";
import { ComponentB } from "./ComponentB";

export const ColorContext = createContext();
export const ComponentA = () => {
  const [color, setColor] = useState("red");
  return (
    <div>
      ComponentA
      <ColorContext.Provider value={{ contextColor: color, setColor }}>
        <ComponentB/>
      </ColorContext.Provider>
    </div>
  );
};
