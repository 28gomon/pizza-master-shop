import React, { useEffect, useState } from 'react';
import './scss/app.scss';
import { Route, Switch } from 'react-router-dom';

import { Cart, Header, Home, } from './exp-components';

const App = () => {

	const [ pizzas, setPizzas ] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/db.json')
			.then(( response ) => response.json())
			.then(( response ) => setPizzas(response.pizzas));
	}, []);

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
						<Route exact path={ '/cart' } render={ () => <Cart/> }/>
					</Switch>

				</div>

			</div>

		</div>
	);
}

export default App;
