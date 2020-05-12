import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import useStyles from './styles';
import Button from 'shared/Button';
import { addToOrder } from 'store/order/action';

const AddToOrder = ({ absolute, data, addToOrder }) => {
	const classes = useStyles();
	const add = (e) => e.preventDefault();

	return (
		<Button onClick={add} className={`${classes.card} ${absolute && classes.absolute}`}>
			<ShoppingCartIcon size="small" />
		</Button>
	);
};

export default connect(null, { addToOrder })(AddToOrder);
