import { combineReducers, createStore } from 'redux';
import { filters } from "./reducers/filters";
import { pizzas } from "./reducers/pizzas";

const reducers = combineReducers({
	filters,
	pizzas,
});

export const store = createStore(reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;