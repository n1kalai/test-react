import {configureStore} from '@reduxjs/toolkit'
import  TodoList  from '../features/todo/TodoList'

export default configureStore({
    reducer:{
        todo:TodoList
    }
})