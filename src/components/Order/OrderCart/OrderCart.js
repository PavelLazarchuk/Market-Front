import React from 'react';
import { connect } from 'react-redux';

const OrderCart = ({ list }) => {
	return (
		<div>
			<div>OrderCart</div>
		</div>
	);
};

const mstp = ({ order }) => ({
	list: order.orderList,
});

export default connect(mstp)(OrderCart);
