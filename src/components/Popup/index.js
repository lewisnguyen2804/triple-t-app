import React from 'react'
import classes from "./Popup.module.css"

export default function Popup(props) {
    return (
        <div className={!props.popupStatus ? classes.Hide : classes.Popup}>
           {props.children} 
        </div>
    )
}
