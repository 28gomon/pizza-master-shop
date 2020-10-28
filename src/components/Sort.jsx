import React from 'react';

const Sort = () => {
	return (
		<div className={ 'sort' }>
			<div className={ 'sort__label' }>
				<p><i className="fa fa-angle-down"/>Сортировка по:</p>
				<span>популярности</span>
			</div>
			<div className={ 'sort__popup' }>
				<ul>
					<li className={ 'active' }>популярности</li>
					<li>цене</li>
					<li>алфавиту</li>
				</ul>
			</div>
		</div>
	);
};

export default Sort;