import React, { Component } from 'react';
import './components/FontawesomeIcons';
import './App.css';
import classes from './App.module.css';
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import ToDos from "./containers/ToDos";

import { auth } from "./services/firebase";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";

function PrivateRoute({ component: Component, authenticated, ...rest }) {
	return (
		<Route
			{...rest}
			render={props =>
				authenticated === true ? (
					<Component {...props} />
				) : (
						<Redirect
							to={{ pathname: "/signin", state: { from: props.location } }}
						/>
					)
			}
		/>
	);
}


function PublicRoute({ component: Component, authenticated, ...rest }) {
	return (
		<Route
			{...rest}
			render={props =>
				authenticated === false ? (
					<Component {...props} />
				) : (
						<Redirect to="/todos" />
					)
			}
		/>
	);
}

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
		return this.state.loading === true ? (
			<div role="status">
				<span>Loading...</span>
			</div>
		) : (
				<Router>
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
					</Switch>
				</Router>
			);
	}
}

export default App;
