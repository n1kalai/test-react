// კონტექსტში შეინახეთ ობიექტი { isAuthenticated : true, name: "შენი სახელი და გვარი" } .
import ComponentB from "./componentB";
import { createContext, useState } from "react";

export const SignInContexts = createContext();

const ComponentA = () => {
  const [buqu, setBuqu] = useState({
    isAuthenticated: true,
    name: "Buquqa-Barnabishvili",
  });
  return (
    <div>
      <SignInContexts.Provider value={{ ...buqu, setBuqu }}>
        <ComponentB />
      </SignInContexts.Provider>
    </div>
  );
};
export default ComponentA;
