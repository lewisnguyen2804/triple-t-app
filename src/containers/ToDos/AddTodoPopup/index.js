import React, { Component } from 'react'
import classes from "./AddTodoPopup.module.css"
import Popup from "../../../components/Popup"

export default class AddTodoPopup extends Component {
    state={
        userInput:""
    }

    changeUserInputHandler(event){
        this.setState({
            userInput: event.target.value
        })
    }

    submitInputHandler(){
        this.props.addTodo(this.state.userInput)
        this.setState({
            userInput:""
        })
    }
    render(props) {
        return (
            <Popup popupStatus={this.props.popupStatus}>
                <div className={classes.AddTodoPopup}>
                    <input className={classes.AddTodoField} value={this.state.userInput} type="text" onChange={(e)=>this.changeUserInputHandler(e)}/>
                    <button className={classes.Button} onClick={()=> this.submitInputHandler()}>Add</button>
                </div>
            </Popup>
        )
    }
}

