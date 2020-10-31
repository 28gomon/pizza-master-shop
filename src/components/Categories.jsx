import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(( { items, activeItemCategory, onClickCategory } ) => {
	return (
		<div className={ 'categories' }>
			<ul>
				<li
					className={activeItemCategory === null ? 'active' : null}
					onClick={() => onClickCategory(null)}
				>Все</li>
				{
					items && items.map(( name, index ) => {
						return (
							<li
								className={activeItemCategory === index ? 'active' : null}
								onClick={ () => onClickCategory(index) }
								key={ `${ name }_${ index }` }
							>{ name }</li>
						)
					})
				}
			</ul>
		</div>
	);
});

Categories.propsTypes = {
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
	activeItemCategory: PropTypes.oneOf([PropTypes.number, null]).isRequired,
	onClickCategory: PropTypes.func,
};
Categories.defaultProps = {
	items: [],
	activeItemCategory: null,
	onClickCategory: () => {},
};

export default Categories;