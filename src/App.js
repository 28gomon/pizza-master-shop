import React from 'react';
import './scss/app.scss';

import { Header, Home, } from './exp-components';

const App = () => {
	return (
		<div className={ 'app' }>

			<div className={ 'wrapper' }>

				<div className={ 'content' }>

					<Header/>

					<Home />

				</div>

			</div>

		</div>
	);
}

export default App;
