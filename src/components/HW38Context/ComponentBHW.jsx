import { useContext } from "react";
import { LoginContext } from "./ComponentAHW";

export const ComponentBHW = () => {
  const Mycontext = useContext(LoginContext);
  const handleLogin = () => {
    Mycontext.setAuth(true);
    Mycontext.setName("Nino");
  };
  const handleSignOut = () => {
    Mycontext.setAuth(false);
    Mycontext.setName("");
  };
  return (
    <div>
      {Mycontext.isAuthenticated ? (
        <div>
          <p>Hello {Mycontext.name}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <button onClick={handleLogin}>Log in</button>
        </div>
      )}
    </div>
  );
};
