import React from 'react'
import Todo from "../Todo"
import classes from "./TodoList.module.css"

export default function TodoList(props) {
    const todoList = props.todos.map(todo => <Todo title={todo.title} isDone={todo.isDone}/>)
    return (
        <div className={classes.TodoList}>
            {todoList}
        </div>
    )
}
