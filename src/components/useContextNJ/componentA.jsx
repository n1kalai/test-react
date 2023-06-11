import React, { useContext } from "react";
import { MyContext } from "./componentB.jsx";

const ComponentA = () => {
  const { user, handleSignIn, handleSignOut } = useContext(MyContext);

  return (
    <div>
      {user.isAuthenticated ? (
        <div>
          <h1>Hello {user.name}</h1>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <p>Please sign in</p>
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      )}
    </div>
  );
};

export default ComponentA;
