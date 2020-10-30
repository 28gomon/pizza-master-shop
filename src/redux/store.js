import { combineReducers, createStore } from 'redux';
import { filters } from "./reducers/filters";

const reducers = combineReducers({
	filters,
});

export const store = createStore(reducers);

window.store = store;