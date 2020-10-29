import React from 'react';
import { NavLink } from "react-router-dom";

import logo from '../assets/image/logo.png';

const Header = () => {
	return (
		<header className={ 'header' }>
			<div className={ 'header__logo' }>
				<NavLink to={'/'}>
					<img src={ logo } alt={ 'Logo' }/>
					<p><span>PizzaMaster</span>Лучшая пицца твоего города</p>
				</NavLink>
			</div>
			<div className={ 'header__cart' }>
				<NavLink to={'/cart'} className={'btn btn-cart'}>
					<span>45 BYN</span>
					<span>2 <i className="fa fa-shopping-cart"/></span>
				</NavLink>
			</div>
		</header>
	);
}

export default Header;