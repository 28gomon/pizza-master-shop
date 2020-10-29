import React, { useEffect, useRef, useState } from 'react';

const Sort = () => {

	const sortRef = useRef();
	const [visibleSort, setVisibleSort] = useState(false);

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
				>популярности</span>
			</div>
			{
				visibleSort && <div className={ 'sort__popup' }>
					<ul>
						<li className={ 'active' }>популярности</li>
						<li>цене</li>
						<li>алфавиту</li>
					</ul>
				</div>
			}
		</div>
	);
};

export default Sort;