import { ACTIONS } from "./todoR"

export default function Todo ({todo,dispatch}) {
    return(
        <div className="todos">
            <span style={{
                color: todo.complete?'#AAA':'#000',
                textDecoration: todo.complete?'line-through':null
                }}>
            {todo.name}
            </span>
            <button className="done" onClick={()=>dispatch({type:ACTIONS.TOGGLE_TODO,payload:{id:todo.id}})}>✅</button>
            <button className="del" onClick={()=>dispatch({type:ACTIONS.DELETE_TODO,payload:{id:todo.id}})}>delete</button>
        </div>
    )
        
}