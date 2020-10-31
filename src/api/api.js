import * as axios from 'axios';

export const pizzasAPI = {

	getPizzas: async () => {
		return await axios.get('http://localhost:3001/pizzas');
	},
};