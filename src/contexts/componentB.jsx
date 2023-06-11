import { useContext } from "react";
import { SignInContexts } from "./componentA";

const ComponentB = () => {
  const SignIn = useContext(SignInContexts);

  const handleSignIn = () => {
    SignIn.setBuqu({ isAuthenticated: true, name: "Buquqa-Barnabishvili" });
  };

  const handleSignOut = () => {
    SignIn.setBuqu({ isAuthenticated: false, name: "" });
  };

  return (
    <div className="main-div">
      {SignIn.isAuthenticated ? (
        <div className="divout">
          <h1 className="h1">Hello {SignIn.name}</h1>
          <button className="btn" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      ) : (
        <div className="divin">
          <h1 className="h1">Hello Sign in </h1>
          <button className="btn" onClick={handleSignIn}>
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};
export default ComponentB;
