import { ComponentC } from "./ComponentC";

export const ComponentB = ({color}) => {
  return <div> ComponentB 
    <ComponentC color={color}/>
  </div>;
};
