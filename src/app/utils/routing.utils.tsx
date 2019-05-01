import * as React from 'react';
import { Route, Redirect } from "react-router-dom";

import { Route as RouteType } from '../types/system/config.types';

export function createRoutes(routes: RouteType[]): React.ReactNode[]
{
	return routes.map(
		function(el: Route, index: number)
		{
			var route: React.ReactNode;

			if(typeof el.component)
			{
				let lazyLoadingMode: boolean = typeof el.component == 'string';
				let component: string | React.ReactNode;
				let props: any = el.props;

				if(lazyLoadingMode)
				{
					component = AsyncComponent(el.component, el.fallback)
				}
				else
				{
					component = () => {
						return(
							<el.component {...props} />
						);
					};
				}
				route = <Route key={index} 
							exact={el.exact}
							path={el.path}
							component={component} />;
			}
			else if(el.redirect)
			{
				route = <Redirect key={index}
								path={el.path}
								to={el.redirect} />;
			}
			else
			{
				throw "Error in route creation";
			}

			return route;
		}
	);
}

export function AsyncComponent(component: string, fallback: React.ReactNode = <div></div>)
{
	var LazyComponent = React.lazy(() => import(component /* webpackMode: "lazy" */));

	return (
		<React.Suspense fallback={fallback}>
			<LazyComponent />
		</React.Suspense>
	);
}
