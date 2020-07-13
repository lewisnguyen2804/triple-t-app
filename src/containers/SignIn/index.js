import React from "react";
import classes from "./signIn.module.css";


export default function SignIn() {
  return (
    <div className={classes.signIn_Form}>

      <h1 className={classes.signIn}>Sign in</h1>

      <form className={classes.info_Form}>
        <label>Your email:</label>
        <input className={classes.email_ID} type="email" placeholder="Email..."/>

        <label>Your pasword:</label>
        <input className={classes.email_password} type="password" placeholder="Password"/>

        <a className={classes.forgot_password} href="#forget">Forgot Password?</a>
        <button className={classes.btn_signIn}>SIGN IN</button>
        <label>or Sign in with:</label>

      </form>
    </div>
  );
}
