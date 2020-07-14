import React from 'react';
import {Route, Redirect} from "react-router-dom";

export const PublicRoute = ({ component: Component, authenticated, loaderHandler, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				authenticated === false ? (
					<Component {...props} loaderHandler={loaderHandler} />
				) : (
						<Redirect to="/todos" />
					)
			}
		/>
	);
}
