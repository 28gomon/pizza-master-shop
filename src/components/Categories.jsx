import React, { useState } from 'react';

const Categories = React.memo(( { items, onClickItem } ) => {

	const [activeItem, setActiveItem] = useState(null);

	const handlerOnClickItem = (index) => {
		setActiveItem(index);
		onClickItem(index);
	};

	return (
		<div className={ 'categories' }>
			<ul>
				<li
					className={activeItem === null ? 'active' : null}
					onClick={() => handlerOnClickItem(null)}
				>Все</li>
				{
					items && items.map(( name, index ) => {
						return (
							<li
								className={activeItem === index ? 'active' : null}
								onClick={ () => handlerOnClickItem(index) }
								key={ `${ name }_${ index }` }
							>{ name }</li>
						)
					})
				}
			</ul>
		</div>
	);
});

export default Categories;