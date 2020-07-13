import React from 'react'
import classes from './Todo.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheckCircle,faTimesCircle} from "@fortawesome/free-solid-svg-icons"

export default function Todo(props) {
    const {title, isDone} = props
    return (
        <div className={classes.Todo}>
            <FontAwesomeIcon icon={faCheckCircle} className={classes.Icon, isDone ? classes.Delete : ""}/>
            <p>{title}</p>   
            <FontAwesomeIcon icon={faTimesCircle} className={classes.Icon, isDone ? classes.Delete : classes.Hide}/>
        </div>
    )
}
