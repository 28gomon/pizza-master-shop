import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PizzaItem = ({ name, imageUrl, price, types, sizes, }) => {

	const availableSize = [26, 30, 40];
	const availableTypes = ['тонкое', 'традиционное'];

	const [activeType, setActiveType] = useState(types[0]);
	const handlerTypeClick = (index) => setActiveType(index);

	const [activeSize, setActiveSize] = useState(sizes[0]);
	const handlerSizeClick = (index) => {
		setActiveSize(availableSize[index]);
	};

	return (
		<div className={ 'product__item' }>
			<div className={ 'product__img' }>
				<img
					src={imageUrl}
					alt={ name }/>
			</div>
			<h4 className={ 'product__name' }>{ name }</h4>
			<div className={ 'product__selectors' }>
				<ul>
					{
						availableTypes.map((type, index) => {
							return (
								<li
									key={index}
									className={classNames({
										active: activeType === index,
										disabled: !types.includes(index),
									})}
									onClick={() => handlerTypeClick(index)}
								>{ type }</li>
							)
						})
					}
				</ul>
				<ul>
					{
						availableSize.map((size, index) => {
							return (
								<li
									key={index}
									onClick={() => handlerSizeClick(index)}
									className={classNames({
										active: activeSize === availableSize[index],
										disabled: !sizes.includes(availableSize[index]),
									})}
								>{ size } см.</li>
							)
						})
					}
				</ul>
			</div>
			<div className="product__block-bottom">
				<div className="product__price">{ price } BYN</div>
				<div className={ 'btn-add-to-cart' }>
					<button>
						<i className="fa fa-plus"/>
						<span className={ 'btn-title' }>Добавить</span>
						<span className={ 'btn-count' }>2</span>
					</button>
				</div>
			</div>
		</div>
	)
};

PizzaItem.propTypes = {
	name: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	types: PropTypes.arrayOf(PropTypes.number).isRequired,
	sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default PizzaItem;