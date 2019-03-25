import { GeneralAction } from '../actions';

export interface CounterState
{
	color: string;
}

interface ClickPayload
{
	color: string
}

export type ClickAction = GeneralAction<ClickPayload>;

export type CounterAction = ClickAction;
