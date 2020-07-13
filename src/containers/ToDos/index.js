import React, { Component } from 'react'
import classes from "./Todos.module.css"
import PlusButton from "../../components/PlusButton"
import TodoList from "./TodoList"
import AddTodoPopup from "./AddTodoPopup"

export default class ToDos extends Component {
    state = {
        todos: [
            {id: 0,title: "Test dodo", isDone: false}
        ],
        popup: false
    }

    toggleTodoStatus(selectedID) {
        // Find selected todo
        const selectedTodoIndex = this.state.todos.findIndex(todo => todo.id = selectedID)
        const newTodos =[...this.state.todos] 
        newTodos[selectedTodoIndex].isDone = !newTodos[selectedTodoIndex].isDone

        this.setState({
            todos: newTodos
        })        
    }

    deleteTodo(selectedID) {
        const newTodos = [...this.state.todos]
        newTodos.filter(todo => todo.id !== selectedID)
        this.setState({
            todos: newTodos
        })
    }

    addTodo(title) {
        const newTodo = {
            // newID = lasted todo's ID + 1
            id: this.state.todos[this.state.todos.length - 1].id + 1,
            title : title,
            isDone: false
        }
        const newTodos = [...this.state.todos]
        newTodos.push(newTodo)
        this.setState({
            todos: newTodos
        })
        this.popupHandler()
    }

    popupHandler() {
        this.setState({
            popup: !this.state.popup
        })
    }


    render() {
        return (
            <div className={classes.Todos}>
               <h1>All Todo</h1>
               <TodoList todos={this.state.todos} toggleTodoStatus={this.toggleTodoStatus} deleteTodo={this.deleteTodo}/>
               <AddTodoPopup popupStatus={this.state.popup} addTodo={(title)=>this.addTodo(title)}/>
               <PlusButton clickHandler={()=> this.popupHandler()}/>
            </div>
        )
    }
}
