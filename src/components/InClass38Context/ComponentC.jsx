import { ComponentD } from "./ComponentD";

export const ComponentC = ({color}) => {
    return <div> ComponentC 
        <ComponentD color={color}/>
    </div>;
  };
  