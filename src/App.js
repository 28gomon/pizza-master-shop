import React, { useEffect, useState } from 'react';
import { Route, Switch, } from 'react-router-dom';
import * as axios from 'axios';

import './scss/app.scss';

import { Cart, Header, Home, } from './exp-components';

const App = () => {

	const [ pizzas, setPizzas ] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/db.json')
			.then(( { data }) => setPizzas(data.pizzas));
	}, []);

	if (Object.keys(pizzas).length === 0 && pizzas.constructor === Object) {
		return <h1>Загрузка...</h1>
	}

	return (
		<div className={ 'app' }>

			<div className={ 'wrapper' }>

				<div className={ 'content' }>

					<Header/>

					<Switch>
						<Route
							exact
							path={ '/' }
							render={ () => <Home items={ pizzas }/> }
						/>
						<Route
							exact
							path={ '/cart' }
							render={ () => <Cart/> }
						/>
					</Switch>

				</div>

			</div>

		</div>
	);
}

export default App;
