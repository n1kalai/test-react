import {configureStore} from '@reduxjs/toolkit';
import TodoReducer from '../Features/todo'


export const store= configureStore({
    reducer:{
        todo: TodoReducer,
       
    }
})