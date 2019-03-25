import { Actions } from '../actions';
import { CounterAction, CounterState } from '../../types/components/counter.types';

export const initialState: CounterState = {
	color: 'pink'
};

export function counterReducer(state: CounterState = initialState, action: CounterAction): CounterState
{
	switch(action.type)
	{
		case Actions.Click:
			const color: string = action.payload.color;

			return {
				...state,
				color
			};

		default: 
			return state;
			break;
	}
}
