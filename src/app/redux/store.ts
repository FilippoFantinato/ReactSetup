import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';

import reducer, { initialState } from './reducers';
import Action from '../types/actions';
import GState from '../types/state';

const store = createStore<GState, Action, any, any>(reducer, initialState, applyMiddleware(logger));

export default store;
