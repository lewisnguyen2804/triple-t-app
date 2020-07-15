import React from 'react'
import classes from "./UserLogged.module.css"
import { logout } from "../../../helpers/auth"

export default function UserLogged(props) {
    const [userName] = props.user.email.includes("@") ? props.user.email.split("@"): props.user.email
    return (
        <div className={classes.userArea}>
            <p>Wellcome <strong>{userName}</strong></p>
            <button className={classes.logOutButton} onClick={logout}>LOGOUT</button>
        </div>
    )
}
