import React, { Component } from 'react';
import classes from "./signUp.module.css";

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
                            <input type="checkbox" /> Agree to the <a href="#">Terms and Conditions</a>
                        </div>
                        
                        <div className={classes.buttonArea}>
                            <button type="submit" className={classes.signUpButton}>Sign Up</button>
                            <div>
                                Have an account? 
                                <a href="/signin"> Login</a>
                            </div>
                        </div>
                    </form>
                    </div>
                    <div className={classes.socialLoginArea}>
                        {/* <div className={classes.socialIcons}> */}
                            <a href="#">
                                <img className={classes.socialIcon} src={require('../../assets/facebook.png')} />
                            </a>
                            <a href="#">
                                <img className={classes.socialIcon} src={require('../../assets/twitter.png')} />
                            </a>
                            <a href="#">
                                <img className={classes.socialIcon} src={require('../../assets/youtube.png')} />
                            </a>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        )
    }
}
