import * as React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './Views/Store/Store'
import App from './app/app';

render(
	// <Provider store={store}>
		<App/>,
	// </Provider>, 
	document.getElementById('root')
);
