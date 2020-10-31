import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaLoadingBlock = () => {
	return (
		<ContentLoader
			speed={ 2 }
			width={ 320 }
			height={ 531 }
			viewBox="0 0 320 531"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<circle cx="150" cy="150" r="150"/>
			<rect x="0" y="337" rx="0" ry="0" width="302" height="22"/>
			<rect x="0" y="378" rx="5" ry="5" width="300" height="86"/>
			<rect x="0" y="489" rx="5" ry="5" width="140" height="35"/>
			<rect x="161" y="488" rx="5" ry="5" width="140" height="35"/>
		</ContentLoader>
	)
};

export default PizzaLoadingBlock;