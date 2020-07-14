import React, { Component } from 'react';
import './components/FontawesomeIcons';
import './App.css';
import classes from './App.module.css';
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import ToDos from "./containers/ToDos";
import Error from "./containers/Error"

import { auth } from "./services/firebase";

import {Switch} from "react-router-dom";
import {PublicRoute, PrivateRoute} from "./hoc"

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authenticated: false,
			loading: true
		};
	}

	componentDidMount() {
		auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({
					authenticated: true,
					loading: false
				});
			} else {
				this.setState({
					authenticated: false,
					loading: false
				});
			}
		});
	}

  
	render() {
    const loadingScreen = this.state.loading ? <div role="status"><span>Loading...</span></div> : null
	
		return (
      <div className={classes.App}>
        {loadingScreen}
				<Switch>
					<PublicRoute
						exact
						path="/"
						authenticated={this.state.authenticated}
						component={SignIn}
					/>
					<PrivateRoute
						path="/todos"
						authenticated={this.state.authenticated}
						component={ToDos}
					/>
					<PublicRoute
						path="/signup"
						authenticated={this.state.authenticated}
						component={SignUp}
					/>
					<PublicRoute
						path="/signin"
						authenticated={this.state.authenticated}
						component={SignIn}
					/>
					<PublicRoute 
						component={Error} />
				</Switch>
    </div>
    )
  };
}

export default App
