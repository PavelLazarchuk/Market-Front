import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const StyledButton = ({ children, onClick, className }) => {
	return (
		<Button onClick={onClick} className={className}>
			{children}
		</Button>
	);
};

StyledButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export default StyledButton;
