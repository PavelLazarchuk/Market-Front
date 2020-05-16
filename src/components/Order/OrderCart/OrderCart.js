import React from 'react';
import { connect } from 'react-redux';

import useStyles from './styles';
import PageWrap from 'shared/PageWrap';

const OrderCart = ({ list }) => {
	const classes = useStyles();

	const getPrice = (arr) => {
		return arr.reduce((sum, elem) => sum + elem.price, 0);
	};

	return (
		<PageWrap title="Order list" size="small">
			<div className={classes.flex}>
				{list.length === 0 && <div className={classes.err}>Сart is empty</div>}
				{list.length > 0 &&
					list.map((elem) => (
						<div key={elem.name} className={classes.item}>
							<div>
								<span className={classes.key}>Product name:</span>
								<span className={classes.value}>{elem.name}</span>
							</div>
							<div>
								<span className={classes.key}>Product price:</span>
								<span className={classes.value}>{elem.price}</span>
							</div>
						</div>
					))}
				<div className={classes.total}>Total price: {getPrice(list)}</div>
			</div>
		</PageWrap>
	);
};

const mstp = ({ order }) => ({
	list: order.orderList,
});

export default connect(mstp)(OrderCart);
