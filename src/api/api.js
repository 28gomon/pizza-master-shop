import * as axios from 'axios';

export const pizzasAPI = {

	getPizzas: async (sortBy, category) => {
		return await axios.get(`http://localhost:3001/pizzas?${ category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`);
	}
};