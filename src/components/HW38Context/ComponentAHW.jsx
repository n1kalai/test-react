import { ComponentBHW } from "./ComponentBHW";
import { createContext, useState } from "react";

export const LoginContext = createContext();

export const ComponentAHW = () => {

  const [auth, setAuth] = useState(true)
  const [name, setName] = useState("Nino")
   return (
    <div>
      <LoginContext.Provider value={{ isAuthenticated : auth, name, setAuth, setName }}>
        <ComponentBHW/>
      </LoginContext.Provider>
    </div>
  );
};
