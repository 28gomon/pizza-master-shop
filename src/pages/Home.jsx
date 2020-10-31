import React, { useCallback, useEffect } from 'react';
import { Categories, PizzaItem, Sort, } from "../exp-components";
import { useDispatch, useSelector } from "react-redux";

import { setCategory } from '../redux/actions/filters';

const CATEGORIES = [
	'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',
];
const SORT_ITEMS = [
	{ name: 'популярности', type: 'popular' },
	{ name: 'цене', type: 'price' },
	{ name: 'алфавиту', type: 'alphabet' },
];

const Home = () => {

	const dispatch = useDispatch();
	const items = useSelector(( { pizzas }) => pizzas.items);

	const onSelectCategory = useCallback((index) => {
		dispatch(setCategory(index));
	}, [dispatch]);

	useEffect(() => {
		document.title = 'Лучшая пицца твоего города';
	}, []);

	return (
		<>
			<div className={ 'top-bar' }>

				<Categories
					onClickItem={ onSelectCategory }
					items={ CATEGORIES }
				/>

				<Sort
					items={ SORT_ITEMS }
				/>

			</div>

			<div className={ 'main-title' }>
				<h2>Все пиццы</h2>
			</div>

			<div className={ 'products__items' }>

				{
					items && items.map((obj) => {
						return (
							<PizzaItem
								key={obj.id}
								{...obj}
							/>
						)
					})
				}


			</div>
		</>
	)
};

export default Home;