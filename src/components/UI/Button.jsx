import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, className, onClick, active, disabled, ...attrs }) => {

	const onClickAction = (e) => {
		if (disabled) {
			e.preventDefault();
		} else {
			return onClick(e);
		}
	};

	const cls = classNames(
		className,
		{ active }
	);

	const Tag = attrs.href ? 'a' : 'button';

	return (
		<Tag
			className={cls}
			disabled={disabled}
			onClick={onClickAction}
			{ ...attrs }
		>
			{ children }
		</Tag>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	onClick: PropTypes.func,
	active: PropTypes.bool,
	disabled: PropTypes.bool,
};

Button.defaultProps = {
	children: 'Button',
	className: '',
	onClick: () => {},
	active: false,
	disabled: false,
};

export default Button;