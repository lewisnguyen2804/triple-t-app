import React from 'react';
import {Route, Redirect} from "react-router-dom";

export const PublicRoute = ({ component: Component, authenticated, onSigninLoadingHandler, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				authenticated === false ? (
					<Component {...props} onSigninLoadingHandler={onSigninLoadingHandler} />
				) : (
						<Redirect to="/todos" />
					)
			}
		/>
	);
}
