import React from 'react'
import classes from "./PlusButton.module.css"

export default function PlusButton(props) {
    return (
        <div className={classes.buttonWrapper} onClick={() => props.clickHandler()}>
            <div className={classes.PlusButton}></div>
        </div>
    )
}
