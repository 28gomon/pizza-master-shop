import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './scss/app.scss';

import { Cart, Header, Home, } from './exp-components';

const App = () => {
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
