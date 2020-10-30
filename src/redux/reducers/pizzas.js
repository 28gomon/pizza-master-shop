import { GET_PIZZAS } from "../types";

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

		default:
			return state;
	}
};