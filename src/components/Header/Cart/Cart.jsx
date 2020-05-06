import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Link from 'shared/Link';

const Cart = ({ products }) => (
	<Link to="/order" className="cart">
		{products.length}
		<ShoppingCartIcon />
	</Link>
);

const mapStateToProps = ({ cart }) => ({
	products: cart.products,
});

export default connect(mapStateToProps)(Cart);
