import { useReducer } from "react";


const todoReducer = (state, action) => {
    switch (action.type) {
        case "INPUT_CHANGE":
            return {
                ...state,
                todoValue: action.payload,
            };
        case "ADD_TODO":
            if (state.todoValue.trim() === "") {
                return state;
            }
            return {
                todoValue: "",
                todoItems: [...state.todoItems, action.payload],
            };
        case "DELETE_TODO":
            return {
                ...state,
                todoItems: state.todoItems.filter(
                    (_todoItem, index) => index !== action.payload
                ),
            };
        default:
            return state;
    }
    
}
const TodoRducer = () => {
    const [todo, dispatch] = useReducer(todoReducer, {
        todoValue: "",
        todoItems: [],
    });
    const handleInputChange = (e) => {
        dispatch({
            type: "INPUT_CHANGE",
            payload: e.target.value,
        });

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_TODO",
            payload: todo.todoValue,
        });
    }
    const handleDeleteTodo = (index) => {
        dispatch({
            type: "DELETE_TODO",
            payload: index,
        });
    }

    return (
        <div className="todo-container">
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} value={todo.todoValue} />
                <button>Add</button>
            </form>
            <ul>
                {todo.todoItems.map((item, index) => (
                    <li onClick={() => handleDeleteTodo(index)} key={item}>
                    	{item}
                    </li>
                ))}
            </ul>
        </div>
    );


                    
}
export default TodoRducer
