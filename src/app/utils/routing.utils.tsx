import * as React from 'react';
import { Route, Redirect } from "react-router-dom";

import { Route as RouteType } from '../types/config.types';

export function createRoutes(routes: RouteType[]): React.ReactNode[]
{
	return routes.map(
		function(el: Route, index: number)
		{
			var rn: React.ReactNode;

			if(el.component)
			{
				rn = <Route key={index} exact={el.exact} path={el.path} component={el.component} />;
			}
			else if(el.redirect)
			{
				rn = <Redirect key={index} path={el.path} to={el.redirect} />;
			}
			else
			{
				throw "Error in route creation";
			}

			return rn;
		}
	);
}
