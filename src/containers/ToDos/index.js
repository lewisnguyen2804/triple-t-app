import React, { Component } from 'react'
import classes from "./Todos.module.css"
import PlusButton from "../../components/PlusButton"
import Todo from "./Todo"

export default class ToDos extends Component {
    state = {
        todos: [
            {title: "Test dodo", isDone: false}
        ]
    }
    render() {
        const todoList = this.state.todos.map(todo => <Todo title={todo.title} isDone={todo.isDone}/>)
        return (
            <div className={classes.Todos}>
               {todoList}
               {/* Add Todo popup*/}
               <PlusButton/>
            </div>
        )
    }
}
