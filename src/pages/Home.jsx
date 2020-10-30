import React from 'react';
import { Categories, PizzaItem, Sort, } from "../exp-components";

const Home = ({ items }) => {

	return (
		<>
			<div className={ 'top-bar' }>

				<Categories
					onClickItem={ ( name ) => {

					} }
					items={ [
						'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',
					] }
				/>

				<Sort
					items={ [
						{ name: 'популярности', type: 'popular' },
						{ name: 'цене', type: 'price' },
						{ name: 'алфавиту', type: 'alphabet' },
					] }
				/>

			</div>

			<div className={ 'main-title' }>
				<h2>Все пиццы</h2>
			</div>

			<div className={ 'products__items' }>

				{
					items.map((obj) => {
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