import { useState } from "react";

const UseCustomHook = () => {
  const [coctails, Setcoctails] = useState(0);

  return { coctails, Setcoctails };
};

export default UseCustomHook;
