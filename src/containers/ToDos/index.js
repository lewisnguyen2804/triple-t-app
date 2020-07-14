import React, { Component } from 'react'
import classes from "./Todos.module.css"
import PlusButton from "../../components/PlusButton"
import TodoList from "./TodoList"
import AddTodoPopup from "./AddTodoPopup"
import { auth } from "../../services/firebase"
import { logout } from "../../helpers/auth"

export default class ToDos extends Component {
    constructor(props) {
        super(props)
        this.toggleTodoStatus = this.toggleTodoStatus.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.popupHandler = this.popupHandler.bind(this)
    }
    state = {
        todos: [
            { id: 0, title: "Test dodo", isDone: false }
        ],
        popup: false,
        user: auth().currentUser,
    }

    toggleTodoStatus(selectedID) {
        // Find selected todo
        const selectedTodoIndex = this.state.todos.findIndex(todo => todo.id === selectedID)
        const newTodos = [...this.state.todos]
        newTodos[selectedTodoIndex].isDone = !newTodos[selectedTodoIndex].isDone

        this.setState({
            todos: newTodos
        })
    }

    deleteTodo(selectedID) {
        const newTodos = [...this.state.todos]
        this.setState({ todos: newTodos.filter(todo => todo.id !== selectedID) })
    }

    addTodo(title) {
        const newTodo = {
            // newID = lasted todo's ID + 1
            id: this.state.todos.length ? this.state.todos[this.state.todos.length - 1].id + 1 : 0,
            title: title,
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
                <TodoList todos={this.state.todos} toggleTodoStatus={this.toggleTodoStatus} deleteTodo={this.deleteTodo} />
                <AddTodoPopup popupStatus={this.state.popup} addTodo={this.addTodo} />
                <PlusButton clickHandler={this.popupHandler} />
                <div>
                    Login in as: <strong>{this.state.user.email}</strong> <br />
                    <button onClick={logout}>LOGOUT</button>
                </div>
            </div>
        )
    }
}
