import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add, inputchange, remove } from "./features/todo/TodoList"

export const Todo = ()=>{

    const todo = useSelector((state)=>state.todo)
    console.log(todo)
    const dispatch = useDispatch()

    // const onchange = (e)=>dispatch({type:"afga",name:e.target.value})

    return(
        <div>
            <h1>TODO LIST</h1>
            <input
             type="text"
             onChange={(e) => dispatch(inputchange(e.target.value))}
             placeholder="add task..."
             value = {todo.val}
            >
            </input>
           
            <button onClick={()=>dispatch(add())}>ADD</button>

            <ul>
               
                    {todo.value.map((ele,index)=>{
                        return(
                            <li key={index} onClick={()=>dispatch(remove(index))}>{ele}</li>
                        )
                    })}
               
            </ul>
        </div>
    )
}