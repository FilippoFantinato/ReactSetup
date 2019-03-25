import * as React from 'react';

import { Props, State } from '../../types/pages/home.types';

import Counter from '../../components/counter/counter.component';

class HomePage extends React.Component<Props, State>
{
	constructor(props: Props)
	{
		super(props);
	}

	render()
	{
		return (
			<div>
				<h1>Hello World</h1>
				<Counter />
			</div>
		)
	}
}

export default HomePage;