import React from "react";

const List = ({todo, setTodo}) => {

    const handleDelete = ({id}) => {
setTodo(todo.filter((todo) => todo.id !== id));
    };


    return(
    <ul>
       {todo.map((todo) => (
        <li onClick={() => handleDelete(todo)} 
        className="list-item" key={todo.id}>
            <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(event) => event.preventDefault()}
            />
    
        </li>
       ) )
}
    </ul>
    );
};

export default List; 