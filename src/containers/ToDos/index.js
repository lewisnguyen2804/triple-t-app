import React, { Component } from 'react'
import classes from "./Todos.module.css"
import PlusButton from "../../components/PlusButton"
import TodoList from "./TodoList"

export default class ToDos extends Component {
    state = {
        todos: [
            {id: 0,title: "Test dodo", isDone: false}
        ]
    }

    toggleTodoStatus(selectedID) {
        // Find selected todo
        const selectedTodoIndex = this.state.todos.findIndex(todo => todo.id = selectedID)
        this.setState(this.state.todos[selectedTodoIndex].isDone = !this.state.todos[selectedTodoIndex].isDone)        
    }

    deleteTodo(selectedID) {
        this.setState(this.state.todos.filter(todo => todo.id !== selectedID))
    }

    addTodo(title) {
        const newTodo = {
            // newID = lasted todo's ID + 1
            id: this.state.todos[this.state.todos.length].id + 1,
            title : title,
            isDone: false
        }
        this.setState(this.state.todos.push(newTodo))
    }

    render() {
        return (
            <div className={classes.Todos}>
               <h1>All Todo</h1>
               <TodoList todos={this.state.todos} toggleTodoStatus={this.toggleTodoStatus} deleteTodo={this.deleteTodo}/>
               {/* Add Todo popup*/}
               <PlusButton/>
            </div>
        )
    }
}
