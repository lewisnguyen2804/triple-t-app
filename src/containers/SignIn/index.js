import React, { Component } from "react";
import classes from "./signIn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { signin } from "../../helpers/auth";

import {
	Link
} from "react-router-dom";

export default class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			email: '',
			password: '',
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		this.setState({ error: '' });
		try {
			await signin(this.state.email, this.state.password);
			console.log("Sign in successful!");
		} catch (error) {
			this.setState({ error: error.message });
			console.log("Sign in failed!");
		}
	}

	render() {
		return (
			<div className={classes.signIn_Form}>
				<h1 className={classes.signIn}>Sign in</h1>
				<form className={classes.info_Form} onSubmit={this.handleSubmit}>
					<label className={classes.emailName}>Your email:</label>
					<input className={classes.email_ID}
						onChange={this.handleChange} name="email" type="email" placeholder="Email..." />

					<label className={classes.emailPassword}>Your pasword:</label>
					<input className={classes.email_password}
						onChange={this.handleChange} name="password" type="password" placeholder="Password" />

					<Link className={classes.forgot_password} to="#forget">Forgot Password?</Link>
					<button className={classes.btn_signIn}>SIGN IN</button>
					<label className={classes.register}>or Sign in with:</label>

					<div className={classes.icon}>
						<div className={classes.fb}>
							<FontAwesomeIcon icon={faFacebookF} className={classes.icon_link} />
						</div>
						<div className={classes.twiter}>
							<FontAwesomeIcon icon={faTwitter} className={classes.icon_link} />
						</div>
						<div className={classes.gg}>
							<FontAwesomeIcon icon={faGooglePlusG} className={classes.icon_link} />
						</div>
					</div>

					<p className={classes.signUp}>Have not an account? <Link to="/signup">SignUp</Link></p>
				</form>
			</div>
		);
	}

}
