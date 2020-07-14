import React from 'react'
import Todo from "../Todo"
import classes from "./TodoList.module.css"

export default function TodoList(props) {
    const {toggleTodoStatus, deleteTodo} = props
    const todoList = props.todos.map(todo => 
    <Todo
        key={todo.id}
        id={todo.id}
        title={todo.title} 
        isDone={todo.isDone} 
        toggleTodoStatus={toggleTodoStatus} 
        deleteTodo={deleteTodo}/>)
    return (
        <div className={classes.TodoList}>
            {todoList}
        </div>
    )
}
