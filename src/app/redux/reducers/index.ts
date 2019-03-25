import { combineReducers } from 'redux'

import * as counter from './counter.reducer';
import GState from '../../types/state';


const reducer = combineReducers<GState>({
	counter: counter.counterReducer
});

export const initialState: GState = {
	counter: counter.initialState
};

export default reducer;

