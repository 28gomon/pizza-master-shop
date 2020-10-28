import React from 'react';
import { Button } from './exp-components';

import logo from '../assets/image/logo.png';

const Header = () => {
	return (
		<header className={ 'header' }>
			<div className={ 'header__logo' }>
				<Button href={'/'}>
					<img src={ logo } alt={ 'Logo' }/>
					<p><span>PizzaMaster</span>Лучшая пицца твоего города</p>
				</Button>
			</div>
			<div className={ 'header__cart' }>
				<Button href={'/carts'} className={'btn btn-cart'}>
					<span>45 BYN</span>
					<span>2 <i className="fa fa-shopping-cart"/></span>
				</Button>
			</div>
		</header>
	);
}

export default Header;