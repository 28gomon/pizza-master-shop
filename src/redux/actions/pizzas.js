import { GET_PIZZAS } from "../types";

export const getPizzas = (items) => ({
	type: GET_PIZZAS,
	payload: items,
});