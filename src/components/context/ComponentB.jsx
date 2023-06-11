import React, { useContext } from "react";
import { Context }  from "./ComponentA";

const ComponentB = () => {
  const MyContext = useContext(Context);

  const handleLogIn = () => {
    MyContext.setContext({
      isAuthenticated: true,
      name: "Mariam Kordzaia",
    });
  };

  const handleSignOut = () => {
    MyContext.setContext({ isAuthenticated: false, 
    name: "" });
  };
  

  return (
    <div>
      {MyContext.isAuthenticated ? (
        <div>
          <p>Hello {MyContext.name}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <button onClick={handleLogIn}>Log In</button>
        </div>
      )}
    </div>
  );
};

export default ComponentB;


