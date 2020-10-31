import { GET_PIZZAS } from "../types";
import { pizzasAPI } from "../../api/api";

export const getPizzas = (items) => ({
	type: GET_PIZZAS,
	payload: items,
});

export const fetchPizzas = () => {
	return (dispatch) => {
		pizzasAPI.getPizzas().then(( { data }) => {
			dispatch(getPizzas(data));
		});
	}
};