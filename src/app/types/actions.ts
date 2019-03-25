import { CounterAction } from './components/counter.types';

export interface GeneralAction<T>
{
	type: string,
	payload: T
}

type Action = CounterAction;

export default Action;
