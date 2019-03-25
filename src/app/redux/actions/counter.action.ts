import { Actions } from './index';
import { ClickAction } from '../../types/components/counter.types';

export function clickCounter(color: string): ClickAction
{
	return {
		type: Actions.Click,
		payload: {
			color
		}
	};
}
