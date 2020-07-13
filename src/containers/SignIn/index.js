import React from "react";
import classes from "./signIn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";


export default function SignIn() {
  return (
    <div className={classes.signIn_Form}>

      <h1 className={classes.signIn}>Sign in</h1>

      <form className={classes.info_Form}>
        <label className={classes.emailName}>Your email:</label>
        <input className={classes.email_ID} type="email" placeholder="Email..."/>

        <label className={classes.emailPassword}>Your pasword:</label>
        <input className={classes.email_password} type="password" placeholder="Password"/>

        <a className={classes.forgot_password} href="#forget">Forgot Password?</a>
        <button className={classes.btn_signIn}>SIGN IN</button>
        <label className={classes.register}>or Sign in with:</label>

        <div className={classes.icon}>
            <div className={classes.fb}>
            <FontAwesomeIcon icon={faFacebookF} className={classes.icon_link}/>
            </div>
            <div className={classes.twiter}>
            <FontAwesomeIcon icon={faTwitter} className={classes.icon_link}/>
            </div>
            <div className={classes.gg}>
            <FontAwesomeIcon icon={faGooglePlusG} className={classes.icon_link}/>
            </div>
        </div>
       
      </form>
    </div>
  );
}
