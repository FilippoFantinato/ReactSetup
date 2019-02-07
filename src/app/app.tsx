import * as React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import routes from './app.routing';
import { createRoutes } from './utils/routing.utils';
import { State, Props } from './types/app.types';

import './app.scss';

class App extends React.Component<State, Props>
{
	constructor(props: Props)
	{
		super(props);
	}

	render()
	{
		return (
			<Router>
				<Switch>
					{ createRoutes(routes) }
				</Switch>
			</Router>
		);
	}
}

export default App;
