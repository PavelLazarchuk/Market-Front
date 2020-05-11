import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Subcategory from 'components/Product/Subcategory';
import ProductByFilter from 'components/Product/ProductByFilter';

const ProductPage = () => (
	<Switch>
		<Route path="/product/category/:category" component={Subcategory} />
		<Route path="/product/subcategory/:id" component={ProductByFilter} />
	</Switch>
);

export default ProductPage;
