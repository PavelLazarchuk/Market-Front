import React from 'react';
import { connect } from 'react-redux';

import Text from 'shared/Text';
import useStyles from './styles';
import Button from 'shared/Button';
import OrderItem from './OrderItem';
import PageWrap from 'shared/PageWrap';
import { cleanOrder } from 'store/order/action';
import PresentMenu from 'components/Home/PresentMenu';

const OrderCart = ({ list, cleanOrder }) => {
	const classes = useStyles();
	const getTotalPrice = (arr) => arr.reduce((sum, elem) => sum + elem.price * elem.quantity, 0);

	return (
		<PageWrap title="Order list" size="small">
			<div className={classes.flex}>
				{list.length === 0 && (
					<>
						<Text className={classes.err}>Сart is empty</Text>
						<Text className={classes.err}>Start choosing products</Text>
						<PresentMenu />
					</>
				)}

				{list.length > 0 && (
					<>
						{list.map((elem) => (
							<OrderItem key={elem.name} classes={classes} {...elem} />
						))}

						<Text className={classes.total}>Total price: {getTotalPrice(list)} &#8372;</Text>
						<Text className={classes.msg}>
							When order up to 1000 UAH - delivery of 50 UAH by courier in Kiev, and more than 1000
							- delivery is free!
						</Text>
						<div className={classes.btnFlex}>
							<Button className={classes.btn} onClick={cleanOrder}>
								Clean order
							</Button>
							<Button className={classes.btn} onClick={cleanOrder}>
								Make order
							</Button>
						</div>
					</>
				)}
			</div>
		</PageWrap>
	);
};

const mstp = ({ order }) => ({
	list: order.orderList,
});

export default connect(mstp, { cleanOrder })(OrderCart);
