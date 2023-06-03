import React from "react";
import {v4 as uuidv4} from "uuid"


const Form  = ({input, setInput, todo, setTodo}) => {

    const onInputChange = (event) => {
        setInput(event.target.value);
      
    };
const onFormSubmit = (event) => {
    event.preventDefault();
    if(input.trim() === "") {
        return;
    }
    // setTodo((prevState) => [...prevState, input]);
    setTodo([...todo, {id:uuidv4(), title:input, completed: false}])
    setInput("");
}

    return (
    <form onSubmit={onFormSubmit}>
        <input type="text" 
        placeholder="Enter a Todo..." 
        className="task-input" 
        value={input} 
        onChange={onInputChange}/>
        <button className="button-add" type="submit">Add</button>
    </form>
    );
};

export default Form; 