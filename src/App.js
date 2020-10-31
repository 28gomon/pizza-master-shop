import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './scss/app.scss';

import { Cart, Header, Home, } from './exp-components';
import { fetchPizzas } from "./redux/actions/pizzas";

const App = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPizzas());
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
							component={ Home }
						/>
						<Route
							exact
							path={ '/cart' }
							component={ Cart }
						/>
					</Switch>

				</div>

			</div>

		</div>
	);
}

export default App;
