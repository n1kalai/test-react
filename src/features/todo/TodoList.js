import { createSlice } from "@reduxjs/toolkit";


const TodoList = createSlice({
    name:"todo",
    
    initialState:{
        val:'',
        value:[]
    },

    reducers:{
        inputchange(state,action){
            // event.preventDefault();
            state.val = action.payload;
        },
        add(state,action){
           
            state.value.push(state.val);
            state.val=""
            
           
        },
        remove(state,action){
             state.value=state.value.filter((ele,index)=>index!==action.payload)
            // console.log(action)
           

        }
    }
})


export const {add,remove,inputchange} = TodoList.actions

export default TodoList.reducer