import React from 'react';
import { Route, Switch } from 'react-router-dom';

import OrderCart from 'components/Order/OrderCart';

const OrderPage = () => (
	<Switch>
		<Route path="/order" component={OrderCart} />
	</Switch>
);

export default OrderPage;
