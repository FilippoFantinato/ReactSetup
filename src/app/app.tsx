import * as React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import routes from './app.routing';
import { createRoutes } from './utils/routing.utils';

import './app.scss';

export interface Props
{

}

export interface State
{
	
}

class App extends React.Component<Props, State>
{
	constructor(props: Props)
	{
		super(props);
	}

	render()
	{
		return (
			<Router>
				<>
					<Switch>
						{ createRoutes(routes) }
					</Switch>
				</>
			</Router>
		);
	}
}

export default App;
