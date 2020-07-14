import React, { Component } from 'react'
import classes from "./AddTodoPopup.module.css"
import Popup from "../../../components/Popup"

export default class AddTodoPopup extends Component {
    state={
        userInput:"",
        errMsg:""
    }

    changeUserInputHandler(event){
        this.setState({
            userInput: event.target.value
        })
    }

    submitInputHandler(){
        if (this.validationHandler()) {
            this.props.addTodo(this.state.userInput)
            this.setState({
                userInput:""
            })
        }
    }

    validationHandler(){
        if (this.state.userInput.length === 0) {
            this.setState({
                errMsg: "Invalid Input!"
            })
            return false
        }
        this.setState({
            errMsg: ""
        })
        return true
    }

    render() {
        return (
            <Popup popupStatus={this.props.popupStatus}>
                <div className={classes.AddTodoPopup}>
                    <span className={classes.ErrorMsg}>{this.state.errMsg}</span>
                    <input className={classes.AddTodoField} value={this.state.userInput} type="text" onChange={(e)=>this.changeUserInputHandler(e)}/>
                    <button className={classes.Button} onClick={()=> this.submitInputHandler()}>Add</button>
                </div>
            </Popup>
        )
    }
}

