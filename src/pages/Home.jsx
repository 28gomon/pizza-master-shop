import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from "../redux/actions/pizzas";

import { Categories, PizzaItem, PizzaLoadingBlock, Sort, } from "../exp-components";

const CATEGORIES = [
	'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',
];
const SORT_ITEMS = [
	{ name: 'популярности', type: 'popular', order: 'desc' },
	{ name: 'цене', type: 'price', order: 'desc' },
	{ name: 'алфавиту', type: 'name', order: 'asc' },
];

const Home = () => {

	const dispatch = useDispatch();
	const items = useSelector(( { pizzas }) => pizzas.items);
	const isLoaded = useSelector(( { pizzas }) => pizzas.isLoaded);
	const { category, sortBy } = useSelector(( { filters }) => filters);

	useEffect(() => {
		// if (!items.length) dispatch(fetchPizzas());
		dispatch(fetchPizzas(sortBy, category));
	}, [category, sortBy]);

	const onSelectCategory = useCallback((index) => {
		dispatch(setCategory(index));
	}, [dispatch]);

	useEffect(() => {
		document.title = 'Лучшая пицца твоего города';
	}, []);

	const onSelectSortType = useCallback((type) => {
		dispatch(setSortBy(type));
	}, [dispatch]);

	return (
		<>
			<div className={ 'top-bar' }>

				<Categories
					activeItemCategory={category}
					onClickCategory={ onSelectCategory }
					items={ CATEGORIES }
				/>

				<Sort
					onClickSortType={ onSelectSortType }
					activeSortType={ sortBy.type }
					items={ SORT_ITEMS }
				/>

			</div>

			<div className={ 'main-title' }>
				<h2>{ category === null ? 'Все пиццы' : CATEGORIES[category] }</h2>
			</div>

			<div className={ 'products__items' }>

				{
					isLoaded ? items.map((obj) => {
						return (
							<PizzaItem
								key={`${obj.id}_${obj.name}`}
								isLoaded={ true }
								{...obj}
							/>
						)
					}) : Array(10)
						.fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)
				}

			</div>
		</>
	)
};

export default Home;