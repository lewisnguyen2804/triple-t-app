import React, { Component } from 'react';
import './components/FontawesomeIcons';
import './App.css';
import classes from './App.module.css';
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import ToDos from "./containers/ToDos";
import Error from "./containers/Error"

import { auth } from "./services/firebase";

import { Switch } from "react-router-dom";
import { PublicRoute, PrivateRoute } from "./hoc";
import { Route } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authenticated: false,
			loading: true
		};
		this.loaderHandler = this.loaderHandler.bind(this)
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

	loaderHandler() {
		this.setState({
			loading: true
		})
	}

	render() {
		const loadingScreen = this.state.loading ? <div className={classes.LoadingWrapper} role="status"><div className={classes.Loading}></div></div> : null
		return (
			<div className={classes.App}>
				{loadingScreen}
				<Switch>
					<PublicRoute
						exact
						path="/"
						authenticated={this.state.authenticated}
						loaderHandler={this.loaderHandler}
						component={SignIn}
					/>
					<PrivateRoute
						exact
						path="/todos"
						authenticated={this.state.authenticated}
						component={ToDos}
					/>
					<PublicRoute
						exact
						path="/signup"
						authenticated={this.state.authenticated}
						loaderHandler={this.loaderHandler}
						component={SignUp}
					/>
					<PublicRoute
						exact
						path="/signin"
						authenticated={this.state.authenticated}
						loaderHandler={this.loaderHandler}
						component={SignIn}
					/>
					<Route
						component={Error} />
				</Switch>
			</div>
		)
	};
}

export default App
