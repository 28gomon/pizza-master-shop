import { GET_PIZZAS, SET_LOADING_PIZZAS } from "../types";

const initialState = {
	items: [],
	isLoaded: false,
};

export const pizzas = (state = initialState, action) => {
	switch ( action.type ) {

		case GET_PIZZAS:
			return {
				...state, items: action.payload, isLoaded: true,
			};

		case SET_LOADING_PIZZAS:
			return {
				...state,
				isLoaded: action.flag
			};

		default:
			return state;
	}
};