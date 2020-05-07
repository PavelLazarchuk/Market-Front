import React from 'react';
// import { connect } from 'react-redux';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import Badge from './Barge';
import Link from 'shared/Link';

const Cart = ({ classes }) => (
	<Badge badgeContent={0} showZero={true} color="secondary">
		<Link to="/order" className={classes.cart}>
			<ShoppingCartOutlinedIcon />
		</Link>
	</Badge>
);

// const mapStateToProps = ({ cart }) => ({
// 	products: cart.products,
// });

export default Cart;
