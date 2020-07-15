import React, { Component } from 'react';
import classes from "./signUp.module.css";
import { signup } from "../../helpers/auth";

import { Link } from "react-router-dom";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: '',
            password: '',
            show: false,
            termsAgreeCheck: false
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async (event) => {
        this.setState({ show: false });
        event.preventDefault();
        this.setState({ error: '' });
        if (this.state.email === '' || this.state.password === '') {
            this.setState({ error: 'Please fill the inputs' });
            this.setState({ show: true });
        }
        else if (this.state.termsAgreeCheck) {
            this.props.loaderHandler();
            try {
                await signup(this.state.email, this.state.password);
            } catch (error) {
                this.setState({ error: error.message });
                this.setState({ show: true });
            }
        }
        else {
            this.setState({ error: 'Please agree to the Terms and Conditions' });
            this.setState({ show: true });
        }
    }

    onTermsAgreeChange = (e) => {
        this.setState({ termsAgreeCheck: e.target.checked })
    }

    render() {
        return (
            <div className={classes.container}>
                <div className={classes.signUpContainer}>
                    <div className={classes.signUpArea}>
                        <h1 className={classes.titleText}>
                            Sign Up
                        </h1>

                        {this.state.show && <div className={classes.notificationArea}>
                            {this.state.error}
                        </div>}

                        <form onSubmit={this.handleSubmit}>
                            <input type="email" placeholder="Your email"
                                onChange={this.handleChange}
                                name="email"
                                className={classes.inputBox} />
                            <input type="password" placeholder="Your password"
                                onChange={this.handleChange}
                                name="password"
                                className={classes.inputBox} />
                            <div className={classes.agreeTerms}>
                                <input type="checkbox" onChange={this.onTermsAgreeChange} /> Agree to the <Link to="#terms">Terms and Conditions</Link>
                            </div>

                            <div className={classes.buttonArea}>
                                <button type="submit"
                                    className={classes.signUpButton}>Sign Up</button>
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
