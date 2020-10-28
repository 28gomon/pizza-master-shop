import React, { useState } from 'react';

const Categories = ( { items, onClickItem } ) => {

	const [activeItem, setActiveItem] = useState(null);

	const handlerOnClickItem = (name, id) => {
		onClickItem(name);
		setActiveItem(id);
	};

	return (
		<div className={ 'categories' }>
			<ul>
				<li
					className={activeItem === null ? 'active' : null}
					onClick={() => setActiveItem(null)}
				>Все</li>
				{
					items && items.map(( name, index ) => {
						return (
							<li
								className={activeItem === index ? 'active' : null}
								onClick={ () => handlerOnClickItem(name, index) }
								key={ `${ name }_${ index }` }
							>{ name }</li>
						)
					})
				}
			</ul>
		</div>
	);
};

export default Categories;