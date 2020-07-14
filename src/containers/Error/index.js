import React from 'react'
import ErrorImage from './image/markus-spiske-iar-afB0QQw-unsplash.jpg'
import classes from './Error.module.css'


export default function Error() {
    return (
        <div>
            <img className={classes.errorPage} src={ErrorImage} ></img>
            <div className={classes.errorSection}>
            <h1 className={classes.errorContent}>404 NOT FOUND !!!</h1>
            <button className={classes.btnHome}><a href="/signin">Home</a></button>
            </div>
            
        </div>
    )
}
