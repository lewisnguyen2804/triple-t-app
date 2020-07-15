import React, { Component } from 'react'
import classes from "./Todos.module.css"
import PlusButton from "../../components/PlusButton"
import TodoList from "./TodoList"
import AddTodoPopup from "./AddTodoPopup"
import UserLogged from './UserLogged'
import { auth } from "../../services/firebase"
// import Axios from 'axios'
import { db } from "../../services/firebase"

export default class ToDos extends Component {
    constructor(props) {
        super(props)
        this.toggleTodoStatus = this.toggleTodoStatus.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.popupHandler = this.popupHandler.bind(this)
    }
    state = {
        todos: [],
        popup: false,
        user: auth().currentUser,
    }

    toggleTodoStatus(selectedID) {
        // Find selected todo
        const selectedTodoIndex = this.state.todos.findIndex(todo => todo.id === selectedID)
        const newTodos = [...this.state.todos]

        // update on firebase
        db.ref("todos/" + this.state.user.uid + '/' + selectedID).update({'isDone':  !newTodos[selectedTodoIndex].isDone});      
     }

    deleteTodo(selectedID) {
        // dalete on firebase
        db.ref("todos/" + this.state.user.uid).child(selectedID).remove();
    }

    addTodo(title) {
        const newTodo = {
            // newID = lasted todo's ID + 1
            // id: this.state.todos.length ? this.state.todos[this.state.todos.length - 1].id + 1 : 0,
            id: new Date().getTime(),
            from: this.state.user.email,
            title: title,
            isDone: false
        }
        // push to firebase
        let newTodoFirebase = {};
        newTodoFirebase[newTodo.id] = newTodo;
        db.ref("todos/" + this.state.user.uid).update(newTodoFirebase);

        this.popupHandler()
    }

    popupHandler() {
        this.setState({
            popup: !this.state.popup
        })
    }

    componentDidMount = () => {
        try {
            db.ref("todos/" + this.state.user.uid).on("value", todo => {
                let todos = [];
                todo.forEach((snap) => {
                    if (snap.val().from === this.state.user.email) {
                        todos.push(snap.val());
                    }
                });
                this.setState({ todos });
            });
        } catch (error) {
            // error
        }
    }

    render() {
        return (
            <div className={classes.Todos}>
                <UserLogged user={this.state.user} />
                <TodoList todos={this.state.todos} toggleTodoStatus={this.toggleTodoStatus} deleteTodo={this.deleteTodo} user={this.state.user} />
                <AddTodoPopup popupStatus={this.state.popup} addTodo={this.addTodo} />
                <PlusButton clickHandler={this.popupHandler} />
            </div>
        )
    }
}
