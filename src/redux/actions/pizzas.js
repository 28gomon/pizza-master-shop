import { GET_PIZZAS, SET_LOADING_PIZZAS } from "../types";
import { pizzasAPI } from "../../api/api";

const getPizzas = (items) => ({
	type: GET_PIZZAS,
	payload: items,
});

const setLoaded = (flag) => ({
	type: SET_LOADING_PIZZAS,
	flag,
});

export const fetchPizzas = (sortBy, category) => {
	return (dispatch) => {
		dispatch(setLoaded(false));
		pizzasAPI.getPizzas(sortBy, category).then(( { data }) => {
			dispatch(getPizzas(data));
		});
	}
};