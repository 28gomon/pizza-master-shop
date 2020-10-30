import React, { useEffect, useRef, useState } from 'react';

const Sort = React.memo(({ items }) => {

	const sortRef = useRef();
	const [visibleSort, setVisibleSort] = useState(false);
	const [activeItemSort, setActiveItemSort] = useState(0);
	const activeLabelSort = items[activeItemSort].name;

	const handlerOnClickItemSort = (id) => {
		setActiveItemSort(id);
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
										onClick={() => handlerOnClickItemSort(index)}
										className={activeItemSort === index ? 'active' : null}
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

export default Sort;