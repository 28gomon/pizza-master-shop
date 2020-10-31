import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { filters } from "./reducers/filters";
import { pizzas } from "./reducers/pizzas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
	filters,
	pizzas,
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware( reduxThunk )));

window.store = store;