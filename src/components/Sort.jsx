import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Sort = React.memo(({ items, onClickSortType, activeSortType }) => {

	const sortRef = useRef();
	const [visibleSort, setVisibleSort] = useState(false);
	const activeLabelSort = items.find(obj => obj.type === activeSortType).name;

	const handlerOnClickItemSort = (type) => {
		onClickSortType(type);
		setVisibleSort(false);
	};

	const toggleVisibleSort = () => {
		setVisibleSort(!visibleSort);
	};

	const handlerOutsideClick = (event) => {
		const path = event.path || (event.composedPath && event.composedPath());
		if (!path.includes(sortRef.current)) {
			setVisibleSort(false);
		}
	};

	useEffect(() => {
		document.body.addEventListener('click', handlerOutsideClick);
	}, []);

	return (
		<div ref={ sortRef } className={ 'sort' }>
			<div className={ 'sort__label' }>
				<p><i className={ `fa fa-angle-${visibleSort ? 'up' : 'down'}` }/>Сортировка по:</p>
				<span
					onClick={toggleVisibleSort}
				>{ activeLabelSort }</span>
			</div>
			{
				visibleSort && <div className={ 'sort__popup' }>
					<ul>
						{
							items && items.map((obj, index) => {
								return (
									<li
										onClick={() => handlerOnClickItemSort(obj)}
										className={activeSortType === obj.type ? 'active' : null}
										key={`${obj.type}_${index}`}
									>{obj.name}</li>
								)
							})
						}
					</ul>
				</div>
			}
		</div>
	);
});

Sort.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	activeSortType: PropTypes.string.isRequired,
	onClickSortType: PropTypes.func,
};

Sort.defaultProps = {
	items: [],
}

export default Sort;