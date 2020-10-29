import React from 'react';
import './scss/app.scss';
import { Switch, Route } from 'react-router-dom';

import { Cart, Header, Home, } from './exp-components';

const App = () => {
	return (
		<div className={ 'app' }>

			<div className={ 'wrapper' }>

				<div className={ 'content' }>

					<Header/>

					<Switch>
						<Route exact path={'/'} render={() => <Home/>}/>
						<Route exact path={'/cart'} render={() => <Cart/>} />
					</Switch>

				</div>

			</div>

		</div>
	);
}

export default App;
