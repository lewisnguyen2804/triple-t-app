import React, { Component } from 'react';
import classes from "./signUp.module.css";

import {
    Link
} from "react-router-dom";

export default class SignUp extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.signUpContainer}>
                    <div className={classes.signUpArea}>
                    <h1 className={classes.titleText}>
                        Sign Up
                    </h1>
                    <form>
                        <input type="email" placeholder="Your email" className={classes.inputBox} />
                        <input type="password" placeholder="Your password" className={classes.inputBox}/>
                        <div className={classes.agreeTerms}>
                            <input type="checkbox" /> Agree to the <Link to="#terms">Terms and Conditions</Link>
                        </div>
                        
                        <div className={classes.buttonArea}>
                            <button type="submit" className={classes.signUpButton}>Sign Up</button>
                            <div>
                                Have an account? 
                                <Link to="/signin"> Sign in</Link>
                            </div>
                        </div>
                    </form>
                    </div>
                    <div className={classes.socialLoginArea}>
                        <Link to="#facebook-login">
                            <img className={classes.socialIcon} alt="facebook-login-icon" src={require('../../assets/facebook.png')} />
                        </Link>
                        <Link to="#twitter-login">
                            <img className={classes.socialIcon} alt="twitter-login-icon" src={require('../../assets/twitter.png')} />
                        </Link>
                        <Link to="#youtube-login">
                            <img className={classes.socialIcon} alt="youtube-login-icon" src={require('../../assets/youtube.png')} />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
