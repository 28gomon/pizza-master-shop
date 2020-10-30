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
					items={['популярности', 'цене', 'алфавиту']}
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