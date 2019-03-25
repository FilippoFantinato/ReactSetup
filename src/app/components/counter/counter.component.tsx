import * as React from 'react';
import { connect } from 'react-redux';

import GState from '../../types/state';

import { CounterState } from '../../types/components/counter.types';
import { clickCounter } from '../../redux/actions/counter.action';

interface Props
{
	click: (string) => void,
	counter: CounterState
}

interface State
{
	color: string
}

class Counter extends React.Component<Props, State>
{
	constructor(props: Props)
	{
		super(props);
	}

	handleClick = () => {
		this.props.click(Math.random() < 0.5 ? 'black' : 'red');
	}

	render()
	{
		const { color } = this.props.counter;

		return (
			<div onClick={this.handleClick} style={{ color }}>
				Counter
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		click: (color: string): void => {
			dispatch(clickCounter(color));
		}
	}
};

const mapStateToProps = (state: GState) => ({
	counter: state.counter
});


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
