import { useState } from "react";

const Todolist = () => {
  
const [toDoList, settoDoList] = useState({
    todolist: "",
    todos: []});
   
const changeland = (event) => {
    
    const {id, value} = event.target;   
   settoDoList({
    ...toDoList,
    // todolist : value,
    [id] : value

   })
}

const submit = (event) => {
   // prevents page refresh
    event.preventDefault();
    settoDoList({
        todolist: "",
        todos: [...toDoList.todos, toDoList.todolist]

    })
}

const delethandler = (clickedelement) => {


    settoDoList({

      
        todos: toDoList.todos.filter((el) => el !== clickedelement)

    })

  
}

console.log(toDoList, "state")
  
    return(
       <div>
        <h1>Todo List</h1>

        <form onSubmit={submit}>

            {/* {/* ნებისმიერი ცვლილება keyboarის დროს          იგივე id  განსსხვავებული სახელები} */}

        <input onChange={changeland} value={toDoList.todolist} id="todolist"  type="text" /><br />
       
        <br />
        <button>ss</button>

        {toDoList.todos.map((el, index) => 


         <p key = {index} onClick={() => delethandler(el)} style={{color:"blue"}}>{index +1} {el}</p>

            )}
        
        </form>

        </div>

    )

}

export default Todolist;