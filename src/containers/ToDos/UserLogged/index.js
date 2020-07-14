import React from 'react'
import classes from "./UserLogged.module.css"
import { logout } from "../../../helpers/auth"

export default function UserLogged(props) {
    return (
        <div>
            <div className={classes.userArea}>
            <p>Login in as: <strong>{props.user.email} </strong></p>
            <button className={classes.logOutButton} onClick={logout}>LOGOUT</button>
                </div>
        </div>
    )
}
