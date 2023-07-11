import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';
import { add,deleteItem,handleChecked,inputValue } from "../Features/todo";


const TodoContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  height:85vh;
  margin-top:2rem;
  
  h1{
    text-align:center;
    margin-bottom:1rem;
    color:bisque;
  }

form{
    display: flex;
    margin-bottom: 20px;  
}


input[type="text"]{
    width:100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
}


  button{
    padding: 8px 12px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin-left: 10px;
    cursor: pointer;
    font-size: 14px;
  }


  ul{
    list-style: none;
    padding: 0;
    display flex;
    flex-direction:column;
  }

  li{
    display flex;
    justify-content: space-around;
    width: 100%;
    align-items:center;
    font-size:1.5rem;
    color:aliceblue;
  }


  input[type="checkbox"] {
    margin-right: 10px;
    height: 30px;
    width: 30px;
  }


  span {
    flex-grow: 1;
  }

svg{
    color: #4caf50;
    cursor: pointer;
    &:hover{
    color:red;
    }
}


`;

export const Todo = ()=>{

    const { value, todos } = useSelector((state) => state.todo);
    const dispatch = useDispatch();

	const handleSubmit = (event) => {
        event.preventDefault();
        if (value.trim() !== '') {
          dispatch(add());
        }
      };
    
      const handleInputChange = (e) => {
        dispatch(inputValue(e.target.value));
      };
    
      const handleDeleteTodo = (index) => {
        dispatch(deleteItem(index));
      };
    
      const toggleChecked = (index) => {
        dispatch(handleChecked(index));
      };

    return(
        <>
          <TodoContainer >
            <h1>My Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleInputChange} value={value} />
          <button>Add</button>
        </form>
        <ul>
          {todos.map((item, index) => (
            <li key={index}>
              <input
                onChange={() => toggleChecked(index)}
                type="checkbox"
                checked={item.checked}
              />
              <span  style={item.checked ? { textDecoration: 'line-through' } : null}
              checked={item.checked}>{item.text}</span>
              
              <FaTrashAlt onClick={() => handleDeleteTodo(index)} />
            </li>
          ))}
        </ul>
      </TodoContainer>
        </>
    
    )

          }